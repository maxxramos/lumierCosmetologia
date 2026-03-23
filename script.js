/* ============================================================
   LUMIER COSMETOLOGÍA INTEGRAL — script.js
   ============================================================ */

/* ======================== SERVICE DATA ======================== */
const serviceData = {
    cosmetologia: {
        icon: '<i class="fa-solid fa-spa"></i>',
        title: 'Cosmetología Integral',
        desc: `La cosmetología integral en Lumier es mucho más que un tratamiento estético: es un ritual de autocuidado diseñado específicamente para vos.

Trabajamos con productos de alta calidad y técnicas actualizadas para nutrir, revitalizar y equilibrar tu piel, abordando desde su capa más superficial hasta sus necesidades profundas.

<strong>¿Qué incluye?</strong>
• Higiene facial profunda con extracción y purificación
• Hidratación intensiva con principios activos personalizados
• Tratamientos antiaging y reafirmantes
• Peeling y renovación celular
• Máscaras nutritivas y calmantes
• Masajes faciales con técnica circulatoria y linfática

<strong>¿Para quién es?</strong>
Para cualquier persona que desee cuidar su piel de manera consciente, tratar imperfecciones o simplemente disfrutar de un momento de bienestar total.

Cada sesión es un espacio único donde priorizamos tu comodidad y los resultados reales y visibles.`
    },
    depilacion: {
        icon: '<i class="fa-solid fa-bolt"></i>',
        title: 'Depilación Láser',
        desc: `La depilación láser en Lumier es sinónimo de libertad, confianza y tecnología de vanguardia.

Utilizamos equipos de última generación que se adaptan a todos los fototipos de piel, garantizando tratamientos seguros, efectivos y prácticamente indoloros.

<strong>Resultados desde la primera sesión:</strong>
Nuestras clientas notan una reducción significativa del vello desde el primer tratamiento, con resultados que mejoran progresivamente en cada sesión.

<strong>Zonas disponibles:</strong>
• Rostro (labio superior, mentón, patillas)
• Axilas
• Bikini y zona íntima
• Piernas completas o parciales
• Espalda y pecho
• Brazos

<strong>¿Por qué elegirnos?</strong>
• Equipos certificados con tecnología de alta frecuencia
• Procedimientos personalizados según tu tipo de piel y vello
• Ambiente sterile, higiénico y confortable
• Resultados visibles, duraderos y con cero dolor

Decile adiós a la depilación transitoria y bienvenida a tu nueva libertad.`
    },
    coaching: {
        icon: '<i class="fa-solid fa-heart-pulse"></i>',
        title: 'Coaching Ontológico',
        desc: `El Coaching Ontológico es la dimensión más profunda de lo que ofrecemos en Lumier: un acompañamiento transformador que trabaja desde adentro hacia afuera.

Creemos que la verdadera belleza y el bienestar nacen del equilibrio entre el cuerpo y la mente. Por eso integramos el coaching como una herramienta poderosa que potencia todo tu proceso de transformación personal.

<strong>¿Qué es el Coaching Ontológico?</strong>
Es una disciplina que trabaja con el ser en su totalidad: cuerpo, emoción y lenguaje. A través de conversaciones profundas y herramientas concretas, te acompaña a identificar tus creencias limitantes, reconectar con tu autoestima y construir una versión más plena de vos misma.

<strong>¿Qué trabajamos juntas?</strong>
• Autoestima y autoimagen
• Gestión emocional y bienestar interior
• Objetivos personales y hábitos saludables
• Vínculos y comunicación
• Claridad en el propósito de vida

<strong>¿Para quién es?</strong>
Para toda persona que sienta que algo en su interior necesita transformarse, que quiera más coherencia entre cómo se siente y cómo se presenta al mundo, o que simplemente busque un espacio de escucha y acompañamiento genuino.

Cada sesión es confidencial, amorosa y completamente orientada a vos.`
    }
};

/* ======================== DOM REFERENCES ======================== */
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('navLinks');
const navbar       = document.getElementById('navbar');
const modalOverlay = document.getElementById('modalOverlay');
const modal        = document.getElementById('modal');
const modalClose   = document.getElementById('modalClose');
const modalCTA     = document.getElementById('modalCTA');
const modalIcon    = document.getElementById('modalIcon');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

/* ======================== HAMBURGER MENU ======================== */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close on nav link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ======================== NAVBAR ON SCROLL ======================== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

/* ======================== ACTIVE NAV LINK ON SCROLL ======================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navAnchors.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
}, { passive: true });

/* ======================== SCROLL REVEAL ======================== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ======================== SERVICE MODALS ======================== */
function openModal(key) {
    const data = serviceData[key];
    if (!data) return;

    modalIcon.innerHTML  = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML  = data.desc.replace(/\n/g, '<br>');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Card clicks
document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.dataset.service);
    });
});

// Close triggers
modalClose.addEventListener('click', closeModal);

modalCTA.addEventListener('click', () => {
    closeModal();
    const contacto = document.getElementById('contacto');
    if (contacto) {
        const top = contacto.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    }
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ======================== REVIEWS CAROUSEL ======================== */
const cards = Array.from(carouselTrack.querySelectorAll('.review-card'));
const totalSlides = cards.length;
let current = 0;
let autoplayInterval;

// Generate dots
cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir a reseña ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoplay();
    });
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

function goToSlide(index) {
    const normalized = ((index % totalSlides) + totalSlides) % totalSlides;

    cards[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = normalized;

    cards[current].classList.add('active');
    dots[current].classList.add('active');
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        goToSlide(current + 1);
    }, 5000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Prev / Next buttons
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        goToSlide(current - 1);
        resetAutoplay();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        goToSlide(current + 1);
        resetAutoplay();
    });
}

// Start autoplay
startAutoplay();

// Touch / swipe support
let touchStartX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
}, { passive: true });

carouselTrack.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
        goToSlide(delta > 0 ? current + 1 : current - 1);
        resetAutoplay();
    }
}, { passive: true });

/* ======================== SMOOTH SCROLL (offset navbar) ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const top = target.offsetTop - 72;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
