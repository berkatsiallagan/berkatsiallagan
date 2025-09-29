// Portfolio functionality

document.addEventListener("DOMContentLoaded", () => {
    initializePortfolioFilter()
    initializeProjectModals()
  })
  
  // Portfolio Filter
  function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const portfolioItems = document.querySelectorAll(".portfolio-item")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter")
  
        // Update active button
        filterButtons.forEach((btn) => {
          btn.classList.remove("active", "bg-accent", "text-white")
          btn.classList.add("bg-secondary/50", "text-muted")
        })
  
        this.classList.add("active", "bg-accent", "text-white")
        this.classList.remove("bg-secondary/50", "text-muted")
  
        // Filter portfolio items
        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category")
  
          if (filter === "all" || category === filter) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "translateY(20px)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
  
  // Project Modals
  function initializeProjectModals() {
    // Project data
    window.projectData = {
      ecommerce: {
        title: "E-Commerce Platform",
        description: "Platform e-commerce modern dengan fitur lengkap yang mendukung berbagai jenis bisnis online.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/e-commerce-platform-dashboard-overview.jpg" alt="E-Commerce Platform" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Multi-vendor marketplace dengan dashboard terpisah</li>
                              <li>Payment gateway terintegrasi (Stripe, PayPal, Midtrans)</li>
                              <li>Inventory management system yang comprehensive</li>
                              <li>Real-time order tracking dan notifications</li>
                              <li>Advanced analytics dan reporting</li>
                              <li>Mobile-responsive design dengan PWA support</li>
                          </ul>
                      </div>
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Teknologi yang Digunakan:</h4>
                          <div class="grid grid-cols-2 gap-4">
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Frontend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>React.js dengan TypeScript</li>
                                      <li>Redux Toolkit untuk state management</li>
                                      <li>Tailwind CSS untuk styling</li>
                                      <li>React Query untuk data fetching</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Backend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>Node.js dengan Express.js</li>
                                      <li>MongoDB dengan Mongoose ODM</li>
                                      <li>JWT untuk authentication</li>
                                      <li>Socket.io untuk real-time features</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        year: "2024",
      },
      fitness: {
        title: "Fitness Tracking App",
        description: "Aplikasi mobile untuk tracking workout, nutrition, dan progress fitness dengan AI recommendations.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/fitness-app-mobile-interface-screens.jpg" alt="Fitness App" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Workout tracking dengan timer dan rest periods</li>
                              <li>Nutrition logging dengan barcode scanner</li>
                              <li>AI-powered workout recommendations</li>
                              <li>Progress tracking dengan detailed analytics</li>
                              <li>Social features untuk motivation</li>
                              <li>Wearable device integration</li>
                          </ul>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-mobile-alt mr-2"></i>App Store
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["React Native", "Firebase", "TensorFlow"],
        year: "2024",
      },
      lms: {
        title: "Learning Management System",
        description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/lms-dashboard.png" alt="LMS Platform" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Video streaming dengan adaptive bitrate</li>
                              <li>Interactive quizzes dan assignments</li>
                              <li>Discussion forums dan live chat</li>
                              <li>Certificate generation system</li>
                              <li>Advanced analytics untuk instructors</li>
                              <li>Mobile app untuk iOS dan Android</li>
                          </ul>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["Vue.js", "Laravel", "MySQL"],
        year: "2023",
      },
      banking: {
        title: "Banking App UI Design",
        description:
          "Desain UI/UX untuk aplikasi banking dengan fokus pada security, accessibility, dan user experience.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/banking-app-ui-design-screens.jpg" alt="Banking App Design" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Design Process:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>User research dan competitive analysis</li>
                              <li>Information architecture dan user flows</li>
                              <li>Wireframing dan prototyping</li>
                              <li>Visual design dengan design system</li>
                              <li>Usability testing dan iterations</li>
                              <li>Accessibility compliance (WCAG 2.1)</li>
                          </ul>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-figma mr-2"></i>Figma Prototype
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-file-pdf mr-2"></i>Case Study
                          </a>
                      </div>
                  </div>
              `,
        tech: ["Figma", "Prototyping", "User Research"],
        year: "2024",
      },
      microservices: {
        title: "Microservices API Platform",
        description:
          "Arsitektur microservices dengan API Gateway, authentication service, dan comprehensive documentation.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/microservices-architecture.png" alt="Microservices Architecture" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Architecture Components:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>API Gateway dengan rate limiting dan caching</li>
                              <li>Authentication & Authorization service</li>
                              <li>User management microservice</li>
                              <li>Notification service dengan multiple channels</li>
                              <li>File storage service dengan CDN integration</li>
                              <li>Comprehensive API documentation</li>
                          </ul>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-book mr-2"></i>API Docs
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["Node.js", "Docker", "PostgreSQL", "Redis"],
        year: "2023",
      },
      property: {
        title: "Property Management System",
        description: "Sistem manajemen properti dengan fitur listing, virtual tour, dan CRM terintegrasi.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="/property-management-dashboard.png" alt="Property Management System" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Property listing dengan advanced search</li>
                              <li>Virtual tour integration dengan 360° photos</li>
                              <li>CRM system untuk lead management</li>
                              <li>Document management dan e-signatures</li>
                              <li>Financial reporting dan analytics</li>
                              <li>Mobile app untuk field agents</li>
                          </ul>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="#" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                          </a>
                          <a href="#" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["Next.js", "Python", "PostgreSQL"],
        year: "2023",
      },
    }
  }
  
  // Open project modal
  function openProjectModal(projectId) {
    const modal = document.getElementById("project-modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")
  
    const project = window.projectData[projectId]
  
    if (project) {
      modalTitle.textContent = project.title
      modalContent.innerHTML = project.fullDescription
      modal.classList.remove("hidden")
      modal.classList.add("flex")
      document.body.style.overflow = "hidden"
    }
  }
  
  // Close project modal
  function closeProjectModal() {
    const modal = document.getElementById("project-modal")
    modal.classList.add("hidden")
    modal.classList.remove("flex")
    document.body.style.overflow = "auto"
  }
  
  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("project-modal")
    if (e.target === modal) {
      closeProjectModal()
    }
  })
  
  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal()
    }
  })
  