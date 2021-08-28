var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

var meta = 10;
var realizado = 32;
var comicao = 0.0;

do {
    if (realizado >= meta){
        console.log("Valor da comição R$", comicao++);
        if (comicao == 20) break;
    } else {
        console.log("Valor da comição R$", comicao += 2);
        break;
    }
} while (comicao < realizado);
