var condicao = true;

if (condicao) console.log("1 if");

if (condicao)
    console.log("2 if");
else
    console.log("else");

condicao = false;
if (condicao) {
    console.log("1 bloco");
    console.log("1 bloco");
} else {
    console.log("2 bloco");
    console.log("2 bloco");
}

// ---------
var texto = "JS";
if (texto == "js") {
    console.log("É js!");
} else if (texto == "Js") {
    console.log("É Js!");
} else if (texto == "JS") {
    console.log("É JS!");
} else {
    console.log("Sentença não encontrada!");
}

condicao = true;
var nome = "Paulk" //"Maria";
if (condicao == true) {
    console.log("A condição e verdadeira!");
    if (nome == "Maria") {
        console.log("O cliente é maria");
    } else {
        console.log("O cliente não é Maria");
    }
} else {
    console.log("A condição é falsa");
}

// ============================

var a = "a";
var bool = true;
if (a == "a" && bool == false)
    console.log('a == "a"');

if (a == "a" || bool == false)
    console.log('a == "a"');

if (!false)
    console.log('true');

if (10 > 9)
    console.log('true');

if (10 >= 10) 
    console.log('true');
