alert("Velkommen til Aksel sin quiz om Musikk greier, start ved å trykke OK. Eller så kan du sitte og nyte sangen.");
/*Arrayen kan virke rotete. Men i alle linjene har den satte verdien samme funksjon.
 0 er i. 1 er spørsmål. 2 er det riktige svaret. 3, 4, 5, 6 er svaralternativ. 7 er bildet for spørsmålet. 8, 9 og 10 er de feil svarene
  11 er lydfilen, */
let quiz = [
    [1, "Hvilken artist gjemmer seg bak Danny DeVito sitt fjes?",
        "KeyA", "Trippie Redd", "6ix9ine", "Famous Dex", "J. Cole", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD", "lydfiler/lalala.mp3"],
    [2, "Jeg har druknet en sang i filtere og distortion, kan du høre hvem det er sin sang?",
        "KeyC", "Jpegmafia", "Lil Pump", "Tyler, the Creator", "Perfume Genius", "bildefiler/deepfry.jpg", "KeyA", "KeyB", "KeyD", "lydfiler/tyler.mp3"],
    [3, "Odd Future var et musikalsk samarbeidsprosjekt, hvilken av disse artistene var IKKE med?",
        "KeyD", "Earl Sweatshirt", "Frank Ocean", "Syd Tha Kyd", "Steve Lacey", "bildefiler/odd.jpg", "KeyB", "KeyA", "KeyC", "lydfiler/odd.mp3"],
    [4, "I hvilket Kanye West album befinner sangen 'Runaway' seg?",
        "KeyB", "College Dropout", "My Beautiful Dark Twisted Fantasy", "The Life of Pablo", "808s & Heartbreak", "bildefiler/kanye.jpg", "KeyA", "KeyC", "KeyD", "lydfiler/kanye.mp3"],
    [5, "Hva het Frank Oceans 'break out' single?",
        "KeyB", "Swim Good", "Novacane", "Pink+White", "Crack Rock", "bildefiler/frank.jpg", "KeyA", "KeyC", "KeyD", "lydfiler/frank.mp3"],
    [6, "Hvilken av disse BROCKHAMPTON medlemmene er ikke lenger med i gruppen?",
        "KeyD", "Romil", "Joba", "Matt", "Ameer", "bildefiler/brock.jpg", "KeyB", "KeyC", "KeyA", "lydfiler/brock.mp3"],
    [7, "Her har jeg reversert en sang, hvilken?",
        "KeyB", "Kanye West - Ghost Town", "Pusha T - The Games We Play", "J.I.D - 151 RUM", "Jahn Teigen - Optimist", "bildefiler/mine.jpg", "KeyA", "KeyC", "KeyD", "lydfiler/pusha.mp3"],
    [8, "Hvilken norsk artist er kjent for blant annet sangen 'Kjekt å ha'?",
        "KeyC", "Åge Aleksandersen", "Jahn Teigen", "Øystein Sunde", "Lillebjørn Nilsen", "bildefiler/norge.jpg", "KeyB", "KeyA", "KeyD", "lydfiler/kalvik.mp3"],
    [9, "Hvilken av disse artistene var IKKE med på XXL Freshman Cypher 2016",
        "KeyA", "XXXTENTACION", "21 Savage", "Denzel Curry", "Lil Yachty", "bildefiler/cypher.jpg", "KeyB", "KeyC", "KeyD", "lydfiler/kodak.mp3"],
    [10, "Hvem er det som har laget denne sangen?",
        "KeyB", "Shabazz Palaces", "Jpegmafia", "Death Grips", "Injury Reserve", "bildefiler/death.jpg", "KeyA", "KeyC", "KeyD", "lydfiler/libtard.mp3"],
    [11, "I hvilket år ble hiphop klassikeren Madvillainy sluppet?",
        "KeyD", "1994", "2008", "1999", "2004", "bildefiler/madvillain.jpg", "KeyB", "KeyC", "KeyA", "lydfiler/mad.mp3"],
    [12, "Siste spørsmål: Her har jeg både reversert og manipulert en sang, hvilken?",
        "KeyA", "Jahn Teigen - Optimist", "Jahn Teigen - Mil etter mil", "Jahn Teigen - Vakreste som fins", "Jahn Teigen - Min første kjærlighet", "bildefiler/jahn.jpg", "KeyB", "KeyC", "KeyD", "lydfiler/jahn.mp3"],
];
/*Alle lydfilene er redigert i form av forkorting, samt er noen pitchet opp eller ned, noen er også mer grundig redigert.
 Alle bildefilene er endret i Phoyoshop til å passe pixelverdien til framen, for å spare plass, noen er og redigert grundigere.*/

let i = 0;
let f = 0;
let g = 0;
let h = 0;
let score = 0;
let spm = document.getElementById("spm");
let svarA = document.getElementById("svarA");
let svarB = document.getElementById("svarB");
let svarC = document.getElementById("svarC");
let svarD = document.getElementById("svarD");
let bilde = document.getElementById("bilde").src = quiz[i][7];
let lyd = document.getElementById("lyd");
document.body.style.backgroundColor = "rgba(173, 216, 239, 1)";

spm.innerHTML = quiz[i][1];
svarA.innerHTML = quiz[i][3];
svarB.innerHTML = quiz[i][4];
svarC.innerHTML = quiz[i][5];
svarD.innerHTML = quiz[i][6];

/*Onkeydown funksjonen sjekker hva du har svart, samt gir konsekvensene av feil svar. Den gir også boksene den røde eller grønne
 * fargen. Den endrer også alle elementene a quizen til å passe neste spørsmål, alle elementene er referert til via arrayen.*/
window.onkeydown = function mainFunc(event) {
    if (event.code === quiz[i][2]) {
        score++;
        i++;
        spm.innerHTML = quiz[i][1];
        svarA.innerHTML = quiz[i][3];
        svarB.innerHTML = quiz[i][4];
        svarC.innerHTML = quiz[i][5];
        svarD.innerHTML = quiz[i][6];

        bilde = document.getElementById("bilde").src = quiz[i][7];
        lyd.setAttribute("src", quiz[i][11]);

        const boks = document.querySelector(`div[data-code=${event.code}]`);
        boks.classList.add("spiller");
    } else if (event.code === quiz[i][8] || event.code === quiz[i][9] || event.code === quiz[i][10]) {
        i++;
        f++;
        spm.innerHTML = quiz[i][1];
        svarA.innerHTML = quiz[i][3];
        svarB.innerHTML = quiz[i][4];
        svarC.innerHTML = quiz[i][5];
        svarD.innerHTML = quiz[i][6];

        bilde = document.getElementById("bilde").src = quiz[i][7];
        lyd.setAttribute("src", quiz[i][11]);

        const boks = document.querySelector(`div[data-code=${event.code}]`);
        boks.classList.add("spiller2");
    }
};

/*Onkeyup funksjonen sjekker hovedsakelig om du er ferdig med quizen, hvor den gir de eventuell konsekvense av å enten
 ha svart alt riktig, eller om du har noen feil. Etterpå ser vi at den fjerner den rød/grønnfargen som ble gitt i onkeydown.
 Sist så ser vi while løkkene, som er forklart nederst.*/
window.onkeyup = function (event){
    if (i === 12) {
        i++;
        if (score < 12) {
        bilde = document.getElementById("bilde").src = "bildefiler/tommel.jpg";
        spm.innerHTML = "Det var alle spørsmålene, du fikk " + score + " riktig og " + f + " feil";
        svarA.innerHTML = "Helt";
        svarB.innerHTML = "Elendig";
        svarC.innerHTML = "Jobbet";
        svarD.innerHTML = "Skjerp deg";
        lyd.setAttribute("src", "lydfiler/kjipt.mp3");


    } else if (score === 12){
            bilde = document.getElementById("bilde").src = "bildefiler/smil.jpg";
            spm.innerHTML = "Du fikk alt riktig!";
            svarA.innerHTML = "Gucci";
            svarB.innerHTML = "Gang";
            svarC.innerHTML = "Gucci";
            svarD.innerHTML = "Gang";
            lyd.setAttribute("src", "lydfiler/gucci.mp3");
        }
    }

    const boks = document.querySelector(`div[data-code=${event.code}]`);
    boks.classList.remove("spiller");
    boks.classList.remove("spiller2");

    const colorString = window.getComputedStyle(document.body).backgroundColor;
    const match = /rgba?\((\d+),\s*(\d+),\s* (\d+)/gi.exec(colorString);

    while (g < f) {
        g++;
        let r = parseInt(match[1]);
        let t = parseInt(match[2]);
        let y = parseInt(match[3]);
        r = r + 20;
        t = t - 20;
        y = y - 20;
        document.body.style.backgroundColor = `rgba(${r},${t},${y},1)`;
    }
    while (h < score){
        h++;
        let r = parseInt(match[1]);
        let t = parseInt(match[2]);
        let y = parseInt(match[3]);
        r = r - 20;
        t = t + 10;
        y = y - 20;
        document.body.style.backgroundColor = `rgba(${r},${t},${y},1)`;
    }
};
/*While løkken samt de to konstantene over, gjør det slik at hver gang man entet skriver feil eller riktig så blir
bakgrunnsfargen rødere eller grønnere. Dette ble komplisert når jeg måtte referere til nettsidens konstant endrende bakgrunnsfarge,
noe som jeg gjør via colorString og match const'ene. */


















