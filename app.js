let userScore = 0
let comptScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comptScorePara = document.querySelector("#compt-score");



function genComptChoice() {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    console.log("Number chosen by Bot " + randIdx);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#53475B";
};

const showWinner = (userWin, userChoice, comptChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats  ${comptChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comptScore++;
        comptScorePara.innerText = comptScore;
        msg.innerText = `You lost. ${comptChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice ->modular
    const comptChoice = genComptChoice();
    console.log("compt choice = ", comptChoice);

    if (userChoice === comptChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = null;
        if (userChoice === "rock") {
            //paper,scissors
            userWin = comptChoice === "scissor" ? true : false;
        } else if (userChoice === "scissor") {
            //rock,scissors
            userWin = comptChoice === "paper" ? true : false;
        } else if (userChoice === "paper") {
            //rock,paper
            userWin = comptChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, comptChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

