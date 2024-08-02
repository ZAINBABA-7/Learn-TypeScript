// UNARY OPERATOR { ++ } , { -- } //
// let f = 0
// console.log(f++)  
// console.log(f)

// PREFIX OPERATOR
let A:number = 2;
let B:number = 6;
++A;
console.log(A); // 3
--B;
console.log(B); // 5

// POSTFIX OPERATOR
let C:number = 2;
let D:number = 6;
C++;
console.log(C); // 3
D--;
console.log(D); // 5

// HOME WORK TASK 
let E:number = 5, F:number = 2;
let G:number;
G = ++E + E++ + --F + F-- + E + F++ + F;
// = 6  +  6  +  1  +  1  + 7 +  0  + 1 //
console.log(G); // 22
