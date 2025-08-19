import { tool } from 'ai';
import { z } from 'zod';

export const getJob = tool({
  description:
    "Zusammenfassung, welche Art Praktikum ich suche – plus Kontaktinfos. Nutze dieses Tool, wenn nach meinem Praktikum oder Kontaktmöglichkeit gefragt wird.",
  parameters: z.object({}),
  execute: async () => {
    return `Das suche ich 👇

- 📅 **Dauer**: 6 Monate ab **September 2025**
- 🌍 **Ort**: bevorzugt **San Francisco** oder generell **USA**
- 🧑‍💻 **Fokus**: KI-Entwicklung, Full-Stack Webapps, SaaS, Agentic Workflows
- 🛠️ **Stack**: Python, React/Next.js, Tailwind CSS, TypeScript, GPT, RAG usw.
- ✅ **Was ich mitbringe**: Erfahrung mit sicheren On-Prem-GPTs (LightOn), Deep-Search, eigenen RAG-Tools sowie Hackathon-Siegen wie **ETH Oxford** & **Paris Blockchain Week**
- 🔥 Schnell in der Umsetzung, noch schneller im Lernen, extrem hungrig auf große Herausforderungen

📬 **Kontakt**:
- E-Mail: kontakt@davidluff.de
- LinkedIn: https://www.linkedin.com/in/david-luff-228985223/
- GitHub: https://github.com/luffdavid

Lass uns zusammen etwas Starkes bauen ✌️
    `;
  },
});
