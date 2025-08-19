import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'Dieses Tool zeigt eine Liste meiner Fähigkeiten.',
  parameters: z.object({}),
  execute: async () => {
    return "Du findest alle meine Fähigkeiten oben.";
  },
});
