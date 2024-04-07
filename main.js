let playerScore = 0;
let compScore = 0;
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
  const roundResult = document.querySelector("#roundResult");
 if (playerSelection === "rock" && compSelection === "scissors"){
    playerScore++;
    roundResult.textContent="You Win!";
} else if (playerSelection === "paper" && compSelection === "rock"){
  playerScore++;
    roundResult.textContent="You Win!"; 
} else if (playerSelection === "scissors" && compSelection === "paper"){
  playerScore++;
   roundResult.textContent="You Win!";
} else if (playerSelection === compSelection){
   roundResult.textContent="Tie!";
} else {
  compScore++;
   roundResult.textContent="Lose!";
}
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playAgain = document.querySelector("#playAgain");
const gameResult = document.querySelector("#gameResult");

playAgain.disabled = true;

function playGame(playerSelection) {
  compSelection = getCompChoice();
  playRound(playerSelection, compSelection);
  humanScore.textContent = "You " + playerScore;
  robotScore.textContent = "COM "+ compScore;

  if (playerScore == 5){
    gameResult.textContent = "You Win the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    playAgain.disabled =  false;
  } else if (compScore == 5){
    gameResult.textContent ="You lost. COM wins";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    playAgain.disabled =  false;
  }
}
playAgain.addEventListener("click", ()=>{
  playerScore = 0;
  compScore  = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  playAgain.disabled =  true;
  humanScore.textContent = "Human "+ playerScore;
  robotScore.textContent = "COM "+ compScore;
  roundResult.textContent = "";
  gameResult.textContent ="";
})

rock.addEventListener("click",() => {
  playGame("rock");
})

paper.addEventListener("click",() => {
  playGame("paper");
})

scissors.addEventListener("click",() => {
playGame("scissors");
})
