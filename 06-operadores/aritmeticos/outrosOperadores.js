// typeof
var num = 20;
console.log("typeof numero: ", typeof num);

// instanceof
var nome = 'Joaõ';
console.log("instanceof nome String: ", nome instanceof String);

// in
var objPessoa = {nome: "Paulo", teste: true};
console.log("nome in objPesoa: ","nome" in objPessoa);
console.log("idade in objPessoa: ", "idade" in objPessoa);
var array = Array("a", "b", "c");
console.log("0 in array: ","0" in array);
console.log("3 in array: ", "3" in array);

// delete
delete objPessoa.teste;
console.log("delete teste: true: ", objPessoa);
delete array[0];
console.log("delete [0] array: ", array);

// operador de membro '.' e []
console.log("objetoPessoa.nome: ", objPessoa.nome);
console.log("objetoPessoa.nome: ", objPessoa["nome"]);

// void
// ()
function teste (){
    return 10;
}
console.log("teste(): ", teste());
console.log("teste(): ", void(teste()));

// new
var strNome = new String("Lindemberg");
console.log("new: ", strNome);
