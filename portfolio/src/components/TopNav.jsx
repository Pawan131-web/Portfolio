import React from 'react';
import './TopNav.css';
import { SoundEngine } from './SoundEngine';

export default function TopNav({ onOpenOptions, onOpenCv, isMuted, setIsMuted }) {
  const scrollToTop = () => {
    SoundEngine.playClick();
    const el = document.getElementById('hero-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = SoundEngine.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left Brand Logo */}
        <div 
          className="brand-logo"
          onClick={scrollToTop}
          onMouseEnter={SoundEngine.playHover}
          title="Pawan Rimal - Back to Top"
        >
          <div className="logo-symbol">
            <img 
              src="./mylogo.png" 
              alt="Pawan Logo" 
              className="logo-custom-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="logo-fallback-text">
              <span className="logo-p font-bebas">P</span>
              <span className="logo-r font-bebas">R</span>
            </div>
          </div>
        </div>

        {/* Right Actions: CV Button, SFX Toggle & OPTIONS Button */}
        <div className="header-right-actions font-mono">
          <button 
            className="header-cv-btn"
            onClick={() => {
              SoundEngine.playClick();
              if (onOpenCv) onOpenCv();
            }}
            onMouseEnter={SoundEngine.playHover}
            title="View & Download Official CV"
          >
            <span className="cv-icon-glyph">📄</span>
            <span>CV / RESUME</span>
          </button>

          <button 
            className="sfx-toggle-btn"
            onClick={toggleSound}
            onMouseEnter={SoundEngine.playHover}
            title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          >
            <span className={`sfx-indicator ${!isMuted ? 'active' : ''}`}></span>
            <span className="sfx-text">{!isMuted ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          <button 
            className="header-options-btn"
            onClick={() => {
              SoundEngine.playClick();
              onOpenOptions();
            }}
            onMouseEnter={SoundEngine.playHover}
            title="Options & Settings"
          >
            OPTIONS
          </button>
        </div>
      </div>
    </header>
  );
}
