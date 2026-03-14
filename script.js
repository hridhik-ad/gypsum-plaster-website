// PARALLAX
function handleParallax() {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.2;
        el.style.transform = `translateY(${scrollY * speed}px)`;
    });
}

// SPRING SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.dataset.delay || 0);
            setTimeout(() => {
                el.classList.add('visible');
            }, delay);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-card, .step, .compare-card, .stat-block, .cta-title, .story-highlight-item, .partner-card, .worker-card').forEach(el => {
    observer.observe(el);
});

// NAV SCROLL
window.addEventListener('scroll', () => {
    handleParallax();
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
}, { passive: true });

// SPRING BUTTON PHYSICS
function addSpring(el) {
    let vx = 0, vy = 0, x = 0, y = 0;
    let animating = false;

    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        x = dx * 8;
        y = dy * 4;
        el.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        el.style.transform = 'translate(0px, 0px) scale(1)';
        setTimeout(() => { el.style.transition = ''; }, 600);
    });
}

document.querySelectorAll('.btn-primary, .cta-btn, .nav-cta').forEach(addSpring);

// CTA click
document.getElementById('ctaBtn').addEventListener('click', () => {
    const btn = document.getElementById('ctaBtn');
    btn.textContent = '✓ We\'ll be in touch!';
    btn.style.background = '#4CAF50';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
        btn.textContent = 'Request Free Estimate ↗';
        btn.style.background = '';
        btn.style.pointerEvents = '';
    }, 3000);
});

// Magnetic hero cards
document.querySelectorAll('.hero-stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * 12;
        const ry = -((e.clientX - r.left) / r.width - 0.5) * 12;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = '';
        setTimeout(() => card.style.transition = '', 500);
    });
});
