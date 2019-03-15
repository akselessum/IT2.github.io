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
        canvas.height = 500;
        canvas.width = 750;
    }
    else if (vanskelighet.value === "Høy"){
        canvas.height = 500 ;
        canvas.width = 1000;
    } //GJØR DE KVADRATISKE SÅ FUNKER DE SOM DE SKAL MED GRØNNFARGEN

    rader = canvas.width/tile.bredde;
    rekker = canvas.height/tile.hoyde;

    for(let i = 0; i < rekker; i++){
        tileArray.push([]);
        let ypos = 50 * i;

        for (let h = 0; h < rader; h++){

            let bombe;
            let bombeSjanse = Math.random();

            if(bombeSjanse > 0.8){
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


function velgTile(event){ //Disse to for loopene sjekker om den tilen du trykker på er bombe eller ei
    for (let i = 0; i < tileArray.length; i++){
        for (let tilen of tileArray[i]){

            if (event.layerX > tilen.xpos && event.layerX < tilen.xpos + tile.bredde
                && event.layerY > tilen.ypos && event.layerY < tilen.ypos + tile.hoyde){

                if (tilen.bombe === false){

                    tilen.farge = "blue ";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);

                } else {
                    alert("pang effekt");
                }

            }
        }
    }
}
/*if (event.layerX > tileArray[0][0].xpos && event.layerX < tileArray[0][0].xpos + tile.bredde
    && event.layerY > tileArray[0][0].ypos && event.layerY < tileArray[0][0].ypos + tile.hoyde){
        console.log("hei");
    }*/



