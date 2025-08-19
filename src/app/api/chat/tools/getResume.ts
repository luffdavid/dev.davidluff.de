import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Dieses Tool zeigt meinen Lebenslauf.',
  parameters: z.object({}),
  execute: async () => {
    return "Du kannst meinen Lebenslauf über den obigen Link herunterladen.";
  },
});
