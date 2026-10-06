// Find factorial of a number
// Description: Calculate the factorial of a given non-negative integer.
// Input: 5
// Output: 120

let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}
console.log(factorial);