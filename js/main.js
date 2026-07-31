(() => {
  document.documentElement.classList.add('js');

  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuButton.innerHTML = `<i class="ph ${open ? 'ph-x' : 'ph-list'}" aria-hidden="true"></i>`;
    mobileMenu.hidden = !open;
  };

  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 991) setMenu(false); });

  const revealItems = document.querySelectorAll('[data-reveal]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

  const form = document.getElementById('contactForm');
  const whatsappButton = document.getElementById('sendWhatsappBtn');
  const status = document.getElementById('formStatus');
  const getValue = (id) => document.getElementById(id)?.value?.trim() || '';
  const payload = () => ({ name: getValue('contactName'), email: getValue('contactEmail'), service: getValue('contactService'), message: getValue('contactMessage') });
  const valid = (data) => data.name && data.email && data.service && data.message && form?.checkValidity();
  const message = (data) => [`Hola Brian, te contacto desde BP-Dev.`, '', `Nombre: ${data.name}`, `Email: ${data.email}`, `Servicio: ${data.service}`, '', 'Proyecto:', data.message].join('\n');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = payload();
    if (!valid(data)) { form.reportValidity(); return; }
    if (status) status.textContent = 'Abriendo tu aplicación de correo…';
    window.location.href = `mailto:brian.pugliese23@gmail.com?subject=${encodeURIComponent(`Consulta web de ${data.name}`)}&body=${encodeURIComponent(message(data))}`;
  });

  whatsappButton?.addEventListener('click', () => {
    const data = payload();
    if (!valid(data)) { form?.reportValidity(); return; }
    window.open(`https://wa.me/541158655848?text=${encodeURIComponent(message(data))}`, '_blank', 'noopener');
  });
})();
