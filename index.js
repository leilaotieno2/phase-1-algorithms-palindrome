function isPalindrome(word) {
  // Convert the word to lowercase and remove any non-alphanumeric characters
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Loop through the characters in the word
  for (let i = 0; i < cleanWord.length / 2; i++) {
    // If the characters at each end of the word don't match, return false
    if (cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]) {
      return false;
    }
  }
  // If we've made it through the loop without returning false, the word is a palindrome
  return true;
}

/*
  Pseudocode:

  function isPalindrome(word) {
    cleanWord = remove non-alphanumeric characters from word and convert to lowercase
    for each character in the first half of cleanWord:
      if the character doesn't match the corresponding character in the second half of cleanWord:
        return false
    return true
  }

  Time complexity: O(n), where n is the length of the input word
*/

/*
  Explanation:

  The function first removes any non-alphanumeric characters from the input word and converts it to lowercase. Then it loops through the first half of the clean word and checks whether each character matches the corresponding character in the second half of the word (i.e., the character at the opposite end of the word). If any characters don't match, the function returns false. If all characters match, the function returns true.

  For example, when the input word is "racecar", the clean word is "racecar". The function checks whether the first character "r" matches the last character "r", the second character "a" matches the second-to-last character "a", and so on. Since all characters match, the function returns true. Similarly, when the input word is "robot", the clean word is "obo". The function checks whether the first character "o" matches the last character "o", the second character "b" matches the second-to-last character "o", and since they don't match, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
