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

function vowelCount(str) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  const lowerString = str.toLowerCase();
  for (const element of lowerString) {
    if (vowels.hasOwnProperty(element)) {
      vowels[element]++;
    }
  }
  return vowels;
}
console.log(vowelCount("I am a good boy"));


