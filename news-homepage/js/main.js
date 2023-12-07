'use strict';

// mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      overlay.classList.add('hidden');
    }
  });
});
