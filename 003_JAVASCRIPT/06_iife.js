// Immediately Invoke Function Expressions(IIFE)
// In IIFE we are bound to use ; this to stop.
(() => {
    console.log(`DB CONNECTED`);
})();
/* Use Case
Avoid polluting global namespaces
     Because our application many functions and global variables and differentr source files it is immportant to limit the number of globale variables. If we have some intation code that code do not need to use again we can use IFFE partterrn.
 */


     // passing the vakue in it 
     ((names)=>{
        console.log(`my name is ${names}`);
     })("Rahul");


     // THis is called named IIFE
     (function chai() {
        console.log(`Rahul is here`);
     })();