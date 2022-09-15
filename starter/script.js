'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

// Reset game with play again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * 20);
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Guess is not within range';
  } else if (guess === secretNumber) {
    // Win
    document.querySelector('.message').textContent = 'You Win! 🏆';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High! ⬇️';
        score -= 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Too Low! ⬆️';
        score -= 1;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You Lost! :(';
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }
});
