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
Phone: +977 9806640515 | Email: rimalpawan4@gmail.com
Portfolio: https://pawanrimal.com.np | GitHub: https://github.com/Pawan131-web

============================================================
PROFESSIONAL SUMMARY
============================================================
Results-driven Full-Stack Developer and Academic Mentor with 3+ years of experience engineering scalable web platforms, production CRMs, and e-commerce applications. Specialized in modern React architectures, Django/Node.js backend pipelines, and database optimization, with a proven record of mentoring 30+ students in software engineering.

============================================================
TECHNICAL SKILLS
============================================================
• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI/UX
• Backend & APIs: Node.js, Express.js, Django (Python), REST APIs, JWT Auth, GraphQL
• Databases: PostgreSQL, MongoDB, MySQL
• Tools & Security: Git & GitHub, Linux CLI, Docker, Postman, Wireshark, Burp Suite

============================================================
WORK EXPERIENCE
============================================================
• Full-Stack Developer | Freelance & Independent Contracts (2022 – Present)
  - Engineered and shipped 5+ full-stack web applications, consultancy CRMs, and e-commerce stores with end-to-end client lifecycle management.
  - Implemented secure JWT user authentication, robust RESTful APIs, and optimized PostgreSQL/MySQL relational databases for production speed.

• Networking & Web Design Intern | Nepal Telecom (NTC) (2026)
  - Assisted in enterprise telecom network diagnostic workflows, routing protocols, and web infrastructure compliance.

• Academic & ICT Mentor | Pokhara, Nepal (2022 – Present)
  - Instructed and mentored 30+ students in data structures, algorithms, relational database normalization (SQL), and full-stack software development.

============================================================
KEY PROJECTS
============================================================
• Dream Sky Consultancy CRM (Production Platform)
  - Built a full-stack platform managing student visa lifecycles, encrypted document verification, and IELTS teacher portals (React, Node, PostgreSQL, Prisma).
  - URL: https://dreamsky.com.np

• Annapurna Cheers Liquor Store (Boutique E-Commerce Storefront)
  - Delivered a boutique digital store with Cash on Delivery (COD) checkout pipelines, regulatory age verification gates, and sales analytics (Django, Python, MySQL).
  - URL: https://pawan131-web.github.io/Online-shopping-/idex.html

============================================================
EDUCATION
============================================================
• Bachelor of Information Management (BIM) (2021 – Present)
  Janapriya Multiple Campus • Tribhuvan University, Nepal

• +2 Science & Computer Science (2019 – 2021)
  Amarsingh Model Secondary School • Sainik Awasiya Mahavidyalaya

============================================================
LANGUAGES
============================================================
• English: Professional Working Proficiency
• Nepali: Native
• Hindi: Fluent
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
        {/* Modal Top Action Toolbar */}
        <div className="cv-modal-toolbar font-mono">
          <div className="cv-toolbar-left">
            <span className="cv-doc-badge">EXECUTIVE CV</span>
            <h3 className="cv-doc-title font-sans">Pawan Rimal — Professional One-Page Resume</h3>
          </div>

          <div className="cv-toolbar-actions">
            <button 
              className="cv-download-btn font-mono" 
              onClick={handlePrint}
              title="Save clean 1-page PDF / Print"
            >
              <span>📥 DOWNLOAD PDF / PRINT</span>
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

        {/* Modal Body: Two-Column One-Page CV Document */}
        <div className="cv-modal-body">
          <div className="cv-sheet-a4">
            
            {/* ────────────────────────────────────────────────────────
               LEFT SIDEBAR COLUMN
               ──────────────────────────────────────────────────────── */}
            <aside className="cv-sidebar-left">
              {/* Profile Photo */}
              <div className="cv-photo-frame">
                <img 
                  src="./images/photo.jpg" 
                  alt="Pawan Rimal" 
                  className="cv-photo-img"
                  onError={(e) => { e.target.src = "./images/normal.jpg"; }}
                />
              </div>

              {/* Contact Information */}
              <div className="cv-side-block">
                <h4 className="cv-side-heading">CONTACT</h4>
                <div className="cv-contact-list font-sans">
                  <div className="cv-contact-item">
                    <span className="cv-contact-icon">📧</span>
                    <a href="mailto:rimalpawan4@gmail.com">rimalpawan4@gmail.com</a>
                  </div>
                  <div className="cv-contact-item">
                    <span className="cv-contact-icon">📞</span>
                    <a href="tel:+9779806640515">+977 9806640515</a>
                  </div>
                  <div className="cv-contact-item">
                    <span className="cv-contact-icon">📍</span>
                    <span>Pokhara, Nepal</span>
                  </div>
                  <div className="cv-contact-item">
                    <span className="cv-contact-icon">🌐</span>
                    <a href="https://pawanrimal.com.np" target="_blank" rel="noreferrer">pawanrimal.com.np</a>
                  </div>
                  <div className="cv-contact-item">
                    <span className="cv-contact-icon">💻</span>
                    <a href="https://github.com/Pawan131-web" target="_blank" rel="noreferrer">github.com/Pawan131-web</a>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="cv-side-block">
                <h4 className="cv-side-heading">SKILLS</h4>
                <div className="cv-skill-group">
                  <span className="cv-skill-group-title">Frontend</span>
                  <p className="cv-skill-tags-text">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, UI/UX</p>
                </div>
                <div className="cv-skill-group">
                  <span className="cv-skill-group-title">Backend & APIs</span>
                  <p className="cv-skill-tags-text">Node.js, Express.js, Django (Python), REST APIs, JWT Auth, GraphQL</p>
                </div>
                <div className="cv-skill-group">
                  <span className="cv-skill-group-title">Databases</span>
                  <p className="cv-skill-tags-text">PostgreSQL, MongoDB, MySQL</p>
                </div>
                <div className="cv-skill-group">
                  <span className="cv-skill-group-title">Tools & Security</span>
                  <p className="cv-skill-tags-text">Git & GitHub, Linux CLI, Docker, Postman, Wireshark, Burp Suite</p>
                </div>
              </div>

              {/* Languages Section */}
              <div className="cv-side-block">
                <h4 className="cv-side-heading">LANGUAGES</h4>
                <div>
                  <div className="cv-lang-item font-sans">
                    <span>English</span>
                    <span className="cv-lang-level">Professional</span>
                  </div>
                  <div className="cv-lang-bar">
                    <div className="cv-lang-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div style={{ marginTop: '6px' }}>
                  <div className="cv-lang-item font-sans">
                    <span>Nepali</span>
                    <span className="cv-lang-level">Native</span>
                  </div>
                  <div className="cv-lang-bar">
                    <div className="cv-lang-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div style={{ marginTop: '6px' }}>
                  <div className="cv-lang-item font-sans">
                    <span>Hindi</span>
                    <span className="cv-lang-level">Fluent</span>
                  </div>
                  <div className="cv-lang-bar">
                    <div className="cv-lang-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ────────────────────────────────────────────────────────
               RIGHT MAIN COLUMN
               ──────────────────────────────────────────────────────── */}
            <main className="cv-main-right">
              {/* Header: Name & Title */}
              <div className="cv-main-header">
                <h1 className="cv-hero-name">PAWAN RIMAL</h1>
                <p className="cv-hero-title">FULL-STACK DEVELOPER & ACADEMIC MENTOR</p>
              </div>

              {/* Professional Summary */}
              <section className="cv-main-section">
                <h3 className="cv-main-section-title">PROFESSIONAL SUMMARY</h3>
                <p className="cv-summary-prose">
                  Results-driven Full-Stack Developer and Academic Mentor with 3+ years of experience engineering scalable web platforms, production CRMs, and e-commerce applications. Specialized in modern React architectures, Django/Node.js backend pipelines, and database optimization, with a proven record of mentoring 30+ students in software engineering.
                </p>
              </section>

              {/* Work History / Experience */}
              <section className="cv-main-section">
                <h3 className="cv-main-section-title">WORK HISTORY</h3>

                <div className="cv-job-entry">
                  <div className="cv-job-header-row">
                    <span className="cv-job-role">Full-Stack Developer</span>
                    <span className="cv-job-duration">2022 – Present</span>
                  </div>
                  <div className="cv-job-company">Freelance & Independent Client Contracts — Remote & Nepal</div>
                  <ul className="cv-bullet-list">
                    <li>Engineered and shipped 5+ full-stack web applications, consultancy CRMs, and e-commerce platforms with end-to-end client lifecycle workflows.</li>
                    <li>Integrated secure JWT authentication, robust RESTful APIs, and optimized PostgreSQL/MySQL databases for fast response times.</li>
                  </ul>
                </div>

                <div className="cv-job-entry">
                  <div className="cv-job-header-row">
                    <span className="cv-job-role">Networking & Web Design Intern</span>
                    <span className="cv-job-duration">2026</span>
                  </div>
                  <div className="cv-job-company">Nepal Telecom (NTC) — Pokhara, Nepal</div>
                  <ul className="cv-bullet-list">
                    <li>Assisted in enterprise telecom network diagnostic workflows, routing protocols, and web infrastructure compliance standards.</li>
                  </ul>
                </div>

                <div className="cv-job-entry">
                  <div className="cv-job-header-row">
                    <span className="cv-job-role">Academic & ICT Programming Mentor</span>
                    <span className="cv-job-duration">2022 – Present</span>
                  </div>
                  <div className="cv-job-company">Independent Mentorship — Pokhara, Nepal</div>
                  <ul className="cv-bullet-list">
                    <li>Instructed and mentored 30+ students in core data structures, algorithms, relational database normalization (SQL), and full-stack development.</li>
                  </ul>
                </div>
              </section>

              {/* Key Projects */}
              <section className="cv-main-section">
                <h3 className="cv-main-section-title">KEY PROJECTS</h3>

                <div className="cv-job-entry">
                  <div className="cv-job-header-row">
                    <span className="cv-job-role">Dream Sky Consultancy CRM</span>
                    <span className="cv-job-duration">React • Node • PostgreSQL • Prisma</span>
                  </div>
                  <ul className="cv-bullet-list">
                    <li>Architected full-scale consultancy CRM managing student visa applications, document verification pipelines, and IELTS portals. (Live: <strong>dreamsky.com.np</strong>)</li>
                  </ul>
                </div>

                <div className="cv-job-entry">
                  <div className="cv-job-header-row">
                    <span className="cv-job-role">Annapurna Cheers Liquor Store</span>
                    <span className="cv-job-duration">Django • Python • MySQL • Tailwind</span>
                  </div>
                  <ul className="cv-bullet-list">
                    <li>Developed responsive boutique digital storefront with Cash on Delivery (COD) checkout pipelines, legal age gates, and merchant sales analytics.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="cv-main-section">
                <h3 className="cv-main-section-title">EDUCATION</h3>

                <div className="cv-edu-entry">
                  <div>
                    <span className="cv-edu-degree">Bachelor of Information Management (BIM)</span>
                    <div className="cv-edu-inst">Janapriya Multiple Campus — Tribhuvan University</div>
                  </div>
                  <span className="cv-edu-year">2021 – Present</span>
                </div>

                <div className="cv-edu-entry">
                  <div>
                    <span className="cv-edu-degree">+2 Science & Computer Science</span>
                    <div className="cv-edu-inst">Amarsingh Model Secondary School</div>
                  </div>
                  <span className="cv-edu-year">2019 – 2021</span>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
