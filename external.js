const selectionRock = document.querySelector("#rock")
const selectionPaper = document.querySelector("#paper")
const selectionScissors = document.querySelector("#scissors")
const computerChoiceBox = document.querySelector("#computerChoiceBox")
const playerScorebox = document.querySelector(".scorebox.player")
const computerScorebox = document.querySelector(".scorebox.computer")
const result = document.querySelector(".result")
const playBtn = document.querySelector("#playBtn")

let playerSelection;
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

selectionRock.addEventListener("click", function(e) {
    getPlayerChoice("rock");
});
selectionPaper.addEventListener("click", function(e) {
    getPlayerChoice("paper");
});
selectionScissors.addEventListener("click", function(e) {
    getPlayerChoice("scissors");
});

playBtn.addEventListener("click", function(e) { 
    location.reload();
});

function getPlayerChoice(playerChoice) {
    playerSelection = playerChoice;
    computerSelection = getComputerChoice();
    convertComputerChoice();
    playRound(playerSelection, computerSelection);
    checkScore();
}

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

function convertComputerChoice() {
    if (computerSelection === "rock") {
        computerChoiceBox.textContent = "✊";
    } else if (computerSelection === "paper") {
        computerChoiceBox.textContent = "✋";
    } else if (computerSelection === "scissors") {
        computerChoiceBox.textContent = "✌";
    }
}

function playRound(playerSelection, computerSelection) {
   
        if (playerSelection === computerSelection) {
            result.textContent = "It's a tie!";
            
            playerScorebox.textContent = playerScore;
            computerScorebox.textContent = computerScore;
        } else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock"  ||
        playerSelection === "scissors" && computerSelection === "paper") {
            result.textContent = "You win this round!";
            playerScore++;
            playerScorebox.textContent = playerScore;
            computerScorebox.textContent = computerScore;
        } else if (
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper"  ||
        playerSelection === "paper" && computerSelection === "scissors") {
            result.textContent = "Computer wins this round.";
            computerScore++;
            playerScorebox.textContent = playerScore;
            computerScorebox.textContent = computerScore;
        } else {
            result.textContent = "Error. Try again!";
            playerScorebox.textContent = playerScore;
            computerScorebox.textContent = computerScore;
        }
}

function checkScore() {
    if (playerScore === 5) {
        result.textContent = "YOU WON THE GAME!!! Play again!"
    } else if(computerScore === 5) {
        result.textContent = "GAME OVER. Try again!"
    }
}

