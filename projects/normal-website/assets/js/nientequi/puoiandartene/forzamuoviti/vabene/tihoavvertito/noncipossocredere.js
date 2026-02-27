// 1. Variabili Globali
const target = document.documentElement;
let guardiaAttiva = false;

// 2. PUNIZIONI (Funzioni separate per ogni peccato)

const punizioneStandard = async function() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake { 0% { transform: translate(1px, 1px); } 20% { transform: translate(-3px, 0px); } 100% { transform: translate(1px, -2px); } }
        body { background: darkred !important; color: white !important; animation: shake 0.1s infinite; overflow: hidden; }
    `;
    document.head.appendChild(style);
    document.body.innerHTML = `<div style="height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; text-align: center;">MANOMISSIONE RILEVATA</div>`;
    await new Promise(r => setTimeout(r, 5000));
    ["Cosa fai?", "Cerchi di cambiarmi?", "Per quale fine?", "Oh nonono...", "Tu non raggiungerai nessuna fine qua.", "Ti piace proprio smanettare, eh?", "Peccato che non ti sarà utile.", "Addio.", "E, uh, ultima cosa.", "Io sono meglio.", "Cerca in ogni modo di imbrogliarmi...", "... ma non accadrà mai."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com";
};

const punizioneEliminazione = () => {
    const nuovoBody = document.createElement('body');
    nuovoBody.style.cssText = "background: darkred; color: white; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Courier New', monospace; overflow: hidden;";
    nuovoBody.innerHTML = `<non-penso-proprio style="text-align:center;"><h1 style="font-size:3rem;">MANOMISSIONE RILEVATA</h1><p style="font-size:1.5rem;">Tentativo di eliminazione fallito.</p></non-penso-proprio>`;
    document.documentElement.appendChild(nuovoBody);
    ["Cosa?", "Come...", "..haha...", "Eliminarmi?", "Mai.", "Addio."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com";
};

const punizioneScriptModificato = () => {
    ["Cosa?", "Perchè mi modifichi?", "Non andrai da nessuna parte.", "Muahaha...", "Sono così potente che ti butterei fuori.", "Anzi...", "...lo farò."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com";
};

const punizioneEsca = () => {
    const messaggiEsca = [
        "Ah.", "A quanto pare...", "Vuoi cambiare il layout.", 
        "Non saprei perchè.", "Hai notato qualche...", "...", 
        "...password..?", "Anzi,", "non c'è neanche bisogno di chiedere,", 
        "So che vuoi fare.", "E non mi piace.", "Fuori!"
    ];
    for (let msg of messaggiEsca) { alert(msg); }
    window.location.href = "https://www.youtube.com";
};
    
  


// 1. BLOCCO STAMPA (CSS + JS)
const stileStampa = document.createElement('style');
stileStampa.innerHTML = `
    @media print {
        body { display: none !important; }
        html::after {
            content: "SPRECANDO INCHIOSTRO, EH? NON QUI.";
            font-family: monospace; font-size: 50px; color: red;
            display: flex; justify-content: center; align-items: center; height: 100vh;
        }
    }
`;
document.head.appendChild(stileStampa);

window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        alert("Pensi davvero che ti lascerò stampare il mio regno?");
    }
});

// 2. MANOMISSIONE FINESTRA (Ridimensionamento)
let finestraManomessa = false;
window.addEventListener('resize', () => {
    if (!guardiaAttiva || finestraManomessa) return;
    
    finestraManomessa = true;
    const msgResize = [
        "Perché hai rimpicciolito la mia visuale?",
        "Cerchi di nascondermi qualcosa?",
        "O forse hai aperto la console di lato?",
        "Pessima idea."
    ];
    for (let m of msgResize) { alert(m); }
    
    // Effetto distorsione: facciamo zoomare tutto a caso
    document.body.style.transform = "scale(0.5) rotate(5deg)";
    document.body.style.filter = "blur(10px)";
    
    setTimeout(() => {
        window.location.href = "https://www.youtube.com";
    }, 2000);
});


const punizioneColore = () => {
    // 1. Oscuramento totale
    const oscuramento = document.createElement('style');
    oscuramento.innerHTML = `
        body { background: #000 !important; color: #000 !important; cursor: none !important; }
        * { background: #000 !important; color: #000 !important; border: none !important; }
    `;
    document.head.appendChild(oscuramento);
    
    // 2. Messaggio di scherno nel DOM (invisibile perché nero su nero, o quasi)
    document.body.innerHTML = `<div style="color: #050505;">idiota. qua non hai controllo</div>`;

    // 3. Raffica di alert
    const messaggiColore = [
        "Eh?", "Mi stai illuminando?", "A cosa serve?", 
        "Vuoi avere più luce?", "Beh, mi dispiace.", 
        "Io ho il controllo qua.", "Modalità Notte, vai."
    ];
    for (let msg of messaggiColore) { alert(msg); }
    
    // Dopo gli alert, rimane tutto nero. Se prova a cambiare ancora... il guardiano lo ribecca.
};

// ... (le altre punizioni Standard, Eliminazione, Script e Colore rimangono uguali)

// Punizione Titolo "Molle" (La finta resa)
const punizioneTitoloMorbida = () => {
    ["Hm?", "Il titolo?", "Perchè il titolo?", "Sai che cosa...", "...non me ne frega di quello.", "E' tutto tuo."].forEach(m => alert(m));
    // Qui non c'è redirect, lasciamo che l'utente creda di aver vinto
};

// --- CATTIVERIA 3: IL GUARDIANO SI ANNOIA (INATTIVITÀ) ---

let timerInattivita;

const resetTimer = () => {
    if (!guardiaAttiva) return;
    
    // Se l'utente muove il mouse, il guardiano si tranquillizza
    clearTimeout(timerInattivita);
    
    timerInattivita = setTimeout(() => {
        // Se passano 30 secondi di immobilità totale...
        const messaggiNoia = [
            "EHI???",
            "Ci sei??",
            "Ha.. visto che non ci sei...",
            "Sicuramente ti piacerà questo!"
        ];
        
        messaggiNoia.forEach(m => alert(m));
        window.location.href = "https://www.youtube.com";
    }, 30000); // 30.000 millisecondi = 30 secondi
};

// Ascoltiamo ogni movimento del mouse o pressione di tasti
window.addEventListener('mousemove', resetTimer);
window.addEventListener('keydown', resetTimer);
window.addEventListener('scroll', resetTimer);

// Facciamo partire il timer non appena il guardiano si sveglia
setTimeout(() => {
    resetTimer();
}, 1000);


// --- CATTIVERIA 1: IL FURTO DELLA CLIPBOARD ---
window.addEventListener('copy', (e) => {
    // 1. Impediamo la copia reale
    e.preventDefault();

    // 2. Sostituiamo il contenuto con un messaggio di scherno
    const messaggioTroll = "Cosa tenti di fare?\n\n" +
                           "Vuoi copiarmi?\n" +
                           "Qua non si fa.";
    
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', messaggioTroll);
    }

    // 3. Facciamo finta di niente o diamo un piccolo avvertimento in console
    console.warn("%cTentativo di copia rilevato. Clipboard manomessa.", "color: orange; font-weight: bold;");
    
    // Opzionale: Un piccolo alert per fargli capire che lo abbiamo visto
    alert("Copiare? Haha...");
});


// 1. Aggiungi questa variabile in alto con le altre globali
let tastoDestroConcesso = false;

// 2. Aggiungi il listener per il tasto destro in fondo al file
window.addEventListener('contextmenu', (e) => {
    if (!guardiaAttiva) return;

    if (!tastoDestroConcesso) {
        // La prima volta che lo fa, scatta il dialogo
        tastoDestroConcesso = true;
        const msgDestro = [
            "Eh-", 
            "..aspetta...", 
            "Ah, solo un tasto destro?", 
            "Va bene.", 
            "Te lo concedo."
        ];
        msgDestro.forEach(m => alert(m));
        // Non blocchiamo l'evento (e.preventDefault() non viene chiamato),
        // così il menu si apre davvero dopo gli alert!
    } else {
        // Dalla seconda volta in poi, non succede nulla. Silenzio assenso.
        console.log("%cPermesso tasto destro: ATTIVO", "color: gray; font-style: italic;");
    }
});

// --- CATTIVERIA 2: IL DRAG & DROP FANTASMA ---

window.addEventListener('dragstart', (e) => {
    if (!guardiaAttiva) return;

    // 1. Facciamo sparire ISTANTANEAMENTE il testo o l'immagine trascinata
    // Usiamo l'opacità e la scala per farlo sembrare un errore di caricamento
    if (e.target.style) {
        e.target.style.transition = "all 0.1s ease";
        e.target.style.opacity = "0";
        e.target.style.transform = "scale(0)";
    }

    // 2. Punizione a raffica di alert
    const messaggiDrag = [
        "EHI!!",
        "Non si tocca la merce!",
        "Cioè..",
        "N-no!",
        "FUORI!"
    ];

    // Usiamo un piccolo timeout per assicurarci che l'utente veda l'oggetto sparire
    // prima che gli alert blocchino tutto il browser
    setTimeout(() => {
        messaggiDrag.forEach(m => alert(m));
        window.location.href = "https://www.youtube.com";
    }, 50);
});

// Blocco totale del drop (per sicurezza extra)
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => e.preventDefault());


const punizioneControllo = async () => {
    // Cambia subito il titolo per far capire che il gioco è finito
    document.title = "TU NON HAI IL CONTROLLO";
    
    // Gli alert di avvertimento
    const messaggi = ["Perchè?", "Perchè devi fare così?", "Te lo dirò sempre."];
    for (let msg of messaggi) { alert(msg); }

    // Creiamo la scena del crimine
    const container = document.createElement('div');
    // SFONDO ROSSO SANGUE
    container.style.cssText = `
        position:fixed; top:0; left:0; width:100vw; height:100vh; 
        background:#800; /* Rosso scuro */
        display:flex; justify-content:center; align-items:center; 
        z-index:99999; font-family:'Courier New', monospace; font-size:3.5rem; font-weight:bold; gap:20px;
    `;
    
    const parole = ["TU", "NON", "HAI", "IL", "CONTROLLO"];
    const spanRefs = [];

    parole.forEach(p => {
        const s = document.createElement('span');
        s.innerText = p;
        // STESSO ROSSO DELLO SFONDO = INVISIBILE
        s.style.color = "#800"; 
        s.style.transition = "color 0.4s ease, text-shadow 0.4s ease";
        container.appendChild(s);
        spanRefs.push(s);
    });

    document.body.appendChild(container);

    // 1. Fase "Mimetica" (2 secondi di vuoto rosso)
    await new Promise(r => setTimeout(r, 2000));
    
    // 2. Sequenza di illuminazione (0.5s l'una)
    for (let i = 0; i < spanRefs.length; i++) {
        spanRefs[i].style.color = "white";
        spanRefs[i].style.textShadow = "0 0 20px rgba(255,255,255,0.8)";
        await new Promise(r => setTimeout(r, 500));
    }

    // 3. Il colpo di grazia (3 secondi di terrore visivo)
    await new Promise(r => setTimeout(r, 3000));
    window.location.href = "https://www.youtube.com";
};


// Aggiorniamo l'Observer
const observer = new MutationObserver((mutationsList) => {
    if (!guardiaAttiva) return;

    for (const mutation of mutationsList) {
        // --- 1. CONTROLLO TITOLO ---
        if (mutation.target.nodeName === 'TITLE' || (mutation.target.parentNode && mutation.target.parentNode.nodeName === 'TITLE')) {
            const nuovoTitolo = document.title.toLowerCase();
            
            if (nuovoTitolo.includes("controllo")) {
                observer.disconnect();
                punizioneControllo();
                return;
            } else {
                // Non disconnettiamo l'observer qui, così può ancora beccare "controllo" dopo
                punizioneTitoloMorbida();
                return;
            }
        }

        // --- 2. ELIMINAZIONE BODY/SCRIPT ---
        const rimosso = Array.from(mutation.removedNodes).some(node => node.nodeName === 'BODY' || node.nodeName === 'SCRIPT');
        if (rimosso) {
            observer.disconnect();
            punizioneEliminazione();
            return;
        }

        // --- 3. CONTROLLO ESCA PASSWORD ---
        if (mutation.target.nodeName === 'PASSWORD' && mutation.type === 'attributes') {
            observer.disconnect();
            punizioneEsca();
            return;
        }

        // --- 4. CONTROLLO MODIFICA SCRIPT ---
        if (mutation.target.nodeName === 'SCRIPT') {
            observer.disconnect();
            punizioneScriptModificato();
            return;
        }

        // --- 5. CONTROLLO COLORE / STILE ---
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const tagInteressati = ['BODY', 'H1', 'TI-HO-AVVERTITO'];
            if (tagInteressati.includes(mutation.target.tagName)) {
                observer.disconnect();
                punizioneColore();
                return;
            }
        }

        // --- 6. CONTROLLO TESTI (H1 o TI-HO-AVVERTITO) ---
        if (mutation.type === 'characterData' || mutation.type === 'childList') {
            const targetNode = mutation.target.parentElement || mutation.target;
            if (targetNode.tagName === 'H1' || targetNode.tagName === 'TI-HO-AVVERTITO') {
                observer.disconnect();
                punizioneStandard();
                break;
            }
        }
    }
});

// AVVIO FINALE
observer.observe(target, { attributes: true, childList: true, subtree: true, characterData: true });

setTimeout(() => {
    guardiaAttiva = true;
    console.log("%cIl guardiano è ora sveglio.", "color: #0f0; font-weight: bold;");
}, 1000);

