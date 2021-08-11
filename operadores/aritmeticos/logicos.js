// && (AND)
var res1 = (10 == 10) && (10 == 10);
var res2 = true && true;
var res3 = true && "true";
var res4 = true && "true1";
var res5 = true && Boolean("true1");
console.log("1 - ", res1);
console.log("2 - ", res2);
console.log("3 - ", res3);
console.log("4 - ", res4);
console.log("5 - ", res5);

console.log("\n");

// || (OU)
var res6 = (10 == 11) || (10 == 10);
var res7 = (5 == 1) || (3 == 1);
console.log("6 - ", res6);
console.log("7 - ", res7);

console.log("\n");

// ! (NOT)
var res8 = true;
var res9 = false;
console.log("8 - ", !res8);
console.log("9 - ", !res9);
console.log("10 - ", !!res8);
console.log("11 - ", !!res9);
console.log("12 - ", !!("João"));
