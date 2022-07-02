const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var lista_numeri=[];
var somma=0;

for (let index = 1; index < 6; index++) {
    lista_numeri[index] = Number(prompt("Inserisci il "+index+" numero "));;
}
for(let index = 1; index < lista_numeri.length; index++){
    somma = somma+lista_numeri[index];
}
const media = somma/(lista_numeri.length-1);

console.log("La somma è: "+ somma);
console.log("La media è: "+ media);