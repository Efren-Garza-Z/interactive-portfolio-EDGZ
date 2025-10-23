# 🚀 Portfolio

A modern 3D portfolio built with React and Three.js using React Three Fiber. Interactive scenes, smooth animations, responsive UI and a contact form powered by EmailJS — optimized with Vite and styled with Tailwind CSS.

## Features
- 3D models and scenes with `@react-three/fiber` and `@react-three/drei`
- Smooth UI animations using `framer-motion`
- Responsive layout with Tailwind CSS
- Contact form using `@emailjs/browser`
- Iconography with `react-icons` and `lucide-react`
- Timeline section using `react-vertical-timeline-component`
- Fast development and build via Vite

## Tech Stack
- JavaScript / React 18
- Three.js via `@react-three/fiber` and `@react-three/drei`
- Styling: Tailwind CSS
- Bundler: Vite
- Animations: Framer Motion
- Email: EmailJS (`@emailjs/browser`)
- Routing: `react-router-dom`

Key dependencies:
- `@react-three/fiber`
- `@react-three/drei`
- `framer-motion`
- `tailwindcss`
- `vite`
- `@emailjs/browser`
- `react-router-dom`
- `react-icons`, `lucide-react`
- `react-vertical-timeline-component`

## Getting started

Prerequisites
- Node.js (16+ recommended)
- npm

Clone and install:
```bash
git clone <your-repo-url>
cd portfolio-3d
npm install
```
Run in development:

```bash
npm run dev
```

Open http://localhost:5173 (or the address shown by Vite).

Build for production:

```bash
npm run build
```

## Project structure (example)
- src/ — app source code
  - components/ — UI and 3D components
  - pages/ — route pages (home, about, projects, contact)
  - scenes/ — three-fiber scenes and models
  - styles/ — Tailwind entry and global CSS
- public/ — static assets
- vite.config.js, package.json, tailwind.config.js

### Tips
- Keep 3D assets optimized (low poly / compressed textures) for web performance.
- Use React Suspense and lazy loading for heavy scenes or textures.
- Configure EmailJS keys in environment variables and avoid committing secrets.

## Contact
david.1308200@gmail.com


## License
This project is licensed under the MIT License.
