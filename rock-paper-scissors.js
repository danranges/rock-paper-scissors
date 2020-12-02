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
        alert ('Please enter a valid selection.');
        playerPlay();
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        console.log(`It's a tie! You both picked ${computerSelection}! Please pick again.`);
        playRound();
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        console.log('Paper covers rock! You win!');
        return 'win';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('Rock crushes scissors! You lose!');
        return 'lose';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log('Paper covers rock! You lose!');
        return 'lose';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        console.log('Scissors cut paper! You win!');
        return 'win';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        console.log('Rock crushes scissors! You win!');
        return 'win';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log('Scissors cut paper! You lose!');
        return 'lose';
    }

}

playRound(computerPlay(), playerPlay())''