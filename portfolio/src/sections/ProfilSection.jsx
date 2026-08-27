import React, { useState } from 'react';
import './ProfilSection.css';
import { SoundEngine } from '../components/SoundEngine';

export default function ProfilSection() {
  // Active Tab: 'about' | 'skills' | 'education' | 'projects'
  const [activeTab, setActiveTab] = useState('about');
  
  // 4-Deck state: 'tech' | 'creative' | 'projects' | 'social' | null
  const [activeDeck, setActiveDeck] = useState(null);

  // Selected Skill for Proficiency Meter (defaults to 'html')
  const [selectedSkillId, setSelectedSkillId] = useState('html');

  // Active Card in Education tab
  const [activeEduCard, setActiveEduCard] = useState('bim');

  const handleTabChange = (tabKey) => {
    SoundEngine.playClick();
    setActiveTab(tabKey);
  };

  const scrollTo = (id) => {
    SoundEngine.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. Tech Stack Cards (Official Devicon Logos)
  const techStackCards = [
    {
      id: 'react',
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      id: 'node',
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      id: 'express',
      name: 'Express',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      extraClass: 'express-invert'
    },
    {
      id: 'django',
      name: 'Django',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    }
  ];

  // 2. Creative Skills Cards (Clean Custom Vector Icons)
  const creativeSkillsCards = [
    {
      id: 'leadership',
      name: 'Leadership',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
          <path d="M3 18L5 8L9.5 13L12 6L14.5 13L19 8L21 18H3Z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(245, 158, 11, 0.15)"/>
          <circle cx="12" cy="18" r="1.5" fill="#f59e0b"/>
        </svg>
      )
    },
    {
      id: 'decisions',
      name: 'Decisions',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8"/>
          <path d="M12 7V12L15 15" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M8 12H6M18 12H16M12 6V8M12 16V18" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'planning',
      name: 'Planning',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="#e2e8f0" strokeWidth="1.8"/>
          <path d="M3 9H21" stroke="#e2e8f0" strokeWidth="1.8"/>
          <path d="M8 2V5M16 2V5" stroke="#e2e8f0" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="8" cy="13" r="1" fill="#e2e8f0"/>
          <circle cx="12" cy="13" r="1" fill="#e2e8f0"/>
          <circle cx="16" cy="13" r="1" fill="#e2e8f0"/>
        </svg>
      )
    },
    {
      id: 'thinking',
      name: 'Critical Thinking',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
          <path d="M9.5 2C6.5 2 4 4.5 4 7.5C4 9.5 5 11.2 6.5 12.2V15C6.5 15.6 7 16 7.5 16H11.5C12 16 12.5 15.6 12.5 15V12.2C14 11.2 15 9.5 15 7.5C15 4.5 12.5 2 9.5 2Z" stroke="#f43f5e" strokeWidth="1.8" fill="rgba(244, 63, 94, 0.12)"/>
          <path d="M7 19H12M8 22H11" stroke="#f43f5e" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'friendly',
      name: 'Collaboration',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
          <circle cx="8" cy="8" r="3.5" stroke="#10b981" strokeWidth="1.8"/>
          <circle cx="16" cy="8" r="3.5" stroke="#10b981" strokeWidth="1.8"/>
          <path d="M2 19C2 15.5 5 13.5 8 13.5C9.5 13.5 11 14 12 15C13 14 14.5 13.5 16 13.5C19 13.5 22 15.5 22 19" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  // 3. Project Cards (Clean Custom Fitted Project Logos)
  const projectCards = [
    {
      id: 'crm',
      name: 'Dream Sky CRM',
      image: './images/dreamsky_logo.png'
    },
    {
      id: 'skillaunch',
      name: 'Skillaunch',
      image: './images/skillaunch_logo.png'
    },
    {
      id: 'annapurna',
      name: 'Annapurna',
      image: './images/annapurna_icon_gold.png'
    }
  ];

  // 4. Social Media Cards (Official Brand Logos)
  const socialCards = [
    {
      id: 'github',
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      extraClass: 'express-invert'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    },
    {
      id: 'email',
      name: 'Gmail',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'
    }
  ];

  // =========================================================
  // AUTHENTIC SKILLS DATABASE FROM my-details.md
  // =========================================================
  const allSkillsData = [
    // ─── 1. FRONTEND & UI/UX ──────────────────────────────
    {
      id: 'html',
      name: 'HTML5 / CSS3',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 100,
      level: 'MASTER',
      color: '#E34F26',
      secondaryColor: '#F06529',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      desc: 'Semantic markup, accessibility standards (a11y), modern CSS Grid, Flexbox, and cross-browser responsive layouts.'
    },
    {
      id: 'uiux',
      name: 'UI/UX Prototyping',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 100,
      level: 'MASTER',
      color: '#A259FF',
      secondaryColor: '#F24E1E',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      desc: 'User-centric wireframing, high-fidelity prototypes, component design systems, and interaction architectures.'
    },
    {
      id: 'responsive',
      name: 'Responsive Design',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 90,
      level: 'EXPERT',
      color: '#38BDF8',
      secondaryColor: '#0284C7',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      desc: 'Mobile-first breakpoints, fluid typography, flexible layouts, and adaptive user interfaces.'
    },
    {
      id: 'cssanim',
      name: 'CSS Animations',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 85,
      level: 'ADVANCED',
      color: '#EC4899',
      secondaryColor: '#DB2777',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      desc: 'Hardware-accelerated CSS keyframes, micro-interactions, smooth hover transitions, and spring physics.'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 80,
      level: 'ADVANCED',
      color: '#38BDF8',
      secondaryColor: '#0EA5E9',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      desc: 'Utility-first rapid styling, token configuration, dark-mode themes, and custom animation utilities.'
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 75,
      level: 'PROFICIENT',
      color: '#F7DF1E',
      secondaryColor: '#D4AF37',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      desc: 'ES6+ syntax, asynchronous programming, Promises, DOM manipulation, and event-driven browser interactions.'
    },
    {
      id: 'framer',
      name: 'Framer Motion',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 55,
      level: 'LEARNING PHASE',
      color: '#0055FF',
      secondaryColor: '#8800FF',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'Declarative animation hooks, layout transitions, and interactive gestural UI states. (Still in active learning).'
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'FRONTEND & UI/UX',
      isMetered: true,
      percentage: 40,
      level: 'LEARNING PHASE',
      color: '#61DAFB',
      secondaryColor: '#0088CC',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'Component hierarchies, state hooks, props flow, SPA routing, and React application architecture. (Currently advancing).'
    },

    // ─── 2. BACKEND & DATABASES ───────────────────────────
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 95,
      level: 'EXPERT',
      color: '#00758F',
      secondaryColor: '#F29111',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      desc: 'Relational data modeling, schema normalization, structured SQL querying, stored routines, and indexes.'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 85,
      level: 'ADVANCED',
      color: '#47A248',
      secondaryColor: '#13AA52',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      desc: 'NoSQL document schemas, Mongoose models, aggregation pipelines, and JSON document storage.'
    },
    {
      id: 'rest',
      name: 'REST APIs',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 75,
      level: 'PROFICIENT',
      color: '#10B981',
      secondaryColor: '#059669',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      desc: 'HTTP method verbs, status codes, JSON payload standards, endpoint versioning, and API architecture.'
    },
    {
      id: 'jwt',
      name: 'JWT Auth',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 75,
      level: 'PROFICIENT',
      color: '#EC4899',
      secondaryColor: '#D946EF',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg',
      desc: 'Token-based authentication, payload signing, token verification, and route protection guards.'
    },
    {
      id: 'django',
      name: 'Django (Python)',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 70,
      level: 'PROFICIENT',
      color: '#44B78B',
      secondaryColor: '#2BA977',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      desc: 'Django ORM, models, database migrations, admin customization, and backend view controllers.'
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 65,
      level: 'PRACTICING',
      color: '#336791',
      secondaryColor: '#254A6B',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      desc: 'Relational database schemas, foreign key constraints, indexes, and queries.'
    },
    {
      id: 'node',
      name: 'Node.js',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 65,
      level: 'PRACTICING',
      color: '#68A063',
      secondaryColor: '#3E863D',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      desc: 'JavaScript server runtime, npm package management, file system streams, and modular architectures.'
    },
    {
      id: 'express',
      name: 'Express.js',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 65,
      level: 'PRACTICING',
      color: '#FFFFFF',
      secondaryColor: '#94A3B8',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      extraClass: 'express-invert',
      desc: 'Routing controllers, middleware handlers, request parsing, and error-handling pipelines.'
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      category: 'BACKEND & DATABASES',
      isMetered: true,
      percentage: 55,
      level: 'LEARNING PHASE',
      color: '#E10098',
      secondaryColor: '#C00080',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      desc: 'GraphQL schema definitions, queries, and mutations. (Still in active learning phase).'
    },

    // ─── 3. TOOLS & SECURITY ──────────────────────────────
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 100,
      level: 'MASTER',
      color: '#007ACC',
      secondaryColor: '#005999',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      desc: 'Integrated dev environment configuration, debugger tools, custom snippets, shortcuts, and extension ecosystems.'
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 80,
      level: 'ADVANCED',
      color: '#F05032',
      secondaryColor: '#C0392B',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      desc: 'Version control branching models, pull requests, rebase workflows, commit hygiene, and code repository management.'
    },
    {
      id: 'hydra',
      name: 'THC-Hydra',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 75,
      level: 'PROFICIENT',
      color: '#EF4444',
      secondaryColor: '#DC2626',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg',
      desc: 'Network authentication testing, protocol validation, password strength audits, and security benchmarking.'
    },
    {
      id: 'burpsuite',
      name: 'Burp Suite',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 65,
      level: 'PRACTICING',
      color: '#FF6633',
      secondaryColor: '#CC4400',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      desc: 'Web vulnerability proxying, HTTP request interception, parameter tampering analysis, and security testing.'
    },
    {
      id: 'wireshark',
      name: 'Wireshark',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 55,
      level: 'PRACTICING',
      color: '#1679A7',
      secondaryColor: '#0F587D',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg',
      desc: 'Packet analysis, network protocol inspection, diagnostics, and packet payload inspection.'
    },
    {
      id: 'postman',
      name: 'Postman',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 55,
      level: 'PRACTICING',
      color: '#FF6C37',
      secondaryColor: '#D94E1B',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      desc: 'API testing, request collection structuring, environment variable management, and automated test runners.'
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 50,
      level: 'LEARNING PHASE',
      color: '#2496ED',
      secondaryColor: '#1D63ED',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      desc: 'Containerizing web applications, Dockerfile structure, isolated dev environments. (In learning phase).'
    },
    {
      id: 'linux',
      name: 'Linux',
      category: 'TOOLS & SECURITY',
      isMetered: true,
      percentage: 45,
      level: 'LEARNING PHASE',
      color: '#FCC624',
      secondaryColor: '#E5A912',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      desc: 'Bash commands, file permissions, shell workflows, and system utilities. (In active learning phase).'
    },

    // ─── 4. CREATIVE SKILLS (NO PERCENTAGE METER) ─────────
    {
      id: 'leadership',
      name: 'Leadership',
      category: 'CREATIVE & LEADERSHIP',
      isMetered: false,
      color: '#F59E0B',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <path d="M3 18L5 8L9.5 13L12 6L14.5 13L19 8L21 18H3Z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(245, 158, 11, 0.15)"/>
          <circle cx="12" cy="18" r="1.5" fill="#f59e0b"/>
        </svg>
      ),
      desc: 'Actively mentored 30+ students in programming, algorithms, and practical software engineering. Guiding teams through code reviews and project coordination.'
    },
    {
      id: 'decisions',
      name: 'Decision Making',
      category: 'CREATIVE & LEADERSHIP',
      isMetered: false,
      color: '#10B981',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="1.8"/>
          <path d="M12 7V12L15 15" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M8 12H6M18 12H16M12 6V8M12 16V18" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      desc: 'Evaluating architectural trade-offs, tech-stack selection, and pragmatic production problem solving.'
    },
    {
      id: 'planning',
      name: 'Planning',
      category: 'CREATIVE & LEADERSHIP',
      isMetered: false,
      color: '#E2E8F0',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="#e2e8f0" strokeWidth="1.8"/>
          <path d="M3 9H21" stroke="#e2e8f0" strokeWidth="1.8"/>
          <path d="M8 2V5M16 2V5" stroke="#e2e8f0" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="8" cy="13" r="1" fill="#e2e8f0"/>
          <circle cx="12" cy="13" r="1" fill="#e2e8f0"/>
          <circle cx="16" cy="13" r="1" fill="#e2e8f0"/>
        </svg>
      ),
      desc: 'Milestone tracking, structured feature sprints, system roadmapping, and agile project delivery.'
    },
    {
      id: 'thinking',
      name: 'Critical Thinking',
      category: 'CREATIVE & LEADERSHIP',
      isMetered: false,
      color: '#F43F5E',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <path d="M9.5 2C6.5 2 4 4.5 4 7.5C4 9.5 5 11.2 6.5 12.2V15C6.5 15.6 7 16 7.5 16H11.5C12 16 12.5 15.6 12.5 15V12.2C14 11.2 15 9.5 15 7.5C15 4.5 12.5 2 9.5 2Z" stroke="#f43f5e" strokeWidth="1.8" fill="rgba(244, 63, 94, 0.12)"/>
          <path d="M7 19H12M8 22H11" stroke="#f43f5e" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
      desc: 'Root-cause debugging, algorithmic optimization, performance profiling, and fault-tolerant architecture.'
    },
    {
      id: 'friendly',
      name: 'Friendly & Collaborative',
      category: 'CREATIVE & LEADERSHIP',
      isMetered: false,
      color: '#34D399',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <circle cx="8" cy="8" r="3.5" stroke="#34d399" strokeWidth="1.8"/>
          <circle cx="16" cy="8" r="3.5" stroke="#34d399" strokeWidth="1.8"/>
          <path d="M2 19C2 15.5 5 13.5 8 13.5C9.5 13.5 11 14 12 15C13 14 14.5 13.5 16 13.5C19 13.5 22 15.5 22 19" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      desc: 'Empathetic team communication, active mentorship, transparent cross-functional collaboration.'
    }
  ];

  // Active Skill Object
  const currentSkill = allSkillsData.find(s => s.id === selectedSkillId) || allSkillsData[0];

  const handleSkillSelect = (skillId) => {
    SoundEngine.playClick();
    setSelectedSkillId(skillId);
  };

  const handleEduSelect = (cardId) => {
    SoundEngine.playClick();
    setActiveEduCard(cardId);
  };

  return (
    <section id="profil-section" className="profil-section-viewport">
      
      {/* Sleek In-Place Section Nav Bar */}
      <div className="profil-tab-nav-bar">
        <div className="nav-pill-container">
          <button 
            className={`nav-pill-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabChange('about')}
            onMouseEnter={SoundEngine.playHover}
          >
            ABOUT ME
          </button>
          <button 
            className={`nav-pill-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => handleTabChange('skills')}
            onMouseEnter={SoundEngine.playHover}
          >
            SKILLS
          </button>
          <button 
            className={`nav-pill-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabChange('education')}
            onMouseEnter={SoundEngine.playHover}
          >
            EDUCATION
          </button>
          <button 
            className={`nav-pill-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleTabChange('projects')}
            onMouseEnter={SoundEngine.playHover}
          >
            PROJECTS
          </button>
        </div>
      </div>

      {/* Main 2-Column Stage */}
      <div className="profil-as-stage">
        
        {/* Left Column: Enlarged Character Cutout aligned to left */}
        <div className="profil-left-character-col">
          <div className="character-heading-wrap">
            <span className="character-hello font-mono">HELLO, I AM</span>
            <h2 className="character-name font-bebas">PAWAN RIMAL</h2>
          </div>

          <div className="character-stage-wrap">
            {/* Cinematic Monochrome Spotlight Aura */}
            <div className="character-spotlight-aura"></div>

            {/* Enlarged Cutout Portrait */}
            <img 
              src="./images/pawan_transparent.png" 
              alt="Pawan Rimal" 
              className="character-cutout-img"
              onError={(e) => {
                e.target.src = "./images/pawan_cutout.png";
              }}
            />

            {/* Ground Blend */}
            <div className="character-ground-fade"></div>
          </div>
        </div>

        {/* Right Column: In-Place Swappable Tab Content */}
        <div className="profil-right-info-col">
          
          {/* TAB 1: ABOUT ME + 4 INTERACTIVE DECKS */}
          {activeTab === 'about' && (
            <div className="tab-pane-content tab-fade-in">
              <h3 className="profil-info-title font-bebas">ABOUT ME</h3>
              <div className="profil-info-desc font-sans">
                <p>
                  Hi, I'm Pawan Rimal, a Full Stack Developer and Academic Mentor based in Pokhara, Nepal. I engineer production grade web applications from full scale consultancy CRM platforms managing complete client lifecycles to high converting e-commerce web applications.
                </p>
                <p>
                  I build reliable backend systems with Django, Node.js, Express, and PostgreSQL, paired with clean, responsive user interfaces in React. Alongside engineering, I actively mentor 30+ students in web programming, algorithms, and practical software engineering.
                </p>
              </div>

              {/* 4-Deck Interactive Group */}
              <div 
                className="solid-dual-decks-container"
                onMouseLeave={() => setActiveDeck(null)}
              >
                
                {/* 1. Tech Skills Deck */}
                <div 
                  className={`deck-pod tech-pod ${activeDeck === 'tech' ? 'is-active' : ''} ${activeDeck && activeDeck !== 'tech' ? 'is-hidden' : ''}`}
                  onMouseEnter={() => {
                    SoundEngine.playHover();
                    setActiveDeck('tech');
                  }}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActiveDeck(prev => prev === 'tech' ? null : 'tech');
                  }}
                >
                  <span className="deck-title-tag font-mono">TECHNICAL SKILLS</span>
                  <div className="deck-track">
                    {techStackCards.map((card, idx) => (
                      <div 
                        key={card.id}
                        className={`tech-squircle-card card-idx-${idx}`}
                        onMouseEnter={() => SoundEngine.playHover()}
                      >
                        <div className="tech-card-icon-wrap">
                          <img 
                            src={card.image} 
                            alt={card.name} 
                            className={`tech-card-real-img ${card.extraClass || ''}`}
                            loading="lazy"
                          />
                        </div>
                        <span className="tech-card-label font-sans">{card.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Creative Skills Deck (Vector Icons) */}
                <div 
                  className={`deck-pod creative-pod ${activeDeck === 'creative' ? 'is-active' : ''} ${activeDeck && activeDeck !== 'creative' ? 'is-hidden' : ''}`}
                  onMouseEnter={() => {
                    SoundEngine.playHover();
                    setActiveDeck('creative');
                  }}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActiveDeck(prev => prev === 'creative' ? null : 'creative');
                  }}
                >
                  <span className="deck-title-tag font-mono">CREATIVE SKILLS</span>
                  <div className="deck-track">
                    {creativeSkillsCards.map((card, idx) => (
                      <div 
                        key={card.id}
                        className={`tech-squircle-card card-idx-${idx}`}
                        onMouseEnter={() => SoundEngine.playHover()}
                      >
                        <div className="tech-card-icon-wrap">
                          {card.icon}
                        </div>
                        <span className="tech-card-label font-sans">{card.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Project Deck (Dream Sky CRM, Skillaunch, Annapurna) */}
                <div 
                  className={`deck-pod projects-pod ${activeDeck === 'projects' ? 'is-active' : ''} ${activeDeck && activeDeck !== 'projects' ? 'is-hidden' : ''}`}
                  onMouseEnter={() => {
                    SoundEngine.playHover();
                    setActiveDeck('projects');
                  }}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActiveDeck(prev => prev === 'projects' ? null : 'projects');
                  }}
                >
                  <span className="deck-title-tag font-mono">PROJECTS</span>
                  <div className="deck-track">
                    {projectCards.map((card, idx) => (
                      <div 
                        key={card.id}
                        className={`tech-squircle-card card-idx-${idx}`}
                        onMouseEnter={() => SoundEngine.playHover()}
                      >
                        <div className="tech-card-icon-wrap">
                          <img 
                            src={card.image} 
                            alt={card.name} 
                            className="project-logo-real-img"
                            loading="lazy"
                          />
                        </div>
                        <span className="tech-card-label font-sans">{card.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Social Media Deck (Official Brand Logos) */}
                <div 
                  className={`deck-pod social-pod ${activeDeck === 'social' ? 'is-active' : ''} ${activeDeck && activeDeck !== 'social' ? 'is-hidden' : ''}`}
                  onMouseEnter={() => {
                    SoundEngine.playHover();
                    setActiveDeck('social');
                  }}
                  onClick={() => {
                    SoundEngine.playClick();
                    setActiveDeck(prev => prev === 'social' ? null : 'social');
                  }}
                >
                  <span className="deck-title-tag font-mono">SOCIAL MEDIA</span>
                  <div className="deck-track">
                    {socialCards.map((card, idx) => (
                      <div 
                        key={card.id}
                        className={`tech-squircle-card card-idx-${idx}`}
                        onMouseEnter={() => SoundEngine.playHover()}
                      >
                        <div className="tech-card-icon-wrap">
                          <img 
                            src={card.image} 
                            alt={card.name} 
                            className={`social-logo-real-img ${card.extraClass || ''}`}
                            loading="lazy"
                          />
                        </div>
                        <span className="tech-card-label font-sans">{card.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: SKILLS & PROFICIENCY METER */}
          {activeTab === 'skills' && (
            <div className="tab-pane-content tab-fade-in">
              <div className="skills-tab-header-wrap">
                <h3 className="profil-info-title font-bebas">SKILLS & EXPERTISE</h3>
                <span className="skills-header-sub font-mono">CLICK ANY TECHNICAL SKILL TO VIEW PROFICIENCY METER</span>
              </div>
              
              <div className="skills-tab-content font-sans">
                
                {/* 1. Frontend & UI/UX Group */}
                <div className="skill-group-block">
                  <span className="skill-group-heading font-mono">FRONTEND & UI/UX</span>
                  <div className="skill-tags-cloud font-mono">
                    {allSkillsData.filter(s => s.category === 'FRONTEND & UI/UX').map((skill) => (
                      <button
                        key={skill.id}
                        className={`skill-tag ${selectedSkillId === skill.id ? 'active-skill-tag' : ''}`}
                        onClick={() => handleSkillSelect(skill.id)}
                        onMouseEnter={SoundEngine.playHover}
                        style={{
                          '--tag-brand-color': skill.color
                        }}
                      >
                        <span>{skill.name}</span>
                        <span className="pill-pct-badge">{skill.percentage}%</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Backend & Databases Group */}
                <div className="skill-group-block">
                  <span className="skill-group-heading font-mono">BACKEND & DATABASES</span>
                  <div className="skill-tags-cloud font-mono">
                    {allSkillsData.filter(s => s.category === 'BACKEND & DATABASES').map((skill) => (
                      <button
                        key={skill.id}
                        className={`skill-tag ${selectedSkillId === skill.id ? 'active-skill-tag' : ''}`}
                        onClick={() => handleSkillSelect(skill.id)}
                        onMouseEnter={SoundEngine.playHover}
                        style={{
                          '--tag-brand-color': skill.color
                        }}
                      >
                        <span>{skill.name}</span>
                        <span className="pill-pct-badge">{skill.percentage}%</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Tools & Security Group */}
                <div className="skill-group-block">
                  <span className="skill-group-heading font-mono">TOOLS & SECURITY</span>
                  <div className="skill-tags-cloud font-mono">
                    {allSkillsData.filter(s => s.category === 'TOOLS & SECURITY').map((skill) => (
                      <button
                        key={skill.id}
                        className={`skill-tag ${selectedSkillId === skill.id ? 'active-skill-tag' : ''}`}
                        onClick={() => handleSkillSelect(skill.id)}
                        onMouseEnter={SoundEngine.playHover}
                        style={{
                          '--tag-brand-color': skill.color
                        }}
                      >
                        <span>{skill.name}</span>
                        <span className="pill-pct-badge">{skill.percentage}%</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Creative Skills (Showcase Pill Treatment - No Meter) */}
                <div className="skill-group-block">
                  <span className="skill-group-heading font-mono">CREATIVE & LEADERSHIP (SHOWCASE)</span>
                  <div className="skill-tags-cloud font-mono">
                    {allSkillsData.filter(s => s.category === 'CREATIVE & LEADERSHIP').map((skill) => (
                      <button
                        key={skill.id}
                        className={`skill-tag tag-creative ${selectedSkillId === skill.id ? 'active-skill-tag' : ''}`}
                        onClick={() => handleSkillSelect(skill.id)}
                        onMouseEnter={SoundEngine.playHover}
                        style={{
                          '--tag-brand-color': skill.color
                        }}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DYNAMIC CARD: PROFICIENCY METER FOR TECH / SPOTLIGHT FOR CREATIVE */}
                {currentSkill && (
                  <div 
                    className="skill-meter-display-panel"
                    style={{
                      '--meter-c1': currentSkill.color,
                      '--meter-c2': currentSkill.secondaryColor || currentSkill.color
                    }}
                  >
                    {/* Top Row: Logo, Name, Badge, Percent */}
                    <div className="meter-header-row">
                      
                      {/* Real Logo / Icon */}
                      <div className="meter-logo-pod">
                        {currentSkill.image ? (
                          <img 
                            src={currentSkill.image} 
                            alt={currentSkill.name} 
                            className={`meter-real-logo ${currentSkill.extraClass || ''}`}
                          />
                        ) : (
                          <div className="meter-custom-icon">
                            {currentSkill.icon}
                          </div>
                        )}
                      </div>

                      {/* Title & Category */}
                      <div className="meter-info-wrap">
                        <div className="meter-title-badge-line">
                          <strong className="meter-skill-name font-sans">{currentSkill.name}</strong>
                          {currentSkill.isMetered && currentSkill.level && (
                            <span className="meter-level-tag font-mono">{currentSkill.level}</span>
                          )}
                        </div>
                        <span className="meter-category-label font-mono">{currentSkill.category}</span>
                      </div>

                      {/* Percentage Score ONLY for Technical Skills */}
                      {currentSkill.isMetered ? (
                        <div className="meter-percent-score font-bebas">
                          <span>{currentSkill.percentage}%</span>
                        </div>
                      ) : (
                        <div className="creative-spotlight-pill font-mono">
                          <span>LEADERSHIP & CREATIVE</span>
                        </div>
                      )}

                    </div>

                    {/* Animated Progress Bar ONLY for Technical Skills */}
                    {currentSkill.isMetered && (
                      <div className="meter-bar-track">
                        <div 
                          className="meter-bar-fill"
                          style={{ width: `${currentSkill.percentage}%` }}
                        >
                          <div className="meter-bar-glow-dot"></div>
                        </div>
                      </div>
                    )}

                    {/* Skill Context Description */}
                    <p className="meter-desc-text font-sans">
                      {currentSkill.desc}
                    </p>

                  </div>
                )}

              </div>
            </div>
          )}

          {/* TAB 3: ACADEMIC EDUCATION ROADMAP (CLEAN, NO CLUTTER) */}
          {activeTab === 'education' && (
            <div className="tab-pane-content tab-fade-in">
              <div className="skills-tab-header-wrap">
                <h3 className="profil-info-title font-bebas">EDUCATION & ACADEMICS</h3>
                <span className="skills-header-sub font-mono">FORMAL ACADEMIC QUALIFICATIONS • 2019 TO PRESENT</span>
              </div>

              {/* Clean Academic Cards Stack */}
              <div className="edu-clean-stack font-sans">
                
                {/* 1. BACHELORS: BIM (Tribhuvan University) */}
                <div 
                  className={`edu-clean-card ${activeEduCard === 'bim' ? 'is-active' : ''}`}
                  onClick={() => handleEduSelect('bim')}
                  onMouseEnter={SoundEngine.playHover}
                  style={{ '--edu-accent': '#38bdf8' }}
                >
                  <div className="edu-clean-watermark font-bebas">01</div>
                  
                  <div className="edu-clean-header">
                    <div className="edu-clean-shield shield-cyan">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <path d="M12 2L1 7L12 12L23 7L12 2Z" stroke="#38BDF8" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(56, 189, 248, 0.15)"/>
                        <path d="M5 10V16.5C5 19 8 21 12 21C16 21 19 19 19 16.5V10" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M23 7V15" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>

                    <div className="edu-clean-meta">
                      <span className="edu-clean-period font-mono">
                        <span className="green-live-pulse"></span>
                        2021 TO PRESENT
                      </span>
                      <span className="edu-clean-status status-cyan font-mono">FINAL YEAR (BIM)</span>
                    </div>
                  </div>

                  <div className="edu-clean-body">
                    <h4 className="edu-clean-title font-sans">Bachelor of Information Management (BIM)</h4>
                    <span className="edu-clean-org font-mono">Janapriya Multiple Campus • Tribhuvan University (TU)</span>
                    <p className="edu-clean-desc">
                      Rigorous dual discipline degree combining software engineering, advanced database systems, and object oriented systems design with enterprise information management.
                    </p>
                  </div>
                </div>

                {/* 2. +2 MANAGEMENT & COMPUTER SCIENCE */}
                <div 
                  className={`edu-clean-card ${activeEduCard === 'mgmt' ? 'is-active' : ''}`}
                  onClick={() => handleEduSelect('mgmt')}
                  onMouseEnter={SoundEngine.playHover}
                  style={{ '--edu-accent': '#a855f7' }}
                >
                  <div className="edu-clean-watermark font-bebas">02</div>
                  
                  <div className="edu-clean-header">
                    <div className="edu-clean-shield shield-purple">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <path d="M4 19.5V4.5C4 3.67 4.67 3 5.5 3H19.5C20.33 3 21 3.67 21 4.5V19.5C21 20.33 20.33 21 19.5 21H5.5C4.67 21 4 20.33 4 19.5Z" stroke="#A855F7" strokeWidth="1.8" fill="rgba(168, 85, 247, 0.12)"/>
                        <path d="M9 7H16M9 11H16M9 15H13" stroke="#A855F7" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </div>

                    <div className="edu-clean-meta">
                      <span className="edu-clean-period font-mono">2019 TO 2021</span>
                      <span className="edu-clean-status status-purple font-mono">+2 MANAGEMENT</span>
                    </div>
                  </div>

                  <div className="edu-clean-body">
                    <h4 className="edu-clean-title font-sans">+2 Management & Computer Science</h4>
                    <span className="edu-clean-org font-mono">Amarsingh Model Secondary School • Pokhara</span>
                    <p className="edu-clean-desc">
                      Comprehensive education in Business Management, Principles of Accounting, Economics, and Computer Science & procedural programming fundamentals.
                    </p>
                  </div>
                </div>

                {/* 3. CLASS 10 / SEE SCHOOLING */}
                <div 
                  className={`edu-clean-card ${activeEduCard === 'see' ? 'is-active' : ''}`}
                  onClick={() => handleEduSelect('see')}
                  onMouseEnter={SoundEngine.playHover}
                  style={{ '--edu-accent': '#f59e0b' }}
                >
                  <div className="edu-clean-watermark font-bebas">03</div>
                  
                  <div className="edu-clean-header">
                    <div className="edu-clean-shield shield-amber">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.8" fill="rgba(245, 158, 11, 0.12)"/>
                        <path d="M12 6L13.8 9.6L17.8 10.2L14.9 13L15.6 17L12 15.1L8.4 17L9.1 13L6.2 10.2L10.2 9.6L12 6Z" fill="#F59E0B"/>
                      </svg>
                    </div>

                    <div className="edu-clean-meta">
                      <span className="edu-clean-period font-mono">2019</span>
                      <span className="edu-clean-status status-amber font-mono">DISTINCTION</span>
                    </div>
                  </div>

                  <div className="edu-clean-body">
                    <h4 className="edu-clean-title font-sans">Secondary Education Examination (Class 10 / SEE)</h4>
                    <span className="edu-clean-org font-mono">Secondary Board Examination • Pokhara</span>
                    <p className="edu-clean-desc">
                      Graduated with academic distinction in Mathematics, Science, and Introductory Computer Studies discipline.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 4: PROJECTS (CLEAN & COOL OVERVIEW) */}
          {activeTab === 'projects' && (
            <div className="tab-pane-content tab-fade-in">
              <div className="skills-tab-header-wrap">
                <h3 className="profil-info-title font-bebas">FEATURED PROJECTS</h3>
                <span className="skills-header-sub font-mono">PRODUCTION CRMS, CAMPUS & WEB PLATFORMS</span>
              </div>
              
              <div className="projects-tab-content font-sans">
                
                {/* 1. Dream Sky CRM */}
                <div 
                  className="tab-project-item"
                  onClick={() => scrollTo('projects-section')}
                  onMouseEnter={SoundEngine.playHover}
                >
                  <div className="tab-proj-logo-pod">
                    <img src="./images/dreamsky_logo.png" alt="Dream Sky CRM" className="tab-proj-logo-img" />
                  </div>
                  <div className="tab-proj-info-wrap">
                    <div className="tab-proj-header">
                      <strong className="tab-proj-name font-sans">Dream Sky Consultancy CRM</strong>
                      <span className="tab-proj-tag font-mono">CRM ENGINE</span>
                    </div>
                    <p className="tab-proj-desc">Full-scale education consultancy CRM managing end-to-end student visa lifecycles and document tracking.</p>
                  </div>
                </div>

                {/* 2. Annapurna Cheers Liquor & E Commerce */}
                <div 
                  className="tab-project-item"
                  onClick={() => scrollTo('projects-section')}
                  onMouseEnter={SoundEngine.playHover}
                >
                  <div className="tab-proj-logo-pod">
                    <img src="./images/annapurna_icon_gold.png" alt="Annapurna E Commerce" className="tab-proj-logo-img" />
                  </div>
                  <div className="tab-proj-info-wrap">
                    <div className="tab-proj-header">
                      <strong className="tab-proj-name font-sans">Annapurna Cheers Liquor & E Commerce</strong>
                      <span className="tab-proj-tag font-mono">LIVE STORE</span>
                    </div>
                    <p className="tab-proj-desc">Production online retail store with Cash on Delivery (COD), dynamic filtering, and interactive cart.</p>
                  </div>
                </div>

                {/* 3. Skillaunch */}
                <div 
                  className="tab-project-item"
                  onClick={() => scrollTo('projects-section')}
                  onMouseEnter={SoundEngine.playHover}
                >
                  <div className="tab-proj-logo-pod">
                    <img src="./images/skillaunch_logo.png" alt="Skillaunch" className="tab-proj-logo-img" />
                  </div>
                  <div className="tab-proj-info-wrap">
                    <div className="tab-proj-header">
                      <strong className="tab-proj-name font-sans">Skillaunch Platform</strong>
                      <span className="tab-proj-tag font-mono">CAMPUS ENGINE</span>
                    </div>
                    <p className="tab-proj-desc">Internship matching platform with automated skill gap analysis and verified progression metrics.</p>
                  </div>
                </div>

                <div className="tab-proj-footer-action font-mono">
                  <button 
                    className="tab-view-all-proj-btn"
                    onClick={() => scrollTo('projects-section')}
                    onMouseEnter={SoundEngine.playHover}
                  >
                    <span>VIEW FULL PROJECT SECTION</span>
                    <span>↓</span>
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
