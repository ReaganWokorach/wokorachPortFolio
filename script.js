// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Sticky Nav
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Add dynamic reveal CSS
const style = document.createElement('style');
style.innerHTML = `
    .reveal { opacity: 0; transform: translateY(30px); transition: 0.6s ease-out; }
    .active { opacity: 1; transform: translateY(0); }
    .sticky { padding: 15px 0 !important; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
`;
document.head.appendChild(style);
