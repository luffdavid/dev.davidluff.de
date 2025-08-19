import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Synto',
    description:
      'Synto ist eine KI-gestützte Oberfläche, die komplexe Blockchain-Interaktionen in einfache, natürliche Sprache umwandelt. Ob Tokens senden, Assets staken, Coins tauschen oder sogar NFTs bzw. Liquidity Pools erstellen – sag Synto einfach, was es tun soll. Keine manuellen Wallet-Interaktionen, kein Jargon. Eines meiner größten Projekte.',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'Web3.js',
      'shadcn-ui',
      'TypeScript',
      'Phantom Wallet',
      'OpenAI API',
      'Vercel AI SDK',
      'Solana Agent kit',
      'Neon',
      'Prisma'
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://synto.fun',
      },
      {
        name: 'Launch Video',
        url: 'https://www.youtube.com/watch?v=4QUE2KgKDUw',
      },
      {
        name: 'X',
        url: 'https://x.com/chainSynto',
      },
      {
        name: 'Technical Video',
        url: 'https://www.youtube.com/watch?v=1CjBLKPUwtA&feature=youtu.be',
      },
      {
        name: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1B3m44mEgv81rJHfjNfTKi147yX4raQed/view?usp=sharing',
      },
      {
        name: 'Usage tutorial',
        url: 'https://www.youtube.com/watch?v=PRu1cfvT2bA',
      }
    ],
    images: [
      {
        src: '/synto1.png',
        alt: 'Synto landing page',
      },
      {
        src: '/synto2.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto3.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto4.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto5.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto6.png',
        alt: 'Synto chat interface',
      },
    ],
  },
  {
    title: 'Rrate',
    description:
      'Rrate ist eine spielerische Website, auf der Du Dein Gehalt mit den reichsten Menschen der Welt vergleichen kannst. Probier’s aus – sie ist online!',
    techStack: ['Html', 'Css', 'Javascript'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://rrate.app',
      },
      {
        name: 'github',
        url: 'https://github.com/toukoum/Rrate',
      },
    ],
    images: [
      {
        src: '/rrate1.png',
        alt: 'Rrate landing page',
      },
      {
        src: '/rrate2.png',
        alt: 'Rrate comparison page',
      },
      {
        src: '/rrate3.png',
        alt: 'Rrate comparison page',
      },
    ],
  },
  {
    title: 'Defai',
    description:
      'Wir haben den ETH Oxford Hackathon mit DEFAI gewonnen. DEFAI steht für Decentralized Finance Artificial Intelligence. Es ist eine KI-gestützte Chat-Oberfläche, die On-Chain-Operationen auf Avalanche durch natürliche Sprache vereinfacht – selbst für Nutzer ohne tiefes technisches Wissen.',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Vercel AI SDK',
      'TypeScript',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://dorahacks.io/buidl/22605',
      },
      {
        name: 'github',
        url: 'https://github.com/toukoum/DEFAI',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7299337190151483392/',
      },
      {
        name: 'Youtube Video',
        url: 'https://www.youtube.com/watch?v=N9O7los4-ng&t=34s&ab_channel=Toukoum',
      }
    ],
    images: [
      {
        src: '/defai1.png',
        alt: 'Landing Page of Defai',
      },
      {
        src: '/defai2.png',
        alt: 'Confirmation popup of Defai',
      },
      {
        src: '/defai3.png',
        alt: 'Chatbot of Defai',
      },
      {
        src: '/defai4.jpeg',
        alt: 'Winner team',
      },
    ],
  },
  {
    title: 'Fitgear',
    description:
      'Gewinner beim Gotta Go Hack IA mit Fitgear: einem virtuellen Voice-Verkäufer per QR-Code, um die Relation zwischen Kunden und Verkäufern zu verbessern. Implementiert wurde eine KI-Pipeline mit API-Calls und einem RAG-System für natürliche Sprachinteraktionen.',
    techStack: ['Next.js', 'TailwindCSS', 'OpenAI API', 'Langchain'],
    date: '2024',
    links: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/posts/raphael-giraud-60939519a_hackathon-innovation-sporttech-activity-7210399263774674946-qSXq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC6vwikBVSEkS7XWktWS7y6GR3GHwAlKslc',
      },
    ],
    images: [
      {
        src: '/fitgear2.png',
        alt: 'Fitgear chatbot',
      },
      {
        src: '/fitgear1.png',
        alt: 'Fitgear landing page',
      },
    ],
  },
  {
    title: 'Datai',
    description:
      'DATAI ist ein KI-Agent, der es Nicht-Technikern ermöglicht, Datenbanken in natürlicher Sprache abzufragen – ganz ohne SQL. Gebaut mit Next.js, TailwindCSS, shadcn-ui und der Claude API von Anthropic. Fokus: Einfachheit, Geschwindigkeit und UX.',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Claude API',
      'TypeScript',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/datai',
      },
      {
        name: 'Youtube Video Demo',
        url: 'https://youtu.be/iE0RXjdbQsw',
      }
    ],
    images: [
      {
        src: '/datai1.png',
        alt: 'Datai landing page',
      },
      {
        src: '/datai2.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai3.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai4.png',
        alt: 'Datai chatbot',
      }
    ],
  },
  {
    title: '3D Pong Game',
    description:
      'Transcendance ist das Abschlussprojekt meines 42-Studiengangs: ein 3D-Pong-Spiel mit Multiplayer, Authentifizierung und Echtzeit-Gameplay. Alles von Grund auf – extrem lehrreich und herausfordernd.',
    techStack: ['Django', 'Python', 'JavaScript', 'Websockets', 'PostgreSQL', 'Docker', 'Nginx', 'Web3', 'Solidity'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Transcendance',
      },
    ],
    images: [
      {
        src: '/trans1.png',
        alt: 'Transcendance landing page',
      },
      {
        src: '/trans2.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans3.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans4.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans5.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans6.png',
        alt: 'Transcendance game',
      }

    ],
  },
  {
    title: 'Minishell',
    description:
      'Minishell ist ein Projekt zur Erstellung einer einfachen Shell. Ein super Einstieg in Prozess-Erzeugung und -Verwaltung in C mit grundlegender Unix-Kommandofunktionalität. Anspruchsvoll – und sehr lehrreich.',
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Michelle-42',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Minishell landing page',
      }
    ],
  },
  {
    title: 'YouBot',
    description:
      'YouBot ist ein Python-Bot, der Videos von Pexels scraped, zufällige Songs aus einem Ordner hinzufügt und die Videos automatisch auf YouTube hochlädt – für kontinuierliche Content-Erstellung.',
    techStack: ['Python', 'YouTube API', 'Pexels API'],
    date: '2022',
    links: [
      {
        name: "YouTube Video",
        url: "https://youtu.be/vp1v5mBG7rA "
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/YouBot',
      }
    ],
    images: [
      {
        src: '/youbot1.jpg',
        alt: 'Youbot landing page',
      },
      {
        src: '/youbot2.png',
        alt: 'Youbot chatbot',
      },
    ],
  },
  {
    title: 'Altes Portfolio',
    description:
      'Mein früheres, klassisches Portfolio mit Vanilla HTML, CSS und JS – veredelt durch GSAP-Animationen für ein smoothes, interaktives Erlebnis.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: 'https://toukoum.github.io/oldPortfolio/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/oldport2.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Projektdetails nicht verfügbar</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologien
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup Project',
    title: 'Synto',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Fun Tool',
    title: 'Rrate',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Rrate' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Defai',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Defai' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Fitgear',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Fitgear' }} />,
  },
  {
    category: 'Business Intelligence',
    title: 'Datai',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Datai' }} />,
  },
  {
    category: '42 Project',
    title: '3d Pong Game',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  },
  {
    category: '42 Project',
    title: 'Minishell',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Minishell' }} />,
  },
  {
    category: 'Automation',
    title: 'YouBot',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'YouBot' }} />,
  },
  {
    category: 'Web Development',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
];
