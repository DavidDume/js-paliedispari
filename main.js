// Pari e Dispari
const inputDom = document.querySelector("#numeroUtente");
const pariBtn = document.querySelector("#pari");
const dispariBtn = document.querySelector("#dispari");

const computerDom = document.querySelector("#computer");
const sommaDom = document.querySelector("#somma");
const vincitoreDom = document.querySelector("#vincitore");

const erroreDom = document.querySelector("#errore");
const risultatoDom = document.querySelector(".risultato");

function pariDispari(numeroUtente) {
    let numeroComputer = Math.floor(Math.random() * (5 - 1) + 1);
    let somma = numeroUtente + numeroComputer;
    computerDom.innerHTML = `Scelta Computer: ${numeroComputer}`;
    sommaDom.innerHTML = `Somma: ${numeroUtente} + ${numeroComputer} = ${somma}`;
    return somma;
}

pariBtn.addEventListener('click', function() {
    let inputValue = parseInt(inputDom.value);
    if(inputValue >= 1 && inputValue <= 5) {
        erroreDom.classList.add("hidden");
        risultatoDom.classList.remove("hidden");
        if(pariDispari(inputValue) % 2 == 0) {
            console.log("hai vinto");
            vincitoreDom.innerHTML = "Hai Vinto!"
        } else {
            console.log("perso");
            vincitoreDom.innerHTML = "Hai Perso!"
        }
    } else {
        console.log("Inserisci numero da 1 a 5");
        erroreDom.classList.remove("hidden");
        risultatoDom.classList.add("hidden");
    }
    
    inputDom.value = "";
})

dispariBtn.addEventListener('click', function() {
    let inputValue = parseInt(inputDom.value);
    if(inputValue >= 1 && inputValue <= 5) {
        erroreDom.classList.add("hidden");
        risultatoDom.classList.remove("hidden");
        if(pariDispari(inputValue) % 2 != 0) {
            console.log("hai vinto");
            vincitoreDom.innerHTML = "Hai Vinto!"
        } else {
            console.log("perso");
            vincitoreDom.innerHTML = "Hai Perso!";
            erroreDom.classList.remove("hidden");
            risultatoDom.classList.add("hidden");
        }
    }
    
    inputDom.value = "";
})
