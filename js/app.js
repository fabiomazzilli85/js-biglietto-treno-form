// Informazioni preliminari del passeggero: età e chilometri da percorrere.

let distanzaEl = document.getElementById("kmViaggio"); // element
let etaEl = document.getElementById("etaPasseggero"); // element

const bottoneInvio = document.getElementById('calcolaBiglietto');

bottoneInvio.addEventListener('click', function() {

    let eta = parseInt(etaEl.value); // number
    let kmViaggio = parseFloat(distanzaEl.value); // float

    console.log(eta);

    // Variabili
    let costoBiglietto = kmViaggio * 0.21; // Calcolo del costo del biglietto - float

    // Calcolo del costo del biglietto in base all'età
    let bigliettoMinori = costoBiglietto * 0.8; // Costo del biglietto per i passeggeri con età inferiore ai 18 anni
    let bigliettoAnziani = costoBiglietto * 0.6; // Costo del biglietto per i passeggeri con età superiore ai 65 anni
    let bigliettoStandard = costoBiglietto; // Costo del biglietto per i passeggeri con età compresa tra 18 e 65 anni

    // Calcolo e visualizzazione del costo del biglietto
    if (eta < 18) {
      console.log("Il costo del biglietto per i minori è: " + bigliettoMinori.toFixed(2) + " euro");
    } else if (eta > 65) {
      console.log("Il costo del biglietto per gli anziani è: " + bigliettoAnziani.toFixed(2) + " euro");
    } else {
      console.log("Il costo del biglietto è: " + bigliettoStandard.toFixed(2) + " euro");
    }
  });