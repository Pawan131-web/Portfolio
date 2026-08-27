import React from 'react';
import './ProjectModal.css';
import { SoundEngine } from './SoundEngine';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="project-modal-header">
          <div>
            <span className="project-modal-num font-mono">PROJECT #{project.num} // {project.type}</span>
            <h2 className="project-modal-title font-bebas">{project.title}</h2>
          </div>
          <button 
            className="project-modal-close" 
            onClick={() => { SoundEngine.playClick(); onClose(); }}
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Hero Image */}
        {project.image && (
          <div className="project-modal-media">
            <img src={project.image} alt={project.title} className="project-modal-img" />
            <div className="project-modal-badge font-mono">{project.category}</div>
          </div>
        )}

        {/* Content */}
        <div className="project-modal-body">
          <div className="project-modal-desc-wrap">
            <h4 className="project-subhead font-mono">OVERVIEW & ARCHITECTURE</h4>
            <p className="project-modal-desc">{project.desc}</p>
          </div>

          <div className="project-modal-tech-wrap">
            <h4 className="project-subhead font-mono">CORE TECHNOLOGIES</h4>
            <div className="project-modal-tech-pills">
              {project.tech.map((t, idx) => (
                <span key={idx} className="pmodal-tech-pill font-mono">{t}</span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="project-modal-actions">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-game-primary font-mono"
                onClick={() => SoundEngine.playClick()}
              >
                LIVE PREVIEW ↗
              </a>
            )}
            <a 
              href={project.githubUrl || "https://github.com/Pawan131-web"} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-game-secondary font-mono"
              onClick={() => SoundEngine.playClick()}
            >
              VIEW REPOSITORY ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
