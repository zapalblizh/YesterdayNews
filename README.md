# YesterdayNews
A template for your daily news page. Run locally and enjoy curated tech news without searching.

## Features

- Fetches top technology headlines from [NewsAPI](https://newsapi.org)
- Filters articles to only show those with images
- Responsive card grid (2-column tablet, 3-column desktop)
- Dark/light mode toggle with system preference detection and localStorage persistence
- Image optimization with multiple formats (avif, webp) and responsive sizes
- Fast builds with Eleventy + esbuild + PostCSS/TailwindCSS v4

## Deployed Version of the Project
https://yesterdaynews.netlify.app/

> **Note:** Updates news articles based on prior mentioned features every day at 00:00 on UTC time.

## Quick Start

### Prerequisites

- Node.js v22 (see `.nvmrc`)
- A free [NewsAPI](https://newsapi.org) API key or any news API key provider

> **Note:** This project is designed for local development only, however it can be deployed to any static site hosting provider, such as [Netlify](https://www.netlify.com/).

### Installation

```bash
git clone https://github.com/zapalblizh/YesterdayNews.git
cd YesterdayNews
npm install
```

Create a `.env` file in the project root:

```
NEWS_API_KEY=your_api_key_here
```

### Running locally

```bash
npm run start
```

Opens a dev server at `http://localhost:8080` with live reload. News is fetched from NewsAPI at build time each time Eleventy rebuilds.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run start` | Start dev server with file watching (Eleventy + CSS + JS) |
| `npm run build` | Production build (Eleventy + minified CSS) |
| `npm run clean:site` | Remove `_site/` and `_temp/` build artifacts |
| `npm run debug:11ty` | Eleventy build with verbose debug output |
| `npm run fetch` | Manually fetch latest news articles (requires `.env`) |

## Project Structure

```
src/
├── _data/
│   ├── news.js          # Fetches articles from NewsAPI at build time
│   └── build.js         # Build metadata (git hash, timestamp)
├── _includes/
│   ├── layouts/
│   │   └── base.njk     # Base HTML layout
│   └── partials/
│       └── header.njk   # Header with nav and theme toggle
├── assets/
│   ├── css/
│   │   ├── main.css     # CSS entry point (TailwindCSS v4)
│   │   ├── base/        # Reset, base styles, typography
│   │   ├── components/  # Card styles
│   │   └── utilities/
│   └── js/
│       ├── main.js      # Alpine.js entry point
│       └── modules/
│           └── Alpine.data/
│               └── DOM.js   # Theme toggle Alpine component
└── pages/
    └── index.njk        # Homepage
```

## Modifying API configuration

News fetching is configured in `src/_data/news.js`. By default it fetches:

- Category: `technology`
- Language: `en`
- Page size: `100` (filtered down to articles with images)
  - For free API key on NewsAPI, 100 is the max allowed

To change category, language, or other parameters, edit the `url.searchParams` calls in that file. 

Available options are documented in the [NewsAPI docs](https://newsapi.org/docs/endpoints/top-headlines).