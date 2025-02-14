function removeDuplicates(array) {
  return [...new Set(array)];
}

const names = removeDuplicates([
  "apple",
  "orange",
  "banana",
  "mango",
  "banana",
]);
console.log(names);
