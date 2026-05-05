// 1. Fast Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // Fast trigger

revealElements.forEach(el => scrollObserver.observe(el));

// 2. Sticky Navbar & Progress
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 40) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// 3. Smooth Navigation
document.querySelectorAll('.nav-links a, .hero-actions a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 4. Form Submission Interaction
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        // Netlify handles the actual data
        console.log("Success! Form is being processed by Netlify.");
    });
}
