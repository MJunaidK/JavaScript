'use strict';
/*console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number 🎉`;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const addMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //document.querySelector('.message').textContent = `No Number 🎃`;
    addMessage(`No Number 🎃`);

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = `Correct Number 🎉`;
    addMessage(`Correct Number 🎉`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When Guess is Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*document.querySelector('.message').textContent =
        guess > secretNumber ? `Too High!` : '`Too low!';*/
      addMessage(guess > secretNumber ? `Too High!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = `Game Over Buddy!`;
      addMessage(`Game Over Buddy!`);
    }
  }
  /*
  // When guess is too high
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too High!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over Buddy!`;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over Buddy!`;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = `Start Guessing ...`;
  addMessage(`Start Guessing ...`);
});

/*

// Instructor Code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'â›”ï¸ No number!';
    displayMessage('â›”ï¸ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'ðŸŽ‰ Correct Number!';
    displayMessage('ðŸŽ‰ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'ðŸ“ˆ Too high!' : 'ðŸ“‰ Too low!';
      displayMessage(guess > secretNumber ? 'ðŸ“ˆ Too high!' : 'ðŸ“‰ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'ðŸ’¥ You lost the game!';
      displayMessage('ðŸ’¥ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'ðŸ“ˆ Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'ðŸ’¥ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'ðŸ“‰ Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'ðŸ’¥ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


*/
