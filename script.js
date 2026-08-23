/* ==========================================================================
   INSTAGRAM BIO LINK-IN-BIO & DEVELOPER HUB - JAVASCRIPT
   Author: Priyanshu Kumar (GitHub: Priyanshu-kumar-maurya)
   All Projects Synchronized with official GitHub Repositories & Real Live URLs
   ========================================================================== */

// --- 100% Official Projects Directly from github.com/Priyanshu-kumar-maurya ---
const projectsData = [
  {
    id: "typing-fighter-game",
    title: "Typing Fighter Game",
    category: "games",
    categoryLabel: "Game / Arcade",
    icon: "🥊",
    desc: "Fast-paced arcade speed typing combat game with combos, power-ups, retro audio, and PWA support.",
    longDesc: "An adrenaline-fueled typing battle game where words typed unleash fighting combos and counter-attacks. Features smooth canvas animations, score multipliers, difficulty curves, and installable PWA support.",
    tags: ["JavaScript", "HTML5 Canvas", "PWA", "Game Dev", "Audio API"],
    liveDemo: "https://typing-fighter-game.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/typing-fighter-game",
    featured: true
  },
  {
    id: "companion-app",
    title: "Companion App",
    category: "fullstack",
    categoryLabel: "Full-Stack App",
    icon: "🤝",
    desc: "Full-stack companion booking platform featuring real-time interactive chat, profile management, and seamless booking experience.",
    longDesc: "A complete end-to-end full-stack web application designed for booking companion services. Features real-time messaging, secure user authentication, interactive dashboards, and responsive modern UI.",
    tags: ["JavaScript", "Node.js", "Real-Time Chat", "Full-Stack", "Auth"],
    liveDemo: "https://coffeely-app.vercel.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/companion-app",
    featured: true
  },
  {
    id: "event-planning-system",
    title: "Event Planning System",
    category: "fullstack",
    categoryLabel: "Full-Stack System",
    icon: "🎉",
    desc: "Comprehensive event planning platform with booking management, scheduling, vendor coordination, and dashboard.",
    longDesc: "Full-scale event planning web application with role-based dashboard, package selector, booking scheduler, and live event management tools.",
    tags: ["JavaScript", "Node.js", "Express", "Full-Stack", "Event Tech"],
    liveDemo: "https://event-planning-system-topaz.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Event-Planning-System-",
    featured: true
  },
  {
    id: "hotel-qr-project",
    title: "Hotel QR Ordering System",
    category: "fullstack",
    categoryLabel: "Smart Ordering",
    icon: "🏨",
    desc: "Contactless QR code food & dining ordering system for restaurants and hotels with live digital menu.",
    longDesc: "Smart QR based contactless ordering system where guests scan table QR codes to browse live interactive menus, customize food items, and place direct orders.",
    tags: ["JavaScript", "Node.js", "QR Tech", "Restaurant System", "REST API"],
    liveDemo: "https://hotel-qr-project.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Hotel-QR-Project",
    featured: true
  },
  {
    id: "cockroach-mutual-aid",
    title: "Mutual Aid Platform",
    category: "fullstack",
    categoryLabel: "Community Portal",
    icon: "📋",
    desc: "Hyperlocal community mutual aid support & resource distribution board for rapid assistance.",
    longDesc: "Modern community support web app where users can broadcast assistance requests, offer local aid, filter by urgency/location, and connect directly with community helpers in real-time.",
    tags: ["JavaScript", "Full-Stack", "Community Tech", "REST API"],
    liveDemo: "https://cockroach-mutual-aid.vercel.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/cockroach-mutual-aid",
    featured: false
  },
  {
    id: "public-bulletin-news",
    title: "Public Bulletin News",
    category: "fullstack",
    categoryLabel: "News / Bulletin",
    icon: "📰",
    desc: "Public bulletin announcement platform for broadcasting verified community notices and news updates.",
    longDesc: "A responsive public bulletin news portal featuring categorized notice broadcasting, real-time article publishing, and user engagement tools.",
    tags: ["JavaScript", "Full-Stack", "News Platform", "Netlify"],
    liveDemo: "https://public-bulletin.netlify.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/public-bulletin-news",
    featured: false
  },
  {
    id: "bpo-bakaiti-hub",
    title: "BPO Community Hub",
    category: "fullstack",
    categoryLabel: "Web Platform",
    icon: "💬",
    desc: "Interactive discussion & community hub web platform with lively threads and messaging.",
    longDesc: "A dedicated community discussion forum and entertainment hub built for professionals with topic channels, real-time comments, and responsive UI.",
    tags: ["JavaScript", "Full-Stack", "Render", "Interactive UI"],
    liveDemo: "https://bpo-bakaiti-hub.onrender.com",
    github: "https://github.com/Priyanshu-kumar-maurya/bpo-bakaiti-hub",
    featured: false
  },
  {
    id: "library-project",
    title: "Library Management System",
    category: "fullstack",
    categoryLabel: "Management Portal",
    icon: "📚",
    desc: "Role-based Library System with Admin & Student authentication, book inventory, reservations and analytics.",
    longDesc: "A robust management web portal supporting dual role workflows (Librarian/Admin and Students). Features book cataloging, instant issue/return tracking, and user login.",
    tags: ["HTML5", "JavaScript", "Auth System", "Management Portal"],
    liveDemo: "https://library-m.vercel.app/login.html",
    github: "https://github.com/Priyanshu-kumar-maurya/library-project",
    featured: true
  },
  {
    id: "jp-library",
    title: "JP Library Showcase",
    category: "showcase",
    categoryLabel: "Digital Catalog",
    icon: "📖",
    desc: "Interactive digital book catalog and library showcase interface with rich UI card styling.",
    longDesc: "An aesthetically pleasing digital library showcase featuring book carousels, genre filtering, and modern responsive CSS layout.",
    tags: ["HTML5", "CSS3", "Vercel", "Digital Library"],
    liveDemo: "https://jp-library.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Jp-Library",
    featured: false
  },
  {
    id: "bmw-shop",
    title: "BMW Luxury Auto Showcase",
    category: "ecommerce",
    categoryLabel: "Automotive / Store",
    icon: "🚗",
    desc: "High-end luxury automobile presentation with interactive model specs, aerodynamic styling, and dark theme.",
    longDesc: "An immersive automobile digital showcase created for luxury sports vehicles. Built with rich animations, spec comparison sliders, and aerodynamic UI design.",
    tags: ["HTML5", "Modern CSS", "Interactive UI", "Vercel"],
    liveDemo: "https://bmw-shop-three.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/BMW-SHOP",
    featured: true
  },
  {
    id: "earrings-shop",
    title: "Earrings Luxury Boutique",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    icon: "👂",
    desc: "Elegant jewelry boutique e-commerce web storefront with product filtering, wishlisting, and luxury design.",
    longDesc: "A polished and responsive luxury e-commerce website designed to showcase handcrafted jewelry and earrings. Features smooth category filters, wishlisting, and clean aesthetic layout.",
    tags: ["JavaScript", "E-Commerce", "CSS Grid", "Vercel"],
    liveDemo: "https://earrings-shop.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Earrings-shop",
    featured: true
  },
  {
    id: "coffee-shop",
    title: "Cozy Coffee House",
    category: "showcase",
    categoryLabel: "Landing Page",
    icon: "☕",
    desc: "Warm artisanal cafe landing page with specialty brew menu, ambiance gallery, and table reservation.",
    longDesc: "A cozy, warm aesthetic website for a boutique coffee house. Includes interactive brew menu tabs, customer testimonials, and an engaging mobile experience.",
    tags: ["HTML5", "CSS3 Flexbox", "GitHub Pages", "Mobile UI"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Coffee-shop/",
    github: "https://github.com/Priyanshu-kumar-maurya/Coffee-shop",
    featured: false
  },
  {
    id: "fast-foods",
    title: "Fast Foods Website",
    category: "ecommerce",
    categoryLabel: "Food Ordering",
    icon: "🍔",
    desc: "Vibrant fast food ordering website with delicious visuals, combo sections and responsive UI layout.",
    longDesc: "An interactive fast food ordering layout designed for speed and simplicity. Features animated meal cards, price calculators, and vibrant street-food visual vibes.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/fast-foods/",
    github: "https://github.com/Priyanshu-kumar-maurya/fast-foods",
    featured: false
  },
  {
    id: "portfolio-site",
    title: "Official Portfolio Site",
    category: "showcase",
    categoryLabel: "Portfolio",
    icon: "💼",
    desc: "Official personal developer portfolio website highlighting skillsets, project repository and resume.",
    longDesc: "Interactive personal portfolio website featuring dark/light theme switching, skill badges, live project showcase, and downloadable resume CV.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Portfolio/",
    github: "https://github.com/Priyanshu-kumar-maurya/Portfolio",
    featured: true
  },
  {
    id: "codex-priyanshu",
    title: "Codex Priyanshu Hub",
    category: "showcase",
    categoryLabel: "Developer Hub",
    icon: "⚡",
    desc: "Personal developer brand website and showcase page deployed on Vercel.",
    longDesc: "Modern developer showcase featuring coding projects, technology stack, social connects, and contact options.",
    tags: ["HTML5", "CSS3", "Vercel", "Branding"],
    liveDemo: "https://codex-priyanshu.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/codex-priyanshu",
    featured: false
  },
  {
    id: "calculator",
    title: "Modern Web Calculator",
    category: "games",
    categoryLabel: "Tool / Utility",
    icon: "🧮",
    desc: "Clean and functional calculation tool with keyboard support and smooth button physics.",
    longDesc: "A responsive and sleek web calculator with frosted glass styling, mathematical formula evaluation, clear history log, and responsive keypad layout.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Calculator/",
    github: "https://github.com/Priyanshu-kumar-maurya/Calculator",
    featured: false
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    category: "games",
    categoryLabel: "Web Tool",
    icon: "📱",
    desc: "Instant QR Code generator web utility for URLs, text, and contact cards.",
    longDesc: "A lightweight, instant QR code generator web application that allows visitors to convert links, text, and contact information into high-resolution QR codes.",
    tags: ["HTML5", "JavaScript", "QR API", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/QR-code/",
    github: "https://github.com/Priyanshu-kumar-maurya/QR-code",
    featured: false
  },
  {
    id: "watch-app",
    title: "Digital Clock & Watch",
    category: "games",
    categoryLabel: "Web Tool",
    icon: "⏰",
    desc: "Interactive digital & analog clock web application with real-time precision timekeeping.",
    longDesc: "An elegant digital clock web application with customizable dark/light faces, seconds ticker, and date indicators.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/watch/",
    github: "https://github.com/Priyanshu-kumar-maurya/watch",
    featured: false
  },
  {
    id: "ambient-light-effects",
    title: "Ambient Light Effects",
    category: "games",
    categoryLabel: "CSS Experiment",
    icon: "💡",
    desc: "Interactive CSS ambient glowing lighting effects and visual neon animations.",
    longDesc: "A creative CSS visual experiment displaying multi-layered ambient lighting, glass reflection highlights, and neon glow effects.",
    tags: ["CSS3 Glow", "Animations", "UI Experiments", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Ambient-Light-Effects/",
    github: "https://github.com/Priyanshu-kumar-maurya/Ambient-Light-Effects",
    featured: false
  },
  {
    id: "job-application-web",
    title: "Job Application Portal",
    category: "fullstack",
    categoryLabel: "Web Portal",
    icon: "📝",
    desc: "Interactive job application form and applicant submission web interface with validation.",
    longDesc: "Clean and structured job application web portal with multi-section form validation, resume upload fields, and user feedback.",
    tags: ["HTML5", "JavaScript", "Form Validation", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/job-Application-web-/",
    github: "https://github.com/Priyanshu-kumar-maurya/job-Application-web-",
    featured: false
  }
];

// --- Typing Animation on Tagline ---
const typingWords = [
  "Frontend & Full-Stack Developer",
  "React.js & JavaScript Builder",
  "Creative UI/UX Designer",
  "Web Performance Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (!typingElement) return;
  const currentWord = typingWords[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

// --- Render Project Cards ---
const projectsGrid = document.getElementById("projects-grid");
const projectCountBadge = document.getElementById("project-count-badge");
const searchInput = document.getElementById("search-input");
const filterTabs = document.querySelectorAll(".filter-tab");

let currentCategory = "all";
let searchQuery = "";

function renderProjects() {
  if (!projectsGrid) return;
  
  const filtered = projectsData.filter(proj => {
    const matchCategory = currentCategory === "all" || proj.category === currentCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      proj.title.toLowerCase().includes(query) ||
      proj.desc.toLowerCase().includes(query) ||
      proj.tags.some(t => t.toLowerCase().includes(query));
      
    return matchCategory && matchSearch;
  });

  if (projectCountBadge) {
    projectCountBadge.textContent = `${filtered.length}`;
  }

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-weight: 600; color: var(--text-main);">No matching projects found</p>
        <p style="font-size: 0.8rem;">Try searching for another keyword or change category filter.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(proj => {
    return `
      <div class="project-card" data-id="${proj.id}">
        <div>
          <div class="project-card-top">
            <div class="project-icon-box">${proj.icon}</div>
            <span class="project-cat-badge">${proj.categoryLabel}</span>
          </div>
          
          <div class="project-details" style="margin-top: 0.85rem;">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.desc}</p>
            <div class="project-tags">
              ${proj.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="project-actions">
          <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Open Live Project">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" title="View Source Code on GitHub">
            <i class="fa-brands fa-github"></i> Code
          </a>
          <button class="btn-card btn-card-info" onclick="openProjectModal('${proj.id}')" title="Quick Details">
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// --- Category Filter Tabs Listener ---
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.category || "all";
    renderProjects();
  });
});

// --- Search Input Listener ---
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

// --- Project Details Modal ---
const projectModalOverlay = document.getElementById("project-modal-overlay");
const projectModalBody = document.getElementById("project-modal-body");

function openProjectModal(id) {
  const proj = projectsData.find(p => p.id === id);
  if (!proj || !projectModalBody || !projectModalOverlay) return;

  projectModalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem;">
      <div style="font-size: 2.5rem; width: 54px; height: 54px; background: rgba(255,255,255,0.06); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
        ${proj.icon}
      </div>
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.2rem;">
          ${proj.title}
        </h2>
        <span class="project-cat-badge">${proj.categoryLabel}</span>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.4rem; letter-spacing: 0.05em;">Overview</h4>
      <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
        ${proj.longDesc}
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.5rem; letter-spacing: 0.05em;">Tech Stack & Highlights</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${proj.tags.map(tag => `<span class="skill-pill" style="font-size: 0.76rem; padding: 0.3rem 0.65rem;"><i class="fa-solid fa-code"></i> ${tag}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
      <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" style="padding: 0.7rem; font-size: 0.85rem;">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live App
      </a>
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" style="padding: 0.7rem; font-size: 0.85rem;">
        <i class="fa-brands fa-github"></i> GitHub Repo
      </a>
    </div>
  `;

  projectModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (projectModalOverlay) {
    projectModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Share / QR Code Modal ---
const shareModalOverlay = document.getElementById("share-modal-overlay");
const qrCanvasContainer = document.getElementById("qr-canvas-container");
const shareUrlInput = document.getElementById("share-url-input");

function openShareModal() {
  if (!shareModalOverlay) return;
  
  const currentUrl = window.location.href;
  if (shareUrlInput) {
    shareUrlInput.value = currentUrl;
  }

  if (qrCanvasContainer) {
    const encodedUrl = encodeURIComponent(currentUrl);
    qrCanvasContainer.innerHTML = `
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodedUrl}&margin=5" 
           alt="QR Code" width="180" height="180" style="border-radius: 8px;" />
    `;
  }

  shareModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  if (shareModalOverlay) {
    shareModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Native Web Share API ---
function handleNativeShare() {
  const pageUrl = window.location.href;
  const shareData = {
    title: "Priyanshu Kumar | Developer Portfolio & Bio Hub",
    text: "Check out Priyanshu Kumar's projects, portfolio, and work!",
    url: pageUrl
  };

  if (navigator.share) {
    navigator.share(shareData).catch((err) => console.log("Share cancelled", err));
  } else {
    copyToClipboard(pageUrl, "Bio Link copied to clipboard! 📋");
  }
}

// --- Clipboard Copy with Toast ---
function copyToClipboard(text, successMsg = "Copied to clipboard! 🚀") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast(successMsg);
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #34d399;"></i> ${message}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// --- Theme Selector Logic ---
const themeBtn = document.getElementById("theme-btn");
const themeMenu = document.getElementById("theme-menu");
const themeOptions = document.querySelectorAll(".theme-opt");

if (themeBtn && themeMenu) {
  themeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    themeMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    themeMenu.classList.remove("active");
  });
}

themeOptions.forEach(opt => {
  opt.addEventListener("click", () => {
    const selectedTheme = opt.dataset.theme;
    if (selectedTheme === "violet") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
    localStorage.setItem("pk_bio_theme", selectedTheme);
    if (themeMenu) themeMenu.classList.remove("active");
    showToast(`Theme updated: ${opt.textContent.trim()} ✨`);
  });
});

const savedTheme = localStorage.getItem("pk_bio_theme");
if (savedTheme && savedTheme !== "violet") {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// --- WhatsApp Quick Prompt Dispatcher ---
function sendWhatsAppPrompt(promptType) {
  const phoneNumber = "918858003033";
  let message = "";

  switch (promptType) {
    case "hire":
      message = "Hello Priyanshu! 👋 I saw your Instagram Bio link and would like to discuss hiring you for a web development project.";
      break;
    case "collab":
      message = "Hi Priyanshu! I checked out your portfolio and would love to collaborate with you on an exciting project.";
      break;
    case "freelance":
      message = "Hey Priyanshu! I need a modern website built. Can we discuss requirements, timeline and pricing?";
      break;
    default:
      message = "Hi Priyanshu! Reaching out from your Instagram bio portfolio page.";
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
}

// --- Digital Resume Modal ---
const resumeModalOverlay = document.getElementById("resume-modal-overlay");

function openResumeModal() {
  if (!resumeModalOverlay) return;
  resumeModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  if (resumeModalOverlay) {
    resumeModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Close Modals on Backdrop / ESC Key ---
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeShareModal();
    closeResumeModal();
  }
});

[projectModalOverlay, shareModalOverlay, resumeModalOverlay].forEach(overlay => {
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeProjectModal();
        closeShareModal();
        closeResumeModal();
      }
    });
  }
});

// --- Initialize Page ---
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  renderProjects();
});
