console.log('Linha 1');
// throw new Error("Ocorreu um erro"); 
console.log('Linha3');

try {
    console.log(soma(10, new Array(10)));
} catch (error) {
    //console.log(Error);
    console.log(error.name);
    console.log(error.mesage);
    console.log(error.stack)
}

function soma(a, b) {
    //return a + b;
    //return a / b;
    //return a[3];
    //return a.exec(20);
    return a.exec();
}
