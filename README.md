## Kamaynikasyon Admin (React + Vite)

### Local development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

Preconfigured for GitHub Pages with `HashRouter` and Vite `base`.

1. Ensure the repo remote is set and you have push access.
2. Update `package.json` `homepage` and `vite.config.js` `base` if the repo name changes.
3. Deploy:

```bash
npm run deploy
```

This builds to `dist/` and publishes to the `gh-pages` branch using `gh-pages`.
