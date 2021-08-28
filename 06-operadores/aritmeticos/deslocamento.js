// operador <<= Left Shift
var num1 = 320;
console.log("1 - num1 em Base10 ", num1);
console.log("2 - num1 em Base2 ", num1.toString(2));

num1 <<= 6;
console.log("3 - num1 em Base2 ", num1.toString(2));
console.log("4 - num1 em Base10 ", num1);

console.log("\n");

// operador >>= Right Shift
var num2 = 320;
console.log("1 - num2 em Base10 ", num2);
console.log("2 - num2 em Base2 ", num2.toString(2));

num2 >>= 7;
console.log("3 - num2 em Base2 ", num2.toString(2));
console.log("4 - num2 em Base10 ", num2);

console.log("\n")
// operador >>>= Right Shift sem sinal
var num3 = -320;
console.log("1 - num3 em Base10 ", num3);
console.log("2 - num3 em Base2 ", num3.toString(2));

num3 >>>= 7;
console.log("3 - num3 em Base2 ", num3.toString(2));
console.log("4 - num3 em Base10 ", num3);
