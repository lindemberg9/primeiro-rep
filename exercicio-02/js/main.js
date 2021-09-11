//Segundo exericio Js
/*
Testando
os
conhecientos
*/
var missao = "Segunda Missão Estelar JS";
console.log("Tipo:", typeof missao, "var missão =", missao);
console.log("\n")

var hiperespaco = new String('Aperte os cintos para adentrarmos ao hiper-espaço rumo a uma nova Misão Estelar JS!');
console.log("Tipo:", typeof hiperespaco, "var hiperspaço =", hiperespaco);
console.log("\n")

var nomeCliente = "Carlos";
var renda = 1500;
var dataNascimento = new Date('1930-08-28');
var ativo = false;

function exibirDadosClientesVariaveis() {
    console.log("Cliente:", nomeCliente);
    console.log("Renda:", renda);
    console.log("Nascimento:", dataNascimento);
    console.log("Ativo:", ativo == true ? "Sim" : "Não");

}
exibirDadosClientesVariaveis();
console.log("\n")

var clienteArray = [['Nome Cliente', 'Ana'], ['Renda', 1800], ['Data de Nascimento', new Date('2000-10-28')], ['Ativo', true]];

function exibirDadosClienteArray() {
    for (var array of clienteArray) {
        if (array[0] == "Ativo") {
            console.log(array[0], array[1] == true ? 'Sim' : 'Não');
        } else {
            console.log(array[0], array[1]);
        }
    }
}
exibirDadosClienteArray();
console.log("\n")

var clienteObject = { nome: "José", renda: 2000.23, dataNascimento: new Date(2005, 10, 22), ativo: true };

function exibirDadosClienteObjeto() {
    for (item in clienteObject) {
        switch (item) {
            case "nome":
                console.log("Nome:", clienteObject[item]);
                break;
            case "renda":
                console.log("Renda: R$", clienteObject[item].toString().replace(".", ","));
                break;
            case "dataNascimento":
                console.log("Data de Nascimento:", clienteObject[item]);
                break;
            case "ativo":
                console.log("Ativo:", clienteObject[item] == true ? "Sim" : "Não");
                break;
            default:
                console.log(item, " :", clienteObject[item]);
                break;
        }
    }
}
exibirDadosClienteObjeto();
console.log("\n");

function retornaDataAtualFormatada() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada + - dia.toString();
    }

    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    return dataFormatada;
}
console.log("Data atual:", retornaDataAtualFormatada());
console.log("\n");

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Aperte os cintos para adentrarmos ao hiper-espaço rumo a uma nova Misão Estelar JS!";
console.log("Teste:", hiperEspacoRegExp.test(textoMissao));
console.log("Pesquiza:", hiperEspacoRegExp.exec(textoMissao));

try {
    for (var i = 30, c = 0; i >= 0; i--, c++) {
        console.log(i, "-", c);
        if (c == 29) {
            throw new Error("Ocorreu um erro na interação:", + c);
        }
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Chegou no bloco finally, sempre será executado.");
}

function recebeDadosFormBoot(objFormElementos) {
    console.log("Tipo de objeto:", Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    console.log("nomeBoot:", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("emailBoot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
    var formHtml = document.querySelector('#formHtml');
    console.log(formHtml);
    formHtml.nomeHtml.value = objDados.nomeBoot;
    formHtml.emailHtml.value = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}
