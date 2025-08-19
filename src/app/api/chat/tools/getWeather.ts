
import { tool } from "ai";
import { z } from "zod";

export const getWeather = tool({
  description:
    "Zeigt dem Nutzer das Wetter in einer angegebenen Stadt",
  parameters: z.object({
    city: z.string().describe("Die Stadt, für die das Wetter angezeigt werden soll"),
  }),
  execute: async ({ city }: { city: string }) => {
    const weatherOptions = ['sonnig', 'bewölkt', 'regnerisch', 'schneit', 'windig'];
    // fake wait for weather data
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return weatherOptions[
      Math.floor(Math.random() * weatherOptions.length)
    ];
  },
});