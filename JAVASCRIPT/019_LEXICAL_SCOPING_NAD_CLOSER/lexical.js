// ? Lexical scoping means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. Lexical scoping is also called Static scoping.


/*  function init() {
  let name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

 */

//! Closure
//? A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFunc() {
    const name = "Mozilla";
    console.log("OUT")
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  