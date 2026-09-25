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
    title: "Typing Fighter - Cyber Combat Arena",
    category: "games",
    categoryLabel: "Arcade Combat",
    badgeText: "⚡ PWA Combat",
    icon: "🥊",
    desc: "High-octane arcade combat game driven by typing speed, fighting combos, power-ups, retro audio, and PWA offline capability.",
    longDesc: "An adrenaline-fueled typing battle web game where fast, accurate typing unleashes fighting combos, counter-attacks, and special moves. Built with HTML5 Canvas physics, score multipliers, procedural sound synthesis, and installable PWA support for 100% offline gameplay.",
    features: [
      "Real-Time 1v1 Arena Combat",
      "Canvas Particle Animations & Power-ups",
      "Dynamic Combos & Difficulty Scaling",
      "100% Offline PWA Home-Screen Installable"
    ],
    tags: ["JavaScript", "HTML5 Canvas", "PWA Offline", "Web Audio API", "Game Engine"],
    liveDemo: "https://typing-fighter-game.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/typing-fighter-game",
    featured: true
  },
  {
    id: "companion-app",
    name: "companion-app",
    title: "Coffeely - Premium Companion Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack App",
    badgeText: "🔥 Top Featured",
    icon: "🤝",
    desc: "End-to-end full-stack companion discovery and booking platform with real-time interactive messaging, verified profiles, and seamless UI.",
    longDesc: "A high-conversion full-stack web application designed for booking verified companions for coffee dates and events. Features real-time chat, authenticated user profiles, modern dark glassmorphism layout, and responsive mobile-first UI.",
    features: [
      "Real-Time WebSocket Chat",
      "Verified Profile Onboarding",
      "Role-Based Booking Engine",
      "Responsive Glassmorphic UI"
    ],
    tags: ["Node.js", "Express", "WebSocket Chat", "Full-Stack", "Auth System"],
    liveDemo: "https://coffeely-app.vercel.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/companion-app",
    featured: true
  },
  {
    id: "event-planning-system",
    name: "Event-Planning-System-",
    title: "EventHub - College & Corporate Management",
    category: "fullstack",
    categoryLabel: "Management System",
    badgeText: "🏆 Top Full-Stack",
    icon: "🎉",
    desc: "Comprehensive event management platform featuring role-based dashboards, vendor scheduling, ticket booking, and MongoDB integration.",
    longDesc: "Full-scale college and corporate event management web application. Features live event publishing, ticket reservation counters, package selection, and complete administrative reporting.",
    features: [
      "Live Event Publishing & RSVP",
      "Role-Based Admin Dashboard",
      "MongoDB Real-Time Sync",
      "Automated Event Reporting"
    ],
    tags: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
    liveDemo: "https://event-planning-system-topaz.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Event-Planning-System-",
    featured: true
  },
  {
    id: "hotel-qr-project",
    name: "Hotel-QR-Project",
    title: "SmartQR - Hotel & Dining Ordering System",
    category: "fullstack",
    categoryLabel: "Smart Ordering",
    badgeText: "🏨 Contactless QR",
    icon: "🏨",
    desc: "Contactless digital dining web portal where guests scan table QR codes to browse live menus, customize dishes, and place direct orders.",
    longDesc: "Smart QR-based restaurant hospitality system that replaces physical paper menus with an interactive digital order management experience. Real-time cart calculation, dish filtering, and instant kitchen ticketing.",
    features: [
      "Table QR Code Instant Launch",
      "Live Categorized Food Menu",
      "Real-Time Cart & Bill Summary",
      "Zero-App Download Required"
    ],
    tags: ["JavaScript", "Node.js", "QR Technology", "Hospitality Tech", "REST API"],
    liveDemo: "https://hotel-qr-project.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Hotel-QR-Project",
    featured: true
  },
  {
    id: "cockroach-mutual-aid",
    name: "cockroach-mutual-aid",
    title: "MutualAid - Emergency Community Board",
    category: "fullstack",
    categoryLabel: "Community Portal",
    badgeText: "🤝 Community Aid",
    icon: "📋",
    desc: "Hyperlocal mutual aid platform connecting citizens for urgent community assistance, essential supplies, and neighborhood solidarity.",
    longDesc: "A community-first crisis response platform where verified neighbors can post urgent requests, offer local supplies, filter by distance and category, and communicate in real time.",
    features: [
      "Urgent Assistance Request Broadcasting",
      "Location & Category Quick Filters",
      "Community Solidarity Helper Matching",
      "Mobile-First Rapid Access"
    ],
    tags: ["JavaScript", "Full-Stack", "Community Tech", "REST API", "Vercel"],
    liveDemo: "https://cockroach-mutual-aid.vercel.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/cockroach-mutual-aid",
    featured: false
  },
  {
    id: "public-bulletin-news",
    name: "public-bulletin-news",
    title: "BulletinLive - Community News Portal",
    category: "fullstack",
    categoryLabel: "News Platform",
    badgeText: "📰 Live Notices",
    icon: "📰",
    desc: "Modern public bulletin portal for broadcasting verified community notices, local journalism, and breaking alerts with real-time publishing.",
    longDesc: "A streamlined community publishing hub where verified contributors post localized bulletins, articles, and municipal advisories with category filtering and social engagement.",
    features: [
      "Instant Article & Bulletin Publishing",
      "Categorized Notice Feeds",
      "Community Engagement & Reactions",
      "Fast Global CDN Delivery"
    ],
    tags: ["JavaScript", "Full-Stack", "Netlify Deploy", "Modern Web"],
    liveDemo: "https://public-bulletin.netlify.app/",
    github: "https://github.com/Priyanshu-kumar-maurya/public-bulletin-news",
    featured: false
  },
  {
    id: "bpo-bakaiti-hub",
    name: "bpo-bakaiti-hub",
    title: "BPO Vault - Call Center Team Hub",
    category: "fullstack",
    categoryLabel: "Web Platform",
    badgeText: "🎧 Floor Hub",
    icon: "💬",
    desc: "Interactive collaboration and discussion web platform for BPO professionals featuring shift planner, Wall of Fame, and topic channels.",
    longDesc: "A vibrant team engagement portal crafted for call center and support professionals. Features authenticated access, Shift Planner, Wall of Fame awards, and real-time community channels.",
    features: [
      "Shift Planner & Schedule Tracker",
      "Wall of Fame Performance Awards",
      "Encrypted Agent Profile Vault",
      "Real-Time Group Interaction"
    ],
    tags: ["Node.js", "Express", "Interactive UI", "Render Cloud"],
    liveDemo: "https://bpo-bakaiti-hub.onrender.com",
    github: "https://github.com/Priyanshu-kumar-maurya/bpo-bakaiti-hub",
    featured: false
  },
  {
    id: "library-project",
    name: "library-project",
    title: "LibraryPro - Enterprise Management System",
    category: "fullstack",
    categoryLabel: "Management Portal",
    badgeText: "📚 Enterprise Auth",
    icon: "📚",
    desc: "Role-based web portal with dual authentication (Admin & Student), real-time book cataloging, issue/return tracking, and reservation analytics.",
    longDesc: "A production-style library management portal supporting dual workflows for librarians and students. Features book reservations, automated return tracking, role-based route guards, and clean management dashboard.",
    features: [
      "Dual Role Auth (Admin & Student)",
      "Real-Time Book Inventory Catalog",
      "Issue / Return Timeline Tracking",
      "Dashboard Analytics & Reports"
    ],
    tags: ["JavaScript", "HTML5", "Authentication Guards", "Vercel Deploy"],
    liveDemo: "https://library-m.vercel.app/login.html",
    github: "https://github.com/Priyanshu-kumar-maurya/library-project",
    featured: true
  },
  {
    id: "jp-library",
    name: "Jp-Library",
    title: "JpLibrary - Modern Digital Showcase",
    category: "showcase",
    categoryLabel: "Digital Catalog",
    badgeText: "📖 Book Catalog",
    icon: "📖",
    desc: "Aesthetic digital book catalog and literature showcase interface featuring genre carousels, responsive grid layouts, and reader previews.",
    longDesc: "A minimalist, elegant digital library portal built for book enthusiasts. Features curated genre filtering, smooth book card hover interactions, and responsive reading previews.",
    features: [
      "Curated Literature Showcase",
      "Genre & Author Quick Filtering",
      "Aesthetic Dark Theme Cards",
      "Responsive Mobile Navigation"
    ],
    tags: ["HTML5", "Modern CSS", "Vercel Deploy", "Digital Catalog"],
    liveDemo: "https://jp-library.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Jp-Library",
    featured: false
  },
  {
    id: "bmw-shop",
    name: "BMW-SHOP",
    title: "BMW Studio - Luxury Automobile Showcase",
    category: "ecommerce",
    categoryLabel: "3D Auto Studio",
    badgeText: "🏎️ 3D Studio",
    icon: "🚗",
    desc: "Immersive 3D automobile digital experience featuring interactive vehicle specs, 360° studio rotation, aerodynamic styling, and dark aesthetic.",
    longDesc: "A luxury digital showroom built for sports cars and electric flagship sedans. Features interactive 3D model rotation, performance comparisons, specifications slider, and aerodynamic visual effects.",
    features: [
      "360° Interactive Studio Spin",
      "Vehicle Spec Comparison Sliders",
      "Aerodynamic Visual Effects",
      "Luxury Dark Glassmorphic Theme"
    ],
    tags: ["HTML5", "Modern CSS", "3D Interactive UI", "Vercel Deploy", "Automotive UI"],
    liveDemo: "https://bmw-shop-three.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/BMW-SHOP",
    featured: true
  },
  {
    id: "earrings-shop",
    name: "Earrings-shop",
    title: "AuraJewels - Luxury Earrings Boutique",
    category: "ecommerce",
    categoryLabel: "Luxury Boutique",
    badgeText: "💎 Luxury Store",
    icon: "👂",
    desc: "Polished luxury e-commerce boutique storefront for handcrafted jewelry and earrings with price filtering, wishlist, and cart drawer.",
    longDesc: "An elegant, high-converting jewelry boutique website designed with editorial minimalism. Features interactive product galleries, material filters, wishlist toggling, and frictionless checkout flow.",
    features: [
      "High-Res Product Showcase Galleries",
      "Material & Price Filter Engine",
      "Wishlist & Cart Slider Drawer",
      "Editorial Luxury Design Aesthetics"
    ],
    tags: ["JavaScript", "E-Commerce", "CSS Grid", "Vercel Deploy"],
    liveDemo: "https://earrings-shop.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/Earrings-shop",
    featured: true
  },
  {
    id: "coffee-shop",
    name: "Coffee-shop",
    title: "BrewCraft - Artisanal Coffee Roastery",
    category: "showcase",
    categoryLabel: "Artisanal Roastery",
    badgeText: "☕ Artisanal Roastery",
    icon: "☕",
    desc: "Warm luxury cafe landing page and ordering portal with signature brew catalog, live table reservation modal, and interactive cart.",
    longDesc: "An artisanal boutique coffee house digital experience. Features warm dark typography, customer reviews, discount code engine (BREW15), and seamless table booking modal.",
    features: [
      "Interactive Signature Brew Menu",
      "Table Booking Modal & Scheduler",
      "Promo Code & Cart Calculation",
      "Luxury Editorial Aesthetics"
    ],
    tags: ["HTML5", "CSS3 Flexbox", "JavaScript", "GitHub Pages", "Luxury UI"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Coffee-shop/",
    github: "https://github.com/Priyanshu-kumar-maurya/Coffee-shop",
    featured: false
  },
  {
    id: "fast-foods",
    name: "fast-foods",
    title: "CraveBite - Gourmet Fast Food Delivery",
    category: "ecommerce",
    categoryLabel: "Gourmet Food",
    badgeText: "🍔 Gourmet Delivery",
    icon: "🍔",
    desc: "High-conversion fast-food ordering portal featuring mouth-watering visuals, live cart management, combo discount codes, and responsive design.",
    longDesc: "A vibrant and appetizing food ordering web app designed for lightning-fast mobile checkouts. Features animated meal cards, interactive burger customizers, and promo deals (TASTY20).",
    features: [
      "Dynamic Food Category Filtering",
      "Real-Time Shopping Cart Counter",
      "Special Combo Deals Engine",
      "Responsive Mobile Touch UI"
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Food-Tech UI", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/fast-foods/",
    github: "https://github.com/Priyanshu-kumar-maurya/fast-foods",
    featured: false
  },
  {
    id: "portfolio-site",
    name: "Portfolio",
    title: "Priyanshu.dev - Official Developer Portfolio",
    category: "showcase",
    categoryLabel: "Developer Portfolio",
    badgeText: "🚀 Portfolio Pro",
    icon: "💼",
    desc: "Flagship personal portfolio website highlighting 20+ live full-stack web applications, technical skillsets, and downloadable resume.",
    longDesc: "Official portfolio website of Priyanshu Kumar Maurya. Features dark/light themes, live project showcases, GitHub repository links, contact form, and downloadable PDF resume.",
    features: [
      "20+ Live Hosted Web Applications",
      "Interactive Skill Radar & Tags",
      "One-Tap Resume PDF Download",
      "Direct WhatsApp & Email Action"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Developer Brand"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Portfolio/",
    github: "https://github.com/Priyanshu-kumar-maurya/Portfolio",
    featured: true
  },
  {
    id: "codex-priyanshu",
    name: "codex-priyanshu",
    title: "Codex Priyanshu - Brand & Developer Hub",
    category: "showcase",
    categoryLabel: "Brand Hub",
    badgeText: "⚡ Developer Hub",
    icon: "⚡",
    desc: "Personal developer brand portal showcasing web applications, coding achievements, social connects, and contact integrations.",
    longDesc: "Modern developer brand destination deployed on Vercel. Features fast page load times, integrated social profiles (@codexs_priyanshu), and developer showcase cards.",
    features: [
      "High-Speed Vercel Edge Hosting",
      "Social Media Quick Connects",
      "Curated Technology Stack",
      "Responsive Bento Layout"
    ],
    tags: ["HTML5", "Modern CSS", "Vercel Deploy", "Personal Branding"],
    liveDemo: "https://codex-priyanshu.vercel.app",
    github: "https://github.com/Priyanshu-kumar-maurya/codex-priyanshu",
    featured: false
  },
  {
    id: "calculator",
    name: "Calculator",
    title: "NeoCalc - Glassmorphic Scientific Engine",
    category: "games",
    categoryLabel: "Math Engine",
    badgeText: "🧮 Sci-Math Pro",
    icon: "🧮",
    desc: "Sleek glassmorphic calculator with scientific functions (trig, log, powers), calculation history slide-over, keyboard hotkeys, and 1-tap copy.",
    longDesc: "A responsive, keyboard-friendly scientific web calculator designed with frosted glass aesthetics, trigonometry, logarithmic operations, slide-up history panel, and audio feedback.",
    features: [
      "Collapsible Scientific Drawer",
      "Persistent Calculation History",
      "Dark & Light Theme Switching",
      "Keyboard Hotkeys (F2, H, T)"
    ],
    tags: ["JavaScript", "Math Engine", "Glassmorphism", "Audio Feedback", "PWA Ready"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Calculator/",
    github: "https://github.com/Priyanshu-kumar-maurya/Calculator",
    featured: false
  },
  {
    id: "qr-code-generator",
    name: "QR-code",
    title: "QuickQR - High-Speed QR Generator",
    category: "games",
    categoryLabel: "Web Utility",
    badgeText: "📱 Instant Utility",
    icon: "📱",
    desc: "Instant client-side QR Code generator web utility for URLs, WiFi credentials, plain text, and contact vCards with one-tap download.",
    longDesc: "A lightweight, lightning-fast QR utility that converts any text, link, or WiFi configuration into high-resolution scannable QR codes instantly with customizable sizing and SVG export.",
    features: [
      "Instant Client-Side QR Rendering",
      "WiFi, URL & vCard Formatting",
      "Custom Color & Size Adjustments",
      "1-Tap Image Download"
    ],
    tags: ["HTML5", "JavaScript", "QR Code API", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/QR-code/",
    github: "https://github.com/Priyanshu-kumar-maurya/QR-code",
    featured: false
  },
  {
    id: "watch-app",
    name: "watch",
    title: "ChronoLux - Swiss Precision Chronometer",
    category: "games",
    categoryLabel: "Timepiece HUD",
    badgeText: "⌚ Luxury Chrono",
    icon: "⏰",
    desc: "Multi-mode luxury timepiece featuring Swiss mechanical analog dial with smooth sweep, cyberpunk atomic digital HUD, stopwatch, and timer.",
    longDesc: "An exquisite luxury timekeeping web application. Features 5 distinct operational modes: Analog Chronograph, Atomic Digital HUD, Millisecond Stopwatch with Lap Recorder, Pomodoro Focus Timer, and Multi-Timezone World Clock.",
    features: [
      "Mechanical Sweep vs Quartz Ticking",
      "5 Modes (Analog, Digital, Lap, Timer, World)",
      "4 Premium Dial Themes & Night Lume",
      "Sound Synthesizer & Vibration"
    ],
    tags: ["JavaScript", "SVG Graphics", "Web Audio API", "Luxury UI", "Chronometer"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/watch/",
    github: "https://github.com/Priyanshu-kumar-maurya/watch",
    featured: false
  },
  {
    id: "ambient-light-effects",
    name: "Ambient-Light-Effects",
    title: "LuminaFX - 3D Ambient Light Engine",
    category: "games",
    categoryLabel: "3D Light Studio",
    badgeText: "✨ 3D Light Studio",
    icon: "💡",
    desc: "3D interactive holographic light engine featuring 360° mouse drag rotation, 4 geometry meshes (Cube, Portal, Prism, TV), and bloom studio.",
    longDesc: "A cutting-edge CSS 3D visual experiment and ambient lighting studio. Features full 360° touch and mouse drag rotation, custom hex color glow picker, pulsing breathing light, and floating canvas particle dust.",
    features: [
      "360° Touch/Mouse Drag 3D Rotation",
      "4 Meshes (Cube, Portal, Prism, Ambilight TV)",
      "Custom Hex Glow & Bloom Controls",
      "Floating Ambient Dust Particle Canvas"
    ],
    tags: ["CSS 3D Transforms", "Canvas Engine", "Lighting Studio", "Interactive FX"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/Ambient-Light-Effects/",
    github: "https://github.com/Priyanshu-kumar-maurya/Ambient-Light-Effects",
    featured: false
  },
  {
    id: "job-application-web",
    name: "job-Application-web-",
    title: "CareerConnect - Smart Job Portal",
    category: "fullstack",
    categoryLabel: "Job Portal",
    badgeText: "📝 Job Portal",
    icon: "📝",
    desc: "Interactive multi-step job application portal featuring live field validation, resume upload simulator, and instant applicant confirmation.",
    longDesc: "A structured corporate job application web portal designed for frictionless candidate onboarding. Features client-side form validation, resume drag-and-drop, and confirmation modals.",
    features: [
      "Multi-Step Onboarding Form",
      "Real-Time Input Validation",
      "Resume Upload Experience",
      "Instant Submission Confirmation"
    ],
    tags: ["HTML5", "JavaScript", "Form Validation", "GitHub Pages"],
    liveDemo: "https://priyanshu-kumar-maurya.github.io/job-Application-web-/",
    github: "https://github.com/Priyanshu-kumar-maurya/job-Application-web-",
    featured: false
  }
];

// Active Projects Array
let projectsData = [...baseProjectsData];

// Load previously cached GitHub sync data if available with baseMap enrichment
const cachedProjects = localStorage.getItem("pk_github_projects_cache_v3");
if (cachedProjects) {
  try {
    const parsed = JSON.parse(cachedProjects);
    if (Array.isArray(parsed) && parsed.length > 0) {
      const baseMap = new Map();
      baseProjectsData.forEach(p => baseMap.set(p.name ? p.name.toLowerCase() : p.id.toLowerCase(), p));
      projectsData = parsed.map(p => {
        const base = baseMap.get(p.name ? p.name.toLowerCase() : p.id.toLowerCase());
        return base ? { ...base, ...p, features: base.features, badgeText: base.badgeText, title: base.title, desc: base.desc, longDesc: base.longDesc } : p;
      });
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

// --- Clean Domain Helper for Vercel-Style Badges ---
function cleanDomain(url) {
  if (!url) return "app.live";
  try {
    const parsed = new URL(url);
    let host = parsed.hostname.replace(/^www\./, '');
    if (parsed.pathname && parsed.pathname.length > 1 && !host.includes('vercel.app')) {
      const cleanPath = parsed.pathname.replace(/\/$/, '');
      if (cleanPath.length < 24) {
        return `${host}${cleanPath}`;
      }
    }
    return host;
  } catch (e) {
    return url.replace(/^https?:\/\//, '').split('/')[0];
  }
}

// --- Dynamic Project Preview Screenshot Path & Fallback Helper ---
function getProjectPreviewImage(proj) {
  if (proj.previewImg) return proj.previewImg;
  const isRootDir = window.location.pathname.endsWith("bio.html");
  const prefix = isRootDir ? "bio/previews/" : "previews/";
  return `${prefix}${proj.id}.jpg`;
}

function handlePreviewImgError(img, targetUrl) {
  if (!img.dataset.hasFailed) {
    img.dataset.hasFailed = "true";
    img.src = `https://s0.wp.com/mshots/v1/${encodeURIComponent(targetUrl)}?w=800&h=500`;
  }
}

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
    const domainText = cleanDomain(proj.liveDemo);
    const previewSrc = getProjectPreviewImage(proj);
    const targetUrl = proj.liveDemo || proj.github;

    return `
      <div class="project-card" data-id="${proj.id}">
        <div>
          <!-- Vercel-Style Product Preview Stage -->
          <div class="product-preview-stage" onclick="openLivePreview('${proj.id}')" title="Test Live Interactive Preview">
            <div class="preview-stage-header">
              <div class="stage-dots">
                <span class="stage-dot dot-red"></span>
                <span class="stage-dot dot-yellow"></span>
                <span class="stage-dot dot-green"></span>
              </div>
              <div class="stage-domain">
                <i class="fa-solid fa-lock" style="font-size: 0.65rem;"></i>
                <span>${domainText}</span>
              </div>
              <div class="stage-status">
                <span class="status-pulse-green"></span>
                <span>${proj.badgeText || 'Ready'}</span>
              </div>
            </div>
            <div class="preview-stage-screen">
              <img 
                class="stage-screenshot-img" 
                src="${previewSrc}" 
                alt="${proj.title} Web Preview" 
                loading="lazy" 
                onerror="handlePreviewImgError(this, '${targetUrl}')"
              />
              <div class="stage-hover-overlay">
                <span class="stage-play-btn"><i class="fa-solid fa-play"></i> Live Preview</span>
                <span class="stage-sub-hint">Interactive Simulator</span>
              </div>
            </div>
          </div>

          <div class="project-details">
            <div class="project-header-row">
              <h3 class="project-title">${proj.title}</h3>
              <span class="project-cat-chip">${proj.categoryLabel || 'Web App'}</span>
            </div>
            <p class="project-desc">${proj.desc}</p>
            <div class="project-tags">
              ${(proj.tags || []).slice(0, 4).map(tag => `<span class="tag-pill"><i class="fa-solid fa-bolt" style="font-size: 0.58rem; color: var(--primary-light);"></i> ${tag}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="project-actions">
          <button class="btn-card btn-card-preview" onclick="openLivePreview('${proj.id}')" title="Test Live App Inside Page">
            <i class="fa-solid fa-play"></i> Preview
          </button>
          <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Open Live Project in New Tab" onclick="playTone(523.25, 'sine', 0.06)">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
          </a>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" title="View Source Code on GitHub" onclick="playTone(440, 'sine', 0.06)">
            <i class="fa-brands fa-github"></i> Code
          </a>
          <button class="btn-card btn-card-info" onclick="openProjectModal('${proj.id}')" title="Full Project Specs & Engineering">
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

  const domainText = cleanDomain(proj.liveDemo);
  const previewSrc = getProjectPreviewImage(proj);
  const targetUrl = proj.liveDemo || proj.github;

  const featuresList = proj.features || [
    "High-Performance Web Architecture",
    "100% Mobile & Touch Responsive",
    "Modern Glassmorphic Aesthetics",
    "Seamless Cross-Browser Support"
  ];

  projectModalBody.innerHTML = `
    <!-- Top Hero Visual Banner with Live Screenshot -->
    <div class="modal-proj-hero">
      <img src="${previewSrc}" alt="${proj.title} Preview" class="modal-proj-hero-img" onerror="handlePreviewImgError(this, '${targetUrl}')" />
      <div class="modal-hero-badge">
        <i class="fa-solid fa-lock" style="font-size: 0.65rem; color: #34d399;"></i>
        <span>${domainText}</span>
      </div>
      <div class="modal-hero-status">
        <span class="status-pulse-green"></span>
        <span>${proj.badgeText || 'Live & Verified'}</span>
      </div>
    </div>

    <!-- Title & Category Heading -->
    <div style="margin-bottom: 0.85rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.35rem;">
        <h2 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 0; line-height: 1.3;">
          ${proj.title}
        </h2>
        <span class="project-cat-badge">${proj.categoryLabel || 'Featured Project'}</span>
      </div>
      <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.6; margin: 0.4rem 0 0.85rem 0;">
        ${proj.longDesc || proj.desc}
      </p>
    </div>

    <!-- Engineering Highlights / Key Features Grid -->
    <div style="margin-bottom: 1.1rem;">
      <h4 style="font-size: 0.74rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.45rem; letter-spacing: 0.06em; display: flex; align-items: center; gap: 0.4rem;">
        <i class="fa-solid fa-sparkles" style="color: #ec4899;"></i> Core Highlights & Engineering
      </h4>
      <div class="modal-features-grid">
        ${featuresList.map(feat => `
          <div class="modal-feature-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${feat}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Tech Stack & Architecture Tags -->
    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.74rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.45rem; letter-spacing: 0.06em;">
        <i class="fa-solid fa-layer-group" style="color: #a78bfa;"></i> Tech Stack & Architecture
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${(proj.tags || []).map(tag => `<span class="skill-pill" style="font-size: 0.74rem; padding: 0.3rem 0.65rem;"><i class="fa-solid fa-code"></i> ${tag}</span>`).join('')}
      </div>
    </div>

    <!-- 3-Button High-Converting Action Bar -->
    <div class="modal-actions-grid">
      <button class="btn-card btn-card-preview" onclick="closeProjectModal(); openLivePreview('${proj.id}')" title="Test Live Interactive Simulator">
        <i class="fa-solid fa-play"></i> Simulator
      </button>
      <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Launch Full App">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open App
      </a>
      <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" title="View Source on GitHub">
        <i class="fa-brands fa-github"></i> Code
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

// --- Vercel-Style Live Project Preview Simulator Modal ---
const previewModalOverlay = document.getElementById("preview-modal-overlay");
const previewModalContainer = document.getElementById("preview-modal-container");
const previewIframe = document.getElementById("preview-iframe");
const previewBrowserUrl = document.getElementById("preview-browser-url");
const previewExternalLink = document.getElementById("preview-external-link");
const previewLoader = document.getElementById("preview-loader");
const previewLoadingTitle = document.getElementById("preview-loading-title");
const previewFallbackBanner = document.getElementById("preview-fallback-banner");
const fallbackProjName = document.getElementById("fallback-proj-name");
const previewFallbackBtn = document.getElementById("preview-fallback-btn");
let previewFallbackTimeout = null;

function openLivePreview(id) {
  playTone(523.25, 'triangle', 0.1);
  const proj = projectsData.find(p => p.id === id);
  if (!proj || !previewModalOverlay) return;

  const targetUrl = proj.liveDemo || proj.github;

  if (previewBrowserUrl) {
    previewBrowserUrl.textContent = targetUrl;
  }
  if (previewExternalLink) {
    previewExternalLink.href = targetUrl;
  }
  if (previewFallbackBtn) {
    previewFallbackBtn.href = targetUrl;
  }
  if (fallbackProjName) {
    fallbackProjName.textContent = proj.title;
  }

  // Reset to desktop view and standard window size
  setPreviewDevice('desktop');
  if (previewModalContainer) {
    previewModalContainer.classList.remove("fullscreen");
  }

  // Reset states & show loader
  if (previewFallbackBanner) {
    previewFallbackBanner.style.display = "none";
  }
  if (previewLoader) {
    previewLoader.style.display = "flex";
  }
  if (previewLoadingTitle) {
    previewLoadingTitle.textContent = `Connecting to ${cleanDomain(targetUrl)}...`;
  }

  // Clear previous timer
  if (previewFallbackTimeout) {
    clearTimeout(previewFallbackTimeout);
  }

  if (previewIframe) {
    previewIframe.onload = () => {
      if (previewLoader) previewLoader.style.display = "none";
      if (previewFallbackTimeout) clearTimeout(previewFallbackTimeout);
    };

    // 7s fallback notice if external domain restricts iframe embedding
    previewFallbackTimeout = setTimeout(() => {
      if (previewLoader) previewLoader.style.display = "none";
      if (previewFallbackBanner) previewFallbackBanner.style.display = "flex";
    }, 7000);

    previewIframe.src = targetUrl;
  }

  previewModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePreviewModal() {
  playTone(392, 'sine', 0.08);
  if (previewFallbackTimeout) {
    clearTimeout(previewFallbackTimeout);
  }
  if (previewModalOverlay) {
    previewModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
  // Terminate background media/audio/canvas loops
  if (previewIframe) {
    previewIframe.src = "about:blank";
  }
  if (previewLoader) {
    previewLoader.style.display = "none";
  }
  if (previewFallbackBanner) {
    previewFallbackBanner.style.display = "none";
  }
}

function minimizePreviewModal() {
  closePreviewModal();
}

function refreshPreviewIframe() {
  playTone(440, 'sine', 0.06);
  if (!previewIframe || !previewIframe.src || previewIframe.src === "about:blank") return;
  const currentSrc = previewIframe.src;
  if (previewLoader) previewLoader.style.display = "flex";
  if (previewFallbackBanner) previewFallbackBanner.style.display = "none";
  previewIframe.src = "about:blank";
  setTimeout(() => {
    previewIframe.src = currentSrc;
  }, 120);
}

function setPreviewDevice(mode) {
  playTone(493.88, 'sine', 0.06);
  const desktopBtn = document.getElementById("btn-device-desktop");
  const tabletBtn = document.getElementById("btn-device-tablet");
  const mobileBtn = document.getElementById("btn-device-mobile");

  [desktopBtn, tabletBtn, mobileBtn].forEach(b => {
    if (b) b.classList.remove("active");
  });

  if (previewModalContainer) {
    previewModalContainer.classList.remove("device-tablet", "device-mobile");
  }

  if (mode === 'mobile') {
    if (mobileBtn) mobileBtn.classList.add("active");
    if (previewModalContainer) previewModalContainer.classList.add("device-mobile");
  } else if (mode === 'tablet') {
    if (tabletBtn) tabletBtn.classList.add("active");
    if (previewModalContainer) previewModalContainer.classList.add("device-tablet");
  } else {
    if (desktopBtn) desktopBtn.classList.add("active");
  }
}

function togglePreviewFullscreen() {
  playTone(587.33, 'sine', 0.08);
  if (previewModalContainer) {
    previewModalContainer.classList.toggle("fullscreen");
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
    closePreviewModal();
  }
});

[projectModalOverlay, shareModalOverlay, resumeModalOverlay, previewModalOverlay].forEach(overlay => {
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeProjectModal();
        closeShareModal();
        closeResumeModal();
        closePreviewModal();
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
