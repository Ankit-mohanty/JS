const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addingten = num.map((n) => n + 10);
// console.log(addingten);

// heere we called multiple method in a single line that is called mthod chaining
const newnum = num
    .map((n) => n * 10)
    .map((n => n + 1))
    .filter(nu => nu > 20);
console.log(newnum);