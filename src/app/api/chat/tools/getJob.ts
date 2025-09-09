import { tool } from 'ai';
import { z } from 'zod';

export const getJob = tool({
  description:
    "Zusammenfassung, welche Art von Jobs ich suche – plus Kontaktinfos. Nutze dieses Tool, wenn nach meinem Job oder Kontaktmöglichkeit gefragt wird.",
  parameters: z.object({}),
  execute: async () => {
    return `Das suche ich 👇

- 📅 **Start**: ab Februar/März 2026
- 🌍 **Ort**: bevorzugt **München** oder auch remote
- 🧑‍💻 **Fokus**: Full-Stack Webentwicklung / Frontend-Entwicklung / Backend-Entwicklung, KI-Agents
- 🛠️ **Stack**: Java, JavaScript, TypeScript, HTML, CSS, React/Next.js, Quarkus, Spring Boot und vieles mehr
- 🔥 Schnell in der Umsetzung, noch schneller im Lernen, extrem hungrig auf große Herausforderungen

📬 **Kontakt**:
- E-Mail: kontakt@davidluff.de
- LinkedIn: https://www.linkedin.com/in/david-luff-228985223/
- GitHub: https://github.com/luffdavid

    `;
  },
});
