const n = 10;

let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    count += 1;
  }
}
// console.log(count);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
console.log(funChallenge(5));

Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

const boxes = ["a", "b", "c", "d", "e"];

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    console.log(boxes[i], boxes[j]);
  }
}
