const arr = ["js", "java", "ruby"];
arr.forEach(element => {// in foreach loop we have to pass a call back function in it.
    console.log(element);
});

function prinyMe(values) {
    console.log(values);
}
arr.forEach(prinyMe); // calling the callback function directly without passing any argument will send the element of array as an argument .

arr.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

const myooo = [
    {
        name: "ankit",
        language: "JS"
    },
    {
        name: "rahul",
        language: "java"
    },
    {
        name: "mohanty",
        language: "ruby"
    }
];
myooo.forEach(item => {
    console.log(item.language);
});