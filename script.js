document.addEventListener("DOMContentLoaded", () => {
  // Dropdown
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropbtn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      dropdown.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    closeAllDropdowns();
  });

  function closeAllDropdowns() {
    dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
  }

  // 🌗 Modalità scura
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "🌞";
  });

  // 🚨 Popup uscita
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const destination = this.href;

      const confirmOverlay = document.createElement("div");
      confirmOverlay.className = "exit-overlay";
      confirmOverlay.innerHTML = `
        <div class="exit-popup">
          <p><strong>Aspetta, frena!</strong> 🚧<br>Stai per uscire da questo sito. Ricorda di stare attento!</p>
          <div class="popup-buttons">
            <button class="exit-confirm">Ho capito</button>
            <button class="exit-cancel">Aspetta, no!</button>
          </div>
        </div>
      `;
      document.body.appendChild(confirmOverlay);

      confirmOverlay.querySelector(".exit-confirm").addEventListener("click", () => {
        window.open(destination, "_blank");
        document.body.removeChild(confirmOverlay);
      });

      confirmOverlay.querySelector(".exit-cancel").addEventListener("click", () => {
        document.body.removeChild(confirmOverlay);
      });
    });
  });

  // 🟡 Chiudi barra WIP
  const closeNotice = document.getElementById("closeNotice");
  if (closeNotice) {
    closeNotice.addEventListener("click", () => {
      const notice = document.getElementById("wipNotice");
      if (notice) {
        notice.style.display = "none";
      }
    });
  }

  // 📱 Rilevamento mobile
  function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
    document.body.classList.add("mobile-mode");
  }
});
