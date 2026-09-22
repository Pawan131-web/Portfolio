import React, { useEffect } from 'react';
import './CvModal.css';
import { SoundEngine } from './SoundEngine';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    SoundEngine.playClick();
    window.print();
  };

  const handleDownloadTxt = () => {
    SoundEngine.playClick();
    const textContent = `PAWAN RIMAL
Full-Stack Developer & Academic Mentor
Location: Pokhara, Nepal (Available Worldwide & Remote)
Email: rimalpawan4@gmail.com | Phone: +977 9806640515
GitHub: https://github.com/Pawan131-web | Portfolio: https://pawanrimal.com.np

============================================================
PROFESSIONAL SUMMARY
============================================================
Full-Stack Developer and Academic Mentor based in Pokhara, Nepal.
3+ years of experience engineering production-grade web systems from full-scale consultancy CRM architectures managing end-to-end client lifecycles to high-converting e-commerce web applications.
Currently mentoring 30+ students in software engineering and algorithms.

============================================================
TECHNICAL SKILLS
============================================================
• Frontend & UI/UX: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Framer Motion, Responsive Web Architecture.
• Backend & APIs: Node.js, Express.js, Django (Python), PostgreSQL, MongoDB, MySQL, REST APIs, JWT Authentication, GraphQL.
• Tools, DevOps & Security: Git & GitHub, Linux CLI, Docker, Postman, Wireshark, Burp Suite, VS Code.

============================================================
KEY PROJECTS
============================================================
1. Dream Sky Consultancy CRM (Production Platform)
   • Technologies: React.js, Node.js, Express, PostgreSQL, Prisma, JWT Auth.
   • URL: https://dreamsky.com.np
   • Comprehensive consultancy CRM managing full student visa lifecycles, encrypted document verification, referral commission analytics, and student/teacher IELTS portals.

2. Annapurna Cheers Liquor & E-Commerce Store
   • Technologies: Django, Python, Tailwind CSS, MySQL, JavaScript.
   • URL: https://pawan131-web.github.io/Online-shopping-/idex.html
   • High-converting boutique digital storefront featuring Cash on Delivery (COD) workflows, regulatory age gates, instant catalog filtering, and merchant sales analytics.

3. Skillaunch: Skill Mapping & Career Discovery Engine
   • Technologies: React, Node.js, Express, MongoDB, Tailwind CSS.
   • URL: https://github.com/Pawan131-web
   • Campus-wide internship discovery engine intelligently mapping student proficiencies against live industry job requirements with gap analysis and progression milestones.

============================================================
PROFESSIONAL EXPERIENCE
============================================================
• Networking & Web Design Intern | Nepal Telecom (NTC) (2026)
  Hands-on enterprise network infrastructure, routing diagnostics, web standards, and telecommunication systems.

• Full-Stack Developer | Freelance & Independent Contracts (2022 - Present)
  Delivered custom web applications, full-stack architectures, and backend database integrations for clients.

• Academic & ICT Programming Mentor | Pokhara, Nepal (Ongoing)
  Mentored and instructed 30+ students in core data structures, algorithms, relational database normalization, and full-stack development.

============================================================
EDUCATION
============================================================
• Bachelor of Information Management (BIM) (2021 - Present)
  Janapriya Multiple Campus • Tribhuvan University, Nepal

• +2 Science & Computer Science (2019 - 2021)
  Amarsingh Model Secondary School • Sainik Awasiya Mahavidyalaya
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pawan_Rimal_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="cv-modal-toolbar font-mono">
          <div className="cv-toolbar-left">
            <span className="cv-doc-badge">OFFICIAL CV</span>
            <h3 className="cv-doc-title font-sans">Pawan Rimal — Curriculum Vitae</h3>
          </div>

          <div className="cv-toolbar-actions">
            <button 
              className="cv-download-btn font-mono" 
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <span>📥 SAVE AS PDF / PRINT</span>
            </button>
            <button 
              className="cv-txt-btn font-mono" 
              onClick={handleDownloadTxt}
              title="Download Plain Text Format"
            >
              <span>📄 TXT FORMAT</span>
            </button>
            <button 
              className="cv-close-btn" 
              onClick={() => { SoundEngine.playClick(); onClose(); }}
              title="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Paper Preview */}
        <div className="cv-modal-body">
          <div className="cv-paper-document">
            {/* Header / Contact */}
            <div className="cv-header-block">
              <div>
                <h1 className="cv-name-main">PAWAN RIMAL</h1>
                <p className="cv-headline-sub">Full-Stack Developer & Academic Mentor</p>
                <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '4px' }}>
                  Pokhara, Nepal (Available Worldwide & Remote)
                </div>
              </div>

              <div className="cv-contact-info-grid font-mono">
                <div>📧 <a href="mailto:rimalpawan4@gmail.com" className="cv-contact-link">rimalpawan4@gmail.com</a></div>
                <div>📞 <a href="tel:+9779806640515" className="cv-contact-link">+977 9806640515</a></div>
                <div>🌐 <a href="https://pawanrimal.com.np" target="_blank" rel="noreferrer" className="cv-contact-link">pawanrimal.com.np</a></div>
                <div>💻 <a href="https://github.com/Pawan131-web" target="_blank" rel="noreferrer" className="cv-contact-link">github.com/Pawan131-web</a></div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="cv-section">
              <h2 className="cv-section-title">Professional Summary</h2>
              <p className="cv-prose-summary">
                Results-driven Full-Stack Software Developer with over 3 years of experience engineering scalable web platforms, mission-critical databases, and enterprise CRM solutions. Proven track record deploying production systems for corporate consultancies and e-commerce merchants. Dedicated educator who has mentored 30+ students in programming fundamentals, algorithms, and full-stack software architecture.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="cv-section">
              <h2 className="cv-section-title">Technical Competencies</h2>
              <div className="cv-skills-summary-grid">
                <div className="cv-skill-item">
                  <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI/UX.
                </div>
                <div className="cv-skill-item">
                  <strong>Backend:</strong> Node.js, Express.js, Django (Python), REST APIs, JWT Auth, GraphQL.
                </div>
                <div className="cv-skill-item">
                  <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Database Normalization & Indexing.
                </div>
                <div className="cv-skill-item">
                  <strong>Tools & Security:</strong> Git & GitHub, Linux CLI, Docker, Postman, Wireshark, Burp Suite.
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="cv-section">
              <h2 className="cv-section-title">Key Projects</h2>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Dream Sky Consultancy CRM</span>
                  <span className="cv-entry-period">Production Platform</span>
                </div>
                <div className="cv-entry-desc">
                  Architected an enterprise-level education consultancy CRM managing end-to-end student visa lifecycles (Application → University Offer → Medical → Visa Grant), encrypted document verification, referral commission tracking, and student/teacher IELTS class scheduling.
                </div>
                <div className="cv-entry-tech">Tech Stack: React.js, Node.js, Express, PostgreSQL, Prisma, JWT</div>
              </div>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Annapurna Cheers Liquor & E-Commerce</span>
                  <span className="cv-entry-period">Client Deployment</span>
                </div>
                <div className="cv-entry-desc">
                  Engineered high-converting digital storefront featuring Cash on Delivery (COD) checkout pipelines, legal age verification gates, instant product filtering, cart management, and merchant sales analytics.
                </div>
                <div className="cv-entry-tech">Tech Stack: Django, Python, Tailwind CSS, MySQL, JavaScript</div>
              </div>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Skillaunch: Campus Career & Skill Discovery Engine</span>
                  <span className="cv-entry-period">Campus Staging</span>
                </div>
                <div className="cv-entry-desc">
                  Developed an internship discovery engine that matches student academic competencies against live industry requirements with automated gap analysis and milestone recommendations.
                </div>
                <div className="cv-entry-tech">Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS</div>
              </div>
            </div>

            {/* Experience */}
            <div className="cv-section">
              <h2 className="cv-section-title">Work Experience</h2>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Networking & Web Design Intern</span>
                  <span className="cv-entry-period">2026</span>
                </div>
                <div className="cv-entry-org">Nepal Telecom (NTC) • Pokhara, Nepal</div>
                <div className="cv-entry-desc">
                  Gained practical experience in large-scale telecom network infrastructure, routing protocols, diagnostic troubleshooting, and modern web application security standards.
                </div>
              </div>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Full-Stack Freelance Developer</span>
                  <span className="cv-entry-period">2022 – Present</span>
                </div>
                <div className="cv-entry-org">Independent • Remote & Local Clients</div>
                <div className="cv-entry-desc">
                  Designed, developed, and deployed full-lifecycle web applications, CRM solutions, and e-commerce platforms with clean, performant, and secure code.
                </div>
              </div>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Academic & ICT Programming Mentor</span>
                  <span className="cv-entry-period">Ongoing</span>
                </div>
                <div className="cv-entry-org">Pokhara, Nepal (30+ Students Mentored)</div>
                <div className="cv-entry-desc">
                  Instructed university and high-school students in data structures, relational database normalization, web development, and practical software engineering.
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="cv-section" style={{ marginBottom: 0 }}>
              <h2 className="cv-section-title">Education</h2>

              <div className="cv-entry-card">
                <div className="cv-entry-header">
                  <span className="cv-entry-title">Bachelor of Information Management (BIM)</span>
                  <span className="cv-entry-period">2021 – Present</span>
                </div>
                <div className="cv-entry-org">Janapriya Multiple Campus • Tribhuvan University</div>
                <div className="cv-entry-desc">
                  Comprehensive curriculum encompassing software engineering, database management systems, network infrastructure, and business administration.
                </div>
              </div>

              <div className="cv-entry-card" style={{ marginBottom: 0 }}>
                <div className="cv-entry-header">
                  <span className="cv-entry-title">+2 Science & Computer</span>
                  <span className="cv-entry-period">2019 – 2021</span>
                </div>
                <div className="cv-entry-org">Amarsingh Model Secondary School • Sainik Awasiya Mahavidyalaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
