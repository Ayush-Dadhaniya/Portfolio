"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Menu,
  X,
  Copy,
  Check,
  Code2,
  ShieldCheck,
  Radio,
  MapPin,
} from "lucide-react";

const email = "ayushdadhaniya05@gmail.com";
const projects = [
  {
    name: "Chillflick",
    category: "Real-time",
    type: "REAL-TIME COLLABORATION",
    image: "/chillflicks.png",
    description: "A watch party, wherever you are.",
    detail:
      "A YouTube watch-party application that brings synchronized playback and chat into one shared experience.",
    stack: ["React", "Node.js", "Socket.IO"],
    github: "ChillFlicks",
    live: "https://chillflick.vercel.app/",
    color: "lavender",
    focus: "Synchronized video · Shared rooms · Live chat",
  },
  {
    name: "DoTrack",
    category: "Full-stack",
    type: "TEAM PRODUCTIVITY",
    image: "/dotrack.png",
    description: "Less coordination. More doing.",
    detail:
      "A task-management application for teams to create and assign work, with a React interface and a PostgreSQL-backed API.",
    stack: ["React", "Express", "PostgreSQL"],
    github: "stamuraiTask",
    live: "https://dotrack.vercel.app/",
    color: "mint",
    focus: "Task creation · Assignment · Team workflows",
  },
  {
    name: "Chasko Coffee Stop",
    category: "Full-stack",
    type: "DIGITAL COMMERCE",
    image: "/chaskocoffeestop.png",
    description: "A local coffee experience, online.",
    detail:
      "An online coffee-shop application connecting a React storefront to a Django backend and PostgreSQL database.",
    stack: ["React", "Django", "PostgreSQL"],
    github: "ChaskoCoffeeStop",
    live: "https://chasko-coffee-stop.vercel.app/",
    color: "sand",
    focus: "Storefront · Backend integration · Relational data",
  },
  {
    name: "DiagnosAI",
    category: "AI & data",
    type: "APPLIED MACHINE LEARNING",
    image: "/diagnosAI.png",
    description: "Exploring the possibilities of ML.",
    detail:
      "An educational disease-prediction project exploring a web interface for machine learning. A learning prototype, not a clinical diagnostic tool.",
    stack: ["React", "Django", "Kaggle"],
    github: "DiagnosAI",
    live: "https://diagnos-ai.vercel.app/",
    color: "blue",
    focus: "Prediction interface · Dataset exploration · ML integration",
  },
];
const certificates = [
  {
    name: "Ethical Hacking Essentials (EHE) - EC-Council",
    image: "/ethical_kacking_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/QJPHUCXN5LDQ",
  },
  {
    name: "Employee of the month - CEREBULB",
    image: "/Employee of the month_page-0001.jpg",
    link: "/Employee of the month_page-0001.jpg",
  },
  {
    name: "Building Generative AI-Powered Applications with Python - IBM",
    image: "/AI_pow_appl_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/GJCU8V6NRK7E",
  },
  {
    name: "Algorithmic Thinking (Part 1)",
    image: "/algorithm_think_1_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/QSMHADPCAQV5",
  },
  {
    name: "Algorithmic Thinking (Part 2)",
    image: "/algorithm_think_2_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/RG5MYHFA37P6",
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    image: "/data_analysis_ml_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/GPLH4YZXYJVA",
  },
  {
    name: "HTML, CSS, and Javascript for Web Developers",
    image: "/web_dev_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/HUYWPXHU5HTX",
  },
  {
    name: "Data Structures",
    image: "/Data_Structure_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/BXBDXTZZBL8Q",
  },
  {
    name: "The Structured Query Language (SQL)",
    image: "/SQL_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/UPZNJ7HDHJEK",
  },
  {
    name: "C for Everyone: Programming Fundamentals",
    image: "/C_Language_page-0001.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/G7Q2SZLET7EE",
  },
];
const experience = [
  {
    role: "Bug Hunter",
    company: "Bugcrowd",
    kind: "Independent security research",
    dates: "OCT 2025 — MAR 2026",
    text: "Investigated web application vulnerabilities through bug bounty programs. Documented security findings and reproduction steps for program teams.",
    tags: ["Web security", "Vulnerability assessment", "Technical reporting"],
  },
  {
    role: "Core Developer",
    company: "Barracks Technologies",
    kind: "Ahmedabad, India",
    dates: "MAY 2025 — OCT 2025",
    text: "Developed web applications and intentionally vulnerable lab environments for a cybersecurity training platform, supporting hands-on security assessment and reporting exercises.",
    tags: ["Full-stack development", "Security labs", "Application design"],
  },
  {
    role: "System Engineer",
    company: "CEREBULB",
    kind: "GIFT City, India",
    dates: "NOV 2023 — DEC 2024",
    text: "Developed IoT data-collection systems and real-time dashboards for a power generation and distribution client, helping teams monitor operations and maintenance needs.",
    tags: ["IoT systems", "Real-time dashboards", "Operational monitoring"],
  },
];
const navigation = [
  ["Work", "projects"],
  ["Experience", "experience"],
  ["About", "about"],
];
function External({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function Label({ children }) {
  return (
    <p className="eyebrow">
      <span className="tiny-square" />
      {children}
    </p>
  );
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [allCertificates, setAllCertificates] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  const visibleProjects = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Ayush Dadhaniya home">
            <span className="monogram">
              ad<span>.</span>
            </span>
            <span className="brand-name">
              AYUSH
              <br />
              DADHANIYA
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([name, id]) => (
              <a
                key={id}
                className={active === id ? "active" : ""}
                href={"#" + id}
              >
                {name}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            aria-controls="mobile-nav"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ...navigation,
              ["Education", "education"],
              ["Contact", "contact"],
            ].map(([name, id]) => (
              <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
                {name}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="home" className="hero wrap">
          <div className="hero-top">
            <Label>SOFTWARE DEVELOPER · MELBOURNE, AU</Label>
            <span className="availability">
              <i />
              Open to opportunities
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Thoughtful code.
                <br />
                Useful products.
                <br />
                <span>A security mindset.</span>
              </h1>
              <p className="hero-intro">
                I’m Ayush — a developer connecting full-stack engineering,
                cybersecurity, and real-world systems.
              </p>
              <p className="hero-description">
                From collaborative web apps to hands-on security labs, I build
                software with curiosity and purpose.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <ArrowDown size={18} />
                </a>
                <a
                  className="button text-button"
                  href="/Ayush_Dadhaniya_Resume.pdf"
                  download
                >
                  Download resume <Download size={17} />
                </a>
              </div>
              <div className="hero-footnote">
                <span className="small-cross">✳</span>Currently studying Master
                of IT at RMIT University
              </div>
            </div>
            <div className="portrait-composition">
              <div className="portrait-grid" />
              <span className="portrait-index">
                THE PERSON BEHIND THE CODE / 01
              </span>
              <div className="portrait-frame">
                <img
                  src="/image.png"
                  alt="Ayush Dadhaniya"
                  fetchPriority="high"
                  width="1534"
                  height="1599"
                />
                <span className="portrait-signature">Ayush Dadhaniya</span>
              </div>
              <div className="portrait-badge">
                <Code2 size={22} />
                <div>
                  Built with intention.
                  <span>Always learning. Always building.</span>
                </div>
              </div>
              <span className="orbit-mark" aria-hidden="true">
                ✳
              </span>
              <div className="portrait-location">
                <MapPin size={13} /> Melbourne, Australia <span>↗</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>FULL-STACK DEVELOPMENT</span>
            <span className="star">✳</span>
            <span>CYBERSECURITY</span>
            <span className="star">✳</span>
            <span>IoT & DATA SYSTEMS</span>
            <a href="#projects" aria-label="Scroll to selected work">
              <ArrowDown size={19} />
            </a>
          </div>
        </section>
        <section id="projects" className="work-section section-space">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label>01 / SELECTED WORK</Label>
                <h2>
                  Ideas made <em>real.</em>
                </h2>
              </div>
              <p>
                A selection of things I’ve built.
                <br />
                Explore the experience. Read the code.
              </p>
            </div>
            <div
              className="filter-row"
              role="group"
              aria-label="Filter projects"
            >
              {["All work", "Full-stack", "Real-time", "AI & data"].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "filter selected" : "filter"}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "All work" && <span>04</span>}
                </button>
              ))}
              <span className="project-count" aria-live="polite">
                {String(visibleProjects.length).padStart(2, "0")} PROJECTS
              </span>
            </div>
            <div className="project-grid">
              {visibleProjects.map((p) => (
                <article className="project-card" key={p.name}>
                  <External
                    href={p.live}
                    className={"project-visual " + p.color}
                    aria-label={"Open " + p.name + " live site"}
                  >
                    <div className="browser-window">
                      <div className="browser-bar">
                        <span />
                        <span />
                        <span />
                        <p>{new URL(p.live).hostname}</p>
                        <ArrowUpRight size={12} />
                      </div>
                      <img
                        src={p.image}
                        alt={p.name + " application preview"}
                        width="1400"
                        height="900"
                        loading="lazy"
                      />
                    </div>
                    <span className="project-open">
                      <ArrowUpRight size={22} />
                    </span>
                  </External>
                  <div className="project-info">
                    <p className="eyebrow project-type">{p.type}</p>
                    <div className="project-title">
                      <h3>{p.name}</h3>
                      <External
                        href={
                          p.github.startsWith("http")
                            ? p.github
                            : "https://github.com/Ayush-Dadhaniya/" + p.github
                        }
                        className="code-link"
                      >
                        <Github size={16} /> Source code{" "}
                        <ArrowUpRight size={14} />
                      </External>
                    </div>
                    <h4>{p.description}</h4>
                    <p className="project-description">{p.detail}</p>
                    <div className="tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <details className="project-details">
                      <summary>
                        Project focus <span>+</span>
                      </summary>
                      <p>{p.focus}</p>
                      <External href={p.live}>
                        Visit live project <ArrowUpRight size={14} />
                      </External>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <External
              className="all-github"
              href="https://github.com/Ayush-Dadhaniya"
            >
              <Github size={18} /> More of my code lives on GitHub{" "}
              <ArrowUpRight size={18} />
            </External>
          </div>
        </section>
        <section id="experience" className="experience-section section-space">
          <div className="wrap experience-layout">
            <div className="experience-intro">
              <Label>02 / EXPERIENCE</Label>
              <h2>
                Built beyond
                <br />
                the <em>classroom.</em>
              </h2>
              <p>
                Practical experience across software development, security
                research, and industrial systems.
              </p>
              <a
                className="inline-link"
                href="/Ayush_Dadhaniya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read my resume <ArrowUpRight size={18} />
              </a>
              <div className="experience-symbol" aria-hidden="true">
                ✳
              </div>
            </div>
            <div className="timeline">
              {experience.map((e, i) => (
                <article key={e.role} className="experience-item">
                  <div className="experience-top">
                    <span className="experience-number">0{i + 1}</span>
                    <p>{e.dates}</p>
                  </div>
                  <h3>{e.role}</h3>
                  <div className="company">
                    {e.company}
                    <span>{e.kind}</span>
                  </div>
                  <p className="experience-description">{e.text}</p>
                  <div className="tags">
                    {e.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about-section section-space wrap">
          <div className="section-heading">
            <div>
              <Label>03 / HOW I THINK</Label>
              <h2>
                A builder’s curiosity.
                <br />A defender’s <em>perspective.</em>
              </h2>
            </div>
            <p>
              I like understanding how systems work — and where they can fail.
              That perspective shapes how I approach software.
            </p>
          </div>
          <div className="capabilities">
            {[
              {
                icon: Code2,
                title: "Build the experience",
                text: "Responsive interfaces, backend APIs, and connected applications that turn an idea into something people can use.",
                tools: "React / Node.js / Express / Django",
              },
              {
                icon: ShieldCheck,
                title: "Question the assumptions",
                text: "Security labs and vulnerability research that help me examine application behavior beyond the happy path.",
                tools: "Burp Suite / Web security / Docker",
              },
              {
                icon: Radio,
                title: "Connect the system",
                text: "Data collection and dashboards that make complex operations easier to see, understand, and monitor.",
                tools: "Python / SQL / PostgreSQL / IoT",
              },
            ].map((c, i) => (
              <article key={c.title}>
                <div className="capability-top">
                  <c.icon size={27} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="capability-tools">{c.tools}</div>
              </article>
            ))}
          </div>
          <div className="toolkit">
            <span>ALSO IN MY TOOLKIT</span>
            <p>
              JavaScript <b>·</b> Java <b>·</b> C/C++ <b>·</b> MySQL <b>·</b>{" "}
              MongoDB <b>·</b> Git <b>·</b> Machine Learning
            </p>
          </div>
        </section>
        <section id="education" className="education-section section-space">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <Label>04 / ALWAYS LEARNING</Label>
                <h2>
                  A strong foundation.
                  <br />
                  An open <em>mind.</em>
                </h2>
              </div>
              <p>
                Formal study, practical exploration,
                <br />
                and a habit of asking better questions.
              </p>
            </div>
            <div className="education-grid">
              <article>
                <img
                  className="school-logo"
                  src="/rmit-logo.jpg"
                  alt="RMIT University logo"
                  width="68"
                  height="54"
                />
                <div>
                  <p className="eyebrow">2026 — 2028 (EXPECTED)</p>
                  <h3>Master of Information Technology</h3>
                  <p>RMIT University · Melbourne, Australia</p>
                  <span className="education-status">In progress</span>
                </div>
              </article>
              <article>
                <img
                  className="school-logo"
                  src="/lj-logo.jpg"
                  alt="LJ University logo"
                  width="68"
                  height="54"
                />
                <div>
                  <p className="eyebrow">2021 — 2025</p>
                  <h3>Bachelor in Information Technology</h3>
                  <p>LJ Institute of Engineering and Technology</p>
                  <span className="education-status">CPI 8.8 / 10</span>
                </div>
              </article>
            </div>
            <div id="certificates" className="credentials-header">
              <h3>Credentials & recognition</h3>
              <button
                className="inline-link"
                onClick={() => setAllCertificates(!allCertificates)}
                aria-expanded={allCertificates}
              >
                {allCertificates ? "Show selected" : "View all 10"}
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="credentials">
              {(allCertificates ? certificates : certificates.slice(0, 3)).map(
                (c, i) => (
                  <External key={c.name} href={c.link} className="credential">
                    <span className="credential-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{c.name}</span>
                    <ArrowUpRight size={18} />
                  </External>
                ),
              )}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact-top">
              <Label>05 / WHAT’S NEXT</Label>
              <span className="availability">
                <i />
                Open to opportunities
              </span>
            </div>
            <div className="contact-main">
              <h2>
                Good work starts
                <br />
                with a <em>conversation.</em>
              </h2>
              <a
                href={"mailto:" + email}
                className="contact-arrow"
                aria-label="Email Ayush"
              >
                <ArrowUpRight size={56} strokeWidth={1.3} />
              </a>
            </div>
            <p className="contact-description">
              Looking for a curious developer with a security mindset?
              <br />
              Let’s talk about what we could build together.
            </p>
            <div className="contact-links">
              <div className="email-group">
                <a className="email-link" href={"mailto:" + email}>
                  {email}
                </a>
                <button
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <span className="copy-feedback" role="status">
                {copied
                  ? "Email copied"
                  : copyError
                    ? "Please select and copy the email address."
                    : ""}
              </span>
              <div className="social-links">
                <External href="https://github.com/Ayush-Dadhaniya">
                  GitHub <ArrowUpRight size={16} />
                </External>
                <External href="https://linkedin.com/in/ayushdadhaniya">
                  LinkedIn <ArrowUpRight size={16} />
                </External>
                <a href="tel:+61434088233">
                  Call me <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <footer>
              <a className="footer-brand" href="#home">
                ad<span>.</span>
              </a>
              <span>© {new Date().getFullYear()} Ayush Dadhaniya</span>
              <span>Melbourne, Australia</span>
              <a href="#home">
                Back to top <ArrowUpRight size={15} />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
