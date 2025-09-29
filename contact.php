<?php
// Contact form handler with PHPMailer

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Include PHPMailer
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Configuration
$config = [
    'smtp_host' => 'smtp.gmail.com', // Change to your SMTP host
    'smtp_port' => 587,
    'smtp_username' => 'your-email@gmail.com', // Change to your email
    'smtp_password' => 'your-app-password', // Change to your app password
    'from_email' => 'your-email@gmail.com',
    'from_name' => 'DevPortfolio Contact Form',
    'to_email' => 'hello@devportfolio.com', // Change to your receiving email
    'to_name' => 'DevPortfolio'
];

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate input
    if (!$input || !isset($input['name'], $input['email'], $input['subject'], $input['message'])) {
        throw new Exception('Missing required fields');
    }
    
    // Sanitize input
    $name = htmlspecialchars(trim($input['name']));
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars(trim($input['subject']));
    $message = htmlspecialchars(trim($input['message']));
    
    // Validate email
    if (!$email) {
        throw new Exception('Invalid email address');
    }
    
    // Validate required fields
    if (empty($name) || empty($subject) || empty($message)) {
        throw new Exception('All fields are required');
    }
    
    // Create PHPMailer instance
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];
    
    // Recipients
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo($email, $name);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Portfolio Contact: ' . $subject;
    
    // Email template
    $emailBody = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f8fafc; }
            .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
            .info-row { margin: 10px 0; }
            .label { font-weight: bold; color: #3b82f6; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='info-row'>
                    <span class='label'>Name:</span> {$name}
                </div>
                <div class='info-row'>
                    <span class='label'>Email:</span> {$email}
                </div>
                <div class='info-row'>
                    <span class='label'>Subject:</span> {$subject}
                </div>
                <div class='info-row'>
                    <span class='label'>Message:</span>
                </div>
                <div style='background: white; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px;'>
                    " . nl2br($message) . "
                </div>
            </div>
            <div class='footer'>
                <p>This message was sent from your portfolio contact form.</p>
                <p>Sent on: " . date('Y-m-d H:i:s') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $emailBody;
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\nMessage: {$message}";
    
    // Send email
    $mail->send();
    
    // Log successful submission (optional)
    error_log("Contact form submission from: {$email} - Subject: {$subject}");
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully'
    ]);
    
} catch (Exception $e) {
    // Log error
    error_log("Contact form error: " . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message: ' . $e->getMessage()
    ]);
}
?>
