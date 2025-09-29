// Contact form functionality
const Swal = window.Swal // Declare the Swal variable

document.addEventListener("DOMContentLoaded", () => {
  initializeContactForm()
})

function initializeContactForm() {
  const form = document.getElementById("contact-form")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const submitBtn = form.querySelector('button[type="submit"]')
    const submitText = document.getElementById("submit-text")
    const submitIcon = document.getElementById("submit-icon")
    const submitLoading = document.getElementById("submit-loading")

    // Show loading state
    submitText.textContent = "Mengirim..."
    submitIcon.classList.add("hidden")
    submitLoading.classList.remove("hidden")
    submitBtn.disabled = true

    // Get form data
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      // Send to PHP backend
      const response = await fetch("contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        // Success notification
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah terkirim. Saya akan membalas dalam 24 jam.",
          icon: "success",
          timer: 5000,
          showConfirmButton: false,
          background: "#1e293b",
          color: "#f8fafc",
          customClass: {
            popup: "border border-gray-600",
          },
        })

        // Reset form
        form.reset()
      } else {
        throw new Error(result.message || "Gagal mengirim pesan")
      }
    } catch (error) {
      // Error notification
      Swal.fire({
        title: "Error!",
        text: "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.",
        icon: "error",
        timer: 5000,
        showConfirmButton: false,
        background: "#1e293b",
        color: "#f8fafc",
        customClass: {
          popup: "border border-gray-600",
        },
      })
    } finally {
      // Reset button state
      submitText.textContent = "Kirim Pesan"
      submitIcon.classList.remove("hidden")
      submitLoading.classList.add("hidden")
      submitBtn.disabled = false
    }
  })
}
