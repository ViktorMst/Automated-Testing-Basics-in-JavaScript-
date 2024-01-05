// Get the day, month and year of the current date and output it to the console separately

const now = new Date();

const day = now.getDate();
console.log("Day:", day);

const month = now.getMonth() + 1;
console.log("Month:", month);

const year = now.getFullYear();
console.log("Year:", year);
