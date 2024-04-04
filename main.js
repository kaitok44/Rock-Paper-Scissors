let playerScore = 0
let computerScore = 0
let playerSelection = ""
let computerSelection = ""

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
    console.log("You Win!");
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
    (++playerScore)
    console.log("You Win!"); 
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
    (++playerScore)
    console.log("You Win!");
} else if (playerSelection.toLowerCase() === computerSelection){
    console.log("Tie!");
} else {
    (++computerScore);
    console.log("Lose!");
}
}


function scoreTracker (){
    console.log(`Your score is ${playerScore}. COM score is ${computerScore}.` );
}

function gameWinner(){
    if (playerScore === computerScore){
        console.log("Its a Tie!");
    } else if (playerScore > computerScore){
        console.log("You win the game!");
    } else {
        console.log("You lost the game!");
    }
}

function playGame() {
 playerSelection = prompt("Rock, Paper, Scissors?");
 computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
 scoreTracker();

 playerSelection = prompt("Rock, Paper, Scissors?");
 computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
 scoreTracker();

 playerSelection = prompt("Rock, Paper, Scissors?");
 computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
 scoreTracker();

 playerSelection = prompt("Rock, Paper, Scissors?");
 computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
 scoreTracker();

 playerSelection = prompt("Rock, Paper, Scissors?");
 computerSelection = getComputerChoice();
 playRound(playerSelection, computerSelection);
 scoreTracker();
 gameWinner();
}

playGame()


for (i = 0; i < 10; i++){
    if (i%2==1) continue;
    alert (i);
}