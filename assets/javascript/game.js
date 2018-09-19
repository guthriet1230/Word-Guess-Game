var wordBank = [
    "fairy",
    "gremlin",
    "dragon",
    "shrek",
    "griffin",
    "centaur",
    "siren",
    "minotaur",
    "chimera",
    "phoenix",
    "unicorn",
    "leprechaun",
    "princess"
  ];
  var wins = 0;
  var losses = 0;
  var wrongLetter = [];
  var guessesLeft = 6;
  var underScores = [];
  var userGuesses = [];
  var randWord;
  var winCounter = 0;
  
  // startGame Function
  // =======================================
  function startGame() {
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random Word = " + randWord);
    underScores = [];
    guessesLeft = 6;
    for (var i = 0; i < randWord.length; i++) {
      underScores.push("_ ");
      console.log(randWord);

    
   
    if (randWord[i]===underScores[i]){
        wrongLetter = [];
       


    }

}
//     if ()
  }
  
 
  
// User Guesses
// =======================================
  document.onkeyup = function(event) {
    userGuesses = event.key;
    //Checking if the letter exists inside of the word
    console.log(userGuesses);
    if (randWord.indexOf(userGuesses) > -1) {
      for (var i = 0; i < randWord.length; i++) {
        if (randWord[i] === userGuesses) {
          underScores[i] = userGuesses;
          console.log(underScores);
          winCounter++;
          winLose();
        }
      }
    } else {
      wrongLetter.push(userGuesses);
      console.log(wrongLetter);
      guessesLeft--;
      console.log(guessesLeft);
      winLose();
    document.getElementById("letters-guessed").innerHTML = wrongLetter;

    }
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("word-blanks").innerHTML = underScores.join(" ");
   
   
    if (userGuesses[i] != underScores[i]){
        userGuesses.push(wrongLetter);
    }
  
  }

  // winLose Function
  // =======================================

  function winLose() {
    if (winCounter === randWord.length) {
      alert("Winner!");
      wins++;
      console.log(wins);
      document.getElementById("score-wins").innerHTML = wins;
      startGame();

  
      

      
    } else if (guessesLeft === 0) {
      alert("Loser!");
      losses++;
      document.getElementById("score-losses").innerHTML = losses;
      startGame();
    }
  }

  
  //Main
  //=============================================
  
  startGame();
  

  
  
  

  