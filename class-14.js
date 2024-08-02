// OBJECTS //
var person = {
    name: "zain",
    age: 20,
    address: "karachi",
    isPass: true,
};
console.log(person.name, person.age, person.address, person.isPass);
person.age = 22;
console.log(person.age);
var user1 = {
    name: "ali",
    age: 13,
    isCity: false,
};
console.log(user1);
var add = function (x, y) { return x + y; };
console.log(add(3, 4));
// Type Literals //
var coffee;
coffee = "small";
console.log(coffee);
var start = "red";
console.log(start);
var headMaster = {
    name: "sir Ali",
    class: 9,
    isPass: true,
    experience: 5,
};
console.log(headMaster);
var library = [
    { title: "the Hobbit", author: "J.R.R", isbn: "123456" },
    { title: "the red", author: "John", isbn: "126" }
];
library.push({ title: "the dv", author: "elen", isbn: "096" });
console.log(library);
var foundBook = library.find(function (dh) { return dh.author === "John"; });
console.log(foundBook);
// Tuples //
var arr1 = ["zain", 20, true, { marks: 75 }];
console.log(arr1);
// Pass By Value (vs) Pass By Reference //
// pass by value (permitive data types or independent) //
var a = 5;
var b = a;
b = a + 5; // dont change "A" value //
console.log(a, b);
// pass by reference (non-permitive data types or dependent) //
var obj1 = {
    name1: "zain",
    age: 20,
    isPass: true,
};
var obj2 = obj1;
obj2.age = 22; //change "obj1" value also //
console.log(obj1);
console.log(obj2);
// Shallow Copy (vs) Deep Copy //
// Shallow Copy //
var student1 = {
    name1: "Zain",
    age: 22,
};
// 2 ways to use shallow copy //
// const anotherStudent = {...student};
var anotherStudent1 = Object.assign({}, student1);
anotherStudent1.name1 = "Areeb";
console.log(student1);
console.log(anotherStudent1);
// Deep Copy //
var student2 = {
    name1: "Zain",
    age: 22,
    address: {
        city: "Karachi",
        zone: "Central",
    }
};
// 3 ways to use deep copy //
// const anotherStudent2 = {...student2,address:{...student2.address}};
// const anotherStudent2 = JSON.parse(JSON.stringify(student2));
var anotherStudent2 = structuredClone(student2);
anotherStudent2.name1 = "ali";
anotherStudent2.address.city = "punjab";
console.log(student2);
console.log(anotherStudent2);
// Enums //
var coffeeType;
(function (coffeeType) {
    coffeeType[coffeeType["Espresso"] = 0] = "Espresso";
    coffeeType[coffeeType["Latte"] = 1] = "Latte";
    coffeeType[coffeeType["Cappuccino"] = 2] = "Cappuccino";
    coffeeType[coffeeType["Americon"] = 3] = "Americon";
})(coffeeType || (coffeeType = {}));
console.log(coffeeType.Latte);
// Strutual Typing //
var personal = {
    name1: "zain",
    id: 22,
};
var person2 = {
    name1: "ali"
};
person2 = personal;
// personal = person2 
console.log(person2);
function add1(arr1, arr2) {
    return arr1 + arr2;
}
console.log(add1(3, 4));
console.log(add1("zain", " baba"));
console.log(add1(true, true));
