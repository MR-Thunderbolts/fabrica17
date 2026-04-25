# ARCHITECTURE.md — Base SSG & Green Coding

> **Status:** Active

## Overview

Esta es una plantilla de librería de componentes Svelte 5 y de generación de sitios estáticos (SSG) diseñada para la máxima eficiencia energética (Green Coding) y alto rendimiento.

## Core Stack

- **Framework:** SvelteKit (Svelte 5, Runes Mode)
- **Runtime & Package Manager:** Bun (`bun install`, `bun run build`)
- **Rendering:** Static Site Generation via `@sveltejs/adapter-static`
- **Bundler:** Vite
- **Styling:** Vanilla CSS Custom Properties (Tokens)

## Green Coding & Performance Directives

Nos adherimos a presupuestos estrictos de rendimiento y utilización de recursos para minimizar la huella de carbono de nuestros sitios:

### 1. Bundle Budgets
- **JavaScript:** < 50KB gzipped total por página.
- **CSS:** < 10KB gzipped total.
- **Tree-shaking:** Vite debe realizar un tree-shake agresivo del código no utilizado de la librería.

### 2. Media Optimization
- **Format:** Usa siempre formatos modernos como `WebP` o `AVIF`.
- **Loading:** Todas las etiquetas `<img>` debajo del pliegue (below the fold) DEBEN tener `loading="lazy"` y `decoding="async"`.
- **Responsive:** Usa `<picture>` con `srcset` para servir tamaños apropiados para el viewport.

### 3. CSS Custom Properties for Theming
- El theming NO DEBE depender de la evaluación en tiempo de ejecución de JavaScript.
- Todas las adaptaciones dinámicas de marca (colores, fuentes, radios) ocurren exclusivamente a través de variables CSS (`--color-primary`) inyectadas a nivel `:root` (ej. sobrescribiendo `tokens.css`).

### 4. Zero External HTTP Requests (Strict Green Coding Opt-In)
Por defecto, la plantilla base puede usar CDNs para prototipado rápido.
**Strict Green Coding Opt-In:** Si se proveen assets locales, todos los iconos deben ser inlinados como componentes SVG (`<IconName />`) y todas las fuentes deben ser alojadas localmente (self-hosted). Bajo este protocolo, no se permiten solicitudes HTTP externas.

## Component Library Publishing

La base se distribuye como un paquete:
- **Build tool:** `@sveltejs/package`
- **Output:** `/dist`
- **Exports:** Definidos en `src/lib/index.ts`.
