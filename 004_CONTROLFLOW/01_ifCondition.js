

// In if we pass the conadition true it will run o ther wise it will not run.
// if (true) {}
// some symbols for check it
/*
"<" = Less Than
">" = Greater Than
"<=" = Less Than or equal
">=" = Greater Than or equal
"!=" = Not equal
"==" = Equal to In this check they check only value not data type
"===" = Equal to In this case they check value and data type also
 */
/* if (2=="2") {
    console.log("Executed");
}
if (2==="2") {
    console.log("Executed");
}else{
    console.log("Not Executed");
} */

if (2 !== "2") {
    console.log("Executed");
}

const piont = 200;
if (piont > 10) {
    let power = "FLY";
    console.log(`User Can : ${power}`);
}
// console.log(`User Can : ${power}`);// this will not execute because we delcare power inside the scope.


// One Line If condition
const balanece = 12000;
if (balanece > 500) console.log("test") / console.log("Ankit") / console.log("Rahul");;// we can write multiple lines by using "/" or ",".

// Nesting If condition
const money = 2000;
if (money < 500) {
    console.log("Less Than");
} else if (money < 750) {
    console.log("Medium");
} else {
    console.log("High");
}


const userLogin = true;
const debitCard = true;
const loggedinFormGoogle = false;
const loggedinEmail = true;
if (userLogin && debitCard) { // In && (and) oprator  returns true only when both side are true otherwise it return first false value encounterd.
    console.log("Allow to Shop");
}
if (loggedinFormGoogle || loggedinEmail) {// In ||(or)  operator it will check any one of the conditions is true or not.
    console.log("You are in");
}