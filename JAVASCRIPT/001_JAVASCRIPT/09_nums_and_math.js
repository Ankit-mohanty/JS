const score = 1200; // Here JS automatically detect that it is a number.
console.log(score);

const balance = new Number(2000); // Here we tell JS that it is a number.
console.log(balance);

console.log(balance.toString().length);// By using toString we can convert a number to  string .
console.log(balance.toFixed(2));// This function  rounds the number and returns as a string with fixed decimal points.

const otherNumber = 123.891;
console.log(otherNumber.toPrecision(3));// This function will precise the value. It always give priority to left to right.It returns String. We can give the precision value in between 1 to 21.

const hundred = 1000000;
console.log(hundred.toLocaleString());// this method is use to  show the value in using " , ".   
console.log(hundred.toLocaleString('en-IN'));// In old JS  version there was by default use US style number format thats why we will call this "en-IN" for changing USA format to INDIAN format.
console.log("End Of Numbers");

// ++++++++++++++ MATHS ++++++++++++++++
console.log(Math.abs(56));// It will  use to convert -ve value to +ve value.

console.log(Math.round(74.56));// It will return a round figure  of given decimal.It will give lower number if the decimal value is less than 0.5 otherwise it return upper value of the given number.

console.log(Math.ceil(12.2)); // If will  round up the decimal part of the number. But it always gives the " UPPER " value.

console.log(Math.floor(4.2)); // If will  round up the decimal part of the number. But it always gives the " LOWER " value.

console.log(Math.sqrt(25));// It will give the Square root of the given number.

console.log(Math.min(4, 7, -1, 10));// It will return the minimum value of given array.
console.log(Math.max(4, 7, -1, 10));// It will return the maximum value of the given array.

console.log("Random Value");
console.log((Math.random() * 10) + 1);//It gives random decimal between 0 and 1.If we ant to increase tha value  we multiply 10 in math.random function and to make sure the number should not come 0 we add 1 after the multiplication.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min) + min));// this logic will generate the value in between 10 to 20.