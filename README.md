## Pictet Rethinking Legacy

### Structure
- `dist/` — production build output
- `src/` — source code (sass, js, templates)
- `public/` — production static files
- `index.html` — main page

### Build
1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm run dev`
3. Production build: `pnpm run build`

### Standards
- Styles: SASS (BEM, variables, mixins)
- JS: ES6+, folder structure
- Vite is used
- All paths are relative

### Other
- Use branches for changes
- Pull requests must include a description

### Notes
- The `dist/` folder is committed to the repository.
- Remove `robots.txt` from `dist/` after build. This file is used to control search engine indexing (see [robots.txt documentation](https://developer.mozilla.org/en-US/docs/Web/Robots_txt)).
- `dist/demo_files/`  — page resources
