const fstring = "hello world bangladesh!";
const strToArray = fstring.split(" ");

let newStr = " ";
let eachWord = "";

for (const word of strToArray) {
  newStr = newStr + " " + (word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(newStr.trim());

/* function capitalizeFirstLetter(string) {
  return [...string][0].toUpperCase() + [...string].slice(1).join("");
} */

// Example usage
/* const example4 = "javascript good";
// console.log(capitalizeFirstLetter(example4)); // Output: Javascript
// another one
function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage
const sentence = "capitalize each word in this sentence";
console.log(capitalizeWords(sentence)); // Output: Capitalize Each Word In This Sentence */
