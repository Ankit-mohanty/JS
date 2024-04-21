// Singleton object = This is created by using constuctor.
// Object.create(); - this method creates a new empty object with the specified prototype object and properties. 

// object letreals 
// In JS we pass the value in key value pair.
// In JS the key is string type. It is automatically process by system.

const mySym = Symbol("my symbol");
const jsUser = {
    name: "Ankit",
    "fullname": "Ankit",// this one we can not acess by using "." in the old version of the JS.
    //But in new version we can acess this by using ". "
    age: 25,
    roll: 1,
    // mySym: "This is Symbol data Type",// this is string type.
    [mySym]: "This is My Symbol",// Here we are passing the symble as Key and Value.
    location: "BBSr",
    isLoggedIn: false,
    address: "JSPUR"
};

console.log(jsUser.name);
console.log(jsUser["name", "location"]);
console.log(jsUser.fullname);
// console.log(typeof jsUser.mySym);//String
console.log(typeof jsUser[mySym]);//
console.log(jsUser[mySym]);//

//+++++ Change Object value ++++++++++++
jsUser.fullname = "Rahul";
console.log(jsUser.fullname);

// Object.freeze(jsUser);// After freezing the object no one will be able to change the value of that object.
jsUser.fullname = "Saurab";
console.log(jsUser);

jsUser.greetings = function greeting() {
    console.log(`Welcome to my World ${this.name}`);// here we call same object refarannece By using this key word.
}

console.log(jsUser.greetings());