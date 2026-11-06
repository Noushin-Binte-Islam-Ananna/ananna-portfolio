# Ananna.dev portfolio
React + Vite + Tailwind CSS v4 + Motion + Lucide.

    npm install
    npm run dev      # local
    npm run build    # production build, deploy the dist folder to Vercel

## Edit content
- Projects: `src/data/projects.js` (add, edit, remove, or set `featured`). Cards and filter tabs update automatically.
- Screenshots: put images in `public/screens/` and set `image: "/screens/name.png"`.
- Profile, experience, education: `src/data/site.js`. Skills: `src/data/skills.js`.

## Future backend / admin dashboard
Components read projects only through `src/services/projectsService.js` via `useProjects()`.
Swap that one function for an API or database call that returns the same objects. No component changes.

## Vercel
Import the GitHub repo in Vercel. Framework preset: Vite. Build `npm run build`, output `dist`.
