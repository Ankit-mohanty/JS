const marvelHeros = ["IronMan", "CaptainAmerica", "Thor"];
const dcHeros = ["Superman", "BatMan"];

/*  marvelHeros.push(dcHeros);
 
console.log(marvelHeros);// Output : [ 'IronMan', 'CaptainAmerica', 'Thor', [ 'Superman', 'BatMan' ] ] in this syntax the dcHeros array take as an elemet . He is not taking the values of the an array  at the place of taking values he is taking the complte array in to another array.

console.log(marvelHeros[3][1]);  //+++ here we retive the value form the dcHeros who is inside the marvel heros.
 */
const newconcat = marvelHeros.concat(dcHeros);// Drwa back of concat is we can  not concat multiple arrays in it.
console.log("concat " + newconcat);//optput= IronMan,CaptainAmerica,Thor,Superman,BatMan. In cancat method the values of an array are added in it.

//++++++ Spread Oparator (...) ++++++
// It is define  mu add element of multiple arrays.
const newSpread = [...marvelHeros, ...dcHeros];
console.log(newSpread);

const newAontherArray = [4, 5, [6, 7, 8], 9, 0, [1, 2, [3, 4,[5,6]]]];// here we decalre a nested array. But we want to connvert the aryy in a single array,
console.log(newAontherArray.flat(Infinity));// Here we use flat methd to conevrt the arry in a single array by passing the parameter infinity. We can pass any value as per requirement. Like 1, 2. If we pass 2 in parameter it convert the arrya in  2 array. OUTPUT of Infinity =[ 4, 5, 6, 7, 8,9, 0, 1, 2, 3,4]
    console.log(newAontherArray.flat(2));//[ 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, [ 5, 6 ] ] If we pass 2 it will flatten the all double layer and single layer aryy but not flatten the 3rd oor more layers of array.

    console.log(Array.isArray(newSpread)); // Array class is array method is use to  check given value is array or not.
    console.log(Array.from("Ankit"));// From method is use to convrt the given value in to an array.
    //Form method can convert single value at a time. [ 'A', 'n', 'k', 'i', 't' ]
    console.log(Array.from({name:"Ankit"}));// return empty array . We have to specify what to convert into array.[]

    console.log(Array.of("Tahul", "Kumar"));//returns a new array from a set of elements.[ 'Tahul', 'Kumar' ]
    