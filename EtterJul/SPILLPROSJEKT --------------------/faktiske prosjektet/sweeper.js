//Referanser til HTML element
const btnStart = document.querySelector("#btnStart");
const vanskelighet = document.querySelector("#vanskelighet");
const canvas = document.querySelector("#canvas");
const btnHjelp = document.querySelector("#hjelp");
const ctx  = canvas.getContext("2d");

//Globale variabler
let rader;
let rekker;
let riktigflagg = 0;
let bomberTotalt = 0;
let tileArray = [];
let tile = {
  bredde: 30,
  hoyde: 30,
  farge: "black",
  bombe: "False"
};

//Funksjonskall
btnStart.onmousedown = startFunc;
btnHjelp.onclick = hvordanSpille;
canvas.onmousedown = velgTile;
canvas.oncontextmenu = hoyreKlikkMute;

//Funksjonsdefinisjoner
function hoyreKlikkMute(){//Fjerner at høyreklikk åpner en meny når man høyreklikker på canvas
    return false;
}

function hvordanSpille(){
    alert("Venstreklikk for å åpne en tile, høyreklikk for å markere en bombe. Du vinner ved å markere alle bombene. Start med å markere deg et lite område. Hvis du treffer bomber i starten, ignorer det.")
}

function startFunc(){

    tileArray = []; //Passer på at man wiper hele arrayet og de "0 variablene" hver gang man startet på nytt
    bomberTotalt = 0;
    riktigflagg = 0;

    if (vanskelighet.value === "Lav"){//Vanskelighetsgradene mine er definert i forhold til størrelse på brett. Koden funker relativt for tilfeldige størrelser, så lenge de passer inn i 30-gangeren.
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
    rekker = canvas.height/tile.hoyde;//Bruker jeg for å systematisere. Ikke nødvendig. Men gjør det relativt til vanskelighetsgrad


    for(let i = 0; i < rekker; i++){//For hver eneste rad så pusher man inn et tomt array.
        tileArray.push([]);
        let ypos = 30 * i;//Flytter arrayene 30px ned for hver som skapes

        for (let h = 0; h < rader; h++){//Looper gjennom og produserer "tile" objekter inni arrayen for hvor stort brettet er

            let bombe;
            let bombeSjanse = Math.random();

            if(bombeSjanse > 0.8){//De to forige variablene og denne if'en randomizer en sjanse for at tilen som produseres har en bombe i seg, 20% sjanse.
                bombe = true;
                bomberTotalt++;
            } else {
                bombe = false;
            }

            let xpos = 30 * h;

            let tile = {//Produserer tiles med konstant økene xpos og ypos
                bredde: 30,
                hoyde: 30,
                farge: "black",
                bombe: bombe,
                xpos: xpos,
                ypos: ypos
            };

            tileArray[i].push(tile);//For hver rad-array pusher vi inn en "rekke" mengde tiles
            ctx.fillStyle = tile.farge;
            ctx.fillRect(tile.ypos, tile.xpos, tile.bredde-1, tile.hoyde-1);

        }
    }
}


function velgTile(event){//Disse to for loopene sjekker hva du har trykket på ved å loope gjennom hele arrayen

    for (let i = 0; i < tileArray.length; i++){//Looper gjennom arrayene for rader
        for (let tilen of tileArray[i]){//Looper gjennom hvert objekt innen hvert "i" array

            if (event.layerX > tilen.xpos && event.layerX < tilen.xpos + tile.bredde
                && event.layerY > tilen.ypos && event.layerY < tilen.ypos + tile.hoyde){ //Sjekker om trykket er innenfor tilen

                if (event.which === 1){//Hvis klikket er et venstreklikk

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

                    tilen.farge = "white";//Denne bolken redisigner tilen til å være hvit med tallet på grensende bomber
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(grenseBomber, tilen.xpos+6, tilen.ypos+25);



                } else {//Hva som skjer hvis tilen er en bombe
                    tilen.farge = "red";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);
                    alert("Er du ærlig med deg selv så starter du nå på nytt. Men du kan fortsette.");
                }

            } else if (event.which === 3){//Hvis klikket er et høyreklikk. Dette gjør man for å markere det man tror er bomber
                if (tilen.bombe === true){//Hvis det du markerte er en bombe
                    riktigflagg++;

                    tilen.farge = "magenta";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);

                } else {//Hvis det du markerte ikke er en bombe

                    tilen.farge = "magenta";
                    ctx.fillStyle = tilen.farge;
                    ctx.fillRect(tilen.xpos, tilen.ypos, tile.bredde-1, tile.hoyde-1);
                }

                }
                if (riktigflagg === bomberTotalt){//Dette er win conditionen.
                    alert("Du vant! Alle bomber er markert!")
                }
            }
        }
    }
}



/*if (event.layerX > tileArray[0][0].xpos && event.layerX < tileArray[0][0].xpos + tile.bredde
    && event.layerY > tileArray[0][0].ypos && event.layerY < tileArray[0][0].ypos + tile.hoyde){
        console.log("hei");
    }*/



