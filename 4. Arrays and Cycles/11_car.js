// Given an array of car manufacturers, convert the array to a string and back to an array

const myArray = ["Volvo", "VW", "Audi", "Toyota", "Tesla"];
const arrayAsString = myArray.join(",");

console.log(arrayAsString);

const stringAsArray = arrayAsString.split(",");
console.log(stringAsArray);
