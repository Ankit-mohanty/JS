// In this case we do not know howmany arguments are there. if pass single value 
function calculateCartPrice(...num1) {
    //" ... " This is called rest opretor. By using this multiple values in function.
    return num1;
}
console.log(calculateCartPrice(5, 5, 8, 6, 2));// in this case it will return only the first number.
console.log(calculateCartPrice(5, 5, 8, 6, 2));// in this case it will return only the first number.

function calculateCartPrice(val1, val2, ...num1) {
    //" ... " This is called rest opretor. By using this multiple values in function.
    return num1;
}
console.log(calculateCartPrice(23, 25, 65, 45, 85));// output : [ 65, 45, 85 ] 23 go inside the val1,  25 go inside the val2 and so it will print rest of the values 

//Pass Object In function
const user = {
    name: "ankit",
    prices: 12200
};
function handelObject(anyObject) {
    if (!anyObject.name || anyObject.price) {
        return `typesafey error`;

    }
    return `userName is ${anyObject.name} and price is ${anyObject.price}`;
};
console.log(handelObject(user));

// we can directly pass the object in a function 
console.log(handelObject({
    name: "Ankit Sharma",
    price: 12000
}));


// Pass an array in a function
const funArr = [1, 2, 3, 5, 6, 4];

function getArrayy(myarr) {
    return myarr[2];
};
console.log(getArrayy(funArr));