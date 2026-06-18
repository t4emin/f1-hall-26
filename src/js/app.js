import '../less/main.less';
import { setDocumentTitle } from './common.js';
import { loadChampions, loadSeason, loadSeasons } from './data.js';
import { initDriverPage } from './driver.js';
import { initDriverDetailPage } from './driver-detail.js';
import { initSeasonDetailPage, initSeasonIndexPage } from './season.js';
import { resolveRoute } from '../template/routes.js';

async function init() {
  const app = document.querySelector('#app');
  const route = resolveRoute(window.location.pathname);

  try {
    setDocumentTitle(route.template);

    if (route.template.id === 'season-index') {
      initSeasonIndexPage(app, route, await loadSeasons());
      return;
    }

    if (route.template.id === 'season-detail') {
      initSeasonDetailPage(app, route, await loadSeason(route.params.year));
      return;
    }

    const champions = await loadChampions();

    if (route.template.id === 'driver-detail') {
      initDriverDetailPage(app, route, champions);
      return;
    }

    initDriverPage(app, route, champions);
  } catch (error) {
    app.innerHTML = `
      <main class="app-error">
        <h1>Legends of the Grid</h1>
        <p>${error.message}</p>
      </main>
    `;
  }
}

init();
