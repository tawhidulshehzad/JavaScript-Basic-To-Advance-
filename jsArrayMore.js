const numbers = [212, 5, 98];
// numbers.reverse();
// console.log(numbers);
let newNumber = [];

for (var i = numbers.length - 1; i >= 0; i--) {
  // newNumber.push(numbers[i]);
}
// console.log(newNumber);

for (let number of numbers) {
  newNumber.unshift(number);
}
console.log(newNumber);
