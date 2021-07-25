var contaStatus = false;
console.log("Status da conta: ", contaStatus);

var contaStatus = true;
console.log("Status da conta: ", contaStatus);
console.log(typeof(contaStatus));

if (contaStatus == true) {
    console.log("Envie um email");
} else {
    console.log("Ative sua conta");
}

console.log(!!contaStatus);

var nome = "Berg";
var preco = 22.80;
var vazio = "";

console.log(!!nome);
console.log(!!preco);
console.log(!!vazio);

// 6 valore que serão sempre falso
console.log(!!"");
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);
console.log(!!Array);
console.log(!!Object);
console.log(!!Function);
