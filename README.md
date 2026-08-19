# Vaibhav Kawde's Interactive Portfolio

An interactive portfolio presented as a vintage, spiral-bound engineering notebook. The experience turns Vaibhav's projects, skills, experience, and achievements into a tactile 20-page book that can be opened and navigated like a real journal.
# 📖 Vaibhav Kawde — 3D Interactive Portfolio

> An interactive, vintage engineering & explorer scrapbook notebook portfolio showcasing projects, technical depth, and craft across frontend, backend, cloud, DevOps, and AI.

[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Motion-React-FF0055?style=flat&logo=framer&logoColor=white)](https://motion.dev/)

---

## What is included

- Closed-cover entry screen with an animated transition into the book.
- Ten spreads covering the introduction, about page, skills, projects, experience, achievements, and contact details.
- CSS perspective and Motion animations for page turns, paper depth, shadows, and the book spine.
- Desktop two-page navigation and a responsive mobile single-page layout.
- Keyboard arrows, click zones, touch gestures, and navigation controls.
- Local background and page-turn sound effects.

The book effect is implemented with React, CSS transforms, and Motion. The active portfolio experience does not depend on a Three.js scene or a GLB model pipeline.

This portfolio is styled as a physical, spiral-bound engineer's journal set within an atmospheric, vintage workshop study with ambient 3D artifacts. It breaks away from traditional static portfolios to deliver a memorable, tactile experience featuring realistic paper physics, 3D model interactions, and detailed project case studies.

### 🌟 Key Highlights

- **Physical Spiral-Bound Notebook**: Real double-wire ring binding with natural paper depth, shadows, corner dog-ears, tape strips, and binder clips.
- **Realistic Page Flipping**: 3D perspective page-turn physics with front/back paper textures and light reflections.
- **Interactive 3D Artifacts**: Clickable ambient 3D study artifacts (Rotating Horse, Astrolabe, Compass, Hephaestus, Globe) with interactive inspection overlays.
- **Recruiter-First Content Architecture**: Leads with what was built, architecture decisions, engineering challenges, tech stack context, and verified live outcomes.
- **Fully Responsive**: Optimized for desktop two-page spreads and mobile single-page viewports with touch gesture support.

---

## Portfolio spreads

| Spread | Pages | Topic | Description |
| :--- | :--- | :--- | :--- |
| **00** | 01–02 | **Introduction & Index** | Welcome card, table of contents, and quick builder snapshot |
| **01** | 03–04 | **About Me** | Engineering philosophy, background, and personal interests |
| **02** | 05–06 | **Technical Skills** | Core languages, frameworks, cloud architecture, databases & tooling |
| **03** | 07–08 | **PassportPro** | Automated passport & visa appointment tracking system |
| **04** | 09–10 | **OceanicX** | Maritime logistics, vessel routing, and telemetry intelligence platform |
| **05** | 11–12 | **CoWrite + More** | Real-time collaborative document editor with AI assist ([Live Demo](https://cowriter-test.vercel.app/)) |
| **06** | 13–14 | **Glove Royale** | Interactive real-time game with custom mechanics & physics |
| **07** | 15–16 | **Experience & Education** | Professional background, academic journey, and milestones |
| **08** | 17–18 | **Hackathons & Competitions**| Awards, build challenges, and open-source contributions |
| **09** | 19–20 | **Contact & Outro** | Direct links to GitHub, LinkedIn, email, and resume |

---

## Tech stack

- **Core**: React, TypeScript, HTML5, CSS3
- **Styling**: Tailwind CSS and custom paper textures
- **Interaction and animation**: Motion for React and CSS 3D transforms
- **Icons**: Lucide React
- **Bundler and dev server**: Vite

---

## Run locally

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or another Node package manager

### Installation and development

```bash
git clone https://github.com/VAIBHAV-ops2077/vaibhav-s_portfolio.git
cd vaibhav-s_portfolio
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Production build

```bash
npm run build
```

The production output is generated in `dist/`.

5. **Create a production build**:
   ```bash
   npm run build
   ```
   The production-ready assets will be built to the `dist/` folder.

---

## Deploy to Vercel

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import the `vaibhav-s_portfolio` repository.
4. Framework Preset: **Vite** (detected automatically).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## Contact

- **Author**: Vaibhav Kawde
- **GitHub**: [@VAIBHAV-ops2077](https://github.com/VAIBHAV-ops2077)
- **LinkedIn**: [Vaibhav Kawde](https://www.linkedin.com/in/vaibhav-kawde-4a1a13321/)
- **Email**: [2024.vaibhavk@isu.ac.in](mailto:2024.vaibhavk@isu.ac.in)

---

Designed and engineered by Vaibhav Kawde.
