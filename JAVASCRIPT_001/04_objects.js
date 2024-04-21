//singleton object
const tenderUser = new Object();
tenderUser.name = "Ankit";
tenderUser.isLogedIn = false;
console.log(tenderUser);
// Object Nesting
const regularuser = {
    eamil: "rahul@gmail.com",
    fullname: {
        username: {
            firstname: "ankit",
            lastname: "mohanty"
        }
    }
};
console.log(regularuser.fullname.username.firstname);

// Merging Objects
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3=Object.assign({},obj1,obj2);
// Here we {} as empty object after merging all properties are store in the empty object. If do not pass this empty object it store the value in the first objecct. It does not give any problem but it is not a good practice.
const obj3 = { ...obj1, ...obj2 };//merging  using spread operator.
console.log(obj3);


// In js data come for database by Array of Object format.
const users = [{
    id: 1,
    name: "Ankit"
},
{
    id: 2,
    name: "Rahul"
}
];
console.log(users[1].name);// output : Rahul

// retrive the keys of an oobject
console.log(Object.keys(tenderUser));// output : [ 'name', 'isLogedIn' ] Here  it will show all the key present in the object. And all keys are store in an array.
console.log(Object.values(tenderUser));// output : [ 'Ankit', false ] Here  it will show all the valus present in the object. And all values are store in an array.
console.log(Object.entries(tenderUser));// Output : [ [ 'name', 'Ankit' ], [ 'isLogedIn', false ] ] Returns an array of key/values of the enumerable properties of an object.

// before use any property of any obejct using this method we can check this property available or not.
console.log(tenderUser.hasOwnProperty("name"));// Determines whether an object has a property with the specified name. output:true


// Destructuring Object
const course ={
courseName:"java",
price:"1299",
courseInstructor: "Mr.Mukesh"
};

const{courseInstructor:techer}=course; //we are just taking one value from object and giving it a new variable name. by using " : " we can change the name of key in the variable.
// console.log(courseInstructor);
console.log(techer);