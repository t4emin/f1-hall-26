export function getDriverPath(driverId) {
  return `/hall-of-fame/${driverId}`;
}

export function setDocumentTitle(template, detailTitle = '') {
  const titleParts = [detailTitle, template.title, 'Legends of the Grid'].filter(Boolean);
  document.title = titleParts.join(' | ');
}

export function normalizePath(pathname) {
  if (pathname === '/') {
    return '/hall-of-fame';
  }

  return pathname.replace(/\/$/, '') || '/hall-of-fame';
}
