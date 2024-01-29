// your code for the getComputerChoice function
var choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// my code for the playRound function
function playRound(playerSelection, computerSelection) {
  // convert playerSelection to lowercase
  playerSelection = playerSelection.toLowerCase();
  // compare playerSelection and computerSelection and return a string
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock";
    } else {
      return "You win! Rock beats scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats paper";
    } else {
      return "You win! Paper beats rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors";
    } else {
      return "You win! Scissors beats paper";
    }
  } else {
    return "Invalid input";
  }
}

// new code for the competition
// initialize the score variables
var playerScore = 0;
var computerScore = 0;
// use a for loop to repeat the game 5 times
for (var i = 1; i <= 5; i++) {
  // get the player's choice
  var playerSelection = prompt("Round " + i + ": Choose rock, paper, or scissors");
  // get the computer's choice
  var computerSelection = getComputerChoice();
  // play the round and get the result
  var result = playRound(playerSelection, computerSelection);
  // print the result to the webpage
  document.write(result + "<br>");
  // update the score based on the result
  if (result.includes("You win")) {
    playerScore++;
  } else if (result.includes("You lose")) {
    computerScore++;
  }
  // break the loop if either the player or the computer reaches 3 wins
  if (playerScore === 3 || computerScore === 3) {
    break;
  }
}
// compare the score and declare the winner or tie of the competition
if (playerScore > computerScore) {
  document.write("You are the champion! You won " + playerScore + " out of " + i + " rounds.");
} else if (playerScore < computerScore) {
  document.write("You are the loser! You lost " + computerScore + " out of " + i + " rounds.");
} else {
  document.write("It's a draw! You both won " + playerScore + " out of " + i + " rounds.");
}
