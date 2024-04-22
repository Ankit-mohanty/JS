// {} except objct declararion whereever we use the braces we calles as scope.

let a =300;

// block scope
if (true) {
    let a =10;
    const b = 20;
    console.log("INNER : ",a);//INNER : 10  //300
    var c = 30;
};
console.log(a);// ReferenceError: a is not defined
console.log(b);// ReferenceError: a is not defined
console.log(c);// 30 here we declar the variable as  Var so it can be accessed outside of the if block also.