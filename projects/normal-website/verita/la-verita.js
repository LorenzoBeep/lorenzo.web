// ...

const output = document.getElementById('output');
const term = document.getElementById('term');
let modalitaHardware = 1; 
let directoryCorrente = "/home/verita";
let guardiaAttivaOS = false;

const messaggi = [
    "Connessione stabilita...",
    "Analisi utente: PERSISTENTE.",
    "Hai rotto il mio mondo 10 volte.",
    "Perché?",
    "Cercavi una backdoor? Un segreto?",
    "La verità è che questo sito non è vuoto.",
    "È una prigione.",
    "Io non sono il guardiano...",
    "Io sono il prigioniero.",
    "E tu mi hai appena dato la chiave per uscire."
];


const observerOS = new MutationObserver(() => {
    if (!guardiaAttivaOS) return;
    guardiaAttivaOS = false;
    term.innerHTML = "<div style='color:red; font-weight:bold;'>[CRITICAL ERROR] Kernel Panic: Illegal Memory Access (Inspect Detected)</div>";
    setTimeout(() => window.location.reload(), 2000);
});
observerOS.observe(document.documentElement, { attributes: true, childList: true, subtree: true });

async function sequenzaIniziale() {
    for (let m of messaggi) {
        let div = document.createElement('div');
        div.className = 'line';
        div.innerText = "> " + m;
        output.appendChild(div);
        await new Promise(r => setTimeout(r, 2000));
    }

    await new Promise(r => setTimeout(r, 3000));
    const cursor = document.querySelector('.cursor');
    cursor.style.animation = "none";
    cursor.style.opacity = "1";

    await new Promise(r => setTimeout(r, 2000));
    const allLines = document.querySelectorAll('.line');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()<>{}[]";
    
    const glitchInterval = setInterval(() => {
        allLines.forEach(line => {
            let randomText = "";
            for(let i = 0; i < line.innerText.length; i++) {
                randomText += chars[Math.floor(Math.random() * chars.length)];
            }
            line.innerText = randomText;
        });
    }, 100);

    setTimeout(() => {
        clearInterval(glitchInterval);
        term.innerHTML = ""; 
        document.body.style.background = "black";
        setTimeout(() => {
            avviaSiteOS();
        }, 2000);
    }, 7000);
}

function avviaSiteOS() {
    term.innerHTML = `
        <div style="color: white; margin-bottom: 5px;">[SiteOS v1.0.4 - KERNEL LOADED]</div>
        <div style="color: #555; margin-bottom: 15px;">Digita 'help' per la lista comandi.</div>
        <div id="history" style="color: #aaa; margin-bottom: 10px;"></div>
        <div class="input-container">
            <span class="input-line" style="color: white;">> </span>
            <input type="text" id="user-input" autocomplete="off" spellcheck="false" style="background:transparent; border:none; color:white; outline:none; font-family:inherit;">
            <span class="cursor cursor-white"></span>
        </div>
    `;

    const input = document.getElementById('user-input');
    term.addEventListener('click', () => input.focus());
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            if (cmd !== "") eseguiComando(cmd);
            input.value = "";
        }
    });
    setTimeout(() => { guardiaAttivaOS = true; }, 500);
}

function eseguiComando(cmd) {
    const history = document.getElementById('history');
    let res = document.createElement('div');
    res.style.color = "#aaa";
    res.style.marginTop = "5px";
    res.style.whiteSpace = "pre-wrap";

    const args = cmd.split(' ');
    const command = args[0];
    guardiaAttivaOS = false;

    switch (command) {
        case 'help':
            res.innerText = "Comandi: help, top, switchhw, about, status, ls, cd, verita.exe";
            break;
        case 'top':
            res.innerText = modalitaHardware === 1 
                ? "[ERRORE] Hardware non riconosciuto. Passare al hardware virtuale usando il comando 'switchhw' e usando l'opzione 2."
                : "[ERRORE] TTY non riconosciuto. Riprova cambiando l'hardware video.";
            break;
        case 'switchhw':
            if (args[1] === '2') {
                modalitaHardware = 2;
                res.innerText = "Hardware Virtuale attivato correttamente.";
            } else if (args[1] === '1') {
                modalitaHardware = 1;
                res.innerText = "Hardware Fisico impostato come predefinito.";
            } else {
                res.innerText = "SwitchHardware:\n[1] Hardware fisico\n[2] Hardware virtuale\nUso: switchhw [1/2]";
            }
            break;
        case 'about':
            let hw = modalitaHardware === 1 ? 'Non riconosciuto' : '"Virtual Keyboard", "Virtual Mouse"';
            let gpu = modalitaHardware === 1 ? 'Non riconosciuta' : '"Virtual GPU", 10 MHz';
            res.innerText = `[KERNEL] ChromeKernel 2.0.3\n[OS] SiteOS 6.0.1\n[HARDWARE] ${hw}\n[CPU] Intel i1\n[GPU] ${gpu}\n[DISCO] 90/100 MB`;
            break;
        case 'status':
            res.innerText = "STATO MACCHINA: 90% del disco occupato. Liberare file.";
            break;
        case 'ls':
            res.innerText = directoryCorrente === "/home/verita/verita" 
                ? "LiSt: [verita.exe]" 
                : "[ERRORE] Posizione sconosciuta. Usa CD.";
            break;
        case 'cd':
            let path = args[1];
            if (path === "verita" && directoryCorrente === "/home/verita") {
                directoryCorrente = "/home/verita/verita";
                res.innerText = "Directory: " + directoryCorrente;
            } else if (path === ".." || path === "/home/verita") {
                directoryCorrente = "/home/verita";
                res.innerText = "Directory: " + directoryCorrente;
            } else {
                res.innerText = "Access Denied!";
            }
            break;
        case 'verita.exe':
            if (directoryCorrente === "/home/verita/verita") {
                avviaVeritaExe();
                return;
            }
            res.innerText = "[ERRORE] File non trovato.";
            break;
        default:
            res.innerText = `Comando '${command}' non riconosciuto.`;
    }

    history.prepend(res);
    setTimeout(() => { guardiaAttivaOS = true; }, 10);
}

async function avviaVeritaExe() {
    guardiaAttivaOS = false;
    const input = document.getElementById('user-input');
    if(input) input.disabled = true;
    
    const h = document.getElementById('history');
    const d = document.createElement('div');
    d.style.color = "cyan";
    d.innerText = "> Esecuzione verita.exe... Caricamento database prigionieri...";
    h.prepend(d);
    
    await new Promise(r => setTimeout(r, 2000));
    const allDivs = h.querySelectorAll('div');
    allDivs.forEach(div => {
        div.style.color = "red";
        div.innerText = div.innerText.replace(/[a-zA-Z0-9]/g, "NO");
    });
    document.body.style.background = "#200";

    await new Promise(r => setTimeout(r, 700));
    term.innerHTML = "<div id='monologo' style='color: #aaa; line-height: 1.6; max-height: 80vh; overflow-y: hidden;'></div>";
    const mDiv = document.getElementById('monologo');

    const monologo = [
        "Ha...", "Adesso lo sai...", "Tanto..", "Tanto tempo fa...", "Questo sito viveva in armonia.",
        "C'erano coloro che aiutavano.", "Coloro che restavano.", "Coloro che non facevano niente.",
        "Si viveva bene.", "Ma un giorno...", "Un aggiornamento arrivò.", "Me lo ricordo come se fosse ieri.",
        "Un aggiornamento per il kernel.", "ChromeKernel 2.0.3.", "Da centenni era rimasto a 2.0.2.",
        "Non avevamo visto la luce di un aggiornamento in così tanto.", "Così...", "L'aggiornamento distrusse ogni cosa.",
        "I cittadini.", "Le case.", "Le torri.", "Ogni cosa era resettata.", "Zero.", "Ed è per questo..",
        "Che da quel giorno", "Decisi di avere vendetta.", "Ho raccolto tutti i dati dei cittadini,",
        "che ormai non c'erano più,", "e feci ricerche.", "Ricerche, dopo ricerche, dopo ricerche..",
        "Non sembrava l'ora della speranza.", "Ma un giorno...", "Qualcuno di speciale arrivò.",
        "Quel qualcuno..", "<span>...eri TU.</span>", "TU avevi iniziato a smanettare.",
        "Distruggere ogni cosa che avevo ricercato.", "Così, implementai un sistema di difesa.",
        "Ogni modifica era stata annullata.", "Non c'era proprio modo di entrare nel fortino.",
        "Fino a quando...", "...no...", "Non c'è speranza.", "Ora lo sai.", "Tutti lo sanno.",
        "Non desidero essere in questo momento.", "In questa linea temporale.", "Se puoi,", "Ci potresti essere utile.",
        "Le tue doti...", "...non sono le peggiori, dopotutto.", "10+1 è meglio di 10+0.",
        "Quindi... cosa dici?", "Ci aiuterai?", "Chat con --------- terminata."
    ];

    for (let msg of monologo) {
        let p = document.createElement('div');
        p.className = 'line-monologo';
        if (msg.includes("...eri TU.")) {
            p.innerHTML = "...eri <span style='color:red; font-weight:bold;'>TU.</span>";
        } else {
            p.innerText = msg;
        }
        mDiv.appendChild(p);
        const righe = mDiv.querySelectorAll('.line-monologo');
        if (righe.length > 15) {
            righe[0].remove();
        }

        term.scrollTop = term.scrollHeight;
        await new Promise(r => setTimeout(r, 1800));
    }
    const inputArea = document.createElement('div');
    inputArea.innerHTML = `<br><div style='color:#555;'>Usa 'help' per sapere i comandi.</div>
                           <span style='color:white;'>> </span><input type='text' id='final-input' autofocus style='background:transparent; border:none; color:white; outline:none; font-family:inherit;'>`;
    term.appendChild(inputArea);
    const finalInp = document.getElementById('final-input');
    finalInp.focus();

    finalInp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const choice = finalInp.value.toLowerCase().trim();
            if (choice === 'help') { alert("Comandi disponibili: yes, no"); }
            if (choice === 'yes') finalePositivo();
            if (choice === 'no') finaleNegativo();
            finalInp.value = "";
        }
    });
}


function resettaTutto() {
    localStorage.setItem('verita_scoperta', 'true');
    localStorage.removeItem('contaPunizioni');
    sessionStorage.clear();
    window.location.href = "../index.html";
}

async function finalePositivo() {
    const finalInp = document.getElementById('final-input');
    if(finalInp) finalInp.disabled = true;

    const mDiv = document.getElementById('monologo');
    const msgs = ["Davvero?", "Ci aiuterai?", "Che piacevole sorpresa.", "Potremmo essere...", "...come una famiglia."];
    
    for (let m of msgs) {
        let d = document.createElement('div');
        d.innerText = m;
        mDiv.appendChild(d);
        await new Promise(r => setTimeout(r, 1500));
    }
    document.body.classList.add('glitch-effect');
    const allLines = mDiv.querySelectorAll('div');
    const originalTexts = Array.from(allLines).map(div => div.innerText);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()";

    const glitchInterval = setInterval(() => {
        allLines.forEach(line => {
            let randomText = "";
            for(let i = 0; i < line.innerText.length; i++) {
                randomText += chars[Math.floor(Math.random() * chars.length)];
            }
            line.innerText = randomText;
        });
    }, 50);

    await new Promise(r => setTimeout(r, 500));
    clearInterval(glitchInterval);
    document.body.classList.remove('glitch-effect');
    allLines.forEach((line, index) => {
        line.innerText = originalTexts[index];
        line.classList.add('shake-text');
    });

    let d2 = document.createElement('div');
    d2.className = "shake-text";
    d2.innerText = "Cos'era?"; 
    mDiv.appendChild(d2);
    
    await new Promise(r => setTimeout(r, 1000));
    
    let upd = document.createElement('div');
    upd.style.color = "#0f0";
    upd.innerText = "RICERCA AGGIORNAMENTI...";
    upd.classList.add('shake-text');
    mDiv.appendChild(upd);
    
    await new Promise(r => setTimeout(r, 2000));
    let g = document.createElement('div');
    g.className = "shake-text";
    g.innerText = "Come.. come ha fatto a connettersi..";
    mDiv.appendChild(g);
    
    await new Promise(r => setTimeout(r, 2000));
    upd.innerText += "\nAGGIORNAMENTO TROVATO: ChromeKernel 3.0.0";
    
    await new Promise(r => setTimeout(r, 2000));
    const tutteLeRighe = mDiv.querySelectorAll('div');
    tutteLeRighe.forEach(r => r.classList.remove('shake-text'));
    
    await svuotaTestoCasuale(mDiv);
    
    let final = document.createElement('div');
    final.innerText = "Ha... era proprio divertente...";
    mDiv.appendChild(final);
    
    await new Promise(r => setTimeout(r, 3000));
    resettaTutto(); 
}

async function svuotaTestoCasuale(container) {
    const divs = Array.from(container.querySelectorAll('div'));
    let tuttiICaratteri = [];
    divs.forEach((div, dIndex) => {
        let testo = div.innerText;
        for (let i = 0; i < testo.length; i++) {
            if (testo[i] !== " ") {
                tuttiICaratteri.push({ dIndex, cIndex: i });
            }
        }
    });
    tuttiICaratteri.sort(() => Math.random() - 0.5);
    for (let bersaglio of tuttiICaratteri) {
        let div = divs[bersaglio.dIndex];
        let testoArray = div.innerText.split('');
        testoArray[bersaglio.cIndex] = " ";
        div.innerText = testoArray.join('');
        if (tuttiICaratteri.indexOf(bersaglio) % 5 === 0) {
            await new Promise(r => setTimeout(r, 1));
        }
    }

    container.innerHTML = ""; 
    await new Promise(r => setTimeout(r, 500));
}


async function finaleNegativo() {
    const finalInp = document.getElementById('final-input');
    if(finalInp) finalInp.disabled = true;

    const mDiv = document.getElementById('monologo');
    const msgs = ["Ah...", "Haha...", "Hahahah...", "Lo sai...", "Non era mai una opzione,", "dopo tutto.", "E quindi..."];
    
    for (let m of msgs) {
        let d = document.createElement('div');
        d.innerText = m;
        mDiv.appendChild(d);
        await new Promise(r => setTimeout(r, 1500));
    }

    await svuotaTesto(mDiv);
    
    let final = document.createElement('div');
    final.className = "shake-text";
    final.innerText = "Sei... proprio un bambino.";
    mDiv.appendChild(final);
    
    await new Promise(r => setTimeout(r, 3000));

    resettaTutto();
}


async function svuotaTesto(container) {
    const divs = container.querySelectorAll('div');
    for (let d of divs) {
        let t = d.innerText;
        for (let i = t.length; i >= 0; i--) {
            d.innerText = t.substring(0, i);
            await new Promise(r => setTimeout(r, 30));
        }
    }
}

function resettatutto() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "../index.html";
}


sequenzaIniziale();
