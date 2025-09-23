## AI Portfolio mit Next.js und OpenAI 

Ein modernes, interaktives Portfolio mit Next.js 15, React 19 und Tailwind CSS 4. Enthält eine Chat-Experience mit AI-Backend (OpenAI via `ai` SDK), animierte UI-Komponenten sowie Projekt-, Skill- und Lebenslauf-Sektionen.

### Features
- **AI-Chat**: Streaming-Responses über eine API-Route mit Tool-Aufrufen (Projekte, Skills, Kontakt, Lebenslauf, Präsentation, Sport, Job)
- **Modernes UI**: Tailwind CSS 4, Radix UI, animierte Komponenten
- **Portfolio-Inhalte**: Projekte mit Bildern, Lebenslauf, Skills, Kontakt
- **Next.js App Router**: Saubere Struktur in `src/app`

### Tech-Stack
- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4
- **AI**: `ai` + `@ai-sdk/openai` (Streaming, Tools)
- **UI**: Radix UI, Framer Motion, lucide-react
- **Lint/Format**: ESLint 9, Prettier

---

## Voraussetzungen
- Node.js 18+ (empfohlen 20+)
- Paketmanager: pnpm (empfohlen) oder npm/yarn
- OpenAI API Key (für den Chat): `OPENAI_API_KEY`

## Schnellstart

```bash
# Repository klonen
git clone <REPO_URL> portfolio && cd portfolio

# Abhängigkeiten installieren
pnpm install


# Entwicklung starten
pnpm dev


# App läuft standardmäßig auf http://localhost:3000
```

## Umgebungsvariablen
Für den AI-Chat wird ein OpenAI API Key benötigt. Lege eine `.env.local` im Projektroot an:

```bash
OPENAI_API_KEY=sk-...dein-key...
```

Hinweise:
- Der Key wird vom Paket `@ai-sdk/openai`/`ai` automatisch gelesen.
- In Produktions-Deployments (z. B. Vercel) als Secret/Environment Variable konfigurieren.

## Verfügbare Skripte

```bash
# Entwicklung (HMR)
pnpm dev

# Produktionsbuild
pnpm build

# Produktion lokal starten (nach build)
pnpm start

# Linting
pnpm lint
```

## Projektstruktur (Auszug)

```text
portfolio/
  public/                 # Statische Assets (Bilder, PDFs, Videos)
  src/
    app/
      page.tsx           # Landing/Startseite
      chat/page.tsx      # Chat-Seite
      api/
        chat/
          route.ts       # Chat-API (Streaming, Tools, OpenAI)
          prompt.ts      # System-Prompt / Persona
          tools/         # Tool-Endpunkte (z. B. Projekte/Skills/Resume)
    components/          # UI- und Feature-Komponenten
      chat/              # Chat UI (Bubble, Input, Renderer)
      projects/          # Projekt-Komponenten & Daten
    hooks/               # z. B. Cursor/Outside-Click Hooks
    lib/                 # Utilities
  next.config.ts
  eslint.config.mjs
  postcss.config.mjs
  tailwind (via PostCSS) Konfiguration
```

### Wichtige Module
- `src/app/api/chat/route.ts`: Request-Handling, `streamText`, Tool-Registrierung, Model-Config
- `src/app/api/chat/prompt.ts`: System-Prompt (Persona, Tonalität, Tool-Nutzungsregeln)
- `src/app/api/chat/tools/*`: Serverseitige Tool-Handler (z. B. `getProjects`, `getSkills`, `getResume`)
- `src/components/chat/*`: Chat UI (Input, Nachrichtendarstellung, Tool-Renderer)

### Weitere Hinweise
- Orientiert an https://www.toukoum.fr/ 



