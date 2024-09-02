// nested scope
// In nested scope we can use the valuof parent scope in chiled  scope.But we can not use the  value of child scope to the parent scope.
function one() {
    const userName = "Ankit";
    function two() {
        const wepsite = "linkedin";
        console.log(userName);
    };
    two();
    // console.log(wepsite);
};
one();


if (true) {
    const username = "Ankit";
    if (username === "Ankit") {
        let wepsite = "youtube";
        console.log(username + wepsite);
    }
    // console.log(wepsite);//ReferenceError: wepsite is not defined
}
// console.log(userName); //ReferenceError: userName is not defined


// ++++++++++++ Intresting +++++++++++


console.log(addone(5));// print : 6
function addone(num) {
    return num + 1;
};

console.log(two); //ReferenceError: Cannot access 'two' before initialization
const two = function addtwo(num) {
    return num + 2;
};
