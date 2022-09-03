const startBtn = document.querySelector(".startBtn");
const playerOneImg = document.querySelector(".PlayerOneImg");
const playerTwoImg = document.querySelector(".PlayerTwoImg");
// Create the Handle Click
startBtn.onclick = () => {
  let shufflePlayerOne = Math.trunc(Math.random() * 3) + 1;
  let shufflePlayerTwo = Math.trunc(Math.random() * 3) + 1;
  playerOneImg.src = `./images/${shufflePlayerOne}.png`;
  playerTwoImg.src = `./images/${shufflePlayerTwo}.png`;
};

// Game Logic
