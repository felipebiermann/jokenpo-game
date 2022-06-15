//fazer os botões de cada opção e as comparações - RESOLVIDO.
//capturar as imagens -
//fazer a resposta aparecer na tela
//adicionar placar
//adicionar animação
//rodadas limite

const campoPlayer = document.getElementById("player");
const campoCPU = document.getElementById("cpu");
const campoResultado = document.getElementById("resultado");
const pBtn = document.getElementById("pedraBtn");
const tBtn = document.getElementById("tesouraBtn");
const papelBtn = document.getElementById("papelBtn");
const gameBoard = document.getElementById("game-board");
const clickEvent = document.getElementById("clickEvent");
let choicePlayer;
let choiceCPU;
let imgPlayer = "./assets/images/${choicePlayer}.png";
let imgCPU = "./assets/images/${choiceCPU}.png";

const game = new Game(gameBoard);

clickEvent.addEventListener("click", (event) => {
  //choicePlayer = event.srcElement.innerText;
  //playerimg.setAttribute("src", playerimg)
  //choiceCPU = game.getJogadaCPU();
  //cpuimg.setAttribute("src", cpuimg)
  //console.log(choicePlayer);
  // if (choicePlayer === "pedra" && choiceCPU === "pedra") {
  //   console.log("Empate!");
  // } else if (choicePlayer === "pedra" && choiceCPU === "tesoura") {
  //   console.log("Você Venceu!");
  // } else if (choicePlayer === "pedra" && choiceCPU === "papel") {
  //   console.log("Você Perdeu!");
  // } else if (choicePlayer === "tesoura" && choiceCPU === "pedra") {
  //   console.log("Você Perdeu!");
  // } else if (choicePlayer === "tesoura" && choiceCPU === "tesoura") {
  //   console.log("Empate!");
  // } else if (choicePlayer === "tesoura" && choiceCPU === "papel") {
  //   console.log("Você Venceu!");
  // } else if (choicePlayer === "papel" && choiceCPU === "pedra") {
  //   console.log("Você Venceu!");
  // } else if (choicePlayer === "papel" && choiceCPU === "tesoura") {
  //   console.log("Você Perdeu!");
  // } else if (choicePlayer === "papel" && choiceCPU === "papel") {
  //   console.log("Empate!");
  // } else {
  //   console.log("alguma coisa deu ERRADO!");
  // }
});

pedraBtn.addEventListener("click", (event) => {
  choicePlayer = event.srcElement.innerText;
  playerimg.setAttribute("src", imgPlayer);
  choiceCPU = game.getJogadaCPU();
  cpuimg.setAttribute("src", imgCPU);
  console.log("o player escolheu" + choicePlayer);
  console.log("o CPU escolheu" + choiceCPU);
  if (choicePlayer === "pedra" && choiceCPU === "pedra") {
    console.log("Empate!");
  } else if (choicePlayer === "pedra" && choiceCPU === "tesoura") {
    console.log("Você Venceu!");
  } else if (choicePlayer === "pedra" && choiceCPU === "papel") {
    console.log("Você Perdeu!");
  }
});

tesouraBtn.addEventListener("click", (event) => {
  choicePlayer = event.srcElement.innerText;
  choiceCPU = game.getJogadaCPU();

  console.log("o player escolheu" + choicePlayer);
  console.log("o CPU escolheu" + choiceCPU);
  if (choicePlayer === "tesoura" && choiceCPU === "pedra") {
    console.log("Você Perdeu!");
  } else if (choicePlayer === "tesoura" && choiceCPU === "tesoura") {
    console.log("Empate!");
  } else if (choicePlayer === "tesoura" && choiceCPU === "papel") {
    console.log("Você Venceu!");
  }
});

papelBtn.addEventListener("click", (event) => {
  choicePlayer = event.srcElement.innerText;
  choiceCPU = game.getJogadaCPU();
  console.log("o player escolheu" + choicePlayer);
  console.log("o CPU escolheu" + choiceCPU);
  if (choicePlayer === "papel" && choiceCPU === "pedra") {
    console.log("Você Venceu!");
  } else if (choicePlayer === "papel" && choiceCPU === "tesoura") {
    console.log("Você Perdeu!");
  } else if (choicePlayer === "papel" && choiceCPU === "papel") {
    console.log("Empate!");
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
