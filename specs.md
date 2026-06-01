# Portfolio 2 - Codebase Specifications

## Overview
This is a modern, highly interactive portfolio web application built for "Siddharth Kolipaka". The project uses Next.js (App Router), React, and TailwindCSS, and relies heavily on `motion/react` (Framer Motion) for sophisticated micro-animations and interactive UI elements.

## Tech Stack
- **Framework:** Next.js 15.5.4 (App Router)
- **Library:** React 19.1.0
- **Styling:** TailwindCSS 4, PostCSS
- **Animations:** `motion/react` (Framer Motion)
- **Language:** TypeScript
- **Fonts:** `next/font/google` (Bangers)

## Directory Structure
- `/src/app`: Contains the main Next.js App Router files (`layout.tsx`, `page.tsx`, `globals.css`).
- `/src/_components`: Reusable UI components. Holds several "Slide" components (`Slide1.tsx`, `Slide2.tsx`, etc.), alongside their responsive variants (e.g., `Slide1large.tsx`, `Slide1small.tsx`) and `Menusmall.tsx`.
- `/public`: Static assets like images (`image.jpg`, `arc-reactor.webp`) and `favicon.ico`.

## Key Components

### 1. `src/app/page.tsx`
The entry point of the application. It acts as a container for the portfolio slides. Currently, it renders `Slide1` while other slides (`Slide2` to `Slide5`) are commented out for future implementation.

### 2. `src/app/layout.tsx`
The root layout of the app. It configures the HTML document structure, imports global CSS, and sets the metadata (Title: "Siddharth Kolipaka", Description: "Portfolio website of Siddharth Kolipaka").

### 3. Responsive Slide Strategy (`Slide1.tsx` & `Slide2.tsx`)
Slide wrappers like `Slide1.tsx` and `Slide2.tsx` handle responsiveness natively using pure CSS. Both mobile and desktop subcomponents are rendered concurrently in the DOM, with their visibility toggled via Tailwind's display utilities (`block lg:hidden` and `hidden lg:block`). This approach eliminates layout shifts (CLS) and Server-Side Rendering (SSR) hydration mismatches.

### 4. Interactive Slide Components (`Slide1large.tsx` & `Slide1small.tsx`)
These components are the core visual elements of the landing page. They feature:
- **Immersive Animations:** Elements scale, rotate, and fade in/out using `motion.div`.
- **Hover/Click States:** A central "arc-reactor" image acts as a trigger. When hovered or clicked, it toggles a state (`hov`) that dynamically alters the background, typography layout, and spacing (e.g., separating the text "SIDDHARTH" and "KOLIPAKA" to reveal a hidden background).
- **Typography:** Custom Google Font ("Bangers") is applied to bold textual elements.
- **Visuals:** Uses Next.js `<Image />` for optimized background images and center graphics, utilizing `mix-blend-difference` to create striking contrasting text effects.



## Design Aesthetic
The application emphasizes a **dynamic, premium, and bold aesthetic**. It implements deep contrasts (dark mode by default, bright highlight colors like `#9F0B1B` and `#3B82F6`), heavy interactive animations, glassmorphism-style layer separation, and dynamic spacing dependent on user interaction. 

## Future Development (To-Do)
As per the `README.md` and the commented-out code in `page.tsx`, the immediate next steps involve completing the subsequent sections of the portfolio (`Slide2` through `Slide5`), expanding the navigation menu functionality (`Menusmall.tsx`), and adding content for those sections.
