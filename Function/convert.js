function inchTofeet(inch) {
  const feet = inch / 12;
  const feetInt = parseInt(feet);
  const inchRemaining = inch % 12;
  const result = feetInt + " ft " + inchRemaining + " inch";
  return result;
}

console.log(inchTofeet(75));
