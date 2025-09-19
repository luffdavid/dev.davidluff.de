import { GithubIcon, Star } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

interface HomeHeaderProps {
    isMobile: boolean;
    goToChat: (query: string) => void;
}

export default function HomeHeader({ isMobile, goToChat }: HomeHeaderProps) {
    if (isMobile) return null; // Für mobile nichts anzeigen

    return (
        <div className="absolute top-6 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 gap-3">
            {/* Lebenslauf & Jobkarte Button */}
            <button
                onClick={() => goToChat('Lebenslauf und Jobkarte anzeigen')}
                className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition-transform duration-200 hover:bg-white/60 focus:scale-110 hover:scale-105 dark:border-white dark:text-white dark:hover:bg-neutral-800"
            >
                {/* Green pulse dot */}
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>Lebenslauf & Jobkarte</span>
            </button>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              {/* GitHub Button */}
              <a
                href="https://github.com/luffdavid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900 px-4 py-1.5 text-sm font-medium text-white shadow-md transition-transform duration-200 hover:bg-gray-800 focus:scale-105"
            >
                 <Star
          className="fill-yellow-400 text-yellow-400"
          size={18}
          aria-hidden="true"
        />
                <span>Zu meinem GitHub Profil</span>
              </a>
            </div>
        </div>
    );
}