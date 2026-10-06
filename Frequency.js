// Check if two strings are anagrams
// Description: Determine whether two strings contain the same characters in the same frequency.
// Input: "listen", "silent"
// Output: true

function stringAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if((str1.split('').sort().join('')) === ((str2.split('').sort().join('')))) {
return true;
  }
  else {
    console.log("not an anagram");
    return false;
  }
}
console.log(stringAnagram("liston", "silent"));