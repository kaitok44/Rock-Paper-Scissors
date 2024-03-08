function getComputerChoice(){
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
console.log(getComputerChoice());
