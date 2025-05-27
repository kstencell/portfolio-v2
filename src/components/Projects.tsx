"use client";
import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

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
        <div key={p.title} className="relative w-full min-h-[350px]">
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <Image
              src={p.image}
              alt={p.title}
              width={800}
              height={500}
              className="w-full h-full aspect-[8/5] object-cover"
            />
            <div className="absolute inset-0 w-full h-full bg-green-accent/10" />
            <div className="absolute inset-0 w-full h-full bg-primary-blue/90" />
          </div>
          <div className="relative flex flex-col min-h-[350px] p-6 rounded-md justify-between">
            <div>
              <p className="text-sm font-mono text-green-accent">
                {p.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-off-white">{p.title}</h3>
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
            <div className="w-full md:w-[70%] aspect-[8/5] rounded overflow-hidden self-start relative group z-0">
              <Image
                src={p.image}
                alt={p.title}
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
              {/* Green overlay with fade on hover */}
              <div className="absolute inset-0 w-full h-full bg-green-accent/20 transition-opacity duration-150 opacity-100 group-hover:opacity-0" />
              <div className="absolute inset-0 w-full h-full bg-primary-blue/50 transition-opacity duration-150 opacity-100 group-hover:opacity-0" />
            </div>

            {/* Text card (70%) overlapping by 10% */}
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
