/*  ======= Array ======
-> Collection of multipple value in a single variable calles as array.
-> In JS in array we can store different type if data like in a single array we can store number and strings also.
-> In JS array are not premitives. 
 */

let myArr = [0, 2, 3, 5]; //Array declaration
let myArr1 = new Array("Ankit", "Rahul");// another way to decare an array.
console.log("myArr " + myArr);// retrive all the ealements of array.
console.log(myArr1[0]);// retrive the single elements form array.

myArr.push(6);// By using push method we can add value in an array.

// myArr.pop()//By Using pop method we can remove the last element from the array.

myArr.unshift(0);// By using this method we can add a value in the starting of an array. But it is not recomanded to use.Because if we add a value in the starting of an array we have to shift all the vlaue of array to its next position so it's time consuming.
myArr.shift();// This method is used to remove the first element from the array.
console.log(myArr);

console.log(myArr.includes(8));// It will return false if there is no such number present in the array otherwise it will return true.
console.log(myArr.indexOf(9));// OutPut -1, Because no such elemets are availble in the array.

let newArr=myArr.join();//This Method is use to convert the array into string.
console.log(newArr)


let myN=myArr.slice(1,4);//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
console.log(myArr);

let myN1=myArr.splice(1,2);// In splice it  takes three arguments: Starting point , how many element you want to delete and what will be added instead
console.log(myN1);