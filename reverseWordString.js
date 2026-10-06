// Reverse a string with individual words reversed
// Description: Reverse the entire string including characters of each word.
// Input: "Hello World"
// Output: "dlroW olleH"

// const string = "Hello World";
// const reversedString = string.split('').reverse().join('');
// console.log(reversedString);

let str = "hello world";
let result = "";
for(let i=str.length-1; i>=0; i--) {
 result = result + str[i];   
 if(str[i] === " ") {
  result = result + " ";
 }
}
console.log(result);