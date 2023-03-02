const inputDom = document.querySelector("#parola");
const btn = document.querySelector("#btn");

const risultatoDom = document.querySelector("#risultato");

function verificaPalindroma(parola) {
    let reversed = [];

    //tolgo gli spazi e punteggiatura
    //metto tutto in minuscolo cosi riesco a controllare anche le frasi
    let parolaSenzaSpazi = parola.split(" ").join("").toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    //creo un array con la parola al contrario
    for(let i = parolaSenzaSpazi.length; i >= 0; i--) {
        reversed.push(parolaSenzaSpazi[i]);
    }

    // controllo se la parola e uguale alla parola inversata
    if(reversed.join("") == parolaSenzaSpazi) {
        return true;
    } else {
        return false;
    }

}

btn.addEventListener('click', function() {

    if(verificaPalindroma(inputDom.value)) {
        risultatoDom.innerHTML = `${inputDom.value} è palindroma`;
    } else {
        risultatoDom.innerHTML = `${inputDom.value} non è palindroma`;
    }

    
    inputDom.value = "";
})

