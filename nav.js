// This file handles the hamburger menu functionality across all pages
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Get navigation elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    
    // Check if elements exist
    if (!hamburger || !navLinks) {
      console.warn('Navigation elements not found');
      return;
    }
    
    // Toggle menu function
    function toggleMenu() {
      const isActive = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isActive ? 'hidden' : '';
    }
    
    // Close menu function
    function closeMenu() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    
    // Hamburger click event
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
    // Close menu when clicking on navigation links
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
    
   // Close menu when clicking outside navigation
document.addEventListener('click', function(e) {
  if (nav && !nav.contains(e.target) && navLinks.classList.contains('active')) {
    closeMenu();
  }
});

    
    // Prevent clicks inside nav from closing menu
    if (nav) {
      nav.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
    // Handle window resize - close menu on desktop view
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
          closeMenu();
        }
      }, 250);
    });
    
    // Handle escape key to close menu
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
    
  });

  
})();