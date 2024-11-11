const fruits = ["apple", "orange", "watermalone", "mango000"];
// console.log(indexOf("apple"));
function getThelongestString(arr) {
  let longestStr = [];
  for (const element of arr) {
    longestStr.push(element.length);
  }
  const bigestLength = Math.max(...longestStr);
  const indexOfLongest = longestStr.indexOf(bigestLength);
  console.log("Longest String: ", arr[indexOfLongest]);
}
getThelongestString(fruits);
