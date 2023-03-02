// Pari e Dispari
const inputDom = document.querySelector("#numeroUtente");
const pariBtn = document.querySelector("#pari");
const dispariBtn = document.querySelector("#dispari");

const computerDom = document.querySelector("#computer");
const vincitoreDom = document.querySelector("#vincitore");

function pariDispari(numeroUtente) {
    let numeroComputer = Math.floor(Math.random() * (5 - 1) + 1);
    let somma = numeroUtente + numeroComputer;
    console.log(somma, numeroComputer);
    return somma;
}

pariBtn.addEventListener('click', function() {
    let inputValue = parseInt(inputDom.value);
    if(inputValue >= 1 && inputValue <= 5) {
        if(pariDispari(inputValue) % 2 == 0) {
            console.log("hai vinto");
        } else {
            console.log("perso");
        }
    } else {
        console.log("Inserisci numero da 1 a 5");
    }
    
    inputDom.value = "";
})

dispariBtn.addEventListener('click', function() {
    let inputValue = parseInt(inputDom.value);
    if(inputValue >= 1 && inputValue <= 5) {
        if(pariDispari(inputValue) % 2 != 0) {
            console.log("hai vinto");
        } else {
            console.log("perso");
        }
    }
    
    inputDom.value = "";
})
