// const numbers = [42, 13, 13, 58, 65, 81, 96, 5, 5, 42];
const numbers = ["shamim", "Shamim", "bamim", "kamim","KAMIM",];

function noDuplicates(numbers) {
  const newArray = [];
  for (const number of numbers) {
    if (newArray.includes(number.toLowerCase()) === false) {
      newArray.push(number);
    }
  }
  console.log(newArray);
}
noDuplicates(numbers);
