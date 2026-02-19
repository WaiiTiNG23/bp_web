(() => {
  const form = document.getElementById('contactForm');
  const whatsappBtn = document.getElementById('sendWhatsappBtn');
  if (!form) return;

  const toEmail = 'brian.pugliese23@gmail.com';
  const whatsappNumber = '541158655848';

  const getPayload = () => {
    const name = document.getElementById('contactName')?.value?.trim() || '';
    const email = document.getElementById('contactEmail')?.value?.trim() || '';
    const message = document.getElementById('contactMessage')?.value?.trim() || '';
    return { name, email, message };
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { name, email, message } = getPayload();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Nueva consulta web de ${name}`);
    const body = encodeURIComponent(
      `Hola Brian, te contacto desde tu web.%0D%0A%0D%0A` +
      `Nombre: ${name}%0D%0A` +
      `Email: ${email}%0D%0A%0D%0A` +
      `Mensaje:%0D%0A${message}`
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  });

  whatsappBtn?.addEventListener('click', () => {
    const { name, email, message } = getPayload();
    if (!name || !email || !message) {
      alert('Completá nombre, email y mensaje para enviar por WhatsApp.');
      return;
    }

    const text = encodeURIComponent(
      `Hola Brian, te escribo desde tu web.\n\n` +
      `Nombre: ${name}\n` +
      `Email: ${email}\n\n` +
      `Mensaje:\n${message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener');
  });
})();
