var periodo = "Matutino";
var msg = periodo == "Matutino" ? "Bom dia" : "Olá";
console.log(msg);

periodo = "espertino";
var msg2 = periodo == "Matutino" ? "Bom dia" : (periodo == "Vespertino" ? "Boa tarde" : "Boa noite");
console.log(msg2);
