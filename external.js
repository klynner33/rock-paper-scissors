function getComputerChoice() {
   let getComputerChoice = Math.random();
    if (getComputerChoice < 0.34) {
        return "rock";
    } else if (getComputerChoice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }  
}

console.log(getComputerChoice());