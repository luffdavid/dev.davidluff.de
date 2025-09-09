import { tool } from 'ai';
import { z } from 'zod';

// Funktion für genaues Alter
function getAge(birthdate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() >= birthdate.getDate());

  if (!hasHadBirthday) {
    age--;
  }
  return age;
}

export const getPresentation = tool({
  description:
    'Dieses Tool liefert eine kurze persönliche Vorstellung von David Luff. Nutze es für Fragen wie "Wer bist du?" oder "Erzähl mir etwas über dich".',
  parameters: z.object({}),
  execute: async () => {
    const age = getAge(new Date(2003, 3, 9)); 
    return {
      presentation: `Ich bin David Luff, ${age} Jahre alt und lebe in München. 
Aktuell mache ich ein duales Studium bei MediaMarktSaturn. 
Ich liebe Softwareentwicklung, KI, Tech und funktionierende Produkte mit Mehrwert.`
    };
  },
});