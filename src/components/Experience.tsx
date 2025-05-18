import { experience } from "@/data/experience";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience: React.FC = () => (
  <div className="flex flex-col justify-center items-center w-full max-w-[900px] py-24 mx-auto xl:w-3/5">
    {/* Section header */}
    <div className="flex items-center mt-[10px] mb-[40px] w-full self-start">
      <h1 className="flex gap-2 font-bold text-3xl items-baseline text-off-white">
        <span className="font-mono text-green-accent text-2xl">02.</span>
        Experience
      </h1>
      <div className="flex-1 h-px bg-gray-accent mx-4 opacity-25"></div>
    </div>

    <div className="flex flex-col md:flex-row gap-12">
      <Tabs
        defaultValue={experience[0].company}
        className="flex flex-row gap-8 min-w-full"
      >
        {/* Sidebar list */}
        <div className="w-1/5 min-h-[300px] bg-green-accent">
          <TabsList className="flex flex-col w-1/5">
            {experience.map((exp) => (
              <TabsTrigger
                key={exp.company}
                value={exp.company}
                className="text-sm text-gray-accent"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Content panels */}
        <div className="flex-1">
          {experience.map((exp) => (
            <TabsContent
              key={exp.company}
              value={exp.company}
              className="space-y-2"
            >
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
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>

    {/* Tabs */}
  </div>
);

export default Experience;
