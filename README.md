# EDU.MEDIA — Portfolio Media Interaktif

## Quick Start (Development)

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Deployment Guide (Apache / Shared Hosting)

### 1. Build the project
Run `npm run build` — this creates a `dist/` folder with optimized files.

### 2. Place raw HTML projects in `public/`
**BEFORE building**, copy your raw HTML project folders into the `public/` directory. Vite will copy them as-is into `dist/` during the build step.

Your folder structure should look like:
```
public/
├── .htaccess
├── favicon.svg
├── LKPD-BANGUN-RUANG-SISI-DATAR/
│   └── index.html  (+ assets)
├── E-LKPD-ALJABAR/
│   └── Aljabar-1/
│       └── index.html  (+ assets)
├── BentukEnergi/
│   └── index.html  (+ assets)
├── KOMIK-DIGITAL-RANTAI-MAKANAN-SUBAK/
│   └── index.html  (+ assets)
└── E-MODUL-TIK/
    └── index.html  (+ assets)
```

### 3. Upload `dist/` contents to your hosting
Upload **everything inside** `dist/` to your web root (usually `public_html/` or `htdocs/`).

### 4. The `.htaccess` file handles SPA routing
The included `.htaccess` uses Apache `mod_rewrite` to:
- Serve real files/folders directly (so iframe content loads normally)
- Redirect all other requests to `index.html` (so React Router handles clean URLs)

This means visiting `yourdomain.com/e-lkpd-aljabar` will correctly load the React app, which then renders the iframe pointing to the actual HTML export.

### 5. Verify `mod_rewrite` is enabled
Most shared hosting (cPanel, etc.) has this enabled by default. If clean URLs return 404, contact your host to enable `mod_rewrite`.

---

## Adding New Projects

1. Place the HTML export folder in `public/`
2. Add an entry to `src/data/projects.js`:
```js
{
  id: "your-clean-url-slug",
  title: "Your Project Title",
  category: "Matematika",  // or Sains, Informatika
  htmlPath: "/YOUR-FOLDER/index.html"
}
```
3. Rebuild and redeploy.
