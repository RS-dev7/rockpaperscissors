// 0 = rock
// 1 = paper
// 2 = scissors

let playerScore = 0;
let computerScore = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissors = document.getElementById("scissors");

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        rock.style.borderColor = "green";
        sleep(1000);
        rock.style.borderColor = "black";
    } else if (choice === 1) {
        paper.style.borderColor = "green";
        sleep(1000);
        paper.style.borderColor = "black";
    } else if (choice === 2) {
        scissors.style.borderColor = "green";
        sleep(1000);
        scissors.style.borderColor = "black";
    }
    return choice;
}


async function getPlayerChoice () {
    let playerSelection;

    rock.addEventListener("click", function() {
        playerSelection = "rock";
    });
    paper.addEventListener("click", function() {
        playerSelection = "paper";
    });
    scissors.addEventListener("click", function() {
        playerSelection = "scissors";
    });

    await new Promise ((resolve) => {window.onclick = resolve});

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
        computerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 0) {
        playerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 2) {
        computerScore++;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        playerScore++;
    }
    else if (playerChoice == 3 && computerChoice == 1) {
        computerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 3) {
        playerScore++;
    }

    playerScoreNum = document.getElementById("player-score");
    computerScoreNum = document.getElementById("computer-score");

    playerScoreNum.textContent =  `${playerScore}`;
    computerScoreNum.textContent = `${computerScore}`;
}


async function game() {
    for (let i = 0; i < 5; i++) {
        player = await getPlayerChoice();
        comp = getComputerChoice();
        playRound(player, comp);
    }




    if (playerScore === computerScore) {
        alert("It's a Tie!");
    }
    else if (playerScore > computerScore) {
        alert("You win the game!");
    }
    else {
        alert("You lose the game!");
    }
}

game();