// Literal
var produto = {};
var produto2 = {nome: 'sapato', numero: 25, estoque: true, caracteristicas: {marca: 'grife'}};

// Construtor
var pessoa = new Object();
pessoa.nome = 'Pedro';
pessoa.idade = 25;

// Acessar
console.log(produto);
console.log(produto2.nome);
console.log(produto2.caracteristicas.marca);
console.log(produto2[estoque]);

console.log(pessoa.nome);
console.log(pessoa.idade);
