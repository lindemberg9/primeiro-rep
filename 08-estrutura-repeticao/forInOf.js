var objCliente = {nome: "Vega", idade: 38, cnh: true};
for(key in objCliente){
    console.log("key:", key);
    console.log("value:", objCliente[key]);
}

console.log("=================")

var arrayS = ['a', 'b', 'c', 1, 2, 3];
for (index in arrayS){
    console.log("Index", index);
    console.log("Valor", arrayS[index]);
}

console.log("=================")

for (index of arrayS){
    console.log("Valor", index);
}
