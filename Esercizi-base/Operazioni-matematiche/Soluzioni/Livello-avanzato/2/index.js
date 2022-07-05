const prompt = require("prompt-sync")({ sigint: true }); //Lettura inputda terminale

var lista_multipli=[];
do{
    var numero_uno = Number(prompt("Inserisci il primo numero "));
}while(numero_uno <= 0)
do{
    var numero_due = Number(prompt("Inserisci il secondo numero "));
}while(numero_due <= 1)

for(let index = 1; index <= numero_uno; index++){
    lista_multipli[index]=numero_due*index;
}

console.log("Lista dei multipli: "+lista_multipli);