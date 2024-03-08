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
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
 if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
    return "Win!";
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
    return "Win!";
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
    return "Win!";
} else if (playerSelection.toLowerCase() === computerSelection){
    return "Tie!";
} else {
    return "Lose";
} 
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
