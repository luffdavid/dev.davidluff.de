import { tool } from 'ai';
import { z } from 'zod';
import { person, education, getAge } from '@/data/portfolio';

export const getPresentation = tool({
  description:
    'Dieses Tool liefert eine kurze persönliche Vorstellung von David Luff. Nutze es für Fragen wie "Wer bist du?" oder "Erzähl mir etwas über dich".',
  parameters: z.object({}),
  execute: async () => {
    const age = getAge(person.birthday);
    const latestEdu = education[0];
    return {
      presentation: `Ich bin ${person.name}, ${age} Jahre alt und lebe in ${person.location}.\n${latestEdu.degree} (${latestEdu.school}, ${latestEdu.year}).\nIch liebe Softwareentwicklung, KI, Tech und funktionierende Produkte mit Mehrwert.`,
    };
  },
});