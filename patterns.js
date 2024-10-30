let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/* pretter ignore   *
    **
   ***
  ****
 ***** */

let n2 = 5;
let eString = "";
for (let i = 1; i <= n2; i++) {
  for (let j = 0; j < i; j++) {
    eString += "*";
  }
  eString += "\n";
}
// console.log(eString);

/* *
 **
 ***
 ****
 ***** */

let num = "";

for (let i = 1; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    num += "*";
  }
  num += "\n";
}
// console.log(num);
