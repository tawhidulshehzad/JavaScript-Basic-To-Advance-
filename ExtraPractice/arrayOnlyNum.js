const mixedArray = ["a", 22, 56, NaN, undefined, ["a", "b"], { ob: "lala" }];
// const mixedArray = 1;

function getOnlyNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "invalid array";
  }
  let onlyNumArray = [];
  for (const elem of arr) {
    if (typeof elem === "number" && !isNaN(elem)) {
      onlyNumArray.push(elem);
    }
  }
  return onlyNumArray;
}

console.log(
  getOnlyNumbers([
    1,
    null,
    undefined,
    18,
    5.5,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(getOnlyNumbers(["1", { num: 2 }, NaN]));
console.log(getOnlyNumbers([1, 2, -3]));
console.log(getOnlyNumbers({ num: [1, 2, 3] }));
console.log(getOnlyNumbers([1.5, 2.75, -3.2, 4]));
