let computerScore = 0;
let userScore = 0;
let userChoice;
let bestOfScore = 3;

const choice = [
    "rock",
    "paper",
    "scissors",
];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const evalBtn = document.querySelector("#eval");

const log = document.querySelector(".log");
const computerScoreDisplay = document.querySelector(".computer-score");
const userScoreDisplay = document.querySelector(".user-score");

rockBtn.addEventListener("click", () => userChoice = choice[0]);
paperBtn.addEventListener("click", () => userChoice = choice[1]);
scissorsBtn.addEventListener("click", () => userChoice =choice[2]);

evalBtn.addEventListener("click", () => evaluateWinner(computerChoice(), userChoice));

const computerChoice = () => choice[Math.floor(Math.random() * 3)];

function evaluateWinner(computer, user) {
    console.log(`Computer choice: ${computer}`);
    console.log(`User choice: ${user}`);
    // Tie condition
    if (computer === user) {
        log.textContent = "Tie";
    }
    // Computer win conditions
    else if (computer === "paper" && user === "rock") {
        log.textContent = "You lose! Paper beats rock!";
        computerScore++;
    }
    else if (computer === "scissors" && user === "paper") {
        log.textContent = "You lose! Scissors beats paper!";
        computerScore++;
    } else if (computer === "rock" && user === "scissors") {
        log.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    }
    // User win conditions
    else if (user === "paper" && computer === "rock") {
        log.textContent = "You win! Paper beats rock!";
        userScore++;
    }
    else if (user === "scissors" && computer === "paper") {
        log.textContent = "You win! Scissors beats paper!";
        userScore++;
    } else if (user === "rock" && computer === "scissors") {
        log.textContent = "You win! Rock beats scissors!";
        userScore++;
    }
    updateScore();
    userChoice = undefined;
};

function updateScore() {
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    userScoreDisplay.textContent = `User: ${userScore}`;
    
    switch (bestOfScore) {
        case computerScore:
            log.textContent = "Better luck next time! Play again?";
        case userScore:
            log.textContent = "You won!";
    }
};
