let specificDate = new Date(2022, 10, 6); // November 6, 2022 (months are 0-based, so 10 = November)

// console.log(specificDate);

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDay());
console.log("===========");

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log("=========");
const myDate = new Date();
myDate.setFullYear(2025);
myDate.setMonth(0);
myDate.setDate(15);
console.log(myDate);
