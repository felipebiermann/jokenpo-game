const campoPlayer = document.getElementById("player");
const campoCPU = document.getElementById("cpu");
const campoResultado = document.getElementById("resultado");
const pBtn = document.getElementById("pedraBtn");
const tBtn = document.getElementById("tesouraBtn");
const papelBtn = document.getElementById("papelBtn");
const gameBoard = document.getElementById("game-board");
const clickEvent = document.getElementById("clickEvent");

const game = new Game(gameBoard);

clickEvent.addEventListener("click", (event) => {
  const choicePlayer = event.srcElement.innerText;
  if (choicePlayer === "pedra" && game.getJogadaCPU() === "pedra") {
    console.log("Empate!");
  } else if (choicePlayer === "pedra" && game.getJogadaCPU() === "tesoura") {
    console.log("Você Venceu!");
  } else if (choicePlayer === "pedra" && game.getJogadaCPU() === "papel") {
    console.log("Você Perdeu!");
  } else if (choicePlayer === "tesoura" && game.getJogadaCPU() === "pedra") {
    console.log("Você Perdeu!");
  } else if (choicePlayer === "tesoura" && game.getJogadaCPU() === "tesoura") {
    console.log("Empate!");
  } else if (choicePlayer === "tesoura" && game.getJogadaCPU() === "papel") {
    console.log("Você Venceu!");
  } else if (choicePlayer === "papel" && game.getJogadaCPU() === "pedra") {
    console.log("Você Venceu!");
  } else if (choicePlayer === "papel" && game.getJogadaCPU() === "tesoura") {
    console.log("Você Perdeu!");
  } else if (choicePlayer === "papel" && game.getJogadaCPU() === "papel") {
    console.log("Empate!");
  } else {
    return null;
  }
});

// pBtn.addEventListener("click", () => {
//   console.log(pBtn.innerText);
//   console.log(game.getJogadaCPU());
//   if (game.getJogadaCPU() === "pedra") {
//     console.log("Deu Empate!");
//     return "Deu Empate!";
//   } else if (game.getJogadaCPU() === tBtn.innerText) {
//     console.log("Você ganhou!");
//     return "Você ganhou!";
//   } else if (game.getJogadaCPU() === papelBtn.innerText) {
//     console.log("Perdi!");
//     return "Perdi!";
//   } else {
//     return;
//   }
// });

// tBtn.addEventListener("click", () => {});

// papelBtn.addEventListener("click", () => {});
