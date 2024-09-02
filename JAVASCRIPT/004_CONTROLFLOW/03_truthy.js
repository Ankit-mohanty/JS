// In some case we have to assume that the value is true. This is called truthy.
const email = "ankit@12.gmail";
if (email) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

/*  The values we  consider false in JavaScript are: 
            undefined, null , 0 ,NaN(Not A Number), false, -0, BigInt 0n,"" (empty string). */
const email1 = "";
if (email1) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");// output
}

/* The values we  consider truthy in JavaScript are: 
   any values inside string is consider as true, [],{},function(){}
*/

// check the array is empty or not
const myArr = [];
if (myArr.length === 0) {
    console.log("It's a empty array");
}

const myObject = {};
if (Object.keys(myObject).length === 0) {// Here we first convert an object to an array and then we check the length of an array.
    console.log("Object is empty");
}

//Nullish coalescing operator (??)// it will check value is null or undifined.
let val1;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 10;
console.log(val1);

// Terniary Oparator

const age = 80;
age > 12 ? console.log('Adult') : console.log('Child');//Adult
age > 81 ? console.log('Adult') : console.log('Child');//Child
