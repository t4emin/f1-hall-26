import { iconSvg } from './icons.js';
import {
  renderSeasonDetail,
  renderSeasonIndex,
  renderSeasonRaceResults
} from './render.js';

export function initSeasonIndexPage(app, route, seasons) {
  renderSeasonIndex(app, route.template, seasons);
}

export function initSeasonDetailPage(app, route, season) {
  renderSeasonDetail(app, route.template, season);

  const firstRace = season.races[0];
  if (firstRace) {
    renderRace(firstRace.id, season);
  }

  document.querySelectorAll('[data-race-id]').forEach((button) => {
    button.addEventListener('click', () => {
      renderRace(button.dataset.raceId, season);
    });
  });
}

function renderRace(raceId, season) {
  document.querySelectorAll('[data-race-id]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.raceId === raceId);
  });

  renderSeasonRaceResults(
    document.querySelector('#raceResultPanel'),
    raceId,
    season,
    {
      trophy: iconSvg('trophy', 'icon icon--heading')
    }
  );
}
