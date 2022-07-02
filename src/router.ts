import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResults } from "./pages/results";

export function initRouter(container: Element) {
  const routes = [
    {
      path: /\/desafio-final-five/,
      component: initWelcomePage,
    },
    {
      path: /\/desafio-final-five\/welcome/,
      component: initWelcomePage,
    },
    {
      path: /\/desafio-final-five\/instructions/,
      component: initInstructionsPage,
    },
    {
      path: /\/desafio-final-five\/game/,
      component: initGame,
    },
    {
      path: /\/desafio-final-five\/results/,
      component: initResults,
    },
  ];

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io") || "/") {
    goTo("/desafio-final-five/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
