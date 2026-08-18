/**
 * Pawan Rimal - CV Interactive Controller
 * Features: Theme Switching, Preference Persistence, and 1-Page Print Trigger
 */

document.addEventListener('DOMContentLoaded', () => {
  const themeSelect = document.getElementById('themeSelect');
  const printBtn = document.getElementById('printBtn');

  // 1. Restore Saved Theme from LocalStorage
  const savedTheme = localStorage.getItem('pawan_cv_theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    if (themeSelect) themeSelect.value = savedTheme;
  }

  // 2. Theme Switcher
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const newTheme = e.target.value;
      document.body.className = newTheme;
      localStorage.setItem('pawan_cv_theme', newTheme);
    });
  }

  // 3. Print Trigger
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
