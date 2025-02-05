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

printAllNumber(numbers);
