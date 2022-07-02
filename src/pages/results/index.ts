import "../../router";
import { state } from "../../state";

const results = {
  victoria: require("url:../../images/ganasteS.svg"),
  derrota: require("url:../../images/perdiste.svg"),
  empate: require("url:../../images/empate.svg"),
};

export function initResults(params) {
  const currentState = state.getState();
  const whoWins = state.whoWins(
    currentState.currentGame.myPlay,
    currentState.currentGame.botPlay
  );
  state.setScore(whoWins);
  state.restartGame();
  const div = document.createElement("div");
  const style = document.createElement("style");

  var myScore = state.data.history.myScore;
  var botScore = state.data.history.botScore;

  style.innerHTML = `
*{
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:105vh;
}

.victoria{
  display: none;
  padding: 20px;
  }
  .derrota{
    display: none;
    padding: 20px;
  }

  .empate{
    display: none;
    padding: 20px;
  }

  .score{
    border: solid 10px;
    background-color: white;
  }
  .caret{
    caret-color: transparent;
  }

  .score-title{
    font-family: "titan one";  
		font-size: 60px;
    margin: 5px;
    padding: 5px 80px;
    text-align: center;
  }
  
  .score-participant{
    font-family: "titan one";  
		font-size: 40px;
    margin: 5px;
    padding: 5px 10px;
    text-align: center;

  }

  .go-back{
    margin-top: 20px;

  }
  
  .go-back-button{
    margin-left: -11px;
    border-radius: 50%;
  }
  `;

  div.innerHTML = `
  <div class="container">

    <div class="victoria">
      <img class="win-img caret" src=${results.victoria} width= 350px height= 350px></img>
    </div>

    <div class="derrota">
      <img class="lose-img caret " src=${results.derrota} width= 350px height= 350px></img>
    </div>

    <div class="empate">
      <img class="tie-img caret " src=${results.empate} width= 350px height= 300px></img>
    </div>

    <div class="score">
      <h2 class="score-title caret ">Puntuacion</h2>
      <h3 class="score-participant caret ">Vos :  ${myScore}</h3>
      <h3 class="score-participant caret ">Skynet :  ${botScore}</h3>
    </div>

    <div class="go-back">
      <button-start class="go-back-button caret ">Volver a jugar</button-start>
    </div>
    <div class="go-back restart">
      <button-start class="go-back-button caret "> Reiniciar Puntaje</button-start>
    </div>

  </div>
  `;

  const victoria: any = div.querySelector(".victoria");
  const derrota: any = div.querySelector(".derrota");
  const empate: any = div.querySelector(".empate");
  const continent: any = div.querySelector(".container");

  if (whoWins == "win") {
    victoria.style.display = "inherit";
    continent.style.background = "rgba(106, 146, 74, 0.6)";
  } else if (whoWins == "lose") {
    derrota.style.display = "inherit";
    continent.style.background = "rgba(137, 73, 73, 0.6)";
  } else if (whoWins == "tie") {
    empate.style.display = "inherit";
    continent.style.background = "rgba(106, 112, 101, 0.6)";
  }

  const goBack: any = div.querySelector(".go-back");

  goBack.addEventListener("click", (e) => {
    e.preventDefault();
    params.goTo("/desafio-final-five/instructions/");
  });

  const resetPoints: any = div.querySelector(".restart");

  resetPoints.addEventListener("click", (e) => {
    e.preventDefault();
    const newData = state.getState();
    (newData.history = {
      myScore: 0,
      botScore: 0,
    }),
      state.setState(newData);
    params.goTo("/desafio-final-five/instructions/");
  });

  div.appendChild(style);
  return div;
}
