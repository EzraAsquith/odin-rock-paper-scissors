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

function humanPlay() {
    let play = prompt("Enter (r)ock (p)apper (s)cissors")

    if (play === "r") {
        return "rock"
    } else if(play === "p") {
        return "paper"
    } else {
        return "scissors"
    }

}

function determineWinner(player1, player2) {
    if(player1 === player2) {
        return "tie"
    } else if(player1 === "rock" && player2 === "paper") {
        return "Player2 wins"
    } else if(player1 === "rock" && player2 === "scissors") {
        return "Player1 Wins"
    } else if(player1 === "paper" && player2 === "rock") {
        return "Player1 wins"
    } else if(player1 === "paper" && player2 === "scissors") {
        return "Player2 wins"
    } else if(player1 === "scissors" && player2 === "rock") {
        return "Player2 wins"
    } else if(player1 === "scissors" && player2 === "paper") {
        return "Player1 wins"
    } else {
        return "FAILED TO COMPUTE"
    }
}



