// Write a function that determines whether a number is prime or not //

function myFn(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(myFn(29));
console.log(myFn(6));
