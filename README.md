# portfolio-v2

This is the repository for my personal portfolio website, built with Next.js, React, and Tailwind CSS.

## Getting Started

To get the development server running locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Useful Commands

- `npm run dev` - Starts the development server with Turbopack.
- `npm run build` - Builds the application for production.
- `npm run lint` - Runs ESLint to check for code issues.

## Deployment (gh-pages)

This project is deployed to GitHub Pages using the `gh-pages` branch. The deployment process is fully automated via an npm script. 

To deploy the latest changes:

```bash
npm run deploy
```

This command will:
1. Run `next build` to create an optimized production build in the `out/` directory.
2. Push the contents of the `out/` directory to the `gh-pages` branch, taking care to include dotfiles (like `.nojekyll` and `.github`).
