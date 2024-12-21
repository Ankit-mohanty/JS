const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guess');
const lastResult = document.querySelector('.lastResult');
const loworHi = document.querySelector('lowOrhi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

/* Here we take an array to store the inputs of the use and show him thats why user do not use the same number.  */
let prevGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(UserInput.value)

        validateGuess(guess)
    })
} else {
    prevGuess.push(guess

    )
}

// this function check the guess number is valid or not.
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter A valid Number');
    } else if (guess < 1) {
        alert('Please enter a positive number');

    } else if (guess > 100) {
        alert('Please enter a number between 1 and 100');
    }
    else {
        pri
    }
}
// this function us is return the message over validation.
function checkGuess(guess) {

}

function displayGuess(guess) {

}

function displayMessage(message) {

}

function newGame() {

}

function endGame() {

}