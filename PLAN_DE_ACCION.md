# PLAN DE ACCIÓN — Lumier Cosmetología Integral

---

## Prompt de Contexto para el Agente

Eres un desarrollador frontend experto. Debes construir una landing page estática, de una sola página (SPA-style scroll), para **Lumier Cosmetología Integral**, un centro estético ubicado en Montevideo, Uruguay.

**Stack:** HTML5, CSS3 y JavaScript puro (sin frameworks ni dependencias externas salvo Google Fonts y Font Awesome vía CDN).

**Referencia de arquitectura:** El proyecto `EJEMPLOS/fisioKinesis-main` es la base estructural. Debes replicar sus patrones técnicos exactos: modal único con inyección de datos por JS, carrusel con toggle de opacidad (no traslación), scroll reveal con IntersectionObserver, hamburger menu con transición `max-height`, botón flotante de WhatsApp, tipografía fluida con `clamp()` y active nav link en scroll.

**Paleta de colores:**
- Principal: `#D7C7BB` (beige rosado)
- Secundario: `#C98B52` (dorado/cobre)
- Negro: `#1a1a1a`
- Fondo claro alternado: `#FAF7F5`

**Assets disponibles:**
- `img/logo-removebg-preview.png` — logo de la marca
- `img/imgInicio.png` — imagen principal del hero

**Secciones:** Navbar, Inicio (Hero), Servicios, Nosotros (con carrusel de reseñas), Contacto, Footer + FAB de WhatsApp.

**Reseñas:** Se utilizan 23 de las 24 reseñas provistas (se omite la reseña negativa de Agustina Pintos). Las reseñas se presentan de a una como carrusel con avatar circular (inicial del nombre), 5 estrellas doradas y texto de la opinión.

**Criterio de calidad:** Diseño minimalista, prolijo, 100% responsive con breakpoints en 960 px y 660 px. Los popups, carrusel y navbar deben funcionar correctamente en mobile.

---

## Fases de Desarrollo

### FASE 1 — Estructura HTML base
- Crear `index.html` con la estructura semántica completa de todas las secciones.
- Incluir CDNs (Google Fonts: `Cormorant Garamond` + `Inter`, Font Awesome 6).
- Agregar `<meta>` de viewport, charset y descripción.
- Estructurar: `<nav>`, `#inicio`, `#servicios`, modal overlay, `#nosotros`, `#contacto`, `<footer>`, `.whatsapp-float`.
- Insertar el contenido estático de todas las secciones (textos, links, reseñas, horarios).
- Aplicar `data-service` en las cards de servicios para el patrón modal.
- Configurar el iframe de Google Maps en la sección de contacto.

---

### FASE 2 — Estilos CSS (styles.css)
- Definir variables CSS en `:root` con la paleta de Lumier.
- Reset universal (`box-sizing`, márgenes, `scroll-behavior: smooth`, `overflow-x: hidden`).
- Estilos del Navbar: fixed, logo izquierda, links derecha, animación de active link.
- Hero section: dos columnas flex, imagen con animación `float`.
- Sección Servicios: grid auto-fit con cards, hover effects.
- Modal: `position: fixed`, blur backdrop, animación scale + translateY, scroll interno.
- Sección Nosotros: texto + rating badge + carrusel de reseñas.
  - Carrusel: cards con `position: absolute / opacity: 0` para inactivas, `relative / opacity: 1` para activa.
  - Avatar circular con gradiente (inicial del nombre).
  - Estrellas doradas con íconos de Font Awesome.
- Sección Contacto: cards por canal, integración del mapa.
- Footer: tres columnas flex, colapsa en mobile.
- Botón WhatsApp flotante con animación `pulse` en `box-shadow`.
- Scroll reveal: `.reveal` / `.reveal.visible` con transición.
- Tipografía fluida con `clamp()` en todos los headings.
- **Breakpoints responsive:**
  - `≤ 960px`: Hero y Nosotros apilados verticalmente, padding reducidos.
  - `≤ 660px`: Hamburger menu, servicios en 2 columnas, modal desde abajo, footer apilado, carrusel con swipe touch.
  - `≤ 440px`: Servicios 1 columna, hero H1 mínimo, cards de contacto a full width.

---

### FASE 3 — Lógica JavaScript (script.js)
- **Hamburger menu:** toggle de clase `.open` en nav, auto-cierre al clickear link.
- **Active nav link en scroll:** `scrollY` vs `offsetTop/offsetHeight` de cada sección, `{ passive: true }`.
- **Scroll Reveal:** `IntersectionObserver` con `threshold: 0.1`, `unobserve()` post-disparo.
- **Modales de servicios:** objeto `serviceData` con `{ icon, title, shortDesc, fullDesc }` para los 3 servicios; inyección en modal único; cierre por botón, overlay click y tecla `Escape`; `body overflow hidden` al abrir.
- **Carrusel de reseñas:**
  - 23 reseñas (sin la negativa).
  - Dots generados dinámicamente.
  - `goToSlide(index)` con wrapping modular.
  - Autoplay cada 5 s con reset en navegación manual.
  - Swipe touch con `touchstart/touchend` (threshold 40 px, `{ passive: true }`).
- **Smooth scroll** con offset de 72 px (altura del navbar) para todos los `a[href^="#"]`.

---

### FASE 4 — Contenido de Servicios (generado)
Completar las descripciones cortas y popups de los 3 servicios:

1. **Cosmetología Integral** — tratamientos faciales personalizados.
2. **Depilación Láser** — tecnología de vanguardia, resultados desde la primera sesión.
3. **Coaching Ontológico** — acompañamiento personal para conectar autoestima y bienestar.

---

### FASE 5 — Revisión Final y QA
- Verificar responsive en 375 px (mobile), 768 px (tablet) y 1280 px (desktop).
- Confirmar que el carrusel no superpone texto en mobile (ajuste de altura mínima del contenedor).
- Verificar que los popups de servicios son scrollables internamente si el contenido es largo.
- Confirmar links de contacto (WhatsApp `tel:`, Instagram, Google Maps).
- Testear swipe en carrusel en mobile.
- Revisar animaciones de scroll reveal en todas las secciones.
- Validar accesibilidad básica: `alt` en imágenes, `aria-label` en FAB y modal, `role="dialog"`.

---

## Archivos a Generar

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura HTML completa |
| `styles.css` | Estilos, variables, responsive |
| `script.js` | Interactividad JS |

Los assets en `img/` ya están disponibles. No se requieren dependencias adicionales.
