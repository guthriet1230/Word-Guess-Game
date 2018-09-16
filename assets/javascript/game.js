var wins = 0;
var loses = 0;

// develop arrays for each letter and word
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "V", "w", "X", "y", "z"]
var wordList = ["fairy", "shrek", "snow white", "seven dwarfs", "prince charming", "simba", "mustafa", "mickey mouse", "griffin", "centaur", "siren", "minotaur", "chimera", "phoenix", "unicorn", "leprechaun", "donald duck", "elsa", "princess jasmine", "buzz lightyear", "cinderella", "tinker bell", "peter pan", "alice in wonderland", "cheshire cat"];

// develop arrays for the right word and wrong guesses

var rightGuess = [];
var wrongGuess = [];

// display underscores
var underScore =[];

// choose a random word
var random = Math.floor((Math.random() * wordList.length));
var chosenWord = wordList[random];
console.log(chosenWord);


// underscores our random word
function startup(){
for (var i =0; i < chosenWord.length; i++){
    underScore.push("_ ");
}
    return underScore;
}
console.log(startup());

// var underscore = document.getElementById("word-choice");
// underscore.textContent = "";



// EVENT
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
}
   
   
// IF RIGHT GUESS, PUSH TO RIGHT ARRAY
    if (userGuess.indexOf(chosenWord) > -1){ 
        rightGuess.push(userGuess);
        console.log(rightGuess);
    }

// // IF WRONG GUESS, PUSH TO WRONG ARRAY
//     else {
//         wrongGuess.push(keyword);
//         console.log(wrongGuess);
//     }
    








// if userGuess == alphabet display 



















// // display the random word
// chosenWord.textContent = wordList[i];

// // identifying where the messages get displayed
// var numbGuess = document.getElementById("numb-guesses");
// var lettersGuessed = document.getElementById("letters-guessed");
// var winsText = document.getElementById("score-wins");
// var lossesText = document.getElementById("score-loses");
// var wordChoice = document.getElementById("word-choice");

// // user input (event key)

// document.onkeyup = function (event) {
//     console.log(event.key);
// }

// // take user input and check it against the specific word


// // develop a loop to run through all of the arrays


// for (var i = 0; i < wordList.length; i++) {
//     console.log("I love " + chosenWord[i]);
//   }

//   for (var i = 0; i < wordList.length; i++) {
//     console.log("I love " + chosenWord[i]);
//   }

// // numbGuess.textContent - only changing text of the screen
// // numbGuess.innerHTML - only changing text of the screen


// var astericksSpan = document.getElementById("astericks");
// var astericksWord = "";


// for (var i = 0; i < wordList.length; i++) {
//     console.log("I love " + chosenWord[i]);
//   }





// // Display the user and computer guesses, and wins/losses/ties.
//     userChoiceText.textContent = "You chose: " + userGuess;
//     computerChoiceText.textContent = "The computer chose: " + computerGuess;
//     winLossTie.textContent = "that was a " + result;
//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses;
//     tiesText.textContent = "ties: " + ties;
