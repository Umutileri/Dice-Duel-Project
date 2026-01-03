'use strict';

const btnRoll = document.querySelector('.btn-roll');
const btnReset = document.querySelector('.btn-reset');

const dicePlayer = document.getElementById('dice-player');
const diceComputer = document.getElementById('dice-computer');
const dicePlaceholderPlayer = document.querySelector(
  '.dice-placeholder-player'
);
const dicePlaceholderComputer = document.querySelector(
  '.dice-placeholder-computer'
);

const playerBox = document.querySelector('.player-box');
const computerBox = document.querySelector('.computer-box');

const resultText = document.getElementById('result-text');
const resultIcon = document.getElementById('result-icon');

let score0El = document.getElementById('score-0');
let score1El = document.getElementById('score-1');
let score0 = 0;
let score1 = 0;

const hiddenClass = function () {
  dicePlayer.classList.add('hidden');
  diceComputer.classList.add('hidden');
  dicePlaceholderPlayer.classList.remove('hidden');
  dicePlaceholderComputer.classList.remove('hidden');
};
const showDice = function () {
  dicePlayer.classList.remove('hidden');
  diceComputer.classList.remove('hidden');
  dicePlaceholderPlayer.classList.add('hidden');
  dicePlaceholderComputer.classList.add('hidden');
};
const updateScores = function () {
  score0El.classList.remove('text-win', 'text-lose', 'text-draw');
  score1El.classList.remove('text-win', 'text-lose', 'text-draw');
  if (score0 > score1) {
    score0El.classList.add('text-win');
    score1El.classList.add('text-lose');
    score0El.classList.remove('text-lose', 'text-draw');
    score1El.classList.remove('text-win', 'text-draw');
  } else if (score0 < score1) {
    score1El.classList.add('text-win');
    score0El.classList.add('text-lose');
    score1El.classList.remove('text-lose', 'text-draw');
    score0El.classList.remove('text-win', 'text-draw');
  } else {
    score0El.classList.add('text-draw');
    score1El.classList.add('text-draw');
    score0El.classList.remove('text-win', 'text-lose');
    score1El.classList.remove('text-win', 'text-lose');
  }
};
hiddenClass();
btnRoll.addEventListener('click', function () {
  showDice();
  // Player's turn
  let playerRoll = Math.trunc(Math.random() * 6) + 1;
  let computerRoll = Math.trunc(Math.random() * 6) + 1;
  dicePlayer.src = `dice-${playerRoll}.png`;

  diceComputer.src = `dice-${computerRoll}.png`;

  if (playerRoll > computerRoll) {
    resultIcon.textContent = '🎉';
    resultText.textContent = 'Player Win!';
    score0++;
    score0El.textContent = score0;
  } else if (playerRoll < computerRoll) {
    resultIcon.textContent = '🤖';
    resultText.textContent = 'Computer Win!';
    score1++;
    score1El.textContent = score1;
  } else {
    resultIcon.textContent = '🤝';
    resultText.textContent = "It's a Draw!";
  }
  updateScores();
});

btnReset.addEventListener('click', function () {
  hiddenClass();
  score0 = 0;
  score1 = 0;
  score0El.textContent = score0;
  score1El.textContent = score1;
  resultIcon.textContent = '🎲';
  resultText.textContent = 'Roll to Start!';
  dicePlayer.src = 'dice-1.png';
  diceComputer.src = 'dice-1.png';

  score0El.classList.remove('text-win', 'text-lose', 'text-draw');
  score1El.classList.remove('text-win', 'text-lose', 'text-draw');
});
