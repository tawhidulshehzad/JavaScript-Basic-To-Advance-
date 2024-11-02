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
};
// console.log(bottle['color']);
// let newName = "name";
subject.name = "abid";
// console.log(subject);

/* const keys = Object.keys(subject);
console.log(keys);
const values = Object.values(subject);
console.log(values); */
// delete subject["color"];
console.log(subject);
console.log(subject["activities"].sports);
