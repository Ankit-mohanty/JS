function multiple5(num) {
    return num*5;
}

//function is function or object also.

multiple5.power=2;
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);



// ! Function Of New Keyword

/**
 * ?  Here what happens behind the scenes when we use new keyword .......
 * 
 * A New object is created : The new keyword initiates the creation of new Javascript5 object.
 * 
 * A prototype is linked: The newly created object get linked to the prototype property of the constructor function. This means that is has access to the properties and method define inside the constructor function.
 * 
 * The constructor is called: The constructor function is call with specified argument and this is bound to newly created object.If no explicit return value is specified form the constructor, javascript assumes this , the newly created object, to be intended return value.
 *
 * The new object is return: After the constructor function is called , if it does not return the non-primitive value (Object, Array,Function etc.), the newly created object is returned.
 */


function createUser(userName, score) {
    this.userName=userName;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`)
}

const us1=new createUser("Ankit",20)
const us2=createUser("Rahul",21)
us1.printMe();