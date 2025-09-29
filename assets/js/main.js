// Professional Portfolio JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initializeLoading()
    initializeNavigation()
    initializeLazyLoading()
    initializeAnimations()
    initializeProgressBar()
    initializeBackToTop()
    initializeSmoothScroll()
  })
  
  // Loading Screen
  function initializeLoading() {
    const loadingScreen = document.getElementById("loading-screen")
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        loadingScreen.classList.add("fade-out")
        setTimeout(() => {
          loadingScreen.style.display = "none"
        }, 500)
      }, 1000)
    })
  }
  
  // Navigation
  function initializeNavigation() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    const mobileMenu = document.getElementById("mobile-menu")
    const navLinks = document.querySelectorAll(".nav-link")
  
    // Mobile menu toggle
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.toggle("fa-bars")
      icon.classList.toggle("fa-times")
    })
  
    // Close mobile menu when clicking on links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-times")
      })
    })
  
    // Active navigation highlighting
    window.addEventListener("scroll", () => {
      let current = ""
      const sections = document.querySelectorAll("section[id]")
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    })
  }
  
  // Lazy Loading
  function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll(".lazy-load")
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.classList.add("loaded")
          observer.unobserve(img)
        }
      })
    })
  
    lazyImages.forEach((img) => imageObserver.observe(img))
  }
  
  // Scroll Animations
  function initializeAnimations() {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )
  
    animatedElements.forEach((el) => animationObserver.observe(el))
  }
  
  // Progress Bar
  function initializeProgressBar() {
    const progressBar = document.createElement("div")
    progressBar.className = "progress-bar"
    document.body.appendChild(progressBar)
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      progressBar.style.width = scrollPercent + "%"
    })
  }
  
  // Back to Top Button
  function initializeBackToTop() {
    const backToTopBtn = document.createElement("button")
    backToTopBtn.className = "back-to-top"
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
    backToTopBtn.setAttribute("aria-label", "Back to top")
    document.body.appendChild(backToTopBtn)
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible")
      } else {
        backToTopBtn.classList.remove("visible")
      }
    })
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
  
  // Smooth Scroll
  function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]')
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      })
    })
  }
  
  // Utility Functions
  const Swal = window.Swal // Declare the Swal variable here
  function showNotification(message, type = "success") {
    Swal.fire({
      title: type === "success" ? "Berhasil!" : "Error!",
      text: message,
      icon: type,
      timer: 3000,
      showConfirmButton: false,
      background: "#1e293b",
      color: "#f8fafc",
      customClass: {
        popup: "border border-gray-600",
      },
    })
  }
  
  // Contact Form Handler (will be implemented in contact section)
  function handleContactForm(formData) {
    // This will be implemented when we add the contact form
    console.log("Contact form submitted:", formData)
  }
  
  // Theme Toggle (optional feature)
  function toggleTheme() {
    document.documentElement.classList.toggle("light-theme")
    localStorage.setItem("theme", document.documentElement.classList.contains("light-theme") ? "light" : "dark")
  }
  
  // Initialize theme from localStorage
  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-theme")
    }
  }
  
  // Performance optimization
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  // Optimized scroll handler
  const optimizedScrollHandler = debounce(() => {
    // Handle scroll events here
  }, 10)
  
  window.addEventListener("scroll", optimizedScrollHandler)
  