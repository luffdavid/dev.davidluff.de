/**
 * ============================================================
 *  PORTFOLIO DATA — einzige Quelle aller persönlichen Infos
 * ============================================================
 *  Hier alles ändern, um das Portfolio zu aktualisieren.
 *  Komponenten, KI-Tools und Metadaten lesen alle von hier.
 * ============================================================
 */

import type { Metadata } from 'next';

// ─── Hilfsfunktion ────────────────────────────────────────────────────────────

export function getAge(birthday: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate());
  if (!hasHadBirthday) age--;
  return age;
}

// ─── Person ───────────────────────────────────────────────────────────────────

export const person = {
  name: 'David Luff',
  birthday: new Date(2003, 3, 9), // 9. April 2003
  location: 'München, Deutschland',
  hometown: 'Eichstätt, Bayern',
  handle: '@David.Luff',
  email: 'kontakt@davidluff.de',
  /** Kurzer Teaser, der unter dem Foto auf der Startseite erscheint */
  tagline:
    'Ich studiere Informatik mit Schwerpunkt Künstliche Intelligenz an der Ludwig-Maximilians-Universität München.',
  /** Langer Bio-Text für die Presentation-Komponente */
  bio: 'Hey 👋\nIch bin David. Ich habe meinen Bachelor of Science im Studiengang Wirtschaftsinformatik im Februar 2025 mit der Note 1,4 abgeschlossen. Seit April 2026 bin ich im Masterstudium Informatik mit Schwerpunkt Künstlicher Intelligenz an der LMU in München. Nebenbei arbeite ich als Werkstudent bei MediamarktSaturn Technology im Bereich Softwareentwicklung.',
  /** Profilbild (groß, für Presentation-Sektion) */
  photo: '/profil-david.jpeg',
  /** Rundes Avatar-Bild (für Home-Intro & JobCard) */
  avatar: '/david-rounded3.png',
  socials: {
    github: 'https://github.com/luffdavid',
    linkedin: 'https://www.linkedin.com/in/david-luff-228985223/',
    instagram: 'https://www.instagram.com/daavid.luff',
  },
  funFacts: {
    favoriteTeam: 'Borussia Dortmund',
    weaknesses: 'Ungeduldig – „wenn ich etwas will, dann sofort"',
    strengths: 'Hartnäckig, entschlossen',
    os: 'Mac (Windows ist zu langsam)',
  },
};

// ─── Ausbildung ───────────────────────────────────────────────────────────────

export const education = [
  {
    school: 'Ludwig-Maximilians-Universität München (LMU)',
    degree: 'M.Sc. Informatik (Schwerpunkt Künstliche Intelligenz)',
    grade: '',
    year: 'seit April 2026',
  },
  {
    school: 'TH Ingolstadt',
    degree: 'B.Sc. Wirtschaftsinformatik',
    grade: '1,4',
    year: 'Februar 2025',
  },
  {
    school: 'Gabrieli-Gymnasium Eichstätt',
    degree: 'Abitur',
    grade: '2,0',
    year: '2021',
  },
];

// ─── Berufliche Stationen ─────────────────────────────────────────────────────

export const workExperience = [
  {
    company: 'MediaMarktSaturn Technology',
    role: 'Werkstudent Softwareentwicklung',
    location: 'München',
    since: 'April 2026',
    description:
      'Webshop-Team; verantwortlich für mediamarkt.de / saturn.de. Full-Stack-Entwicklung, APIs, Datenbankarbeit und Prozessoptimierung mit KI.',
  },
   {
    company: 'MediaMarktSaturn Deutschland',
    role: 'Dualer Student Wirtschaftsinformatik',
    location: 'München',
    since: 'September 2022',
    description:
      'Durchlaufen mehrerer IT-Abteilungen, u.a. Webshop-Frontend, Backend-APIs, Datenbanken, KI-gestützte Prozessoptimierung. Enge Zusammenarbeit mit internen Stakeholdern und externen Dienstleistern.',
  },
];

// ─── Jobsuche / Bewerbung ─────────────────────────────────────────────────────

export const jobSearch = {
  /** Titel der JobCard-Karte */
  cardTitle: 'Bewerbung als Werkstudent',
  start: 'nach Vereinbarung',
  location: 'Metropolregion München oder remote',
  focus: [
    'Full-Stack Webentwicklung',
    'Frontend-Entwicklung',
    'Backend-Entwicklung',
    'KI-Agents',
  ],
  /** Absatz "Was ich mitbringe" in der JobCard */
  intro:
    'Über drei Jahre Erfahrung als dualer Student bei MediaMarktSaturn, einem modernen Tech-Unternehmen, in dem ich vielfältige Bereiche kennenlernen konnte – vom Webshop-Frontend über APIs und Datenbanken bis hin zur Prozessoptimierung mit KI. An der Universität habe ich zudem zahlreiche Projekte umgesetzt, bei denen stets die Verbindung von IT und wirtschaftlichem Mehrwert im Mittelpunkt stand.',
  /** Absatz "Goal" in der JobCard */
  goal: 'Ich möchte Teil eines innovativen Teams sein, das Produkte entwickelt, die wirklich einen Unterschied machen. Mein Ziel ist es, schnell zu lernen, mit voller Energie beizutragen und bleibenden Eindruck zu hinterlassen. Ich bin schnell, anpassungsfähig und lerne auch gerne neue Dinge. Ihr benutzt einen anderen Tech-Stack? Kein Problem, ich lerne auch was neues :)',
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    category: 'Frontend-Entwicklung',
    skills: ['HTML', 'CSS', 'TypeScript und JavaScript', 'Next.js', 'React'],
    color: 'bg-blue-50 text-blue-600 border border-blue-200',
  },
  {
    category: 'Backend & Systeme',
    skills: [
      'Python',
      'Java (Spring, Quarkus)',
      'Typescript mit Node.js',
      'Git',
      'GitHub',
      'Docker',
      'GCP',
    ],
    color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  },
  {
    category: 'KI & Fullstack Engineering',
    skills: [
      'Nutzung der APIs von LLM Providers',
      'AI Agents',
      'Prompt Engineering',
      'RAG (Retrieval-Augmented Generation)',
      'Tool routing & calling',
      'Explainable AI',
      'Reinforcement Learning',
    ],
    color: 'bg-purple-50 text-purple-600 border border-purple-200',
  },
  {
    category: 'Soft Skills',
    skills: [
      'Anpassbarkeit',
      'Lernwille & -fähigkeit',
      'Teamwork',
      'Kreativität',
    ],
    color: 'bg-amber-50 text-amber-600 border border-amber-200',
  },
];

// ─── Projekte ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    title: 'Pflegital.de',
    description:
      'Pflegital ist eine prozess- und KI-gesteuerte Plattform zur digitalen Beantragung von Pflegeleistungen. Sie unterstützt Pflegebedürftige und Angehörige dabei, die Verhinderungspflege einfach, transparent und intuitiv zu beantragen. Dieses Projekt habe ich innerhalb der Uni mit anderen Studierenden zusammen gemacht, ich war für den AI-Chatbot verantwortlich.',
    techStack: [
      'Java',
      'TypeScript',
      'Quarkus',
      'shadcn-ui',
      'Langchain4j',
      'BPMN Processes',
      'Docker',
      'NGINX',
      'OpenAI API',
      'Structured output',
    ],
    date: '07 / 2025',
    links: [
      { name: 'Website / Landingpage', url: 'https://pflegital.de/' },
      { name: 'App', url: 'https://app.pflegital.de' },
    ],
    images: [
      { src: '/projects/pflegital/image.png', alt: 'Landing page' },
      { src: '/projects/pflegital/image2.png', alt: 'Landing page' },
      { src: '/projects/pflegital/image3.png', alt: 'Whatsapp Chat mit KI Chatbot' },
      { src: '/projects/pflegital/image4.png', alt: 'Whatsapp Chat mit KI Chatbot' },
      { src: '/projects/pflegital/image5.png', alt: 'Whatsapp Chat mit KI Chatbot' },
    ],
  },
  {
    title: 'ai.davidluff.de',
    description:
      'Ein ChatGPT-Clone, den ich dafür nutze, um Vorlesungsfolien zu verstehen. Das Tool versteht sowohl Text als auch Bilder und ist darauf ausgelegt, Studierenden zu helfen.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    date: '01 / 2025',
    links: [
      { name: 'Website', url: 'https://ai.davidluff.de' },
      { name: 'GitHub', url: 'https://github.com/luffdavid/ai.davidluff.de' },
    ],
    images: [
      { src: '/projects/ai.davidluff.de/image.png', alt: 'Landing page' },
      { src: '/projects/ai.davidluff.de/image2.png', alt: 'Chat' },
      { src: '/projects/ai.davidluff.de/image3.png', alt: 'Chat' },
    ],
  },
  {
    title: 'Best combination app',
    description:
      'Eine Webapp, die ich für das Check24 GenDev Stipendium entwickelt habe. Diese App lässt Nutzer die beste Kombination von Streaminganbietern für ihre Lieblingsklubs vergleichen. Sky, DAZN, Amazon Prime? Wer zeigt was, zu welchem Preis und was ist die günstigste Kombination, um möglichst viele Spiele zu sehen? Das und mehr kann diese App.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Material UI'],
    date: '12 / 2024',
    links: [
      { name: 'Website', url: 'https://best-combination-pwa.web.app' },
      {
        name: 'GitHub',
        url: 'https://github.com/luffdavid/best-combination-web-app',
      },
    ],
    images: [
      { src: '/projects/bc/start.png', alt: 'Landing Page' },
      { src: '/projects/bc/image.png', alt: '' },
      { src: '/projects/bc/image2.png', alt: '' },
      { src: '/projects/bc/image3.png', alt: '' },
    ],
  },
];

// ─── Lebenslauf ───────────────────────────────────────────────────────────────

export const resume = {
  title: 'Lebenslauf von David',
  description: 'Informatiker',
  fileType: 'PDF',
  lastUpdated: 'April 2026',
  fileSize: '0,5 MB',
  previewImageSrc: '/Lebenslauf-preview.png',
  downloadUrl: '/Lebenslauf.pdf',
};

// ─── Sport ────────────────────────────────────────────────────────────────────

export const sport = {
  title: 'Meine Sportlaufbahn',
  description:
    'Seit ich denken kann spiele ich Fußball – ich war schon bei verschiedenen Vereinen wie dem VfB Eichstätt, TSV Weißenburg oder SV Marienstein und aktuell in München beim SC München.',
  photos: [
    { src: '/fussball1.WEBP', alt: 'Bild von mir', caption: '' },
    { src: '/fussball2.WEBP', alt: 'Bild von mir', caption: '' },
    { src: '/fussball3.webp', alt: 'Bild von mir', caption: '' },
  ],
};

// ─── Chat-Platzhalter ─────────────────────────────────────────────────────────

export const chatPlaceholders = [
  'Frag irgendwas über mich…',
  'Zeig mir deine wichtigsten beruflichen Stationen…',
  'Wie kann ich Dich kontaktieren?',
  'Was sind deine Skills?',
];

// ─── Website-Metadaten ────────────────────────────────────────────────────────

export const siteConfig = {
  url: 'https://dev.davidluff.de',
  /** Wird als Next.js Metadata-Objekt exportiert, siehe src/data/metadata.ts */
  metadata: {
    title: `${person.name} – Portfolio`,
    description: 'Interaktives Portfolio mit KI, die Fragen über mich beantwortet.',
    keywords: [
      person.name,
      'Portfolio',
      'Developer',
      'AI',
      'Interactive',
      'Web Development',
      'Full Stack',
      'Next.js',
      'React',
    ],
    authors: [{ name: person.name, url: 'https://dev.davidluff.de' }],
    creator: person.name,
    openGraph: {
      type: 'website' as const,
      locale: 'de_DE',
      url: 'https://dev.davidluff.de',
      title: `${person.name} – Portfolio`,
      description: 'Interaktives Portfolio mit KI, die Fragen über mich beantwortet.',
      siteName: `${person.name} – Portfolio`,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${person.name} – Portfolio`,
      description: 'Interaktives Portfolio mit KI, die Fragen über mich beantwortet.',
      creator: person.handle,
    },
    icons: {
      icon: [{ url: '/favicon.png', sizes: 'any' }],
      shortcut: '/favicon.svg',
      apple: '/apple-touch-icon.svg?v=2',
    },
  } satisfies Metadata,
};
