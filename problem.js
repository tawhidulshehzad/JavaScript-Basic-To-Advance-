function inchToFeet(inch) {
  const feet = parseInt(inch / 12);
  const feetRemaining = inch % 12;
  return feetRemaining + " ft " + feet + " inch";
}
const hisHeight = inchToFeet(75);
console.log(hisHeight);
