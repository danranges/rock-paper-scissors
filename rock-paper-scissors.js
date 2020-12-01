function computerPlay() {
    let computerMove = ['rock', 'paper', 'scissors'];
    return computerMove[randomMove(0, 2)];
}

function randomMove(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerPlay() {
    let playerMove = window.prompt("Rock, paper, or scissors?");
    return playerMove.toLowerCase();
}


//console.log(playerPlay());