/*
TODO:
Write function that determines the computers play DONE
Write a function that takes in the players input DONE
Compare the input to the computers play and determine a winnner DONE
Print the winner DONE

Make this best of 5 and keep score of the rounds
*/


function computerPlay() {
    let number = Math.floor(Math.random() * 3);

    if(number === 0) {
        return "rock";
    } else if(number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function humanPlay(play) {
    return play
}

function determineWinner(player1, player2) {
    if(player1 === player2) {
        resultsText.textContent = "You tied"
        console.log("You tied")
        return 0
    } else if(player1 === "rock" && player2 === "paper") {
        resultsText.textContent = "You played rock, the computer played paper"
        console.log("You played rock, the computer played paper")
        return 2
    } else if(player1 === "rock" && player2 === "scissors") {
        resultsText.textContent = "You played rock, the computer played scissors"
        console.log("You played rock, the computer played scissors")
        return 1
    } else if(player1 === "paper" && player2 === "rock") {
        resultsText.textContent = "You played paper, the computer played rock"
        console.log("You played paper, the computer played rock")
        return 1
    } else if(player1 === "paper" && player2 === "scissors") {
        resultsText.textContent = "You played paper, the computer played scissors"
        console.log("You played paper, the computer played scissors")
        return 2
    } else if(player1 === "scissors" && player2 === "rock") {
        resultsText.textContent = "You played scissors, the computer played rock"
        console.log("You played scissors, the computer played rock")
        return 2
    } else if(player1 === "scissors" && player2 === "paper") {
        resultsText.textContent = "You played scissors, the computer played paper"
        console.log("You played scissors, the computer played paper")
        return 1
    } else {
        return "FAILED TO COMPUTE"
    }
}

function playRound(play) {
    let human = humanPlay(play)
    let computer = computerPlay()
    let winner = determineWinner(human, computer);
    if(winner === 1) {
        humanScore++ }
    if(winner === 2) {
        computerScore++ }
    if(humanScore === 5) {
        resultsText.textContent = "CONGRATS, YOU WON!!! :)"
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5){
        resultsText.textContent = "CONGRATS, YOU LOST, KILL YOURSELF!!! :("
        humanScore = 0;
        computerScore = 0;
    }
    scoreText.textContent = "Your score:" + humanScore + " - Computer Score: " + computerScore
}



//DOM Code
let humanScore = 0;
let computerScore = 0;
const container = document.querySelector(".container");
const scoreText = document.createElement("div");
const resultsText = document.createElement("div");

container.appendChild(scoreText)
container.appendChild(resultsText)



const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", ()=> {
    playRound("paper")
})

scissorsButton.addEventListener("click", () => {
    playRound("scissors")
})

