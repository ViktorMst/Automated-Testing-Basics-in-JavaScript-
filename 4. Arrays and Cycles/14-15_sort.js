//Sort the array [1,6,7,8,3,4,5,6] in descending order
// Filter array [1,6,7,8,3,4,5,6] by value> 3

const myArray = [1, 6, 7, 8, 3, 4, 5, 6];
myArray.sort((a, b) => b - a);

console.log(myArray);

const newArray = myArray.filter((el) => el > 3);

console.log(newArray);
