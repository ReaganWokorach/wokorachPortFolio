// ===============================
// Scroll Reveal (Intersection Observer)
// ===============================
const revealOption = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOption);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ===============================
// Sticky Navbar on Scroll
// ===============================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');

    if (window.scrollY > 100) {
        nav.style.padding = '15px 0';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        nav.style.padding = '25px 0';
        nav.style.boxShadow = 'none';
    }
});


// ===============================
// Smooth Scroll for Navigation Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Mobile Menu Toggle (UPDATED & STABLE)
// ===============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});