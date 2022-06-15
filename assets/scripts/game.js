class Game {
  constructor() {
    this.player = "player";
    this.cpu = "CPU";
    this.jogadas = ["pedra", "papel", "tesoura"];
  }

  pedra() {
    choicePlayer = event.srcElement.innerText;

    playerimg.setAttribute("src", `./assets/images/${choicePlayer}.png`);
    choiceCPU = game.getJogadaCPU();
    cpuimg.setAttribute("src", `./assets/images/${choiceCPU}.png`);
    console.log("o player escolheu " + choicePlayer);
    console.log("o CPU escolheu " + choiceCPU);
    if (choicePlayer === "pedra" && choiceCPU === "pedra") {
      console.log("Empate!");
    } else if (choicePlayer === "pedra" && choiceCPU === "tesoura") {
      scorePlayer++;
      placarPlayer.innerText = scorePlayer;
      console.log("Você Venceu!");
    } else if (choicePlayer === "pedra" && choiceCPU === "papel") {
      scoreCPU++;
      placarCPU.innerText = scoreCPU;
      console.log("Você Perdeu!");
    }
    if (scorePlayer === 5) {
      window.alert("O Player ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    } else if (scoreCPU === 5) {
      window.alert("O Computador ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
  }

  tesoura() {
    choicePlayer = event.srcElement.innerText;
    playerimg.setAttribute("src", `./assets/images/${choicePlayer}.png`);
    choiceCPU = game.getJogadaCPU();
    cpuimg.setAttribute("src", `./assets/images/${choiceCPU}.png`);

    console.log("o player escolheu " + choicePlayer);
    console.log("o CPU escolheu " + choiceCPU);
    if (choicePlayer === "tesoura" && choiceCPU === "pedra") {
      scoreCPU++;
      placarCPU.innerText = scoreCPU;
      console.log("Você Perdeu!");
    } else if (choicePlayer === "tesoura" && choiceCPU === "tesoura") {
      console.log("Empate!");
    } else if (choicePlayer === "tesoura" && choiceCPU === "papel") {
      scorePlayer++;
      placarPlayer.innerText = scorePlayer;
      console.log("Você Venceu!");
    }
    if (scorePlayer === 5) {
      window.alert("O Player ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    } else if (scoreCPU === 5) {
      window.alert("O Computador ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
  }

  papel() {
    choicePlayer = event.srcElement.innerText;
    playerimg.setAttribute("src", `./assets/images/${choicePlayer}.png`);
    choiceCPU = game.getJogadaCPU();
    cpuimg.setAttribute("src", `./assets/images/${choiceCPU}.png`);
    console.log("o player escolheu " + choicePlayer);
    console.log("o CPU escolheu " + choiceCPU);
    if (choicePlayer === "papel" && choiceCPU === "pedra") {
      scorePlayer++;
      placarPlayer.innerText = scorePlayer;
      console.log("Você Venceu!");
    } else if (choicePlayer === "papel" && choiceCPU === "tesoura") {
      scoreCPU++;
      placarCPU.innerText = scoreCPU;
      console.log("Você Perdeu!");
    } else if (choicePlayer === "papel" && choiceCPU === "papel") {
      console.log("Empate!");
    }
    if (scorePlayer === 5) {
      window.alert("O Player ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    } else if (scoreCPU === 5) {
      window.alert("O Computador ganhou!");
      const button = document.createElement("button");
      section.innerHTML = "";
      section.appendChild(button);
      button.innerText = "RECOMEÇAR!";
      button.addEventListener("click", () => {
        document.location.reload(true);
      });
    }
  }

  setJogada(jogadas) {
    this.jogadas = jogadas;
  }

  getJogada() {
    return this.jogadas;
  }

  getPlayer() {
    return this.player;
  }

  getJogadaCPU() {
    let jogadaCPU = this.jogadas[Math.floor(Math.random() * 3)];
    //console.log(jogadaCPU);
    return jogadaCPU;
  }
}
