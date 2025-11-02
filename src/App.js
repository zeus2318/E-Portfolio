// Portfolio.jsx
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sun, Moon, FileText } from "lucide-react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

// Import your Certificate PDF files
import awsCertificate from "./certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251101-31-z5llwj.pdf";
import awsCertificate1 from "./certificates/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20251101-30-m1vnqx.pdf";
import awsCertificate2 from "./certificates/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20251101-32-igpl5h.pdf";
import linkedincert from "./certificates/CertificateOfCompletion_Big Data in the Age of AI 2019.pdf";
import linkedincert1 from "./certificates/CertificateOfCompletion_Customer Service Knowledge Management.pdf";
import linkedincert2 from "./certificates/CertificateOfCompletion_Data Storytelling Basics.pdf";
import linkedincert3 from "./certificates/CertificateOfCompletion_Ecommerce Fundamentals 2021.pdf";
import linkedincert4 from "./certificates/CertificateOfCompletion_Ethical Hacking System Hacking 2016.pdf";
import linkedincert5 from "./certificates/CertificateOfCompletion_Introduction to Network Routing.pdf";
import linkedincert6 from "./certificates/CertificateOfCompletion_Learning Cloud Computing Core Concepts.pdf";
import linkedincert7 from "./certificates/CertificateOfCompletion_Networking Foundations Local Area Networks LANs 2015.pdf";
import linkedincert8 from "./certificates/CertificateOfCompletion_Object Oriented Programming with C 2018 (1).pdf";
import linkedincert9 from "./certificates/CertificateOfCompletion_Programming Foundations Databases (1).pdf";
import linkedincert10 from "./certificates/CertificateOfCompletion_SQL Essential Training (1).pdf";
import linkedincert11 from "./certificates/CertificateOfCompletion_SQL Essential Training 2014 (1).pdf";
import linkedincert12 from "./certificates/CertificateOfCompletion_Stealth Penetration Testing with Advanced Enumeration.pdf";
import linkedincert13 from "./certificates/CertificateOfCompletion_Working with Computers and Devices.pdf";
import courseracert from "./certificates/Coursera 5PBYLN2XXG9Z.pdf";
import courseracert1 from "./certificates/Coursera IC3ODHKRUBDI.pdf";
import courseracert2 from "./certificates/Coursera JUUC62LR1FNA.pdf";
import courseracert3 from "./certificates/Coursera PGYXL7W95SXF.pdf";
import courseracert4 from "./certificates/Coursera UFCPSBBYT6FI.pdf";
import courseracert5 from "./certificates/Coursera X6DGW8GGI1JY.pdf";
import courseracert6 from "./certificates/Coursera XN9F9KTN8Q17.pdf";
import wordassociatecert from "./certificates/Word 2019 Associate.pdf";

// Add these imports at the top with your other imports
import aws1Badge from "./badges/cloud-developing.png"; 
import aws2Badge from "./badges/cloud-architect.png";
import aws3Badge from "./badges/cloud-foundations.png";
import mosBadge from "./badges/MOS_Word.png";

// Programming language icons
import jsIcon from "./assets/jsicon.png";  
import csharpIcon from "./assets/csharp.png";
import javaIcon from "./assets/java.png";
import pythonIcon from "./assets/python.png";

// Project preview thumbnails
import cloudCentsThumb from "./previews/CloudCents.png";
import rbthaipartsThumb from "./previews/RbThaiParts.png";
import ddmfishThumb from "./previews/ddmfish.png";
import dollypayrollThumb from "./previews/dollypayroll.png";
import researchPaperThumb from "./previews/ResearchPaper.png";

//Curriculum Vitae PDF
import curriculumVitae from "./cv/Joshua Masellones_CV.pdf";

// Add a tiny SVG placeholder so preview works without extra assets
const svgPlaceholder = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='340'>
    <rect width='100%' height='100%' fill='#231922'/>
    <text x='50%' y='50%' fill='#cfa1d6' font-size='20' dominant-baseline='middle' text-anchor='middle'>Preview</text>
  </svg>`
);
const placeholderDataUrl = `data:image/svg+xml;utf8,${svgPlaceholder}`;


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  // theme: 'dark' | 'light' (persisted)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    // apply theme class to <html> so CSS variables switch
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light-theme", isLight);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Update sections array in scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "badges", "certificates"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 170 && rect.bottom >= 170;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projects = [
    {
      title: "CloudCents - 3E Nails Budget Tracker",
      description:
        "A budget tracker web application that allows business to monitor their expenses using AWS services.",
      tech: ["AWS GraphQL", "DynamoDB", "AWS AppSync", "AWS Amplify", "React"],
      role: "Lead Developer",
      links: { github: "https://github.com/zeus2318/cloudcents-tracker", live: "https://main.d1mrshkfl5wejq.amplifyapp.com/" },
      image: cloudCentsThumb
    },
    {
      title: "RB Thai Parts - Inventory Management System with Machine Learning",
      description:
        "A motorcycle parts inventory management system that utilizes machine learning to predict stock needs.",
      tech: ["React", "MySQL", "CSS", "Python", "Flask"],
      role: "Lead Developer",
      links: { github: "https://github.com/zeus2318/IMS-RBThaiParts"},
      image: rbthaipartsThumb
    },
    {
      title: "DDM Fish Retailing - Inventory Management System",
      description:
        "Windows Forms application for managing fish inventory, sales, and supplier information.",
      tech: ["C# Forms", "MySQL"],
      role: "Lead Developer",
      links: { github: "https://github.com/zeus2318/DDM-FISH-RETAILING-INVENTORY-MANAGEMENT"},
      image: ddmfishThumb
    },
    {
      title: "Dollys House of  Seafood - Payroll System",
      description:
        "Windows Forms application for managing employee payroll, attendance, and salary calculations.",
      tech: ["C# Forms", "MySQL"],
      role: "Lead Developer",
      links: { github: "https://github.com/zeus2318/IM_DTRPayroll" },
      image: dollypayrollThumb
    },
  ];

  // Add state for certificate modal
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Add console log to debug
  const handleCertificateClick = (cert) => {
    console.log("Opening certificate:", cert.pdf);
    setSelectedCertificate(cert);
  };

  // Update certificates data with correct PDF paths
  const certificates = [
    // === 2025 ===
    // AWS Certificates
    {
      id: 1,
      title: "AWS Academy Graduate - Cloud Developing",
      issuer: "Amazon Web Services",
      date: "2025",
      pdf: awsCertificate1
    },
    {
      id: 2,
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "2025",
      pdf: awsCertificate2
    },
    // Coursera Certificates 2025
    {
      id: 4,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Coursera",
      date: "2025",
      pdf: courseracert5
    },
    {
      id: 5,
      title: "Project Management: Beyond planning and control",
      issuer: "Coursera",
      date: "2025",
      pdf: courseracert2
    },
    {
      id: 6,
      title: "Project Management: Life cycle and project planning",
      issuer: "Coursera",
      date: "2025",
      pdf: courseracert4
    },
    {
      id: 18,
      title: "Introduction to Business Analysis",
      issuer: "Coursera",
      date: "2025",
      pdf: courseracert1
    },
    {
      id: 25,
      title: "Information Systems Auditing, Controls and Assurance",
      issuer: "Coursera",
      date: "2025",
      pdf: courseracert6
    },

    // === 2024 ===
    {
      id: 7,
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      pdf: awsCertificate
    },

    // === 2023 ===
    // LinkedIn Learning
    {
      id: 8,
      title: "Big Data in the Age of AI 2019",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert
    },
    {
      id: 3,
      title: "Ecommerce Fundamentals 2021",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert3
    },
    {
      id: 9,
      title: "Customer Service Knowledge Management",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert1
    },
    {
      id: 10,
      title: "Data Storytelling Basics",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert2
    },
    {
      id: 11,
      title: "Ethical Hacking System Hacking 2016",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert4
    },
    {
      id: 12,
      title: "Learning Cloud Computing: Core Concepts",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert6
    },
    {
      id: 13,
      title: "Object Oriented Programming with C 2018",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert8
    },
    {
      id: 14,
      title: "Programming Foundations Databases",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert9
    },
    {
      id: 15,
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert10
    },
    {
      id: 16,
      title: "Stealth Penetration Testing with Advanced Enumeration",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert12
    },
    // AWS 2023
    {
      id: 17,
      title: "SQL Essential Training 2014",
      issuer: "LinkedIn Learning",
      date: "2023",
      pdf: linkedincert11
    },
    // Coursera 2023
    {
      id: 19,
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "2023",
      pdf: courseracert3
    },
    {
      id: 23,
      title: "Introduction to Java",
      issuer: "Coursera",
      date: "2023",
      pdf: courseracert
    },

    // === 2022 ===
    // AWS Certificates
    {
      id: 20,
      title: "Networking Foundations Local Area Networks (LANs) 2015",
      issuer: "LinkedIn Learning",
      date: "2022",
      pdf: linkedincert7
    },
    {
      id: 21,
      title: "Working with Computers and Devices",
      issuer: "LinkedIn Learning",
      date: "2022",
      pdf: linkedincert13
    },
    // LinkedIn Learning
    {
      id: 22,
      title: "Introduction to Network Routing",
      issuer: "LinkedIn Learning",
      date: "2022",
      pdf: linkedincert5
    },
    // Coursera
    // Microsoft
    {
      id: 24,
      title: "Microsoft Word Specialist",
      issuer: "Microsoft",
      date: "2022",
      pdf: wordassociatecert
    }
  ];

  // Add this state for badge modal
  const [selectedBadge, setSelectedBadge] = useState(null);

  // Add this badges data array after your certificates array
  const badges = [
    {
      id: 1,
      title: "AWS Academy Graduate - Cloud Developing",
      issuer: "Amazon Web Services",
      date: "2025",
      image: aws1Badge
    },
    {
      id: 2,
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "2025",
      image: aws2Badge
    },
    {
      id: 3,
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      image: aws3Badge
    },
    {
      id: 4,
      title: "Microsoft Office Specialist",
      issuer: "Microsoft",
      date: "2022",
      image: mosBadge
    }
    // Add more badges as needed
  ];

  // First update the academicProjects array
  const academicProjects = [
    {
      title: "From Global Standards to Local Practices: Tailoring SEO Strategies for Philippine Web Presence",
      description: "An academic research paper analyzing the adaptation of global SEO strategies to fit the unique digital landscape of the Philippines.",
      roles: ["Developer", "Researcher"],  // Changed to array of roles
      link: "#",  // single link instead of links object
      image: researchPaperThumb
    },
  ];

  // Add this state near your other useState declarations
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="app-root">
      <aside className="left-nav">
        <div className="nav-top">
          <div className="nav-brand">E-Portfolio</div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <nav className="nav-links">
            {["about", "projects", "badges", "certificates"].map((id) => (
              <button
                key={id}
                className={`nav-btn ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {id}
              </button>
            ))}
          </nav>
        </div>

        <div className="nav-bottom">
          <div className="socials">
            <a href="https://github.com/zeus2318" aria-label="github" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/joshua-marc-masellones-9494b7252/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="mailto:masellones124@gmail.com" aria-label="email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>

      <main className="content">
        <section id="about" className="section about-card">
          <div className="about-left">
            <div className="photo-wrap">
              <img src={profilePic} alt="profile" className="photo" />
            </div>
          </div>

          <div className="about-right">
            <h2 className="title">About Me</h2>
            <p className="lead">
              Hi! I'm{" "}
              <span className="name">Joshua Marc N. Masellones</span> — a dedicated 
              Bachelor of Science in Information Systems student with a strong interest 
              for technology, data management, and system development. I am committed 
              to leverage my analytical and technological skills to build efficient, 
              user-focused information solutions that improve business operations. 
              With a deep interest in both software and business processes, I try to 
              bridge the gap between IT solutions and organizational needs.
            </p>

            <ul className="bullets">
              <li>Focus areas: Programming, Data Analytics, Technologies</li>
              <li>
                Programming Languages I have experience with:
              </li>
            </ul>

            {/* Add skills grid */}
            <div className="skills-grid">
              <div className="skill-item">
                <img src={jsIcon} alt="javascript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={csharpIcon} alt="C#" />
                <span>C#</span>
              </div>
              <div className="skill-item">
                <img src={javaIcon} alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <img src={pythonIcon} alt="Python" />
                <span>Python</span>
              </div>
            </div>

            <div className="contacts">
              <div>
                <strong>Email:</strong>{" "}
                <a href="mailto:masellones124@gmail.com">masellones124@gmail.com</a>
              </div>
              <div>
                <strong>Contact #:</strong>{" "}
                <a href="tel:+639165225609">+63 915 768 1726</a>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn primary"
                onClick={() => setShowCV(true)}
              >
                View Curriculum Vitae
              </button>
            </div>

            {/* Add CV Modal */}
            {showCV && (
              <div className="modal-overlay" onClick={() => setShowCV(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <button 
                    className="modal-close"
                    onClick={() => setShowCV(false)}
                  >
                    ×
                  </button>
                  <iframe
                    src={curriculumVitae}
                    title="Curriculum Vitae"
                    width="100%"
                    height="100%"
                    className="certificate-pdf"
                    frameBorder="0"
                  />
                </div>
              </div>
            )}
          </div>  {/* end about-right */}

        </section>

        <section id="projects" className="section list-section">
          <h3 className="section-heading">Projects</h3>
          <div className="cards-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="thumb-wrap">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="project-thumb"
                  />
                </div>

                <div className="project-head">
                  <h4>{p.title}</h4>
                  {/* icons removed from here (they will appear bottom-right) */}
                </div>

                <p className="proj_desc">{p.description}</p>

                <div className="techs">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {p.role && (
                  <div className="project-role" aria-label="project role">
                    {p.role}
                  </div>
                )}

                {/* bottom-right static icons */}
                <div className="card-actions" aria-hidden={false}>
                  <a
                    href={p.links.github}
                    className="icon-btn small"
                    aria-label="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      className="icon-btn small"
                      aria-label="live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Academic Projects Section */}
        <section id="academic-projects" className="section list-section">
          <h3 className="section-heading">Academic Projects</h3>
          <div className="cards-grid">
            {academicProjects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="thumb-wrap">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="project-thumb"
                  />
                </div>

                <div className="project-head">
                  <h4>{p.title}</h4>
                </div>

                <p className="proj_desc">{p.description}</p>

                {p.roles && (
                  <div className="project-role" aria-label="project role">
                    {p.roles.join(" • ")}
                  </div>
                )}

                <div className="card-actions" aria-hidden={false}>
                  {p.link && (
                    <a
                      href={p.link}
                      className="icon-btn small"
                      aria-label="view project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="badges" className="section list-section">
          <h3 className="section-heading">Badges</h3>
          <div className="badges-grid">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="badge-card"
                onClick={() => setSelectedBadge(badge)}
              >
                <div className="badge-image">
                  <img src={badge.image} alt={badge.title} />
                </div>
                <div className="badge-info">
                  <h4>{badge.title}</h4>
                  <p>{badge.issuer}</p>
                  <span>{badge.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificates" className="section list-section">
          <h3 className="section-heading">Certificates</h3>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="certificate-card"
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="certificate-info">
                  <div className="cert-icon">
                    <FileText size={24} />
                  </div>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="modal-overlay" onClick={() => setSelectedCertificate(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>
              <iframe
                src={selectedCertificate.pdf}
                title={selectedCertificate.title}
                width="100%"
                height="100%"
                className="certificate-pdf"
                frameBorder="0"
              />
            </div>
          </div>
        )}

        {/* Add this Badge Modal before the footer */}
        {selectedBadge && (
          <div className="modal-overlay" onClick={() => setSelectedBadge(null)}>
            <div className="modal-content badge-modal" onClick={e => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedBadge(null)}
              >
                ×
              </button>
              <img 
                src={selectedBadge.image} 
                alt={selectedBadge.title}
                className="badge-full"
              />
            </div>
          </div>
        )}

        <footer className="site-footer">
          <div className="footer-icons">
            <a href="https://github.com/zeus2318" aria-label="github" className="icon-btn" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/joshua-marc-masellones-9494b7252/" aria-label="linkedin" className="icon-btn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="mailto:masellones124@gmail.com" aria-label="email" className="icon-btn">
              <Mail size={18} />
            </a>
          </div>
          <div className="footer-copy">© 2025 Joshua Marc N. Masellones</div>
        </footer>
      </main>
    </div>
  );
}