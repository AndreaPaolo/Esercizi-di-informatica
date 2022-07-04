const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var lista_numeri=[];
var min=null;
var max=null;

for (let index = 1; index < 6; index++) {
    lista_numeri[index] = Number(prompt("Inserisci il "+index+" numero "));;
}
for(let index = 1; index < lista_numeri.length; index++){
    if(min === null){
        min = lista_numeri[index];
    }
    if(min > lista_numeri[index]){
        min = lista_numeri[index];
    }
    if(max < lista_numeri[index]){
        max = lista_numeri[index];
    }
}
const somma = max + min;
const differenza = max - min;

console.log("La somma è: "+ somma);
console.log("La differenza è: "+ differenza);