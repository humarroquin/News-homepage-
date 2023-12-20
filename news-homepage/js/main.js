'use strict';

// mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenu = document.querySelector('.primary-navigation');
  const overlay = document.querySelector('.overlay');

  const openMobileMenu = function () {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
  };

  hamburgerBtn.addEventListener('click', openMobileMenu);

  overlay.addEventListener('click', openMobileMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      openMobileMenu();
    }
  });
});
