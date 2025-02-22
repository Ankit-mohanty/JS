const arr = ["Nihar", "Ashis"];

const heroPower = {
  IroMan: "Intelligence",
  CaptainAmerica: "Shield",
  Thor: "hammer",

  getHeroPower: function () {
    console.log(`iron man power is ${this.IroMan}`);
  },
};

// Here we declare a function present in all object by default.

Object.prototype.ankit = function () {
  console.log(`Present inside all of them....`);
};

// heroPower.ankit()
// arr.ankit()

Array.prototype.heyAnkit = function () {
  console.log(`I am a method form array..`);
};

arr.heyAnkit();
// heroPower.heyAnkit()

//! Prototypal inheritance

const user={userName:"Ankit",email:"ank@g.com"};
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}

const TASupport={
    makingAssignment:"Js Assignment",
    fullTime:true,

    // Inherit the value form teachingSupport
    __proto__:teachingSupport
}

// teacher.__proto__=user;
// console.log(teacher.userName)

// console.log(TASupport.isAvailable)


//? Modern syntax
Object.setPrototypeOf(teacher,user)
console.log(teacher.userName)



// adding method in string
let myName="Ankit    "

String.prototype.trueLength=function(){
console.log(`${this}`)
    return this.trim().length;
}

const ll= myName.trueLength()
console.log(ll)


console.log("rahul   ".trueLength())

