// ASSIGNMENT OPERATOR //
let c = 10;
c += 5;
console.log(c);
// COMPARISON OPERATOR //
let a = 5;
let b = 2;
let isEqual = (a == b); // false
let notEqual = (a != b); // true
let greaterThan = (a > b); // true
let lessThan = (a < b); // false
console.log(isEqual, notEqual, greaterThan, lessThan);
// LOGICAL OPERATOR //
let nums1 = 5;
let nums2 = 2;
// AND OPERATOR &&
let logicalAnd = (nums1 > 0) && (nums2 > 0); // true 
// OR  OPERATOR ||
let logicalOr = (nums1 < 0) || (nums2 > 0); // true 
// NOT OPERATOR !
let logicalNot = !(5 > 0); // false 
console.log(logicalAnd, logicalOr, logicalNot);
export {};
