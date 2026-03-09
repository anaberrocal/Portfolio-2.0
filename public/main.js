// Custom cursor
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');

let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

function animateCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.case-hd, .bfr-aftr, .metrics, .tri-grid, .stack-row, .about-layout, .contact-layout, .hero-bottom'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

revealTargets.forEach(el => io.observe(el));

// Hero heading stagger on load
const hlines = document.querySelectorAll('.hline');
hlines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(30px)';
  line.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s`;
  setTimeout(() => {
    line.style.opacity = '1';
    line.style.transform = 'none';
  }, 50);
});

// Hero top tags fade
document.querySelectorAll('.hero-tag, .hero-desc, .hero-stats, .hero-cta').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.6 + i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.6 + i * 0.1}s`;
  setTimeout(() => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }, 50);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a[href^="#"]');

const secObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--white)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => secObs.observe(s));

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  dot.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  dot.style.opacity = '1';
});
