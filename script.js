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
console.log(computerPlay());