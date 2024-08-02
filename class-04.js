// UNARY OPERATOR { ++ } , { -- } //
// let f = 0
// console.log(f++)  
// console.log(f)
// PREFIX OPERATOR
var A = 2;
var B = 6;
++A;
console.log(A); // 3
--B;
console.log(B); // 5
// POSTFIX OPERATOR
var C = 2;
var D = 6;
C++;
console.log(C); // 3
D--;
console.log(D); // 5
// HOME WORK TASK 
var E = 5, F = 2;
var G;
G = ++E + E++ + --F + F-- + E + F++ + F;
// = 6  +  6  +  1  +  1  + 7 +  0  + 1 //
console.log(G); // 22
