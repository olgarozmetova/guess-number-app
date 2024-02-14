'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // No hay entrada
  if (!guess) {
    displayMessage('⛔ No hay número!');
    // Hay ganador
  } else if (guess === secretNumber) {
    displayMessage('🎉 Has ganado!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#ffd43b';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Número diferente al ganador
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Demasiado alto!' : '📉 Demasiado bajo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Has perdido!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Volver a lo de antes
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Empieza adivinar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#c5f6fa';
  document.querySelector('.number').style.width = '15rem';
});
