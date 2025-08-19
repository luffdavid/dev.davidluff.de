'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  UserRoundSearch,
  Github,
  Mail,
  Linkedin,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* ---------- quick-question data ---------- */
const questions = {
  Übermich: 'Wer bist Du? Ich will mehr über Dich als Person erfahren',
  Projekte: 'Bei welchen Projekten hast Du mitgewirkt? Woran arbeitest Du gerade?',
  Skills: 'Welche Skills hast Du? Gib mir eine Liste über deine technischen Skills.',
  Kontakt: 'Wie kann ich Dich kontaktieren?',
} as const;

const questionConfig = [
  { key: 'Übermich', color: '#329696', icon: Laugh },
  { key: 'Projekte', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Kontakt', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function HomePage() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Assets für den Chat im Hintergrund vorladen
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    // Auch Videos vorladen
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'prefetch';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          David Luff
        </div>
      </div>

      {/* GitHub button */}
      <div className="absolute top-6 right-8 z-20">
        <GithubButton
          animationDuration={1.5}
          label="Zu meinem Github-Profil"
          size={'sm'}
          repoUrl="https://github.com/luffdavid"
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => goToChat('Suchen Sie nach einem Talent?')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
         Suchen Sie nach einem Talent?
        </button>
      </div>

      {/* header */}
   {/*    <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >

        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          👋Hey, Ich bin David
        </h2>
      
      </motion.div>
 */}
      {/* two-column section: left memoji, right input */}
      <div className="z-10 mt-4 w-full max-w-7xl px-2 md:px-4">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* left: memoji + name + intro */}
          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-56 w-52 sm:h-80 sm:w-80">
                <img
                  src="/david-rounded.png"
                  alt="Hero Memojis"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">David Luff</h2>
              <div className="mt-2 flex gap-4 text-muted-foreground">
                <a href="https://github.com/luffdavid" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
                <a href="mailto:kontakt@davidluff.de">
                  <Mail className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/david-luff-228985223/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
              </div>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Ich bin 22 Jahre alt und studiere aktuell Wirtschaftsinformatik (Abschluss Bachelor im Februar 2026)
              und bin begeisteter Softwareentwickler.
              </p>
            </div>
          </div>

          {/* right: input */}
          <motion.div
            variants={bottomElementVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center md:items-start md:px-0"
          >
            {/* heading above quick buttons */}
            <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
          <h1 className="text-3xl font-bold text-center text-primary mb-6">
    👋 Willkommen – Ich bin David
  </h1>
  <p className="mt-1 text-sm text-muted-foreground text-justify">
    Auf meiner Webseite kannst du mit meinem digitalen AI-Twin alles über mich erfahren. 
    Nutze die Buttons unten, um mehr über meine Projekte, Skills oder Kontaktmöglichkeiten zu erfahren – 
    oder stelle direkt deine eigene Frage in der Chatbar.
  </p>
      </motion.div>
            {/* quick buttons under the chat input */}
            <div className="mt-4 mb-6 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {questionConfig.map(({ key, color, icon: Icon }) => (
                <Button
                  key={key}
                  onClick={() => goToChat(questions[key])}
                  variant="outline"
                  className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
                >
                  <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                    <Icon size={22} strokeWidth={2} color={color} />
                    <span className="text-xs font-medium sm:text-sm">
                      {key === 'Übermich' ? 'Über mich' : key}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) goToChat(input.trim());
              }}
              className="relative w-full max-w-3xl"
            >
              <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Frag etwas über mich…"
                  className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Frage absenden"
                  className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
  {/*     <FluidCursor /> */}
    </div>
  );
}
