let humanScore = 0;
let computerScore = 0;

const hScoreItem = document.querySelector("#h-score");
const cpuScoreItem = document.querySelector("#cpu-score");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors")

const restartButton = document.querySelector("#restart");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
restartButton.addEventListener("click", () => playRound("restart", getComputerChoice()));

const winner = document.querySelector(".winner")


// function playGame () {
//     while (true){
//         playRound(getHumanChoice(), getComputerChoice());
//         if(humanScore == 2){
//             console.log("Human wins best 2 out of 3!");
//             break;
//         } else if(computerScore == 2){
//             console.log("Computer wins best 2 out of 3!");
//             break;
//         }
//     }
// }


function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'restart'){
        humanScore = 0;
        computerScore = 0;
        hScoreItem.textContent = humanScore;
        cpuScoreItem.textContent = computerScore;
        winner.textContent = "Restarting game.."
        return console.log('Restating Game...')
    }

    humanChoice = humanChoice ? humanChoice.toLowerCase() : null;

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        hScoreItem.textContent = humanScore;
        winner.textContent = "Human wins! CPU picked: " + computerChoice;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        hScoreItem.textContent = humanScore;
        winner.textContent = "Human wins! CPU picked: " + computerChoice;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        hScoreItem.textContent = humanScore;
        winner.textContent = "Human wins! CPU picked: " + computerChoice;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == computerChoice) {
        console.log("Tie!")
        winner.textContent = "Tie! CPU also picked " + computerChoice
    } else {
        computerScore++;
        cpuScoreItem.textContent = computerScore;
        winner.textContent = "CPU wins! CPU picked: " + computerChoice;
        console.log("Computer Wins!   H:" + humanScore + "  C:" + computerScore);

    }
}

function getComputerChoice() {
    let randomNum = Math.ceil(Math.random() * 3);
    switch (randomNum) {
        case 1:
            console.log('rock');
            return "rock";
        case 2:
            console.log('paper');
            return "paper";
        case 3:
            console.log('scissors');
            return "scissors";
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Enter choice\n(restart to reset game): ");
    return humanChoice;

}