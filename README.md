# BP-Dev

Landing page profesional de Brian Pugliese para presentar servicios de diseño y desarrollo web full stack.

## Sitio

- GitHub Pages: https://waiiting23.github.io/bp_web/
- Vercel: https://bp-web-pi.vercel.app/

## Experiencia

La web reúne todo el recorrido comercial en una sola página:

- propuesta de valor;
- servicios;
- caso real de Plataforma B2B;
- perfil profesional;
- proceso de trabajo;
- formulario y canales de contacto.

No se utilizan testimonios, métricas ni proyectos ficticios.

## Stack

- HTML5 semántico
- SASS / CSS
- JavaScript sin dependencias
- Phosphor Icons
- Google Fonts: Manrope e IBM Plex Mono

## Desarrollo local

No requiere framework ni instalación permanente.

```bash
npx sass sass/main.scss css/style.css --style=expanded --source-map
```

Después, abrir `index.html` o servir la carpeta con cualquier servidor estático.

## Estructura

```text
.
├── index.html
├── assets/
│   └── img/
│       ├── favicon.ico
│       ├── logo.svg
│       └── plataforma-b2b.png
├── css/
│   ├── style.css
│   └── style.css.map
├── js/
│   └── main.js
├── sass/
│   ├── main.scss
│   └── partials/
│       └── _redesign.scss
├── DESIGN.md
├── PRODUCT.md
└── README.md
```

## Calidad

- responsive desde mobile hasta desktop;
- navegación por teclado y foco visible;
- contraste WCAG AA;
- soporte para `prefers-reduced-motion`;
- metadatos SEO y Open Graph;
- sin Bootstrap ni librerías JavaScript.

## Contacto

Brian Pugliese

- LinkedIn: https://www.linkedin.com/in/bpugliese23
- GitHub: https://github.com/WaiiTiNG23
- Email: brian.pugliese23@gmail.com
