import { Github, Linkedin, Mail } from "lucide-react";
import { person } from "@/data/portfolio";

export default function HomeIntro() {
    return (
        <>
        {/* left: memoji + name + intro */}
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-56 w-52 sm:h-80 sm:w-80">
                <img
                  src={person.avatar}
                  alt={`${person.name} Avatar`}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{person.name}</h2>
              <div className="mt-2 flex gap-4 text-muted-foreground">
                <a href={person.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
                <a href={`mailto:${person.email}`}>
                  <Mail className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
                <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-black dark:hover:text-white" />
                </a>
              </div>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {person.tagline}
              </p>
            </div>
          </div></>
    )
}