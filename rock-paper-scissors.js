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
        playRound(computerPlay(), playerPlay());
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('Paper covers rock! You win!')
        return 1;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('Rock crushes scissors! You lose!')
        return 0;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('Paper covers rock! You lose!')
        return 0;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('Scissors cut paper! You win!')
        return 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('Rock crushes scissors! You win!')
        return 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('Scissors cut paper! You lose!')
        return 0;
    } else {
        return 2;
    }

}

function game() {
    let i = 0;
    let wins = 0;
    let losses = 0;

    while (i < 5) {
        console.log(playRound(computerPlay(),playerPlay()));
        ++i;

    }

    if (wins > losses) {
        console.log(`Congrats! You win, ${wins} to ${losses}!`);
    } else if (losses > wins) {
        console.log(`Sorry! You lose, ${wins} games to ${losses}.`);
    }

}

game();