var jonSnow ["Snow", "Jon", "Ghost", "You know nothing", "Jon Snow", "Ygritte", "Kit", "Ice"]

var wins = 0;
var loss = 0;
var guesses = [];
var answers = [];


var wins = document.getElementById("wins");
var loss = document.getElementById("losses");
var guesses = document.getElementById("LetterGuesses");

// document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = jonSnow[Math.floor(Math.random() * jonSnow.length)];
    for (var i = 0; i < jonSnow.length; i++) {
        answerArray[i] = "_";
    }

    var RemainingLetters = jonSnow.length 

while (RemainingLetters > 0) {
    answerArray.join(" ");
}

if (guesses === null) {
        break;
    }

else if (guesses.length !== 1) {

}

for (var j = 0; j < jonSnow.length; j++ {
    if (jonSnow[j] = guesses) {
        answerArray[j] = guesses; {
            RemainingLetters--;
        }
    }

}




