let humanScore = 0;
let computerScore = 0;

playGame();

function playGame () {
    while (true){
        playRound(getHumanChoice(), getComputerChoice());
        if(humanScore == 2){
            console.log("Human wins best 2 out of 3!");
            break;
        } else if(computerScore == 2){
            console.log("Computer wins best 2 out of 3!");
            break;
        }
    }
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'restart'){
        humanScore = 0;
        computerScore = 0;
        return console.log('Restating Game...')
    }

    humanChoice = humanChoice ? humanChoice.toLowerCase() : null;

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        console.log("Human Wins!   H:" + humanScore + "  C:" + computerScore);

    } else if (humanChoice == computerChoice) {
        console.log("Tie!")
    } else {
        computerScore++;
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