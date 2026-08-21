/**
 * PAWAN RIMAL - EDITORIAL POSTER PORTFOLIO CONTROLLER
 * Features:
 * 1. Theme Toggle (Dark Mode & Editorial Warm Light Mode) with LocalStorage
 * 2. 1-Page A4 Printable CV Modal with Print Trigger
 * 3. Smooth Anchor Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. THEME TOGGLE (DARK / EDITORIAL LIGHT MODE)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  // Initialize theme from LocalStorage or default to 'dark'
  const savedTheme = localStorage.getItem('pawan_editorial_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('pawan_editorial_theme', newTheme);
    });
  }

  /* ==========================================================================
     2. PRINTABLE A4 CV MODAL CONTROLLER
     ========================================================================== */
  const cvModalBackdrop = document.getElementById('cvModalBackdrop');
  const openCvModalBtn = document.getElementById('openCvModalBtn');
  const closeCvModalBtn = document.getElementById('closeCvModalBtn');
  const modalPrintBtn = document.getElementById('modalPrintBtn');

  function openCvModal() {
    if (cvModalBackdrop) {
      cvModalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCvModal() {
    if (cvModalBackdrop) {
      cvModalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openCvModalBtn) openCvModalBtn.addEventListener('click', openCvModal);
  if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);
  
  if (cvModalBackdrop) {
    cvModalBackdrop.addEventListener('click', (e) => {
      if (e.target === cvModalBackdrop) closeCvModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModalBackdrop && cvModalBackdrop.classList.contains('active')) {
      closeCvModal();
    }
  });

  /* ==========================================================================
     3. AWWWARDS-STYLE CINEMATIC HEADLINE ENTRANCE OBSERVER
     ========================================================================== */
  const portfolioTitle = document.getElementById('portfolioTitle');
  if (portfolioTitle) {
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          portfolioTitle.classList.add('is-inview');
        }
      });
    }, { threshold: 0.15 });

    titleObserver.observe(portfolioTitle);

    // Initial page load trigger
    requestAnimationFrame(() => {
      setTimeout(() => {
        portfolioTitle.classList.add('is-inview');
      }, 80);
    });
  }

  /* ==========================================================================
     4. 5-SECOND INITIAL VISIBILITY TIMER FOR TOP HEADER
     ========================================================================== */
  const heroTopNav = document.getElementById('heroTopNav');
  if (heroTopNav) {
    setTimeout(() => {
      heroTopNav.classList.remove('initial-show');
    }, 5000);
  }

  /* ==========================================================================
     6. FRAMER-STYLE ON-APPEAR INNER ELEMENT ANIMATIONS
     ========================================================================== */
  const framerAppearItems = document.querySelectorAll('.framer-appear, .scroll-reveal');
  const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  framerAppearItems.forEach(item => {
    appearObserver.observe(item);
  });

});
