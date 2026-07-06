/**
 * DecodeLabs - Project 1 Front-End Logic
 * No Frameworks Mandate Compliance
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle Accessibility Attributes
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle Display State Class
            navLinks.classList.toggle('active');
        });
    }
});

