// Sum of three odd numbers

let numbers = 0;

for (let i = 0; i <= 5; i++) {
  numbers = i % 2 == 0 ? numbers + i : numbers + 0;

  /* if (i % 2 == 0) {
    numbers = numbers + i;
  } */
}
console.log(numbers);
