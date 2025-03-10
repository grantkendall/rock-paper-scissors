const choice = [
    "rock",
    "paper",
    "scissors",
];

let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)
    return choice[index]
};

// Input string is returned when user clicks 'OK'
function getUserChoice() {
    let userChoice = prompt("What do you choose?");
    // Defaults to 'rock' if user types incorrectly
    for (c in choice) {
        if (userChoice.toLowerCase !== c) {
            userChoice = choice[0];
        }
    }
    return userChoice.toLowerCase();
};

// Is there a cleaner way to do this?
function evaluateWinner(computer, user) {
    // Tie condition
    if (computer === user) {
        console.log("Tie");
    }
    // Computer win conditions
    else if (computer === "paper" && user === "rock") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (computer === "scissors" && user === "paper") {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
    } else if (computer === "rock" && user === "scissors") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }
    // User win conditions
    else if (user === "paper" && computer === "rock") {
        console.log("You win! Paper beats rock!");
        userScore++;
    }
    else if (user === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats paper!");
        userScore++;
    } else if (user === "rock" && computer === "scissors") {
        console.log("You win! Rock beats scissors!");
        userScore++;
    }
};

function updateScore() {
    console.log(`Computer score: ${computerScore}`);
    console.log(`User score: ${userScore}`);
};

// I need to loop through game() without refreshing the webpage...
function game() {
    while (computerScore < 3 || userScore < 3) {
        if (computerScore === 3 || userScore === 3) {
            console.log("GAME OVER");
            break;
        }
        evaluateWinner(getComputerChoice(), getUserChoice());  
    }
}

game();
