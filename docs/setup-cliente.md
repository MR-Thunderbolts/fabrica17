# Habilidad: Configuración y Ensamblaje de Nuevo Cliente

**Disparador:** Cuando el usuario pida "Configurar nuevo cliente" o "Ensamblar cliente para esta URL".

## Contexto de Ejecución
Esta habilidad asume que la librería de componentes base está lista en `src/lib/`. Tu objetivo es actuar como ensamblador e inyector de la identidad visual del cliente.

## Flujo de Ejecución Automático

### 1. Extracción (Figma MCP)
Conéctate a la URL de Figma proporcionada por el usuario usando tu servidor MCP. Ejecuta las herramientas necesarias.

### 2. Sincronización de Identidad & Fallback Protocol
Extrae los Design Tokens exactos (colores, tipografías, radios) de Figma.
Crea o sobrescribe el archivo de tokens de marca (ej. `client-brand.css`) con las variables CSS que sobrescriben los defaults de `tokens.css`.

**PROTOCOLO DE ASSETS (Fuentes e Iconos):**
- **Por defecto:** Utiliza Google Fonts (CDN) y Material Symbols (`unplugin-icons`).
- **Green Coding Opt-in (si el usuario lo pide):** Descarga fuentes locales, y extrae los iconos como componentes SVG puros.

### 3. Mapeo de Componentes
Analiza el lienzo de Figma e identifica los componentes que mapean 1:1 con nuestros componentes locales.
Extrae las propiedades (textos, imágenes).

### 4. Ensamblaje Verde
Genera el código de la página cliente importando EXCLUSIVAMENTE componentes locales de `src/lib/`.
Inyecta las props extraídas. NO uses HTML/CSS en línea.

### 5. Doble Verificación
- **Check #1**: ¿El código respeta `ERROR_PATTERNS.md` (cero Svelte 4)?
- **Check #2**: ¿Todos los elementos visuales son llamados de componentes de la librería?
