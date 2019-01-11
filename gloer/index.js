
const saldo = document.getElementById("saldo");
const settInn = document.getElementById("settInn");
const taUt = document.getElementById("taUt");
const innBtn = document.getElementById("innBtn");
const utBtn = document.getElementById("utBtn");
const avsender = document.getElementById("avsender");
const mottaker = document.getElementById("mottaker");
const historikk = document.getElementById("historikk");

let saldoMengde = 0;
let transObjekt =
    {mengde: 0, vei: [] };



innBtn.onclick = function (){
    saldoMengde = saldoMengde + Number(settInn.value);
    saldo.innerHTML = saldoMengde + "kr";
    transObjekt.mengde = settInn.value;
    transObjekt.vei = ["mottok","fra", avsender.value];
    info();
};
utBtn.onclick = function (){
  saldoMengde = saldoMengde - Number(taUt.value);
  saldo.innerHTML = saldoMengde + "kr";
  transObjekt.mengde = taUt.value;
    transObjekt.vei = ["sendte","til", mottaker.value];
  info();
};


function  info() {

    historikk.innerHTML += `<li> Du ${transObjekt.vei[0]} ${transObjekt.mengde}kr ${transObjekt.vei[1]} ${transObjekt.vei[2] }  </li>`

}

