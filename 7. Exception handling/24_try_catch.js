// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch (referenceError) {
  console.error("Error: 'let' must be declared before use");
}

try {
  let division = 1 / 0;

  if (!Number.isFinite(division)) {
    throw new Error("Cannot divide by zero");
  }

  console.log(division);
} catch (error) {
  console.error("Error:", error.message);
}
