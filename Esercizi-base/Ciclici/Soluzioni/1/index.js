const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var numero_uno = Number(prompt("Inserisci il primo numero "));
var numero_due = Number(prompt("Inserisci il secondo numero "));
for(let i=numero_uno; i<=numero_due; i++){
    console.log(i)
}