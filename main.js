let playerScore = 0
let compScore = 0
let playerSelection = ""
let compSelection = ""

function getCompChoice(){
  let choice = Math.floor(Math.random()*3);
  switch (choice){
    case 0:
      return choice = "rock";
      break;
    case 1:
      return choice = "paper";
    break;
    case 2:
      return choice =  "scissors";
  }
}

function playRound(playerSelection, compSelection){
  const result = document.querySelector("#result");
 if (playerSelection === "rock" && compSelection === "scissors"){
    //(++playerScore)
    result.textContent="You Win!";
} else if (playerSelection === "paper" && compSelection === "rock"){
    //(++playerScore)
    result.textContent="You Win!"; 
} else if (playerSelection === "scissors" && compSelection === "paper"){
   // (++playerScore)
   result.textContent="You Win!";
} else if (playerSelection === compSelection){
   result.textContent="Tie!";
} else {
    //(++compScore);
   result.textContent="Lose!";
}
}

const rock = document.querySelector("#rock");
rock.addEventListener("click",() => {
    playerSelection = "rock";
    compSelection = getCompChoice();
 playRound("rock", compSelection);
})

const paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    playerSelection = "paper";
    compSelection = getCompChoice();
 playRound("paper", compSelection);
})
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click",() => {
    playerSelection = "scissors";
    compSelection = getCompChoice();
 playRound("scissors", compSelection);
})
// function scoreTracker (){
//     console.log(`Your score is ${playerScore}. COM score is ${compScore}.` );
// }

// function gameWinner(){
//     if (playerScore === compScore){
//         console.log("Its a Tie!");
//     } else if (playerScore > compScore){
//         console.log("You win the game!");
//     } else {
//         console.log("You lost the game!");
//     }
// }

//  function playGame() {
//  playerSelection = prompt("Rock, Paper, Scissors?");
//  computerSelection = getComputerChoice();
//  playRound(playerSelection, computerSelection);
//  scoreTracker();

//  playerSelection = prompt("Rock, Paper, Scissors?");
//  computerSelection = getComputerChoice();
//  playRound(playerSelection, computerSelection);
//  scoreTracker();

//  playerSelection = prompt("Rock, Paper, Scissors?");
//  computerSelection = getComputerChoice();
//  playRound(playerSelection, computerSelection);
//  scoreTracker();

//  playerSelection = prompt("Rock, Paper, Scissors?");
//  computerSelection = getComputerChoice();
//  playRound(playerSelection, computerSelection);
//  scoreTracker();

//  playerSelection = prompt("Rock, Paper, Scissors?");
//  computerSelection = getComputerChoice();
//  playRound(playerSelection, computerSelection);
//  scoreTracker();
//  gameWinner();
// }

// playGame()
