const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var numero = Number(prompt("Inserisci il numero "));
if(numero>5){
    console.log("Maggiore")
}else{
    console.log("Minore")
}