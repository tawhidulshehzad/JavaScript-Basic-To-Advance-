const person = ["rakib", "nokib", "amik", "sakib", "bakib"];
// const sortedPerson = person.sort();
// console.log(sortedPerson);
const fewMan = "we are rakib shamim";

const splitStr = fewMan.split(" ");
let finalStr = [];
for (const word of splitStr) {
  finalStr.unshift(word);
}
const joinedStr = finalStr.join(" ");
let result = joinedStr[0].toUpperCase() + joinedStr.slice(1);

console.log(result);
