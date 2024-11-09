function longestWord(str) {
  const splitStr = str.split(" ");
  const lengthOfWord = [];
  // let anotherLength = 0;
  for (const word of splitStr) {
    lengthOfWord.push(word.length);
    if (word.length > lengthOfWord.length) {
      lengthOfWord.push(word.length);
    }
  }
  return Math.max(...lengthOfWord);
}

console.log(longestWord("I am a Learner"));

const users = [
  { firstName: "shamim", lastName: "hasan", age: 30 },
  { firstName: "rakib", lastName: "ahmed", age: 25 },
  { firstName: "akib", lastName: "khan", age: 22 },
];
const fullNames = users.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);
console.log(fullNames); 
