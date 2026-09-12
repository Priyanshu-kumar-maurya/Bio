/* ==========================================================================
   INSTAGRAM BIO LINK-IN-BIO & DEVELOPER HUB - JAVASCRIPT (PRO EDITION)
   Author: Priyanshu Kumar (GitHub: Priyanshu-kumar-maurya)
   WhatsApp: +91 7232992082
   ⚡ Real-Time GitHub Sync, Live IST Clock, Custom WhatsApp Messenger,
      Audio FX, Interactive Modals, QR Generator & Dynamic Filtering
   ========================================================================== */

const GITHUB_USERNAME = "Priyanshu-kumar-maurya";
const WHATSAPP_NUMBER = "917232992082"; // User's Official WhatsApp: +91 7232992082
const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
const GITHUB_USER_API = `https://api.github.com/users/${GITHUB_USERNAME}`;

// --- Curated Base Projects Database (Instant 0ms Cache & Fallback) ---
const baseProjectsData = [
  {
    id: "typing-fighter-game",
    name: "typing-fighter-game",
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
    name: "companion-app",
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
    name: "Event-Planning-System-",
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
    name: "Hotel-QR-Project",
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
    name: "cockroach-mutual-aid",
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
    name: "public-bulletin-news",
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
    name: "bpo-bakaiti-hub",
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
    name: "library-project",
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
    name: "Jp-Library",
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
    name: "BMW-SHOP",
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
    name: "Earrings-shop",
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
    name: "Coffee-shop",
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
    name: "fast-foods",
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
    name: "Portfolio",
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
    name: "codex-priyanshu",
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
    name: "Calculator",
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
    name: "QR-code",
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
    name: "watch",
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
    name: "Ambient-Light-Effects",
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
    name: "job-Application-web-",
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

// Active Projects Array
let projectsData = [...baseProjectsData];

// Load previously cached GitHub sync data if available
const cachedProjects = localStorage.getItem("pk_github_projects_cache");
if (cachedProjects) {
  try {
    const parsed = JSON.parse(cachedProjects);
    if (Array.isArray(parsed) && parsed.length > 0) {
      projectsData = parsed;
    }
  } catch (e) {
    console.warn("Could not parse cached projects:", e);
  }
}

// --- Smart Helpers for GitHub Repositories ---

function formatRepoTitle(repoName) {
  if (!repoName) return "Project";
  return repoName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim();
}

function detectCategory(repo) {
  const name = (repo.name || "").toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();
  const topics = (repo.topics || []).join(' ').toLowerCase();
  const combined = `${name} ${desc} ${lang} ${topics}`;

  if (combined.includes('game') || combined.includes('fighter') || combined.includes('arcade') || combined.includes('play') || combined.includes('calculator') || combined.includes('watch') || combined.includes('clock') || combined.includes('tool') || combined.includes('qr')) {
    return { category: "games", categoryLabel: "Game / Tool" };
  }
  if (combined.includes('shop') || combined.includes('store') || combined.includes('cart') || combined.includes('ecommerce') || combined.includes('food') || combined.includes('earring') || combined.includes('buy')) {
    return { category: "ecommerce", categoryLabel: "E-Commerce" };
  }
  if (combined.includes('fullstack') || combined.includes('backend') || combined.includes('api') || combined.includes('database') || combined.includes('chat') || combined.includes('companion') || combined.includes('hotel') || combined.includes('library') || combined.includes('bulletin') || combined.includes('aid') || combined.includes('hub') || combined.includes('auth')) {
    return { category: "fullstack", categoryLabel: "Full-Stack App" };
  }
  return { category: "showcase", categoryLabel: "Showcase / Web" };
}

function detectIcon(repo) {
  const name = (repo.name || "").toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const combined = `${name} ${desc}`;

  if (combined.includes('game') || combined.includes('fighter')) return "🥊";
  if (combined.includes('chat') || combined.includes('companion')) return "🤝";
  if (combined.includes('hotel') || combined.includes('room')) return "🏨";
  if (combined.includes('event')) return "🎉";
  if (combined.includes('library') || combined.includes('book')) return "📚";
  if (combined.includes('shop') || combined.includes('store') || combined.includes('cart')) return "🛍️";
  if (combined.includes('car') || combined.includes('bmw')) return "🚗";
  if (combined.includes('earring') || combined.includes('jewelry')) return "👂";
  if (combined.includes('coffee') || combined.includes('cafe')) return "☕";
  if (combined.includes('food') || combined.includes('burger')) return "🍔";
  if (combined.includes('calc')) return "🧮";
  if (combined.includes('qr')) return "📱";
  if (combined.includes('watch') || combined.includes('clock')) return "⏰";
  if (combined.includes('light') || combined.includes('glow')) return "💡";
  if (combined.includes('job') || combined.includes('apply')) return "📝";
  if (combined.includes('news') || combined.includes('bulletin')) return "📰";
  if (combined.includes('hub') || combined.includes('talk')) return "💬";
  if (combined.includes('port') || combined.includes('bio')) return "💼";
  return "⚡";
}

function getLiveUrl(repo) {
  if (repo.homepage && repo.homepage.trim().length > 0) {
    return repo.homepage.trim();
  }
  if (repo.has_pages) {
    return `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;
  }
  return repo.html_url;
}

// --- ⚡ Automatic GitHub Live Sync Engine ---
async function syncWithGitHub(isManual = false) {
  const syncBadge = document.getElementById("github-sync-indicator");
  if (syncBadge) {
    syncBadge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Syncing with GitHub...`;
  }

  try {
    const response = await fetch(GITHUB_REPOS_API);
    if (!response.ok) {
      throw new Error(`GitHub API returned status: ${response.status}`);
    }
    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) return;

    // Filter out profile readme repo, 'Bio' itself, and forks
    const validRepos = repos.filter(r => 
      r.name !== GITHUB_USERNAME && 
      r.name.toLowerCase() !== 'bio' && 
      !r.fork
    );

    // Map existing curated data for high quality descriptions
    const baseMap = new Map();
    baseProjectsData.forEach(p => {
      baseMap.set(p.name ? p.name.toLowerCase() : p.id.toLowerCase(), p);
    });

    const liveList = validRepos.map(repo => {
      const existing = baseMap.get(repo.name.toLowerCase());
      const catInfo = detectCategory(repo);
      const liveDemo = getLiveUrl(repo);
      
      const tags = [];
      if (repo.language) tags.push(repo.language);
      if (repo.topics && Array.isArray(repo.topics)) {
        repo.topics.slice(0, 3).forEach(t => tags.push(t));
      }
      if (tags.length === 0) tags.push("JavaScript", "Web App");

      if (existing) {
        return {
          ...existing,
          title: existing.title || formatRepoTitle(repo.name),
          liveDemo: existing.liveDemo || liveDemo,
          github: repo.html_url,
          pushedAt: repo.pushed_at || repo.updated_at
        };
      }

      return {
        id: repo.name.toLowerCase(),
        name: repo.name,
        title: formatRepoTitle(repo.name),
        category: catInfo.category,
        categoryLabel: catInfo.categoryLabel,
        icon: detectIcon(repo),
        desc: repo.description || `Interactive ${catInfo.categoryLabel} built with modern web technologies.`,
        longDesc: repo.description || `A modern web application created by Priyanshu Kumar. Built with clean code, responsive design, and hosted on GitHub.`,
        tags: tags,
        liveDemo: liveDemo,
        github: repo.html_url,
        featured: false,
        pushedAt: repo.pushed_at || repo.updated_at
      };
    });

    // Update state and cache
    projectsData = liveList;
    localStorage.setItem("pk_github_projects_cache", JSON.stringify(liveList));

    // Re-render UI with latest synced repos
    renderProjects();
    updateCategoryCounts();

    if (syncBadge) {
      syncBadge.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Synced with GitHub (${liveList.length} Repos)`;
    }

    if (isManual) {
      playTone(659.25, 'triangle', 0.12);
      showToast(`✨ Synced ${liveList.length} projects live from GitHub!`);
    }
  } catch (err) {
    console.warn("GitHub live sync fallback to local cache:", err);
    if (syncBadge) {
      syncBadge.innerHTML = `<i class="fa-solid fa-cloud" style="color: var(--primary-light);"></i> ${projectsData.length} Projects Live`;
    }
  }
}

// --- Live Indian Standard Time (IST) Clock ---
function updateLiveClock() {
  const clockEl = document.getElementById("live-ist-clock");
  if (!clockEl) return;
  try {
    const options = {
      timeZone: "Asia/Kolkata",
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
    clockEl.textContent = `${timeStr} IST`;
  } catch (e) {
    clockEl.textContent = new Date().toLocaleTimeString();
  }
}

// --- Fetch Live GitHub Profile Stats ---
async function fetchGitHubUserStats() {
  try {
    const res = await fetch(GITHUB_USER_API);
    if (!res.ok) return;
    const data = await res.json();
    const reposCountEl = document.getElementById("stat-repos-count");
    if (reposCountEl && data.public_repos) {
      reposCountEl.textContent = `${data.public_repos}+`;
    }
    const followersEl = document.getElementById("stat-followers-count");
    if (followersEl && typeof data.followers === 'number') {
      followersEl.textContent = `${data.followers}`;
    }
  } catch (e) {
    // Graceful fallback to cached stats
  }
}

// --- Category Counts Update ---
function updateCategoryCounts() {
  const counts = {
    all: projectsData.length,
    fullstack: projectsData.filter(p => p.category === 'fullstack').length,
    ecommerce: projectsData.filter(p => p.category === 'ecommerce').length,
    games: projectsData.filter(p => p.category === 'games').length,
    showcase: projectsData.filter(p => p.category === 'showcase').length
  };

  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    const cat = tab.dataset.category || "all";
    let baseText = tab.getAttribute("data-original-label");
    if (!baseText) {
      baseText = tab.textContent.trim().replace(/\s*\(\d+\)$/, '');
      tab.setAttribute("data-original-label", baseText);
    }
    tab.innerHTML = `${baseText} <span class="tab-count-badge">${counts[cat] || 0}</span>`;
  });
}

// --- Typing Animation on Tagline ---
const typingWords = [
  "Frontend & Full-Stack Developer",
  "Priyanshu Kumar Maurya",
  "React.js & JavaScript Builder",
  "@codexs_priyanshu on Instagram",
  "Creative UI/UX Designer"
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
const searchClearBtn = document.getElementById("search-clear-btn");
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
      (proj.tags && proj.tags.some(t => t.toLowerCase().includes(query)));
      
    return matchCategory && matchSearch;
  });

  if (projectCountBadge) {
    projectCountBadge.textContent = `${filtered.length}`;
  }

  const statValEl = document.getElementById("stat-repos-count");
  if (statValEl) {
    statValEl.textContent = `${projectsData.length}+`;
  }

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-weight: 600; color: var(--text-main);">No matching projects found</p>
        <p style="font-size: 0.8rem; margin-bottom: 0.8rem;">Try searching for another keyword or change category filter.</p>
        <button class="top-btn" onclick="clearSearch()" style="padding: 0.45rem 1rem;">Clear Search</button>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(proj => {
    return `
      <div class="project-card" data-id="${proj.id}">
        <div>
          <div class="project-card-top">
            <div class="project-icon-box">${proj.icon || '⚡'}</div>
            <span class="project-cat-badge">${proj.categoryLabel || 'Web App'}</span>
          </div>
          
          <div class="project-details" style="margin-top: 0.85rem;">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.desc}</p>
            <div class="project-tags">
              ${(proj.tags || []).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="project-actions">
          <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Open Live Project" onclick="playTone(523.25, 'sine', 0.06)">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" title="View Source Code on GitHub" onclick="playTone(440, 'sine', 0.06)">
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
    playTone(440, 'sine', 0.06);
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.category || "all";
    renderProjects();
  });
});

// --- Search Input Listener & Clear Button ---
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = searchQuery ? "flex" : "none";
    }
    renderProjects();
  });
}

function clearSearch() {
  if (searchInput) {
    searchInput.value = "";
    searchQuery = "";
    if (searchClearBtn) searchClearBtn.style.display = "none";
    renderProjects();
    searchInput.focus();
    playTone(330, 'sine', 0.08);
  }
}

// --- Project Details Modal ---
const projectModalOverlay = document.getElementById("project-modal-overlay");
const projectModalBody = document.getElementById("project-modal-body");

function openProjectModal(id) {
  playTone(523.25, 'triangle', 0.08);
  const proj = projectsData.find(p => p.id === id);
  if (!proj || !projectModalBody || !projectModalOverlay) return;

  projectModalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem;">
      <div style="font-size: 2.5rem; width: 54px; height: 54px; background: rgba(255,255,255,0.06); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
        ${proj.icon || '⚡'}
      </div>
      <div>
        <h2 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.2rem;">
          ${proj.title}
        </h2>
        <span class="project-cat-badge">${proj.categoryLabel || 'Project'}</span>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.4rem; letter-spacing: 0.05em;">Overview</h4>
      <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">
        ${proj.longDesc || proj.desc}
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.5rem; letter-spacing: 0.05em;">Tech Stack & Highlights</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${(proj.tags || []).map(tag => `<span class="skill-pill" style="font-size: 0.76rem; padding: 0.3rem 0.65rem;"><i class="fa-solid fa-code"></i> ${tag}</span>`).join('')}
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
  playTone(587.33, 'sine', 0.08);
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

// --- Digital Resume Modal ---
const resumeModalOverlay = document.getElementById("resume-modal-overlay");

function openResumeModal() {
  playTone(659.25, 'sine', 0.08);
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
  playTone(880, 'sine', 0.08);
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

function copyPhoneNumber() {
  copyToClipboard("+91 7232992082", "WhatsApp Number Copied: +91 7232992082 📲");
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
  }, 3200);
}

// --- Theme Selector Logic ---
const themeBtn = document.getElementById("theme-btn");
const themeMenu = document.getElementById("theme-menu");
const themeOptions = document.querySelectorAll(".theme-opt");

if (themeBtn && themeMenu) {
  themeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    themeMenu.classList.toggle("active");
    playTone(440, 'sine', 0.05);
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
    playTone(783.99, 'triangle', 0.1);
    showToast(`Theme updated: ${opt.textContent.trim()} ✨`);
  });
});

const savedTheme = localStorage.getItem("pk_bio_theme");
if (savedTheme && savedTheme !== "violet") {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// --- Sound Effects Web Audio API Synthesizer ---
let soundEnabled = false;

function toggleSound() {
  soundEnabled = !soundEnabled;
  const soundBtn = document.getElementById("sound-btn");
  if (soundBtn) {
    soundBtn.innerHTML = soundEnabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark"></i>';
    soundBtn.title = soundEnabled ? "Sound ON (Tap to Mute)" : "Sound Muted (Tap to Unmute)";
  }
  if (soundEnabled) {
    playTone(659.25, 'triangle', 0.12);
  }
  showToast(soundEnabled ? "Futuristic UI Sound: ON 🔊" : "Futuristic UI Sound: OFF 🔇");
}

function playTone(freq, type = 'sine', duration = 0.08) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context not allowed or unsupported
  }
}

// --- WhatsApp Messenger Integration (+91 7232992082) ---

function sendWhatsAppPrompt(promptType) {
  playTone(523.25, 'sine', 0.08);
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
    case "hello":
      message = "Hi Priyanshu! 👋 Reaching out from your Instagram bio portfolio page. Loved your projects!";
      break;
    default:
      message = "Hi Priyanshu! Reaching out from your Instagram bio portfolio page.";
  }

  const customInput = document.getElementById("custom-wa-input");
  if (customInput) {
    customInput.value = message;
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

function sendCustomWhatsApp() {
  playTone(659.25, 'triangle', 0.1);
  const customInput = document.getElementById("custom-wa-input");
  const message = (customInput && customInput.value.trim()) 
    ? customInput.value.trim() 
    : "Hello Priyanshu! Reaching out from your Instagram bio portfolio hub.";

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

// --- Interactive Ambient Glow Follower ---
function initGlowFollower() {
  const orb = document.querySelector(".orb-1");
  if (!orb) return;

  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth) * 40 - 20;
    const y = (e.clientY / window.innerHeight) * 40 - 20;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  }, { passive: true });
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

// --- Initialize Page & Live Features ---
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  renderProjects();
  updateCategoryCounts();
  updateLiveClock();
  setInterval(updateLiveClock, 1000);
  initGlowFollower();
  
  // Real-time background sync with GitHub API
  syncWithGitHub();
  fetchGitHubUserStats();
});
