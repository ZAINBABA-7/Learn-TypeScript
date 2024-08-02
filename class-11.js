// ARRAYS //
var marks = [22, 33, 44, 54, 25, 44, 56, 98];
marks[4] = 3;
console.log(marks);
// Looping Over An Array //
// For Loop //
var herroies = ['Superman', 'Spiderman', 'Batman', 'Hulk'];
for (var index = 0; index < herroies.length; index++) {
    console.log(herroies[index]);
}
// For Of Loop //
var herroiees = ['Superman', 'Spiderman', 'Batman', 'Hulk'];
for (var _i = 0, herroiees_1 = herroiees; _i < herroiees_1.length; _i++) {
    var i_1 = herroiees_1[_i];
    console.log(i_1.toUpperCase());
}
// For In Loop //
var herroiess = ['Superman', 'Spiderman', 'Batman', 'Hulk'];
for (var i_2 in herroiess) {
    console.log(herroiess[i_2]);
}
// PRACTICE QUESTION //
var mid = [23, 24, 18, 17, 22, 20];
var sum = 0;
for (var i_3 = 0; i_3 < mid.length; i_3++) {
    sum += mid[i_3];
}
console.log(sum);
var average = sum / mid.length;
console.log(average);
// PRACTICE QUESTION //
// doing with for of loop //
var items = [250, 645, 300, 900, 50];
var i = 0;
for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
    var val = items_1[_a];
    console.log("".concat(i, " and value is ").concat(val));
    var offer = val / 10;
    items[i] -= offer;
    console.log("and Value After Offer is ".concat(items[i]));
    i++;
}
// doing with for loop //
var itemss = [250, 645, 300, 900, 50];
for (var i_4 = 0; i_4 < itemss.length; i_4++) {
    var offer = itemss[i_4] / 10;
    itemss[i_4] -= offer;
}
console.log(itemss);
// ARRAYS METHODS //
// push() : ADD TO END //
var Food = ['ZingerBurger', 'ClubSandwish', 'Chips', 'Rolls'];
Food.push('Tkka', 'Pizza', 'Broast');
console.log(Food);
// pop() : DELETE FROM END & RETURN //
var fastFood = ['ZingerBurger', 'ClubSandwish', 'Chips', 'Rolls'];
var vari = fastFood.pop();
console.log(fastFood);
console.log(vari);
// toString() : CONVERT ARRAY toString //
var even = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(even);
console.log(even.toString());
// concat() : JOINS MULTIPLE ARRAYS & RETURNS RESULT //
var f_Foods = ['ZingerBurger', 'ClubSandwish'];
var n_Foods = ['Daal', 'Roti'];
var s_Foods = ['Briyani', 'Pulao'];
var shedule = f_Foods.concat(n_Foods, s_Foods);
console.log(shedule);
// unshift() : ADD TO START // 
var Beverage = ['7up', 'Pepsi', 'CocoCola'];
Beverage.unshift('Pakola', 'Fanta');
console.log(Beverage);
// shift() : DELETE FROM START & RETURN //
var fastItems = ['ZingerBurger', 'ClubSandwish', 'Chips', 'Rolls'];
var varai = fastItems.shift();
console.log(fastItems);
console.log(varai);
// slice() : RETURNS A PIECE OF THE ARRAY //
var cold_Drinks = ['Pakola', 'Fanta', '7up', 'Pepsi', 'CocoCola'];
console.log(cold_Drinks.slice(1, 3));
console.log(cold_Drinks);
// splice() : CHANGE ORIGINAL ARRAY (ADD,REMOVE,REPLACE) //
var chill_Drinks = ['Pakola', 'Fanta', '7up', 'Pepsi', 'CocoCola'];
// slice(Start index , Delete index , Add index)
chill_Drinks.splice(0, 2, 'Water', 'Soda');
console.log(chill_Drinks);
// find() : TO FIND SOME THING & ALSO USED CONDITION //
var are = [16, 22, 33, 44, 11, 12, 18];
var finding = are.find(function (num) { return num >= 18; });
console.log(finding);
// forEach() : TO APPLY CHANGES IN ALL ARRAY VALUE //
var xz = [3, 2, 4, 5];
xz.forEach(function (val) {
    console.log(val);
});
// map() : TO RETURN CHANGES IN ARRAY VALUE //
var xy = [3, 2, 4, 5];
var a = xy.map(function (val, idx, xy) {
    console.log(xy, idx, val * 2);
    return val + 1;
});
console.log(a);
// filter() : Creates a new array with all elements that pass the test implemented by the provided function.
var x = [3, 2, 4, 5];
var ab = x.filter(function (val) {
    // console.log(xz, idx ,val * 2);
    return val % 2 === 0;
});
console.log(ab);
// reduce() : Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. //
var numbers = [1, 2, 3, 4];
var newa = numbers.reduce(function (n1, n2) {
    return n1 + n2;
});
console.log(newa);
// some() : Tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value. //
var ages = [20, 30, 25, 17];
var isAdult = ages.some(function (age) {
    return age >= 18;
});
console.log(isAdult);
// every() : Tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.//
var agesw = [20, 30, 25, 18];
var isAdullt = agesw.every(function (age) {
    return age >= 18;
});
console.log(isAdullt);
//
// PRACTICE QUESTION //
var Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "NetFlix"];
// remove first companie from array 
Companies.shift();
// remove Uber and Add OLA its Place
Companies.splice(1, 1, "OLA");
// add Amazon at end
Companies.push("Amazon");
console.log(Companies);
