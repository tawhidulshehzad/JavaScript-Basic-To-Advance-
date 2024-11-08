// function getTheRepeatCount(ar) {
//   const aArray = [42, 13, 13, 81, 96, 42, 5, 5];
//   let counter = 0;
//   for (const element of aArray) {
//     if (ar === element) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(getTheRepeatCount(5));

/* =============
Task-3:
Write a function to count the number of vowels in a string. 
================
*/

// function vowelCount(str) {
//   const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
//   const lowerString = str.toLowerCase();
//   for (const element of lowerString) {
//     if (vowels.hasOwnProperty(element)) {
//       vowels[element]++;
//     }
//   }
//   return vowels;
// }
// console.log(vowelCount("I am a good boy"));

function countEachVowel(str) {
  // Array to store counts for vowels: a, e, i, o, u in that order
  const vowels = ["a", "e", "i", "o", "u"];
  const counts = [0, 0, 0, 0, 0]; // Initialize counts for each vowel to 0

  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  const lowerStr = str.toLowerCase();

  // Loop through each character in the string
  for (const char of lowerStr) {
    const index = vowels.indexOf(char);
    if (index !== -1) {
      counts[index]++; // Increment the count for the corresponding vowel
    }
  }

  return counts;
}

// Example usage
const inputString = "Hello World, this is an example sentence!";
const result = countEachVowel(inputString);
console.log(
  `Vowel counts: a:${result[0]}, e:${result[1]}, i:${result[2]}, o:${result[3]}, u:${result[4]}`
);




