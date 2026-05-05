// Mobile Toggle
const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Dynamic Scroll styles
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 0';
        navbar.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Injecting the keyframe for "active" class
const revealStyle = document.createElement('style');
revealStyle.innerHTML = `
    .reveal { opacity: 0; transform: translateY(30px); transition: 0.8s ease-out; }
    .active { opacity: 1 !important; transform: translateY(0) !important; }
    @media (max-width: 768px) {
        .nav-links.active { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: white; padding: 20px; box-shadow: 0 10px 10px rgba(0,0,0,0.1); }
    }
`;
document.head.appendChild(revealStyle);
