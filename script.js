// JavaScript to add interactivity

// Toggle navigation menu on smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        navLinks.classList.remove('show'); // Close menu after clicking a link
    });
});

// Popup feature information on hover or click
const featureItems = document.querySelectorAll('.feature-item');
const popup = document.getElementById('popup');

featureItems.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        showPopup(event, item.getAttribute('data-info'));
    });

    item.addEventListener('mouseleave', hidePopup);

    item.addEventListener('click', (event) => {
        showPopup(event, item.getAttribute('data-info'), true);
    });
});

function showPopup(event, info, sticky = false) {
    popup.textContent = info;
    popup.style.display = 'block';

    const { clientX: x, clientY: y } = event;

    popup.style.left = `${x + 15}px`;
    popup.style.top = `${y + 15}px`;

    if (!sticky) {
        setTimeout(hidePopup, 3000); // Hide after 3 seconds for non-sticky popups
    }
}

function hidePopup() {
    popup.style.display = 'none';
}
