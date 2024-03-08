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
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
 if (playerSelection.toLowerCase() === "rock"){
    if (computerSelection === "Rock"){
        return "You both showed Rock! Its a tie!";
    } else if (computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors";
    } else {
        return "You Lose! Paper beats Rock";
    }
 } else if (playerSelection.toLowerCase() === "paper"){
    if (computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "Scissors"){
        return "You Lose! Scissors beats Paper";
    } else {
        return "You both showed Paper! Its a tie!"
    } 
 } else if (playerSelection.toLowerCase() === "scissors"){
    if (computerSelection === "Rock"){
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Scissors"){
        return "You both showed Scissors! Its a tie!";
    } else {
        return "You Win! Scissors beats Paper";
    } 
}
}
const playerSelection = "paper";
const computerSelection = getComputerChoice();