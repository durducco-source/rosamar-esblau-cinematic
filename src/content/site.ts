import type { SiteContent } from "./types";

// Contenido verificado en la web oficial rosamarhotels.com (textos, servicios y fotos).
const BOOK = "https://www.rosamarhotels.com/es/reservar-hoteles-lloret-de-mar-costa-brava";
const URL = "https://durducco-source.github.io/rosamar-esblau-cinematic/";

export const site: SiteContent = {
  lang: "es",
  brand: { name: "Es Blau", top: "Rosamar", sub: "Adults Only +21" },
  seo: {
    title: "Hotel Rosamar Es Blau · Hotel solo adultos +21 en Lloret de Mar con spa",
    description:
      "Hotel Rosamar Es Blau Adults Only +21, 4* Superior en Lloret de Mar a 100 m de la playa. Vitality Spa, piscina, gimnasio y restaurante buffet mediterráneo. 9,3/10 en opiniones.",
    url: URL,
    image: `${URL}media/og-es-blau.jpg`,
    keywords: ["hotel solo adultos Lloret de Mar", "hotel adults only Costa Brava", "hotel con spa Lloret de Mar", "hotel romántico Lloret", "Rosamar Es Blau"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: "Hotel Rosamar Es Blau Adults Only +21",
      url: URL,
      telephone: "+34972346523",
      starRating: { "@type": "Rating", ratingValue: "4" },
      numberOfRooms: 120,
      address: { "@type": "PostalAddress", streetAddress: "Passeig de les Acàcies, 5", addressLocality: "Lloret de Mar", postalCode: "17310", addressRegion: "Girona", addressCountry: "ES" },
      geo: { "@type": "GeoCoordinates", latitude: 41.7017458, longitude: 2.8557253 },
      sameAs: ["https://www.rosamarhotels.com/es/hotel-rosamar-es-blau-adults-only", "https://www.instagram.com/rosamarhotels/"],
    },
  },
  nav: [
    { label: "El hotel", href: "#hotel" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Habitaciones", href: "#habitaciones" },
    { label: "Galería", href: "#galeria" },
    { label: "Ubicación", href: "#ubicacion" },
  ],
  cta: { label: "Reservar", href: BOOK, external: true },
  hero: {
    scrollHint: "Desliza",
    acts: [
      { label: "Primer acto", title: "El *refugio.*", text: "Un hotel con encanto solo para adultos, a 100 metros de la playa de Lloret de Mar.", media: { type: "image", src: "/media/piscina-vista-aerea.jpg", alt: "Vista aérea de la piscina exterior del hotel" } },
      { label: "Segundo acto", title: "La *calma.*", text: "El Vitality Spa: piscina climatizada, sauna, hammam e hidromasaje para dejarse llevar.", media: { type: "image", src: "/media/spa-piscina.jpg", alt: "Piscina climatizada del Vitality Spa" } },
      { label: "Tercer acto", title: "El *descanso.*", text: "Habitaciones modernas y elegantes, con terraza, pensadas para escapadas en pareja.", media: { type: "image", src: "/media/habitacion-doble.jpg", alt: "Habitación doble con terraza" } },
      { label: "Cuarto acto", title: "La *mesa.*", text: "Cocina mediterránea e internacional con producto fresco y show cooking diario.", media: { type: "image", src: "/media/restaurante.jpg", alt: "Restaurante del hotel" } },
      { label: "Quinto acto", title: "La *llegada.*", text: "Passeig de les Acàcies, en una zona tranquila y a cinco minutos a pie del centro.", media: { type: "image", src: "/media/terraza-entrada.jpg", alt: "Terraza de la entrada del hotel" } },
    ],
  },
  intro: {
    id: "hotel",
    eyebrow: "El hotel",
    title: "Calma, mar y *pequeños lujos.*",
    paragraphs: [
      "El Hotel Rosamar Es Blau es un hotel con encanto solo para adultos, en una zona residencial y tranquila de Lloret de Mar, lejos del ocio nocturno y a cinco minutos a pie del centro.",
      "120 habitaciones en 5 plantas, Gym Centre, piscina al aire libre y Vitality Spa. Cuidamos cada detalle para que vivas una experiencia única en pareja en la Costa Brava.",
    ],
    stats: [
      { value: "+21", label: "Solo adultos" },
      { value: "100 m", label: "De la playa" },
      { value: "4*S", label: "Superior" },
      { value: "9,3", label: "1.342 opiniones" },
    ],
  },
  chapters: {
    id: "experiencias",
    eyebrow: "Experiencias",
    title: "Tres maneras de *no hacer nada.*",
    items: [
      {
        label: "Vitality Spa",
        title: "Un spa *solo para adultos.*",
        text: "Gratis durante una hora (de 10 h a 19 h) si reservas en la web oficial. Con otros portales, 15 € por persona.",
        bullets: ["Piscina climatizada interior", "Sauna y hammam", "Piscina de hidromasaje y tumbonas térmicas", "Duchas de sensaciones", "Tratamientos y masajes desde 55 €"],
        media: { type: "image", src: "/media/spa-hidromasaje.jpg", alt: "Piscina de hidromasaje del spa" },
      },
      {
        label: "Gastronomía",
        title: "Sabores del *Mediterráneo.*",
        text: "Restaurante buffet con producto fresco y de proximidad, show cooking diario, rincón vegetariano y oferta sin gluten certificada por la Associació de Celíacs de Catalunya.",
        bullets: ["Corners temáticos cada día", "Pool Snack Bar junto a la piscina", "Música en directo en la terraza", "Noche de mojitos y de gin-tonics premium"],
        media: { type: "image", src: "/media/buffet.jpg", alt: "Buffet del restaurante" },
      },
      {
        label: "Deporte",
        title: "Pedalear, caminar, *nadar.*",
        text: "Instalaciones pensadas para tus vacaciones de ciclismo, senderismo o natación en aguas abiertas.",
        bullets: ["Guarda-bicicletas con llave y acceso 24 h", "Mini-taller para tu bici", "Información de rutas y alquiler de bicicletas", "Gym Centre de 7 h a 23 h"],
        media: { type: "image", src: "/media/guarda-bicicletas.jpg", alt: "Guarda-bicicletas del hotel" },
      },
    ],
  },
  menu: {
    id: "habitaciones",
    eyebrow: "Habitaciones",
    title: "Descansar *en pareja.*",
    intro: "Habitaciones de un hotel de nueva construcción, de estilo moderno y elegante. Precios y disponibilidad según fechas en la web oficial.",
    groups: [
      { name: "Doble estándar", items: [
        { name: "Doble estándar · 2 adultos", detail: "20–21 m² · cama kingsize de 1,60 m · terraza amueblada" },
        { name: "Doble estándar · 3 adultos", detail: "Con sofá cama de 1,35 m" },
        { name: "Doble estándar · uso individual", detail: "Para una persona" },
      ] },
      { name: "Suite", items: [
        { name: "Suite", detail: "25 m² + 40 m² de terraza · cama King size 1,80 × 2 m" },
        { name: "Terraza chill-out", detail: "Dos tumbonas y sofá o butacas" },
        { name: "Detalles", detail: "Albornoz, zapatillas, coffee corner Dolce Gusto y set de té" },
      ] },
      { name: "En todas", items: [
        { name: "Confort", detail: "Aire acondicionado, calefacción, TV satélite, wifi" },
        { name: "Seguridad", detail: "Caja fuerte gratuita y recepción 24 horas" },
        { name: "Bienvenida", detail: "Agua de cortesía y enchufes con USB" },
      ] },
    ],
  },
  gallery: {
    id: "galeria",
    eyebrow: "Galería",
    title: "Un paseo *por el hotel.*",
    items: [
      { type: "image", src: "/media/piscina-tumbonas.jpg", alt: "Piscina exterior y tumbonas" },
      { type: "image", src: "/media/spa-tumbonas-termicas.jpg", alt: "Tumbonas térmicas del spa" },
      { type: "image", src: "/media/hall.jpg", alt: "Vestíbulo del hotel" },
      { type: "image", src: "/media/solarium.jpg", alt: "Solárium en la azotea" },
      { type: "image", src: "/media/spa-piscina-climatizada.jpg", alt: "Piscina climatizada interior" },
      { type: "image", src: "/media/terraza-bar.jpg", alt: "Terraza exterior del bar" },
      { type: "image", src: "/media/habitacion-doble-2.jpg", alt: "Habitación doble" },
      { type: "image", src: "/media/spa-cabina-masajes.jpg", alt: "Cabina de masajes" },
      { type: "image", src: "/media/bar.jpg", alt: "Bar del hotel" },
      { type: "image", src: "/media/gimnasio.jpg", alt: "Gym Centre" },
    ],
  },
  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que dicen *los huéspedes.*",
    score: "9,3",
    scoreLabel: "Fantástico · 1.342 encuestas",
    source: "Opiniones de clientes alojados · rosamarhotels.com",
    quotes: [
      { text: "La limpieza y la atención de todo el personal, además del buffet tan variado y con tanta calidad en los productos.", author: "Elisenda", meta: "9,9" },
      { text: "Las instalaciones, la ubicación del hotel y me llamó la atención la limpieza del agua de la piscina.", author: "Oscar", meta: "10" },
      { text: "Excellent hotel, staff exceptional, would highly recommend.", author: "Tracie", meta: "10" },
      { text: "Excelente hotel al lado del paseo marítimo.", author: "Jose", meta: "10" },
    ],
  },
  faq: {
    eyebrow: "Bueno saber",
    title: "Antes de *tu llegada.*",
    items: [
      { q: "¿Desde qué edad se puede alojar?", a: "Es un hotel solo para adultos: entrada reservada a mayores de 21 años. No se admiten despedidas de soltero/a ni se recomienda para grupos de personas jóvenes." },
      { q: "¿El spa está incluido?", a: "Sí, si reservas en la web oficial: acceso gratuito de 1 hora entre las 10 h y las 19 h. Desde otros portales cuesta 15 € por persona." },
      { q: "¿Puedo hacer el check-in online?", a: "Sí, puedes registrarte online antes de llegar desde cualquier dispositivo." },
      { q: "¿Hay animación nocturna?", a: "Música en directo en el bar terraza y, a 20 metros, la animación del Hotel Rosamar & Spa, disponible para los clientes durante toda la temporada." },
    ],
  },
  contact: {
    id: "ubicacion",
    eyebrow: "Ubicación",
    title: "A un paso *del mar.*",
    address: ["Passeig de les Acàcies, 5", "17310 Lloret de Mar (Girona)"],
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.7017458,2.8557253",
    mapEmbed: "https://www.google.com/maps?q=41.7017458,2.8557253&z=16&output=embed",
    phone: { label: "+34 972 34 65 23", href: "tel:+34972346523" },
    socials: [
      { label: "Instagram de Rosamar Hotels", href: "https://www.instagram.com/rosamarhotels/", icon: "instagram" },
      { label: "Facebook de Rosamar Hotels", href: "https://www.facebook.com/rosamarhotels.lloretdemar", icon: "facebook" },
      { label: "YouTube de Rosamar Hotels", href: "https://www.youtube.com/user/RosamarHotels", icon: "youtube" },
      { label: "Web oficial", href: "https://www.rosamarhotels.com/es/hotel-rosamar-es-blau-adults-only", icon: "web" },
    ],
  },
  finale: {
    title: "Tu escapada *empieza aquí.*",
    text: "Reserva en la web oficial y disfruta del Vitality Spa gratis.",
    cta: { label: "Ver disponibilidad", href: BOOK, external: true },
    media: { type: "image", src: "/media/piscina-exterior.jpg", alt: "" },
  },
  floating: { label: "Reservar", href: BOOK, external: true, icon: "calendar" },
  footer: { line: "© 2026 Hotel Rosamar Es Blau · Rosamar Hotels", credit: "Diseño web por DURDUC" },
};
