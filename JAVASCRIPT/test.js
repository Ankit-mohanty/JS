// const printMe = "rahul"
// const mmyaage ="12"
// console.log(`my printMe is ${printMe} and my age is ${mmyaage}`);


// const num = 1000000;
// console.log(num.toLocaleString('en-IN'));


// function nam() {
//     console.log("rahul");

// }
// nam()

// const user={
//  userName:"Ankit",
//  price:22555,
//  welcomeMessage: function () {
//     console.log(`${this.userName} , welcome to our website`);
//    //  console.log(`${userName} , welcome to our website`);

//  }
// }

// console.log(user.welcomeMessage);
// user.welcomeMessage()

// function nod(){
//    console.log(this);

// }

// nod()

// const num=()=>{
//    (an={printMe:"ankit",
//       roll:45
//    })
//    console.log(an.printMe);

// }
// num()

// (function() {
//    console.log(`Db is here`);
// })()
// standard IIFE
// (function () {
//    // statements…
//    console.log(`Db`);

//  })();
// (function ank() {
//    let message = "Hello from IIFE!";
//    console.log(message); 
// })();

// if(2==="2"){
//    console.log("Executed");

// }else{
//    console.log("Not Correct");

// }

// for (let i  = 0; i < 5; i++) {
//    console.log(i);
//    for (let j = 0; j <5; j++) {
//       console.log(`${i} * ${j}= ${i*j}`);


//    }

// }

const arr = [1, 2, 3, 4, 5, 6]
// function printMe(i) {
//    console.log(i);

// }

// arr.forEach(printMe)

const newArr = []
arr.forEach((i) => {
   if (i < 4) {
      newArr.push(i)
   }
})
// console.log(newArr);