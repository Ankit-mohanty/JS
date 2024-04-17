/*
 Premetive Data Type
 1. Primitive data types:
  (i) String 
  (ii) Number
  (iii) Boolean
  (iv) Null
  (v) Undefined
  (vi) Symbol
  (vii) BigInt
  
imp -: JS is Dynamically-typed.  Because  interpreter assigns variables a type at runtime based on the variable's value at the time.

imp -: TS(Type Script) is  Statically  typed programming language, which means the variable type must be declared while declaring it.

  2. Non-Primitive data/ Referance Type
  (i) Objects
  (ii) Arrays
  (iii) Functions
  (iv) Dates
 */

// Premetive Data Type
const score = 100;// number type
const score1 = 100.2;// Number type 
const score2 = null;// null type// If we use typeOf function to find the data type of null it return  object but in reality its a null type.
const score3 = false// boolean type
let score6 = undefined; // undefined type  
let score5; //we  can also use this way to declare it undifine.

const ankit = Symbol('123');
const ankit1 = Symbol('123');
console.log(ankit, ankit1);
console.log(ankit === ankit1);// Symbol type  is unique so the output will be false. If we pass the same value in it but it's return value is not same .

const bigNumber = 12n;// if any numv=ber carry 'n' at last of it it means it's type is bigint.
console.log(typeof bigNumber);

// Non- premeytive Data type
//Array
const aaa = ["rahul", "ankit", "mohanty"];
console.log(typeof aaa); 
console.log(aaa);
//Object
const myObj = {
    name: "Ankit Mohanty",
    age: 12
}
console.log(myObj);
console.log(typeof myObj);
//Function
const myFunction = function rahul() {
    console.log("Welcome to my world");
}
console.log(myFunction);
console.log(typeof myFunction);
// note -: all the non premitive data type data type will come object. Only function type is return function/functionObject type except this all are object type. 