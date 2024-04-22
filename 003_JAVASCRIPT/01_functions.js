//basuc function
function sayMyname() {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
};
// here we print the function using the refarance
sayMyname();

//Adding Two Numbers
function addTwoNumbers(num1, num2) {
    // when we create a function we passes the type of  data that it will receive as parameters .
    console.log(num1 + num2);
    // return num1+num2;
}
addTwoNumbers(3, 5);
// When we call a function we passes the valeues inside this  () we call it as arguments.
addTwoNumbers(3, "4");// output : 34
addTwoNumbers(3, "a");// output : 3a
addTwoNumbers(3, null);//output : 3
const result = addTwoNumbers(3, 5);
console.log(result);// output: undifined

function addTwoNumber(num3, num4) {
    // Rule of function is after return statement  , nothing can be executed in javascript.
    // let result = num3 + num4;
    // return result;
    return num3 + num4;
}
addTwoNumber()// does not print anything
const numbers = addTwoNumber(6, 7);
console.log(numbers);//prints 13
console.log(addTwoNumber(5, 5));// print 10

// function loginUserMessage(username) {
function loginUserMessage(username="ankit") {// here we pass a default value to user name if we do not pass any value it will by default take a vale of user name.
    // if (username=== undefined) {
    if (!username) {
        return  'Please provide your username';
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage("ankit"));// print : ankit just loggedin
console.log(loginUserMessage(""));// print :just loggedin
console.log(loginUserMessage());// print : undefined
