/* 
-> In JS it define single moment.
-> This moment id define for january 1,1970.
-> Date are calculated in milisecoends.
-> 
*/
let myDate = new Date();// here we create Date object.
console.log("Date In ISO Format");
console.log(myDate);// In this  case will be displayed current date and time. time we can not read.It return a string, representing the date (year, month, day) in ISO format.(International Organization for Standardization)
console.log(myDate.toLocaleString());// Returns a string with a language sensitive representation of the date.It return " 19/4/2024, 8:46:03 pm ".
console.log(myDate.toJSON(myDate));// It return a string, representing the date (year, month, day) in ISO format.

console.log("Date In String Format")
console.log(myDate.toISOString());// same as  above but with more information about data and time.It return a string, representing the date (year, month, day) in ISO format.
console.log(myDate.toString());// In this  case will be displayed full information about the data.
console.log(myDate.toDateString());//  It returns a string representing the date portion of the Date object.
console.log(myDate.toTimeString()); //It returns a string representing the time portion of the Date object.
console.log(myDate.toLocaleDateString());//  Returns a string with a language sensitive representation of the date portion of this date. The exact output format 19/4/2024.
console.log(typeof myDate);// It return OBJECT.

const myCreatedDate = new Date(2023, 0, 11);// here de pass the year ,month(0),and date. In js we count month form 0.Here month start with 0 beacuse we pass value in Array format.
const myCreatedDate1 = new Date(2023, 0, 11, 5, 3);// here de pass the year ,month(0),and date. In js we count month form 0. We decalre time 5.3 in this variable

let birthDay = new Date("2024-01-15")
let birthDay1 = new Date("01-15-2024");
console.log("Date declare in Indian Format " + birthDay1.toDateString());
console.log("New format to declare a date is " + birthDay.toLocaleString());
console.log("Date and time is " + myCreatedDate1.toLocaleString());// OUTPUT : 11/1/2023, 5:03:00 am
console.log("Date Is  " + myCreatedDate.toDateString());//Wed Jan 11 2023.   In return it will gives us date and which day.

let myTimeStamp = Date.now();
console.log(myTimeStamp);// It returns date but in Milisecoends.
console.log(myCreatedDate.getTime());// It returns date but in Milisecoends.
console.log(Math.round(Date.now() / 1000));// Here we convert milisecoends in secoends.


let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);// We add 1 in this method because we want exact month but in js it start form 1 so we ad to find exact month.
console.log(newDate.getFullYear());
console.log(newDate.getTimezoneOffset());

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    calendar: "string",
    month: "numeric",
    year: "numeric",
    day: "numeric"
}));// here  is a syntax to use the date .