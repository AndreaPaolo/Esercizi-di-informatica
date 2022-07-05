const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var numero_uno = Number(prompt("Inserisci il primo numero "));
var numero_due = Number(prompt("Inserisci il secondo numero "));

const somma = numero_uno + numero_due;

if(somma > 10){
    if(somma < 20){
        console.log("Somma maggiore di dieci e minore di venti");
        console.log("Media dei due numeri: "+ somma/2);
    }else{
        console.log("Somma maggiore di dieci e maggiore di venti");
    }
}else{
    console.log("Somma minore di dieci");
}