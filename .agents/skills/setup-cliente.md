# Habilidad: Configuración y Ensamblaje de Nuevo Cliente

**Disparador:** Cuando el usuario pida "Configurar nuevo cliente", "Ensamblar cliente para esta URL" o "Ejecuta la habilidad de ensamblar cliente".

## Contexto de Ejecución
Esta habilidad asume que la librería de componentes base `Fábrica17` está construida y lista en `src/lib/`. Tu objetivo NO es crear nuevos componentes de diseño base, sino actuar como ensamblador e inyector de la identidad visual del cliente.

## Flujo de Ejecución Automático

### 1. Extracción (Figma MCP)
Conéctate a la URL de Figma proporcionada por el usuario usando tu servidor MCP.
Ejecuta `get_variable_defs()`, `get_design_context()` y `get_metadata()`.

### 3. Sincronización de Identidad & Fallback Protocol
Extrae los Design Tokens exactos (colores, tipografías, radios) de Figma.
Identifica el "Mode" o tema activo para el cliente.
Crea o sobrescribe el archivo `src/routes/client-brand.css` (o el nombre adecuado según el cliente) con las variables CSS que sobrescriben los defaults. 
Importa este nuevo CSS en el punto de entrada del cliente.

**PROTOCOLO DE ASSETS (Fuentes e Iconos):**
El estado base de Fábrica17 utiliza por defecto Google Fonts (vía CDN) y Material Symbols (vía `unplugin-icons`).
Antes de generar el código, **PREGUNTA AL USUARIO**: *"¿El diseñador te ha provisto fuentes locales y SVGs exportados?"*
- **Si responde NO (Por defecto):** Utiliza el CDN de Google Fonts para las tipografías del diseño, e instala/utiliza `@iconify-json/material-symbols` y `unplugin-icons` para los iconos.
- **Si responde SÍ (Green Coding Opt-in):** Configura la arquitectura de Green Coding estricta. Descarga y aloja las fuentes localmente, y extrae los iconos como componentes SVG puros en `src/lib/atoms/icons` eliminando las dependencias externas.

### 3. Mapeo de Componentes
Analiza el lienzo de Figma (`get_metadata`).
Identifica los componentes que mapean 1:1 con nuestros componentes locales en `src/lib/` (ej. `Navbar/Standard` -> `Navbar.Standard.svelte`).
Extrae las propiedades (props) de las instancias en Figma (textos, links, imágenes).

### 4. Ensamblaje Verde
Lee `ARCHITECTURE.md` y `ERROR_PATTERNS.md` silenciosamente en tu mente (usando tu conocimiento interno o leyendo el archivo) para garantizar que cumplirás con Svelte 5 puro y las normas de Green Coding.
Genera el código de la página cliente (ej. `src/routes/+page.svelte`) importando EXCLUSIVAMENTE nuestros componentes locales de `src/lib/`.
Inyecta las props extraídas.
NO uses HTML/CSS en línea para nada que ya exista en la librería.

### 5. Doble Verificación
- **Check #1**: ¿El código final respeta `ERROR_PATTERNS.md` (cero Svelte 4)?
- **Check #2**: ¿Todos los elementos visuales son llamados de componentes atómicos de la librería, sin alucinaciones?
Comunica explícitamente el resultado de estos checks al usuario al finalizar.
