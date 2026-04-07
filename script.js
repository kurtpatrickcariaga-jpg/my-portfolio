
// Fade-in animation using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Apply observer to all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
