const obj = {
  name: "Jayti",
  age: 25,
  // address: {
  //   street: "21 2nd Street",
  //   city: "New York",
  // },
};
function replacer(key, value) {
  if (typeof value === "string") {
    // console.log("replacer invoked", value);
    return undefined;
  }

  return value;
}
const json_obj = JSON.stringify(obj, replacer, 2);
console.log(typeof obj);
console.log(json_obj);
