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
      apprim: {
        title: "Peminjaman Ruang Meeting",
        description: "Aplikasi Pengelolaan Peminjaman Ruang Meeting adalah platform digital yang dirancang untuk memfasilitasi proses pemesanan, pengelolaan, dan pemantauan penggunaan ruang meeting di suatu organisasi atau gedung perkantoran. Aplikasi ini bertujuan untuk meningkatkan efisiensi dalam pengelolaan ruang meeting, mengurangi konflik jadwal, dan memastikan penggunaan ruang yang optimal.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="assets/images/portfolio/apprim.jpg" alt="APPRIM" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Daftar Ruang Meeting</li>
                              <li>Pemesanan Ruang</li>
                              <li>Kalender dan Jam</li>
                              <li>Rincian Ruangan</li>
                              <li>Notifikasi Pengingat</li>
                              <li>Rating Ruangan</li>
                          </ul>
                      </div>
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Teknologi yang Digunakan:</h4>
                          <div class="grid grid-cols-2 gap-4">
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Frontend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>HTML untuk kerangka</li>
                                      <li>CSS untuk desain</li>
                                      <li>Bootstrap untuk template desain</li>
                                      <li>Javascript untuk logika</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Backend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>MySQL</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      
                      <div class="flex space-x-4">
                          <a href="https://pbl.polibatam.ac.id/pamerin/detail.php?title=aplikasi-pengelolaan-peminjaman-ruang-meeting&id=MjU2NA==&ta=NQ==&id_tim=MjgwNQ==" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-external-link-alt mr-2"></i>Dokumentasi
                          </a>
                      </div>
                  </div>
              `,
        tech: ["HTML", "CSS", "Javascript", "MySQL"],
        year: "Des 2024",
      },
      password_generator: {
        title: "Password Generator",
        description: "Aplikasi web untuk membuat dan mengelola password secara aman. Pengguna dapat menghasilkan password dengan berbagai opsi karakter, mengecek kekuatannya, serta menyimpan riwayat password. Dilengkapi fitur mode gelap, QR Code & Barcode generator, serta ikon dari Font Awesome. Dibangun dengan HTML, CSS, JavaScript, dan Bootstrap.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="assets/images/portfolio/password-generator.png" alt="Password Generator" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Generate Password Kuat</li>
                              <li>Cek Kekuatan Password</li>
                              <li>QR Code Generator</li>
                              <li>Barcode Generator</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="text-lg font-semibold mb-3">Teknologi yang Digunakan:</h4>
                          <div class="grid grid-cols-2 gap-4">
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Frontend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>HTML CSS JS</li>
                                      <li>Bootstrap5 tampilan responsif</li>
                                      <li>zxcvbn.js analisis kekuatan password</li>
                                      <li>JsBarcode membuat barcode dari password</li>
                                      <li>QRCode Generator membuat QR Code dari password</li>
                                      <li>Font Awesome membuat Ikon</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Backend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>-</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="flex space-x-4">
                          <a href="https://berkatsiallagan.github.io/password-generator/" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-mobile-alt mr-2"></i>Coba Aplikasi
                          </a>
                          <a href="https://github.com/berkatsiallagan/password-generator" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["HTML-CSS-JS", "Bootstrap", "Font Awesome"],
        year: "2024",
      },
      jadwal_kuliah: {
        title: "Cetak Jadwal Kuliah",
        description: "Aplikasi web untuk mengelola jadwal mata kuliah secara interaktif. Pengguna dapat dengan mudah menambah, menghapus, dan mengunduh jadwal dalam format gambar. Aplikasi ini juga dilengkapi dengan fitur pemilihan status online atau offline, serta input lokasi jika memilih offline.lalu dicetak menjadi PDF",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="assets/images/portfolio/jadwal-kuliah.png" alt="Jadwal kuliah" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Tambah Jadwal</li>
                              <li>Pengelolaan Status</li>
                              <li>Unduh Jadwal</li>
                              <li>Hapus Jadwal</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="text-lg font-semibold mb-3">Teknologi yang Digunakan:</h4>
                          <div class="grid grid-cols-2 gap-4">
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Frontend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>HTML5</li>
                                      <li>CSS3</li>
                                      <li>JavaScript</li>
                                      <li>SweetAlert2</li>
                                      <li>html2canvas</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Backend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>-</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="flex space-x-4">
                          <a href="https://berkatsiallagan.github.io/jadwal-kuliah/" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-mobile-alt mr-2"></i>Coba Aplikasi
                          </a>
                          <a href="https://github.com/berkatsiallagan/jadwal-kuliah" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["HTML5", "CSS3", "JavaScript", "SweetAlert2", "html2canvas"],
        year: "Mar 2025",
      },
      futuremail: {
        title: "FutureMail",
        description: "FutureMail adalah layanan yang memungkinkan kamu mengirim pesan ke masa depan, baik untuk diri sendiri maupun orang lain. Dengan sistem terjadwal, pesan akan dikirim otomatis pada waktu yang telah ditentukan. Cocok untuk menyimpan kenangan, mengirim ucapan ulang tahun, atau menyampaikan pesan penting di kemudian hari.",
        fullDescription: `
                  <div class="space-y-6">
                      <img src="assets/images/portfolio/futuremail.png" alt="FutureMail" class="w-full rounded-lg">
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-3">Fitur Utama:</h4>
                          <ul class="list-disc list-inside space-y-2 text-muted">
                              <li>Pesan Masa Depan</li>
                              <li>Pesan Ulang Tahun</li>
                              <li>Pesan untuk Seseorang</li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="text-lg font-semibold mb-3">Teknologi yang Digunakan:</h4>
                          <div class="grid grid-cols-2 gap-4">
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Frontend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>HTML5</li>
                                      <li>CSS3</li>
                                      <li>JavaScript</li>
                                      <li>Bootstrap 5</li>
                                      <li>PHP</li>
                                      <li>PHPMailer</li>
                                      <li>SweetAlert2</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-accent mb-2">Backend:</h5>
                                  <ul class="text-sm text-muted space-y-1">
                                      <li>MySQL</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="flex space-x-4">
                          <a href="https://futuremail.ct.ws" class="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fas fa-mobile-alt mr-2"></i>Coba Aplikasi
                          </a>
                          <a href="https://github.com/berkatsiallagan/futuremail" class="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded-lg transition-colors">
                              <i class="fab fa-github mr-2"></i>Source Code
                          </a>
                      </div>
                  </div>
              `,
        tech: ["HTML5", "CSS3", "JavaScript","Bootstrap5", "PHP","PHPMailer","MySQL","SweetAlert2"],
        year: "Mar 2025",
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
  