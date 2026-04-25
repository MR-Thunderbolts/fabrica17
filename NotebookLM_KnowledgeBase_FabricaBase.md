# KNOWLEDGE BASE: FÁBRICA BASE (SVELTE 5 AGNOSTIC COMPONENT LIBRARY)

## 1. CONCEPTO FUNDAMENTAL Y FILOSOFÍA
Este proyecto representa el estado del arte en la creación de una **Fábrica de Componentes Agnóstica** basada en Svelte 5. Ha sido diseñada con un enfoque riguroso de "Context Engineering" para ser mantenida y escalada operativamente tanto por humanos como por agentes de Inteligencia Artificial Avanzada.

Su propósito fundamental es solucionar la "Deuda de Identidad": el antipatrón de incrustar colores, tipografías y variables de un cliente específico directamente en la lógica del componente.

**Paradigma de Separación (Lógica vs Identidad):**
- **La Fábrica (Librería Base):** Es estrictamente daltónica, neutral y agnóstica. Se encarga de resolver problemas de ingeniería difíciles: accesibilidad (a11y), estado reactivo (Runes de Svelte 5), geometría fluida y física (transiciones). Todo su ecosistema visual está cableado a variables CSS neutrales o grises vacías.
- **El Cliente (Consumidor):** Importa la librería compilada y proporciona un único archivo denominado `client-brand.css`. Este archivo es inyectado en el DOM a nivel `:root` e impregna de identidad (colores de marca, tipografías) a toda la librería en tiempo de ejecución.

**Pilares Técnicos Innegociables:**
1. **Svelte 5 Puro:** Uso exclusivo de Runes (`$state`, `$derived`, `$props`) y Snippets. Svelte 4 está desterrado.
2. **Green Coding Estricto:** Bundle JavaScript minimizado (< 50KB por página), Tree-shaking agresivo nativo, lazy loading asíncrono en medios, formatos WebP/AVIF y prevención de llamadas HTTP externas (CDN).
3. **Atomic Design:** Separación estricta en Atoms, Molecules, Organisms y Templates.
4. **Resiliencia ante IA (Self-Healing):** El repositorio está cableado para educar, auditar y restringir a las Inteligencias Artificiales que trabajen sobre él, previniendo la "Alucinación" y la "Podredumbre de Contexto" (Context Rot).

---

## 2. LA ESTRUCTURA DEL DIRECTORIO `/EXTRACT` Y EL "POR QUÉ" DE CADA ARCHIVO

La carpeta `/EXTRACT` es la "Semilla Pura" del sistema. Cada archivo extraído aquí pasó por un riguroso análisis de valor y fue seleccionado porque, sin él, el ecosistema colapsaría. 

### A. REGLAS Y "CONTEXT ENGINEERING" (`/docs/`)
Los Modelos de Lenguaje Grandes (LLMs) sufren de ventanas de contexto limitadas. En lugar de tener un README caótico, el contexto se dividió usando "Revelación Progresiva" en múltiples archivos Markdown estructurados.

- **`AGENTS.md` (El Prompt del Sistema Viviente):** Es el punto de entrada de la IA. Define los "Quality Gates" mecánicos. Obliga a las IA a usar la herramienta `list_dir` para buscar componentes existentes antes de reescribir HTML (evitando código duplicado). Prohíbe tajantemente el uso de Figma Code Connect, forzando un ensamblaje basado en **Semantic Match** estricto entre las capas de Figma y los nombres de archivos `.svelte`.
- **`ARCHITECTURE.md` (El Manual de Green Coding):** Define los presupuestos de rendimiento, las reglas de optimización de imágenes (`loading="lazy"`) y por qué no se usa JavaScript para Theming (se exige CSS nativo puro).
- **`ERROR_PATTERNS.md` (La Lista Negra):** Contiene la sintaxis Svelte 4 prohibida. Prohíbe explícitamente `$:` (reactividad antigua), `export let`, `<slot/>`, directivas `on:click` y `createEventDispatcher`. Exige sus equivalentes modernos de Svelte 5.
- **`STYLE.md` (El Juez Arquitectónico):** Define la nomenclatura de los componentes (`Proposito.Variante.svelte`). Bloquea que la IA invente nombres genéricos inútiles como `Card.svelte` en favor de semántica real como `Card.Pricing.svelte`.
- **`TESTING.md` (El Feedback Loop):** Es el mecanismo de autocorrección de la IA. Exige que el agente corra `bun run check` obligatoriamente antes de entregar una tarea. Si hay errores de compilación, la IA está forzada mecánicamente a leerlos y repararlos, evitando que el humano reciba código roto.
- **`GIT.md`:** Reglas de Conventional Commits.
- **`DESIGN.md` (El Diccionario de Tokens):** Es el contrato técnico entre los diseñadores (Figma) y los ingenieros. Define las escalas de espaciado, tipografía y colores en escala de grises. Es el mapa que la IA lee para extraer valores de diseño.

### B. MOTORES DE CONFIGURACIÓN (`/config/`)
Estos archivos son los cimientos invisibles que compilan el código y aplican las restricciones de rendimiento.

- **`svelte.config.js` (El Escudo Anti-Deuda):** Contiene un bloque crítico: `compilerOptions: { runes: true }`. Esto rompe intencionalmente la compilación si algún humano o IA intenta escribir Svelte 4, forzando la modernización perpetua. También contiene el adaptador estático (SSG) y la precompresión Brotli/Gzip nativa.
- **`vite.config.ts` (El Optimizador):** Exige `treeshake: { moduleSideEffects: false }`. Esto garantiza que si un cliente importa solo un botón, Vite elimine silenciosamente todo el resto del código del Navbar y el Hero, protegiendo el "Green Coding". También implementa `unplugin-icons` para renderizar SVGs en línea sin cargar pesadas fuentes de íconos web.
- **`package.json`:** Contiene las definiciones `@sveltejs/package`. Es vital porque convierte un sitio web tradicional en una **librería NPM**. Usa el mapa `"exports"` para exponer públicamente el archivo de CSS nativo de la base para que el cliente lo pueda importar.
- **`tokens.css`:** La implementación en CSS real de `DESIGN.md`. Las variables nativas con colores grises neutros listas para ser usadas por todos los componentes de la Fábrica.

### C. LA PLANTILLA DEL CLIENTE (`/utils/`)
- **`client-brand.css`:** Este archivo está documentado con una gigantesca **"ADVERTENCIA PARA IA"**. Explica por qué este archivo JAMÁS debe ser convertido a SCSS o tokens de Javascript. La librería Svelte ya está pre-compilada, por ende, el único mecanismo existente para que los componentes (ya empaquetados) cambien de color, es confiar en la cascada dinámica (runtime) de las "CSS Custom Properties" inyectadas en la etiqueta `:root` del navegador.

### D. EL ESTÁNDAR DE COMPONENTES (`/components/`)
- **`Hero.Split.svelte` (El Componente de Oro):** Este archivo es la muestra maestra de la sintaxis esperada.
    1.  **JSDoc Obligatorio:** Tiene comentarios `@component` detallados en la cabecera explicando sus props y su rol.
    2.  **Svelte 5 Runes:** Usa desestructuración limpia `let { headline, badgeIcon, onPrimaryClick } = $props();`.
    3.  **Manejo de Eventos Moderno:** Elimina `createEventDispatcher` pasando funciones callbacks directamente (`onPrimaryClick = () => {}`).
    4.  **Snippets sobre Slots:** Reemplaza el frágil sistema `<slot/>` utilizando `{#snippet}` y `{@render}`, proporcionando mayor control y type-safety en los hijos del componente.
    5.  **Cero Hardcoding:** Su etiqueta `<style>` usa estrictamente variables como `var(--space-24)` o fluidos `clamp()` en lugar de px absolutos o HEX de colores.

---

## 3. PROCESO DE FLUJO DE TRABAJO Y ENSAMBLAJE (END-TO-END)

Cuando la Fábrica Base está operando y se necesita crear un nuevo cliente/sitio, este es el proceso a seguir (generalmente ejecutado por la habilidad de IA `.agents/skills/setup-cliente.md`):

1. **Inicialización:** Se clona un proyecto SvelteKit nuevo y se instala la librería Fábrica Base vía NPM/GitHub.
2. **Extracción de Identidad:** El Agente de IA lee el link de Figma del diseñador y mapea las variables de color y tipografías. Modifica EXCLUSIVAMENTE el archivo `client-brand.css` en el repositorio del cliente, inyectando los HEX de marca.
3. **Mapeo de Nodos (AST):** El agente usa el MCP Server de Figma para leer el "Design Context" (Árbol de nodos). Ignora Figma Code Connect por completo. Si el diseñador nombró una capa de Figma "Navbar/Centered", la IA busca un Semantic Match y hace un `import { NavbarCentered } from 'agnostic-component-library';`.
4. **Ensamblaje de Plantilla:** La IA genera un archivo `+page.svelte` (basado en `Template.ClientAssembly.svelte`). Construye diccionarios de propiedades (textos, enlaces, títulos extraídos de Figma) y los pasa a los componentes importados. 
5. **Validación:** La IA ejecuta `bun run check`. Si Svelte 5 aprueba el código, la IA da el "Done".

El resultado es un sitio web que carga en milisegundos, es verde, completamente escalable, y cuya deuda técnica se mantiene cercana a cero gracias a las protecciones del sistema base.
