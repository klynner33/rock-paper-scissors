
function getComputerChoice() {
   let getComputerChoice = Math.random();
    if (getComputerChoice <= 0.34) {
        return "rock";
    } else if (getComputerChoice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    } 
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock"  ||
        playerSelection === "scissors" && computerSelection === "paper") {
            return "You win!";
        } else {
            return "Computer wins. Try again!";
        }
}

const playerSelection = "PAPER".toLowerCase();
const computerSelection = getComputerChoice();

console.log (playRound(playerSelection, computerSelection));
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);

/* function getPlayerChoice(myPick) {
    if (myPick.toLowerCase() === "rock") {
        return "rock";
    } else if (myPick.toLowerCase() === "paper") {
        return "paper";
    }   else {
        return "scissors";
    }

    }

    console.log(getPlayerChoice("rock")); */


