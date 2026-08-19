# WEBSITE_CONTEXT.md

## Overview

This project is a single-page portfolio website presented as a physical book. The app is built with React + Vite and uses CSS transform-based 3D effects and Framer Motion animations to simulate a book opening and page-turning experience.

Important reality check:
- The current codebase does NOT implement Three.js or React Three Fiber.
- The current codebase does NOT contain a 3D character model or GLB/GLTF asset pipeline.
- The "3D" effect comes from CSS `transform: rotateX/rotateY`, `perspective`, layered shadows, and motion animation, not a real 3D scene graph.
- The website is a book-style portfolio interface with 10 spreads (20 pages total) and a closed/open book interaction.

---

## High-level architecture

```text
App
├── Background layers (wood-grain, vignette, spotlight)
├── AnimatePresence switcher
│   ├── ClosedBook
│   │   └── Book cover / spine / page edge mockup
│   └── OpenBook
│       ├── top bar / close button / header
│       ├── book spread container
│       │   ├── left page
│       │   ├── book spine divider
│       │   ├── right page
│       │   ├── page flip layer
│       │   └── click zones for prev/next
│       └── navigation controls
└── SpreadContent
    ├── Spread0
    ├── Spread1
    ├── Spread2
    ├── Spread3
    ├── Spread4
    ├── Spread5
    ├── Spread6
    ├── Spread7
    ├── Spread8
    └── Spread9
```

### Rendering sequence

1. `src/main.tsx` mounts the React app.
2. `src/app/App.tsx` renders the whole experience.
3. A `stage` state toggles between `closed` and `open`.
4. When closed, `ClosedBook` is displayed.
5. Clicking the cover sets the stage to `open`, which then renders `OpenBook`.
6. `OpenBook` renders `SpreadContent`, which resolves the active spread component based on `spreadIndex`.
7. Each spread is a left/right page pair built from a shared page base.
8. Navigation is handled by page flip logic using Framer Motion and click zones.

### CSS layering and z-index notes

- The app uses a full-screen wrapper with layered absolutely positioned background divs.
- The book sits in the center of the screen using `absolute inset-0 flex items-center justify-center`.
- `AnimatePresence` handles soft transitions between the closed and open book states.
- In `OpenBook`, the central spine and page flip layers are intentionally stacked to create the impression of physical paper.
- The left/right page content is inside a `perspective` container to simulate a 3D book plane.

### State management

The project uses simple local React state only:
- `BookStage` in `App.tsx` (`"closed" | "open"`)
- `spreadIndex` for the current spread in `OpenBook`
- `leftSpread` / `rightSpread` for current page positions
- `isFlipping` and `flipState` for the animated page-turn behavior
- `isMobile` and `mobilePage` for mobile navigation

There is no global state management library and no Redux, Zustand, context API, or external app store.

---

## Project files and responsibilities

### Root files
- `package.json` — project dependencies and scripts
- `vite.config.ts` — Vite config, React + Tailwind plugins, alias config
- `README.md` — minimal project setup instructions
- `src/main.tsx` — application mount point
- `src/styles/index.css` — imports all global style layers
- `src/styles/fonts.css` — Google Fonts import
- `src/styles/theme.css` — design tokens and theme variables

### App structure
- `src/app/App.tsx` — overall book shell and closed/open stage transition
- `src/app/components/ClosedBook.tsx` — closed book cover art and hover/opening animation
- `src/app/components/OpenBook.tsx` — open book UI, page flipping, navigation, mobile layout
- `src/app/components/SpreadContent.tsx` — resolver that selects a spread component by index
- `src/app/components/spreads/PageBase.tsx` — common page styling and helper primitives
- `src/app/components/spreads/Spread0.tsx` through `Spread9.tsx` — actual portfolio content pages

### Styling and design system
- `src/styles/theme.css` — color palette and Tailwind theme variables
- `src/styles/fonts.css` — typography family imports
- `src/styles/index.css` — CSS entrypoint

### Asset inventory

There is no current GLB/GLTF/OBJ/FBX asset pipeline in this repository.

Found assets:
- `src/imports/Screenshot_2026-08-18_at_1.10.03_PM.png` — one image file in the project
- No `.glb`, `.gltf`, `.fbx`, `.obj`, `.dae`, or texture folders were found in the active source tree.

---

## Current page/story structure

The open book contains 10 spreads and 20 pages total.

```text
Spread 0  -> Introduction / table of contents
Spread 1  -> About Me (front/back)
Spread 2  -> Skills (front/back)
Spread 3  -> PassportPro (project 01)
Spread 4  -> OceanicX (project 02)
Spread 5  -> CoWrite (project 03)
Spread 6  -> Glove Royale (project 04)
Spread 7  -> Experience
Spread 8  -> Hackathons & Achievements
Spread 9  -> Contact / final page
```

The site is an interactive portfolio book rather than a standard landing page with sections anchored in a vertical scroll.

---

## Important notes for future AI agents

### Do not assume Three.js is present
The repository is not currently using any 3D engine or 3D asset system.

### Do not change the core interaction model casually
The book interaction is intentionally implemented as:
- closed cover -> click -> book opens
- open book -> prev/next flips across spreads
- click zones on page edges trigger navigation
- keyboard navigation with arrow keys
- mobile fallback uses a single-page vertical/slide experience

### Do not remove the book metaphor
The app is built around the portfolio notebook metaphor. The content is page-based and visual design is tuned to look like a printed personal portfolio book.

### Do not alter the underlying content story
The spreads intentionally present a personal portfolio narrative with sections such as introduction, project details, experience, achievements, and contact.

---

## Current source code

# FILE: package.json

```json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "canvas-confetti": "1.9.4",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-hook-form": "7.55.0",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "peerDependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "peerDependenciesMeta": {
    "react": {
      "optional": true
    },
    "react-dom": {
      "optional": true
    }
  },
  "pnpm": {
    "overrides": {
      "vite": "6.3.5"
    }
  }
}
```

# FILE: README.md

```md
# Build this (Copy)

This is a code bundle for Build this (Copy). The original project is available at https://www.figma.com/design/rClnyLiA6YNswXkttsn5Uy/Build-this--Copy-.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.
```

# FILE: vite.config.ts

```ts
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

# FILE: src/main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

# FILE: src/app/App.tsx

```tsx
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClosedBook } from "./components/ClosedBook";
import { OpenBook } from "./components/OpenBook";

type BookStage = "closed" | "open";

export default function App() {
  const [stage, setStage] = useState<BookStage>("closed");

  return (
    <div
      className="relative w-full h-screen overflow-hidden select-none"
      style={{
        background:
          "radial-gradient(ellipse 130% 110% at 50% 110%, #b89a60 0%, #cdb278 25%, #d9c08a 55%, #c9aa6e 80%, #b8965a 100%)",
      }}
    >
      {/* Subtle wood-grain desk texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(92deg, transparent, transparent 60px, rgba(100,60,20,0.025) 60px, rgba(100,60,20,0.025) 61px), repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(100,60,20,0.015) 80px, rgba(100,60,20,0.015) 81px)",
          opacity: 1,
        }}
      />

      {/* Ambient light vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 40%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* Central light spot for book */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "42%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(255,240,200,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        {stage === "closed" ? (
          <motion.div
            key="closed"
            className="absolute inset-0 flex items-center justify-center"
            exit={{
              opacity: 0,
              scale: 1.08,
              transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
            }}
          >
            <ClosedBook onOpen={() => setStage("open")} />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <OpenBook onClose={() => setStage("closed")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

# FILE: src/styles/index.css

```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```

# FILE: src/styles/fonts.css

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&family=Caveat:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

# FILE: src/styles/theme.css

```css
@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #d4c5a0;
  --foreground: #2c1810;
  --card: #faf6f0;
  --card-foreground: #2c1810;
  --popover: #faf6f0;
  --popover-foreground: #2c1810;
  --primary: #1e2d4a;
  --primary-foreground: #faf6f0;
  --secondary: #f0e8d8;
  --secondary-foreground: #2c1810;
  --muted: #e8dcc8;
  --muted-foreground: #7a6550;
  --accent: #c9863a;
  --accent-foreground: #1e2d4a;
  --destructive: #a54232;
  --destructive-foreground: #faf6f0;
  --border: rgba(44, 24, 16, 0.12);
  --input: transparent;
  --input-background: #f0e8d8;
  --switch-background: #c4b8a0;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: #c9863a;
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }

  /**
  * Default typography styles for HTML elements (h1-h4, p, label, button, input).
  * These are in @layer base, so Tailwind utility classes (like text-sm, text-lg) automatically override them.
  */

  html {
    font-size: var(--font-size);
  }

  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  h4 {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  label {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  button {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  input {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}
```

# FILE: src/styles/globals.css

```css
(The file is empty.)
```

# FILE: src/app/components/SpreadContent.tsx

```tsx
import { Spread0 } from "./spreads/Spread0";
import { Spread1 } from "./spreads/Spread1";
import { Spread2 } from "./spreads/Spread2";
import { Spread3 } from "./spreads/Spread3";
import { Spread4 } from "./spreads/Spread4";
import { Spread5 } from "./spreads/Spread5";
import { Spread6 } from "./spreads/Spread6";
import { Spread7 } from "./spreads/Spread7";
import { Spread8 } from "./spreads/Spread8";
import { Spread9 } from "./spreads/Spread9";

interface Props {
  spreadIndex: number;
  side: "left" | "right";
}

const spreads = [Spread0, Spread1, Spread2, Spread3, Spread4, Spread5, Spread6, Spread7, Spread8, Spread9];

export function SpreadContent({ spreadIndex, side }: Props) {
  const Spread = spreads[spreadIndex];
  if (!Spread) return null;
  return <Spread side={side} />;
}
```

# FILE: src/app/components/spreads/PageBase.tsx

```tsx
import { ReactNode } from "react";

export const ink = "#2c1810";
export const inkLight = "#4a3728";
export const inkFaint = "rgba(44,24,16,0.45)";
export const gold = "#c9863a";
export const navy = "#1e2d4a";
export const cream = "#faf6f0";

export const serif = "'Playfair Display', Georgia, serif";
export const sans = "'Lato', 'Helvetica Neue', sans-serif";
export const hand = "'Caveat', cursive";
export const mono = "'JetBrains Mono', monospace";

interface PageProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Page({ children, className = "", style }: PageProps) {
  return (
    <div
      className={`relative w-full h-full p-8 ${className}`}
      style={{ fontFamily: sans, color: ink, ...style }}
    >
      {children}
    </div>
  );
}

export function PageHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: serif,
        fontSize: 22,
        fontWeight: 700,
        color: navy,
        lineHeight: 1.2,
        marginBottom: 4,
      }}
    >
      {children}
    </h2>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 9,
        letterSpacing: "0.2em",
        color: gold,
        textTransform: "uppercase" as const,
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
}

interface StickyNoteProps {
  children: ReactNode;
  color?: string;
  rotate?: number;
  style?: React.CSSProperties;
}

export function StickyNote({ children, color = "#fff9c4", rotate = -2, style }: StickyNoteProps) {
  return (
    <div
      style={{
        background: color,
        padding: "10px 12px",
        boxShadow: "2px 3px 10px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
        transform: `rotate(${rotate}deg)`,
        fontFamily: hand,
        fontSize: 13,
        color: ink,
        lineHeight: 1.5,
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface TechTagProps {
  children: ReactNode;
  color?: string;
  bg?: string;
}

export function TechTag({ children, color = navy, bg = "rgba(30,45,74,0.09)" }: TechTagProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 2,
        background: bg,
        color,
        fontFamily: mono,
        fontSize: 10,
        letterSpacing: "0.05em",
        border: `1px solid ${color}22`,
        marginRight: 4,
        marginBottom: 4,
      }}
    >
      {children}
    </span>
  );
}

interface StampProps {
  children: ReactNode;
  color?: string;
  rotate?: number;
}

export function Stamp({ children, color = "#a54232", rotate = -5 }: StampProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: "50%",
        border: `3px solid ${color}`,
        color,
        fontFamily: sans,
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        textAlign: "center" as const,
        transform: `rotate(${rotate}deg)`,
        opacity: 0.85,
        lineHeight: 1.3,
        padding: 8,
      }}
    >
      {children}
    </div>
  );
}

export function Annotation({ children, color = gold, rotate = -1 }: { children: ReactNode; color?: string; rotate?: number }) {
  return (
    <span
      style={{
        fontFamily: hand,
        fontSize: 12,
        color,
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function PageNumber({ n, side }: { n: number | string; side: "left" | "right" }) {
  return (
    <div
      className="absolute bottom-5"
      style={{
        [side === "left" ? "right" : "left"]: 32,
        fontFamily: mono,
        fontSize: 10,
        color: "rgba(44,24,16,0.3)",
        letterSpacing: "0.08em",
      }}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

export function Divider({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(44,24,16,0.15) 30%, rgba(44,24,16,0.15) 70%, transparent)",
        margin: "10px 0",
        ...style,
      }}
    />
  );
}
```

# FILE: src/app/components/ClosedBook.tsx

```tsx
import { useState } from "react";
import { motion } from "motion/react";

interface Props {
  onOpen: () => void;
}

export function ClosedBook({ onOpen }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(onOpen, 900);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div style={{ perspective: "1800px", perspectiveOrigin: "50% 42%" }}>
        <motion.div
          className="relative cursor-pointer select-none"
          style={{
            width: 260,
            height: 360,
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 30px 24px rgba(28,16,10,0.22))",
          }}
          animate={{
            rotateX: isOpening ? 0 : 8,
            rotateY: isOpening ? 5 : -26,
            rotateZ: isOpening ? 0 : -2.5,
            scale: isOpening ? 1.3 : isHovered ? 1.06 : 1,
            y: isHovered && !isOpening ? -14 : 0,
            z: isHovered && !isOpening ? 24 : 0,
          }}
          transition={
            isOpening
              ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
              : { type: "spring", stiffness: 150, damping: 18 }
          }
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: "translateZ(-18px) translateX(12px)",
              background: "linear-gradient(160deg, #1c263d 0%, #111b2d 45%, #0d1627 100%)",
              borderRadius: "2px 8px 8px 2px",
              boxShadow: "-10px 18px 26px rgba(8,10,15,0.35)",
              opacity: 0.92,
            }}
          />

          <div
            className="absolute inset-y-3 left-[-10px]"
            style={{
              width: 16,
              transform: "translateZ(-8px) rotateY(-90deg)",
              background: "linear-gradient(90deg, #141d31 0%, #1a2437 100%)",
              borderRadius: "4px 0 0 4px",
              boxShadow: "inset 0 0 12px rgba(255,255,255,0.06)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #243558 0%, #1a2640 50%, #141d34 100%)",
              borderRadius: "2px 8px 8px 2px",
              boxShadow: isHovered
                ? "18px 28px 66px rgba(0,0,0,0.7), 8px 15px 26px rgba(0,0,0,0.45), inset 0 0 18px rgba(255,255,255,0.08)"
                : "12px 22px 46px rgba(0,0,0,0.58), 4px 10px 18px rgba(0,0,0,0.38), inset 0 0 18px rgba(255,255,255,0.04)",
              transition: "box-shadow 0.3s ease",
              overflow: "hidden",
              transform: "translateZ(16px)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent 18%, transparent 82%, rgba(0,0,0,0.18))",
              }}
            />

            <div
              className="absolute"
              style={{
                inset: 12,
                border: "1.5px solid rgba(201,134,58,0.55)",
                borderRadius: 2,
              }}
            />
            <div
              className="absolute"
              style={{
                inset: 18,
                border: "1px solid rgba(201,134,58,0.25)",
                borderRadius: 1,
              }}
            />

            {[
              { top: 14, left: 14 },
              { top: 14, right: 14 },
              { bottom: 14, left: 14 },
              { bottom: 14, right: 14 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  ...pos,
                  width: 12,
                  height: 12,
                  borderTop: i < 2 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderBottom: i >= 2 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderLeft: i % 2 === 0 ? "2px solid rgba(201,134,58,0.6)" : "none",
                  borderRight: i % 2 === 1 ? "2px solid rgba(201,134,58,0.6)" : "none",
                }}
              />
            ))}

            <div
              className="absolute inset-0 flex items-center justify-center opacity-5"
              style={{ fontSize: 180, color: "#c9863a", fontFamily: "Playfair Display, serif", fontWeight: 700 }}
            >
              V
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.35em",
                  color: "rgba(201,134,58,0.55)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Portfolio
              </div>

              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(201,134,58,0.5), transparent)",
                }}
              />

              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 42,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#d4a655",
                  textAlign: "center",
                  lineHeight: 1,
                  textShadow: "0 0 40px rgba(201,134,58,0.3)",
                }}
              >
                VAIBHAV
              </div>

              <div
                style={{
                  width: 60,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(201,134,58,0.45), transparent)",
                }}
              />

              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  color: "rgba(201,134,58,0.6)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.8,
                }}
              >
                Developer · Builder
                <br />
                CS Student
              </div>

              <div style={{ marginTop: 8 }}>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    color: "rgba(201,134,58,0.35)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  2024
                </div>
              </div>

              <motion.div
                style={{
                  marginTop: 16,
                  padding: "5px 14px",
                  border: "1px solid rgba(201,134,58,0.3)",
                  borderRadius: 2,
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  color: "rgba(201,134,58,0.7)",
                  fontFamily: "Lato, sans-serif",
                  textTransform: "uppercase",
                  background: "rgba(201,134,58,0.06)",
                  boxShadow: "inset 0 0 10px rgba(201,134,58,0.06)",
                }}
                animate={isOpening ? {} : { opacity: [0.55, 1, 0.55] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                {isOpening ? "Opening…" : "Open"}
              </motion.div>
            </div>
          </div>

          <div
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: 28,
              height: "100%",
              transformOrigin: "left center",
              transform: "rotateY(-90deg) translateZ(2px)",
              background: "linear-gradient(90deg, #0d1628 0%, #1a2338 100%)",
              borderRadius: "4px 0 0 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset -8px 0 16px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                fontFamily: "Lato, sans-serif",
                fontSize: 8,
                letterSpacing: "0.25em",
                color: "rgba(201,134,58,0.6)",
                textTransform: "uppercase",
              }}
            >
              VAIBHAV · Portfolio
            </div>
          </div>

          <div
            className="absolute"
            style={{
              right: 0,
              top: 4,
              bottom: 4,
              width: 22,
              transformOrigin: "right center",
              transform: "rotateY(90deg) translateZ(4px)",
              borderRadius: "0 2px 2px 0",
              overflow: "hidden",
            }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: i * 1.1,
                  top: 0,
                  bottom: 0,
                  width: "100%",
                  background:
                    i % 3 === 0
                      ? "#f5f0e8"
                      : i % 3 === 1
                      ? "#faf6f0"
                      : "#ede8e0",
                  borderLeft: "0.5px solid rgba(0,0,0,0.06)",
                  boxShadow: "inset 0 0 8px rgba(0,0,0,0.03)",
                }}
              />
            ))}
          </div>

          <div
            className="absolute"
            style={{
              bottom: 0,
              left: 6,
              right: 2,
              height: 18,
              transformOrigin: "bottom center",
              transform: "rotateX(-90deg)",
              background: "linear-gradient(180deg, #c8bfb0, #b8afa0)",
              boxShadow: "inset 0 4px 8px rgba(0,0,0,0.12)",
            }}
          />

          <div
            className="absolute"
            style={{
              top: 0,
              left: 6,
              right: 2,
              height: 18,
              transformOrigin: "top center",
              transform: "rotateX(90deg)",
              background: "linear-gradient(0deg, #d0c8b8, #c0b8a8)",
              boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.08)",
            }}
          />

          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 30%, rgba(201,134,58,0.08) 0%, transparent 68%)",
                borderRadius: "2px 6px 6px 2px",
              }}
            />
          )}
        </motion.div>
      </div>

      <motion.p
        style={{
          fontFamily: "Caveat, cursive",
          fontSize: 15,
          color: "rgba(44, 24, 16, 0.5)",
          letterSpacing: "0.02em",
        }}
        animate={{ opacity: isOpening ? 0 : [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        ← click to open the portfolio →
      </motion.p>
    </div>
  );
}
```

# FILE: src/app/components/OpenBook.tsx

```tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, BookOpen } from "lucide-react";
import { SpreadContent } from "./SpreadContent";

const TOTAL_SPREADS = 10;

const SPREAD_TITLES = [
  "Introduction",
  "About Me",
  "Skills",
  "PassportPro",
  "OceanicX",
  "CoWrite",
  "Glove Royale",
  "Experience",
  "Hackathons",
  "Contact",
];

interface Props {
  onClose: () => void;
}

interface FlipState {
  direction: "fwd" | "bwd";
  frontSpread: number;
  frontSide: "left" | "right";
  backSpread: number;
  backSide: "left" | "right";
  flipperSide: "left" | "right";
}

export function OpenBook({ onClose }: Props) {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [leftSpread, setLeftSpread] = useState(0);
  const [rightSpread, setRightSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipState, setFlipState] = useState<FlipState | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePage, setMobilePage] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const flipForward = useCallback(() => {
    if (isFlipping || spreadIndex >= TOTAL_SPREADS - 1) return;
    const next = spreadIndex + 1;
    setRightSpread(next);
    setFlipState({
      direction: "fwd",
      frontSpread: spreadIndex,
      frontSide: "right",
      backSpread: next,
      backSide: "left",
      flipperSide: "right",
    });
    setIsFlipping(true);
  }, [isFlipping, spreadIndex]);

  const flipBackward = useCallback(() => {
    if (isFlipping || spreadIndex <= 0) return;
    const prev = spreadIndex - 1;
    setLeftSpread(prev);
    setFlipState({
      direction: "bwd",
      frontSpread: spreadIndex,
      frontSide: "left",
      backSpread: prev,
      backSide: "right",
      flipperSide: "left",
    });
    setIsFlipping(true);
  }, [isFlipping, spreadIndex]);

  const handleFlipComplete = useCallback(() => {
    if (!flipState) return;
    const newIndex = flipState.direction === "fwd" ? spreadIndex + 1 : spreadIndex - 1;
    setSpreadIndex(newIndex);
    setLeftSpread(newIndex);
    setRightSpread(newIndex);
    setIsFlipping(false);
    setFlipState(null);
  }, [flipState, spreadIndex]);

  const mobilePageCount = TOTAL_SPREADS * 2;

  const mobileNext = useCallback(() => {
    if (mobilePage < mobilePageCount - 1) setMobilePage((p) => p + 1);
  }, [mobilePage, mobilePageCount]);

  const mobilePrev = useCallback(() => {
    if (mobilePage > 0) setMobilePage((p) => p - 1);
  }, [mobilePage]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (isMobile) mobileNext();
        else flipForward();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (isMobile) mobilePrev();
        else flipBackward();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [flipForward, flipBackward, mobileNext, mobilePrev, onClose, isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) {
        if (isMobile) mobileNext();
        else flipForward();
      } else {
        if (isMobile) mobilePrev();
        else flipBackward();
      }
    }
  };

  const mobileSpread = Math.floor(mobilePage / 2);
  const mobileSide: "left" | "right" = mobilePage % 2 === 0 ? "left" : "right";

  const pageNumLeft = spreadIndex * 2 + 1;
  const pageNumRight = spreadIndex * 2 + 2;

  if (isMobile) {
    return (
      <div
        className="flex flex-col items-center justify-center w-full h-full px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative flex flex-col" style={{ width: "min(95vw, 400px)", height: "min(78vh, 560px)" }}>
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
            style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810" }}
          >
            <X size={14} /> Close
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={mobilePage}
              className="w-full h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "#faf6f0",
                borderRadius: 4,
                boxShadow: "0 8px 40px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.12)",
                overflow: "hidden",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.06) 28px)",
              }}
            >
              <div className="w-full h-full overflow-y-auto">
                <SpreadContent spreadIndex={mobileSpread} side={mobileSide} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 px-2">
            <button
              onClick={mobilePrev}
              disabled={mobilePage === 0}
              className="flex items-center gap-1 disabled:opacity-30 transition-opacity"
              style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810" }}
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: "#7a6550",
                letterSpacing: "0.08em",
              }}
            >
              {String(mobilePage + 1).padStart(2, "0")} / {String(mobilePageCount).padStart(2, "0")}
              <span className="ml-2 opacity-60">— {SPREAD_TITLES[mobileSpread]}</span>
            </span>
            <button
              onClick={mobileNext}
              disabled={mobilePage >= mobilePageCount - 1}
              className="flex items-center gap-1 disabled:opacity-30 transition-opacity"
              style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810" }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="flex items-center justify-between w-full px-2" style={{ maxWidth: "min(92vw, 1100px)" }}>
        <div className="flex items-center gap-2" style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "rgba(44,24,16,0.55)" }}>
          <BookOpen size={14} />
          <span style={{ letterSpacing: "0.06em" }}>VAIBHAV · Portfolio</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "rgba(44,24,16,0.55)" }}
        >
          <X size={13} /> Close book
        </button>
      </div>

      <div
        className="relative flex"
        style={{
          width: "min(92vw, 1080px)",
          height: "min(80vh, 720px)",
          perspective: "2600px",
          perspectiveOrigin: "50% 42%",
          transform: "rotateX(3deg)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "0 28px 90px rgba(0,0,0,0.38), 0 12px 26px rgba(0,0,0,0.18)",
            borderRadius: 4,
            zIndex: 0,
            transform: "translateZ(-20px)",
          }}
        />

        <div
          className="absolute inset-y-2 left-2 right-2 pointer-events-none"
          style={{
            borderRadius: 4,
            boxShadow: "inset 0 0 0 1px rgba(120,90,60,0.14), inset 0 0 18px rgba(0,0,0,0.06)",
            zIndex: 1,
          }}
        />

        <div
          className="relative overflow-hidden flex-1"
          style={{
            background: "#faf6f0",
            borderRadius: "4px 0 0 4px",
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.055) 28px)",
            backgroundPosition: "0 8px",
            zIndex: 2,
            boxShadow: "inset -14px 0 18px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(115,90,55,0.08)",
            transform: "translateZ(18px)",
          }}
        >
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 48, width: 1, background: "rgba(200,80,60,0.18)" }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 pointer-events-none"
            style={{
              width: 50,
              background: "linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 100%)",
              zIndex: 10,
            }}
          />
          <div className="w-full h-full overflow-y-auto">
            <SpreadContent spreadIndex={leftSpread} side="left" />
          </div>
        </div>

        <div
          className="relative flex-shrink-0"
          style={{
            width: 8,
            background: "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.22) 100%)",
            zIndex: 15,
          }}
        />

        <div
          className="relative overflow-hidden flex-1"
          style={{
            background: "#f5f1e8",
            borderRadius: "0 4px 4px 0",
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.045) 28px)",
            backgroundPosition: "0 8px",
            zIndex: 2,
            boxShadow: "inset 14px 0 18px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(115,90,55,0.08)",
            transform: "translateZ(18px)",
          }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 pointer-events-none"
            style={{
              width: 50,
              background: "linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 100%)",
              zIndex: 10,
            }}
          />
          <div className="w-full h-full overflow-y-auto">
            <SpreadContent spreadIndex={rightSpread} side="right" />
          </div>
        </div>

        {isFlipping && flipState && (
          <motion.div
            key={`flip-${spreadIndex}-${flipState.direction}`}
            className="absolute top-0 bottom-0"
            style={{
              width: "calc(50% - 4px)",
              ...(flipState.flipperSide === "right" ? { right: 0 } : { left: 0 }),
              transformOrigin: flipState.flipperSide === "right" ? "left center" : "right center",
              transformStyle: "preserve-3d" as const,
              zIndex: 20,
            }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: flipState.direction === "fwd" ? -180 : 180 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={handleFlipComplete}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                background: flipState.flipperSide === "right" ? "#f5f1e8" : "#faf6f0",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
                backgroundPosition: "0 8px",
              }}
            >
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  [flipState.flipperSide === "right" ? "left" : "right"]: 0,
                  width: 50,
                  background:
                    flipState.flipperSide === "right"
                      ? "linear-gradient(to right, rgba(0,0,0,0.08), transparent)"
                      : "linear-gradient(to left, rgba(0,0,0,0.1), transparent)",
                  zIndex: 10,
                }}
              />
              <SpreadContent spreadIndex={flipState.frontSpread} side={flipState.frontSide} />
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: flipState.flipperSide === "right" ? "#faf6f0" : "#f5f1e8",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,60,0.05) 28px)",
                backgroundPosition: "0 8px",
              }}
            >
              <div
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{
                  [flipState.flipperSide === "right" ? "right" : "left"]: 0,
                  width: 50,
                  background:
                    flipState.flipperSide === "right"
                      ? "linear-gradient(to left, rgba(0,0,0,0.1), transparent)"
                      : "linear-gradient(to right, rgba(0,0,0,0.08), transparent)",
                  zIndex: 10,
                }}
              />
              <SpreadContent spreadIndex={flipState.backSpread} side={flipState.backSide} />
            </div>

            <div
              className="absolute top-0 bottom-0"
              style={{
                [flipState.flipperSide === "right" ? "right" : "left"]: 0,
                width: 2,
                background: "rgba(255,255,255,0.4)",
                zIndex: 30,
              }}
            />
          </motion.div>
        )}

        {!isFlipping && (
          <>
            {spreadIndex > 0 && (
              <div
                className="absolute left-0 top-0 bottom-0 cursor-w-resize"
                style={{ width: "22%", zIndex: 5 }}
                onClick={flipBackward}
              />
            )}
            {spreadIndex < TOTAL_SPREADS - 1 && (
              <div
                className="absolute right-0 top-0 bottom-0 cursor-e-resize"
                style={{ width: "22%", zIndex: 5 }}
                onClick={flipForward}
              />
            )}
          </>
        )}
      </div>

      <div
        className="flex items-center gap-6"
        style={{ width: "min(92vw, 1080px)" }}
      >
        <button
          onClick={flipBackward}
          disabled={spreadIndex <= 0 || isFlipping}
          className="flex items-center gap-2 disabled:opacity-25 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810", letterSpacing: "0.06em" }}
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        <div className="flex-1 flex items-center justify-center gap-2">
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#7a6550",
              letterSpacing: "0.1em",
            }}
          >
            {String(pageNumLeft).padStart(2, "0")}–{String(pageNumRight).padStart(2, "0")}
          </span>
          <span style={{ color: "rgba(122,101,80,0.35)", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "Lato, sans-serif",
              fontSize: 11,
              color: "rgba(44,24,16,0.45)",
              letterSpacing: "0.08em",
            }}
          >
            {SPREAD_TITLES[spreadIndex]}
          </span>

          <div className="flex gap-1 ml-2">
            {Array.from({ length: TOTAL_SPREADS }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isFlipping || i === spreadIndex) return;
                  setSpreadIndex(i);
                  setLeftSpread(i);
                  setRightSpread(i);
                }}
                style={{
                  width: i === spreadIndex ? 14 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === spreadIndex ? "#c9863a" : "rgba(44,24,16,0.2)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={flipForward}
          disabled={spreadIndex >= TOTAL_SPREADS - 1 || isFlipping}
          className="flex items-center gap-2 disabled:opacity-25 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "Lato, sans-serif", fontSize: 12, color: "#2c1810", letterSpacing: "0.06em" }}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>

      <p style={{ fontFamily: "Lato, sans-serif", fontSize: 10, color: "rgba(44,24,16,0.3)", letterSpacing: "0.08em" }}>
        Use ← → arrow keys or click page edges to flip
      </p>
    </div>
  );
}
```

# FILE: src/app/components/spreads/Spread0.tsx

```tsx
import { Page, PageHeading, StickyNote, Annotation, PageNumber, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 28, textTransform: "uppercase" }}>
        introduction
      </div>

      <div style={{ fontFamily: hand, fontSize: 52, color: navy, lineHeight: 1, marginBottom: 4 }}>
        Hello!
      </div>
      <div style={{ fontFamily: hand, fontSize: 26, color: ink, marginBottom: 20 }}>
        I'm Vaibhav.
      </div>

      <svg width="160" height="12" viewBox="0 0 160 12" style={{ marginBottom: 20 }}>
        <path d="M0 8 Q20 2 40 8 Q60 14 80 8 Q100 2 120 8 Q140 14 160 8" stroke={gold} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      <p style={{ fontSize: 13.5, lineHeight: 1.75, color: ink, maxWidth: 320, marginBottom: 20 }}>
        I'm a <strong style={{ fontFamily: serif, color: navy }}>Computer Science student</strong> and developer who enjoys building websites, applications, cloud systems, AI projects, and experimental products.
      </p>

      <div style={{ marginLeft: 16, marginBottom: 20 }}>
        <StickyNote color="#fff9c4" rotate={-2}>
          Currently: building things,<br />
          breaking things, learning things. ✦
        </StickyNote>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
        <svg width="40" height="20" viewBox="0 0 40 20">
          <path d="M4 10 Q20 4 36 10 M30 6 L36 10 L30 14" stroke={gold} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Annotation color={gold}>flip to explore →</Annotation>
      </div>

      <div className="absolute bottom-16 left-10" style={{ display: "flex", gap: 5 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: `rgba(201,134,58,${0.15 + i * 0.1})` }} />
        ))}
      </div>

      <PageNumber n={1} side="left" />
    </Page>
  );
}

function RightPage() {
  const sections = [
    { icon: "✦", label: "Introduction", pg: "01–02" },
    { icon: "◎", label: "About Me", pg: "03–04" },
    { icon: "⌨", label: "Skills", pg: "05–06" },
    { icon: "◈", label: "Projects", pg: "07–14" },
    { icon: "◷", label: "Experience", pg: "15–16" },
    { icon: "✺", label: "Achievements", pg: "17–18" },
    { icon: "✉", label: "Contact", pg: "19–20" },
  ];

  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 28, textTransform: "uppercase" }}>
        table of contents
      </div>

      <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What's in this book
      </div>
      <div style={{ height: 2, width: 48, background: gold, marginBottom: 20, borderRadius: 1 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {sections.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 0",
              borderBottom: "1px dashed rgba(44,24,16,0.1)",
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 11, color: gold, width: 14, textAlign: "center" }}>{s.icon}</span>
            <span style={{ fontFamily: sans, fontSize: 12, color: ink, flex: 1, letterSpacing: "0.02em" }}>{s.label}</span>
            <span style={{ fontFamily: mono, fontSize: 10, color: inkFaint }}>{s.pg}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, padding: "8px 12px", border: `1px solid rgba(201,134,58,0.3)`, borderRadius: 2, background: "rgba(201,134,58,0.04)" }}>
        <span style={{ fontFamily: hand, fontSize: 13, color: "rgba(44,24,16,0.6)" }}>
          "Design is not just what it looks like —<br />design is how it works."
        </span>
        <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4 }}>— Steve Jobs</div>
      </div>

      <div className="absolute bottom-12 right-8 opacity-20">
        <svg width="48" height="40" viewBox="0 0 48 40">
          <rect x="4" y="30" width="40" height="6" rx="1" fill={navy} />
          <rect x="8" y="22" width="32" height="6" rx="1" fill={gold} />
          <rect x="12" y="14" width="24" height="6" rx="1" fill={navy} />
          <rect x="16" y="8" width="16" height="5" rx="1" fill={gold} />
        </svg>
      </div>

      <PageNumber n={2} side="right" />
    </Page>
  );
}

export function Spread0({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread1.tsx

```tsx
import { Page, StickyNote, TechTag, Annotation, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        about me · page 03
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: `linear-gradient(135deg, ${navy} 0%, #2d4a7a 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 16px rgba(30,45,74,0.25)",
          border: "3px solid rgba(201,134,58,0.3)",
        }}>
          <span style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: "#d4a655" }}>V</span>
        </div>
        <div>
          <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, lineHeight: 1.2 }}>
            Vaibhav
          </div>
          <div style={{ fontFamily: hand, fontSize: 13, color: gold, marginTop: 2 }}>
            Developer · Builder · Student
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4 }}>
            CSE · 2024–2028
          </div>
        </div>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 6, marginTop: 10 }}>
        Who I am
      </div>
      <p style={{ fontSize: 12, lineHeight: 1.75, color: ink, marginBottom: 12 }}>
        I'm a passionate CS student with a genuine love for building software. I thrive at the intersection of backend engineering and developer tooling, and I'm always exploring new domains — from cloud infrastructure to multiplayer game dev.
      </p>

      <div style={{ fontFamily: serif, fontSize: 13, fontWeight: 700, color: navy, marginBottom: 8 }}>
        What I enjoy
      </div>
      {[
        "Building full-stack web apps from scratch",
        "Designing cloud-native systems (K8s, AWS)",
        "Exploring AI/ML integrations in products",
        "Contributing to open source",
        "Game development (Roblox Studio / Lua)",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
          <span style={{ color: gold, fontSize: 14, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 11.5, lineHeight: 1.5, color: ink }}>{item}</span>
        </div>
      ))}

      <PageNumber n={3} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        about me · page 04
      </div>

      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 14 }}>
        My Journey
      </div>

      {[
        { year: "2024", label: "Started B.Tech CSE", note: "Dived straight into building projects alongside coursework" },
        { year: "2024", label: "First Cloud Project", note: "Deployed PassportPro — identity verification on AWS" },
        { year: "2024", label: "Kubernetes & DevOps", note: "Built OceanicX with full container orchestration" },
        { year: "2025", label: "Hackathons", note: "Multiple events, shipped products under 24hrs" },
        { year: "Now", label: "Still building…", note: "Always working on something new" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: item.year === "Now" ? gold : navy,
              marginTop: 3, flexShrink: 0,
              boxShadow: item.year === "Now" ? `0 0 8px ${gold}88` : "none",
            }} />
            {i < 4 && <div style={{ width: 1, flex: 1, background: "rgba(30,45,74,0.15)", marginTop: 3 }} />}
          </div>
          <div style={{ paddingBottom: 4 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: gold, letterSpacing: "0.08em" }}>{item.year}</span>
              <span style={{ fontFamily: serif, fontSize: 12, fontWeight: 700, color: navy }}>{item.label}</span>
            </div>
            <p style={{ fontSize: 11, color: inkFaint, lineHeight: 1.5, marginTop: 2 }}>{item.note}</p>
          </div>
        </div>
      ))}

      <Divider style={{ margin: "12px 0" }} />

      <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 8 }}>
        Currently focused on:
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TechTag color={navy}>React</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Node.js</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">AWS</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Docker</TechTag>
        <TechTag color={navy}>AI/ML</TechTag>
      </div>

      <div className="absolute bottom-14 right-6">
        <StickyNote color="#d6e8ff" rotate={3} style={{ fontSize: 11 }}>
          📍 India<br />
          🎯 Building serious things
        </StickyNote>
      </div>

      <PageNumber n={4} side="right" />
    </Page>
  );
}

export function Spread1({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread2.tsx

```tsx
import { Page, PageNumber, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

interface SkillGroupProps {
  label: string;
  color: string;
  bg: string;
  skills: string[];
}

function SkillGroup({ label, color, bg, skills }: SkillGroupProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{
        fontFamily: mono,
        fontSize: 9,
        letterSpacing: "0.18em",
        color,
        textTransform: "uppercase" as const,
        marginBottom: 7,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        <span style={{ display: "inline-block", width: 14, height: 1.5, background: color, borderRadius: 1 }} />
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
        {skills.map((s, i) => (
          <span
            key={i}
            style={{
              padding: "3px 9px",
              borderRadius: 2,
              background: bg,
              color,
              fontFamily: mono,
              fontSize: 10.5,
              border: `1px solid ${color}22`,
              letterSpacing: "0.03em",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        skills · page 05
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy }}>Technical Stack</span>
      </div>
      <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 18 }}>
        — my developer toolkit
      </div>

      <div style={{
        position: "absolute", left: 58, top: 56, bottom: 56,
        borderLeft: `2px solid rgba(201,134,58,0.25)`,
        borderTop: `2px solid rgba(201,134,58,0.25)`,
        borderBottom: `2px solid rgba(201,134,58,0.25)`,
        width: 10,
      }} />

      <SkillGroup
        label="Programming Languages"
        color={navy}
        bg="rgba(30,45,74,0.07)"
        skills={["Python", "Java", "C++", "JavaScript", "TypeScript"]}
      />

      <SkillGroup
        label="Frontend"
        color="#2a5c7a"
        bg="rgba(42,92,122,0.07)"
        skills={["React", "HTML5", "CSS3", "Tailwind CSS"]}
      />

      <SkillGroup
        label="Backend"
        color="#2a5c3f"
        bg="rgba(42,92,63,0.07)"
        skills={["Node.js", "Express", "Flask", "REST APIs"]}
      />

      <div style={{ position: "absolute", bottom: 50, right: 24, opacity: 0.12 }}>
        <svg width="52" height="52" viewBox="0 0 52 52">
          <rect x="4" y="4" width="44" height="44" rx="4" stroke={navy} strokeWidth="2" fill="none" />
          <rect x="10" y="10" width="14" height="14" rx="2" fill={gold} />
          <rect x="28" y="10" width="14" height="14" rx="2" fill={navy} />
          <rect x="10" y="28" width="14" height="14" rx="2" fill={navy} />
          <rect x="28" y="28" width="14" height="14" rx="2" fill={gold} />
        </svg>
      </div>

      <div style={{ fontFamily: hand, fontSize: 12, color: "rgba(44,24,16,0.4)", marginTop: 8 }}>
        * and always learning more...
      </div>

      <PageNumber n={5} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        skills · page 06
      </div>

      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 16 }}>
        Tools & Infrastructure
      </div>

      {[
        { label: "Database", color: "#7a3f2a", bg: "rgba(122,63,42,0.07)", skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"] },
        { label: "Cloud / DevOps", color: "#a54232", bg: "rgba(165,66,50,0.07)", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
        { label: "Monitoring", color: "#5c2a7a", bg: "rgba(92,42,122,0.07)", skills: ["Prometheus", "Grafana", "Logging"] },
        { label: "Game Dev", color: "#2a5c3f", bg: "rgba(42,92,63,0.07)", skills: ["Roblox Studio", "Lua", "Game Design"] },
      ].map((g, i) => (
        <div key={i} style={{ marginBottom: 14 }}>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.18em", color: g.color, textTransform: "uppercase" as const, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "inline-block", width: 14, height: 1.5, background: g.color, borderRadius: 1 }} />
            {g.label}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
            {g.skills.map((s, j) => (
              <span key={j} style={{ padding: "3px 9px", borderRadius: 2, background: g.bg, color: g.color, fontFamily: mono, fontSize: 10.5, border: `1px solid ${g.color}22`, letterSpacing: "0.03em" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 16, padding: "10px 12px", border: "1px solid rgba(44,24,16,0.1)", borderRadius: 3 }}>
        <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 8 }}>Strength areas:</div>
        {[
          { skill: "Full-Stack Dev", pct: 85 },
          { skill: "Cloud / K8s", pct: 75 },
          { skill: "DevOps", pct: 70 },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: 7 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
              <span style={{ fontFamily: sans, fontSize: 10.5, color: ink }}>{item.skill}</span>
              <span style={{ fontFamily: mono, fontSize: 9, color: inkFaint }}>{item.pct}%</span>
            </div>
            <div style={{ height: 4, background: "rgba(44,24,16,0.08)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${item.pct}%`, height: "100%", background: `linear-gradient(90deg, ${navy}, ${gold})`, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 50, right: 16, transform: "rotate(12deg)", opacity: 0.7 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 58, height: 58, borderRadius: "50%",
          border: `2.5px solid ${gold}`,
          color: gold, fontFamily: sans, fontSize: 8, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase" as const,
          textAlign: "center" as const, lineHeight: 1.3, padding: 6,
        }}>
          Full<br />Stack
        </div>
      </div>

      <PageNumber n={6} side="right" />
    </Page>
  );
}

export function Spread2({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread3.tsx

```tsx
import { Page, TechTag, StickyNote, Annotation, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 01 · page 07
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <div style={{ width: 3, height: 32, background: gold, borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            PassportPro
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: gold, letterSpacing: "0.12em", marginTop: 3 }}>
            IDENTITY VERIFICATION PLATFORM
          </div>
        </div>
      </div>

      <div style={{
        background: "#1e2d4a", borderRadius: 6, padding: "10px 12px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            { label: "Verified IDs", val: "12,480", color: "#27c93f" },
            { label: "Pending", val: "342", color: "#ffbd2e" },
            { label: "Flagged", val: "28", color: "#ff5f56" },
            { label: "Accuracy", val: "99.2%", color: "#4fc3f7" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, padding: "6px 8px" }}>
              <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, color: stat.color }}>{stat.val}</div>
              <div style={{ fontFamily: sans, fontSize: 8, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it does
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        A cloud-based identity verification dashboard that processes KYC (Know Your Customer) requests in real-time. Integrates with document scanning APIs to verify passports, IDs, and facial recognition data.
      </p>

      <div style={{ fontFamily: hand, fontSize: 13, color: navy, marginBottom: 4 }}>
        Problem solved:
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.6, color: inkFaint }}>
        Manual identity verification is slow and error-prone. PassportPro automates the process with 99.2% accuracy, cutting verification time from days to seconds.
      </p>

      <PageNumber n={7} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 01 · page 08
      </div>

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 18 }}>
        <TechTag>React</TechTag>
        <TechTag>Node.js</TechTag>
        <TechTag>AWS S3</TechTag>
        <TechTag>AWS Lambda</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">MongoDB</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Docker</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Tailwind</TechTag>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Key Features
      </div>
      {[
        { icon: "⚡", text: "Real-time document scanning and OCR processing" },
        { icon: "🔐", text: "Secure encrypted data pipeline on AWS" },
        { icon: "📊", text: "Live analytics dashboard with fraud flagging" },
        { icon: "🌐", text: "REST API for third-party integrations" },
        { icon: "☁️", text: "Serverless architecture — scales automatically" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ fontSize: 13, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11.5, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div style={{ marginTop: 14, display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{
          padding: "5px 12px", borderRadius: 2,
          background: navy, color: "#faf6f0",
          fontFamily: mono, fontSize: 10, letterSpacing: "0.06em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/vaibhav/passportpro
        </div>
      </div>

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#d6f5d6" rotate={1} style={{ fontSize: 10.5, width: "100%" }}>
          My role: Full-stack development, AWS architecture design, API integration, and dashboard UI.
        </StickyNote>
      </div>

      <PageNumber n={8} side="right" />
    </Page>
  );
}

export function Spread3({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread4.tsx

```tsx
import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 02 · page 09
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#2a5c7a", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            OceanicX
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#2a5c7a", letterSpacing: "0.12em", marginTop: 3 }}>
            CONTAINERIZED APP + MONITORING
          </div>
        </div>
      </div>

      <div style={{
        background: "#0a1525", borderRadius: 6, padding: "12px 14px",
        marginBottom: 14, fontFamily: mono, fontSize: 9,
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      }}>
        <div style={{ color: "rgba(255,255,255,0.4)", marginBottom: 8, fontSize: 8, letterSpacing: "0.12em" }}>
          // architecture
        </div>
        {[
          { label: "[ Nginx Ingress ]", color: "#4fc3f7" },
          { label: "     ↓", color: "rgba(255,255,255,0.3)" },
          { label: "[ App Pods × 3 ]", color: "#a5d6a7" },
          { label: "     ↓", color: "rgba(255,255,255,0.3)" },
          { label: "[ Prometheus → Grafana ]", color: "#ffcc80" },
          { label: "     ↓", color: "rgba(255,255,255,0.3)" },
          { label: "[ MySQL / Redis ]", color: "#ce93d8" },
        ].map((line, i) => (
          <div key={i} style={{ color: line.color, lineHeight: 1.8 }}>{line.label}</div>
        ))}
      </div>

      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it is
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        A production-grade containerized web application deployed on Kubernetes with full observability. Includes custom Prometheus metrics, Grafana dashboards, and automated alerting.
      </p>

      <p style={{ fontSize: 11.5, lineHeight: 1.6, color: inkFaint }}>
        Demonstrates real DevOps practices — from container orchestration to SRE-style monitoring with SLOs and error budgets.
      </p>

      <PageNumber n={9} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 02 · page 10
      </div>

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 18 }}>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Kubernetes</TechTag>
        <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Docker</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Prometheus</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Grafana</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">Nginx</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Node.js</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">MySQL</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Redis</TechTag>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Highlights
      </div>
      {[
        { icon: "⚙️", text: "3-replica Kubernetes deployment with auto-scaling" },
        { icon: "📈", text: "Custom Prometheus metrics for request latency, error rates" },
        { icon: "🖥️", text: "Grafana dashboards with alerting rules" },
        { icon: "🔄", text: "CI/CD pipeline with rolling deployments" },
        { icon: "🔒", text: "Kubernetes Secrets for secure config management" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ fontSize: 13, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11.5, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{
          padding: "5px 12px", borderRadius: 2,
          background: navy, color: "#faf6f0",
          fontFamily: mono, fontSize: 10, letterSpacing: "0.06em",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/vaibhav/oceanicx
        </div>
      </div>

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#ffd6d6" rotate={-1} style={{ fontSize: 10.5 }}>
          My role: Entire infrastructure setup — K8s manifests, Docker compose, Prometheus config + Grafana dashboards.
        </StickyNote>
      </div>

      <PageNumber n={10} side="right" />
    </Page>
  );
}

export function Spread4({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread5.tsx

```tsx
import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 03 · page 11
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#2a5c3f", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            CoWrite
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#2a5c3f", letterSpacing: "0.12em", marginTop: 3 }}>
            COLLABORATIVE NOTES APPLICATION
          </div>
        </div>
      </div>

      <div style={{
        background: "#1a2a1a", borderRadius: 6, padding: "10px 12px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginBottom: 8, padding: "4px 6px", background: "rgba(255,255,255,0.06)", borderRadius: 3 }}>
          {["B", "I", "U", "H1", "H2", "•", "[ ]"].map((t, i) => (
            <span key={i} style={{ fontFamily: mono, fontSize: 9, color: "rgba(255,255,255,0.5)", padding: "1px 3px", background: i === 0 ? "rgba(255,255,255,0.1)" : "transparent", borderRadius: 2 }}>{t}</span>
          ))}
        </div>
        <div style={{ padding: "4px 6px" }}>
          <div style={{ fontFamily: mono, fontSize: 10, color: "#a5d6a7", marginBottom: 4 }}>Project Kickoff Notes</div>
          <div style={{ fontFamily: mono, fontSize: 8.5, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            <div>• Define MVP scope</div>
            <div>• Assign tasks to team</div>
            <div style={{ opacity: 0.5 }}>|_ (cursor blinking)</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: -4, marginTop: 6 }}>
          <span style={{ fontFamily: mono, fontSize: 7, color: "rgba(255,255,255,0.3)", marginRight: 6 }}>3 collaborators live</span>
          {["#ff7043", "#42a5f5", "#66bb6a"].map((c, i) => (
            <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: c, border: "1.5px solid #1a2a1a", marginLeft: i > 0 ? -4 : 0 }} />
          ))}
        </div>
      </div>

      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it does
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        A real-time collaborative notes app — think lightweight Notion. Multiple users can edit the same document simultaneously with conflict-free syncing and live cursors.
      </p>

      <p style={{ fontSize: 11.5, lineHeight: 1.6, color: inkFaint }}>
        Built to solve the problem of fragmented team notes scattered across Slack, email, and Google Docs.
      </p>

      <PageNumber n={11} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 03 · page 12
      </div>

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 18 }}>
        <TechTag>React</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Node.js</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Socket.io</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Express</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">MongoDB</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">Tailwind</TechTag>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Features
      </div>
      {[
        { icon: "⚡", text: "Real-time sync with WebSockets (Socket.io)" },
        { icon: "👥", text: "Live cursors — see collaborators in real-time" },
        { icon: "📝", text: "Rich text editor (bold, italic, headings, lists)" },
        { icon: "🗂️", text: "Organize notes into workspaces and folders" },
        { icon: "🔗", text: "Share links with view/edit permissions" },
        { icon: "⏱️", text: "Document version history" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ fontSize: 12, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11.5, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <div style={{ padding: "5px 12px", borderRadius: 2, background: navy, color: "#faf6f0", fontFamily: mono, fontSize: 10, letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          github.com/vaibhav/cowrite
        </div>
      </div>

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#fff9c4" rotate={-2} style={{ fontSize: 10.5 }}>
          My role: Full-stack — real-time sync engine, rich-text editor integration, MongoDB schema design.
        </StickyNote>
      </div>

      <PageNumber n={12} side="right" />
    </Page>
  );
}

export function Spread5({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread6.tsx

```tsx
import { Page, TechTag, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 04 · page 13
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 3, height: 32, background: "#7a3f2a", borderRadius: 2 }} />
        <div>
          <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy, lineHeight: 1 }}>
            Glove Royale
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: "#7a3f2a", letterSpacing: "0.12em", marginTop: 3 }}>
            MULTIPLAYER ROBLOX COMBAT GAME
          </div>
        </div>
      </div>

      <div style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #0a1525 50%, #1a2a0a 100%)",
        borderRadius: 6, padding: "12px 14px",
        marginBottom: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ fontFamily: sans, fontSize: 10, fontWeight: 700, color: "#ffd700", letterSpacing: "0.15em" }}>
            🥊 GLOVE ROYALE 🥊
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(255,255,255,0.05)", borderRadius: 3, padding: "4px 8px" }}>
          <span style={{ fontFamily: mono, fontSize: 8, color: "#ff7043" }}>❤ 85/100</span>
          <span style={{ fontFamily: mono, fontSize: 8, color: "#ffd700" }}>⚡ Round 3</span>
          <span style={{ fontFamily: mono, fontSize: 8, color: "#42a5f5" }}>👥 12 players</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 12, marginTop: 8, height: 40 }}>
          {[
            { color: "#ff7043", h: 36, label: "P1" },
            { color: "#42a5f5", h: 28, label: "P2" },
            { color: "#66bb6a", h: 32, label: "P3" },
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 2 }}>
              <div style={{ width: 16, height: p.h, background: p.color, borderRadius: "2px 2px 0 0", opacity: 0.8 }} />
              <span style={{ fontFamily: mono, fontSize: 7, color: "rgba(255,255,255,0.4)" }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy, marginBottom: 6 }}>
        What it is
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.7, color: ink, marginBottom: 10 }}>
        A fast-paced multiplayer boxing/combat game on Roblox. Players equip special gloves with unique abilities and fight in real-time arenas. Matchmaking supports up to 16 players.
      </p>

      <p style={{ fontSize: 11.5, lineHeight: 1.6, color: inkFaint }}>
        Built with Roblox Studio and Lua scripting. Implements custom game loops, hitbox detection, and a progression system with unlockable gloves.
      </p>

      <PageNumber n={13} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 16, textTransform: "uppercase" }}>
        project 04 · page 14
      </div>

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10 }}>
        Tech Stack
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, marginBottom: 18 }}>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Roblox Studio</TechTag>
        <TechTag color="#7a3f2a" bg="rgba(122,63,42,0.08)">Lua 5.1</TechTag>
        <TechTag color="#2a5c7a" bg="rgba(42,92,122,0.08)">DataStore API</TechTag>
        <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">RemoteEvents</TechTag>
        <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Tweening</TechTag>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 10, marginTop: 12 }}>
        Game Features
      </div>
      {[
        { icon: "🥊", text: "16 unique gloves — each with custom abilities and animations" },
        { icon: "⚔️", text: "Hitbox-accurate real-time combat system" },
        { icon: "🏆", text: "Leaderboards, ranked matchmaking, win streaks" },
        { icon: "🎮", text: "Smooth player controller with custom animations" },
        { icon: "💾", text: "Persistent progression: unlocks, stats, achievements" },
        { icon: "🎯", text: "Anti-exploit systems with server-side validation" },
      ].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ fontSize: 12, flexShrink: 0 }}>{f.icon}</span>
          <span style={{ fontSize: 11.5, lineHeight: 1.55, color: ink }}>{f.text}</span>
        </div>
      ))}

      <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
        {[
          { val: "500+", label: "Players" },
          { val: "16", label: "Gloves" },
          { val: "4", label: "Arenas" },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "8px", border: "1px solid rgba(44,24,16,0.1)", borderRadius: 3, textAlign: "center" as const }}>
            <div style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: "#7a3f2a" }}>{s.val}</div>
            <div style={{ fontFamily: mono, fontSize: 8, color: inkFaint, marginTop: 2, letterSpacing: "0.08em" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#ffd6d6" rotate={2} style={{ fontSize: 10.5 }}>
          My role: Solo dev — scripted all server & client logic, designed game mechanics, built UI systems in Lua.
        </StickyNote>
      </div>

      <PageNumber n={14} side="right" />
    </Page>
  );
}

export function Spread6({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread7.tsx

```tsx
import { Page, StickyNote, TechTag, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        experience · page 15
      </div>

      <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, marginBottom: 4 }}>
        Experience
      </div>
      <div style={{ fontFamily: hand, fontSize: 13, color: gold, marginBottom: 18 }}>
        — building in the real world
      </div>

      <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 14, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
          <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy }}>
            Software Development Intern
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint }}>2024</div>
        </div>
        <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 8 }}>
          TechCorp Solutions · Remote
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 5 }}>
          {[
            "Developed REST APIs for internal dashboard serving 500+ daily users",
            "Reduced API response time by 40% through query optimization",
            "Built React components integrated with live data feeds",
            "Wrote unit tests covering 85% of new codebase",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
              <span style={{ color: gold, fontSize: 12, flexShrink: 0, lineHeight: 1.5 }}>✦</span>
              <span style={{ fontSize: 11, lineHeight: 1.6, color: ink }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4, marginTop: 8 }}>
          <TechTag>Node.js</TechTag>
          <TechTag>React</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">PostgreSQL</TechTag>
          <TechTag color="#a54232" bg="rgba(165,66,50,0.08)">Docker</TechTag>
        </div>
      </div>

      <div style={{ borderLeft: `3px solid rgba(44,24,16,0.15)`, paddingLeft: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
          <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy }}>
            Open Source Contributor
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint }}>2023–Present</div>
        </div>
        <div style={{ fontFamily: hand, fontSize: 12, color: "rgba(44,24,16,0.45)", marginBottom: 8 }}>
          Various Projects · GitHub
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
          {[
            "Contributed bug fixes and features to developer tools",
            "Maintained documentation for open-source libraries",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
              <span style={{ color: "rgba(44,24,16,0.35)", fontSize: 12, flexShrink: 0, lineHeight: 1.5 }}>✦</span>
              <span style={{ fontSize: 11, lineHeight: 1.6, color: inkFaint }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <PageNumber n={15} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        experience · page 16
      </div>

      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 14 }}>
        Education
      </div>

      <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: 14, marginBottom: 20 }}>
        <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 2 }}>
          B.Tech — Computer Science
        </div>
        <div style={{ fontFamily: hand, fontSize: 12, color: gold, marginBottom: 6 }}>
          University · 2024–2028
        </div>
        <p style={{ fontSize: 11.5, lineHeight: 1.6, color: ink }}>
          Core coursework: Data Structures, Algorithms, OS, DBMS, Computer Networks, Cloud Computing.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4, marginTop: 8 }}>
          <TechTag color="#5c2a7a" bg="rgba(92,42,122,0.08)">CGPA: 9.2</TechTag>
          <TechTag color="#2a5c3f" bg="rgba(42,92,63,0.08)">Dean's List</TechTag>
        </div>
      </div>

      <Divider />

      <div style={{ fontFamily: serif, fontSize: 14, fontWeight: 700, color: navy, marginBottom: 12, marginTop: 12 }}>
        What I've picked up
      </div>

      {[
        { area: "Code Quality", note: "Writing clean, tested, maintainable code" },
        { area: "Team Collaboration", note: "Git workflows, PRs, code reviews" },
        { area: "Agile / Sprints", note: "Jira, standups, retrospectives" },
        { area: "System Design", note: "Designing scalable backend systems" },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: gold, marginTop: 5, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: serif, fontSize: 11.5, fontWeight: 700, color: navy }}>{item.area}</div>
            <div style={{ fontSize: 11, color: inkFaint, lineHeight: 1.5 }}>{item.note}</div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-14" style={{ left: 32, right: 32 }}>
        <StickyNote color="#d6e8ff" rotate={-1} style={{ fontSize: 11 }}>
          Always learning. Every project teaches something new. 📚
        </StickyNote>
      </div>

      <PageNumber n={16} side="right" />
    </Page>
  );
}

export function Spread7({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread8.tsx

```tsx
import { Page, Stamp, StickyNote, PageNumber, Divider, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

interface BadgeProps {
  title: string;
  event: string;
  date: string;
  result: string;
  color: string;
}

function HackBadge({ title, event, date, result, color }: BadgeProps) {
  return (
    <div style={{
      border: `1.5px solid ${color}33`,
      borderRadius: 4,
      padding: "10px 12px",
      background: `${color}08`,
      marginBottom: 10,
      position: "relative" as const,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: serif, fontSize: 12.5, fontWeight: 700, color: navy }}>{title}</div>
          <div style={{ fontFamily: mono, fontSize: 9, color, marginTop: 2, letterSpacing: "0.06em" }}>{event}</div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, color: inkFaint, textAlign: "right" as const }}>
          <div>{date}</div>
          <div style={{ color, marginTop: 2 }}>{result}</div>
        </div>
      </div>
    </div>
  );
}

function LeftPage() {
  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        hackathons · page 17
      </div>

      <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: navy, marginBottom: 4 }}>
        Hackathons &
      </div>
      <div style={{ fontFamily: serif, fontSize: 20, fontWeight: 700, color: gold, marginBottom: 4 }}>
        Achievements
      </div>
      <div style={{ fontFamily: hand, fontSize: 13, color: "rgba(44,24,16,0.45)", marginBottom: 18 }}>
        — building under pressure
      </div>

      <HackBadge
        title="Smart India Hackathon"
        event="National Level · Ministry of Education"
        date="Nov 2024"
        result="🏅 Finalist"
        color="#c9863a"
      />

      <HackBadge
        title="HackWithInfy"
        event="Infosys Hackathon"
        date="Sep 2024"
        result="🥈 2nd Place"
        color="#2a5c7a"
      />

      <HackBadge
        title="University Hack 2024"
        event="Internal Hackathon"
        date="Mar 2024"
        result="🥇 Winner"
        color="#2a5c3f"
      />

      <HackBadge
        title="MLH Local Hack Day"
        event="Major League Hacking"
        date="Dec 2023"
        result="✅ Participant"
        color="#5c2a7a"
      />

      <div className="absolute bottom-14 right-8" style={{ display: "flex", flexDirection: "column" as const, gap: 8, alignItems: "center" }}>
        <div style={{
          transform: "rotate(12deg)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 56, height: 56, borderRadius: "50%",
          border: `2.5px solid ${gold}`,
          color: gold, fontFamily: sans, fontSize: 7.5, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase" as const,
          textAlign: "center" as const, lineHeight: 1.3, padding: 6, opacity: 0.75,
        }}>
          HACK<br />VETERAN
        </div>
      </div>

      <PageNumber n={17} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        achievements · page 18
      </div>

      <div style={{ fontFamily: serif, fontSize: 15, fontWeight: 700, color: navy, marginBottom: 14 }}>
        Milestones & Certifications
      </div>

      {[
        {
          icon: "☁️",
          title: "AWS Cloud Practitioner",
          sub: "Amazon Web Services · 2024",
          color: "#a54232",
        },
        {
          icon: "🐳",
          title: "Docker Certified",
          sub: "Docker, Inc. · 2024",
          color: "#2a5c7a",
        },
        {
          icon: "⚙️",
          title: "Kubernetes Fundamentals",
          sub: "Linux Foundation · 2024",
          color: "#5c2a7a",
        },
        {
          icon: "🏗️",
          title: "System Design Fundamentals",
          sub: "Self-directed learning · 2024",
          color: "#2a5c3f",
        },
      ].map((cert, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, padding: "8px 10px", border: "1px solid rgba(44,24,16,0.08)", borderRadius: 3, background: "rgba(255,255,255,0.3)" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>{cert.icon}</span>
          <div>
            <div style={{ fontFamily: serif, fontSize: 12, fontWeight: 700, color: navy }}>{cert.title}</div>
            <div style={{ fontFamily: mono, fontSize: 9, color: cert.color, marginTop: 2 }}>{cert.sub}</div>
          </div>
        </div>
      ))}

      <Divider style={{ margin: "14px 0" }} />

      <div style={{ fontFamily: hand, fontSize: 14, color: navy, marginBottom: 10 }}>
        By the numbers:
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { val: "4+", label: "Hackathons" },
          { val: "4", label: "Projects shipped" },
          { val: "500+", label: "GitHub commits" },
          { val: "3", label: "Certs earned" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" as const, padding: "8px", border: "1px dashed rgba(44,24,16,0.15)", borderRadius: 3 }}>
            <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, color: navy }}>{s.val}</div>
            <div style={{ fontFamily: mono, fontSize: 8.5, color: inkFaint, letterSpacing: "0.06em" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <PageNumber n={18} side="right" />
    </Page>
  );
}

export function Spread8({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

# FILE: src/app/components/spreads/Spread9.tsx

```tsx
import { Page, StickyNote, PageNumber, hand, serif, mono, ink, navy, gold, inkFaint, sans } from "./PageBase";

interface Props { side: "left" | "right"; }

function LeftPage() {
  const links = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/vaibhav",
      color: navy,
      bg: "rgba(30,45,74,0.07)",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/vaibhav",
      color: "#2a5c7a",
      bg: "rgba(42,92,122,0.07)",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "vaibhav@email.com",
      color: "#a54232",
      bg: "rgba(165,66,50,0.07)",
    },
  ];

  return (
    <Page>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        contact · page 19
      </div>

      <div style={{ marginBottom: 6 }}>
        <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: navy, lineHeight: 1.2 }}>
          Let's build
        </div>
        <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 700, color: gold, lineHeight: 1.2 }}>
          something.
        </div>
      </div>

      <svg width="140" height="12" viewBox="0 0 140 12" style={{ marginBottom: 18 }}>
        <path d="M0 8 Q17.5 2 35 8 Q52.5 14 70 8 Q87.5 2 105 8 Q122.5 14 140 8" stroke={gold} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      <p style={{ fontSize: 12.5, lineHeight: 1.75, color: ink, marginBottom: 20 }}>
        I'm always open to interesting projects, internship opportunities, and conversations about technology. If you're building something cool — I want to hear about it.
      </p>

      <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {links.map((link, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 3,
              background: link.bg,
              border: `1px solid ${link.color}22`,
            }}
          >
            <div style={{ color: link.color, flexShrink: 0 }}>{link.icon}</div>
            <div>
              <div style={{ fontFamily: mono, fontSize: 9, color: link.color, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{link.label}</div>
              <div style={{ fontFamily: sans, fontSize: 11.5, color: ink, marginTop: 1 }}>{link.value}</div>
            </div>
          </div>
        ))}
      </div>

      <PageNumber n={19} side="left" />
    </Page>
  );
}

function RightPage() {
  return (
    <Page style={{ background: "#f5f1e8" }}>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.2em", color: "rgba(44,24,16,0.3)", marginBottom: 20, textTransform: "uppercase" }}>
        contact · page 20
      </div>

      <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", justifyContent: "space-between", paddingBottom: 40 }}>
        <div>
          <div style={{
            padding: "16px 16px",
            borderLeft: `3px solid ${gold}`,
            background: "rgba(201,134,58,0.04)",
            marginBottom: 20,
          }}>
            <div style={{ fontFamily: serif, fontSize: 15, color: navy, lineHeight: 1.6, fontStyle: "italic" }}>
              "The best way to predict the future is to invent it."
            </div>
            <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 6 }}>— Alan Kay</div>
          </div>

          <div style={{ fontFamily: hand, fontSize: 18, color: navy, marginBottom: 12, lineHeight: 1.4 }}>
            Thank you for reading through my portfolio.
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.75, color: ink, marginBottom: 16 }}>
            You've reached the last page. Every project here was built with genuine curiosity and a desire to solve real problems. I'm just getting started.
          </p>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 20,
            background: "rgba(42,92,63,0.08)",
            border: "1px solid rgba(42,92,63,0.2)",
            marginBottom: 16,
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 6px #27c93f88" }} />
            <span style={{ fontFamily: mono, fontSize: 10, color: "#2a5c3f", letterSpacing: "0.06em" }}>
              Available for opportunities
            </span>
          </div>

          <div style={{ marginTop: 8 }}>
            <div style={{ fontFamily: hand, fontSize: 28, color: navy, lineHeight: 1 }}>Vaibhav</div>
            <div style={{ fontFamily: mono, fontSize: 9, color: inkFaint, marginTop: 4, letterSpacing: "0.1em" }}>
              Developer · Builder · CS Student
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 8, opacity: 0.25 }}>
            <svg width="40" height="30" viewBox="0 0 40 30">
              <rect x="2" y="4" width="16" height="22" rx="1" fill={navy} />
              <rect x="22" y="4" width="16" height="22" rx="1" fill={navy} />
              <rect x="18" y="2" width="4" height="26" fill="#c9863a" />
              <line x1="5" y1="10" x2="15" y2="10" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="5" y1="14" x2="15" y2="14" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="5" y1="18" x2="13" y2="18" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="10" x2="35" y2="10" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="14" x2="35" y2="14" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
              <line x1="25" y1="18" x2="33" y2="18" stroke="#faf6f0" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          <div style={{ textAlign: "center" as const, fontFamily: mono, fontSize: 9, color: inkFaint, letterSpacing: "0.12em" }}>
            — fin —
          </div>
        </div>
      </div>

      <PageNumber n={20} side="right" />
    </Page>
  );
}

export function Spread9({ side }: Props) {
  return side === "left" ? <LeftPage /> : <RightPage />;
}
```

---

## Asset/implementation reality check

### 3D character / Three.js status
This repository does not include any of the following in the active source tree:
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `react-three-fiber`
- `Canvas`, `mesh`, `group`, `PerspectiveCamera`, `OrbitControls`
- `.glb`, `.gltf`, `.fbx`, or `.obj` assets

### What the current site is actually using
- React
- Vite
- Framer Motion (`motion/react`)
- CSS 3D transforms
- inline style objects and CSS gradients
- a printed-book design language

### What the current site is not
- It is not a full-screen 3D scene with a persistent canvas.
- It is not a game-like character rig or avatar renderer.
- It is not a GLTF-based asset viewer.
- It is not structured around a `canvas` + `Character3D` + `CursorRig` architecture.

---

## Summary for another AI

Another AI can understand this project quickly by remembering:
- This is a Vite + React portfolio site.
- The whole visual experience is a book metaphor.
- The interaction flow is a closed cover that opens into a spread-based portfolio.
- The portfolio content is not a normal scroll page; it is a page-turning interface.
- The design language uses paper textures, serif/sans handwriting combinations, soft gold/navy palette, and layered geometry tones.
- The app is controlled by local React state and Framer Motion rather than a 3D engine.
- No 3D model pipeline or persistent 3D canvas currently exists in this repository.

This file is intended to serve as a one-file reference for future modifications without requiring access to the original project tree.
