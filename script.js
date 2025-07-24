document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropbtn");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      dropdown.classList.toggle("active");
    });
  });

  document.addEventListener("click", closeAllDropdowns);

  function closeAllDropdowns() {
    dropdowns.forEach(drop => drop.classList.remove("active"));
  }

  // Modalità scura 🌗
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "🌞";
  });

  // Popup uscita 🛑
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link =>
