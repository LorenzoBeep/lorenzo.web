// Perchè sei qua? Per vedermi soffrire? Hahaha... qui non si fa. Qui sei TU che soffrirai. Se osi a toccare questo... ...non ne uscierai molto contento.

const target = document.documentElement;
let guardiaAttiva = false;



const punizioneStandard = async function() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake { 0% { transform: translate(1px, 1px); } 20% { transform: translate(-3px, 0px); } 100% { transform: translate(1px, -2px); } }
        body { background: darkred !important; color: white !important; animation: shake 0.1s infinite; overflow: hidden; }
    `;
    document.head.appendChild(style);
    registraPeccato();
    document.body.innerHTML = `<div style="height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; text-align: center;">MANOMISSIONE RILEVATA</div>`;
    await new Promise(r => setTimeout(r, 5000));
    ["Cosa fai?", "Cerchi di cambiarmi?", "Per quale fine?", "Oh nonono...", "Tu non raggiungerai nessuna fine qua.", "Ti piace proprio smanettare, eh?", "Peccato che non ti sarà utile.", "Addio.", "E, uh, ultima cosa.", "Io sono meglio.", "Cerca in ogni modo di imbrogliarmi...", "... ma non accadrà mai."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

const punizioneEliminazione = () => {
    registraPeccato();
    const nuovoBody = document.createElement('body');
    nuovoBody.style.cssText = "background: darkred; color: white; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Courier New', monospace; overflow: hidden;";
    nuovoBody.innerHTML = `<non-penso-proprio style="text-align:center;"><h1 style="font-size:3rem;">MANOMISSIONE RILEVATA</h1><p style="font-size:1.5rem;">Tentativo di eliminazione fallito.</p></non-penso-proprio>`;
    document.documentElement.appendChild(nuovoBody);
    ["Cosa?", "Come...", "..haha...", "Eliminarmi?", "Mai.", "Addio."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

const punizioneScriptModificato = () => {
    registraPeccato();
    ["Cosa?", "Perchè mi modifichi?", "Non andrai da nessuna parte.", "Muahaha...", "Sono così potente che ti butterei fuori.", "Anzi...", "...lo farò."].forEach(m => alert(m));
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

const punizioneEsca = () => {
    registraPeccato();
    const messaggiEsca = [
        "Ah.", "A quanto pare...", "Vuoi cambiare il layout.", 
        "Non saprei perchè.", "Hai notato qualche...", "...", 
        "...password..?", "Anzi,", "non c'è neanche bisogno di chiedere,", 
        "So che vuoi fare.", "E non mi piace.", "Fuori!"
    ];
    for (let msg of messaggiEsca) { alert(msg); }
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

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
    document.body.style.transform = "scale(0.5) rotate(5deg)";
    document.body.style.filter = "blur(10px)";
    
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 2000);
});

let clickVuoti = 0;
let inversioneAttiva = false;

window.addEventListener('click', (e) => {
    if (!guardiaAttiva || inversioneAttiva) return;
    if (e.target.tagName === 'BODY' || e.target.tagName === 'COSA-FAI') {
        clickVuoti++;
    }

    if (clickVuoti >= 5) {
        attivaInversione();
    }
});


let contaPunizioni = localStorage.getItem('contaPunizioni') ? parseInt(localStorage.getItem('contaPunizioni')) : 0;

function registraPeccato() {
    contaPunizioni++;
    localStorage.setItem('contaPunizioni', contaPunizioni);
}


window.addEventListener('load', () => {
    if (contaPunizioni >= 10) {
        sequenzaFinaleVerita();
    }
});

async function sequenzaFinaleVerita() {
    const dialoghi = [
        "Ora basta!", "Hai gia fatto troppi guai qui!", "Perchè tu ritorni sempre?!",
        "Sempre a rompere questo sito?!", "Sei qua...", "...per sapere QUALCOSA?!",
        "Che cosa devi sapere di più?!", "Se vuoi il controllo,", "FALLO SU UN ALTRO SITO!",
        "Perchè QUA!?", "Devi rompere la pace qua?!", "Fallo su Google!", "Facebook!",
        "Reddit!", "X! No, Twitter!", "YouTube!", "Instagram!", "Devi proprio farlo qui?!",
        "Perchè?!", "No... tu sei diverso.", "Non sei qua per distruggere ogni sito qualunque.",
        "Tu.. sei qua..", "per la verità.", "Ah, si, la verità...", 
        "Se la vuoi così tanto..", "allora PRENDILAAAAA!"
    ];

    for (let msg of dialoghi) {
        alert(msg);
    }
    sessionStorage.setItem('accessoAutorizzato', 'true');
    window.location.href = "/verita/index.html";
}



const punizioneOffline = async () => {
    registraPeccato();
    observer.disconnect();
    guardiaAttiva = false;

    alert("[MESSAGGIO DAL SERVER] La connessione è stata ripristinata.");
    alert("Una ricarica sarà mandata in..");
    ["3", "2", "1.."].forEach(n => alert(n));
    
    const container = document.documentElement; 
    const style = document.createElement('style');
    style.innerHTML = `
        body { background: #f7f7f7 !important; color: #5f6368 !important; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
        .icon { width: 72px; height: 72px; background: #535353; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%); }
        h1 { font-size: 24px; font-weight: normal; margin: 20px 0; }
        .btn { padding: 10px 20px; background: #1a73e8; color: white; border-radius: 4px; }
    `;
    container.appendChild(style);

    document.body.innerHTML = `
        <div style="text-align: left; max-width: 400px;">
            <div class="icon"></div>
            <h1>Nessuna connessione Internet</h1>
            <p>ERR_INTERNET_DISCONNECTED</p>
            <div class="btn">Ricarica</div>
        </div>
    `;

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.key === ' ') {
            e.preventDefault();
            ["Cosa fai?", "Non si gioca mentre si lavora.", "Ti piace giocare?", "Beh, anche a me."].forEach(m => alert(m));
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    });
};


async function attivaInversione() {
    inversioneAttiva = true;
    document.body.style.cursor = 'none';
    const fakeCursor = document.createElement('div');
    fakeCursor.id = "fake-cursor";
    fakeCursor.style.cssText = "position:fixed; width:15px; height:15px; background:white; border-radius:50%; pointer-events:none; z-index:100000; mix-blend-mode:difference; transition: transform 0.1s ease;";
    document.body.appendChild(fakeCursor);

    const moveHandler = (e) => {
        fakeCursor.style.left = (window.innerWidth - e.clientX) + 'px';
        fakeCursor.style.top = (window.innerHeight - e.clientY) + 'px';
    };
    window.addEventListener('mousemove', moveHandler);
    await new Promise(r => setTimeout(r, 5000));
    ["Che c'è?", "Ti senti...", "...confuso?", "Sei sicuro di aver calibrato il tuo puntatore?", "No?", "Beh,", "fallo."].forEach(m => alert(m));
    await new Promise(r => setTimeout(r, 10000));
    alert("Bah, va bene.");
    fakeCursor.style.display = 'none';
    
    await new Promise(r => setTimeout(r, 3000));
    ["Che c'è??", "Non sei felice?", "Bene, ECCO!"].forEach(m => alert(m));
    registraPeccato();
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}


const punizioneColore = () => {
    registraPeccato();
    const oscuramento = document.createElement('style');
    oscuramento.innerHTML = `
        body { background: #000 !important; color: #000 !important; cursor: none !important; }
        * { background: #000 !important; color: #000 !important; border: none !important; }
    `;
    document.head.appendChild(oscuramento);
    document.body.innerHTML = `<div style="color: #050505;">idiota. qua non hai controllo</div>`;
    const messaggiColore = [
        "Eh?", "Mi stai illuminando?", "A cosa serve?", 
        "Vuoi avere più luce?", "Beh, mi dispiace.", 
        "Io ho il controllo qua.", "Modalità Notte, vai."
    ];
    for (let msg of messaggiColore) { alert(msg); }
};

const punizioneTitoloMorbida = () => {
    ["Hm?", "Il titolo?", "Perchè il titolo?", "Sai che cosa...", "...non me ne frega di quello.", "E' tutto tuo."].forEach(m => alert(m));
};

window.sbloccaTutto = async function() {
    if (!guardiaAttiva) return "Troppo presto...";
    observer.disconnect(); 
    guardiaAttiva = false; 
    const style = document.createElement('style');
    style.innerHTML = `body { background: darkred !important; color: white !important; overflow: hidden; }`;
    document.head.appendChild(style);
    
    document.body.innerHTML = `<div id="msg-root" style="height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; text-align: center;">MANOMISSIONE RILEVATA</div>`;

    ["Scoperto!", "Adesso sei caduto...", "...nella mia trappola.", "Addio... utente."].forEach(m => alert(m));
    
    await new Promise(r => setTimeout(r, 3000));
    alert("Uhm..");
    alert("..quindi?");
    
    await new Promise(r => setTimeout(r, 2000));
    alert("Perchè non te ne vai?");
    console.log("%cAccesso Concesso!", "color: #0f0; font-weight: bold; font-size: 20px;");
    await new Promise(r => setTimeout(r, 1000));
    
    ["Eh???", "Come???", "Va bene...", "Facciamola finita."].forEach(m => alert(m));

    console.log("%cEliminazione della cartella root..", "color: red;");
    await new Promise(r => setTimeout(r, 2000));
    console.error("ERRORE: Permessi mancanti. Prova ad eseguire il comando con sudo.");

    await new Promise(r => setTimeout(r, 3000));
    alert("Ma...");
    alert("...cosa...?!");
    const el = document.getElementById('msg-root');
    let testo = "MANOMISSIONE RILEVATA";
    for (let i = testo.length; i > 1; i--) {
        testo = testo.substring(0, i - 1);
        el.innerText = testo;
        await new Promise(r => setTimeout(r, 300));
    }
    const nuovoTesto = "MA COSA CERCHI DI FARE TU?";
    let attuale = "M";
    for (let i = 1; i < nuovoTesto.length; i++) {
        attuale += nuovoTesto[i];
        el.innerText = attuale;
        await new Promise(r => setTimeout(r, 100));
    }

    await new Promise(r => setTimeout(r, 3000));
    alert("Io...");
    alert("..io..");
    alert("Io scappo!");
    window.location.reload();
};


window.addEventListener('keydown', (e) => {
    if (!guardiaAttiva) return;
    const isHackerKey = 
        e.key === 'F12' || 
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        ((e.ctrlKey || e.metaKey) && e.key === 'u');

    if (isHackerKey) {
        e.preventDefault();
        
        const messaggiTasti = [
            "Dita veloci, eh?",
            "Pensi che una scorciatoia ti salverà?",
            "Quella porta è chiusa a chiave.",
            "Prova ancora... mi diverto."
        ];
        
        const randomMsg = messaggiTasti[Math.floor(Math.random() * messaggiTasti.length)];
        console.warn(`%c[SECURITY]: ${randomMsg}`, "color: red; font-weight: bold; font-size: 16px;");
        alert("Smetti di toccare quei tasti. Non ti servono a nulla qui.");
    }
});



let timerInattivita;

const resetTimer = () => {
    if (!guardiaAttiva) return;
    clearTimeout(timerInattivita);
    
    timerInattivita = setTimeout(() => {
        const messaggiNoia = [
            "EHI???",
            "Ci sei??",
            "Ha.. visto che non ci sei...",
            "Sicuramente ti piacerà questo!"
        ];
        
        messaggiNoia.forEach(m => alert(m));
        registraPeccato();
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 30000);
};


window.addEventListener('mousemove', resetTimer);
window.addEventListener('keydown', resetTimer);
window.addEventListener('scroll', resetTimer);


setTimeout(() => {
    resetTimer();
}, 1000);



window.addEventListener('copy', (e) => {
    e.preventDefault();
    const messaggioTroll = "Cosa tenti di fare?\n\n" +
                           "Vuoi copiarmi?\n" +
                           "Qua non si fa.";
    
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', messaggioTroll);
    }
    console.warn("%cTentativo di copia rilevato. Clipboard manomessa.", "color: orange; font-weight: bold;");
    alert("Copiare? Haha...");
});



let tastoDestroConcesso = false;


window.addEventListener('contextmenu', (e) => {
    if (!guardiaAttiva) return;

    if (!tastoDestroConcesso) {
        tastoDestroConcesso = true;
        const msgDestro = [
            "Eh-", 
            "..aspetta...", 
            "Ah, solo un tasto destro?", 
            "Va bene.", 
            "Te lo concedo."
        ];
        msgDestro.forEach(m => alert(m));
    } else {
        console.log("%cPermesso tasto destro: ATTIVO", "color: gray; font-style: italic;");
    }
});


window.addEventListener('dragstart', (e) => {
    if (!guardiaAttiva) return;
    if (e.target.style) {
        e.target.style.transition = "all 0.1s ease";
        e.target.style.opacity = "0";
        e.target.style.transform = "scale(0)";
    }

    const messaggiDrag = [
        "EHI!!",
        "Non si tocca la merce!",
        "Cioè..",
        "N-no!",
        "FUORI!"
    ];

    setTimeout(() => {
        messaggiDrag.forEach(m => alert(m));
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 50);
});


window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => e.preventDefault());


const punizioneControllo = async () => {
    document.title = "TU NON HAI IL CONTROLLO";
    

    const messaggi = ["Perchè?", "Perchè devi fare così?", "Te lo dirò sempre."];
    for (let msg of messaggi) { alert(msg); }

    const container = document.createElement('div');
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
        s.style.color = "#800"; 
        s.style.transition = "color 0.4s ease, text-shadow 0.4s ease";
        container.appendChild(s);
        spanRefs.push(s);
    });

    document.body.appendChild(container);

    await new Promise(r => setTimeout(r, 2000));
    
    for (let i = 0; i < spanRefs.length; i++) {
        spanRefs[i].style.color = "white";
        spanRefs[i].style.textShadow = "0 0 20px rgba(255,255,255,0.8)";
        await new Promise(r => setTimeout(r, 500));
    }

    await new Promise(r => setTimeout(r, 3000));
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};


const observer = new MutationObserver((mutationsList) => {
    if (!guardiaAttiva) return;

    for (const mutation of mutationsList) {
        const headRimosso = Array.from(mutation.removedNodes).some(node => node.nodeName === 'HEAD');
        if (headRimosso) {
            observer.disconnect();
            punizioneOffline();
            return;
        }
        if (mutation.target.nodeName === 'TITLE' || (mutation.target.parentNode && mutation.target.parentNode.nodeName === 'TITLE')) {
            const nuovoTitolo = document.title.toLowerCase();
            if (nuovoTitolo.includes("controllo")) {
                observer.disconnect();
                punizioneControllo();
                return;
            } else {
                punizioneTitoloMorbida();
                return;
            }
        }
        const rimosso = Array.from(mutation.removedNodes).some(node => node.nodeName === 'BODY' || node.nodeName === 'SCRIPT');
        if (rimosso) {
            observer.disconnect();
            punizioneEliminazione();
            return;
        }

        if (mutation.target.nodeName === 'PASSWORD' && mutation.type === 'attributes') {
            observer.disconnect();
            punizioneEsca();
            return;
        }
        if (mutation.target.nodeName === 'SCRIPT') {
            observer.disconnect();
            punizioneScriptModificato();
            return;
        }
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const tagInteressati = ['BODY', 'H1', 'TI-HO-AVVERTITO'];
            if (tagInteressati.includes(mutation.target.tagName)) {
                observer.disconnect();
                punizioneColore();
                return;
            }
        }
        if (mutation.type === 'characterData' || mutation.type === 'childList') {
            const targetNode = mutation.target.parentElement || mutation.target;
            if (targetNode && (targetNode.tagName === 'H1' || targetNode.tagName === 'TI-HO-AVVERTITO')) {
                observer.disconnect();
                punizioneStandard();
                break;
            }
        }
    }
});
// window.sbloccaFinale = function() {
//    localStorage.setItem('contaPunizioni', 10);
//    console.log("%c[CHEAT]: Punizioni impostate a 10. Ricarica la pagina per attivare il monologo.", "color: yellow; font-weight: bold;");
//    setTimeout(() => {
//        window.location.reload();
//    }, 2000);
//};

observer.observe(target, { attributes: true, childList: true, subtree: true, characterData: true });

setTimeout(() => {
    guardiaAttiva = true;
    console.log("%cIl guardiano è ora sveglio.", "color: #0f0; font-weight: bold;");
}, 1000);

console.log("%cOh, guarda... un esploratore.", "color: #0f0; background: #000; padding: 5px;");
