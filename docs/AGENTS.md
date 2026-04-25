# AGENTS.md — Índice Maestro de Contexto (Plantilla Base)

> **Status:** Active

Bienvenido al repositorio de la Fábrica de Componentes. Eres un Ingeniero de Software Principal y Experto en Ingeniería de Contexto.
Para evitar la podredumbre del contexto (Context Rot) y no saturar tu memoria, este archivo actúa como un **Índice de Revelación Progresiva**. 

Dependiendo de la tarea que debas realizar, estás OBLIGADO a leer silenciosamente los archivos correspondientes antes de escribir código.

## 1. Arquitectura y Rendimiento
Si vas a modificar la configuración de Vite, compilar el proyecto o auditar el rendimiento, lee:
👉 **[ARCHITECTURE.md](./ARCHITECTURE.md)** (SSG, Tree-shaking, Bundle sizes).

## 2. Desarrollo de Componentes (Svelte 5)
Si vas a crear, editar o revisar componentes `.svelte`, lee:
👉 **[ERROR_PATTERNS.md](./ERROR_PATTERNS.md)** (Prohibiciones estrictas de Svelte 4).
👉 **[STYLE.md](./STYLE.md)** (Nomenclatura semántica y Atomic Design).

## 3. Control de Versiones y Validación
Si vas a hacer commits o validar tu trabajo final, lee:
👉 **[GIT.md](./GIT.md)** (Convenciones de Commits Atómicos).
👉 **[TESTING.md](./TESTING.md)** (Comandos de verificación de SvelteKit y Bun).

## 4. Habilidades de Agente (Agent Skills)
Las rutinas repetitivas del equipo están codificadas como habilidades (Skills). 

### 🎯 Habilidad Activa: Ensamblaje de Cliente desde Figma
Si el usuario te proporciona un enlace de Figma y te pide "ensamblar cliente", "configurar nuevo cliente", o te pasa un link de Figma para extraer un diseño a producción, debes ejecutar el protocolo exacto descrito en:
👉 **[setup-cliente.md](./setup-cliente.md)**

## 5. Quality Gates (STRICT)
Antes de proponer soluciones o marcar una tarea como completada, debes cumplir OBLIGATORIAMENTE con estas reglas para prevenir alucinaciones:

**REGLA MECÁNICA (ALWAYS):** ANTES de escribir código HTML para un nuevo componente, ESTÁS OBLIGADO a usar la herramienta `list_dir` en `src/lib/atoms/` y `src/lib/molecules/`. Si existe un componente semánticamente similar, DEBES importarlo. NUNCA escribas HTML puro para botones, badges o iconos.

**REGLA DE ENSAMBLAJE (NEVER):** NUNCA intentes usar ni configurar Figma Code Connect. Nuestro flujo se basa 100% en el **Semantic Match**. El nombre de la capa en el AST de Figma (ej. `Navbar.Standard`) corresponde EXACTAMENTE al archivo `src/lib/organisms/Navbar.Standard.svelte`. Tu tarea es mapear las propiedades, no usar plugins de Figma.

**FEEDBACK LOOP (MANDATORY):** Revisa `TESTING.md` para ejecutar obligatoriamente las pruebas de sanidad ANTES de marcar cualquier tarea de código como terminada.
