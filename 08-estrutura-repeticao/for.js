// Escreva de 0 a 10
for (var i = 0; i <= 10; i++){
    console.log(i);
}

var arrayNomes = ['pedro', 'paulo', 'roberto', 'marcos'];
for(a = 0; a < arrayNomes.length; a++){
    console.log(arrayNomes[a]);
}

var i = 0;
for(; i < 3; i++){
    console.log(i);
}

var i = 0;
for (;;i++){
    if (i == 2 || i == 7)
    continue;
    console.log(i);
    if (i == 10)
    break;
}
