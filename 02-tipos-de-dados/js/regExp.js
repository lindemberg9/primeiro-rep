var regexpLiteral = /JS/;
var regexpConstrutor = new RegExp("p");

var stringEx = "Um pedreiro aprendendo JS";

console.log(regexpLiteral.test(stringEx));
console.log(regexpConstrutor.exec(stringEx));
