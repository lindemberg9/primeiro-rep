// Wrapper
var curso = "JavaScript";
console.log(curso.substr(0, 5));

// Processo Wrapper
var valorSringTemp = new String(curso);
var substr = valorSringTemp.substr(0, 5);
valorSringTemp = null;
console.log(substr);
substr = null;
