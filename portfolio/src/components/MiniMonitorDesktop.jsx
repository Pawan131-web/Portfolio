import React, { useState, useEffect } from 'react';
import './MiniMonitorDesktop.css';
import { SoundEngine } from './SoundEngine';

// ==========================================
// REAL LAYERED macOS STYLE APP ICONS (SVG + CSS 3D Layering)
// ==========================================

export function GoogleAppIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-google" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <svg viewBox="0 0 48 48" className="app-icon-svg" fill="none">
        <circle cx="24" cy="24" r="21" fill="url(#gIconBg)" />
        <circle cx="24" cy="24" r="16" fill="#FFFFFF" filter="url(#iconSoftShadow)" />
        <g transform="translate(12, 12) scale(0.5)">
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
        </g>
        <defs>
          <linearGradient id="gIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <filter id="iconSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function AboutMeDocIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-doc" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <div className="doc-page-body">
        <div className="doc-fold-triangle"></div>
        <div className="doc-content-lines">
          <div className="dline dline-accent"></div>
          <div className="dline dline-short"></div>
          <div className="dline"></div>
        </div>
        <div className="doc-profile-badge">
          <img src="/images/photo.jpg" alt="Pawan thumbnail" />
        </div>
      </div>
    </div>
  );
}

export function SkillsMatrixIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-skills" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <svg viewBox="0 0 48 48" className="app-icon-svg" fill="none">
        <rect width="48" height="48" rx="12" fill="url(#skillsBg)" />
        <rect x="2" y="2" width="44" height="44" rx="10" stroke="url(#skillsBorder)" strokeWidth="1.5" strokeOpacity="0.6" />
        
        {/* Terminal Header & Prompt */}
        <circle cx="10" cy="11" r="1.5" fill="#EF4444" />
        <circle cx="15" cy="11" r="1.5" fill="#F59E0B" />
        <circle cx="20" cy="11" r="1.5" fill="#10B981" />
        
        {/* Glowing Matrix Atom */}
        <ellipse cx="24" cy="28" rx="14" ry="5.5" stroke="#10B981" strokeWidth="1.6" transform="rotate(-30 24 28)" />
        <ellipse cx="24" cy="28" rx="14" ry="5.5" stroke="#10B981" strokeWidth="1.6" transform="rotate(30 24 28)" />
        <ellipse cx="24" cy="28" rx="14" ry="5.5" stroke="#10B981" strokeWidth="1.6" transform="rotate(90 24 28)" />
        <circle cx="24" cy="28" r="3" fill="#34D399" filter="url(#atomGlow)" />
        
        <defs>
          <linearGradient id="skillsBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="skillsBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <filter id="atomGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function ProjectsHubIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-projects" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <svg viewBox="0 0 48 48" className="app-icon-svg" fill="none">
        <rect width="48" height="48" rx="12" fill="url(#projBaseBg)" />
        {/* 3D Embossed Folder Flap & Body */}
        <path d="M6 14C6 11.7909 7.79086 10 10 10H19.5L24 14.5H38C40.2091 14.5 42 16.2909 42 18.5V36C42 38.2091 40.2091 40 38 40H10C7.79086 40 6 38.2091 6 36V14Z" fill="url(#folderBack)" />
        
        {/* Inset White Document Card */}
        <rect x="12" y="16" width="24" height="18" rx="2" fill="#FFFFFF" fillOpacity="0.9" filter="url(#sheetShadow)" />
        <rect x="15" y="20" width="12" height="2" rx="1" fill="#F59E0B" />
        <rect x="15" y="24" width="18" height="1.5" rx="0.75" fill="#94A3B8" />
        <rect x="15" y="27.5" width="14" height="1.5" rx="0.75" fill="#CBD5E1" />

        {/* Front Gloss Folder Pocket */}
        <path d="M6 22C6 19.7909 7.79086 18 10 18H38C40.2091 18 42 19.7909 42 22V36C42 38.2091 40.2091 40 38 40H10C7.79086 40 6 38.2091 6 36V22Z" fill="url(#folderFront)" />
        <path d="M6 22C6 19.7909 7.79086 18 10 18H38C40.2091 18 42 19.7909 42 22V24H6V22Z" fill="#FFFFFF" fillOpacity="0.25" />
        
        {/* Metallic Briefcase Lock Buckle */}
        <rect x="21" y="25" width="6" height="8" rx="1.5" fill="url(#goldLock)" stroke="#B45309" strokeWidth="0.5" />
        <circle cx="24" cy="28.5" r="1" fill="#78350F" />

        <defs>
          <linearGradient id="projBaseBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="goldLock" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          <filter id="sheetShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function PhotosLibIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-photos" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <svg viewBox="0 0 48 48" className="app-icon-svg" fill="none">
        <rect width="48" height="48" rx="12" fill="url(#photosBg)" />
        <rect x="1.5" y="1.5" width="45" height="45" rx="10.5" stroke="#E2E8F0" strokeWidth="1" />
        
        {/* Apple 8-Petal Translucent Flower Iris */}
        <g transform="translate(24, 24)">
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#F43F5E" fillOpacity="0.88" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#FB923C" fillOpacity="0.88" transform="rotate(45)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#FBBF24" fillOpacity="0.88" transform="rotate(90)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#10B981" fillOpacity="0.88" transform="rotate(135)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#06B6D4" fillOpacity="0.88" transform="rotate(180)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#3B82F6" fillOpacity="0.88" transform="rotate(225)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#8B5CF6" fillOpacity="0.88" transform="rotate(270)" />
          <path d="M0 -15 C3 -15 5 -10 5 -5 C5 -1 2 0 0 0 C-2 0 -5 -1 -5 -5 C-5 -10 -3 -15 0 -15 Z" fill="#EC4899" fillOpacity="0.88" transform="rotate(315)" />
          <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
        </g>

        <defs>
          <linearGradient id="photosBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function TrashCanIcon({ size = 38 }) {
  return (
    <div className="os-app-icon-wrap icon-trash" style={{ width: size, height: size }}>
      <div className="icon-gloss-overlay"></div>
      <svg viewBox="0 0 48 48" className="app-icon-svg" fill="none">
        <rect width="48" height="48" rx="12" fill="url(#trashBg)" />
        {/* Metal Mesh Wastebasket */}
        <path d="M14 16L17 38H31L34 16H14Z" fill="url(#meshGrad)" stroke="#94A3B8" strokeWidth="1" />
        <ellipse cx="24" cy="16" rx="10" ry="2.5" fill="#64748B" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="20" y1="18" x2="21" y2="36" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="1 2" />
        <line x1="24" y1="18" x2="24" y2="36" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="1 2" />
        <line x1="28" y1="18" x2="27" y2="36" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="1 2" />

        <defs>
          <linearGradient id="trashBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function PowerDockIcon({ size = 30 }) {
  return (
    <div className="os-app-icon-wrap icon-power" style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M12 6V12M8.5 7.5C7 8.8 6 10.8 6 13C6 16.3 8.7 19 12 19C15.3 19 18 16.3 18 13C18 10.8 17 8.8 15.5 7.5" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ==========================================
// SEARCH ENGINE DATABASE WITH RICH THUMBNAILS
// ==========================================

const SEARCH_DATABASE = [
  {
    id: 'crm',
    title: "Dream Sky Consultancy CRM: Full Stack Visa Platform",
    url: "https://dreamsky.com.np",
    displayUrl: "https://dreamsky.com.np › consultancy-crm",
    siteName: "Dream Sky · Production CRM",
    category: "projects",
    thumbnail: "./images/dreamsky_logo.png",
    snippet: "Production grade education consultancy CRM managing end to end visa application lifecycles, encrypted document verification, dynamic agent commissions, and interactive student/teacher IELTS portals.",
    sitelinks: [
      { label: "Live System: dreamsky.com.np", url: "https://dreamsky.com.np" },
      { label: "React Next.js + Node", url: "https://dreamsky.com.np" },
      { label: "PostgreSQL & Prisma", url: "https://dreamsky.com.np" }
    ],
    keywords: ["dream sky", "crm", "visa", "projects", "react", "postgresql", "node", "express", "prisma", "production"]
  },
  {
    id: 'ecom',
    title: "Annapurna Cheers Liquor & E Commerce Store",
    url: "https://pawan131-web.github.io/Online-shopping-/idex.html",
    displayUrl: "https://pawan131-web.github.io › Online-shopping",
    siteName: "Annapurna · E-Commerce Platform",
    category: "projects",
    thumbnail: "./images/annapurna_icon_gold.png",
    snippet: "High converting boutique digital store featuring Cash on Delivery (COD) checkout pipelines, regulatory age verification gates, instant product filtering, and merchant sales analytics.",
    sitelinks: [
      { label: "Live Storefront Demo", url: "https://pawan131-web.github.io/Online-shopping-/idex.html" },
      { label: "Django + Python Backend", url: "https://pawan131-web.github.io/Online-shopping-/idex.html" },
      { label: "Tailwind CSS & MySQL", url: "https://pawan131-web.github.io/Online-shopping-/idex.html" }
    ],
    keywords: ["ecommerce", "e-commerce", "liquor", "store", "django", "python", "mysql", "tailwind", "annapurna", "projects"]
  },
  {
    id: 'skillaunch',
    title: "Skillaunch: Campus Skill Mapping & Internship Discovery Engine",
    url: "https://github.com/Pawan131-web",
    displayUrl: "https://github.com/Pawan131-web › skillaunch-engine",
    siteName: "GitHub · Campus Engine",
    category: "projects",
    thumbnail: "./images/skillaunch_logo.png",
    snippet: "Campus wide student internship discovery engine that intelligently maps academic proficiencies against real enterprise job requirements with gap analysis and progression milestones.",
    sitelinks: [
      { label: "Campus Staging Hub", url: "https://github.com/Pawan131-web" },
      { label: "Node Express + MongoDB", url: "https://github.com/Pawan131-web" }
    ],
    keywords: ["skillaunch", "internship", "career", "skills", "campus", "mongodb", "react", "node", "projects"]
  },
  {
    id: 'skills',
    title: "Technical Skills Matrix, System Security & Stack Competencies",
    url: "#",
    displayUrl: "pawanrimal.dev › skills › technical-matrix",
    siteName: "Pawan Portfolio · Competencies",
    category: "skills",
    thumbnail: "./images/skill_react.jpg",
    snippet: "Frontend Engineering: React.js (95%), Tailwind CSS (96%), JavaScript ES6+. Backend & APIs: Node.js (90%), Django Python (88%), Express. Databases: PostgreSQL (92%), MongoDB, MySQL. Infrastructure: Docker, Linux, Git.",
    sitelinks: [
      { label: "Frontend Architecture", url: "#" },
      { label: "Backend Infrastructure", url: "#" },
      { label: "Database Optimization", url: "#" }
    ],
    keywords: ["skills", "react", "node", "python", "django", "postgres", "postgresql", "tailwind", "docker", "linux", "git", "javascript", "mongodb", "mysql", "tech stack"]
  },
  {
    id: 'exp',
    title: "Professional Experience: Nepal Telecom Intern & Academic Mentor",
    url: "#",
    displayUrl: "pawanrimal.dev › experience › career-timeline",
    siteName: "Pawan Portfolio · Career",
    category: "experience",
    thumbnail: "./images/photo.jpg",
    snippet: "Nepal Telecom (NTC) Networking & Web Infrastructure Intern (2026). Full Stack Freelance Developer (2022 to Present). Academic & ICT Programming Mentor guiding 30+ students in Pokhara.",
    sitelinks: [
      { label: "Nepal Telecom Role", url: "#" },
      { label: "30+ Students Mentored", url: "#" },
      { label: "Freelance Contracts", url: "#" }
    ],
    keywords: ["experience", "internship", "ntc", "nepal telecom", "mentor", "mentorship", "students", "freelance", "work", "career"]
  },
  {
    id: 'edu',
    title: "Education Credentials: BIM at Janapriya Campus, Tribhuvan University",
    url: "#",
    displayUrl: "tribhuvan-university.edu.np › pawan-rimal › bim",
    siteName: "Tribhuvan University · Credentials",
    category: "education",
    thumbnail: "./images/normal.jpg",
    snippet: "Bachelor of Information Management (BIM) at Janapriya Multiple Campus, Tribhuvan University (2021 to Present). +2 Management & Computer Science at Amarsingh Model Secondary School (2019 to 2021).",
    sitelinks: [
      { label: "TU Janapriya BIM", url: "#" },
      { label: "+2 Management Amarsingh", url: "#" }
    ],
    keywords: ["education", "bim", "janapriya", "tribhuvan", "tu", "university", "college", "degree", "school", "amarsingh", "management"]
  },
  {
    id: 'github',
    title: "Pawan131-web (Pawan Rimal) • GitHub Open Source Repositories",
    url: "https://github.com/Pawan131-web",
    displayUrl: "github.com › Pawan131-web",
    siteName: "GitHub · Developer Profile",
    category: "socials",
    thumbnail: "./images/pawan_cutout.png",
    snippet: "Explore open-source repositories, full-stack CRM platforms, React & Django architectures, and web utilities engineered by Pawan Rimal (@Pawan131-web).",
    sitelinks: [
      { label: "Repositories Hub", url: "https://github.com/Pawan131-web" },
      { label: "Contributions", url: "https://github.com/Pawan131-web" }
    ],
    keywords: ["github", "git", "code", "repo", "repositories", "pawan131-web", "open source"]
  },
  {
    id: 'fb',
    title: "Pawan Rimal (@pawan.rimal.779) • Facebook Profile & Network",
    url: "https://www.facebook.com/pawan.rimal.779",
    displayUrl: "facebook.com › pawan.rimal.779",
    siteName: "Facebook · Official Profile",
    category: "socials",
    thumbnail: "./images/FB_IMG_1637249567112 (1).jpg",
    snippet: "Official Facebook profile of Pawan Rimal (@pawan.rimal.779). Updates on web application launches, tech community mentorship in Pokhara, and software architecture articles.",
    sitelinks: [
      { label: "Connect on Facebook", url: "https://www.facebook.com/pawan.rimal.779" }
    ],
    keywords: ["facebook", "fb", "social", "connect", "profile", "meta", "pawan.rimal.779"]
  },
  {
    id: 'insta',
    title: "Pawan Rimal (@pawan_rim) • Instagram Stories & Engineering Lab",
    url: "https://www.instagram.com/pawan_rim/",
    displayUrl: "instagram.com › pawan_rim",
    siteName: "Instagram · Visual Feed",
    category: "socials",
    thumbnail: "./images/IMG-87d3fe0aece4d84800a35203eefc1660-V.jpg",
    snippet: "Follow Pawan Rimal on Instagram (@pawan_rim) for coding workspace setups, developer lifestyle in Pokhara, travel photography, and engineering stories.",
    sitelinks: [
      { label: "Follow @pawan_rim", url: "https://www.instagram.com/pawan_rim/" }
    ],
    keywords: ["instagram", "insta", "ig", "photos", "pawan_rim", "social"]
  },
  {
    id: 'wa',
    title: "Direct WhatsApp Message Hotline: +977 9806640515",
    url: "https://wa.me/9779806640515",
    displayUrl: "api.whatsapp.com › send › phone=9779806640515",
    siteName: "WhatsApp · Instant Messaging",
    category: "socials",
    thumbnail: "./images/photo.jpg",
    snippet: "Instant direct WhatsApp communication channel with Pawan Rimal for freelance inquiries, contract development, and tech consultancy.",
    sitelinks: [
      { label: "Send Direct WhatsApp Message", url: "https://wa.me/9779806640515" }
    ],
    keywords: ["whatsapp", "wa", "chat", "message", "contact", "phone", "number"]
  },
  {
    id: 'email',
    title: "Direct Email Dispatch: rimalpawan4@gmail.com",
    url: "mailto:rimalpawan4@gmail.com",
    displayUrl: "mail.google.com › mail › u=rimalpawan4@gmail.com",
    siteName: "Google Mail · Direct Dispatch",
    category: "socials",
    thumbnail: "./images/pawan_transparent.png",
    snippet: "Send project inquiries, RFPs, or technical collaboration proposals directly to rimalpawan4@gmail.com. Available for remote engineering worldwide.",
    sitelinks: [
      { label: "Compose Email to Pawan", url: "mailto:rimalpawan4@gmail.com" }
    ],
    keywords: ["email", "mail", "gmail", "rimalpawan4@gmail.com", "contact"]
  }
];

// ==========================================
// ALL SKILL CARDS (FULL STACK, TOOLS, THC-HYDRA, CREATIVE & LEADERSHIP)
// ==========================================
const ALL_SKILL_CARDS = [
  // ─── 1. CORE WEB & FULL-STACK ─────────────────────────
  {
    id: 'react',
    name: 'React.js',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    extraClass: 'express-invert'
  },
  {
    id: 'django',
    name: 'Django',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    id: 'htmlcss',
    name: 'HTML5 / CSS3',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
  },
  {
    id: 'rest',
    name: 'REST APIs',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
  },
  {
    id: 'jwt',
    name: 'JWT Auth',
    category: 'CORE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg'
  },

  // ─── 2. TOOLS, DEVOPS & SECURITY (INCLUDING THC-HYDRA) ──
  {
    id: 'hydra',
    name: 'THC-Hydra',
    category: 'SECURITY',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#1C1917" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M20 7L28 11V19C28 25.5 24.5 31.5 20 33C15.5 31.5 12 25.5 12 19V11L20 7Z" fill="rgba(239, 68, 68, 0.2)" stroke="#EF4444" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M16 16C16 14.5 17.5 13 20 13C22.5 13 24 14.5 24 16C24 18 22 19 20 20V23" stroke="#F87171" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="20" cy="26.5" r="1.2" fill="#F87171"/>
      </svg>
    )
  },
  {
    id: 'burpsuite',
    name: 'Burp Suite',
    category: 'SECURITY',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#18181B" stroke="#F97316" strokeWidth="1.2" />
        <path d="M13 14C13 12.3431 14.3431 11 16 11H24C25.6569 11 27 12.3431 27 14V17C27 18.6569 25.6569 20 24 20H15L13 22V14Z" fill="rgba(249, 115, 22, 0.2)" stroke="#F97316" strokeWidth="1.5"/>
        <path d="M16 20V26C16 27.6569 17.3431 29 19 29H27C28.6569 29 30 27.6569 30 26V23C30 21.3431 28.6569 20 27 20" stroke="#FB923C" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'SECURITY',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M11 26C13 18 19 12 29 13C28 17 26 21 21 24C17 26.5 13 26.5 11 26Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38BDF8" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M14 27C17 29 23 29 28 26" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'TOOLS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'TOOLS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    id: 'linux',
    name: 'Linux CLI',
    category: 'TOOLS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'TOOLS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'TOOLS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
  },

  // ─── 3. CREATIVE & LEADERSHIP SKILLS ──────────────────
  {
    id: 'leadership',
    name: 'Leadership',
    category: 'CREATIVE',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E1B4B" stroke="#F59E0B" strokeWidth="1.2" />
        <path d="M10 27L13 14L18 20L22 11L26 20L30 14L33 27H10Z" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="21.5" cy="27" r="1.5" fill="#F59E0B"/>
      </svg>
    )
  },
  {
    id: 'decisions',
    name: 'Decision Making',
    category: 'CREATIVE',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="10" stroke="#10B981" strokeWidth="1.6"/>
        <path d="M20 14V20L24 23" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="#34D399"/>
      </svg>
    )
  },
  {
    id: 'planning',
    name: 'Planning',
    category: 'CREATIVE',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E293B" stroke="#E2E8F0" strokeWidth="1.2" />
        <rect x="11" y="12" width="18" height="17" rx="3" stroke="#E2E8F0" strokeWidth="1.6"/>
        <path d="M11 17H29" stroke="#E2E8F0" strokeWidth="1.6"/>
        <circle cx="15" cy="21" r="1" fill="#38BDF8"/>
        <circle cx="20" cy="21" r="1" fill="#38BDF8"/>
        <circle cx="25" cy="21" r="1" fill="#38BDF8"/>
      </svg>
    )
  },
  {
    id: 'thinking',
    name: 'Critical Thinking',
    category: 'CREATIVE',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#4C0519" stroke="#F43F5E" strokeWidth="1.2" />
        <path d="M16 12C16 9.79086 17.7909 8 20 8C22.2091 8 24 9.79086 24 12C24 14.5 22 16 20 18V21" stroke="#F43F5E" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="20" cy="25" r="1.2" fill="#FB7185"/>
        <path d="M17 28H23" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'figma',
    name: 'UI/UX Design',
    category: 'CREATIVE',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    id: 'collaborative',
    name: 'Collaboration',
    category: 'CREATIVE',
    customIcon: (
      <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
        <rect width="40" height="40" rx="10" fill="#064E3B" stroke="#34D399" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="3.5" stroke="#34D399" strokeWidth="1.6"/>
        <circle cx="24" cy="16" r="3.5" stroke="#34D399" strokeWidth="1.6"/>
        <path d="M10 27C10 23.5 13 22 16 22C17.5 22 19 22.5 20 23.5C21 22.5 22.5 22 24 22C27 22 30 23.5 30 27" stroke="#34D399" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  }
];

// ==========================================
// STRICTLY PERSONAL PHOTOS GALLERY
// ==========================================
const PERSONAL_PHOTOS = [
  {
    id: 'p1',
    src: './images/photo.jpg',
    title: 'Pawan Rimal'
  },
  {
    id: 'p2',
    src: './images/IMG-87d3fe0aece4d84800a35203eefc1660-V.jpg',
    title: 'Pawan Rimal'
  },
  {
    id: 'p3',
    src: './images/IMG-7fa5a26f9581d37c77e719e05c5d5c7c-V_1.jpg',
    title: 'Pawan Rimal'
  },
  {
    id: 'p4',
    src: './images/FB_IMG_1637249567112 (1).jpg',
    title: 'Pawan Rimal'
  }
];

export default function MiniMonitorDesktop() {
  // Power state: 'standby' (default idle) | 'awake' | 'shutting_down'
  const [powerState, setPowerState] = useState('standby');
  const [activeWindow, setActiveWindow] = useState(null); // 'search' | 'about' | 'skills' | 'projects' | 'gallery'
  
  // Real-time Clock State (updating every second)
  const [currentTime, setCurrentTime] = useState(() => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Search Engine Interactive States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('all'); // 'all' | 'projects' | 'skills' | 'experience' | 'education' | 'socials'

  // Skills filter state
  const [skillsCategoryFilter, setSkillsCategoryFilter] = useState('ALL');

  // Power On action (standby -> awake)
  const handleWakeUp = () => {
    if (powerState === 'standby') {
      SoundEngine.playStart();
      setPowerState('awake');
    }
  };

  // Shutdown action (awake -> shutting_down -> standby)
  const handleShutdown = (e) => {
    e.stopPropagation();
    SoundEngine.playClick();
    setPowerState('shutting_down');
    setActiveWindow(null);
    setTimeout(() => {
      setPowerState('standby');
    }, 1400);
  };

  // Open App Window
  const openAppWindow = (appName, e) => {
    if (e) e.stopPropagation();
    SoundEngine.playClick();
    setActiveWindow(appName);
  };

  // Filter Search Results
  const filteredSearchResults = SEARCH_DATABASE.filter(item => {
    const matchesFilter = searchFilter === 'all' || item.category === searchFilter;
    if (!searchQuery.trim()) return matchesFilter;
    
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      item.title.toLowerCase().includes(query) ||
      item.snippet.toLowerCase().includes(query) ||
      item.keywords.some(k => k.toLowerCase().includes(query));
    
    return matchesFilter && matchesQuery;
  });

  // Filter Skills Cards
  const filteredSkillCards = ALL_SKILL_CARDS.filter(s => {
    if (skillsCategoryFilter === 'ALL') return true;
    return s.category === skillsCategoryFilter;
  });

  const projects = [
    { 
      title: 'Dream Sky Consultancy CRM', 
      type: 'Production Visa Management Architecture', 
      status: 'LIVE IN PRODUCTION', 
      tech: 'React.js • Next.js • Node.js • Express • PostgreSQL • Prisma',
      link: 'https://dreamsky.com.np',
      logo: './images/dreamsky_logo.png',
      summary: 'Centralized enterprise CRM managing student visa applications, document verification pipelines, dynamic agency commissions, and IELTS teacher schedules.'
    },
    { 
      title: 'Annapurna Cheers Liquor & E-Commerce', 
      type: 'Client E-Commerce Storefront', 
      status: 'CLIENT DEPLOYED', 
      tech: 'HTML5 • CSS3 • JavaScript • Tailwind CSS • Django • Python • MySQL',
      link: 'https://pawan131-web.github.io/Online-shopping-/idex.html',
      logo: './images/annapurna_icon_gold.png',
      summary: 'High-converting boutique digital store featuring Cash on Delivery checkout flows, legal age verification gates, instant product filtering, and sales reports.'
    },
    { 
      title: 'Skillaunch Platform', 
      type: 'Campus Skill Mapping Engine', 
      status: 'CAMPUS STAGING', 
      tech: 'HTML5 • CSS3 • JavaScript • Tailwind CSS • Node.js • Express • MongoDB • Mongoose',
      link: 'https://github.com/Pawan131-web',
      logo: './images/skillaunch_logo.png',
      summary: 'Campus-wide career portal that algorithmically evaluates academic coursework against live industry job requirements to recommend custom milestone pathways.'
    },
  ];

  return (
    <div 
      className={`monitor-device-frame ${powerState === 'awake' ? 'is-awake' : 'is-idle'}`}
      onClick={handleWakeUp}
    >
      {/* Studio Monitor Outer Bezel & Chassis */}
      <div className="monitor-bezel">
        {/* Precision Recessed iSight Camera & Sensor Array */}
        <div className="monitor-top-cam">
          <span className="cam-sensor-glass">
            <span className="cam-lens"></span>
          </span>
          <span className="cam-active-dot"></span>
        </div>

        {/* Studio Display Screen Glass Area */}
        <div className="monitor-screen">
          
          {/* Glass Reflection Glare Streak */}
          <div className="screen-glass-reflection"></div>
          <div className="screen-micro-scanlines"></div>

          {/* OS Top Menu Bar (Active only when awake) */}
          {powerState === 'awake' && (
            <div className="os-window-header fade-in">
              <div className="os-header-left">
                <div className="os-window-dots">
                  <span className="dot dot-red" title="Close Window" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow(null); }}></span>
                  <span className="dot dot-yellow" title="Minimize Window" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow(null); }}></span>
                  <span className="dot dot-green" title="Open Google Search" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow('search'); }}></span>
                </div>
                <div className="os-system-menu font-sans">
                  <span className="os-app-brand font-mono">PR</span>
                  <span className="os-app-bold">{activeWindow ? activeWindow.toUpperCase() : 'FINDER'}</span>
                  <span className={`os-menu-item ${!activeWindow ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveWindow(null); }}>Desktop</span>
                  <span className={`os-menu-item ${activeWindow === 'search' ? 'active' : ''}`} onClick={(e) => openAppWindow('search', e)}>Google</span>
                  <span className={`os-menu-item ${activeWindow === 'about' ? 'active' : ''}`} onClick={(e) => openAppWindow('about', e)}>About</span>
                  <span className={`os-menu-item ${activeWindow === 'skills' ? 'active' : ''}`} onClick={(e) => openAppWindow('skills', e)}>Skills</span>
                  <span className={`os-menu-item ${activeWindow === 'projects' ? 'active' : ''}`} onClick={(e) => openAppWindow('projects', e)}>Projects</span>
                </div>
              </div>

              <div className="os-header-right font-sans">
                <div className="os-status-indicators">
                  <span className="status-wifi-dot" title="Network Connected"></span>
                </div>
                <span className="os-clock-live font-mono">{currentTime}</span>
                <button 
                  className="os-shutdown-btn" 
                  onClick={handleShutdown}
                  title="Shut down workstation"
                >
                  OFF
                </button>
              </div>
            </div>
          )}

          {/* Screen Content Layer Stack */}
          <div className="screen-content-stage">
            
            {/* 1. STANDBY / IDLE LOCKSCREEN STATE */}
            {powerState === 'standby' && (
              <div className="standby-layer fade-in" onClick={handleWakeUp}>
                <div className="standby-ambient-glow"></div>
                <div className="standby-vignette-overlay"></div>
                
                {/* Top Status Clock Pill with Dynamic Real-Time Clock */}
                <div className="standby-top-bar font-mono">
                  <span className="standby-os-badge">PAWAN OS 3.0 • PRO DISPLAY</span>
                  <span className="standby-time-chip">{currentTime}</span>
                </div>

                <div className="standby-avatar-ring">
                  <img 
                    src="./images/pawan_cutout.png" 
                    alt="Pawan Rimal Avatar" 
                    className="standby-avatar-img"
                    onError={(e) => { e.target.src = "./images/pawan_transparent.png"; }}
                  />
                  <div className="avatar-active-beacon"></div>
                </div>

                <div className="standby-info font-sans">
                  <h3 className="standby-name font-bebas">PAWAN RIMAL</h3>
                  <p className="standby-role font-mono">FULL STACK DEVELOPER & MENTOR</p>
                  <div className="standby-clock font-mono">POKHARA, NEPAL</div>
                </div>

                {/* Clean Wake Button without Emojis */}
                <button className="standby-wake-banner font-mono" onClick={handleWakeUp}>
                  <span>CLICK TO POWER ON WORKSTATION</span>
                  <span className="wake-btn-arrow">→</span>
                </button>
              </div>
            )}

            {/* 2. SHUTTING DOWN ANIMATION STATE */}
            {powerState === 'shutting_down' && (
              <div className="shutdown-layer fade-in">
                <div className="shutdown-spinner"></div>
                <h4 className="shutdown-text font-mono">SYSTEM SHUTTING DOWN...</h4>
                <span className="shutdown-sub font-mono">PAWAN OS 3.0 • PRO DISPLAY</span>
              </div>
            )}

            {/* 3. FUNCTIONAL DESKTOP ENVIRONMENT STATE WITH REAL WALLPAPER */}
            {powerState === 'awake' && (
              <div className="desktop-env-layer fade-in" onClick={() => {}}>
                {/* Desktop Real Wallpaper Background */}
                <div className="desktop-wallpaper-bg">
                  <img src="./images/desktop_wallpaper.jpg" alt="macOS Desktop Wallpaper" />
                  <div className="wallpaper-overlay-shade"></div>
                  <div className="desktop-reflection-sheen"></div>
                </div>

                {/* Desktop Icons Matrix (Realistic Layered macOS App Icons) */}
                <div className="desktop-icons-matrix">
                  {/* Google Search App */}
                  <div 
                    className={`desktop-icon-node ${activeWindow === 'search' ? 'selected' : ''}`}
                    onClick={(e) => openAppWindow('search', e)}
                    title="Open Google.app"
                  >
                    <GoogleAppIcon size={40} />
                    <span className="dicon-label font-sans">Google.app</span>
                  </div>

                  {/* About Me Doc */}
                  <div 
                    className={`desktop-icon-node ${activeWindow === 'about' ? 'selected' : ''}`}
                    onClick={(e) => openAppWindow('about', e)}
                    title="Open AboutMe.doc"
                  >
                    <AboutMeDocIcon size={40} />
                    <span className="dicon-label font-sans">AboutMe.doc</span>
                  </div>

                  {/* Skills Matrix App */}
                  <div 
                    className={`desktop-icon-node ${activeWindow === 'skills' ? 'selected' : ''}`}
                    onClick={(e) => openAppWindow('skills', e)}
                    title="Open Skills.matrix"
                  >
                    <SkillsMatrixIcon size={40} />
                    <span className="dicon-label font-sans">Skills.matrix</span>
                  </div>

                  {/* Projects Hub App */}
                  <div 
                    className={`desktop-icon-node ${activeWindow === 'projects' ? 'selected' : ''}`}
                    onClick={(e) => openAppWindow('projects', e)}
                    title="Open Projects.hub"
                  >
                    <ProjectsHubIcon size={40} />
                    <span className="dicon-label font-sans">Projects.hub</span>
                  </div>

                  {/* Photos Library */}
                  <div 
                    className={`desktop-icon-node ${activeWindow === 'gallery' ? 'selected' : ''}`}
                    onClick={(e) => openAppWindow('gallery', e)}
                    title="Open Photos.app"
                  >
                    <PhotosLibIcon size={40} />
                    <span className="dicon-label font-sans">Photos.app</span>
                  </div>

                  {/* Trash Can */}
                  <div 
                    className="desktop-icon-node"
                    onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); }}
                    title="Trash (0 Items)"
                  >
                    <TrashCanIcon size={40} />
                    <span className="dicon-label font-sans">Trash</span>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* MAXIMIZED NATIVE APPLICATION WINDOW LAYER                 */}
                {/* ========================================================= */}
                {activeWindow && (
                  <div className="active-app-window-overlay fade-in" onClick={(e) => e.stopPropagation()}>
                    <div className="active-win-frame">
                      
                      {/* Window Top Title & Control Header */}
                      <div className="active-win-header">
                        <div className="win-control-dots">
                          <span className="dot dot-red" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow(null); }} title="Close App"></span>
                          <span className="dot dot-yellow" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow(null); }} title="Minimize App"></span>
                          <span className="dot dot-green" title="Full Width"></span>
                        </div>
                        
                        {/* Center App Window Title / Browser Address */}
                        <div className="win-header-address-bar font-mono">
                          {activeWindow === 'search' && <span className="address-url">https://google.com/search?q=pawan+rimal</span>}
                          {activeWindow === 'about' && <span className="address-url">file:///Users/pawan/Documents/AboutMe.doc</span>}
                          {activeWindow === 'skills' && <span className="address-url">workspace://pawan/engineering/skills.matrix</span>}
                          {activeWindow === 'projects' && <span className="address-url">https://github.com/Pawan131-web/projects</span>}
                          {activeWindow === 'gallery' && <span className="address-url">photos://library/personal</span>}
                        </div>

                        <button className="win-close-btn font-mono" onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); setActiveWindow(null); }} title="Close window">
                          CLOSE ✕
                        </button>
                      </div>

                      {/* Window Main Body */}
                      <div className="active-win-body">
                        
                        {/* ========================================================= */}
                        {/* 1. GOOGLE SEARCH ENGINE (WITH RICH THUMBNAIL IMAGES)      */}
                        {/* ========================================================= */}
                        {activeWindow === 'search' && (
                          <div className="google-engine-view font-sans">
                            
                            {/* Google Search Bar Header */}
                            <div className="google-browser-header">
                              <div className="google-logo-brand font-sans">
                                <span className="g-blue">G</span>
                                <span className="g-red">o</span>
                                <span className="g-yellow">o</span>
                                <span className="g-blue">g</span>
                                <span className="g-green">l</span>
                                <span className="g-red">e</span>
                              </div>
                              
                              <div className="google-search-input-box">
                                <input 
                                  type="text" 
                                  className="google-real-search-input font-sans"
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  placeholder="Search projects, skills, education, experience..."
                                  autoFocus
                                />
                                {searchQuery && (
                                  <button className="search-clear-btn font-mono" onClick={() => setSearchQuery('')}>✕</button>
                                )}
                              </div>
                            </div>

                            {/* Category Filter Chips */}
                            <div className="google-category-tabs-row font-sans">
                              <button 
                                className={`g-tab-chip ${searchFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('all')}
                              >
                                All Results
                              </button>
                              <button 
                                className={`g-tab-chip ${searchFilter === 'projects' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('projects')}
                              >
                                Projects
                              </button>
                              <button 
                                className={`g-tab-chip ${searchFilter === 'skills' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('skills')}
                              >
                                Tech Stack
                              </button>
                              <button 
                                className={`g-tab-chip ${searchFilter === 'experience' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('experience')}
                              >
                                Experience
                              </button>
                              <button 
                                className={`g-tab-chip ${searchFilter === 'education' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('education')}
                              >
                                Education
                              </button>
                              <button 
                                className={`g-tab-chip ${searchFilter === 'socials' ? 'active' : ''}`}
                                onClick={() => setSearchFilter('socials')}
                              >
                                Social Profiles
                              </button>
                            </div>

                            {/* Search Results List with Google Web-Style Images */}
                            <div className="google-results-scroll-pane font-sans">
                              <div className="google-results-count-line font-mono">
                                About {filteredSearchResults.length} results (0.02 seconds)
                              </div>

                              {filteredSearchResults.length > 0 ? (
                                filteredSearchResults.map((result) => (
                                  <div key={result.id} className="google-result-card">
                                    <div className="g-res-main-content">
                                      <div className="g-res-text-col">
                                        <div className="g-res-breadcrumb font-mono">
                                          <span className="g-res-sitename">{result.siteName}</span>
                                          <span className="g-res-url">{result.displayUrl}</span>
                                        </div>
                                        <h4 className="g-res-title font-sans">
                                          <a href={result.url} target="_blank" rel="noreferrer" onClick={(e) => { if (result.url === '#') e.preventDefault(); }}>
                                            {result.title}
                                          </a>
                                        </h4>
                                        <p className="g-res-snippet font-sans">{result.snippet}</p>

                                        {result.sitelinks && (
                                          <div className="g-res-sitelinks-cluster font-sans">
                                            {result.sitelinks.map((link, lIdx) => (
                                              <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" className="g-sitelink-node" onClick={(e) => { if (link.url === '#') e.preventDefault(); }}>
                                                <span>{link.label}</span>
                                                <span className="g-sitelink-arrow">›</span>
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </div>

                                      {/* Real Google Rich Result Thumbnail Image */}
                                      {result.thumbnail && (
                                        <div className="g-res-thumbnail-box">
                                          <img 
                                            src={result.thumbnail} 
                                            alt={result.title} 
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="google-empty-state font-sans">
                                  <h4 className="empty-title">No search matches found for "{searchQuery}"</h4>
                                  <p className="empty-sub">Try searching keywords like "CRM", "React", "BIM", "Django", "Telecom", or "Pokhara".</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* ========================================================= */}
                        {/* 2. ABOUT ME DOC (PAGES / RICH TEXT READER)                */}
                        {/* ========================================================= */}
                        {activeWindow === 'about' && (
                          <div className="doc-content-view font-sans">
                            <div className="doc-page-paper">
                              <div className="doc-masthead">
                                <div className="doc-author-avatar">
                                  <img src="./images/photo.jpg" alt="Pawan Rimal" />
                                </div>
                                <div className="doc-author-details">
                                  <h3 className="doc-author-name font-bebas">PAWAN RIMAL</h3>
                                  <p className="doc-author-sub font-mono">FULL STACK DEVELOPER & ICT ACADEMIC MENTOR</p>
                                  <div className="doc-meta-pills font-mono">
                                    <span className="doc-pill">POKHARA, NEPAL</span>
                                    <span className="doc-pill">BIM • TRIBHUVAN UNIVERSITY</span>
                                    <span className="doc-pill-status">AVAILABLE FOR HIRE</span>
                                  </div>
                                </div>
                              </div>

                              <hr className="doc-divider" />

                              <div className="doc-prose-body font-sans">
                                <h4 className="doc-section-h4 font-mono">EXECUTIVE PROFILE</h4>
                                <p>
                                  Full-stack software engineer specialized in building scalable, production-ready web platforms and mission-critical databases. Proven experience architecting full lifecycle applications from high-converting customer storefronts to enterprise education CRMs.
                                </p>

                                <h4 className="doc-section-h4 font-mono">ACADEMIC & COMMUNITY MENTORSHIP</h4>
                                <p>
                                  Actively instructing and mentoring 30+ students across Pokhara in core data structures, algorithms, relational database normalization, and full-stack software development best practices.
                                </p>

                                <h4 className="doc-section-h4 font-mono">CAREER MILESTONES</h4>
                                <ul className="doc-bullet-list font-mono">
                                  <li><span>•</span> Nepal Telecom (NTC) — Networking & Web Infrastructure Intern (2026)</li>
                                  <li><span>•</span> Freelance Full-Stack Developer — Production Applications & Contracts (2022 to Present)</li>
                                  <li><span>•</span> Bachelor of Information Management (BIM) — Janapriya Multiple Campus, TU</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ========================================================= */}
                        {/* 3. SKILLS MATRIX (ALL SKILLS: FULL STACK, HYDRA & CREATIVE) */}
                        {/* ========================================================= */}
                        {activeWindow === 'skills' && (
                          <div className="skills-matrix-view font-sans">
                            <div className="matrix-hero-bar font-mono">
                              <span className="matrix-title-heading">TECHNICAL & CREATIVE SKILLS</span>
                              <span className="matrix-badge-live">{ALL_SKILL_CARDS.length} SKILLS LOADED</span>
                            </div>

                            {/* Category Filter Tabs */}
                            <div className="skills-category-filter-row font-mono">
                              <button 
                                className={`skill-filter-pill ${skillsCategoryFilter === 'ALL' ? 'active' : ''}`}
                                onClick={() => setSkillsCategoryFilter('ALL')}
                              >
                                ALL ({ALL_SKILL_CARDS.length})
                              </button>
                              <button 
                                className={`skill-filter-pill ${skillsCategoryFilter === 'CORE' ? 'active' : ''}`}
                                onClick={() => setSkillsCategoryFilter('CORE')}
                              >
                                CORE STACK (14)
                              </button>
                              <button 
                                className={`skill-filter-pill ${skillsCategoryFilter === 'SECURITY' ? 'active' : ''}`}
                                onClick={() => setSkillsCategoryFilter('SECURITY')}
                              >
                                SECURITY & HYDRA (3)
                              </button>
                              <button 
                                className={`skill-filter-pill ${skillsCategoryFilter === 'TOOLS' ? 'active' : ''}`}
                                onClick={() => setSkillsCategoryFilter('TOOLS')}
                              >
                                TOOLS & CLI (5)
                              </button>
                              <button 
                                className={`skill-filter-pill ${skillsCategoryFilter === 'CREATIVE' ? 'active' : ''}`}
                                onClick={() => setSkillsCategoryFilter('CREATIVE')}
                              >
                                CREATIVE & LEADERSHIP (6)
                              </button>
                            </div>

                            {/* Spacious Clean Grid of Brand Logo Skill Cards */}
                            <div className="brand-skills-grid">
                              {filteredSkillCards.map((skill) => (
                                <div key={skill.id} className="brand-skill-card" title={`${skill.name} • ${skill.category}`}>
                                  {skill.customIcon ? (
                                    <div className="brand-skill-icon-box">{skill.customIcon}</div>
                                  ) : (
                                    <div className="brand-skill-icon-box">
                                      <img 
                                        src={skill.image} 
                                        alt={skill.name} 
                                        className={`brand-skill-img ${skill.extraClass || ''}`}
                                      />
                                    </div>
                                  )}
                                  <span className="brand-skill-label font-sans">{skill.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ========================================================= */}
                        {/* 4. PROJECTS HUB (APP STORE / REPO SHOWCASE)               */}
                        {/* ========================================================= */}
                        {activeWindow === 'projects' && (
                          <div className="projects-hub-view font-sans">
                            <div className="phub-grid">
                              {projects.map((p, pIdx) => (
                                <div key={pIdx} className="phub-card">
                                  <div className="phub-card-top">
                                    <div className="phub-logo-badge">
                                      <img src={p.logo} alt={p.title} />
                                    </div>
                                    <div className="phub-top-meta">
                                      <div className="phub-title-row">
                                        <h4 className="phub-title font-bebas">{p.title}</h4>
                                        <span className="phub-status font-mono">{p.status}</span>
                                      </div>
                                      <p className="phub-type font-mono">{p.type}</p>
                                    </div>
                                  </div>
                                  
                                  <p className="phub-summary font-sans">{p.summary}</p>
                                  
                                  <div className="phub-tech-row font-mono">
                                    <span className="tech-label">STACK:</span>
                                    <span className="tech-tags">{p.tech}</span>
                                  </div>

                                  <div className="phub-footer-actions">
                                    <a 
                                      href={p.link} 
                                      target="_blank" 
                                      rel="noreferrer" 
                                      className="phub-action-btn font-mono"
                                    >
                                      VISIT PROJECT URL →
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* ========================================================= */}
                        {/* 5. PHOTOS LIBRARY (STRICTLY PERSONAL PHOTO GALLERY)       */}
                        {activeWindow === 'gallery' && (
                          <div className="photos-gallery-view font-sans">
                            <div className="photos-header-bar font-mono">
                              <span>PERSONAL ARCHIVE & MEMORIES • POKHARA, NEPAL</span>
                              <span className="photos-count-chip">{PERSONAL_PHOTOS.length} PHOTOS</span>
                            </div>

                            <div className="personal-photos-grid">
                              {PERSONAL_PHOTOS.map((ph) => (
                                <div key={ph.id} className="personal-photo-card">
                                  <div className="personal-photo-frame">
                                    <img src={ph.src} alt="Pawan Rimal Photo" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* macOS Sequoia Style Dock */}
                <div className="macos-floating-dock font-sans">
                  <div 
                    className={`dock-icon-item ${activeWindow === 'search' ? 'dock-running' : ''}`} 
                    title="Google Search" 
                    onClick={(e) => openAppWindow('search', e)}
                  >
                    <GoogleAppIcon size={34} />
                  </div>
                  <div 
                    className={`dock-icon-item ${activeWindow === 'about' ? 'dock-running' : ''}`} 
                    title="About Me" 
                    onClick={(e) => openAppWindow('about', e)}
                  >
                    <AboutMeDocIcon size={34} />
                  </div>
                  <div 
                    className={`dock-icon-item ${activeWindow === 'skills' ? 'dock-running' : ''}`} 
                    title="Skills Matrix" 
                    onClick={(e) => openAppWindow('skills', e)}
                  >
                    <SkillsMatrixIcon size={34} />
                  </div>
                  <div 
                    className={`dock-icon-item ${activeWindow === 'projects' ? 'dock-running' : ''}`} 
                    title="Projects Hub" 
                    onClick={(e) => openAppWindow('projects', e)}
                  >
                    <ProjectsHubIcon size={34} />
                  </div>
                  <div 
                    className={`dock-icon-item ${activeWindow === 'gallery' ? 'dock-running' : ''}`} 
                    title="Photos Gallery" 
                    onClick={(e) => openAppWindow('gallery', e)}
                  >
                    <PhotosLibIcon size={34} />
                  </div>
                  <div className="dock-separator"></div>
                  <div 
                    className="dock-icon-item" 
                    title="Trash (0 items)" 
                    onClick={(e) => { e.stopPropagation(); SoundEngine.playClick(); }}
                  >
                    <TrashCanIcon size={34} />
                  </div>
                  <div 
                    className="dock-icon-item dock-shutdown-icon" 
                    title="Shut Down Workstation" 
                    onClick={handleShutdown}
                  >
                    <PowerDockIcon size={26} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Studio Display Space Gray Chin with Metallic Insignia */}
        <div className="monitor-chin">
          <span className="monitor-logo-symbol font-bebas">PR</span>
        </div>
      </div>

      {/* Realistic Heavy Brushed Aluminum Stand & Base */}
      <div className="monitor-stand">
        <div className="stand-neck">
          <div className="cable-hole"></div>
        </div>
        <div className="stand-base">
          <div className="stand-base-bevel"></div>
        </div>
      </div>

      {/* Ground Desk Occlusion Shadow */}
      <div className="monitor-desk-shadow"></div>
    </div>
  );
}
