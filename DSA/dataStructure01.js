const numbers = [1, 2, 3, 4, 5];

const printAllNumber = (numbers) => {
  numbers.forEach((number) => {
    console.log(number);
  });
  console.log("-----");
  numbers.forEach((fNumber) => {
    numbers.forEach((sNumber) => {
      console.log(fNumber + sNumber);
    });
  });
};

// printAllNumber(numbers);

function searchWithSet(arr, target) {
  let set = new Set(arr); // Convert array to a set
  return set.has(target);
}

console.log(searchWithSet([10, 20, 30, 40], 30)); // true
console.log(searchWithSet([10, 20, 30, 40], 50)); // false
