import "../../router";

export function initInstructionsPage(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  style.innerHTML = `
*{
  caret-color: transparent;
}
    .container{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top:-40px;
        align-items: center;
        max-width:800px;
        margin:0 auto;
    }
    .instructions{
        font-family: "odibee sans";
        font-size: 60px;
        color: #000000;
        text-align: center;
        max-width: 80%;
    }
    .container-hands{
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 100px;
        margin: 0px 60px;
        width: 80%;
        }
    `;

  div.innerHTML = `
    <div class="container">

    <p class="instructions">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
    <button-start class="button">¡Jugar!</button-start>

    <div class="container-hands">

    <div class="hand"><movimiento-de-manos hand="piedra"></movimiento-de-manos></div>
    <div class="hand"><movimiento-de-manos hand="papel"></movimiento-de-manos></div>
    <div class="hand"><movimiento-de-manos hand="tijera"></movimiento-de-manos></div>

    </div>

    </div>
    `;

  const buttonEl: any = div.querySelector(".button");
  buttonEl.addEventListener("click", () => {
    params.goTo("/desafio-final-five/game");
  });

  div.appendChild(style);
  return div;
}
