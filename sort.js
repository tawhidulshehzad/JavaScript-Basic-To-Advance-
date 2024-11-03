const person = ["rakib", "nokib", "amik", "sakib", "bakib"];
// const sortedPerson = person.sort();
// console.log(sortedPerson);
const fewMan = "we are rakib shamim";

const splitStr = fewMan.split(" ");
let finalStr = [];
for (const word of splitStr) {
  finalStr.unshift(word);
}
console.log(finalStr.join(" "));
