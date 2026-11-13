# Namkhang Le - Website

Personal site: a single page with a short bio, three hackathon and side projects (DiagnoseMe, ScribbleTex, MorseTorch), and contact links. Built with React 19, Vite and Tailwind CSS 4. Fonts (Bricolage Grotesque, Geist Mono) are bundled via `@fontsource` under the SIL Open Font License 1.1.

## Live
[namkhangnle.github.io/Website](https://namkhangnle.github.io/Website/)

The site is served from the `/Website/` subpath, so `vite.config.js` sets `base: '/Website/'`.

## Features
- Projects as an accessible tab list: click, or use the Arrow, Home and End keys.
- Copy-email button with a clear message if the browser blocks clipboard access.
- Resume PDF, LinkedIn and GitHub links.

## Develop
```bash
npm install
npm run dev      # http://localhost:5173/Website/
npm run build
npm run preview
```

Pushes to `main` build and deploy to GitHub Pages through `.github/workflows/deploy.yml`.

## Contact
- LinkedIn: [linkedin.com/in/namkhangnle](https://linkedin.com/in/namkhangnle)
- GitHub: [github.com/namkhangnle](https://github.com/namkhangnle)
- Email: NamkhangNLe@hotmail.com
