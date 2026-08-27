import React, { useState } from 'react';
import './ContactSection.css';
import { SoundEngine } from '../components/SoundEngine';
import MiniMonitorDesktop from '../components/MiniMonitorDesktop';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    SoundEngine.playClick();
    navigator.clipboard.writeText('rimalpawan4@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: 'pawan_rim',
      url: 'https://www.instagram.com/pawan_rim/',
      curveClass: 'curve-pos-1',
      brandClass: 'brand-instagram',
      delay: '0s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'pawan.rimal.779',
      url: 'https://www.facebook.com/pawan.rimal.779',
      curveClass: 'curve-pos-2',
      brandClass: 'brand-facebook',
      delay: '0.12s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'Pawan131-web',
      url: 'https://github.com/Pawan131-web',
      curveClass: 'curve-pos-3',
      brandClass: 'brand-github',
      delay: '0.24s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+977 9806640515',
      url: 'https://wa.me/9779806640515',
      curveClass: 'curve-pos-4',
      brandClass: 'brand-whatsapp',
      delay: '0.36s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.031 0C5.394 0 .016 5.378.016 12.016c0 2.12.553 4.188 1.603 6.01L0 24l6.168-1.585a11.97 11.97 0 0 0 5.863 1.52h.005c6.632 0 12.01-5.378 12.01-12.016 0-3.21-1.25-6.225-3.52-8.495C18.257 1.255 15.24 0 12.031 0zm-.005 21.99a9.98 9.98 0 0 1-5.09-1.397l-.365-.217-3.784.972 1.01-3.64-.238-.38a9.988 9.988 0 0 1-1.54-5.312c0-5.518 4.49-10.008 10.013-10.008 2.673 0 5.186 1.04 7.075 2.93a9.94 9.94 0 0 1 2.93 7.078c0 5.518-4.49 10.008-10.01 10.008zm5.488-7.487c-.3-.15-1.77-.874-2.044-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.797-1.496-1.782-1.67-2.082-.176-.3-.02-.462.13-.612.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.898 1.225 3.098c.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.634.72.228 1.375.196 1.892.119.577-.086 1.77-.724 2.02-1.423.25-.7.25-1.3.175-1.424-.075-.124-.275-.2-.575-.35z"/>
        </svg>
      )
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'rimalpawan4@gmail.com',
      url: '#',
      isEmail: true,
      curveClass: 'curve-pos-5',
      brandClass: 'brand-email',
      delay: '0.48s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: 'phone',
      name: 'Phone',
      handle: '+977 9806640515',
      url: 'tel:+9779806640515',
      curveClass: 'curve-pos-6',
      brandClass: 'brand-phone',
      delay: '0.6s',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="contact-section" className="thankyou-screen-viewport">
      {/* Main Screen Content: Left (Contact & Radial Socials) + Right (Repositioned THANK YOU + Enlarged Vivid Mini OS Monitor) */}
      <div className="thankyou-main-stage">
        {/* Left Column: CONTACT ME & Arc Curving Socials */}
        <div className="thankyou-left-col">
          {/* Header */}
          <div className="contact-heading-wrap">
            <h2 className="thankyou-contact-heading font-bebas">CONTACT ME</h2>
          </div>

          {/* Contact Radial/Curved Stage */}
          <div className="contact-curved-hub">
            {/* Circular Avatar + Name */}
            <div className="contact-avatar-block">
              <div className="contact-avatar-circle">
                <img 
                  src="/images/photo.jpg" 
                  alt="Pawan Rimal" 
                  className="contact-avatar-img"
                  onError={(e) => {
                    e.target.src = "/images/pawan_cutout.png";
                  }}
                />
              </div>
              <div className="contact-avatar-meta">
                <span className="contact-avatar-name font-bebas">PAWAN RIMAL</span>
                <span className="contact-avatar-sub font-mono">22</span>
              </div>
            </div>

            {/* Right Curved Social Links - 6 Big Image Icons with Brand Color Fill on Hover */}
            <div className="contact-social-arc">
              {socialLinks.map((item) => {
                if (item.isEmail) {
                  return (
                    <div 
                      key={item.id}
                      className={`social-arc-item ${item.curveClass} ${item.brandClass} cursor-pointer`}
                      onClick={handleCopyEmail}
                      onMouseEnter={SoundEngine.playHover}
                      title={copiedEmail ? 'Copied to Clipboard!' : 'Click to Copy: rimalpawan4@gmail.com'}
                      style={{ '--anim-delay': item.delay }}
                    >
                      <div className="social-arc-icon-circle">
                        {item.icon}
                      </div>
                      {/* Floating tooltip feedback */}
                      <span className="social-mini-tooltip font-mono">
                        {copiedEmail ? '✓ COPIED!' : 'EMAIL'}
                      </span>
                    </div>
                  );
                }

                return (
                  <a 
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`social-arc-item ${item.curveClass} ${item.brandClass}`}
                    onMouseEnter={SoundEngine.playHover}
                    title={`${item.name}: ${item.handle}`}
                    style={{ '--anim-delay': item.delay }}
                  >
                    <div className="social-arc-icon-circle">
                      {item.icon}
                    </div>
                    {/* Floating Tooltip */}
                    <span className="social-mini-tooltip font-mono">
                      {item.name.toUpperCase()}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Repositioned Elevated THANK YOU 2026 + Bigger Vivid GUI Monitor */}
        <div className="thankyou-right-col">
          {/* Stacked Big Typography Elevated in Top-Middle Area */}
          <div className="thankyou-title-stack">
            <h1 className="thankyou-title-main font-bebas">THANK YOU</h1>
            <h2 className="thankyou-title-year font-bebas">2026</h2>
          </div>

          {/* Enlarged Interactive GUI Mini Monitor Mockup */}
          <div className="thankyou-gui-monitor-wrap">
            <MiniMonitorDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}
