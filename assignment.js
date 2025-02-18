function calculateVAT(price) {
  const finalPrice =
    typeof price === "number" && price > 0 ? (price * 7.5) / 100 : "invalid";
  return finalPrice;
}

function validContact(contact) {
  return typeof contact !== "string"
    ? "invalid"
    : contact.length === 11 &&
      contact.startsWith("01") &&
      !contact.includes(" ")
    ? true
    : false;
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "invalid";
  }
  let passMark = 0;
  let failMark = 0;
  for (const mark of marks) {
    mark >= 50 ? (passMark += 1) : (failMark += 1);
  }
  return passMark > failMark;
}

function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    person1 === null ||
    person2 === null
  ) {
    return "invalid";
  }
  if (
    (person1["gender"] === "female" && person2["gender"] === "male") ||
    (person1["gender"] === "male" && person2["gender"] === "female")
  ) {
    if (Math.abs(person1["age"] - person2["age"]) <= 7) {
      return true;
    }
  }
  return false;
}

function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "invalid";
  }
  let totalSleepSeconds = 0;
  let hoursMinutesSeconds = {};
  for (const second of times) {
    if (typeof second !== "number") {
      return "invalid";
    } else {
      totalSleepSeconds += second;
    }
  }
  const sleepingHours = Math.floor(totalSleepSeconds / 3600);
  hoursMinutesSeconds["hours"] = sleepingHours;
  const sleepingMinutes = Math.floor((totalSleepSeconds % 3600) / 60);
  hoursMinutesSeconds["minutes"] = sleepingMinutes;
  const sleepingSeconds = totalSleepSeconds % 60;
  hoursMinutesSeconds["seconds"] = sleepingSeconds;
  return hoursMinutesSeconds;
}
