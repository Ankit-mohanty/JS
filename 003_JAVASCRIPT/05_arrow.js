const userName = {
    name1: "ankit",
    price: 1200,
// This is use to refer current context. This  will give us the access of all properties and methods in this object.
    welcomeMessage: function () {
        console.log(`${this.name1}, Welcome to the wepsite`);
        // console.log(this);
        /*output : {
            name1: 'ankit',
            price: 1200,
            welcomeMessage: [Function: welcomeMessage]
          }*/
    }
};

userName.welcomeMessage();
console.log(this); //output: {} empty object because of default context when called a method.
//  Before node we write JS in the browser so the  window was the default context but now it's an empty object.
// So if you want to access properties inside methods then use arrow functions or bind the this keyword.

/* function chai() {
    let username = "Ankit";
    console.log(this.username);//undefined.. This is not workin inside the function it only work inside the object
    console.log(this);// This will print some node related values.
};
chai(); */


// In arrow  functions this is always bound to owner obj i.e., window in browser and global in Node js.
// It is introdeuced in ES6 version of JS
const chai = ()=>  {
console.log(this);// print a empty object.
}

// basic arrow function
const add=(a,b)=> {// if we use culrli brace we are bound to use retur key word.
    return a+b;
};
console.log(add(2,12000));

// If there is a oneline function we can write like this . We call it imoplecite return.
const addThree=(a,b,c)=> a+b+c;
console.log(addThree(5,8,9));

const addfour=(a,b,c,d)=> (a+b+c+d);
console.log(addfour(5,6,8,9));

// basically we use this  () for passing the object  as an argument to another function.
const obj=()=>({unser:"Ankit"});
console.log(obj());