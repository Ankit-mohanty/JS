const ob = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(ob)
/* 
Output
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false

*/

const chai = {
  name: "ank",
  price: 220,
  isAvailable: true,

  getVal: function () {
    console.log("Code phati gala");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/* Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
}) */
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} == ${value}`);
  }
}
