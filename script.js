'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🤩Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =10;

// document.querySelector('.guess').value = 23;

let number = Math.trunc(Math.random()*21);

let highScore = 0;
let score = 20;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    // document.querySelector('.message').textContent = '⛔No number';
    displayMessage('⛔No number');

    // when there is no input
  }else if(guess === number){
    // document.querySelector('.message').textContent = '🤩Correct Number';
    displayMessage('🤩Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    // when player wins
  }else if(guess !== number){ // when guess is wrong
    displayMessage((guess > number)? '📈Too high!' : '📉Too low!');
    // document.querySelector('.message').textContent = (guess > number)? '📈Too high!' : '📉Too low!';
    if(score > 1){
      score = score - 1 ;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage('You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
})


// Implementing play again
document.querySelector('.again').addEventListener('click',function(){
  if(highScore < score){
    highScore = score; 
    document.querySelector('.highscore').textContent = highScore;
  }

  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random()*21);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

})