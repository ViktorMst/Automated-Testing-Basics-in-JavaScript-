/**
 *  Create a car object, add a color property to it with the value equals 'black'
 * Change the color property of the car object to 'green'
 * Add the power property to the car object, which is a function and displays the engine power to the console
 */

const myCar = {
  color: "black",
};

myCar.color = "green";
myCar.engPow = "135HP";
myCar.power = () => {
  console.log("Engine power =", myCar.engPow);
};

myCar.power();
