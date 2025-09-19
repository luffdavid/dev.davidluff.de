import { BriefcaseBusiness, Laugh, Layers, UserRoundSearch } from "lucide-react";

/* ---------- quick-question data ---------- */
export const questions = {
    Übermich: 'Wer bist Du? Ich will mehr über Dich als Person erfahren',
    Projekte: 'Bei welchen Projekten hast Du mitgewirkt? Woran arbeitest Du gerade?',
    Skills: 'Welche Skills hast Du? Gib mir eine Liste über deine technischen Skills.',
    Kontakt: 'Wie kann ich Dich kontaktieren?',
  } as const;
  
  export const questionConfig = [
    { key: 'Übermich', color: '#329696', icon: Laugh },
    { key: 'Projekte', color: '#3E9858', icon: BriefcaseBusiness },
    { key: 'Skills', color: '#856ED9', icon: Layers },
    { key: 'Kontakt', color: '#C19433', icon: UserRoundSearch },
  ] as const;