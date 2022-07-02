type Played = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: {
      myPlay: "",
      botPlay: "",
    },
    history: {
      myScore: 0,
      botScore: 0,
    },
  },

  listeners: [],

  getStorage() {
    const localData = JSON.parse(localStorage.getItem("data"));

    if (localData) {
      console.log(localData);
      this.setState(localData);
    } else {
      return;
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    this.savedData();
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setScore(result) {
    const currentState = this.getState();

    if (result == "win") {
      currentState.history.myScore++;
    } else if (result == "lose") {
      currentState.history.botScore++;
    }

    this.setState(currentState);
  },

  restartGame() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
    currentState.currentGame.botPlay = "";
    this.setState(currentState);
  },

  whoWins(myPlay: Played, botPlay: Played) {
    const ganasteConPapel: boolean = myPlay == "papel" && botPlay == "piedra";
    const ganasteConTijera: boolean = myPlay == "tijera" && botPlay == "papel";
    const ganasteConPiedra: boolean = myPlay == "piedra" && botPlay == "tijera";
    const ganaste = [
      ganasteConPiedra,
      ganasteConPapel,
      ganasteConTijera,
    ].includes(true);

    const perdisteConPiedra: boolean = myPlay == "piedra" && botPlay == "papel";
    const perdisteConPapel: boolean = myPlay == "papel" && botPlay == "tijera";
    const perdisteConTijera: boolean =
      myPlay == "tijera" && botPlay == "piedra";
    const perdiste = [
      perdisteConPiedra,
      perdisteConPapel,
      perdisteConTijera,
    ].includes(true);

    if (ganaste == true) {
      return "win";
    } else if (perdiste == true) {
      return "lose";
    } else {
      return "tie";
    }
  },

  setMove(move: Played) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setScore();
  },

  savedData() {
    const currentHistory = this.getState();
    localStorage.setItem("data", JSON.stringify(currentHistory));
  },
};

export { state };
