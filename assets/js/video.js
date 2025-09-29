// Video functionality

// Video data
const videoData = {
    "featured-video": {
      title: "Membangun REST API dengan Node.js dan Express - Complete Guide",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
    "react-hooks": {
      title: "React Hooks: useState dan useEffect untuk Pemula",
      embedId: "dQw4w9WgXcQ",
    },
    "css-grid": {
      title: "Mastering CSS Grid: Layout Modern untuk Web",
      embedId: "dQw4w9WgXcQ",
    },
    "async-await": {
      title: "JavaScript Async/Await: Mengatasi Callback Hell",
      embedId: "dQw4w9WgXcQ",
    },
    "git-workflow": {
      title: "Git Workflow untuk Tim Developer",
      embedId: "dQw4w9WgXcQ",
    },
    "database-design": {
      title: "Database Design: Dari ERD hingga Implementation",
      embedId: "dQw4w9WgXcQ",
    },
    deployment: {
      title: "Deploy Aplikasi ke Production: Complete Guide",
      embedId: "dQw4w9WgXcQ",
    },
  }
  
  // Play video function
  function playVideo(videoId) {
    const modal = document.getElementById("video-modal")
    const container = document.getElementById("video-container")
    const video = videoData[videoId]
  
    if (video) {
      // Create YouTube embed
      container.innerHTML = `
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/${video.embedId}?autoplay=1" 
                  title="${video.title}"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
              </iframe>
          `
  
      modal.classList.remove("hidden")
      modal.classList.add("flex")
      document.body.style.overflow = "hidden"
    }
  }
  
  // Close video modal
  function closeVideoModal() {
    const modal = document.getElementById("video-modal")
    const container = document.getElementById("video-container")
  
    modal.classList.add("hidden")
    modal.classList.remove("flex")
    container.innerHTML = ""
    document.body.style.overflow = "auto"
  }
  
  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("video-modal")
    if (e.target === modal) {
      closeVideoModal()
    }
  })
  
  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal()
    }
  })
  