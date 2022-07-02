const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

const numero_uno = Number(prompt("Inserisci il primo numero "));

do{
    var numero_due = Number(prompt("Inserisci il secondo numero "));
}while(numero_uno < numero_due || numero_due === 0)

const somma = numero_uno + numero_due;
const differenza = numero_uno - numero_due;
const prodotto = numero_uno * numero_due;
const rapporto = numero_uno / numero_due;

console.log("La somma è: "+ somma);
console.log("La differenza è: "+ differenza);
console.log("Il prodotto è: "+ prodotto);
console.log("Il rapporto è: "+ rapporto);