var cliente = "Pedro";
console.log(window.cliente);
var msgVenda = "Olá " + cliente;
console.log(msgVenda, "GLOBAL");

function realizarVenda(iten, valor){
    var msgVenda = ("Venda realizada com sucesso");
    console.log(msgVenda);
    console.log("Cliente", cliente);
    console.log("iten: ", iten);
    console.log("Valor: ", valor)

    function totalVenda(){
        var msgVenda = "Valor total 7000,00 function interna";
        console.log(msgVenda);
    }
    totalVenda();
}

realizarVenda("Moto", 7000.00);
