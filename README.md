# Legends of the Grid

Legends of the Grid is a static Formula 1 World Drivers' Champions hall-of-fame web application. It displays champion drivers from a local JSON file, supports search, era filtering, championship sorting, and side-by-side champion comparisons.

## Tech Stack

- Vite
- Vanilla JavaScript with ES Modules
- LESS
- Lucide icons
- JSON data source
- No API, backend, framework, or TypeScript

## Folder Structure

```text
.
├── index.html
├── package.json
├── src
│   ├── data
│   │   └── champions.json
│   ├── js
│   │   ├── app.js
│   │   ├── common.js
│   │   ├── compare.js
│   │   ├── data.js
│   │   ├── driver-detail.js
│   │   ├── driver.js
│   │   ├── filters.js
│   │   ├── icons.js
│   │   └── render.js
│   ├── less
│   │   ├── champion-card.less
│   │   ├── compare.less
│   │   ├── components.less
│   │   ├── driver.less
│   │   ├── layout.less
│   │   ├── main.less
│   │   ├── site.less
│   │   └── variables.less
│   └── template
│       ├── common.html
│       ├── driver-detail.html
│       ├── driver.html
│       └── routes.js
└── README.md
```

## Templates and Routes

Template files live in `src/template/` as `.html`. `src/template/routes.js` maps each route to a template and page bundles, similar to a frontend asset manifest.

- `/drivers` uses `src/template/driver.html`
- `/drivers/{id}` uses `src/template/driver-detail.html`
- `/driver` and `/driver/{id}` are kept as route aliases

Example route bundle:

```js
{
  path: '/drivers',
  template: 'driver.html',
  bundles: [
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
  ]
}
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## How to Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## JSON Data Structure

Champion data lives in `src/data/champions.json`. Each champion object follows this structure:

```json
{
  "id": "michael-schumacher",
  "name": "Michael Schumacher",
  "country": "Germany",
  "championships": 7,
  "championYears": [1994, 1995, 2000, 2001, 2002, 2003, 2004],
  "teamsWonWith": ["Benetton", "Ferrari"],
  "wins": 91,
  "podiums": 155,
  "poles": 68,
  "firstTitle": 1994,
  "lastTitle": 2004,
  "era": "1990s-2000s",
  "image": "https://placehold.co/400x400",
  "bio": "Seven-time Formula 1 World Champion."
}
```
# f1-hall-26
