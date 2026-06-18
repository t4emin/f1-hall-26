import { getComparisonRows, getDefaultComparison, findChampion } from './compare.js';
import { filterChampions, getEras, sortChampions } from './filters.js';
import {
  renderAppShell,
  renderChampionGrid,
  renderChampionOptions,
  renderComparison,
  renderEraOptions,
  setupCustomDropdown
} from './render.js';

const state = {
  champions: [],
  searchTerm: '',
  era: 'all',
  sortMode: 'titles-desc',
  firstChampionId: '',
  secondChampionId: ''
};

export function initDriverPage(app, route, champions) {
  state.champions = champions;
  renderAppShell(app, route.template);

  const defaultComparison = getDefaultComparison(state.champions);
  state.firstChampionId = defaultComparison.firstId;
  state.secondChampionId = defaultComparison.secondId;

  setupControls();
  render();
}

function setupControls() {
  const searchInput = document.querySelector('#searchInput');
  const eraFilter = document.querySelector('#eraFilter');
  const sortSelect = document.querySelector('#sortSelect');
  const firstChampionSelect = document.querySelector('#firstChampionSelect');
  const secondChampionSelect = document.querySelector('#secondChampionSelect');

  renderEraOptions(eraFilter, getEras(state.champions));
  renderChampionOptions(firstChampionSelect, state.champions, state.firstChampionId);
  renderChampionOptions(secondChampionSelect, state.champions, state.secondChampionId);

  [eraFilter, sortSelect, firstChampionSelect, secondChampionSelect].forEach(setupCustomDropdown);

  searchInput.addEventListener('input', (event) => {
    state.searchTerm = event.target.value;
    render();
  });

  eraFilter.addEventListener('change', (event) => {
    state.era = event.target.value;
    render();
  });

  sortSelect.addEventListener('change', (event) => {
    state.sortMode = event.target.value;
    render();
  });

  firstChampionSelect.addEventListener('change', (event) => {
    state.firstChampionId = event.target.value;
    renderComparisonSection();
  });

  secondChampionSelect.addEventListener('change', (event) => {
    state.secondChampionId = event.target.value;
    renderComparisonSection();
  });
}

function render() {
  const filteredChampions = filterChampions(state.champions, state);
  const sortedChampions = sortChampions(filteredChampions, state.sortMode);

  renderChampionGrid(
    document.querySelector('#championGrid'),
    document.querySelector('#resultsCount'),
    sortedChampions
  );
  renderComparisonSection();
}

function renderComparisonSection() {
  const firstChampion = findChampion(state.champions, state.firstChampionId);
  const secondChampion = findChampion(state.champions, state.secondChampionId);
  const rows = getComparisonRows(firstChampion, secondChampion);

  renderComparison(document.querySelector('#comparisonTable'), rows, firstChampion, secondChampion);
}
