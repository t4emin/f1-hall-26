export function getEras(champions) {
  return [...new Set(champions.map((champion) => champion.era))].sort();
}

export function filterChampions(champions, { searchTerm, era }) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return champions.filter((champion) => {
    const matchesName = champion.name.toLowerCase().includes(normalizedSearch);
    const matchesEra = era === 'all' || champion.era === era;

    return matchesName && matchesEra;
  });
}

export function sortChampions(champions, sortMode) {
  const sortedChampions = [...champions];

  if (sortMode === 'titles-asc') {
    return sortedChampions.sort((a, b) => a.championships - b.championships || a.name.localeCompare(b.name));
  }

  return sortedChampions.sort((a, b) => b.championships - a.championships || a.name.localeCompare(b.name));
}
