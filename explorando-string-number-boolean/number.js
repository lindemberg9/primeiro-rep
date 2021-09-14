// toString
var num = new Number(1.675);
console.log(num, "- tipo", typeof num);
console.log(num.toString(), "- tipo", typeof num.toString())

// toFixed
console.log(num, "typeof: " + typeof num + " - ", num.toFixed(2), typeof num.toFixed(2));

// converter p ponto flutuante
var numPontoFlutuante = Number.parseFloat(num.toFixed(2));
console.log(numPontoFlutuante, typeof numPontoFlutuante);

// converter para inteiro
var numInteiro = Number.parseInt(num);
console.log(numInteiro, typeof numInteiro);

// verificar se é numero
var v1 = 5.9;
var v2 = "10";
var v3 = false;
var v4 = 200;

console.log(v1 , Number.isInteger(v1));
console.log(v2 , Number.isInteger(v2));
console.log(v3 , Number.isInteger(v3));
console.log(v4 , Number.isInteger(v4));

// isNaN
var a = "eca";
var b = "12";
var c = 25;
var d = NaN;
console.log(a, Number.isNaN(a));
console.log(b, Number.isNaN(b));
console.log(c, Number.isNaN(c));
console.log(d, Number.isNaN(d));

// toPrecision retorna uma quantidade especifica de numeros em forma de string
var num2 = 3542.56987;
console.log(num2, num2.toPrecision(6), typeof num2.toPrecision(6));

// retornar valor primitivo do dado
var valorX = new Number(5220);
console.log(valorX.toString(), typeof valorX.toString());
console.log(valorX.valueOf(), typeof valorX.valueOf());

// isFinit retorna true
console.log(2/2);
console.log("isFinit", Number.isFinite(2/2));
console.log(1000/1);
console.log("isFinit", Number.isFinite(1000/1));
console.log(1000/0);
console.log("isFinit", Number.isFinite(1000/0));

// valores pre definidos no JS
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(valorX.toString().length);
