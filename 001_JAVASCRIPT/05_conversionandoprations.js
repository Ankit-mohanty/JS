//CONVERT STRING TO NUMBER
let score = "33";// we make it string
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let num = "25ugyd"
console.log(typeof num);//string
let valuenum = Number(num);
console.log(typeof valuenum);
console.log(valuenum);// here it return because it can not convert the sting to number.
/*
-> 33 convert into number.
->"33abc" convert into NaN(Not a Number).
-> null convert into 0.
-> undifined convert into NaN.
-> in boolean true=1, false=0
*/
//CONVERT INT TO BOOLEN
let isLogedin = 1;// if we put a string here it convert into true.if we use empty string it gives false
let booleanLogein = Boolean(typeof isLogedin);
console.log(booleanLogein);
/*
1 convert into boolen gives true.
0 convert into boolen gives false.
"Rahul" convert into boolen gives true.
"" convert into boolen gives false.
*/
//CONVERT INT TO STRING
let a = 25;
let intToString = String(a);
console.log(typeof intToString);

let c=20;
let makestring=String(c);
console.log(typeof makestring);

let ankit = 52;
console.log("Ankit = " +typeof ankit);
let convertitintoString= String(ankit);
console.log( "Ankit =" + typeof convertitintoString);