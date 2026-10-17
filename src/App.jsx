

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import emailjs from "@emailjs/browser";
import awaisPhoto from "./assets/awais.jpg";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  CloudRain,
  CloudSun,
  Code2,
  Command,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  FolderKanban,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  Network,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Sun,
  Terminal,
  Users,
  UploadCloud,
  Utensils,
  Wallet,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const EMAIL = "awaisaps1218@gmail.com";
const WHATSAPP = "https://wa.me/923029789849";
const GITHUB = "https://github.com/Awaisbuilds-prog";

const projects = [
  {
    name: "WeatherNow",
    type: "Frontend application",
    description:
      "A responsive weather experience with city search, current conditions, location detection, and forecast information.",
    icon: CloudSun,
    stack: ["React", "Vite", "OpenWeather API"],
    color: "blue",
    status: "Built",
    category: "Application",
    href: "https://github.com/Awaisbuilds-prog/weather-app",
  },
  {
    name: "Expense Tracker",
    type: "Personal finance application",
    description:
      "A finance dashboard for recording expenses, tracking income, reviewing spending, and monitoring the remaining balance.",
    icon: Wallet,
    stack: ["React", "Vite", "Local storage"],
    color: "green",
    status: "Built",
    category: "Application",
    href: GITHUB,
  },
  {
    name: "File Upload API",
    type: "Backend engineering",
    description:
      "A REST API for uploading, validating, retrieving, and deleting files using Node.js, Express, Multer, and MongoDB GridFS.",
    icon: FileCode2,
    stack: ["Node.js", "Express", "MongoDB"],
    color: "cyan",
    status: "Built",
    category: "API",
    href: "https://github.com/Awaisbuilds-prog/file-upload-api",
  },
  {
    name: "User Management System",
    type: "Full-stack application",
    description:
      "A user administration project exploring account records, department management, dashboard analytics, and database integration.",
    icon: Users,
    stack: ["React", "Express", "PostgreSQL"],
    color: "purple",
    status: "In progress",
    category: "Application",
    href: GITHUB,
  },
  {
    name: "ShopSphere",
    type: "E-commerce website",
    description:
      "A modern online storefront concept with product discovery, category filters, product cards, pricing, and a shopping-cart interface.",
    icon: ShoppingBag,
    stack: ["React", "CSS", "Shopping cart UI"],
    color: "orange",
    status: "Concept",
    category: "Concept",
    href: null,
  },
  {
    name: "Savora",
    type: "Restaurant website",
    description:
      "An elegant restaurant website concept featuring a visual menu, food categories, opening hours, and a table-reservation interface.",
    icon: Utensils,
    stack: ["React", "CSS", "Responsive design"],
    color: "green",
    status: "Concept",
    category: "Concept",
    href: null,
  },
  {
    name: "AgentGuard",
    type: "Security product concept",
    description:
      "A proposed safety layer for AI agents, designed to inspect risky actions, apply permissions, and create an audit trail before execution.",
    icon: ShieldCheck,
    stack: ["AI safety", "Policy engine", "Audit logs"],
    color: "green",
    status: "Concept",
    category: "Concept",
    href: null,
  },
  {
    name: "DevFlow",
    type: "Developer productivity concept",
    description:
      "A proposed workspace for tracking development tasks, GitHub activity, deployment health, and project progress from one interface.",
    icon: Workflow,
    stack: ["React", "Node.js", "GitHub API"],
    color: "orange",
    status: "Concept",
    category: "Concept",
    href: null,
  },
  {
    name: "LocalLens",
    type: "Smart discovery concept",
    description:
      "A proposed location-aware discovery tool that organizes useful local services and community resources into a searchable interface.",
    icon: Network,
    stack: ["Maps API", "React", "Geolocation"],
    color: "pink",
    status: "Concept",
    category: "Concept",
    href: null,
  },
];

const skills = [
  { name: "React", group: "Frontend", level: "Building" },
  { name: "JavaScript", group: "Frontend", level: "Building" },
  { name: "HTML & CSS", group: "Frontend", level: "Building" },
  { name: "Node.js", group: "Backend", level: "Building" },
  { name: "Express", group: "Backend", level: "Building" },
  { name: "PostgreSQL", group: "Database", level: "Learning" },
  { name: "MongoDB", group: "Database", level: "Building" },
  { name: "Git & GitHub", group: "Tools", level: "Building" },
];

const timeline = [
  {
    date: "PHASE 01",
    title: "Frontend foundations",
    detail: "Building responsive interfaces and interactive web experiences.",
  },
  {
    date: "PHASE 02",
    title: "Backend engineering",
    detail: "Working with APIs, databases, validation, and server-side logic.",
  },
  {
    date: "PHASE 03",
    title: "Full-stack systems",
    detail: "Connecting user interfaces, services, and persistent data.",
  },
  {
    date: "NEXT OBJECTIVE",
    title: "Production-ready products",
    detail: "Improving security, testing, deployment, and maintainability.",
  },
];

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {number && <span className="section-number">{number}</span>}
    </div>
  );
}

/*
 * Illustrative mockups only.
 * Sample figures, products, and menu items are not live services.
 */
function ProjectPreview({ name }) {
  if (name === "WeatherNow") {
    return (
      <div className="project-preview weather-preview">
        <div className="project-preview-header">
          <span><CloudSun size={15} /> WeatherNow</span>
          <span className="preview-live-dot" />
        </div>

        <div className="weather-main">
          <div>
            <p className="weather-location">Your location</p>
            <div className="weather-temperature">28°</div>
            <p className="weather-condition">Sunny skies</p>
          </div>
          <div className="weather-sun" aria-hidden="true">
            <Sun size={55} strokeWidth={1.5} />
          </div>
        </div>

        <div className="weather-forecast">
          <div className="weather-day"><span>MON</span><Sun size={17} /><strong>28°</strong></div>
          <div className="weather-day"><span>TUE</span><Cloud size={17} /><strong>26°</strong></div>
          <div className="weather-day"><span>WED</span><CloudRain size={17} /><strong>24°</strong></div>
          <div className="weather-day"><span>THU</span><Sun size={17} /><strong>29°</strong></div>
        </div>
      </div>
    );
  }

  if (name === "Expense Tracker") {
    return (
      <div className="project-preview finance-preview">
        <div className="project-preview-header">
          <span><Wallet size={15} /> Expense Tracker</span>
          <span className="preview-pill">OVERVIEW</span>
        </div>

        <span className="finance-balance-label">Sample available balance</span>
        <div className="finance-balance">$2,840.00</div>

        <div className="finance-metrics">
          <div className="finance-metric">
            <span className="finance-metric-icon income-icon"><ArrowDownRight size={15} /></span>
            <div><span>Income</span><strong>$3,200</strong></div>
          </div>
          <div className="finance-metric">
            <span className="finance-metric-icon expense-icon"><ArrowUpRight size={15} /></span>
            <div><span>Expenses</span><strong>$360</strong></div>
          </div>
        </div>

        <div className="finance-progress"><span /></div>
        <p className="preview-footnote">Illustrative sample figures</p>
      </div>
    );
  }

  if (name === "User Management System") {
    return (
      <div className="project-preview users-preview">
        <div className="project-preview-header">
          <span><Users size={15} /> Team directory</span>
          <span className="preview-pill">ADMIN</span>
        </div>

        <div className="users-preview-table">
          <div className="users-preview-row users-preview-head">
            <span>USER</span><span>ROLE</span><span>STATUS</span>
          </div>
          {[
            ["A", "Alex", "Admin", "avatar-one"],
            ["S", "Sarah", "Editor", "avatar-two"],
            ["D", "David", "User", "avatar-three"],
          ].map(([initial, userName, role, avatar]) => (
            <div className="users-preview-row" key={userName}>
              <span className="preview-user">
                <span className={`preview-avatar ${avatar}`}>{initial}</span>
                {userName}
              </span>
              <span className="user-role">{role}</span>
              <span className="user-active-dot" />
            </div>
          ))}
        </div>

        <p className="preview-footnote">Illustrative dashboard preview</p>
      </div>
    );
  }

  if (name === "File Upload API") {
    return (
      <div className="project-preview upload-preview">
        <div className="project-preview-header">
          <span><FileText size={15} /> File workspace</span>
          <span className="preview-pill">API</span>
        </div>

        <div className="upload-dropzone">
          <span className="upload-cloud-icon"><UploadCloud size={27} /></span>
          <strong>Upload your files</strong>
          <span>Choose a file to send to the API</span>
        </div>

        <div className="upload-file-row">
          <span className="upload-file-icon"><FileText size={18} /></span>
          <div className="upload-file-info">
            <strong>portfolio-image.png</strong>
            <span>Example file · PNG</span>
          </div>
          <span className="upload-file-check"><CheckCircle2 size={17} /></span>
        </div>
      </div>
    );
  }

  if (name === "ShopSphere") {
    return (
      <div className="project-preview shop-preview">
        <div className="project-preview-header">
          <span><ShoppingBag size={15} /> ShopSphere</span>
          <span className="shop-cart"><ShoppingCart size={14} /><b>2</b></span>
        </div>

        <div className="shop-search">
          <Search size={12} />
          <span>Find your next favorite...</span>
        </div>

        <div className="shop-categories">
          <span className="shop-category-active">All</span>
          <span>Fashion</span>
          <span>Tech</span>
          <span>Home</span>
        </div>

        <div className="shop-products">
          <div className="shop-product">
            <div className="shop-product-image shop-product-one">
              <ShoppingBag size={28} />
            </div>
            <span className="shop-product-name">Everyday bag</span>
            <strong>$39.00</strong>
          </div>
          <div className="shop-product">
            <div className="shop-product-image shop-product-two">
              <Monitor size={28} />
            </div>
            <span className="shop-product-name">Studio audio</span>
            <strong>$79.00</strong>
          </div>
          <div className="shop-product">
            <div className="shop-product-image shop-product-three">
              <Zap size={28} />
            </div>
            <span className="shop-product-name">Smart accessory</span>
            <strong>$24.00</strong>
          </div>
        </div>

        <p className="preview-footnote">Storefront concept · Sample products</p>
      </div>
    );
  }

  if (name === "Savora") {
    return (
      <div className="project-preview savora-preview">
        <div className="project-preview-header">
          <span><Utensils size={15} /> SAVORA</span>
          <span className="savora-open"><span /> OPEN TODAY</span>
        </div>

        <div className="savora-hero">
          <span className="savora-eyebrow">FRESH · SEASONAL · LOCAL</span>
          <strong>A little taste<br />of something special.</strong>
          <span className="savora-cta">EXPLORE OUR MENU <ArrowRight size={11} /></span>
        </div>

        <div className="savora-menu-heading">
          <span>FAVORITES FROM OUR MENU</span>
          <span>VIEW ALL ↗</span>
        </div>

        <div className="savora-menu">
          <div className="savora-dish">
            <div className="savora-dish-image dish-one">🍝</div>
            <div><strong>Garden pasta</strong><span>Fresh herbs · Parmesan</span></div>
            <b>$14</b>
          </div>
          <div className="savora-dish">
            <div className="savora-dish-image dish-two">🥗</div>
            <div><strong>Harvest bowl</strong><span>Seasonal vegetables</span></div>
            <b>$11</b>
          </div>
        </div>

        <p className="preview-footnote">Restaurant concept · Sample menu</p>
      </div>
    );
  }

  const conceptDetails = {
    AgentGuard: {
      label: "AI SAFETY LAYER",
      headline: "Action review",
      description: "Permissions · Risk checks · Audit trail",
      icon: ShieldCheck,
    },
    DevFlow: {
      label: "DEV WORKSPACE",
      headline: "Build progress",
      description: "Tasks · Deployments · Activity",
      icon: Workflow,
    },
    LocalLens: {
      label: "LOCAL DISCOVERY",
      headline: "Explore nearby",
      description: "Places · Services · Community",
      icon: Network,
    },
  };

  const concept = conceptDetails[name];

  if (concept) {
    const ConceptIcon = concept.icon;

    return (
      <div className="project-preview concept-preview">
        <div className="project-preview-header">
          <span><ConceptIcon size={15} /> {concept.label}</span>
          <span className="preview-pill">CONCEPT</span>
        </div>
        <div className="concept-preview-center">
          <span className="concept-preview-icon"><ConceptIcon size={31} strokeWidth={1.5} /></span>
          <strong>{concept.headline}</strong>
          <span>{concept.description}</span>
        </div>
        <div className="concept-preview-lines"><span /><span /><span /></div>
      </div>
    );
  }

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("dev-os-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  const [activeFilter, setActiveFilter] = useState("All");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "system --status",
      output: "AWAIS AHMAD portfolio initialized. Type help to explore.",
    },
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      localStorage.setItem("dev-os-theme", theme);
    } catch {
      // The selected theme still works if storage is unavailable.
    }

    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const filters = ["All", "Application", "API", "Concept"];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  function runCommand(event) {
    event.preventDefault();

    const enteredCommand = terminalInput.trim();
    const command = enteredCommand.toLowerCase();

    if (!command) return;

    const responses = {
      help: "Commands: about, skills, projects, contact, clear",
      about:
        "Awais Ahmad: BS IT student building web applications, APIs, and full-stack projects.",
      skills:
        "React · JavaScript · Node.js · Express · PostgreSQL · MongoDB",
      projects:
        "Portfolio includes application projects, backend work, and clearly labelled concepts.",
      contact: `Email: ${EMAIL}`,
    };

    if (command === "clear") {
      setTerminalHistory([]);
    } else {
      setTerminalHistory((history) => [
        ...history.slice(-5),
        {
          command: enteredCommand,
          output:
            responses[command] ||
            `Command not found: ${command}. Type help.`,
        },
      ]);
    }

    setTerminalInput("");
  }

  function handleContactChange(event) {
    const { name, value } = event.target;

    setContactForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (contactStatus.type) {
      setContactStatus({ type: "", message: "" });
    }
  }

  async function handleContactSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is incomplete.", {
        serviceIdPresent: Boolean(serviceId),
        templateIdPresent: Boolean(templateId),
        publicKeyPresent: Boolean(publicKey),
      });

      setContactStatus({
        type: "error",
        message:
          "Email service is not configured correctly. Please email me directly.",
      });
      return;
    }

    const templateParams = {
      from_name: contactForm.name.trim(),
      from_email: contactForm.email.trim(),
      message: contactForm.message.trim(),
      to_email: EMAIL,
    };

    setIsSending(true);
    setContactStatus({
      type: "sending",
      message: "Sending your message...",
    });

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      console.info("EmailJS message sent successfully.", {
        status: response.status,
        text: response.text,
      });

      setContactForm({
        name: "",
        email: "",
        message: "",
      });

      setContactStatus({
        type: "success",
        message: "Message sent successfully! Thanks for reaching out.",
      });
    } catch (error) {
      const errorDetails = {
        status: error?.status ?? "Unknown",
        text: error?.text ?? "No error details returned by EmailJS.",
        message: error?.message ?? "No additional error message.",
      };

      console.error("EmailJS submission failed:", errorDetails);
      console.error("Full EmailJS error object:", error);

      setContactStatus({
        type: "error",
        message: error?.status
          ? `Email could not be sent (error ${error.status}). Check the browser Console for details.`
          : "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const navItems = [
    ["Overview", "#overview"],
    ["Projects", "#projects"],
    ["Stack", "#stack"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ];

  return (
    <div className={`app-shell ${theme === "light" ? "light-mode" : ""}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#overview" aria-label="Awais Ahmad home">
          <span className="brand-mark"><Braces size={22} /></span>
          <span>
            <strong>AWAIS <span>AHMAD</span></strong>
            <small>PERSONAL PORTFOLIO</small>
          </span>
        </a>

        <nav className={mobileOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMobileOpen(false)}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setTheme((previous) =>
                previous === "dark" ? "light" : "dark"
              )
            }
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>

          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="overview">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="availability">
              <span className="availability-dot" />
              DEVELOPER MODE <span className="availability-divider">/</span> ONLINE
            </div>

            <p className="hero-kicker">HELLO, WORLD. I'M A DEVELOPER.</p>

            <h1>
              Building ideas
              <br />
              into <span className="gradient-text">digital reality.</span>
            </h1>

            <p className="hero-description">
              I'm a BS IT student exploring full-stack development, thoughtful
              interfaces, and useful software. This is my workspace for
              projects, experiments, and what I'm learning next.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                <Mail size={17} /> Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><Code2 size={15} /> FULL-STACK DEVELOPMENT</span>
              <span><Zap size={15} /> ALWAYS LEARNING</span>
            </div>
          </motion.div>

          <motion.div
            className="profile-panel glass-panel"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="panel-topline">
              <span><CircleDot size={13} /> DEVELOPER PROFILE</span>
              <span className="panel-code">PROFILE_001</span>
            </div>

            <div className="avatar-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="avatar-placeholder avatar-photo-frame">
                <span className="avatar-bracket avatar-bracket-tl" />
                <span className="avatar-bracket avatar-bracket-tr" />
                <img
                  src={awaisPhoto}
                  alt="Awais Ahmad — Full-Stack Developer"
                  className="profile-photo"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                    borderRadius: "inherit",
                  }}
                />
              </div>
              <span className="floating-chip chip-top"><Cpu size={15} /> BUILD MODE</span>
              <span className="floating-chip chip-bottom"><Activity size={15} /> LEARNING ACTIVE</span>
            </div>

            <div className="profile-name">
              <div>
                <h2>Awais Ahmad</h2>
                <p>Full-Stack Developer · In Progress</p>
              </div>
              <span className="profile-status"><span /> ACTIVE</span>
            </div>

            <div className="profile-divider" />

            <div className="profile-facts">
              <div><span>FOCUS</span><strong>Web Engineering</strong></div>
              <div><span>EDUCATION</span><strong>BS Information Technology</strong></div>
              <div><span>WORKSPACE</span><strong>AWAIS AHMAD / Personal</strong></div>
            </div>
          </motion.div>
        </section>

        <section className="dashboard section-wrap">
          <div className="dashboard-heading">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> MISSION CONTROL</span>
              <h2>Workspace overview</h2>
            </div>
            <span className="live-label"><span /> PERSONAL PORTFOLIO</span>
          </div>

          <div className="stats-grid">
            <motion.article className="stat-card" whileHover={reduceMotion ? {} : { y: -4 }}>
              <div className="stat-icon icon-blue"><FolderKanban size={20} /></div>
              <span className="stat-label">PORTFOLIO ENTRIES</span>
              <div className="stat-value">{projects.length.toString().padStart(2, "0")}<span> items</span></div>
              <p>Projects and concepts, labelled clearly</p>
              <div className="stat-foot"><Layers3 size={14} /> PROJECT LIBRARY</div>
            </motion.article>

            <motion.article className="stat-card" whileHover={reduceMotion ? {} : { y: -4 }}>
              <div className="stat-icon icon-cyan"><Code2 size={20} /></div>
              <span className="stat-label">CORE TECHNOLOGIES</span>
              <div className="stat-value">{skills.length.toString().padStart(2, "0")}<span> listed</span></div>
              <p>Tools used or currently being learned</p>
              <div className="stat-foot"><Cpu size={14} /> TECH MATRIX</div>
            </motion.article>

            <motion.article className="stat-card" whileHover={reduceMotion ? {} : { y: -4 }}>
              <div className="stat-icon icon-purple"><Terminal size={20} /></div>
              <span className="stat-label">INTERACTIVE TERMINAL</span>
              <div className="stat-value">CLI<span> enabled</span></div>
              <p>Try commands inside this portfolio</p>
              <div className="stat-foot"><Command size={14} /> TYPE help BELOW</div>
            </motion.article>

            <motion.article className="stat-card" whileHover={reduceMotion ? {} : { y: -4 }}>
              <div className="stat-icon icon-green"><ShieldCheck size={20} /></div>
              <span className="stat-label">BUILD PHILOSOPHY</span>
              <div className="stat-value">Learn<span> → build</span></div>
              <p>Small steps toward useful products</p>
              <div className="stat-foot"><CheckCircle2 size={14} /> PROGRESS OVER HYPE</div>
            </motion.article>
          </div>

          <div className="dashboard-lower">
            <article className="panel focus-panel">
              <div className="panel-heading">
                <div><span className="eyebrow">CURRENT FOCUS</span><h3>What I'm building toward</h3></div>
                <span className="panel-icon"><Sparkles size={18} /></span>
              </div>

              <div className="focus-row">
                <span className="focus-symbol"><Monitor size={18} /></span>
                <div><strong>Product interfaces</strong><p>Accessible, responsive React experiences</p></div>
                <ChevronRight size={17} />
              </div>
              <div className="focus-row">
                <span className="focus-symbol"><Database size={18} /></span>
                <div><strong>Reliable APIs</strong><p>Validation, database operations, and errors</p></div>
                <ChevronRight size={17} />
              </div>
              <div className="focus-row">
                <span className="focus-symbol"><ShieldCheck size={18} /></span>
                <div><strong>Safer software</strong><p>Security, permissions, and trustworthy workflows</p></div>
                <ChevronRight size={17} />
              </div>
            </article>

            <article className="panel terminal-panel" id="terminal">
              <div className="terminal-header">
                <div><Terminal size={17} /><strong>awais-terminal</strong></div>
                <div className="terminal-lights"><i /><i /><i /></div>
              </div>

              <div className="terminal-body">
                <p className="terminal-welcome">AWAIS AHMAD interactive shell <span>v1.0</span></p>
                {terminalHistory.map((item, index) => (
                  <div className="terminal-entry" key={`${item.command}-${index}`}>
                    <p><span className="terminal-prompt">awais@portfolio:~$</span> {item.command}</p>
                    <p className="terminal-output">{item.output}</p>
                  </div>
                ))}

                <form className="terminal-form" onSubmit={runCommand}>
                  <label className="terminal-prompt" htmlFor="terminal-command">awais@portfolio:~$</label>
                  <input
                    id="terminal-command"
                    value={terminalInput}
                    onChange={(event) => setTerminalInput(event.target.value)}
                    placeholder="type a command..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button type="submit" aria-label="Run terminal command"><ArrowRight size={16} /></button>
                </form>
              </div>

              <div className="terminal-hint">TRY: help · about · skills · projects · contact · clear</div>
            </article>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects & experiments."
            description="A growing collection of applications, backend work, and future product ideas. Concepts are marked honestly."
            number="01 / WORK"
          />

          <div className="project-toolbar">
            <div className="filter-tabs" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? "filter-tab active" : "filter-tab"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="project-count">{visibleProjects.length} ENTRIES</span>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  className={`project-card project-${project.color}`}
                  key={project.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.4, delay: index * 0.045 }}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                >
                  <ProjectPreview name={project.name} />

                  <div className="project-card-top">
                    <div className="project-icon"><ProjectIcon size={23} /></div>
                    <span className={`project-status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
                      <span /> {project.status}
                    </span>
                  </div>

                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <div className="project-card-footer">
                    <span>{project.category === "Concept" ? "PROPOSED IDEA" : "PROJECT ENTRY"}</span>

                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}>
                        View repository <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="concept-note"><Sparkles size={14} /> Concept only</span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="stack-section section-wrap" id="stack">
          <SectionHeading
            eyebrow="TECH MATRIX"
            title="Tools in my workspace."
            description="A practical overview of technologies I've used or am currently learning—not a claim of expert-level proficiency."
            number="02 / STACK"
          />

          <div className="stack-layout">
            <div className="stack-intro panel">
              <div className="stack-orb"><Cpu size={36} /></div>
              <span className="eyebrow">DEVELOPER TOOLKIT</span>
              <h3>Learn the tools.<br /><span>Understand the system.</span></h3>
              <p>My focus is to understand how interfaces, APIs, and databases work together to deliver useful software.</p>
              <div className="stack-note"><Activity size={16} /> Skills evolve with every project.</div>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-card-icon"><Braces size={19} /></div>
                  <div className="skill-card-text"><strong>{skill.name}</strong><span>{skill.group}</span></div>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <SectionHeading
            eyebrow="DEVELOPMENT ROADMAP"
            title="The journey is the work."
            description="A transparent snapshot of my learning path and the areas I'm working to strengthen."
            number="03 / JOURNEY"
          />

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-content"><span>{item.date}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
                <ArrowDownRight className="timeline-arrow" size={19} />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration">
              <Network size={160} strokeWidth={0.55} />
            </div>

            <div className="contact-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                HAVE AN IDEA?
              </span>

              <h2>
                Let's build something meaningful.
                <br />
                <span>From ideas to working software.</span>
              </h2>

              <p>
                Every great project starts with a conversation. Whether you
                have an idea for a website, a full-stack application, or a
                problem that needs a practical solution, let's explore how
                we can bring it to life.
              </p>

              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${EMAIL}`}>
                  <Mail size={17} />
                  Email me
                  <ArrowUpRight size={16} />
                </a>

                <a
                  className="button button-whatsapp"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>

              <div className="contact-copy-note">
                <span className="contact-copy-note-icon">
                  <Code2 size={17} />
                </span>
                <div>
                  <strong>From ideas to working software</strong>
                  <p>
                    Web applications, REST APIs, and thoughtful digital
                    experiences. Ideas welcome. Let's make something useful.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon"><Mail size={17} /></span>
                <div>
                  <small>EMAIL ADDRESS</small>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <a href={`mailto:${EMAIL}`} aria-label="Send email">
                  <ExternalLink size={15} />
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon whatsapp-icon">
                  <MessageCircle size={17} />
                </span>
                <div>
                  <small>WHATSAPP</small>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    +92 302 9789849
                  </a>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open WhatsApp"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon"><Code2 size={17} /></span>
                <div>
                  <small>GITHUB</small>
                  <a href={GITHUB} target="_blank" rel="noreferrer">
                    Awaisbuilds-prog
                  </a>
                </div>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-form-heading">
                  <span className="eyebrow">
                    <span className="eyebrow-dot" />
                    SEND A MESSAGE
                  </span>
                  <p>Have a question or project in mind?</p>
                </div>

                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  maxLength={100}
                  required
                />

                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  maxLength={254}
                  required
                />

                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={5}
                  minLength={5}
                  maxLength={3000}
                  required
                />

                <button
                  className="button button-primary contact-submit"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>

                {contactStatus.message && (
                  <p
                    className={`contact-form-status ${contactStatus.type}`}
                    role="status"
                    aria-live="polite"
                  >
                    {contactStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#overview">
          <span className="brand-mark"><Braces size={20} /></span>
          <span>
            <strong>AWAIS <span>AHMAD</span></strong>
            <small>PERSONAL PORTFOLIO</small>
          </span>
        </a>
        <p>Designed to learn. Built to grow.</p>
        <a className="back-top" href="#overview">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </footer>

      <div className="corner-status">
        <span /> SYSTEM READY <span className="corner-divider">/</span> AWAIS AHMAD
      </div>
    </div>
  );
}

export default App;
