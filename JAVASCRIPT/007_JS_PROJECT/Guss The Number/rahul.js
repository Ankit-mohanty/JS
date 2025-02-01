let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

/* Here we take an array to store the inputs of the use and show him thats why user do not use the same number.  */
let prevGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        // of we do not use prevent default the value are going server. But we do not want to the value are going to server.
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

// this function check the guess number is valid or not.
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter A valid Number');
    } else if (guess < 1) {
        alert('Please enter a positive number');

    } else if (guess > 100) {
        alert('Please enter a number between 1 and 100');
    }else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over  ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


// this function us is return the message over validation.
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess > randomNumber) {
        displayGuess(`too high`)
    } else if (guess < randomNumber) {
        displayGuess(`too low`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${111 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}


// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

