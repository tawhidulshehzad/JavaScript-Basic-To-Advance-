const array01 = ["a", "b", "c", "d", "e", "l"];
const array02 = ["g", "h", "i", "j", "k", "l"];

// function matchTheArray(array01, array02) {
//   for (const element01 of array01) {
//     for (const element02 of array02) {
//       if (element01 === element02) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// function matchTheArray(array01, array02) {
//   const set = new Set(array01);
//   for (const item of array02) {
//     if (set.has(item)) {
//       return true;
//     }
//   }
//   return false;
// }
function matchTheArray(array01, array02) {
  return array01.some((item) => array02.includes(item));
}

const getTheArray = matchTheArray(array01, array02);
console.log(getTheArray);

// function booooooooo(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// }

// const finalArray = booooooooo(6);
// console.log(finalArray);
