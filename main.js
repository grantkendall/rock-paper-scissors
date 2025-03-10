const choice = [
    "rock",
    "paper",
    "scissors",
];

const computerSelection = getComputerChoice();
const userSelection = getUserChoice();

let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)
    return choice[index]
};

// Input string is returned when user clicks 'OK'
function getUserChoice() {
    let userChoice = prompt("What do you choose?");
    return userChoice.toLowerCase();
};

function evaluateWinner(computer, user) {
    // Tie condition
    if (computer === user) {
        console.log("Tie");
    }
    // Computer win conditions
    else if (computer === "paper" && user === "rock") {
        console.log("Paper beats rock!");
        computerScore++;
    }
    else if (computer === "scissors" && user === "paper") {
        console.log("Scissors beats paper!");
        computerScore++;
    } else if (computer === "rock" && user === "scissors") {
        console.log("Rock beats scissors!");
        computerScore++;
    }
    // User win conditions
    else if (user === "paper" && computer === "rock") {
        console.log("Paper beats rock!");
        userScore++;
    }
    else if (user === "scissors" && computer === "paper") {
        console.log("Scissors beats paper!");
        userScore++;
    } else if (user === "rock" && computer === "scissors") {
        console.log("Rock beats scissors!");
        userScore++;
    }
};

function updateScore() {
    console.log(`Computer score: ${computerScore}`);
    console.log(`User score: ${userScore}`);
};

console.log(`Computer selection: ${computerSelection}`);
console.log(`User selection: ${userSelection}`);
evaluateWinner(computerSelection, userSelection);
updateScore();