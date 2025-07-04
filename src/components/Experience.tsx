"use client";
import { useState } from "react";
import { experience } from "@/data/experience";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/context/ViewportContext";
import MaybeMotion from "@/components/MaybeMotion";

const Experience: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="flex flex-col justify-start items-center w-full max-w-[800px] py-24 mx-auto sm:min-h-[600px] md:min-h-[550px]"
    >
      <MaybeMotion
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full"
      >
        {/* Section header */}
        <div className="flex items-center mt-[10px] mb-[40px] w-full self-start text-2xl md:text-3xl">
          <h1 className="flex gap-2 font-bold items-baseline text-off-white items-center">
            <span className="font-mono text-green-accent text-lg">02.</span>
            Where I&apos;ve Worked
          </h1>
          <div className="flex-1 h-px bg-gray-accent mx-4 opacity-25" />
        </div>

        {isMobile ? (
          // ─── MOBILE: simple vertical list ─────────────────────
          <div className="flex flex-col space-y-12 w-full">
            {experience.map((exp) => (
              <div key={exp.company} className="space-y-2 w-full">
                <h3 className="text-xl font-semibold text-off-white">
                  {exp.role}{" "}
                  <span className="text-green-accent">@ {exp.company}</span>
                </h3>
                <time className="block text-gray-accent">{exp.dates}</time>
                <ul className="space-y-1">
                  {exp.description.map((line, i) => (
                    <li key={i} className="flex items-start text-gray-accent">
                      <ChevronRight className="w-5 h-5 text-green-accent mr-2 flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          // ─── DESKTOP: tabbed interface ───────────────────────
          <div className="flex flex-row w-full">
            <Tabs
              defaultValue={experience[0].company}
              onValueChange={(val) =>
                setActiveIndex(
                  experience.findIndex((exp) => exp.company === val)
                )
              }
              className="flex-col md:flex-row w-full"
            >
              {/* Sidebar + indicator */}
              <div className="flex flex-col md:flex-row items-top h-[50px] md:h-[200px] md:w-1/4">
                <div className="relative flex-shrink-0 left-0 w-[2px] h-full bg-light-blue-accent z-0">
                  <div
                    className="absolute left-0 w-[2px] bg-green-accent transition-all duration-200 z-10"
                    style={{
                      top: `calc(${activeIndex} * 50px)`,
                      height: "50px",
                    }}
                  />
                </div>
                <TabsList className="flex-1 flex-row md:flex-col h-[50px] md:h-[200px] bg-transparent p-0">
                  {experience.map((exp) => (
                    <TabsTrigger
                      key={exp.company}
                      value={exp.company}
                      className="!flex !justify-center md:!justify-start !rounded-none !shadow-none !border-none w-full md:pl-5 bg-transparent text-gray-accent hover:text-green-accent data-[state=active]:text-green-accent hover:bg-secondary-blue data-[state=active]:bg-secondary-blue font-mono text-sm transition duration-500 ease-in-out"
                    >
                      {exp.company}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Content panels */}
              <div className="w-3/4">
                {experience.map((exp) => (
                  <TabsContent
                    key={exp.company}
                    value={exp.company}
                    className="space-y-2 pl-10 mt-2"
                  >
                    <h3 className="text-xl font-semibold text-off-white">
                      {exp.role}{" "}
                      <span className="text-green-accent">@ {exp.company}</span>
                    </h3>
                    <time className="block text-gray-accent">{exp.dates}</time>
                    <ul className="space-y-1">
                      {exp.description.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-accent"
                        >
                          <ChevronRight className="w-5 h-5 text-green-accent mr-2 flex-shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        )}
      </MaybeMotion>
    </section>
  );
};

export default Experience;
