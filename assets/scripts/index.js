//fazer os botões de cada opção e as comparações - RESOLVIDO.
//capturar as imagens - RESOLVIDO
//fazer a resposta aparecer na tela - RESOLVIDO
//adicionar placar - RESOLVIDO
//adicionar animação
//rodadas limite

const campoPlayer = document.getElementById("player");
const campoCPU = document.getElementById("cpu");
const campoResultado = document.getElementById("resultado");
const pBtn = document.getElementById("pedraBtn");
const tBtn = document.getElementById("tesouraBtn");
const papelBtn = document.getElementById("papelBtn");
const gameBoard = document.getElementById("game-board");
const section = document.getElementById("clickEvent");

let choicePlayer;
let choiceCPU;
let scorePlayer = 0;
let scoreCPU = 0;

const game = new Game(gameBoard);

pedraBtn.addEventListener("click", (event) => {
  game.pedra();
});

tesouraBtn.addEventListener("click", (event) => {
  game.tesoura();
});

papelBtn.addEventListener("click", (event) => {
  game.papel();
});
