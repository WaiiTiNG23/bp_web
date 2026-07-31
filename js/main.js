(() => {
  document.documentElement.classList.add('js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('[data-reveal]');

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px' });

    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
