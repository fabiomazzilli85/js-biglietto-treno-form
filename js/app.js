// // Informazioni preliminari del passeggero: età e chilometri da percorrere.

// let distanzaEl = document.getElementById("kmViaggio"); // element
// let etaEl = document.getElementById("etaPasseggero"); // element

// const bottoneInvio = document.getElementById('calcolaBiglietto');

// bottoneInvio.addEventListener('click', function() {

//     let eta = parseInt(etaEl.value); // number
//     let kmViaggio = parseFloat(distanzaEl.value); // float

//     console.log(eta);

//     // Variabili
//     let costoBiglietto = kmViaggio * 0.21; // Calcolo del costo del biglietto - float

//     // Calcolo del costo del biglietto in base all'età
//     let bigliettoMinori = costoBiglietto * 0.8; // Costo del biglietto per i passeggeri con età inferiore ai 18 anni
//     let bigliettoAnziani = costoBiglietto * 0.6; // Costo del biglietto per i passeggeri con età superiore ai 65 anni
//     let bigliettoStandard = costoBiglietto; // Costo del biglietto per i passeggeri con età compresa tra 18 e 65 anni

//     // Calcolo e visualizzazione del costo del biglietto
//     if (eta < 18) {
//       console.log("Il costo del biglietto per i minori è: " + bigliettoMinori.toFixed(2) + " euro");
//     } else if (eta > 65) {
//       console.log("Il costo del biglietto per gli anziani è: " + bigliettoAnziani.toFixed(2) + " euro");
//     } else {
//       console.log("Il costo del biglietto è: " + bigliettoStandard.toFixed(2) + " euro");
//     }

    document.getElementById("calcolaPrezzoButton").addEventListener("click", function() {
      calcolaPrezzo();
    });

    function calcolaPrezzo() {
      let select = document.getElementById("selectPasseggero");
      let selectedOption = select.options[select.selectedIndex].value;
      let kmViaggio = parseFloat(document.getElementById("kmViaggio").value);
      let prezzoBase = kmViaggio * 0.21; // Costo base del biglietto per km

      let prezzo;

      // Calcola il prezzo del biglietto in base all'opzione selezionata
      switch(selectedOption) {
        case "minorenne":
          prezzo = prezzoBase * 0.8; // Applica lo sconto del 20% per i minorenni
          break;
        case "over65":
          prezzo = prezzoBase * 0.6; // Applica lo sconto del 40% per gli over 65
          break;
        default:
          prezzo = prezzoBase; // Nessuno sconto per il passeggero standard
      }

      document.getElementById("prezzoBiglietto").innerText = "Prezzo del biglietto: " + prezzo.toFixed(2) + " €";
    }