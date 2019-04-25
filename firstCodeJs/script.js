let iconRock = document.getElementById('rock');
let iconPaper = document.getElementById('paper');
let iconScissors = document.getElementById('scissors');
let iconComputerChoice = document.getElementById('computer-choice');
let icons = document.getElementsByClassName('pictures');
let middleButton = document.getElementById('middle-button');
let currentStreakText = document.getElementById('current-streak');
let currentStreak = 0;
let maxStreakText = document.getElementById('max-streak');
let maxStreak = 0;
let playerChoice;
let computerChoice;
let gameOver = false;

//make a random choice for the computer
const computerChoiceGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerChoice = 'rock';
        iconComputerChoice.src = "rock.png";
    } else if(randomNumber === 1) {
        computerChoice = 'paper';
        iconComputerChoice.src = "paper.png";
    } else {
        computerChoice = 'scissors';
        iconComputerChoice.src = "scissors.png";
    }
};

//player onclick events
iconRock.onclick = () => { 
    if(gameOver === false) {
        playerChoice = 'rock';
        iconPaper.style.opacity = 0.2;
        iconScissors.style.opacity = 0.2;
        playGame();
    }
};

iconPaper.onclick = () => {
    if(gameOver === false) {
        playerChoice = 'paper';
        iconRock.style.opacity = 0.2;
        iconScissors.style.opacity = 0.2;
        playGame();
    }
};

iconScissors.onclick = () => {
    if(gameOver === false) {   
        playerChoice = 'scissors';
        iconRock.style.opacity = 0.2;
        iconPaper.style.opacity = 0.2;
        playGame();
    }
};

middleButton.onclick = () => {
    resetGame();
};

//determine winner based on random computer choice and player choice
const determineWinner = () => {
    if(playerChoice === computerChoice) {
        return 'tie';
    } else if(playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'loss';
        } else {
            return 'win';
        }
    } else if(playerChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'win';
        } else {
            return 'loss';
        }
    } else {
        if(computerChoice === 'rock') {
            return 'loss';
        } else {
            return 'win';
        }
    }
};

//streak calculations
const streakCalculator = (outcome) => {
    if(outcome === 'win') {
        currentStreak++;
    } else if(outcome === 'loss') {
        if(currentStreak > maxStreak) {
            maxStreak = currentStreak;
        };
        currentStreak = 0;
    };
    currentStreakText.innerHTML = 'Current streak: ' + currentStreak;
    maxStreakText.innerHTML = 'Max streak: ' + maxStreak;
};

//play game
const playGame = () => {
    computerChoiceGenerator();
    let outcome = determineWinner();
    if(outcome === 'win') {
        middleButton.innerHTML = 'You win! Keep going?';
    } else if(outcome === 'loss') {
        middleButton.innerHTML = 'Game over! Play again?';
    } else {
        middleButton.innerHTML = 'Tie! Play again?'
    };
    streakCalculator(outcome);
    gameOver = true;
};

//reset game
const resetGame = () => {
    for(var i=0; i<icons.length; i++) {
        icons[i].style.opacity = 1;
    }
    iconComputerChoice.src = "empty.jpeg";
    gameOver = false;
};







