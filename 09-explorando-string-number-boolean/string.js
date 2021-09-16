// String
// toString();
var nome = new String("Maria da Silva");
console.log("1 tipo:", typeof nome);
console.log("2 tipo:", typeof nome.toString());

// length
console.log("length:", nome.length);

// iterar na string
for (let index in nome) {
    console.log("indice:", index, nome[index]);
}

// recuperar indice
console.log("charAt", nome.charAt(9));

// recuperar code UTF-16 pelo indice
console.log("charCodeOf", nome.charCodeAt(9));

// recuperando o indice pelo  valor
console.log("indexOf", nome.indexOf("S"));

// recuperando o indice do ultimo caractere pesquisado
console.log("lastIndexOf:", nome.lastIndexOf("a"));

// concatenar mais dados na string
console.log("concat", nome.concat(" - Seja bem vinda").concat(" Obrigada!"));

//retorna um codigo htmal
console.log("sub", nome.sub());
console.log("sup", nome.sup());

// buscar uma quantidade de caracteres a partir de um indice
console.log("substring", nome.substring(5, 10));
console.log("substring", nome.substring(5, nome.length));

// buscar parte de uma string informando indice inicial e final
console.log("substring", nome.substring(5, 8));
console.log("substring", nome.substring(0, nome.length));
console.log("substring", nome.substring(5))

// repalce - substituir dados em uma string
console.log("replace", nome.replace("a", "?"));
console.log("replace", nome.replace(/a/, "?"));
console.log("replace", nome.replace(/a/g, "?"));

console.log(nome = nome.replace(/a/g, "?"));
nome = nome.replace(/\?/g, function (x) {
    return "a";
})
console.log(nome);

// split - divide a string

console.log("split -", nome.split());
console.log("split -", nome.split(""));
console.log("split -", nome.split(" "));
console.log("split -", nome.split(" ", 1));
console.log("split -", nome.split("a"));
console.log("split -", nome.split(/ da /g));

// Texto em caixa alta e baixa
console.log("Alta", nome.toUpperCase());
console.log("Baixa", nome.toLowerCase());

// match - realizar uma pesquisa RegExp
var texto = "Casa de papel de madeira de ferro";
var resultado = texto.match(/de/g);
console.log("tipo", Object.prototype.toString.call(resultado));
console.log(resultado);

// search
var resultado2 = texto.search(/de/g); // -1 quando não encontrar
console.log("tipo", Object.prototype.toString.call(resultado2));
console.log(resultado2);

// Para verificar se uma string começa com algo
console.log(nome.startsWith("Maria"));
console.log(nome.startsWith("Maria", 5));

// retirar spacos de ante de depois de texto
var texto2 = " texto "
console.log(texto2.trim());

// valueOf - retorna o tipo primitivo da string
var nome2 = new String("Peter");
console.log(typeof nome);
console.log(typeof nome2.valueOf());

// repeat - repetir o valor da string
console.log(nome2.repeat(4));
