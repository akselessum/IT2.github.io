
let quiz = [
    [0, "Hvilken artist gjemmer seg bak Danny sitt fjes?", "KeyA"],
    [1, "EKSEMPELTEKST", "KeyB"],
    [4, "EKSEMPELTEKST", "KeyC"],
    [5, "EKSEMPELTEKST"],
    [6, "EKSEMPELTEKST"],
    [7, "EKSEMPELTEKST"],
    [8, "EKSEMPELTEKST"],
    [9, "EKSEMPELTEKST"],
    [10, "EKSEMPELTEKST"],
    [11, "EKSEMPELTEKST"],
    [12, "EKSEMPELTEKST"],

];

let i = 0;
let score = 0;
let spm = document.getElementById("spm");
spm.innerHTML = quiz[i][1];
window.onkeydown = function (event) {
    if (event.code === quiz[i][2]){
        score = score + 1;
    }
    i++;
    spm.innerHTML = quiz[i][1];
};
window.onkeydown = function (event) {
    if (event.code === quiz[i][2]){
        score = score + 1;
    }
    i++;
    spm.innerHTML = quiz[i][1];
};
window.onkeydown = function (event) {
    if (event.code === quiz[i][2]){
        score = score + 1;
    }
    i++;
    spm.innerHTML = quiz[i][1];
};



