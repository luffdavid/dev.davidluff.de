
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "Dieses Tool zeigt eine Liste aller Projekte von David",
  parameters: z.object({}),
  execute: async () => {
    return "Hier findest du alle meine Projekte (oben)! Frag gern nach Details!";
  },
});