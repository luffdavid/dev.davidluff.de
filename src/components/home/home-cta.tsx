"use client";

import { Button } from "@/components/ui/button";
import { questionConfig, questions } from "@/data/quick-questions";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

type HomeCtaProps = {
  goToChat: (query: string) => void;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  displayedPlaceholder: string;
};

export default function HomeCta({
  goToChat,
  input,
  setInput,
  inputRef,
  displayedPlaceholder,
}: HomeCtaProps) {
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "ease", duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "ease", duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={bottomElementVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-center md:items-start md:px-0"
    >
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
                {key === "Übermich" ? "Über mich" : key}
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
        <div className="relative mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
          {input.length === 0 && (
            <span className="pointer-events-none absolute left-6 text-base text-neutral-500 dark:text-neutral-500 cursor-blink">
              {displayedPlaceholder}
            </span>
          )}

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border-none bg-transparent text-base text-neutral-800 focus:outline-none dark:text-neutral-200"
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
  );
}


