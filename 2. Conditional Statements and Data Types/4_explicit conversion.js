/* Perform explicit conversion (number, string, boolean) */

const myNum = 5;
const stringNumber = String(myNum);

console.log(stringNumber);
console.log(typeof stringNumber);

const myString = "56";
const myNumber = Number(myString);

console.log(myNumber);
console.log(typeof myNumber);

const myValue = 0;
const myBoolean = Boolean(myValue);

console.log(myBoolean);
console.log(typeof myBoolean);
