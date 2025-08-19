import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Dieses Tool liefert eine kurze persönliche Vorstellung von David Luff. Nutze es für Fragen wie "Wer bist du?" oder "Erzähl mir etwas über dich"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        'Ich bin David Luff, 22 Jahre alt und lebe in München. Aktuell mache ich ein duales Studium bei MediaMarktSaturn. Ich liebe Softwareentwicklung, KI, Tech und funktionierende Produkte mit Mehrwert'
    };
  },
});
