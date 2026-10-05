const string = "Hello mam , my name is Ankit & Madam i'm new here & bob referred me here I belongs to tt family";
const newString = string.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s/);
let smallestPalindrome = "";
for (let i = 0; i < newString.length; i++) {
  const reverseString = newString[i].split('').reverse().join('');
  if (newString[i] === reverseString) {
    if (smallestPalindrome === "" || newString[i].length < smallestPalindrome.length) {
      smallestPalindrome = newString[i];
    }
  }
}
console.log(smallestPalindrome);