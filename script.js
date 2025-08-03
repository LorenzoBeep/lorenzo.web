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
  <p>
    <strong data-key="ExtLinkStrong">Aspetta, frena!</strong> 🚧<br>
    <span data-key="ExtLinkText">Stai per uscire da questo sito. Ricorda di stare attento!</span>
  </p>
  <div class="popup-buttons">
    <button class="exit-confirm" data-key="ExtLinkOKButton">Ho capito</button>
    <button class="exit-cancel" data-key="ExtLinkNopeButton">Aspetta, no!</button>
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

const popup = document.querySelector('.exit-popup');

function openPopup() {
  popup.classList.remove('uscita');
  popup.classList.add('entrata');
}

function closePopup() {
  popup.classList.remove('entrata');
  popup.classList.add('uscita');

  popup.addEventListener('animationend', () => {
    popup.parentElement.style.display = 'none'; // O rimuovi completamente
  }, { once: true });
}
  // 🟡 Chiudi barra WIP
 if (closeNotice) {
  closeNotice.addEventListener("click", () => {
    const notice = document.getElementById("wipNotice");
    if (notice) {
      notice.classList.add("slide-up");
      setTimeout(() => {
        notice.remove();
      }, 600); // tempo uguale alla durata dell'animazione
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

async function caricaLingua(codice) {
  try {
    const response = await fetch(`lingua/${codice}.json`);
    if (!response.ok) throw new Error(`File ${codice}.json non trovato`);

    const dati = await response.json();

    document.querySelectorAll('[data-key]').forEach(el => {
      const chiave = el.getAttribute('data-key');
      if (dati[chiave]) {
        el.textContent = dati[chiave];
      } else {
        console.warn(`Chiave "${chiave}" non trovata in ${codice}.json`);
      }
    });

    localStorage.setItem('lingua', codice);
  } catch (error) {
    console.error(`Errore nel caricamento della lingua '${codice}':`, error.message);
  }
}

// Al cambio selettore: aggiorna subito
document.getElementById('language-select').addEventListener('change', e => {
  const nuovaLingua = e.target.value;
  caricaLingua(nuovaLingua);
});

// All'avvio: carica la lingua salvata
document.addEventListener('DOMContentLoaded', () => {
  const linguaSalvata = localStorage.getItem('lingua') || 'ita';
  document.getElementById('language-select').value = linguaSalvata;
  caricaLingua(linguaSalvata);
});
