const startBtn = document.querySelector(".startBtn");
const playerOneImg = document.querySelector(".PlayerOneImg");
const playerTwoImg = document.querySelector(".PlayerTwoImg");
// Create the Handle Click
startBtn.onclick = () => {
  let shufflePlayerOne = Math.trunc(Math.random() * 3) + 1;
  let shufflePlayerTwo = Math.trunc(Math.random() * 3) + 1;
  playerOneImg.src = `${shufflePlayerOne}.png`;
  playerTwoImg.src = `${shufflePlayerTwo}.png`;
  console.log(shufflePlayerOne);
  console.log(shufflePlayerTwo);
  // Game Logic
  let paper = 2;
  let stone = 1;
  let scissor = 3;
  if (shufflePlayerOne === shufflePlayerTwo) {
    console.log("draw");
  } else if (shufflePlayerOne === 1 && shufflePlayerTwo === 2) {
    console.log("Player Two win");
  } else if (shufflePlayerOne === 2 && shufflePlayerTwo === 1) {
    console.log("player one win");
  } else if (shufflePlayerOne === 1 && shufflePlayerTwo === 3) {
    console.log("player one win");
  } else if (shufflePlayerOne === 3 && shufflePlayerTwo === 1) {
    console.log("player Two win");
  } else if (shufflePlayerOne === 2 && shufflePlayerTwo === 3) {
    console.log("player two win");
  } else if (shufflePlayerOne === 3 && shufflePlayerTwo === 2) {
    console.log("player One Win");
  }
};
