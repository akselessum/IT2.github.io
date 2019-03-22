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
  bredde: 30,
  hoyde: 30,
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
        canvas.height = 300;
        canvas.width = 300;
    }
    else if (vanskelighet.value === "Middels"){
        canvas.height = 480;
        canvas.width = 480;
    }
    else if (vanskelighet.value === "Høy"){
        canvas.height = 720 ;
        canvas.width = 720;
    }

    rader = canvas.width/tile.bredde;
    rekker = canvas.height/tile.hoyde;


    for(let i = 0; i < rekker; i++){
        tileArray.push([]);
        let ypos = 30 * i;

        for (let h = 0; h < rader; h++){

            let bombe;
            let bombeSjanse = Math.random();

            if(bombeSjanse > 0.8){//De to forige variablene og denne if'en randomizer en sjanse for at tilen som produseres har en bombe i seg, 20% sjanse.
                bombe = true;
            } else {
                bombe = false;
            }

            let xpos = 30 * h;

            let tile = {
                bredde: 30,
                hoyde: 30,
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
                && event.layerY > tilen.ypos && event.layerY < tilen.ypos + tile.hoyde){ //Sjekker om trykket er innenfor tilen

                if (tilen.bombe === false){//Hva som skjer hvis hva du trykket ikke er en bombe

                    let tileIndex = tileArray[i].indexOf(tilen);
                    let grenseBomber = 0;

                    if (i !== 0){
                        if (tileArray[i-1][tileIndex].bombe === true){//Sjekker om tilen over er en bombe
                            grenseBomber++;
                        }
                    }
                    if (i !== 0 && tileIndex !== rader-1) {
                        if (tileArray[i-1][tileIndex+1].bombe === true){//Sjekker om tilen diagonalt opp til høyre er en bomba
                            grenseBomber++;
                        }
                    }
                    if (i !== 0 && tileIndex !== 0){
                        if (tileArray[i-1][tileIndex-1].bombe === true){//Sjekker om diagonalt opp til venstre er en bombe
                            grenseBomber++;
                        }
                    }
                    if (tileIndex !== 0){
                        if (tileArray[i][tileIndex-1].bombe === true){//Sjekker om tilen til venstre er en bombe
                            grenseBomber++;
                        }
                    }
                    if (i !== rekker-1 && tileIndex !== 0){
                        if (tileArray[i+1][tileIndex-1].bombe === true){//Sjekker om tilen diagonalt ned til venstre er en bombe
                            grenseBomber++;
                        }
                    }
                    if (tileIndex !== rader-1){
                        if (tileArray[i][tileIndex+1].bombe === true){//Sjekker om tilen til høyre er en bombe
                            grenseBomber++;
                        }
                    }
                    if (i !== rekker-1){
                        if (tileArray[i+1][tileIndex].bombe === true){//Sjekker om tilen under er en bombe
                            grenseBomber++;
                        }
                    }
                    if (i !== rekker-1 && tileIndex !== rader-1){
                        if (tileArray[i+1][tileIndex+1].bombe === true){//Sjekker om tilen diagonalt ned til høyre er en bombe
                            grenseBomber++;
                        }
                    }

                    tilen.farge = "blue ";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);

                    ctx.font = "30px Arial";
                    ctx.fillStyle = "purple";
                    ctx.fillText(grenseBomber, tilen.xpos+5, tilen.ypos+25);


                } else {
                    tilen.farge = "red";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);
                    alert("du tapte nek");
                }

            }
        }
    }
}
/*if (event.layerX > tileArray[0][0].xpos && event.layerX < tileArray[0][0].xpos + tile.bredde
    && event.layerY > tileArray[0][0].ypos && event.layerY < tileArray[0][0].ypos + tile.hoyde){
        console.log("hei");
    }*/



