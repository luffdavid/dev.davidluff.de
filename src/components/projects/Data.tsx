import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Pflegital.de',
    description:
      'Pflegital ist eine prozess- und KI-gesteuerte Plattform zur digitalen Beantragung von Pflegeleistungen. Sie unterstützt Pflegebedürftige und Angehörige dabei, die Verhinderungspflege einfach, transparent und intuitiv zu beantragen. Dieses Projekt habe ich innerhalb der Uni mit anderen Studierenden zusammen gemacht, ich war für den AI-Chatbot verantwortlich',
    techStack: [
      'Java',
      'TypeScript',
      'Quarkus',
      'shadcn-ui',
      'Langchain4j',
      'BPMN Processes',
      'Docker',
      'NGINX',
      'OpenAI API ',
      'Structured output'
    ],
    date: '07 / 2025',
    links: [
      {
        name: 'Website / Landingpage',
        url: 'https://pflegital.de/',
      },
      {
        name: 'App',
        url: 'https://app.pflegital.de',
      },
    ],
    images: [
      {
        src: '/projects/pflegital/image.png',
        alt: 'Landing page',
      },
      {
        src: '/projects/pflegital/image2.png',
        alt: 'Landing page',
      },
      {
        src: '/projects/pflegital/image3.png',
        alt: 'Whatsapp Chat mit KI Chatbot',
      },
      {
        src: '/projects/pflegital/image4.png',
        alt: 'Whatsapp Chat mit KI Chatbot',
      },
      {
        src: '/projects/pflegital/image5.png',
        alt: 'Whatsapp Chat mit KI Chatbot',
      },
    ],
  },
  {
    title: 'ai.davidluff.de',
    description:
      'Ein Chatgpt clone, den ich dafür nutze, um Vorlesungsfolien zu verstehen. Das Tool versteht sowohl Text, als auch Bilder und ist darauf aus, Studierenden zu heöfen',
    techStack: ['Html', 'Css', 'Javascript'],
    date: '01 / 2025',
    links: [
      {
        name: 'website',
        url: 'https://ai.davidluff.de',
      },
      {
        name: 'github',
        url: 'https://github.com/luffdavid/ai.davidluff.de',
      },
    ],
    images: [
      {
        src: '/projects/ai.davidluff.de/image.png',
        alt: 'Landing page',
      },
      {
        src: '/projects/ai.davidluff.de/image2.png',
        alt: 'Chat',
      },
      {
        src: '/projects/ai.davidluff.de/image3.png',
        alt: 'Chat',
      },
    ],
  },
  {
    title: 'Best combination app',
    description:
      'Eine Webapp, die ich für das Check24 GenDev Stipendium entwickelt habe. Diese App lässt Nutzern die beste Kombination von Streaminganbietern für ihre Lieblignsfußballvereine vergleichen. Sky, DAZN, Amazon Prime? Wer zeigt was, zu welchem Preis und was ist die beste Kombination und möglichst viele Spiele zu sehen? Das und mehr kann diese App.',
    techStack: [
      'React',
      'TypeScript',
      'Firebase',
      'Firestore',
      'Material UI',
    ],
    date: '12 / 2024',
    links: [
      {
        name: 'website',
        url: 'https://best-combination-pwa.web.app',
      },
      {
        name: 'github',
        url: 'https://github.com/luffdavid/best-combination-web-app',
      },
    ],
    images: [
      {
        src: '/projects/bc/start.png',
        alt: 'Landing Page',
      },
      {
        src: '/projects/bc/image.png',
        alt: '',
      },
      {
        src: '/projects/bc/image2.png',
        alt: '',
      },
      {
        src: '/projects/bc/image3.png',
        alt: '',
      },
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
    category: 'Studenten Projekt',
    title: 'Pflegital.de',
    src: '/projects/pflegital/image.png',
    content: <ProjectContent project={{ title: 'Pflegital.de' }} />, 
  },
  {
    category: 'Check24 Stipendium',
    title: 'Best combination',
    src: '/projects/bc/image.png',
    content: <ProjectContent project={{ title: 'Best combination app' }} />, 
  },
  {
    category: 'Eigener KI Chatbot',
    title: 'ai.davidluff.de',
    src: '/projects/ai.davidluff.de/image2.png',
    content: <ProjectContent project={{ title: 'ai.davidluff.de' }} />, 
  },
];

