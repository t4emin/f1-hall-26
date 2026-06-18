import { setDocumentTitle } from './common.js';
import { findChampion } from './compare.js';
import { renderDriverDetail, renderNotFound } from './render.js';

export function initDriverDetailPage(app, route, champions) {
  const champion = findChampion(champions, route.params.id);

  if (!champion) {
    setDocumentTitle(route.template, 'Champion not found');
    renderNotFound(app);
    return;
  }

  setDocumentTitle(route.template, champion.name);
  renderDriverDetail(app, champion, route.template);
}
