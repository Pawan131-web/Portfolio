import React, { useState } from 'react';
import './OptionsModal.css';
import { SoundEngine } from './SoundEngine';

export default function OptionsModal({ isOpen, onClose, activeTheme, setTheme, isMuted, setIsMuted }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    SoundEngine.playClick();
    navigator.clipboard.writeText('rimalpawan4@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleThemeSelect = (themeName) => {
    SoundEngine.playClick();
    setTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName === 'default' ? '' : themeName);
  };

  const handleSoundToggle = () => {
    const nextState = SoundEngine.toggleMute();
    setIsMuted(nextState);
  };

  const scrollToSection = (id) => {
    SoundEngine.playClick();
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="options-backdrop" onClick={onClose}>
      <div className="options-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="options-header">
          <div className="options-title-wrap">
            <span className="options-chip font-mono">SYSTEM // CONFIG</span>
            <h2 className="options-title font-bebas">OPTIONS & CONTROLS</h2>
          </div>
          <button 
            className="options-close-btn" 
            onClick={() => { SoundEngine.playClick(); onClose(); }}
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="options-body">
          {/* Quick Navigation */}
          <div className="options-section">
            <label className="options-label font-mono">QUICK JUMP</label>
            <div className="options-nav-grid">
              <button 
                className="opt-nav-btn font-mono" 
                onMouseEnter={SoundEngine.playHover}
                onClick={() => scrollToSection('hero-section')}
              >
                01. TITLE MENU
              </button>
              <button 
                className="opt-nav-btn font-mono" 
                onMouseEnter={SoundEngine.playHover}
                onClick={() => scrollToSection('profil-section')}
              >
                02. PROFIL & SKILLS
              </button>
              <button 
                className="opt-nav-btn font-mono" 
                onMouseEnter={SoundEngine.playHover}
                onClick={() => scrollToSection('projects-section')}
              >
                03. RECAP PROJECTS
              </button>
              <button 
                className="opt-nav-btn font-mono" 
                onMouseEnter={SoundEngine.playHover}
                onClick={() => scrollToSection('contact-section')}
              >
                04. CONTACT & THANK YOU
              </button>
            </div>
          </div>

          {/* Sound Settings */}
          <div className="options-section">
            <label className="options-label font-mono">AUDIO ENGINE</label>
            <div className="options-toggle-row">
              <span className="opt-desc">Synthesized UI Interactive SFX</span>
              <button 
                className={`opt-toggle-btn font-mono ${!isMuted ? 'active' : ''}`}
                onClick={handleSoundToggle}
              >
                {!isMuted ? 'SFX: ENABLED' : 'SFX: MUTED'}
              </button>
            </div>
          </div>

          {/* Theme Accents */}
          <div className="options-section">
            <label className="options-label font-mono">ACCENT THEME</label>
            <div className="options-theme-grid">
              <button 
                className={`theme-chip font-mono ${activeTheme === 'default' ? 'active' : ''}`}
                onClick={() => handleThemeSelect('default')}
              >
                <span className="theme-color-dot dot-monochrome"></span> MONOCHROME
              </button>
              <button 
                className={`theme-chip font-mono ${activeTheme === 'emerald' ? 'active' : ''}`}
                onClick={() => handleThemeSelect('emerald')}
              >
                <span className="theme-color-dot dot-emerald"></span> EMERALD MATRIX
              </button>
              <button 
                className={`theme-chip font-mono ${activeTheme === 'crimson' ? 'active' : ''}`}
                onClick={() => handleThemeSelect('crimson')}
              >
                <span className="theme-color-dot dot-crimson"></span> CRIMSON RED
              </button>
              <button 
                className={`theme-chip font-mono ${activeTheme === 'gold' ? 'active' : ''}`}
                onClick={() => handleThemeSelect('gold')}
              >
                <span className="theme-color-dot dot-gold"></span> LUXURY GOLD
              </button>
            </div>
          </div>

          {/* Direct Actions */}
          <div className="options-section">
            <label className="options-label font-mono">DIRECT ACTIONS</label>
            <div className="options-actions-row">
              <button 
                className="btn-game-primary font-mono"
                onClick={handleCopyEmail}
              >
                {copied ? '✓ EMAIL COPIED' : '📋 COPY EMAIL'}
              </button>
              <a 
                href="https://github.com/Pawan131-web" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-game-secondary font-mono"
                onClick={() => SoundEngine.playClick()}
              >
                GITHUB PROFILE ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="options-footer font-mono">
          <span>PAWAN RIMAL • POKHARA, NEPAL</span>
          <span>PORTFOLIO 2026</span>
        </div>
      </div>
    </div>
  );
}
