import { initRouter } from "./router";
import { state } from "./state";

import "./pages/welcome";
import "./pages/instructions";
import "./pages/game";
import "./pages/results";

import "./components/button-start";
import "./components/move/hands";

(function () {
  const root: any = document.querySelector(".root");
  initRouter(root);
  state.getStorage();
})();
