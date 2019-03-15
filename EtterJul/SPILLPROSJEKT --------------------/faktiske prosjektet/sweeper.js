//Referanser til HTML element
const btnStart = document.querySelector("#btnStart");
const vanskelighet = document.querySelector("#vanskelighet");
const canvas = document.querySelector("#canvas");
const ctx  = canvas.getContext("2d");

//Globale variabler
let rader;
let rekker;
let tileArray = [];

let tile = {
  bredde: 50,
  hoyde: 50,
  farge: "green",
  bombe: "False"
};

//Funksjonskall
btnStart.onclick = startFunc;
canvas.onclick = velgTile;

//Funksjonsdefinisjoner
function startFunc(){

    tileArray = []; //Passer på at man wiper hele arrayet hver gang man startet på nytt

    if (vanskelighet.value === "Lav"){
        canvas.height = 500;
        canvas.width = 500;
    }
    else if (vanskelighet.value === "Middels"){
        canvas.height = 750;
        canvas.width = 750;
    }
    else if (vanskelighet.value === "Høy"){
        canvas.height = 1000;
        canvas.width = 1000;
    }

    rader = canvas.width/tile.bredde;
    rekker = canvas.height/tile.hoyde;

    for(let i = 0; i < rader; i++){
        tileArray.push([]);
        let ypos = 50 * i;

        for (let h = 0; h < rekker; h++){

            let bombe;
            let bombeSjanse = Math.random();

            if(bombeSjanse > 0.9){
                bombe = true;
            } else {
                bombe = false;
            }

            let xpos = 50 * h;

            let tile = {
                bredde: 50,
                hoyde: 50,
                farge: "green",
                bombe: bombe,
                xpos: xpos,
                ypos: ypos
            };

            tileArray[i].push(tile);
            ctx.fillStyle = tile.farge;
            ctx.fillRect(tile.ypos, tile.xpos, tile.bredde-1, tile.hoyde-1);
        }
    }
}

//En for løkke som looper gjennon alle delene av arrayen og sjekker om .xpos og .ypos er innen 50px

function velgTile(event){

    for (let tilen in tileArray){
        for (let i = 0; i < rekker.length; i++){
        if (event.layerX > tilen.xpos && event.layerX < tilen.xpos + tile.bredde
            && event.layerY > tilen.ypos && event.layerY < tilen.ypos + tile.hoyde){
            console.log(tilen.bombe);
        } else {
            console.log("halla");
        }
    }
}

    /*if (event.layerX > tileArray[0][0].xpos && event.layerX < tileArray[0][0].xpos + tile.bredde
    && event.layerY > tileArray[0][0].ypos && event.layerY < tileArray[0][0].ypos + tile.hoyde){
        console.log("hei");
    }*/
}




