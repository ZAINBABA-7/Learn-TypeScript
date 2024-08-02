// DATA TYPES //
// THERE ARE 4 COMMON DATA TYPES USED IN TYPESCRIPT
// (1) STRING (2) NUMBER (3) BOOLEAN (4) ANY

let username: string = "Zain_Baba"; // string
let age: number = 20; // number
let isStudent: boolean = true; // boolean
let randomvalue: any = "https://github.com/ZAINBABA-7/Learn-TypeScript.git"; // any
console.log(username , age , isStudent , randomvalue);

// PERMITIVE DATA TYPES // 
let userName: string = "Zain_Baba"; // represent text data.
let Age: number = 20; // represent both integer and floating point values.
let IsStudent: boolean = true; // represent the true/false  values.
let randomValue: any = "https://github.com/ZAINBABA-7/Learn-TypeScript.git"; // represent any type of values.
let uk: unknown = "string"; // is a similar , but safer alternative to any.
let b = uk as number;
b = 4;
let nev: never; // effectively thorws an error whenever it is defined.
let n: null = null; // represent the absence of value.
let u: undefined; // represent an uninitialized variable.
let sym: Symbol = Symbol("unique"); // represents a unique identifier.
console.log(userName , Age , IsStudent , randomValue , n , u , sym);
console.log(typeof userName , typeof Age , typeof IsStudent , typeof randomValue , typeof uk , typeof n , typeof u , typeof sym );

// NON-PERMITIVE DATA TYPES //
// (1) ARRAY (2) OBJECT (3) FUNCTION.