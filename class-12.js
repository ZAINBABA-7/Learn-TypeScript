// FUNCTIONS //
function myFunction(msg) {
    // myFunction(Parameter)
    console.log(msg);
}
// myFunction(Argument)
myFunction('Hello Guys'); // Calling Function / Invoke Function
// Simple Calling Function //
function sum(a, b) {
    console.log(a + b);
}
sum(3, 6);
function HalfFryEgg() {
    var cooked = 1 + 1.5 + 2;
    console.log(cooked);
}
HalfFryEgg();
// Returning Function Values //
function suum(x, y) {
    var s = x + y;
    return s;
}
var total = suum(4, 6);
console.log(total);
function HalfFrryEgg() {
    var cooked = 1 + 1.5 + 2;
    return cooked;
}
var response = HalfFrryEgg();
console.log(response);
function calculateArea(width, height) {
    return width * height;
}
var responsee = calculateArea(100, 50);
console.log(responsee);
// Default Parameter //
function halfEgg(egg, butter, salt) {
    if (egg === void 0) { egg = 1; }
    if (butter === void 0) { butter = 1.5; }
    if (salt === void 0) { salt = 2; }
    return egg + butter + salt;
}
var respon = halfEgg(1, 1.5, 3);
console.log(respon);
// Rest Parameter //
function hfe(egg) {
    var ingridents = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingridents[_i - 1] = arguments[_i];
    }
    console.log(egg, ingridents);
}
hfe(1, 1.5, 2, 5);
// Spread Operator //
function hfeg(egg) {
    var ingridents = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingridents[_i - 1] = arguments[_i];
    }
    console.log(egg);
    console.log.apply(console, ingridents);
}
hfeg(0, "zain", "ali", "baba");
// Arrow Functions : compact way to write Function // Modern Javascript
var arrowSum = function (s, r) {
    console.log(s + r);
};
arrowSum(4, 4);
var arrowMulti = function () {
    var mul = 3 * 5 * 4;
    return mul;
};
var totalMul = arrowMulti();
console.log(totalMul);
// Return Value with Shorter syntax
var addition = function (m, n) { return m + n; };
var totalAdd = addition(10, 35);
console.log(totalAdd);
// Practice Question //
// create a function using the "function" keyword that takes a string as an argument & return the number of vowels in the string.
function countVowels(str) {
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
var z = countVowels("zainbaba");
console.log(z);
// Local & Global Variable // 
var golVar = "Accessible everyWhere";
function Example() {
    var localVar = "Accessible only inside this Function";
    console.log(golVar); // Work.
}
// console.log(localVar); //Error : localVar is not defined.
// Hoisting //
// console.log(a); // Error : in let & const you cannot access without initialize. 
// var a = 9; // in var its undefined.
// Anonymous Function //
var vaz = function () {
    console.log("zainbaba");
};
vaz();
// Optional Parameter // " ? "
var greet = function (a, b) {
    if (b) {
        return "welcome ".concat(a, " and your id is ").concat(b);
    }
    else {
        return "welcome ".concat(a);
    }
};
var optional = greet("baba", 2);
console.log(optional);
var optionall = greet("zain");
console.log(optionall);
// Recursive Function //
function countdown(num) {
    if (num >= 0) {
        console.log("countdown ".concat(num));
        countdown(num - 1);
    }
}
countdown(5);
// Factorial using recursive Function //
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
var answer = factorial(5);
console.log(answer);
// Nested Function //
function outerFunction() {
    var innerFunction = function () {
        console.log("Hello World!");
    };
    innerFunction();
}
outerFunction();
// CallBack Function //
function processUserInput(callBack) {
    var named = "sir ameen alam";
    callBack(named);
}
function ano(named) {
    console.log("hello " + named);
}
processUserInput(ano);
// For Each //
var arr = ["zain", "ali", "baba"];
arr.forEach(function (val, idx, arr) {
    console.log(val.toUpperCase(), idx, arr);
});
