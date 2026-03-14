// Custom cursor
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let cx = mx, cy = my;

// Start cursor centered so it doesn't flash at 0,0
cursor.style.left = cx + 'px';
cursor.style.top = cy + 'px';
dot.style.left = mx + 'px';
dot.style.top = my + 'px';

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

(function animateCursor() {
  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animateCursor);
})();

document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; dot.style.opacity = '0'; });
document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; dot.style.opacity = '1'; });

// Nav scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal — mark already-visible elements immediately
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

revealEls.forEach(el => {
  const rect = el.getBoundingClientRect();
  // If already in viewport on load, make visible immediately
  if (rect.top < window.innerHeight) {
    el.classList.add('visible');
  } else {
    io.observe(el);
  }
});

// Hero heading stagger
document.querySelectorAll('.hline').forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(28px)';
  line.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.14}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.14}s`;
  setTimeout(() => { line.style.opacity = '1'; line.style.transform = 'none'; }, 50);
});

// Hero bottom stagger
document.querySelectorAll('.hero-top .mono, .hero-desc, .hstat, .hero-cta').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.08}s`;
  setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, 50);
});

if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  dot.style.display = 'none';
  document.body.style.cursor = 'auto';
}