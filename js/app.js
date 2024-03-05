// Informazioni preliminari del passeggero: età e chilometri da percorrere.

let distanza = document.getElementById("kmViaggio").value; //number
let eta = document.getElementById("etaPasseggero").value; //number


// Calcolo del costo del biglietto del treno
let costoBiglietto = kmViaggio*0.21; //number


// Calcolo del costo del bilgietto in base all'eta

let bigliettoMinori = costoBiglietto * 0.8; //number 
// Costo del biglietto per i  passeggeri con età inferiore ai 18 anni

let bigliettoAnziani = costoBiglietto * 0.6; //number
// Costo del biglietto per i  passeggeri con età superiore ai 65 anni

let bigliettoStandard = costoBiglietto; //number


// Console Log
if (etaPasseggero <18){
    console.log("Il costo del biglietto per i minori è: " + bigliettoMinori.toFixed(2) + " euro");
}

else if (etaPasseggero >65){
    console.log("Il costo del biglietto per gli anziani è: " + bigliettoAnziani.toFixed(2) + " euro");
}

else {
    console.log("Il costo del biglietto è: " + bigliettoStandard.toFixed(2) + " euro");
}