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