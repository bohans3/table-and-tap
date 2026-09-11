# Table & Tap

Suggest beer styles for whatever’s on the plate.

Pick a food category — burgers, sushi, BBQ, cheese boards, and more — and get three beer styles with short explanations of why they work.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Upload to GitHub

1. Create a new empty repository on GitHub (no README).
2. From this folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/table-and-tap.git
git push -u origin main
```

(If `.git` is missing, run `git init -b main`, then `git add .`, `git commit -m "Initial commit"`, then the commands above.)

## Notes

Pairings live in `src/data/pairings.js` — easy to expand or tweak. Suggestions are beer *styles*, not brands.
