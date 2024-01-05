// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples//

function sum(pears, apples) {
  let acceptedFruits = pears + apples;
  console.log(`Accepted fruits: ${acceptedFruits} kg`);
  return acceptedFruits;
}

let pears = 153;
let apples = 97;

sum(pears, apples);
