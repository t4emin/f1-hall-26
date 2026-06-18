import championsUrl from '../data/champions.json?url';
import seasonsUrl from '../data/seasons/index.json?url';
import season2025MetaUrl from '../data/seasons/2025/meta.json?url';
import season2025TeamsUrl from '../data/seasons/2025/teams.json?url';
import season2025DriversUrl from '../data/seasons/2025/drivers.json?url';
import season2025StandingsUrl from '../data/seasons/2025/standings.json?url';
import season2025RacesUrl from '../data/seasons/2025/races.json?url';
import season2025RaceResultsUrl from '../data/seasons/2025/race-results.json?url';

export async function loadChampions() {
  return fetchJson(championsUrl, 'Unable to load champion data.');
}

export async function loadSeasons() {
  return fetchJson(seasonsUrl, 'Unable to load season index.');
}

export async function loadSeason(year) {
  const loaders = {
    2025: {
      meta: season2025MetaUrl,
      teams: season2025TeamsUrl,
      drivers: season2025DriversUrl,
      standings: season2025StandingsUrl,
      races: season2025RacesUrl,
      raceResults: season2025RaceResultsUrl
    }
  };
  const season = loaders[year];

  if (!season) {
    throw new Error('Unable to load season data.');
  }

  const [meta, teams, drivers, standings, races, raceResults] = await Promise.all([
    fetchJson(season.meta, 'Unable to load season metadata.'),
    fetchJson(season.teams, 'Unable to load season teams.'),
    fetchJson(season.drivers, 'Unable to load season drivers.'),
    fetchJson(season.standings, 'Unable to load season standings.'),
    fetchJson(season.races, 'Unable to load season races.'),
    fetchJson(season.raceResults, 'Unable to load season race results.')
  ]);

  return {
    meta,
    teams,
    drivers,
    standings,
    races,
    raceResults
  };
}

async function fetchJson(url, errorMessage) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}
