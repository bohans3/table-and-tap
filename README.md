# Table & Tap

Table & Tap is a simple React + Vite app that recommends beer styles based on
what food you are eating.

Users choose food type, preparation method, spice level, and richness, then the
app calculates the best beer style match and shows backup options.

## Features

- Interactive multi-option pairing quiz
- Single best beer recommendation with score
- Backup recommendations in case users want alternatives
- Easy-to-edit pairing data in a single file
- Lightweight frontend stack (React + Vite)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx`: UI and selection logic
- `src/data/pairings.js`: beer pairing dataset
- `src/styles.css`: app styling

## Create GitHub project

1. Create an empty GitHub repository named `table-and-tap`.
2. Connect this project to the repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/table-and-tap.git
git push -u origin main
```

If this directory is not initialized as a git repo yet:

```bash
git init -b main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/table-and-tap.git
git push -u origin main
```
