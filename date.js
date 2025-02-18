// const today = new Date();
// console.log(today.getMonth());
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//  console.log(i);
// }, 100);
// }

const arrayStr = ["a", "b", "c", "d", "e", "f", "a"];

function countArrayElement(array) {
  let newObject = {};
  for (const element of array) {
    if (newObject[element]) {
      newObject[element] += 1;
    } else {
      newObject[element] = 1;
    }
  }
  console.log(newObject);
}
countArrayElement(arrayStr);
function countArrayElement(array) {
  let newObject = {};
  for (const element of array) {
    if (newObject[element]) {
      newObject[element] += 1;
    } else {
      newObject[element] = 1;
    }
  }
  console.log(newObject);
}
countArrayElement(arrayStr);
