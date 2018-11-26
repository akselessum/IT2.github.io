
/*Arrayen kan virke rotete. Men i alle linjene har den satte verdien samme funksjon.
 0 er i. 1 er spørsmål. 2 er det riktige svaret. 3, 4, 5, 6 er svaralternativ. 7 er bildet for spørsmålet. 8, 9 og 10 er de feil svarene */
let quiz = [
    [1, "Hvilken artist gjemmer seg bak Danny sitt fjes?",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [2, "EKSEMPELTEKST",
        "KeyB", "Jawh", "Yooho", "1738", "heywhatsuphello", "bildefiler/bag.jpg", "KeyA", "KeyC", "KeyD"],
    [3, "EKSEMPELTEKST",
        "KeyC", "Leet", "Yeet", "skeet", "repeat", "bildefiler/bread.jpg", "KeyB", "KeyA", "KeyD"],
    [4, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/danny.gif", "KeyB", "KeyC", "KeyD"],
    [5, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [6, "EKSEMPELTEKST",
        "KeyA", "Gucci Gang", "Gucci Gang", "Gucci Gang", "Unnslipp marerittet", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [7, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [8, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [9, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [10, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],
    [11, "EKSEMPELTEKST",
        "KeyA", "Trippie Bread", "Tekashi", "Jkøk", "Bendrick Babar", "bildefiler/bread.jpg", "KeyB", "KeyC", "KeyD"],

];

let i = 0;
let score = 0;
let spm = document.getElementById("spm");
let svarA = document.getElementById("svarA");
let svarB = document.getElementById("svarB");
let svarC = document.getElementById("svarC");
let svarD = document.getElementById("svarD");
let bilde = document.getElementById("bilde").src = quiz[i][7];

spm.innerHTML = quiz[i][1];
svarA.innerHTML = quiz[i][3];
svarB.innerHTML = quiz[i][4];
svarC.innerHTML = quiz[i][5];
svarD.innerHTML = quiz[i][6];


window.onkeydown = function mainFunc(event) {
    if (event.code === quiz[i][2]) {
        score = score + 1;
        i++;
        spm.innerHTML = quiz[i][1];
        svarA.innerHTML = quiz[i][3];
        svarB.innerHTML = quiz[i][4];
        svarC.innerHTML = quiz[i][5];
        svarD.innerHTML = quiz[i][6];
        bilde = document.getElementById("bilde").src = quiz[i][7];
    } else if (event.code === quiz[i][8] || event.code === quiz[i][9] || event.code === quiz[i][10]) {
        i++;
        spm.innerHTML = quiz[i][1];
        svarA.innerHTML = quiz[i][3];
        svarB.innerHTML = quiz[i][4];
        svarC.innerHTML = quiz[i][5];
        svarD.innerHTML = quiz[i][6];
        bilde = document.getElementById("bilde").src = quiz[i][7];
    }
};
window.onkeyup = function (){
  if (i === 11){
      alert("Det var alle spørsmålene, du fikk " + score + " spørsmål riktig!");
  }
};








