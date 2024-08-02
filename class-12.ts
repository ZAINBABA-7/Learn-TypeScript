// FUNCTIONS //

function myFunction(msg:string){
    // myFunction(Parameter)
    console.log(msg);
}
// myFunction(Argument)
myFunction('Hello Guys'); // Calling Function / Invoke Function

// Simple Calling Function //
function sum (a:number,b:number){
    console.log(a+b);
}
sum(3,6);
function HalfFryEgg(){
    let cooked = 1+1.5+2;
    console.log(cooked)
}
HalfFryEgg();

// Returning Function Values //
function suum (x:number,y:number){
 let s = x+y;
 return s;
}
 let total = suum(4,6);
 console.log(total);
function HalfFrryEgg():number{
    let cooked = 1+1.5+2;
    return cooked
}
let response:number = HalfFrryEgg();
console.log(response);
function calculateArea(width:number,height:number):number{
    return width*height;
}
let responsee:number = calculateArea(100,50);
console.log(responsee);

// Default Parameter //
function halfEgg(egg:number = 1, butter:number = 1.5, salt:number = 2):number{
    return egg + butter + salt;
}
let respon: number = halfEgg(1,1.5,3);
console.log(respon);

// Rest Parameter //
function hfe(egg:number, ...ingridents:number[]){
    console.log(egg,ingridents);
}
hfe(1,1.5,2,5);

// Spread Operator //
function hfeg(egg:number, ...ingridents:string[]){
    console.log(egg);
    console.log(...ingridents);
}
hfeg(0,"zain","ali","baba");

// Arrow Functions : compact way to write Function // Modern Javascript
let arrowSum = (s:number,r:number)=>{
    console.log(s+r)
}
arrowSum(4,4);
let arrowMulti = ()=>{
    let mul = 3*5*4;
    return mul 
}
let totalMul = arrowMulti();
console.log(totalMul)

// Return Value with Shorter syntax
let addition = (m:number,n:number) => m+n;
let totalAdd = addition(10,35);
console.log(totalAdd);

// Practice Question //
// create a function using the "function" keyword that takes a string as an argument & return the number of vowels in the string.
function countVowels(str:string){
    let count= 0;
    for(let char of str){
        if(char ==="a" ||char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
            count++;
        }
    }
    return count;
}  
let z = countVowels("zainbaba");
console.log(z);

// Local & Global Variable // 
let golVar = "Accessible everyWhere";
function Example(){
    let localVar = "Accessible only inside this Function";
    console.log(golVar); // Work.
}
// console.log(localVar); //Error : localVar is not defined.

// Hoisting //
// console.log(a); // Error : in let & const you cannot access without initialize. 
// var a = 9; // in var its undefined.

// Anonymous Function //
let vaz = function (){
    console.log("zainbaba");
}
vaz();

// Optional Parameter // " ? "
let greet = function (a:string,b?:number){
    if(b){
    return `welcome ${a} and your id is ${b}`;
    } else{
        return `welcome ${a}` ;  
    }
}
let optional = greet("baba",2);
console.log(optional);
let optionall = greet("zain");
console.log(optionall);

// Recursive Function //
function countdown(num:number){
    if(num >=0){
        console.log(`countdown ${num}`);
        countdown(num-1);
    }
}
countdown(5);
// Factorial using recursive Function //
function factorial(n:number):number{
    if(n === 0){
        return 1;
    } 
    return n * factorial(n-1);
}
let answer = factorial(5);
console.log(answer);

// Nested Function //
function outerFunction(){
    let innerFunction = function() {
        console.log("Hello World!");
    }
    innerFunction();
}
outerFunction();

// CallBack Function //
function processUserInput(callBack:(named: string)=> void){
    let named = "sir ameen alam";
    callBack(named);
}
function ano (named: string){
    console.log("hello "+ named);
}
processUserInput(ano);

// For Each //
let arr = ["zain","ali","baba"]
arr.forEach((val , idx , arr)=> {
    console.log(val.toUpperCase(),idx,arr);
});
