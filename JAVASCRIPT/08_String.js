let name = "ankit ";
const b = 50;

/* new style concatenation
console.log(`my name is ${name} and my b is ${b}`);
console.log(name + b + " value");
 */

/* 
->  concatenation of string we use " + " symbol. But is not use in moden js. We can also use template literals to concate
   JavaScript is a loosely typed language, which means it allows you to assign values of one data type to variables of another data type without
   JavaScript is a loosely typed language, which means it does not require you to declare the data type of your variable before using them.
    In the above code, we have a variable 'name' which holds the string value of the person's name and another variable 'b
   This is a comment in JavaScript. Comments are ignored by the JavaScript interpreter, so they don't affect how your code runs. They
   Output: ankit50value
 */

// another syntax to declare the String
const mm = new String(' Ankit ');
// console.log(mm.length);
// console.log(mm.toUpperCase());
// console.log(mm.toLowerCase());
// console.log(mm.charAt(2));// In charAt function we have to put the index value fo the charecter to find it.
// console.log(mm.indexOf('t'));// in this function we  use it to find the index value of the  character.

console.log(mm.substring(0, 4)); // here substring method used from which index number to which index number want to print. outpt : Anki index value is 0,1,2,3 only. 4 is not cunt in this function.
// in substring function we can not pass -ve value if we pss the -ve value it will ount form the bigning.

console.log(mm.slice(-5,3));// here  -5 means from last five characters and 3 means till three characters are showing. In slice and subString it is the main difference that we can pass -ve value in  slice. If we put -ve value in it it will count the index form reverse.


const mm1= "  an  ";
console.log(mm1);
console.log(mm1.trim()); // here trim() method used for removing the white space from both sides of a string.

console.log(mm.replace('n','t')); // replace() method is used to replace the specified value with another value.
// in replace function first value is wchich value we ant to change and secoend is  what we want to put instead of that value.

console.log(mm.includes(mm1)); // includes() method returns true or false whether the specified string present in the main string.

const mm2= "ankit-mohanty-rahul";// i want to convert this string to array based on  "-". We can do anything insead of the '-'.
console.log(mm2.split('-'));// we use this function to conavert a string to array.

console.log(mm2.charAt(1));

console.log(mm2.localeCompare(mm1));

console.log(mm1.trimEnd());// this function remove space form the rnd .
console.log(mm1.trimStart());// this method remove the space form the start

console.log(mm2.startsWith('a'));// this mathod chack the method  that our string starts with or not.// this method return typpe is BOOLEAN
console.log(mm2.endsWith('a'));// This method  check that our string ends with or not.  this method return typpe is BOOLEAN

// console.log(mm2.padStart(25));//this function add Hi at the starting side of the string.iF WE DO not pass any value in it it will pass use "<space >" to incresh the string length.
console.log(mm2.padEnd(21,'hi'));// this function add Hi at the ending side of the string.iF WE DO not pass any value in it it will pass use "<space >" to incresh the string length.
console.log(mm2.length);

console.log(mm.repeat(5));// this mwthod is use to repeat the value of it.

console.log(mm.search(/[A-Z]/g));
