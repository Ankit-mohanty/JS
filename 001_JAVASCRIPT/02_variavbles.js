const account_id = 1435;
let email = "ankit@gmail.com";
var password = "Abhi";
account_City = "BBSR";
let accunt_state;// This returns undifined
// account_id=2; It is not allowed because we declare as constant
console.log(account_id);
console.table([account_id, email, password, account_City,accunt_state]);// for calling multiple variable 
/*
-> Prefer not to use var because of issue in block scoppe and functional scope.
*/