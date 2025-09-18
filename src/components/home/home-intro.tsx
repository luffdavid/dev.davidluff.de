import { Github, Linkedin, Mail } from "lucide-react";

export default function HomeIntro() {
    return (
        <>
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
          </div></>
    )
}