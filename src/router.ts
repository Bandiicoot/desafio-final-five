import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResults } from "./pages/results";

export function initRouter(container: Element) {
  const routes = [
    {
      path: /\/desafio-m5/,
      component: initWelcomePage,
    },
    {
      path: /\/desafio-m5\/welcome/,
      component: initWelcomePage,
    },
    {
      path: /\/desafio-m5\/instructions/,
      component: initInstructionsPage,
    },
    {
      path: /\/desafio-m5\/game/,
      component: initGame,
    },
    {
      path: /\/desafio-m5\/results/,
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
    goTo("/desafio-m5/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
