let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const msg = document.getElementById("msg");

const userPickedView = document.getElementById("user-picked");
const compPickedView = document.getElementById("comp-picked");

// Icon mapping to update battle area components dynamically
const iconClasses = {
    rock: "fa-solid fa-hand-fist",
    paper: "fa-solid fa-hand",
    scissors: "fa-solid fa-hand-scissors"
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.color = "#f1f5f9";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "#4ade80"; // Premium Green
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.color = "#f87171"; // Premium Red
    }
};

const updateBattleUI = (userChoice, compChoice) => {
    // Injecting fontawesome elements to look exactly like user selection
    userPickedView.innerHTML = `<i class="${iconClasses[userChoice]}"></i>`;
    compPickedView.innerHTML = `<i class="${iconClasses[compChoice]}"></i>`;
    
    // Add brief animation highlight effect
    userPickedView.style.color = "#38bdf8";
    compPickedView.style.color = "#38bdf8";
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    // Display choices instantly inside battle container
    updateBattleUI(userChoice, compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

document.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});