// DATA TYPES //
// THERE ARE 4 COMMON DATA TYPES USED IN TYPESCRIPT
// (1) STRING (2) NUMBER (3) BOOLEAN (4) ANY
var username = "Zain_Baba"; // string
var age = 20; // number
var isStudent = true; // boolean
var randomvalue = "https://github.com/ZAINBABA-7/Learn-TypeScript.git"; // any
console.log(username, age, isStudent, randomvalue);
// PERMITIVE DATA TYPES // 
var userName = "Zain_Baba"; // represent text data.
var Age = 20; // represent both integer and floating point values.
var IsStudent = true; // represent the true/false  values.
var randomValue = "https://github.com/ZAINBABA-7/Learn-TypeScript.git"; // represent any type of values.
var uk = "string"; // is a similar , but safer alternative to any.
var b = uk;
b = 4;
var nev; // effectively thorws an error whenever it is defined.
var n = null; // represent the absence of value.
var u; // represent an uninitialized variable.
var sym = Symbol("unique"); // represents a unique identifier.
console.log(userName, Age, IsStudent, randomValue, n, u, sym);
console.log(typeof userName, typeof Age, typeof IsStudent, typeof randomValue, typeof uk, typeof n, typeof u, typeof sym);
// NON-PERMITIVE DATA TYPES //
// (1) ARRAY (2) OBJECT (3) FUNCTION.
