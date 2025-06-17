"use client";
import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import MaybeMotion from "@/components/MaybeMotion";

const Projects: React.FC = () => (
  <section
    id="projects"
    className="flex flex-col justify-center items-center w-full max-w-[1000px] py-24 mx-auto"
  >
    <MaybeMotion
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      {/* Section header */}
      <div className="flex items-center w-full mb-12 text-2xl md:text-3xl">
        <h2 className="flex gap-2 font-bold items-baseline text-off-white items-center">
          <span className="font-mono text-green-accent text-lg">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="flex-1 h-px bg-gray-accent ml-4 opacity-25" />
      </div>

      {/* Mobile layout: text-over-image overlay */}
      <div className="md:hidden space-y-12 w-full">
        {projects.map((p) => (
          <div key={p.title} className="relative w-full min-h-[350px]">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-md overflow-hidden z-10 focus:outline-none focus:ring-2 focus:ring-green-accent"
              aria-label={`View ${p.title} on GitHub`}
              tabIndex={0}
            >
              <Image
                src={p.image}
                alt={p.title}
                width={800}
                height={500}
                className="w-full h-full aspect-[8/5] object-cover pointer-events-none"
              />
              <div className="absolute inset-0 w-full h-full bg-green-accent/10" />
              <div className="absolute inset-0 w-full h-full bg-primary-blue/90" />
            </a>
            <div className="relative flex flex-col min-h-[350px] p-6 rounded-md justify-between z-20">
              <div>
                <p className="text-sm font-mono text-green-accent">
                  {p.subtitle}
                </p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-accent"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <h3 className="text-2xl font-bold text-off-white">
                    {p.title}
                  </h3>
                </a>
              </div>
              <p className="text-off-white">{p.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4 justify-start">
                {p.tech.map((t) => (
                  <li key={t} className="text-sm font-mono text-off-white">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-4 text-off-white justify-start">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-accent"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <Github />
                </a>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-accent"
                    aria-label={`View ${p.title} external link`}
                  >
                    <ExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block space-y-24 w-full">
        {projects.map((p, i) => {
          const isReversed = i % 2 === 1;
          return (
            <MaybeMotion
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full"
              key={i}
            >
              <div
                key={p.title}
                className={`flex flex-col w-full md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image as link */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-[70%] aspect-[8/5] rounded overflow-hidden self-start relative group z-0 block focus:outline-none focus:ring-2 focus:ring-green-accent"
                  aria-label={`View ${p.title} on GitHub`}
                  tabIndex={0}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Green overlay with fade on hover */}
                  <div className="absolute inset-0 w-full h-full bg-green-accent/20 transition-opacity duration-150 opacity-100 group-hover:opacity-0" />
                  <div className="absolute inset-0 w-full h-full bg-primary-blue/50 transition-opacity duration-150 opacity-100 group-hover:opacity-0" />
                </a>

                {/* Text card */}
                <div
                  className={`w-full md:w-[70%] flex flex-col justify-around z-10 ${
                    isReversed
                      ? "md:-mr-[10%] text-left"
                      : "md:-ml-[10%] text-right"
                  }`}
                >
                  <div>
                    <p className="text-sm font-mono text-green-accent">
                      {p.subtitle}
                    </p>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-accent"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <h3 className="text-2xl font-bold text-off-white hover:text-green-accent">
                        {p.title}
                      </h3>
                    </a>
                  </div>
                  <p className="text-off-white bg-secondary-blue rounded-md p-6 shadow-md">
                    {p.description}
                  </p>

                  <ul
                    className={
                      "flex flex-wrap gap-2 mb-4 " +
                      (isReversed ? "justify-start" : "justify-end")
                    }
                  >
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="text-sm font-mono text-gray-accent"
                      >
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
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-accent"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <Github />
                    </a>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-accent"
                        aria-label={`View ${p.title} external link`}
                      >
                        <ExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MaybeMotion>
          );
        })}
      </div>
    </MaybeMotion>
  </section>
);

export default Projects;
