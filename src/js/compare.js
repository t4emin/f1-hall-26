export function findChampion(champions, championId) {
  return champions.find((champion) => champion.id === championId);
}

export function getDefaultComparison(champions) {
  return {
    firstId: champions[0]?.id ?? '',
    secondId: champions[1]?.id ?? champions[0]?.id ?? ''
  };
}

export function getComparisonRows(firstChampion, secondChampion) {
  if (!firstChampion || !secondChampion) {
    return [];
  }

  return [
    ['Championships', firstChampion.championships, secondChampion.championships],
    ['Wins', firstChampion.wins, secondChampion.wins],
    ['Podiums', firstChampion.podiums, secondChampion.podiums],
    ['Poles', firstChampion.poles, secondChampion.poles],
    ['First title', firstChampion.firstTitle, secondChampion.firstTitle],
    ['Last title', firstChampion.lastTitle, secondChampion.lastTitle],
    ['Champion years', firstChampion.championYears.join(', '), secondChampion.championYears.join(', ')],
    ['Teams won with', firstChampion.teamsWonWith.join(', '), secondChampion.teamsWonWith.join(', ')]
  ];
}
