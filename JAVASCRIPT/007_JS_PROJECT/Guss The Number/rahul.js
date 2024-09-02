const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guess');
const lastresult = document.querySelector('.lastResult');
const loworHi = document.querySelector('lowOrhi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');

/* Here we take an array to store the inputs of the use and show him thats why user do not use the same number.  */
let prevGuess=[];
let numGuess=1;

let playGame= true;


// this function check the guss number is valid or not.
function validateGuess(guess) {
    
}
// this funcction us is return the message over validation.
function checkGuess(guess) {
    
}

function displayMessage(guess) {
    
}