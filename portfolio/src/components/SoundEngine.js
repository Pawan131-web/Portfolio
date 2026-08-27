// Web Audio API zero-dependency SFX Engine
let audioCtx = null;
let isMuted = false;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const SoundEngine = {
  isMuted: () => isMuted,
  
  toggleMute: () => {
    isMuted = !isMuted;
    return isMuted;
  },

  setMuted: (val) => {
    isMuted = val;
  },

  playHover: () => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio errors gracefully
    }
  },

  playClick: () => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Ignore audio errors gracefully
    }
  },

  playStart: () => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      // Chord chime
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);
        
        gain.gain.setValueAtTime(0.03, ctx.currentTime + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.35);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + i * 0.05);
        osc.stop(ctx.currentTime + i * 0.05 + 0.35);
      });
    } catch {
      // Ignore audio errors
    }
  }
};
