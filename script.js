function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      hand = 'rock';
      break;
    case 1:
      hand = 'paper';
      break;
    case 2:
      hand = 'scissors';
      break;
    default:
      break;
  }
  return hand;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case 'rock':
      switch (computerSelection) {
        case 'rock':
          roundResult = 'This round was a tie!';
          break;
        case 'paper':
          roundResult = 'You lost this round! Paper beats Rock!';
          break;
        case 'scissors':
          roundResult = 'You won this round! Rock beats Scissors!';
          break;
        default:
          break;
      }
      break;
    case 'paper':
      switch (computerSelection) {
        case 'rock':
          roundResult = 'You won this round! Paper beats Rock!';
          break;
        case 'paper':
          roundResult = 'This round was a tie!';
          break;
        case 'scissors':
          roundResult = 'You lost this round! Scissors beat Paper!';
          break;
        default:
          break;
      }
      break;
    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          roundResult = 'You lost this round! Rock beats Scissors!';
          break;
        case 'paper':
          roundResult = 'You won this round! Scissors beat Paper';
          break;
        case 'scissors':
          roundResult = 'This round was a tie!';
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return roundResult;
}

let playerScore = 0;
let computerScore = 0;
let currentScore;

const buttons = document.querySelectorAll('button');
let result = document.querySelector('#result');
let score = document.querySelector('#score');
let winner = document.querySelector('#winner');

  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      play(button);
    });
  });

function play(button) {
  playRound(button.id, computerPlay());
  result.textContent = roundResult;
  if (roundResult.includes('won')) {
    playerScore++;
  } else if (roundResult.includes('lost')) {
    computerScore++;
  }
  currentScore = `Player ${playerScore} : ${computerScore} Computer`;
  score.textContent = currentScore;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      winner.textContent = 'Congratulations! You\'ve won the game!';
    } else if (computerScore === 5) {
      winner.textContent = 'Oh no! You\'ve lost the game. Try again!';
    }
  }
}