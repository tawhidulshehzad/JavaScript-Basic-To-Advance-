const array = ["Apple", "banana", "apple", "Orange", "BANANA", "apple"];
const uniqueArray = [...new Set(array.map((item) => item.toLowerCase()))];

console.log(uniqueArray);
