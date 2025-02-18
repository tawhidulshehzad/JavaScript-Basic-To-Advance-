// const ranStr = "hi how are you i am here";
// const vowels = ["a", "e", "i", "o", "u"];

// function vowelsCount(ranStr, vowels) {
//   let vowelsObject = {}; // Create an empty object

//   for (const element of ranStr) {
//     if (vowels.includes(element)) {
//       // Check if element is a vowel
//       if (vowelsObject[element]) {
//         vowelsObject[element] += 1; // Increase count if vowel already exists
//       } else {
//         vowelsObject[element] = 1; // Initialize count to 1
//       }
//     }
//   }

//   console.log(vowelsObject);
// }

// vowelsCount(ranStr, vowels);

// const ranStr = "hi how are you i am here";
// const vowels = new Set(["a", "e", "i", "o", "u", "a", "A"]);
// let charCount = {};

//  const vowelsSet = new Set(vowels);
// for (let element of ranStr) {
//   if (vowels.has(element)) {
//     charCount[element] = (charCount[element] || 0) + 1;
//   }
// }
// console.log(charCount);

// const ranStr = "hi how are you i am here";
// const splitSTr = ranStr.split(" ");
// let strCheck = [];

// for (const element of splitSTr) {
//   strCheck.push(element.length);
// }
// console.log(Math.max(...strCheck));

// function findLongestWord(words) {
//   let longest = "";

//   for (const word of words) {
//     if (word.length > longest.length) longest = word;
//   }
//   return longest;
// }

// // Example usage
// const wordsArray = ["apple", "banana", "cherry", "pineapple", "grape"];
// console.log(findLongestWord(wordsArray)); // Output: "pineapple"

// function hasPairWithSum(arr, target) {
//   let seen = new Set();

//   for (let num of arr) {
//     let complement = target - num;
//     if (seen.has(complement)) {
//       return true;
//     }
//     seen.add(num);
//   }

//   return false;
// }

// // Example usage:
// console.log(hasPairWithSum([1, 2, 3, 9], 8)); // false
// console.log(hasPairWithSum([1, 2, 4, 4], 8)); // true

const object4 = {
  a: function (x) {
    console.log(this, "hi");
  },
};

// console.log(object4.a());


