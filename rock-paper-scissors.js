const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[randomMove(0, 2)];
}

function randomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerPlay() {
    let playerMove = window.prompt('Rock, paper, or scissors?');

    if (choices.includes(playerMove.toLowerCase())) {
        return playerMove.toLowerCase();
    } else {
        alert ('Please enter a valid selection.')
        playerPlay()
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        console.log(`It's a tie! You both picked ${computerSelection}! Please pick again.`)
        playRound()
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        window.prompt('Paper covers rock! You win!')
        return 'win';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        
        return 'lose';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {

        return 'lose';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {

        return 'win';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {

        return 'win';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {

        return 'lose';
    }

}

