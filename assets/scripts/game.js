class Game {
  constructor() {
    this.player = "player";
    this.cpu = "CPU";
    this.jogadas = ["pedra", "papel", "tesoura"];
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
    return this.jogadas[Math.floor(Math.random() * 3)];
  }
}
