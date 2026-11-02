# Rosamar Es Blau · Web cinematográfica

Web del **Hotel Rosamar Es Blau Adults Only +21** (Lloret de Mar), diseño "cinematográfico" por actos
inspirado en la dirección creativa de referencia. Desarrollo: **DURDUC**.

- Web publicada: https://durducco-source.github.io/rosamar-esblau-cinematic/
- Código: https://github.com/durducco-source/rosamar-esblau-cinematic

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4.
Sin dependencias adicionales: animaciones con CSS y hooks propios.

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # compila la web estática en la carpeta out/
npm run lint       # revisa el código
npm run typecheck  # comprueba los tipos de TypeScript
npm run deploy     # compila y publica en GitHub Pages (rama gh-pages)
```

## Estructura

```
src/
├── app/            → layout (SEO, tipografías), página y estilos globales (tema en :root)
├── components/     → componentes reutilizables
│   ├── CinemaHero  → portada por "actos" ligada al scroll, con contador tipo vídeo
│   ├── Gallery     → galería horizontal en raíl + visor
│   ├── Reels       → vídeos verticales con reproductor
│   ├── Menu        → carta / servicios con pestañas accesibles
│   ├── Sections    → presentación, capítulos, opiniones, preguntas, contacto, cierre, pie
│   └── Nav, Modal, Parallax, Reveal, MediaView, Icon
├── content/
│   ├── site.ts     → TODO el contenido (textos, imágenes, enlaces) ← editar aquí
│   └── types.ts    → modelo de contenido
└── lib/            → utilidades y hooks (progreso de scroll, aparición, etc.)
public/media/       → fotos y vídeos
scripts/deploy.mjs  → publicación en GitHub Pages
```

## Personalizar

- **Textos e imágenes:** `src/content/site.ts` (en los títulos, `*texto*` sale en cursiva destacada).
- **Colores:** variables `--bg`, `--bg-2`, `--fg`, `--accent` en `src/app/globals.css`.
- **Tipografías:** `src/app/layout.tsx`.

## Funcionalidades

- Portada cinematográfica: 5 actos que cambian con el scroll (zoom lento, fundidos, franjas de cine,
  grano de película, viñeta y contador `00:01 / 00:05`).
- Menú fijo que se vuelve sólido al bajar, menú móvil a pantalla completa.
- Capítulos con parallax, carta de habitaciones con pestañas (navegables con teclado).
- Galería horizontal controlada por el scroll vertical, con visor (flechas del teclado y Escape).
- Opiniones, preguntas frecuentes desplegables, contacto con mapa y botón flotante de reserva.
- SEO: metadatos, Open Graph, datos estructurados `Hotel` (schema.org).
- Accesible: enlace "saltar al contenido", foco visible, `prefers-reduced-motion` respetado.

## Fuentes del contenido

Textos, servicios, opiniones (9,3 · 1.342 encuestas) y fotos: web oficial rosamarhotels.com.
No se muestran precios porque dependen de las fechas: "Reservar" lleva al motor de reservas oficial.
