const address = "dhaka Barishal";

const part = address.slice(0, 5);
// console.log(part);

const newAddress = address.split("");
// console.log(newAddress.join(""));
let address02 = "";
for (let i = 0; i < address.length; i++) {
  address02 = address[i] + address02;
}
// console.log(address02);

const reversed = address.split("").reverse().join("");
// console.log(reversed);

// const country = "Bangladesh";

const number = [10, 20, 2, 2, 32, 0, 2];
// console.log(address.length);

const dirink = "watery";
const liquid = "watery  ";

// if (dirink.trim() === liquid.trim()) {
//   console.log("valo");
// } else {
//   console.log("not ");
// }

const localAddress = "dhaka Barishal";
// console.log(localAddress.split("").reverse().join(""));

let reverse = "";
for (const add of address) {
  reverse = add + reverse;
}
console.log(reverse);
