// for of loop
const arr = [1, 2, 4, 5, 9];
for (const num of arr) {// basically java enhanced for loop
    console.log(num);
}

const greetings = "Welcome To My World!!!!!!!!!!!!!!!!";
for (const greet of greetings) {
    console.log(` Each char  is ${greet}`);
}

const map = new Map();
map.set("IN", "BBSR");
map.set("AFG", "JSPUR");
map.set("AUS", "CTC");
map.set("ENG", "BCCI");
console.log(map);
//out put 
/* Map(4) {
    'IN' => 'BBSR',
    'AFG' => 'JSPUR',
    'AUS' => 'CTC',
    'ENG' => 'BCCI'
  } */
for (const key of map) {
    console.log(key);
}   //output: 
/*[ 'IN', 'BBSR' ]
[ 'AFG', 'JSPUR' ]
[ 'AUS', 'CTC' ]
[ 'ENG', 'BCCI' ]*/

for (const [key , value] of map) {
    console.log(key,":-",value);
}//output
/* IN :- BBSR
AFG :- JSPUR
AUS :- CTC
ENG :- BCCI
 */

const myObj={
    name:"Ankit",
    game:"FF"
};
for (const key of myObj) {// In case of object this loop is not working.
    // console.log(key);
};

