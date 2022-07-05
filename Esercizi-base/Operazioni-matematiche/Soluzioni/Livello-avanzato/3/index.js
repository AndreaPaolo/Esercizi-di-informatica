const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var somma=0;
do{
    var numero_uno = Number(prompt("Inserisci il primo numero "));
}while(numero_uno <= 0)
do{
    var numero_due = Number(prompt("Inserisci il secondo numero "));
}while(numero_due <= 1)

for(let index = 1; index <= numero_uno; index++){
    somma=somma+(numero_due*index)
}

console.log("Somma: "+somma);