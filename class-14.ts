// OBJECTS //
let person:{name:string;age:number;address:string;isPass:boolean;}={
    name:"zain",
    age:20,
    address:"karachi",
    isPass:true,
};
console.log(person.name,person.age,person.address,person.isPass);
person.age = 22;
console.log(person.age);

// Type Aliases with object //
type user = {
    name:string;
    age:number;
    isCity:boolean;
};
let user1:user={
    name:"ali",
    age:13,
    isCity:false,
};
console.log(user1);
// Type Aliases with function //
type operator = (x:number,y:number)=>number;
const add:operator = (x,y)=>x+y;
console.log(add(3,4));

// Type Literals //
let coffee:"large"|"medium"|"small";
coffee = "small";
console.log(coffee);
// Type Union //
type trafficLights = "red"|"yellow";
type shingPongCountry = "red";
type worldTrafficlight = trafficLights|shingPongCountry;
let start:worldTrafficlight = "red";
console.log(start);
// Type InterSection //
type teacher = {
    name:string;
    experience:number;
}
type student = {
    class : number;
    isPass : boolean;
}
type principal = teacher&student;
let headMaster:principal={
    name:"sir Ali",
    class:9,
    isPass:true,
    experience:5,
}
console.log(headMaster);

// Working with Objects and Arrays //
type Book ={
    title:string;
    author:string;
    isbn:string;
}
let library :Book[] =[
    {title:"the Hobbit",author:"J.R.R",isbn:"123456"},
    {title:"the red",author:"John",isbn:"126"}
]
library.push({title:"the dv",author:"elen",isbn:"096"});
console.log(library);
let foundBook = library.find((dh)=>dh.author==="John");
console.log(foundBook);

// Tuples //
let arr1: [string,number,boolean,{marks:number}] = ["zain",20,true,{marks:75}];
console.log(arr1);

// Pass By Value (vs) Pass By Reference //
// pass by value (permitive data types or independent) //
let a = 5;
let b = a;
b = a+5; // dont change "A" value //
console.log(a,b);
// pass by reference (non-permitive data types or dependent) //
let obj1 = {
    name1:"zain",
    age:20,
    isPass:true,
};
let obj2 = obj1;
obj2.age = 22; //change "obj1" value also //
console.log(obj1);
console.log(obj2);

// Shallow Copy (vs) Deep Copy //
// Shallow Copy //
const student1 = {
    name1:"Zain",
    age:22,
}
// 2 ways to use shallow copy //
// const anotherStudent = {...student1};
const anotherStudent1 = Object.assign({},student1);
anotherStudent1.name1 = "Areeb";
console.log(student1);
console.log(anotherStudent1);
// Deep Copy //
const student2 = {
    name1:"Zain",
    age:22,
    address: {
        city:"Karachi",
        zone:"Central",
    }
};
// 3 ways to use deep copy //
// const anotherStudent2 = {...student2,address:{...student2.address}};
// const anotherStudent2 = JSON.parse(JSON.stringify(student2));
const anotherStudent2 = structuredClone(student2);
anotherStudent2.name1 = "ali";
anotherStudent2.address.city = "punjab";
console.log(student2);
console.log(anotherStudent2);
 
// Enums //
enum coffeeType{
    Espresso,
    Latte,
    Cappuccino,
    Americon
}
console.log(coffeeType.Latte);

// Strutual Typing //
let personal = {
    name1: "zain",
    id: 22,
}
let person2 = {
    name1 : "ali"
}
person2 = personal
// personal = person2 
console.log(person2);

// overloading Function //
function add1 (arr1:number,arr2:number):number;
function add1 (arr1:string,arr2:string):string;
function add1 (arr1:boolean,arr2:boolean):boolean;
function add1 (arr1:any,arr2:any):any{
    return arr1 + arr2;
}
console.log(add1(3,4));
console.log(add1("zain"," baba"));
console.log(add1(true,true));