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
});
