let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

//Computer Choice
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor =  "#081b31";
}

const showWiner = (userWin) => {
    if(userWin==true){
    userScore++;
    user.innerText = userScore;
    console.log("you win!");
    msg.innerText = "You Win!"
    msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp.innerText = compScore;
        console.log("you Lose!");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp Choice",compChoice);

    let userWin = true;
    // draw game
    if(userChoice === compChoice){
        drawGame();
    }
    else{
    if(userChoice === "rock" && compChoice === "paper"){
        userWin=false;
    }
    else if(userChoice === "scissor" && compChoice === "rock"){
        userWin=false;
    }
    else if(userChoice === "paper" && compChoice === "scissor"){
        userWin=false;
    }
    showWiner(userWin);
}
}

// User Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});