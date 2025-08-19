
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "Dieses Tool zeigt das Verrückteste, das ich je gemacht habe. Nutze es bei Fragen wie: 'Was ist das Verrückteste, das du je gemacht hast?'",
  parameters: z.object({}),
  execute: async () => {
    return "Oben siehst du ein Foto von mir auf dem Mont Blanc, dem höchsten Berg der Alpen und Europas. Ich war mit Freunden ohne Guide unterwegs – mega Erfahrung! Man sieht auf dem Foto den Wind mit 80 km/h. Das Video zur Tour gibt’s hier: https://www.youtube.com/watch?v=rufGMSgzUOk&ab_channel=Toukoum";
  },
});