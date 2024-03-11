let playerScore = 0
let computerScore = 0

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  switch (choice){
    case 0:
      return choice = "Rock";
      break;
    case 1:
      return choice = "Paper";
    break;
    case 2:
      return choice =  "Scissors";
  }
}

function playRound(playerSelection, computerSelection){
 if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
    (++playerScore)
    return "You Win!";
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
    (++playerScore)
    return "You Win!"; 
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
    (++playerScore)
    return "You Win!";
} else if (playerSelection.toLowerCase() === computerSelection){
    return "Tie!";
} else {
    (++computerScore)
    return "Lose!";
}
}

function gameWinner (){
    if (playerScore === computerScore){
        console.log("Its a Tie!");
    } else if (playerScore > computerScore){
        console.log("You win the game!");
    } else {
        console.log("You lost the game!");
    }
}

function playGame() {

}