// Strings
var nome = "Lindemberg";
var sobrenome = 'Lima';
var nomeCompleto = nome + sobrenome;
var vazia = "";
var texto = "texto \
texto\
texto";

console.log("Nome completo: " + nomeCompleto + vazia);

var numeroString = '20' + 10;
var stringNumero = 10 + '20';

console.log(numeroString + stringNumero);

var stringVar = "string tex";
var numero = 10;
var flutuate = 10.5;

console.log("tipo " + typeof(stringVar));
console.log("Tipo", typeof(numero));
console.log("Tipo", typeof(flutuate));

console.log("Tamanho string", nomeCompleto.length);
