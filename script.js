// Sticky Header Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth Intersection Observer for revealing elements
const revealOption = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, revealOption);

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    observer.observe(el);
});

// Update the 'active' class via CSS-in-JS style injection for simplicity
const style = document.createElement('style');
style.innerHTML = `.active { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});
