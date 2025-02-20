/* +++++++++ Promise One Ex ++++++++ */

/* const promiseOne= new Promise(function(resolve,reject){
    // do any asynchronous action
    
    // Here we declare promise not connect with resolve or reject
    setTimeout(function(){
        console.log("Async Operation");
            // here we connect promise with resolve

        resolve();    

    },1000);

});
promiseOne.then(function(){
    console.log("Promise Resolved");
}); */

/** ? +++++++++ Promise Two Ex ++++++++ */
/*new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("first async operation");
        resolve();
    }, 1000);
}).then(function () {
console.log("first promise resolved");
});*/

/* +++++++++ Promise Three Ex ++++++++ */
/*const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){

        //! here we resolve the promise with object or array.
        resolve({userName:"ankit",userEmail:"ank@12.com"});
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
});*/

/* +++++++++ Promise Four Ex ++++++++ */
/*const promiseThree = new Promise(function (resolve, rejected) {
  let error = false;

  setTimeout(function () {
    if (!error) {
      resolve({ userName: "ankit", userEmail: "ank@12.com" });
    } else {
      rejected("Error");
    }
  }, 1000);
});

promiseThree
  .then(function (user) {
    return user.userName;
  })
  //!In this chaining it alway carry the previous method return values
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (user) {
    console.log(user);
  })
  //? No matter what happens this method will executed..
  .finally(() => console.log("Your promise is either rejected or executed"));
*/

/* +++++++++ Promise Five Ex ++++++++ */

/*const promiseFive = new Promise((resolve, reject) => {
  let error = true;

  setTimeout(function () {
    if (!error) {
      resolve({ userName: "ankit", userEmail: "ank@12.com" });
    } else {
      reject("Error");
    }
  }, 1000);
});

//? Here we handel promises in async
//! Handel error using try-catch block
async function handelPPromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
handelPPromise();
*/

/* +++++++++ Promise Six Ex ++++++++ */

/*async function getAllUsers() {

    // await means wait until the the work is finished
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const convert=await response.json()
    console.log(convert);
    
   } catch (error) {
    console.log("Error"+error);
   }
}

getAllUsers()*/

/* +++++++++ Promise Seven Ex ++++++++ */

// ? fetch is a global method through which we starts a process of fetching data form network, It returns a promise which fulfilled once the response is ther

//! A fetch promise does not reject the HHTP Error(404 e.g) 

fetch("https://jsonplaceholder.typicode.com/users")
  .then((user) => {
    return user.json();
  })
  .then((first) => console.log(first))
  .catch(() => console.log("Error is coming"))
  .finally(() => console.log("Your code is either executed or rejected"));