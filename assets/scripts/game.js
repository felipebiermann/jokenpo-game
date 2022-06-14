class Game {
  constructor() {
    this.player = "player";
    this.cpu = "CPU";
    this.jogos = 0;
    this.vitorias = 0;
    this.jogadas = ["pedra", "papel", "tesoura"];
  }

  setJogada(jogada) {
    this.jogada = jogada;
  }
  getJogada() {
    return this.jogada;
  }

  getPlayer() {
    return this.player;
  }

  getJogadaCPU() {
    return jogadas[Math.floor(Math.random() * 3)];
  }
}






