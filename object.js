const bottle = {
  brand: "apple",
  price: 10,
  color: "white",
  isClean: true,
};

const subject = {
  name: "biology",
  teacher: "Rashed",
  chapter: ["firs", "second", "third"],
  activities: {
    social: "policies",
    sports: "cricket",
  },
  color: "black",
  isOk: true,
  roll: 1,
};
// console.log(bottle["color"]);
let newName = "name";
subject.name = "abid";
// console.log(subject);

const keys = Object.keys(subject);
// console.log(keys);
const values = Object.values(subject);
// console.log(values);
// delete subject["color"];
// console.log(subject);
// console.log(subject["activities"].sports);

/* for (const key in subject) {
  console.log(key, ":", subject[key]);
}
Object.defineProperty(subject, "birth year", { value: "2008" });
console.log(subject); */

var obj = { Name: "Joe" };

obj.Age = 12;
// console.log(obj.Age)

obj["Country"] = "USA";
/* console.log(obj.Country)
console.log(obj); */

// console.log(keys);

for (const key in subject) {
  let getType = typeof subject[key];
  console.log("key :", key, "|","Type :", getType);
}
