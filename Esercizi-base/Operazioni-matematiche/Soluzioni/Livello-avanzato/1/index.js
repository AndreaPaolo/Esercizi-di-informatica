const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var lista_numeri=[];
var somma=0;
var min=null;
var max=null;

for (let index = 1; index < 6; index++) {
    lista_numeri[index] = Number(prompt("Inserisci il "+index+" numero "));;
}
for(let index = 1; index < lista_numeri.length; index++){
    somma = somma+lista_numeri[index];
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
const media = somma/(lista_numeri.length-1);
const discostamento_min = media - min;
const discostamento_max = max - media;

console.log("La media: "+ media);
console.log("Il discostamento minimo: "+ discostamento_min);
console.log("Il discostamento massimo: "+ discostamento_max);