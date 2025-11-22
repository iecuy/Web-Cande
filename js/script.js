// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ================= FILTRADO DE PROYECTOS =================
const filterBtns = document.querySelectorAll(".filter-btn");
const proyectoCards = document.querySelectorAll(".proyecto-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    proyectoCards.forEach(card => {
      if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
        card.classList.remove("hidden");
        card.style.display = "";
      } else {
        card.classList.add("hidden");
        card.style.display = "none";
      }
    });
  });
});

// ================= INTERSECTION OBSERVER =================
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".proyecto-card, .ilustracion-card, .sobremi-content").forEach(el => observer.observe(el));

// ================= VALIDACIÓN DE FORMULARIO =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido");
      return;
    }

    alert("¡Gracias por tu mensaje! Me contactaré pronto.");
    contactForm.reset();
  });
}

// ================= NAVBAR SCROLL SHADOW =================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 50 ? "0 2px 10px rgba(0,0,0,0.1)" : "none";
});

// ================= LIGHTBOX GLOBAL =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const btnClose = document.querySelector(".lightbox-close");
const btnNext = document.querySelector(".lightbox-next");
const btnPrev = document.querySelector(".lightbox-prev");

let currentIndex = 0;
let lightboxImages = [];

// Detectar si estamos en la página Ilustraciones
const isIlustraciones = document.querySelector('main.proyecto-ilustraciones') !== null;

// Seleccionar imágenes de la galería
const galleryImgs = isIlustraciones 
  ? document.querySelectorAll(".galeria-ilustraciones img") 
  : document.querySelectorAll(".galeria img, .proyecto-gallery-preview img, .carrusel-img");

// Guardamos los src en el array y añadimos click
galleryImgs.forEach((img, index) => {
  lightboxImages.push(img.src);
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightboxImg.src = lightboxImages[currentIndex];
  lightboxImg.style.transform = "scale(1)";
  lightboxImg.dataset.scale = 1;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  lightboxImg.src = lightboxImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[currentIndex];
}

btnNext.addEventListener("click", nextImage);
btnPrev.addEventListener("click", prevImage);
btnClose.addEventListener("click", closeLightbox);

// Click fuera de la imagen cierra
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

// Zoom con rueda del mouse
lightboxImg.addEventListener("wheel", e => {
  e.preventDefault();
  let scale = parseFloat(lightboxImg.dataset.scale || 1);
  scale += e.deltaY * -0.0015;
  scale = Math.min(Math.max(1, scale), 4);
  lightboxImg.style.transform = `scale(${scale})`;
  lightboxImg.dataset.scale = scale;
});

// Teclado: ESC, ←, →
document.addEventListener("keydown", e => {
  if (lightbox.style.display === "flex") {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  }
});

// ================= CARRUSEL SEÑALÉTICA =================
const track = document.querySelector('.carrusel-track');
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const imgs = document.querySelectorAll('.carrusel-img');

let index = 0;

function updateCarrusel() {
  const width = imgs[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % imgs.length;
  updateCarrusel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + imgs.length) % imgs.length;
  updateCarrusel();
});

// Autoplay cada 3s
setInterval(() => {
  index = (index + 1) % imgs.length;
  updateCarrusel();
}, 3000);









