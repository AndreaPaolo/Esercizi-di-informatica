const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

const numero_uno = prompt("Inserisci il primo numero ");
const numero_due = prompt("Inserisci il secondo numero ");

const somma = numero_uno - (-numero_due); //somma = a+b, in alcuni linguaggi di programmazione si unisce due stringe usando il +, quindi ricorriamo ad una doppia negazione
const differenza = numero_uno - numero_due;
const prodotto = numero_uno * numero_due;
const rapporto = numero_uno / numero_due;

console.log("La somma è: "+ somma);
console.log("La differenza è: "+ differenza);
console.log("Il prodotto è: "+ prodotto);
console.log("Il rapporto è: "+ rapporto);