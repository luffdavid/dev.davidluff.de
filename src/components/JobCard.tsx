'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';


const JobCard = () => {
  const openMail = () => {
    window.open('mailto:kontakt@davidluff.de', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/david-rounded.png"
              alt="David's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              David Luff
            </h2>
            <p className="text-muted-foreground text-sm">
              Bewerbung als Softwareentwickler
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Startzeitpunkt</p>
            <p className="text-muted-foreground text-sm">
              nach Vereinbarung (Bachelorabschluss Februar 2026)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Ort</p>
            <p className="text-muted-foreground text-sm">
              Metropolregion München oder remote
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium mb-3">Tech stack</p>
            <div className="space-y-4">
              {/* Frontend */}
              <div>
                <p className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wide">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-html5-plain text-orange-500 text-lg"></i> HTML
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-css3-plain text-blue-500 text-lg"></i> CSS
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-javascript-plain text-yellow-400 text-lg"></i> JavaScript
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-typescript-plain text-blue-500 text-lg"></i> TypeScript
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-react-original text-cyan-400 text-lg"></i> React
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-nextjs-original text-white text-lg"></i> Next.js
                  </span>
                </div>
              </div>
              {/* Backend */}
              <div>
                <p className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wide">Backend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-java-plain text-red-500 text-lg"></i> Java
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-quarkus-plain text-blue-500 text-lg"></i> Quarkus
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-spring-original text-green-500 text-lg"></i> Spring Boot
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-nodejs-plain text-green-500 text-lg"></i> Node.js
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-typescript-plain text-blue-500 text-lg"></i> TypeScript
                  </span>
                </div>
              </div>
              {/* DevOps & Tools */}
              <div>
                <p className="text-muted-foreground text-xs font-semibold mb-2 uppercase tracking-wide">DevOps & Tools</p>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-docker-plain text-blue-400 text-lg"></i> Docker
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-git-plain text-orange-500 text-lg"></i> Git
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-github-original text-white text-lg"></i> GitHub
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    <i className="devicon-azuresqldatabase-plain text-sky-500 text-lg"></i> Datenbanken
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-xs text-white">
                    ⚡ AI Agents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          Was ich mitbringe:
        </p>
        <p className="text-foreground text-sm">
          Über drei Jahre Erfahrung als dualer Student bei MediaMarktSaturn, einem modernen Tech-Unternehmen,
          in dem ich vielfältige Bereiche kennenlernen konnte – vom Webshop-Frontend über APIs
          und Datenbanken bis hin zur Prozessoptimierung mit KI. <br />
          An der Universität habe ich zudem zahlreiche Projekte umgesetzt, bei denen stets die
          Verbindung von IT und wirtschaftlichem Mehrwert im Mittelpunkt stand. <br />
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          Ich möchte Teil eines innovativen Teams sein, das Produkte entwickelt, die wirklich einen Unterschied machen.
          Mein Ziel ist es, schnell zu lernen, mit voller Energie beizutragen und bleibenden Eindruck zu hinterlassen.
          Ich bin schnell, anpassungsfähig und lerne auch gerne neue Dinge. Ihr benutzt einen anderen Tech-Stack? Kein Problem, ich lerne auch was neues :)
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Kontaktiere mich!
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
