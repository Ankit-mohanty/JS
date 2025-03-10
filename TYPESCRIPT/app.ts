/* interface User{
    name:string,
    age:number,
    //? Here "?" is used to this filed is optional.
    gender?:string
}
interface User1 extends User{
    admin:boolean
}
function aa(aac:User1) {
    console.log(aac)
}


aa({name:'aa',age:12,admin:true})
 */

/**
 * Represents a User entity with personal information.
 * 
 * @class
 * @property {any} ss - Public property with any type
 * @property {string} _name - The user's name
 * @property {string} gender - The user's gender
 * @property {string} thumb - The user's thumbnail name, defaults to "Ankit"
 * 
 * @constructor
 * @param {string} _name - The name of the user
 * @param {string} gender - The gender of the user
 * @param {string} [thumb="Ankit"] - Optional thumbnail name parameter
 * 
 * @getter
 * @name - Returns the private name property
 */
class User{
public ss: any;

    constructor(public _name,public gender:string,public thumb:string="Ankit"){
    }
 get name(){
        return this._name;
 }
}
let a =new User("Ankit","male")
console.log(a._name)