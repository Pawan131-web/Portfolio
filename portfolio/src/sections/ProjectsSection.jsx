import React, { useState } from 'react';
import './ProjectsSection.css';
import { SoundEngine } from '../components/SoundEngine';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 3 Core Verified Projects with Exact Tech Stacks
  const projects = [
    {
      num: '01',
      title: 'Dream Sky Consultancy CRM',
      category: 'Full Stack CRM & Visa Platform',
      type: 'PRODUCTION CRM',
      isLive: true,
      liveUrl: 'https://dreamsky.com.np',
      desc: 'Comprehensive education consultancy CRM managing end to end student visa lifecycles (Application → Acceptance → Medical → Flight), document uploads, referral commissions, and student/mentor portals for IELTS/PTE classes.',
      tech: ['React.js', 'Next.js', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
      logo: '/images/dreamsky_logo.png',
      githubUrl: 'https://github.com/Pawan131-web',
      accentColor: '#38BDF8'
    },
    {
      num: '02',
      title: 'Annapurna Cheers Liquor & E Commerce',
      category: 'Production E Commerce & Retail Store',
      type: 'LIVE CLIENT STORE',
      isLive: true,
      liveUrl: 'https://pawan131-web.github.io/Online-shopping-/idex.html',
      desc: 'Interactive retail and institutional shopping boutique featuring a Cash on Delivery (COD) workflow, dynamic product filtering, persistent cart state, real time inventory management, and multi device responsive UX.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Django', 'Python', 'MySQL'],
      logo: '/images/annapurna_icon_gold.png',
      githubUrl: 'https://github.com/Pawan131-web/Online-shopping-',
      accentColor: '#F59E0B'
    },
    {
      num: '03',
      title: 'Skillaunch Platform',
      category: 'Career Discovery & Skill Mapping',
      type: 'CAMPUS PLATFORM',
      isLive: false,
      liveUrl: null,
      desc: 'Student internship matching platform that maps technical proficiencies against company job requirements with algorithmic skill gap analysis, progression benchmarks, and verified hiring metrics.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      logo: '/images/skillaunch_logo.png',
      githubUrl: 'https://github.com/Pawan131-web',
      accentColor: '#EF4444'
    }
  ];

  return (
    <section id="projects-section" className="projects-viewport">
      {/* Header */}
      <div className="projects-header-group">
        <h2 className="projects-title font-bebas">
          RECAP PROJECT 2026 <span className="projects-subchip font-mono">PRODUCTION</span>
        </h2>
        <p className="projects-subtitle font-sans">
          Production grade web applications, live client platforms, and campus systems.
        </p>
      </div>

      {/* 3-Card Showcase Grid with Breathing Room */}
      <div className="projects-showcase-grid">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`project-showcase-card card-spotlight-${idx + 1}`}
            onClick={() => {
              SoundEngine.playClick();
              setSelectedProject(project);
            }}
            onMouseEnter={SoundEngine.playHover}
            style={{
              '--proj-accent': project.accentColor
            }}
          >
            {/* Top Bar: Logo Halo Pod + Status Indicator */}
            <div className="proj-top-meta-row">
              <div className="proj-logo-halo-box">
                <img 
                  src={project.logo} 
                  alt={project.title} 
                  className="proj-logo-emblem-img" 
                  loading="lazy"
                />
              </div>

              <div className="proj-top-tags-cluster">
                {project.isLive ? (
                  <span className="proj-live-beacon-tag font-mono">
                    <span className="live-dot-beacon"></span>
                    LIVE HOSTED
                  </span>
                ) : (
                  <span className="proj-staging-tag font-mono">CAMPUS STAGING</span>
                )}
                <span className="proj-watermark-num font-bebas">#{project.num}</span>
              </div>
            </div>

            {/* Middle: Title, Category & Narrative */}
            <div className="proj-info-main-wrap">
              <span className="proj-category-label font-mono">{project.category}</span>
              <h3 className="proj-showcase-title font-bebas">{project.title}</h3>
              <p className="proj-showcase-desc font-sans">{project.desc}</p>
            </div>

            {/* Tech Badges Row with Airy Spacing */}
            <div className="proj-tech-stack-row font-mono">
              {project.tech.map((t, tIdx) => (
                <span key={tIdx} className="proj-tech-pill-chip">{t}</span>
              ))}
            </div>

            {/* Footer Action Row with Generous Margins */}
            <div className="proj-action-footer-row">
              {project.isLive && project.liveUrl ? (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-visit-live-cta font-mono"
                  onClick={(e) => {
                    e.stopPropagation();
                    SoundEngine.playClick();
                  }}
                >
                  <span>VISIT LIVE APP</span>
                  <span className="cta-arrow">↗</span>
                </a>
              ) : (
                <span className="proj-in-dev-label font-mono">STAGING ENVIRONMENT</span>
              )}

              <button 
                className="proj-details-modal-btn font-mono"
                onClick={(e) => {
                  e.stopPropagation();
                  SoundEngine.playClick();
                  setSelectedProject(project);
                }}
              >
                <span>EXPLORE CASE</span>
                <span>→</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Project Inspection Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
