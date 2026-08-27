import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { SoundEngine } from '../components/SoundEngine';

export default function HeroSection({ onOpenOptions }) {
  // Current active word: 'PORTFOLIO' -> 'PAWAN RIMAL'
  const [activeWord, setActiveWord] = useState('PORTFOLIO');
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    // Stage 1: Display initial showcase word "PORTFOLIO"
    // Stage 2: After exactly 2 seconds, reveal and assemble into "PAWAN RIMAL"
    const timer = setTimeout(() => {
      setActiveWord('PAWAN RIMAL');
      setAnimKey(prev => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    SoundEngine.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert current word into individual characters for assemble animation
  const chars = activeWord.split('');
  const midIndex = (chars.length - 1) / 2;

  return (
    <section id="hero-section" className="hero-viewport">
      {/* Subtle Monochrome Ambient Spotlight & Depth Grid */}
      <div className="hero-monochrome-glow"></div>
      <div className="hero-perspective-floor"></div>

      {/* Main Unframed Hero Experience */}
      <div className="hero-minimal-stage">
        
        {/* ========================================================= */}
        {/* LAYER 1 (BEHIND): Giant Converging Letter-by-Letter Text  */}
        {/* ========================================================= */}
        <div className="hero-massive-text-container" aria-label={activeWord}>
          <div key={animKey} className="hero-assemble-word font-bebas">
            {chars.map((char, index) => {
              if (char === ' ') {
                return <span key={index} className="assemble-char-space">&nbsp;</span>;
              }
              // Characters to the left of center come from the left (-X)
              // Characters to the right of center come from the right (+X)
              const offsetFromMid = index - midIndex;
              const isLeft = offsetFromMid < 0;
              const directionClass = isLeft ? 'from-left' : 'from-right';
              // Stagger delay from outer edges toward center (or sequential)
              const staggerDelay = Math.abs(offsetFromMid) * 0.06;

              return (
                <span
                  key={index}
                  className={`assemble-char ${directionClass}`}
                  style={{
                    animationDelay: `${staggerDelay}s`,
                    '--char-offset': `${isLeft ? -140 : 140}px`
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
          {/* Subtle back-glow aura matching text */}
          <div className="hero-text-ambient-halo"></div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 2 (CENTER-FRONT): Standalone Prominent Cutout Photo  */}
        {/* ========================================================= */}
        <div className="hero-standalone-portrait-wrap">
          <div className="hero-portrait-stage-inner">
            <img 
              src="/images/pawan_cutout.png" 
              alt="Pawan Rimal" 
              className="hero-standalone-cutout-img"
              onError={(e) => {
                e.target.src = "/images/pawan_transparent.png";
              }}
            />
            {/* Seamless Black Ground Blend */}
            <div className="portrait-black-ground-blend"></div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LAYER 3: Minimalist Socials & Scroll Indicator            */}
        {/* ========================================================= */}
        <div className="hero-minimal-footer">
          <div className="hero-mono-socials">
            <a 
              href="https://github.com/Pawan131-web" 
              target="_blank" 
              rel="noreferrer" 
              className="mono-social-link font-mono"
              onMouseEnter={SoundEngine.playHover}
              onClick={() => SoundEngine.playClick()}
            >
              GitHub
            </a>
            <span className="social-divider">•</span>
            <a 
              href="https://www.facebook.com/pawan.rimal.779" 
              target="_blank" 
              rel="noreferrer" 
              className="mono-social-link font-mono"
              onMouseEnter={SoundEngine.playHover}
              onClick={() => SoundEngine.playClick()}
            >
              Facebook
            </a>
            <span className="social-divider">•</span>
            <a 
              href="https://www.instagram.com/pawan_rim/" 
              target="_blank" 
              rel="noreferrer" 
              className="mono-social-link font-mono"
              onMouseEnter={SoundEngine.playHover}
              onClick={() => SoundEngine.playClick()}
            >
              Instagram
            </a>
          </div>

          <div 
            className="hero-mono-scroll-prompt font-mono"
            onClick={() => scrollTo('profil-section')}
            onMouseEnter={SoundEngine.playHover}
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow-glyph">↓</span>
          </div>
        </div>

      </div>
    </section>
  );
}
