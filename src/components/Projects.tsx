import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

const Projects: React.FC = () => (
  <section
    id="projects"
    className="flex flex-col justify-center items-center w-full max-w-[1000px] py-24 mx-auto"
  >
    {/* Section header */}
    <div className="flex items-center w-full mb-12 text-2xl md:text-3xl">
      <h2 className="flex gap-2 font-bold items-baseline text-off-white">
        <span className="font-mono text-green-accent">03.</span>
        Some Things I&apos;ve Built
      </h2>
      <div className="flex-1 h-px bg-gray-accent ml-4 opacity-25" />
    </div>

    {/* Mobile layout: text-over-image overlay */}
    <div className="md:hidden space-y-12 w-full">
      {projects.map((p) => (
        <div key={p.title} className="relative w-full">
          <div className="absolute inset-0 rounded-md overflow-hidden bg-secondary-blue">
            {/* <img src={p.image} alt={p.title} className="w-full h-full object-cover" /> */}
          </div>
          <div className="relative p-6 rounded-md shadow-md space-y-4">
            <div>
              <p className="text-sm font-mono text-green-accent">
                {p.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-off-white">{p.title}</h3>
            </div>
            <p className="text-gray-accent">{p.description}</p>

            <ul className="flex flex-wrap gap-2 mb-4 justify-right">
              {p.tech.map((t) => (
                <li key={t} className="text-sm font-mono text-gray-accent">
                  {t}
                </li>
              ))}
            </ul>

            <div className={"flex space-x-4 text-gray-accent justify-right "}>
              <a href="#" className="hover:text-green-accent">
                <Github />
              </a>
              <a href="#" className="hover:text-green-accent">
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="hidden md:block space-y-24 w-full">
      {projects.map((p, i) => {
        const isReversed = i % 2 === 1;
        return (
          <div
            key={p.title}
            className={`flex flex-col w-full md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image placeholder (60%) */}
            <div className="w-full md:w-[70%] aspect-[8/5] rounded overflow-hidden bg-gray-accent self-start">
              {/* <img src={p.image} alt={p.title} className="w-full h-full object-cover"/> */}
            </div>

            {/* Text card (70%) overlapping by 10% */}
            <div
              className={`w-full md:w-[70%] flex flex-col justify-around ${
                isReversed
                  ? "md:-mr-[10%] text-left"
                  : "md:-ml-[10%] text-right"
              }`}
            >
              <div>
                <p className="text-sm font-mono text-green-accent">
                  {p.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-off-white">{p.title}</h3>
              </div>
              <p className="text-gray-accent bg-secondary-blue rounded-md p-6 shadow-md">
                {p.description}
              </p>

              <ul
                className={
                  "flex flex-wrap gap-2 mb-4 " +
                  (isReversed ? "justify-start" : "justify-end")
                }
              >
                {p.tech.map((t) => (
                  <li key={t} className="text-sm font-mono text-gray-accent">
                    {t}
                  </li>
                ))}
              </ul>

              <div
                className={
                  "flex space-x-4 text-gray-accent " +
                  (isReversed ? "justify-start" : "justify-end")
                }
              >
                <a href="#" className="hover:text-green-accent">
                  <Github />
                </a>
                <a href="#" className="hover:text-green-accent">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Projects;
