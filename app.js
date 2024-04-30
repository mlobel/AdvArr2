const nums = [1, 2, 3, 4, 5];
const evenNums = [2, 4, 6, 8];
const oddNums = [1, 3, 5, 7];
const moreNums = [1, 3, 1, 7];

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

function hasOddNumber(arr) {
  return arr.some((num) => num % 2 !== 0);
}

let numTest1 = hasOddNumber(nums);
let numTest2 = hasOddNumber(evenNums);
let numTest3 = hasOddNumber(oddNums);

console.log(numTest1); //true
console.log(numTest2); //false
console.log(numTest3); //true

function hasAZero(num) {
  let digits = Array.from(String(num), Number);
  return digits.some((digit) => digit === 0);
}

console.log(hasAZero(1234)); //false
console.log(hasAZero(7890)); //true

function hasOnlyOddNumbers(arr) {
  return arr.every((num) => num % 2 !== 0);
}

console.log(hasOnlyOddNumbers(oddNums)); //true
console.log(hasOnlyOddNumbers(evenNums)); //false
console.log(hasOnlyOddNumbers(nums)); //false

function hasNoDuplicates(arr) {
  return arr.every((val, i) => arr.indexOf(val) === i);
}

console.log(hasNoDuplicates(nums)); //true
console.log(hasNoDuplicates(evenNums)); //true
console.log(hasNoDuplicates(moreNums)); //false

function hasCertainKey(arr, key) {
  return arr.every((obj) => key in obj);
}

console.log(hasCertainKey(arr, "title")); //true
console.log(hasCertainKey(arr, "isCatOwner")); //false

function hasCertainValue(arr, key, val) {
  return arr.every((obj) => obj[key] === val);
}

console.log(hasCertainValue(arr, "title", "Instructor")); //true
console.log(hasCertainValue(arr, "first", "Colt")); //false
