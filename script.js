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
        console.log("You tied")
        return 0
    } else if(player1 === "rock" && player2 === "paper") {
        console.log("You played rock, the computer played paper")
        return 2
    } else if(player1 === "rock" && player2 === "scissors") {
        console.log("You played rock, the computer played scissors")
        return 1
    } else if(player1 === "paper" && player2 === "rock") {
        console.log("You played paper, the computer played rock")
        return 1
    } else if(player1 === "paper" && player2 === "scissors") {
        console.log("You played paper, the computer played scissors")
        return 2
    } else if(player1 === "scissors" && player2 === "rock") {
        console.log("You played scissors, the computer played rock")
        return 2
    } else if(player1 === "scissors" && player2 === "paper") {
        console.log("You played scissors, the computer played paper")
        return 1
    } else {
        return "FAILED TO COMPUTE"
    }
}

function playRound() {
    let human = humanPlay()
    let computer = computerPlay()
    return determineWinner(human, computer)
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    for(let round = 0; round <= rounds; round++) {
        let results = playRound()   
        if(results === 1) {
            humanScore++ }
        if(results === 2) {
            computerScore++ }
    }
    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
}

playGame(5)


