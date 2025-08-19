
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "Dieses Tool zeigt einige Fotos von David beim Sport.",
  parameters: z.object({}),
  execute: async () => {
    return "Hier sind meine besten Sport-Bilder!";
  },
});