//word bank array
const words = ['trampled', 'heaven', 'gone', 'dog', 'magic', 'rain', 'immigrant', 'levee', 'hills', 'achilles', 'fault', 'mountain', 'rock'];

//choose a word at random and establish arrays for functionality
let randomNum = Math.floor(Math.random() * words.length);
let currentWord = words[randomNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let guesses = 12;

console.log(currentWord);

//manipulate the dom
var docUnderScore = document.getElementsByClassName('underscores');
var docGuessesLeft = document.getElementsByClassName('guesses');
var docWrongGuess = document.getElementsByClassName('wrongGuess');


//create underscores for the words
let generateUnderscore = () => {
    for(let i = 0; i < currentWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());


//get the user letter guess
document.addEventListener('keypress', (event) => {

    let keyLetter = String.fromCharCode(event.keyCode);
    guesses--;
    console.log(guesses);
    docGuessesLeft[0].innerHTML = guesses;

    if(currentWord.indexOf(keyLetter) > -1){
        //add words to the correct array
        rightWord.push(keyLetter);

        //replace underscore with appropriate letter for all instances;
        for(let i = 0; i < currentWord.length; i++) {
            currentLetter = currentWord[i];
            if(keyLetter == currentLetter){
                underScore[i] = keyLetter;
                console.log(underScore);
            }
        }

        docUnderScore[0].innerHTML = underScore.join(' ');

        //check if they won
        if(underScore.join('') == currentWord) {
            alert('You Win!');
        }

    } if(guesses == 0){
        alert('You Lose!');
    } else {
        wrongWord.push(keyLetter);
        docWrongGuess[0].innerHTML = wrongWord.join(' ');
    }
});
