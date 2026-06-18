import { getDriverPath } from './common.js';
import { iconElement, iconSvg } from './icons.js';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderAppShell(root, template) {
  root.innerHTML = fillTemplate(template.html, {
    compareIcon: iconSvg('compare', 'icon icon--heading'),
    navLinks: renderNavLinks(template.links),
    searchIcon: iconSvg('search', 'icon')
  });
}

export function renderDriverDetail(root, champion, template) {
  root.innerHTML = fillTemplate(template.html, {
    navLinks: renderNavLinks(template.links),
    country: escapeHtml(champion.country),
    name: escapeHtml(champion.name),
    bio: escapeHtml(champion.bio),
    image: escapeHtml(champion.image),
    era: escapeHtml(champion.era),
    championships: champion.championships,
    championYears: champion.championYears.join(', '),
    teamsWonWith: champion.teamsWonWith.map(escapeHtml).join(', '),
    wins: champion.wins,
    podiums: champion.podiums,
    poles: champion.poles,
    firstTitle: champion.firstTitle,
    lastTitle: champion.lastTitle,
    backIcon: iconSvg('arrowLeft', 'icon'),
    calendarIcon: iconSvg('calendar', 'icon'),
    flagIcon: iconSvg('flag', 'icon'),
    trophyIcon: iconSvg('trophy', 'icon icon--heading'),
    usersIcon: iconSvg('users', 'icon')
  });
}

export function renderNotFound(root) {
  root.innerHTML = `
    <main class="app-error">
      <h1>Champion not found</h1>
      <p>The requested driver profile does not exist.</p>
      <a class="back-link" href="/hall-of-fame">Back to hall</a>
    </main>
  `;
}

export function renderSeasonIndex(root, template, seasons) {
  root.innerHTML = fillTemplate(template.html, {
    navLinks: renderNavLinks(template.links)
  });

  document.querySelector('#seasonGrid').innerHTML = seasons
    .map((season) => `
      <article class="season-card">
        <p class="eyebrow">${season.year}</p>
        <h3><a href="${escapeHtml(season.dataPath)}">${escapeHtml(season.name)}</a></h3>
        <dl>
          <div>
            <dt>Champion</dt>
            <dd>${escapeHtml(season.champion)}</dd>
          </div>
          <div>
            <dt>Constructor</dt>
            <dd>${escapeHtml(season.constructorChampion)}</dd>
          </div>
          <div>
            <dt>Rounds</dt>
            <dd>${season.rounds}</dd>
          </div>
        </dl>
      </article>
    `)
    .join('');
}

export function renderSeasonDetail(root, template, season) {
  const { meta } = season;

  root.innerHTML = fillTemplate(template.html, {
    navLinks: renderNavLinks(template.links),
    backIcon: iconSvg('arrowLeft', 'icon'),
    calendarIcon: iconSvg('calendar', 'icon icon--heading'),
    trophyIcon: iconSvg('trophy', 'icon icon--heading'),
    year: meta.year,
    name: escapeHtml(meta.name),
    summary: escapeHtml(meta.summary),
    driversChampion: escapeHtml(meta.driversChampion),
    constructorsChampion: escapeHtml(meta.constructorsChampion),
    rounds: meta.rounds
  });

  renderSeasonTeams(document.querySelector('#seasonTeams'), season);
  renderSeasonStandings(document.querySelector('#driverStandings'), season.standings.drivers, season, 'driver');
  renderSeasonStandings(document.querySelector('#constructorStandings'), season.standings.constructors, season, 'team');
  renderRaceTable(document.querySelector('#raceTable'), season);
}

export function renderSeasonRaceResults(container, raceId, season, icons = {}) {
  const race = season.races.find((item) => item.id === raceId);
  const results = season.raceResults[raceId] ?? [];

  if (!race) {
    container.innerHTML = '<p class="empty-state">Select a race to view its result.</p>';
    return;
  }

  container.innerHTML = `
    <div class="race-result-panel__header">
      <p class="eyebrow">Round ${race.round}</p>
      <h3>${icons.trophy ?? ''} ${escapeHtml(race.grandPrix)}</h3>
      <p>${escapeHtml(race.circuit)}, ${escapeHtml(race.country)}</p>
    </div>
    <div class="season-table season-table--race-result">
      <div class="season-table__row season-table__row--head">
        <span>Pos</span>
        <span>Driver</span>
        <span>Team</span>
        <span>Status</span>
        <span>Pts</span>
      </div>
      ${results.map((result) => `
        <div class="season-table__row">
          <span>${escapeHtml(result.positionText ?? result.position)}</span>
          <span>${escapeHtml(getDriverName(season, result.driverId))}</span>
          <span>${escapeHtml(getTeamConstructor(season, result.teamId))}</span>
          <span>${renderResultStatus(result)}</span>
          <span>${result.points}</span>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderEraOptions(selectElement, eras) {
  selectElement.innerHTML = `
    <option value="all">All eras</option>
    ${eras.map((era) => `<option value="${escapeHtml(era)}">${escapeHtml(era)}</option>`).join('')}
  `;
}

export function renderChampionOptions(selectElement, champions, selectedId) {
  selectElement.innerHTML = champions
    .map((champion) => {
      const selected = champion.id === selectedId ? 'selected' : '';
      return `<option value="${escapeHtml(champion.id)}" ${selected}>${escapeHtml(champion.name)}</option>`;
    })
    .join('');
}

export function setupCustomDropdown(selectElement) {
  const existingDropdown = selectElement.nextElementSibling;

  if (existingDropdown?.classList.contains('custom-select')) {
    existingDropdown.remove();
  }

  selectElement.classList.add('native-select');

  const dropdown = document.createElement('div');
  const button = document.createElement('button');
  const buttonText = document.createElement('span');
  const list = document.createElement('div');

  dropdown.className = 'custom-select';
  button.className = 'custom-select__button';
  button.type = 'button';
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');
  buttonText.className = 'custom-select__value';
  list.className = 'custom-select__list';
  list.setAttribute('role', 'listbox');

  button.append(buttonText, iconElement('chevronDown', 'custom-select__icon'));
  dropdown.append(button, list);
  selectElement.insertAdjacentElement('afterend', dropdown);

  const syncButtonText = () => {
    buttonText.textContent = selectElement.selectedOptions[0]?.textContent ?? 'Select';
  };

  Array.from(selectElement.options).forEach((option) => {
    const item = document.createElement('button');
    item.className = 'custom-select__option';
    item.type = 'button';
    item.textContent = option.textContent;
    item.dataset.value = option.value;
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', String(option.selected));

    item.addEventListener('click', () => {
      selectElement.value = option.value;
      syncSelectedOption(list, option.value);
      syncButtonText();
      closeDropdown(dropdown, button);
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    });

    list.append(item);
  });

  button.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown(dropdown, button);
    }
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown(dropdown, button);
    }
  });

  syncSelectedOption(list, selectElement.value);
  syncButtonText();
}

export function renderChampionGrid(gridElement, countElement, champions) {
  countElement.textContent = `${champions.length} champion${champions.length === 1 ? '' : 's'} displayed`;

  if (champions.length === 0) {
    gridElement.innerHTML = `
      <div class="empty-state">
        <h3>No champions found</h3>
        <p>Try a different search term or era filter.</p>
      </div>
    `;
    return;
  }

  gridElement.innerHTML = champions.map(renderChampionCard).join('');
}

export function renderComparison(container, rows, firstChampion, secondChampion) {
  if (!firstChampion || !secondChampion) {
    container.innerHTML = '<p class="empty-state">Select two champions to compare their records.</p>';
    return;
  }

  container.innerHTML = `
    <div class="comparison__drivers">
      <article>
        <img src="${escapeHtml(firstChampion.image)}" alt="${escapeHtml(firstChampion.name)} portrait placeholder" />
        <div>
          <p>${escapeHtml(firstChampion.country)}</p>
          <h3>${escapeHtml(firstChampion.name)}</h3>
        </div>
      </article>
      <article>
        <img src="${escapeHtml(secondChampion.image)}" alt="${escapeHtml(secondChampion.name)} portrait placeholder" />
        <div>
          <p>${escapeHtml(secondChampion.country)}</p>
          <h3>${escapeHtml(secondChampion.name)}</h3>
        </div>
      </article>
    </div>
    <div class="comparison__table" role="table" aria-label="Champion comparison table">
      ${rows.map(renderComparisonRow).join('')}
    </div>
  `;
}

function renderChampionCard(champion) {
  return `
    <article class="champion-card">
      <a href="${escapeHtml(getDriverPath(champion.id))}" aria-label="Open ${escapeHtml(champion.name)} profile">
        <img class="champion-card__image" src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)} portrait placeholder" />
      </a>
      <div class="champion-card__body">
        <div class="champion-card__header">
          <div>
            <p>${escapeHtml(champion.country)}</p>
            <h3><a href="${escapeHtml(getDriverPath(champion.id))}">${escapeHtml(champion.name)}</a></h3>
          </div>
          <span class="title-badge">${iconSvg('trophy', 'icon')} ${champion.championships}x</span>
        </div>
        <p class="champion-card__bio">${escapeHtml(champion.bio)}</p>
        <dl class="stat-list">
          <div>
            <dt>${iconSvg('calendar', 'icon')} Years</dt>
            <dd>${champion.championYears.join(', ')}</dd>
          </div>
          <div>
            <dt>${iconSvg('users', 'icon')} Teams</dt>
            <dd>${champion.teamsWonWith.map(escapeHtml).join(', ')}</dd>
          </div>
        </dl>
      </div>
    </article>
  `;
}

function renderComparisonRow([label, firstValue, secondValue]) {
  return `
    <div class="comparison__row" role="row">
      <span role="cell">${escapeHtml(firstValue)}</span>
      <strong role="columnheader">${escapeHtml(label)}</strong>
      <span role="cell">${escapeHtml(secondValue)}</span>
    </div>
  `;
}

function renderSeasonTeams(container, season) {
  container.innerHTML = season.teams.map((team) => {
    const drivers = team.drivers.map((driverId) => getDriverName(season, driverId)).join(', ');

    return `
      <article class="season-card">
        <p class="eyebrow">${escapeHtml(team.powerUnit)}</p>
        <h3>${escapeHtml(team.name)}</h3>
        <dl>
          <div>
            <dt>Constructor</dt>
            <dd>${escapeHtml(team.constructor)}</dd>
          </div>
          <div>
            <dt>Drivers</dt>
            <dd>${escapeHtml(drivers)}</dd>
          </div>
        </dl>
      </article>
    `;
  }).join('');
}

function renderSeasonStandings(container, standings, season, type) {
  const getName = type === 'driver' ? getDriverName : getTeamConstructor;
  const nameLabel = type === 'driver' ? 'Driver' : 'Constructor';

  container.classList.toggle('season-table--standings', true);
  container.innerHTML = `
    <div class="season-table__row season-table__row--head">
      <span>Pos</span>
      <span>${nameLabel}</span>
      <span>Pts</span>
    </div>
    ${standings.map((item) => `
      <div class="season-table__row">
        <span>${item.position}</span>
        <span>${escapeHtml(getName(season, item.driverId ?? item.teamId))}</span>
        <span>${item.points}</span>
      </div>
    `).join('')}
  `;
}

function renderRaceTable(container, season) {
  container.classList.toggle('season-table--races', true);
  container.innerHTML = `
    <div class="season-table__row season-table__row--head">
      <span>Round</span>
      <span>Grand Prix</span>
      <span>Winner</span>
    </div>
    ${season.races.map((race) => `
      <button class="season-table__row season-table__row--button" type="button" data-race-id="${escapeHtml(race.id)}">
        <span>${race.round}</span>
        <span>${escapeHtml(race.grandPrix)}</span>
        <span>${escapeHtml(getDriverName(season, race.winnerId))}</span>
      </button>
    `).join('')}
  `;
}

function renderResultStatus(result) {
  const flags = [];

  if (result.flags?.pole) {
    flags.push('Pole');
  }

  if (result.flags?.fastestLap) {
    flags.push('Fastest lap');
  }

  if (result.status !== 'Classified') {
    flags.unshift(result.status);
  }

  return flags.length > 0 ? escapeHtml(flags.join(' / ')) : 'Finished';
}

function getDriverName(season, driverId) {
  return season.drivers.find((driver) => driver.id === driverId)?.name ?? driverId;
}

function getTeamConstructor(season, teamId) {
  return season.teams.find((team) => team.id === teamId)?.constructor ?? teamId;
}

function closeDropdown(dropdown, button) {
  dropdown.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
}

function syncSelectedOption(list, selectedValue) {
  list.querySelectorAll('.custom-select__option').forEach((item) => {
    item.setAttribute('aria-selected', String(item.dataset.value === selectedValue));
  });
}

function fillTemplate(templateHtml, values) {
  return Object.entries(values).reduce((html, [key, value]) => {
    return html.replaceAll(`{{${key}}}`, String(value));
  }, templateHtml);
}

function renderNavLinks(links) {
  return links
    .map((link) => `<a class="topbar__link" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join('');
}
