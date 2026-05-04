import { tool } from 'ai';
import { z } from 'zod';
import { person, jobSearch } from '@/data/portfolio';

export const getJob = tool({
  description:
    "Zusammenfassung, welche Art von Jobs ich suche – plus Kontaktinfos. Nutze dieses Tool, wenn nach meinem Job oder Kontaktmöglichkeit gefragt wird.",
  parameters: z.object({}),
  execute: async () => {
    return `Das suche ich 👇

- 📅 **Start**: ${jobSearch.start}
- 🌍 **Ort**: bevorzugt **${jobSearch.location}**
- 🧑‍💻 **Fokus**: ${jobSearch.focus.join(' / ')}
- 🔥 Schnell in der Umsetzung, noch schneller im Lernen, extrem hungrig auf große Herausforderungen

📬 **Kontakt**:
- E-Mail: ${person.email}
- LinkedIn: ${person.socials.linkedin}
- GitHub: ${person.socials.github}
    `;
  },
});
