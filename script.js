/**
 * Pawan Rimal - CV Interactive Controller
 * Features: Photo upload with persistence, Theme Switching, Live Content Editing, and 1-Page Print Trigger
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const themeSelect = document.getElementById('themeSelect');
  const photoUpload = document.getElementById('photoUpload');
  const profilePhoto = document.getElementById('profilePhoto');
  const editToggleBtn = document.getElementById('editToggleBtn');
  const editBtnText = document.getElementById('editBtnText');
  const printBtn = document.getElementById('printBtn');
  const cvPage = document.querySelector('.cv-page');

  // 1. Restore Saved Preferences from LocalStorage
  const savedTheme = localStorage.getItem('pawan_cv_theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    if (themeSelect) themeSelect.value = savedTheme;
  }

  const savedPhoto = localStorage.getItem('pawan_cv_photo');
  if (savedPhoto && profilePhoto) {
    profilePhoto.src = savedPhoto;
  }

  // 2. Theme Switcher
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const newTheme = e.target.value;
      document.body.className = newTheme;
      localStorage.setItem('pawan_cv_theme', newTheme);
    });
  }

  // 3. Photo Upload Handler
  if (photoUpload && profilePhoto) {
    photoUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (JPG, PNG, WEBP).');
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const imgUrl = event.target.result;
          profilePhoto.src = imgUrl;
          try {
            localStorage.setItem('pawan_cv_photo', imgUrl);
          } catch (err) {
            console.warn('Image too large for localStorage, displayed for session.');
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 4. Live Inline Edit Mode Toggle
  let isEditing = false;
  const editableSelectors = [
    '.candidate-name',
    '.candidate-title',
    '.objective-text',
    '.edu-degree',
    '.edu-institution',
    '.edu-meta',
    '.project-name',
    '.project-tagline',
    '.project-bullet-list li',
    '.contact-text .value',
    '.approach-content h4',
    '.approach-content p',
    '.tag',
    '.tech-pills span'
  ];

  if (editToggleBtn) {
    editToggleBtn.addEventListener('click', () => {
      isEditing = !isEditing;

      const elements = document.querySelectorAll(editableSelectors.join(', '));
      elements.forEach(el => {
        el.contentEditable = isEditing ? 'true' : 'false';
      });

      if (isEditing) {
        editBtnText.textContent = 'Save / Lock Text';
        editToggleBtn.classList.remove('btn-secondary');
        editToggleBtn.classList.add('btn-primary');
      } else {
        editBtnText.textContent = 'Enable Live Edit';
        editToggleBtn.classList.remove('btn-primary');
        editToggleBtn.classList.add('btn-secondary');
      }
    });
  }

  // 5. Print Trigger
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      // Disable edit mode before printing if active
      if (isEditing && editToggleBtn) {
        editToggleBtn.click();
      }
      window.print();
    });
  }
});
