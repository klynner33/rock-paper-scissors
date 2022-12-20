
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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock"  ||
        playerSelection === "scissors" && computerSelection === "paper") {
             playerScore++
            return "You win!";
        } else if (
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper"  ||
        playerSelection === "paper" && computerSelection === "scissors") {
             computerScore++
            return "Computer wins. Try again!";
        } else {
            return "That is not a valid answer. Try again!"
        }
    }

 function game() {
    function playRound() {
    for (let i = 0; i < 5; i++) {
        if (i === "You win!") {
            playerScore++;
        } else if (i === "Computer wins. Try again!") {
            computerScore++;
        }
    }
}
}
let choice = prompt("What do you choose?");
const playerSelection = choice.toLowerCase();
const computerSelection = getComputerChoice();
console.log("Computer picks: " + computerSelection);
console.log("Player picks: " + playerSelection);
console.log (playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);




/* function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins. Try again!") {
            computerScore++;
        } else {
            return "No points for a tie!";
        }   
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore); 
} */

game();


