// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Toggle icon
    const icon = mobileMenuBtn.querySelector("i")
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileNav.querySelectorAll("a")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
      mobileNav.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".card, .section-header, .hero-text, .hero-image")

  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('.nav a[href^="#"]')

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    const headerHeight = document.querySelector(".header").offsetHeight

    if (window.scrollY >= sectionTop - headerHeight - 100) {
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

// Add active link styles
const style = document.createElement("style")
style.textContent = `
    .nav a.active {
        color: #2563eb;
        font-weight: 600;
    }
`
document.head.appendChild(style)

// Button click handlers
document.addEventListener("DOMContentLoaded", () => {
  // CV download button
  const cvButtons = document.querySelectorAll(".btn:has(.fa-download)")
  cvButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Simulate CV download
      alert("Funcionalidad de descarga de CV - Aquí se implementaría la descarga del archivo PDF")
    })
  })

  // Contact buttons
  const contactButtons = document.querySelectorAll(".btn:has(.fa-envelope)")
  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Open email client
      window.location.href = "mailto:hector.perez@uaslp.mx?subject=Consulta desde portafolio web"
    })
  })

  // LinkedIn button
  const linkedinButtons = document.querySelectorAll(".btn:has(.fa-linkedin)")
  linkedinButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Open LinkedIn profile (replace with actual URL)
      window.open("https://linkedin.com/in/hector-perez-gonzalez", "_blank")
    })
  })

  // YouTube button
  const youtubeButtons = document.querySelectorAll(".btn:has(.fa-external-link-alt)")
  youtubeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Open YouTube channel (replace with actual URL)
      window.open("https://youtube.com/@hectorperezgonzalez", "_blank")
    })
  })
})

// Typing animation for hero title
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h1")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""
    heroTitle.style.borderRight = "2px solid #2563eb"

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = "none"
        }, 1000)
      }
    }

    // Start typing animation after a delay
    setTimeout(typeWriter, 1000)
  }
})

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target + "+"
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start) + "+"
    }
  }, 16)
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".stat-number")
        counters.forEach((counter) => {
          const target = Number.parseInt(counter.textContent)
          animateCounter(counter, target)
        })
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section")
  if (statsSection) {
    statsObserver.observe(statsSection)
  }
})

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".image-bg")
  if (heroImage) {
    heroImage.style.transform = `scale(1.1) translateY(${scrolled * 0.1}px)`
  }
})

// Add loading animation
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  window.addEventListener("load", () => {
    document.body.style.opacity = "1"
  })
})
