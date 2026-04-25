# Fábrica Base — Agnostic Component Library

> **Fábrica Base** es una plantilla de librería de componentes construida en Svelte 5, diseñada como la "Semilla Pura" para la construcción de sistemas de diseño a gran escala y sitios web orientados al **Green Coding**.

## 📖 ¿Qué es esto?

Este repositorio es una base arquitectónica "daltónica" e independiente de la marca. Resuelve el problema de la **Deuda de Identidad**: en lugar de codificar los colores, fuentes y radios de un cliente específico en la lógica de los componentes, la Fábrica Base mantiene una estructura pura en grises.

El diseño y la identidad visual (el ADN del cliente) se inyectan dinámicamente en tiempo de ejecución a través de variables CSS (`client-brand.css`), lo que permite que una sola base de código en Svelte 5 pueda servir a cientos de clientes distintos sin fricción.

## 🚀 Características Principales

*   **Svelte 5 Puro:** Uso exclusivo de Runes (`$state`, `$derived`, `$props`) y Snippets. Svelte 4 está estrictamente prohibido a nivel de compilador.
*   **Green Coding:** Presupuestos estrictos de JS (<50KB), CSS (<10KB) y Tree-Shaking silencioso por defecto. Las imágenes utilizan carga diferida asíncrona y no hay dependencias externas de diseño.
*   **Atomic Design:** Organización estricta de componentes en `atoms`, `molecules`, `organisms` y `templates`.
*   **Context Engineering:** La carpeta `docs/` contiene reglas de IA (Quality Gates) diseñadas para educar a los agentes LLM, previniendo alucinaciones y evitando la podredumbre del contexto (Context Rot).

## 🛠️ Estructura del Proyecto

*   `/docs/`: Rieles de acero para Inteligencias Artificiales y Humanos. Contiene reglas arquitectónicas, de estilo y de testing.
*   `/config/`: Motores de configuración (Vite, Svelte, y variables CSS neutrales base).
*   `/components/`: La librería pura en Svelte 5 (Ej. `Hero.Split.svelte`).
*   `/utils/`: Herramientas de puente para el cliente (Ej. la plantilla `client-brand.css`).

## ⚙️ Uso Básico

Para construir la librería y verificar la sanidad de Svelte 5:

```bash
# Validar tipos y sintaxis (Obligatorio)
bun run check

# Compilar la librería para distribución
bun run build:lib
```

> **Para Agentes de IA:** Antes de aportar código, estás OBLIGADO a leer el archivo `docs/AGENTS.md` para entender los Quality Gates y evitar rechazos automatizados.
