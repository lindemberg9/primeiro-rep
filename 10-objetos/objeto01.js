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

// Criar obj literal
var objetoPessoa = {
    nome: "João Ferrira",
    cpf: 12345678923,
    dataNascimento: new Date(1982, 3, 11),
    ativo: true,
    "teste prop": "teste",
    contatos: [11111111, 22222222, 33333333],
    endereco: {rua: "Rua B", numero: 123, cep: 12333000},
    saudacao: function(){
        return "Olá, me chamo " + this.nome + "!";
    }
}

console.log(objetoPessoa);

console.log("Nome:", objetoPessoa.nome);
console.log("CPF:", objetoPessoa.cpf);
console.log("Nascimento:", objetoPessoa.dataNascimento);
console.log("Ativo:", objetoPessoa.ativo == true ? "Sim" : "Não");
console.log("Teste:", objetoPessoa["teste prop"]);
console.log("Contato:", objetoPessoa.contatos[0]);
for (var contatos of objetoPessoa.contatos){
    console.log("Contatos:", contatos);
}
for (var key in objetoPessoa.endereco){
    console.log(key, objetoPessoa.endereco[key]);
}
console.log(objetoPessoa.saudacao());
