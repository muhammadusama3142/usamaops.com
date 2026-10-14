# usamaops.com

Portfolio site of Muhammad Usama, DevOps & SRE for startups.

## How it runs

```
git push (main) ──► GitHub Actions CI ──► build + link check + header guard
       │
       └──────────► Cloudflare Pages ──► build (npm run build) ──► global CDN ──► usamaops.com
```

- **Framework:** [Astro](https://astro.build), static output, no client-side JavaScript.
- **Hosting:** Cloudflare Pages (free plan). Every push to `main` deploys; pull requests get preview URLs.
- **DNS:** Cloudflare. Registrar: Websouls, with registrar lock on.
- **TLS:** Cloudflare Universal SSL, renewed automatically.
- **Security headers:** set in [`public/_headers`](public/_headers) — CSP, HSTS, nosniff, frame denial.
- **Fonts:** self-hosted through Fontsource, so no third-party requests.

The "this site runs on" panel on the homepage is filled at build time from `CF_PAGES_COMMIT_SHA`.

## Local development

```bash
nvm use        # Node 22
npm ci
npm run dev    # http://localhost:4321
npm run build  # output in dist/
```

## Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variable | `NODE_VERSION=22` |
| Custom domains | `usamaops.com`, `www.usamaops.com` |
