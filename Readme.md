# 🚀 Professional Programming Portfolio

A modern, responsive portfolio website showcasing programming projects, blog posts, and video content. Built with clean HTML, CSS, and JavaScript for optimal performance and GitHub Pages compatibility.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme** with professional blue accents
- **Fully Responsive** design for all devices (mobile, tablet, desktop, TV)
- **Smooth Animations** and transitions
- **Clean Typography** using Inter and JetBrains Mono fonts
- **Professional Layout** with header, sidebar, main content, and footer

### 📱 Core Sections
- **Homepage** - Hero section with introduction and skills overview
- **Portfolio** - Interactive project gallery with filtering and detailed modals
- **Blog** - Article system with featured posts and categories
- **Videos** - YouTube integration with modal video player
- **Contact** - Professional contact form with email integration

### ⚡ Technical Features
- **Clean URLs** - No .html extensions in URLs
- **Lazy Loading** - Optimized image loading for better performance
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Email Integration** - PHPMailer for contact form functionality
- **Error Handling** - Custom 404 page and form validation
- **Loading States** - Smooth loading animations and progress indicators

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Font Awesome
- **Notifications**: SweetAlert2
- **Email**: PHPMailer
- **Server**: Apache (.htaccess configuration)

## 📁 Project Structure

\`\`\`
portfolio-website/
├── index.html              # Main homepage
├── blog/
│   └── index.html          # Blog section
├── videos/
│   └── index.html          # Video gallery
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Core JavaScript
│   │   ├── portfolio.js    # Portfolio functionality
│   │   ├── video.js        # Video player logic
│   │   └── contact.js      # Contact form handling
│   └── images/             # Image assets
├── public/                 # Project screenshots and media
├── contact.php             # PHP email handler
├── composer.json           # PHP dependencies
├── .htaccess              # Apache configuration
├── 404.html               # Custom error page
└── README.md              # Project documentation
\`\`\`

## 🚀 Quick Start

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

### 2. Local Development
For local development, you can use any local server:

**Using Python:**
\`\`\`bash
python -m http.server 8000
\`\`\`

**Using Node.js (http-server):**
\`\`\`bash
npx http-server
\`\`\`

**Using PHP:**
\`\`\`bash
php -S localhost:8000
\`\`\`

### 3. Contact Form Setup (Optional)
If you want the contact form to work:

1. Install PHP dependencies:
\`\`\`bash
composer install
\`\`\`

2. Configure email settings in `contact.php`:
\`\`\`php
$mail->Host = 'your-smtp-server.com';
$mail->Username = 'your-email@domain.com';
$mail->Password = 'your-app-password';
\`\`\`

## 🌐 Deployment

### GitHub Pages Deployment
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 🎯 Customization

### Adding New Projects
Edit the projects array in `assets/js/portfolio.js`:
\`\`\`javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",
        category: "web-app",
        image: "path/to/image.jpg",
        description: "Project description",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://demo-link.com",
        githubUrl: "https://github.com/user/repo"
    }
];
\`\`\`

### Updating Personal Information
- Edit contact details in `index.html`
- Update social media links in the footer
- Modify the about section content
- Change profile images in the `assets/images/` directory

### Styling Customization
- Main colors are defined in CSS custom properties in `assets/css/style.css`
- Responsive breakpoints follow Tailwind CSS standards
- Typography settings can be adjusted in the CSS file

## 📊 Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Assets**: Compressed images and minified code
- **Caching**: Browser caching configured via .htaccess
- **SEO**: Structured data and meta tags for search engines

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: your.email@domain.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)
- **Website**: [Your Portfolio Website](https://yourusername.github.io/portfolio-website)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [SweetAlert2](https://sweetalert2.github.io/) for elegant alerts
- [PHPMailer](https://github.com/PHPMailer/PHPMailer) for email functionality

---

⭐ **Star this repository if you found it helpful!**
