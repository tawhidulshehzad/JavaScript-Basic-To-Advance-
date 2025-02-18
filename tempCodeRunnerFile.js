function validContact(contact) {
  return typeof contact !== "string"
    ? "invalid"
    : contact.length === 11 &&
      contact.startsWith("01") &&
      !contact.includes(" ")
    ? true
    : false;
}