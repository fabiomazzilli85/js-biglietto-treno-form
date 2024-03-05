function verificaPrezzo() {

    const distanza = parseFloat(document.getElementById("kmViaggio").value);
    const etaPasseggero = parseInt(document.getElementById("etaPasseggero").value);    


    const costoBase = 0.21 * distanza; // Number

// Se il passeggero ha meno di 18 anni, pagherà un biglietto con lo sconto del 20%. Se il passeggero ha più di 65 anni pagherà un biglietto con lo sconto del 40%. 
// Chi non rietra in queste due categorie, pagherà il biglietto standard. 

    let costoBiglietto;
    if (etaPasseggero < 18) {
        costoBiglietto = costoBase * 0.8;
    } else if (etaPasseggero > 65) {
        costoBiglietto = costoBase * 0.6; 
    } else {
        costoBiglietto = costoBase;
    }
}