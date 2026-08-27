import React from 'react';
import './TopNav.css';
import { SoundEngine } from './SoundEngine';

export default function TopNav({ onOpenOptions, isMuted, setIsMuted }) {
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
        {/* Left Monogram Logo (PR) */}
        <div 
          className="brand-logo"
          onClick={scrollToTop}
          onMouseEnter={SoundEngine.playHover}
          title="Pawan Rimal (PR) - Top"
        >
          <div className="logo-symbol">
            <span className="logo-p font-bebas">P</span>
            <span className="logo-r font-bebas">R</span>
          </div>
        </div>

        {/* Right Actions: SFX Toggle & OPTIONS Button */}
        <div className="header-right-actions font-mono">
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
