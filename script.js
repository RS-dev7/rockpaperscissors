// 0 = rock
// 1 = paper
// 2 = scissors

let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choice;
}


function getPlayerChoice () {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    function asInt (playerSelection) {
        if (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") {
            return 0;
        } else if (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") {
            return 1;
        } else if (playerSelection == "scissors" || playerSelection == "Scissors" || playerSelection == "SCISSORS") {
            return 2;
        }
    };
    let returnInt = asInt(playerSelection);
    return returnInt;
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("It's a tie!");
    }
    else if (playerChoice == 0 && computerChoice == 1) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 0) {
        console.log("You win! Paper beats rock.");
        playerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 2) {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        console.log("You win! Scissors beats paper.");
        playerScore++;o
    }
    else if (playerChoice == 3 && computerChoice == 1) {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 3) {
        console.log("You win! Rock beats scissors.");
        playerScore++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        comp = getComputerChoice();
        player = getPlayerChoice();
        playRound(player, comp);
    }

    if (playerScore === computerScore) {
        console.log("It's a Tie!");
    }
    else if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else {
        console.log("You lose the game!");
    }
}

game();