const campoPlayer = document.getElementById("player");
const campoCPU = document.getElementById("cpu");
const campoResultado = document.getElementById("resultado");
const pBtn = document.getElementById("pedraBtn");
const tBtn = document.getElementById("tesouraBtn");
const papelBtn = document.getElementById("papelBtn");
const gameBoard = document.getElementById("game-board");

const game = new Game(gameBoard);

pBtn.addEventListener("click", () => {
  game.setJogada();
});
