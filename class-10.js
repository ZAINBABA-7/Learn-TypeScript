// LOOPS //
// For loop //
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
        // Print the even number
        console.log(i);
    }
}
// While loop //
let z = 0;
while (z <= 10) {
    console.log(z);
    z++;
}
// Do-While loop //
let g = 1;
do {
    console.log("zain");
    g++;
} while (g <= 10);
// For-Of loop //
let str2 = "ZainBaba";
for (let s of str2) {
    console.log(s);
}
// For-in loop //
let student = {
    name: "zain",
    age: 20,
    cgpa: 3.46,
};
for (let key in student) {
    console.log(key, student[key]);
}
// Nested loop //
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
    console.log("\n");
}
// string length , string index , string Method  //
let str = "Zainbaba";
console.log(str.length); // 8
console.log(str[3]); // N
let newStr = str.toUpperCase();
console.log(newStr);
// TEMPLATE Literals `` // interview question is called string interpolation ${}
let obj = {
    name: "pen",
    price: 20,
};
let output = `this is a ${obj.name} and its price is ${obj.price} rupees`;
console.log(output);
export {};
