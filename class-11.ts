// ARRAYS //

let marks = [22,33,44,54,25,44,56,98];
marks[4] = 3;
console.log(marks);

// Looping Over An Array //
// For Loop //
let herroies =  ['Superman','Spiderman','Batman','Hulk']
for(let index = 0; index<herroies.length; index++ ){
    console.log(herroies[index]);
}

// For Of Loop //
let herroiees =  ['Superman','Spiderman','Batman','Hulk']
 for(let i of herroiees ){
     console.log(i.toUpperCase());
 }

// For In Loop //
let herroiess =  ['Superman','Spiderman','Batman','Hulk']
  for(let i in herroiess ){
      console.log(herroiess[i]);
  }

// PRACTICE QUESTION //
let mid = [23,24,18,17,22,20]
let sum = 0;
for(let i = 0; i < mid.length; i++){
    sum += mid[i]
}
console.log(sum)
let average = sum/mid.length;
console.log(average)

// PRACTICE QUESTION //
// doing with for of loop //
let items = [250, 645, 300, 900, 50];
let i = 0;
for(let val of items){
    console.log(`${i} and value is ${val}`);
    let offer = val/10;
    items[i] -= offer;
    console.log(`and Value After Offer is ${items[i]}`);
    i++;
}

// doing with for loop //
let itemss = [250, 645, 300, 900, 50];
for(let i = 0; i < itemss.length; i++){
    let offer = itemss[i] / 10;
    itemss[i] -= offer;
}
console.log(itemss);

// ARRAYS METHODS //
// push() : ADD TO END //
let Food = ['ZingerBurger','ClubSandwish','Chips','Rolls']
Food.push('Tkka','Pizza','Broast');
console.log(Food)

// pop() : DELETE FROM END & RETURN //
let fastFood = ['ZingerBurger','ClubSandwish','Chips','Rolls']
let vari = fastFood.pop();
console.log(fastFood);
console.log(vari);

// toString() : CONVERT ARRAY toString //
let even = [2,4,6,8,10,12,14,16]
console.log(even);
console.log(even.toString());

// concat() : JOINS MULTIPLE ARRAYS & RETURNS RESULT //
let f_Foods = ['ZingerBurger','ClubSandwish']
let n_Foods = ['Daal','Roti']
let s_Foods = ['Briyani','Pulao']
let shedule = f_Foods.concat(n_Foods,s_Foods);
console.log(shedule);

// unshift() : ADD TO START // 
let Beverage = ['7up','Pepsi','CocoCola']
Beverage.unshift('Pakola','Fanta');
console.log(Beverage)

// shift() : DELETE FROM START & RETURN //
let fastItems = ['ZingerBurger','ClubSandwish','Chips','Rolls']
let varai = fastItems.shift();
console.log(fastItems);
console.log(varai);

// slice() : RETURNS A PIECE OF THE ARRAY //
let cold_Drinks = ['Pakola','Fanta','7up','Pepsi','CocoCola']
console.log(cold_Drinks.slice(1,3));
console.log(cold_Drinks)

// splice() : CHANGE ORIGINAL ARRAY (ADD,REMOVE,REPLACE) //
let chill_Drinks = ['Pakola','Fanta','7up','Pepsi','CocoCola']
// slice(Start index , Delete index , Add index)
chill_Drinks.splice(0,2,'Water','Soda')
console.log(chill_Drinks)

// find() : TO FIND SOME THING & ALSO USED CONDITION //
let are: number[]=[16,22,33,44,11,12,18]
let finding = are.find((num)=>{return num>=18});
console.log(finding);

// forEach() : TO APPLY CHANGES IN ALL ARRAY VALUE //
let xz: number[]=[3,2,4,5]
xz.forEach((val)=>{
    console.log(val);
})

// map() : TO RETURN CHANGES IN ARRAY VALUE //
let xy: number[]=[3,2,4,5]
let a = xy.map((val,idx,xy)=>{
    console.log(xy, idx ,val * 2);
    return val + 1;
})
console.log(a);

// filter() : Creates a new array with all elements that pass the test implemented by the provided function.
let x: number[]=[3,2,4,5]
let ab = x.filter((val)=>{
    // console.log(xz, idx ,val * 2);
    return val % 2 === 0;
})
console.log(ab);

// reduce() : Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. //
let numbers = [1, 2, 3, 4];
let newa = numbers.reduce((n1,n2)=>{
    return n1+n2;
})
console.log(newa);

// some() : Tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value. //
let ages = [20, 30, 25, 17];
let isAdult = ages.some(function(age) {
    return age >= 18;
});
console.log(isAdult); 

// every() : Tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.//
let agesw = [20, 30, 25, 18];
let isAdullt = agesw.every(function(age) {
    return age >= 18;
});
console.log(isAdullt);

//
// PRACTICE QUESTION //
let Companies = ["Bloomberg","Microsoft","Uber","Google","IBM","NetFlix"]
// remove first companie from array 
Companies.shift();
// remove Uber and Add OLA its Place
Companies.splice(1,1,"OLA");
// add Amazon at end
Companies.push("Amazon");
console.log(Companies)

