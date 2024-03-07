let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        //console.log(guess);
        validateGuess(guess)
    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter a greater than 1');
    }else if(guess > 100){
        alert('please enter a less than 100');
    }else{
        prevGuess.push(guess)
        displayGuess(guess)

        if(numGuess === 8){
            displayMessage(`<span class="game-over">Game over. Random number was ${randomNumber}</span>`)
            endGame()
        }else{
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('<span class="equal-number">You guesses it right!</span>')
        endGame();
    }else if(guess < randomNumber){
        displayMessage('<span class="low-number">Number is TOOO low!</span>');
    }else if(guess > randomNumber){
        displayMessage('<span class="high-number">Number is TOOO hihg!</span>');
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML  =`${8 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    subt.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="new-game">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#new-game')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML= `${8 - numGuess}`
        userInput.removeAttribute('disabled')
        subt.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame =true
    });
}


