// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function printIndex(array, number) {
  return array.indexOf(number);
}

const myArray = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
const index = printIndex(myArray, target);

console.log(`The number ${target} is found at index ${index}`);
