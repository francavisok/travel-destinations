# Vite React Starter

A modern, high-performance React application scaffolded with **Vite**, **TypeScript**, and **Tailwind CSS**, designed for speed, scalability, and developer experience.

---

## Overview

This project is built to provide a **clean, efficient, and maintainable foundation** for modern React applications.  
It integrates a carefully chosen set of tools and libraries to streamline development, improve performance, and ensure consistent UI/UX patterns.

---

## Tech Stack

### **Core**
- **[React 18](https://react.dev/)** — Declarative UI library for building dynamic interfaces.
- **[Vite](https://vitejs.dev/)** — Next-generation build tool offering instant server start and fast HMR.
- **[TypeScript](https://www.typescriptlang.org/)** — Adds static typing for safer and more predictable code.

### **Styling**
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for rapid UI development.
- **[@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite)** — Native integration of Tailwind into the Vite pipeline for improved performance.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Smartly merges Tailwind class names to prevent conflicts.
- **[class-variance-authority](https://cva.style/)** — Helps manage complex component variants and states cleanly.
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** — Provides lightweight animation utilities within Tailwind.

### **UI Components & Interactions**
- **[Radix UI](https://www.radix-ui.com/)** (`@radix-ui/react-*`) — Accessible and unstyled primitives for consistent and flexible UI components.
- **[cmdk](https://cmdk.paco.me/)** — Command palette component for keyboard-driven interfaces.
- **[lucide-react](https://lucide.dev/)** — Beautiful, consistent icons for React.

### **Routing**
- **[React Router v7](https://reactrouter.com/)** — Declarative and flexible routing for React applications.

### **Data Fetching & State**
- **[@tanstack/react-query](https://tanstack.com/query/v5)** — Powerful data-fetching, caching, and synchronization library.
- **[@tanstack/react-query-devtools](https://tanstack.com/query/v5/docs/devtools)** — Debugging and inspection tools for query management.
- **[@uidotdev/usehooks](https://usehooks.com/)** — Collection of battle-tested React hooks for common use cases.

---

## Development Tools

### **Code Quality**
- **ESLint** + **Prettier** — Ensures consistent formatting and enforces best practices.
- **TypeScript ESLint** — Linting rules specific to TypeScript.
- **eslint-plugin-react-hooks** — Enforces the rules of hooks.
- **eslint-plugin-react-refresh** — Enhances React Fast Refresh during development.
- **knip** — Detects and reports unused files, exports, and dependencies to keep the codebase clean and maintainable.

### **Build System**
- **Vite** — Lightning-fast dev server and optimized production builds.
- **TypeScript Compiler (tsc)** — Type-checking and incremental build support.

---

## Design Decisions

| Area | Decision | Reason |
|------|-----------|--------|
| **Build Tool** | **Vite** | Chosen for its blazing-fast startup, native ESM support, and excellent developer experience. |
| **Type System** | **TypeScript** | Prevents runtime bugs and improves refactoring safety. |
| **Styling** | **Tailwind CSS + CVA** | Provides flexibility and consistency in UI, with composable styling patterns. |
| **UI Primitives** | **Radix UI** | Ensures accessibility and keyboard navigation out of the box. |
| **Data Layer** | **TanStack Query** | Simplifies asynchronous data management and caching. |
| **Routing** | **React Router v7** | Enables structured, nested routing and data-aware navigation. |
| **Linting & Formatting** | **ESLint + Prettier** | Keeps code clean, consistent, and maintainable. |

---

## Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## Project Structure

```
src/
├── assets/          # Static assets (SVGs, images)
├── components/      # Reusable UI components
│   ├── custom/      # Project-specific components
│   └── ui/          # Shared design system components
├── fake-api/        # Mock API layer
│   ├── data/        # Sample JSON
│   └── fake-api.ts  # API simulation logic
├── hooks/queries/   # Custom hooks for TanStack Query
├── lib/             # Utility modules (formatters, helpers, constants)
├── pages/           # Route components
├── types/           # TypeScript definitions
├── App.tsx          # Root component
├── main.tsx         # React entry point (Vite)
├── index.css        # Global styles
├── App.css          # App-level styles
└── vite-env.d.ts    # Vite + TS environment types
```
---

## Development Philosophy

- **Performance-first** — Small bundles, fast startup, and optimized rendering.
- **Composable architecture** — Components and utilities designed to be modular and reusable.
- **Accessibility by design** — Radix UI ensures semantic, accessible components.
- **DX-focused** — Instant feedback via Fast Refresh, TypeScript safety, and clear linting.

---
