const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
const playerOneImg = document.querySelector(".PlayerOneImg");
const playerTwoImg = document.querySelector(".PlayerTwoImg");
const POR = document.querySelector(".POR");
const PTR = document.querySelector(".PTR");
// Create the Handle Click ✔
startBtn.onclick = () => {
  let shufflePlayerOne = Math.trunc(Math.random() * 3) + 1;
  let shufflePlayerTwo = Math.trunc(Math.random() * 3) + 1;
  playerOneImg.src = `${shufflePlayerOne}.png`;
  playerTwoImg.src = `${shufflePlayerTwo}.png`;

  // Game Logic 😁
  let paper = 2;
  let stone = 1;
  let scissor = 3;
  if (shufflePlayerOne === shufflePlayerTwo) {
    POR.style.fontWeight = 700;
    POR.style.color = "#52ad00";
    POR.textContent = "DRAW 👏";
    PTR.style.fontWeight = 700;
    PTR.style.color = "#52ad00";
    PTR.textContent = "DRAW 👏 ";
  } else if (shufflePlayerOne === 1 && shufflePlayerTwo === 2) {
    PTR.style.fontWeight = 700;
    PTR.style.color = "#52ad00";
    PTR.textContent = "WINNER 🎉 ";
    POR.style.fontWeight = 700;
    POR.style.color = "red";
    POR.textContent = "LOSER ❌ ";
  } else if (shufflePlayerOne === 2 && shufflePlayerTwo === 1) {
    POR.style.fontWeight = 700;
    POR.style.color = "#52ad00";
    POR.textContent = "WINNER  🎉 ";
    PTR.style.fontWeight = 700;
    PTR.style.color = "red";
    PTR.textContent = "LOSER ❌ ";
  } else if (shufflePlayerOne === 1 && shufflePlayerTwo === 3) {
    POR.style.fontWeight = 700;
    POR.style.color = "#52ad00";
    POR.textContent = "WINNER  🎉 ";
    PTR.style.fontWeight = 700;
    PTR.style.color = "red";
    PTR.textContent = "LOSER ❌ ";
  } else if (shufflePlayerOne === 3 && shufflePlayerTwo === 1) {
    PTR.style.fontWeight = 700;
    PTR.style.color = "#52ad00";
    PTR.textContent = "WINNER  🎉 ";
    POR.style.fontWeight = 700;
    POR.style.color = "red";
    POR.textContent = "LOSER ❌ ";
  } else if (shufflePlayerOne === 2 && shufflePlayerTwo === 3) {
    PTR.style.fontWeight = 700;
    PTR.style.color = "#52ad00";
    PTR.textContent = "WINNER  🎉 ";
    POR.style.fontWeight = 700;
    POR.style.color = "red";
    POR.textContent = "LOSER ❌ ";
  } else if (shufflePlayerOne === 3 && shufflePlayerTwo === 2) {
    POR.style.fontWeight = 700;
    POR.style.color = "#52ad00";
    POR.textContent = "WINNER  🎉 ";
    PTR.style.fontWeight = 700;
    PTR.style.color = "red";
    PTR.textContent = "LOSER ❌ ";
  }
};
resetBtn.onclick = () => {
  POR.textContent = "💭";
  PTR.textContent = "💭";
  playerOneImg.src = "1.png";
  playerTwoImg.src = "1.png";
};
