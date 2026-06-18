import { normalizePath } from '../js/common.js';
import commonTemplateHtml from './common.html?raw';
import driverTemplateHtml from './driver.html?raw';
import driverDetailTemplateHtml from './driver-detail.html?raw';
import seasonsTemplateHtml from './seasons.html?raw';
import seasonDetailTemplateHtml from './season-detail.html?raw';

const commonTemplate = parseTemplate(commonTemplateHtml, 'common.html');

const commonBundles = [
  {
    type: 'css',
    name: 'common.css',
    files: ['variables.less', 'site.less']
  },
  {
    type: 'js',
    name: 'common.js',
    files: ['common.js', 'data.js', 'icons.js', 'render.js']
  }
];

const routes = [
  {
    path: '/hall-of-fame',
    template: mergeTemplate(commonTemplate, parseTemplate(driverTemplateHtml, 'driver.html')),
    bundles: [
      ...commonBundles,
      {
        type: 'css',
        name: 'page-drivers.css',
        files: ['driver.less', 'compare.less']
      },
      {
        type: 'js',
        name: 'page-drivers.js',
        files: ['driver.js', 'filters.js', 'compare.js']
      }
    ],
    match(pathname) {
      const path = normalizePath(pathname);
      return path === '/hall-of-fame' || path === '/drivers' || path === '/driver' ? {} : null;
    }
  },
  {
    path: '/hall-of-fame/{id}',
    template: mergeTemplate(commonTemplate, parseTemplate(driverDetailTemplateHtml, 'driver-detail.html')),
    bundles: [
      ...commonBundles,
      {
        type: 'css',
        name: 'page-driver-detail.css',
        files: ['driver.less']
      },
      {
        type: 'js',
        name: 'page-driver-detail.js',
        files: ['driver-detail.js', 'compare.js']
      }
    ],
    match(pathname) {
      const path = normalizePath(pathname);
      const match = path.match(/^\/(?:hall-of-fame|drivers?)\/([^/]+)$/);
      return match ? { id: match[1] } : null;
    }
  },
  {
    path: '/seasons',
    template: mergeTemplate(commonTemplate, parseTemplate(seasonsTemplateHtml, 'seasons.html')),
    bundles: [
      ...commonBundles,
      {
        type: 'css',
        name: 'page-seasons.css',
        files: ['seasons.less']
      },
      {
        type: 'js',
        name: 'page-seasons.js',
        files: ['season.js']
      }
    ],
    match(pathname) {
      const path = normalizePath(pathname);
      return path === '/seasons' ? {} : null;
    }
  },
  {
    path: '/seasons/{year}',
    template: mergeTemplate(commonTemplate, parseTemplate(seasonDetailTemplateHtml, 'season-detail.html')),
    bundles: [
      ...commonBundles,
      {
        type: 'css',
        name: 'page-season-detail.css',
        files: ['seasons.less']
      },
      {
        type: 'js',
        name: 'page-season-detail.js',
        files: ['season.js']
      }
    ],
    match(pathname) {
      const path = normalizePath(pathname);
      const match = path.match(/^\/seasons\/(\d{4})$/);
      return match ? { year: Number(match[1]) } : null;
    }
  }
];

export const routeManifest = {
  routes: routes.map(({ path, template, bundles }) => ({
    path,
    template: template.file,
    title: template.title,
    bundles
  }))
};

export function resolveRoute(pathname) {
  for (const route of routes) {
    const params = route.match(pathname);

    if (params) {
      return {
        template: route.template,
        params,
        bundles: route.bundles
      };
    }
  }

  return {
    template: routes[0].template,
    params: {},
    bundles: routes[0].bundles
  };
}

function mergeTemplate(common, template) {
  return {
    ...template,
    links: template.links.length > 0 ? template.links : common.links
  };
}

function parseTemplate(templateHtml, file) {
  const documentFragment = new DOMParser().parseFromString(templateHtml, 'text/html');
  const templateElement = documentFragment.querySelector('template');

  return {
    id: templateElement.id,
    file,
    path: templateElement.dataset.path ?? '',
    title: templateElement.dataset.title ?? '',
    description: templateElement.dataset.description ?? '',
    links: readJsonAttribute(templateElement, 'links', []),
    html: templateElement.innerHTML.trim()
  };
}

function readJsonAttribute(element, attributeName, fallback) {
  const value = element.dataset[attributeName];

  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
