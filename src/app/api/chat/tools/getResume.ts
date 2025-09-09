import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Dieses Tool zeigt meinen aktuellen Lebenslauf.',
  parameters: z.object({}),
  execute: async () => {
    return "Du kannst meinen aktuellen Lebenslauf über den obigen Link herunterladen.";
  },
});
