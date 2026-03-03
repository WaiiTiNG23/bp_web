(() => {
  const form = document.getElementById('contactForm');
  const whatsappBtn = document.getElementById('sendWhatsappBtn');
  if (!form) return;

  const toEmail = 'brian.pugliese23@gmail.com';
  const whatsappNumber = '541158655848';

  const getValue = (id) => document.getElementById(id)?.value?.trim() || '';

  const getPayload = () => ({
    name: getValue('contactName'),
    email: getValue('contactEmail'),
    business: getValue('contactBusiness'),
    service: getValue('contactService'),
    budget: getValue('contactBudget'),
    timeline: getValue('contactTimeline'),
    message: getValue('contactMessage')
  });

  const isValid = ({ name, email, service, budget, timeline, message }) => {
    return !!(name && email && service && budget && timeline && message);
  };

  const buildText = (data, lineBreak = '\n') => {
    return [
      'Hola Brian, te contacto desde tu web para pedir presupuesto.',
      '',
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Marca/negocio: ${data.business || 'No especificado'}`,
      `Servicio: ${data.service}`,
      `Presupuesto estimado: ${data.budget}`,
      `Plazo ideal: ${data.timeline}`,
      '',
      'Detalle del proyecto:',
      data.message
    ].join(lineBreak);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getPayload();
    if (!isValid(data)) return;

    const subject = encodeURIComponent(`Nueva solicitud de presupuesto - ${data.name}`);
    const body = encodeURIComponent(buildText(data, '\r\n'));
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  });

  whatsappBtn?.addEventListener('click', () => {
    const data = getPayload();
    if (!isValid(data)) {
      alert('Completá los campos obligatorios para enviar por WhatsApp.');
      return;
    }

    const text = encodeURIComponent(buildText(data));
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener');
  });
})();
