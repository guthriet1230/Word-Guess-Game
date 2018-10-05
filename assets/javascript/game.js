var wordBank = [
  "fairy",
  "gremlin",
  "dragon",
  "shrek",
  "elves",
  "mermaids",
  "centaur",
  "cyclops",
  "giant",
  "griffin",
  "gnome",
  "nymph",
  "troll",
  "centaur",
  "siren",
  "minotaur",
  "chimera",
  "phoenix",
  "unicorn",
  "leprechaun",
  "princess",
  "prince"
];

var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 6;
var underScores = [];
var userGuesses = [];
var randWord;

var guessesValidation = true;
// var winCounter = 0;

// startGame Function
// =======================================
function startGame() {
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log("random Word = " + randWord);
  underScores = [];
  guessesLeft = 6;
  wrongLetter = [];
  // winCounter = 0;]
  guessesValidation=true;

  document.getElementById("winner-display").style.display = "none";
  document.getElementById("loser-display").style.display = "none";
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("letters-guessed").innerHTML = wrongLetter;

  for (var i = 0; i < randWord.length; i++) {
    underScores.push("_ ");
  }
  document.getElementById("word-blanks").innerHTML = underScores.join("");
}

// User Guesses
// =======================================
document.onkeyup = function(event) {
  userGuesses = event.key;
  if (letters.indexOf(userGuesses) > -1 && guessesValidation){
    
  

  //Checking if the letter exists inside of the word
  console.log(userGuesses);
  if (randWord.indexOf(userGuesses) > -1) {
    for (var i = 0; i < randWord.length; i++) {
      if (randWord[i] === userGuesses) {
        underScores[i] = userGuesses;
        // console.log(underScores.join(""));
  
        // winCounter++;
        winLose();
      }
    }
  } else {
    wrongLetter.push(userGuesses);
    guessesLeft--;
    winLose();
    document.getElementById("letters-guessed").innerHTML = wrongLetter;
  }
  document.getElementById("guesses-left").textContent = guessesLeft;
  document.getElementById("word-blanks").innerHTML = underScores.join(" ");

  if (userGuesses[i] != underScores[i]) {
    userGuesses.push(wrongLetter);
  }
}
};

// winLose Function
// =======================================

function winLose() {
  if (underScores.join("") === randWord) {
    wins++;
    document.getElementById("score-wins").innerHTML = wins;
    document.getElementById("winner-display").style.display = "block";
    guessesValidation = false;
    // startGame();
  } else if (guessesLeft === 0) {
    losses++;
    document.getElementById("score-losses").innerHTML = losses;
    document.getElementById("loser-display").style.display = "block";
    // startGame();
    guessesValidation = false;
  }
}

//Main
//=============================================

startGame();
document.getElementById("restart-button").onclick = function() {
  startGame();
  console.log("winner");
};
document.getElementById("restart-button2").onclick = function() {
  startGame();
  console.log("loser");
};
