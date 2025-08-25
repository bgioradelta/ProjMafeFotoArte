const searchInput = document.getElementById("searchInput");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const colorFilter = document.getElementById("colorFilter");
const themeFilter = document.getElementById("themeFilter");
const galleryItems = document.querySelectorAll(".product-card");

function filterGallery() {
  const searchTerm = searchInput.value.toLowerCase();
  const min = parseFloat(minPrice.value) || 0;
  const max = parseFloat(maxPrice.value) || Infinity;
  const color = colorFilter.value;
  const theme = themeFilter.value;

  galleryItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    const price = parseFloat(item.dataset.price);
    const itemColor = item.dataset.color;
    const itemTheme = item.dataset.theme;

    const matchesSearch = name.includes(searchTerm);
    const matchesPrice = price >= min && price <= max;
    const matchesColor = color === "" || itemColor === color;
    const matchesTheme = theme === "" || itemTheme === theme;

    if (matchesSearch && matchesPrice && matchesColor && matchesTheme) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

[searchInput, minPrice, maxPrice, colorFilter, themeFilter].forEach(el =>
  el.addEventListener("input", filterGallery)
);

// ===== MENU HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// ===== CARROSSEL =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-track img');
const indicators = document.querySelectorAll('.carousel-indicator');
const totalSlides = slides.length;

function showSlide(index) {
  const track = document.querySelector('.carousel-track');
  const slideWidth = slides[0].clientWidth;
  
  // Move o carrossel
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  
  // Atualiza indicadores
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  
  currentSlideIndex = index;
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  
  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Auto-play do carrossel
setInterval(() => {
  changeSlide(1);
}, 5000); // Muda a cada 5 segundos

// Ajusta o carrossel quando a janela é redimensionada
window.addEventListener('resize', () => {
  showSlide(currentSlideIndex);
});