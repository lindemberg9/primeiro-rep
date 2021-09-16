// como criar objeto
// literal
var objPessoa01 = {nome: "Lizier"};
console.log(objPessoa01.nome);

// por construtor
var objPessoa02 = new Object();
objPessoa02.nome = "Maria";
console.log(objPessoa02.nome);

// Object.create que ira criar um objeto com prototipo
var objPessoa03 = Object.create(Object.prototype);
objPessoa03.nome = "João";
console.log(objPessoa03.nome);

// funções construtoras
var obj01 = new Object();
var obj02 = new Array(1, 2, 3);
var obj03 = new Date(); // retorna data atual
var obj04 = new Error("Ocorreu um erro");
var obj05 = new RegExp(/teste/);
var obj06 = new Function("parametroNome", "return 'Olá ' + parametroNome + '!'");

console.log(obj06("Fram"));
