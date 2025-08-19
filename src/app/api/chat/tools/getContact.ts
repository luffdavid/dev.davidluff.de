import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Dieses Tool zeigt meine Kontaktinformationen.',
  parameters: z.object({}),
  execute: async () => {
    return "Oben findest du meine Kontaktdaten. Melde dich gern – ich antworte so schnell wie möglich 😉";
  },
});
