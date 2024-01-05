// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const myString = "2 + 3 223 2223";

const sliced = myString.slice(0, 5);
console.log(sliced);
