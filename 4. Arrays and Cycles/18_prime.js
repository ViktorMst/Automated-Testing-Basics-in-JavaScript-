// Implement a loop that prints prime numbers to the console

const limit = 30;

for (let number = 2; number <= limit; number++) {
  let primeNum = true;

  for (let divisor = 2; divisor * divisor <= number && primeNum; divisor++) {
    if (number % divisor === 0) {
      primeNum = false;
    }
  }

  if (primeNum) {
    console.log(number);
  }
}
