// 1. Smooth Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'all 0.8s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => scrollObserver.observe(el));

// 2. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Mobile Menu Toggle
const burger = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Add logic here to display a mobile menu overlay if desired
    console.log('Mobile menu toggled');
});

// 4. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// 5. Hero Text Animation Delay
window.onload = () => {
    const heroItems = document.querySelectorAll('.hero .reveal');
    heroItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.target.style.transform = 'translateY(0)';
        }, 200 * index);
    });
};
