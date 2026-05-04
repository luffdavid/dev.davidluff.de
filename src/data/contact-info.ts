// Re-Export aus portfolio.ts – hier nichts mehr direkt ändern!
import { person } from './portfolio';

export const contactInfo = {
  name: person.name,
  email: person.email,
  handle: person.handle,
  socials: [
    { name: 'LinkedIn', url: person.socials.linkedin },
    { name: 'Instagram', url: person.socials.instagram },
    { name: 'Github', url: person.socials.github },
  ],
};