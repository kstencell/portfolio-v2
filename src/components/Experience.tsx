import { experience } from "@/data/experience";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience: React.FC = () => (
  <section id="experience" className="py-24 max-w-[900px] mx-auto md:w-3/5">
    {/* Section header */}
    <div className="flex items-center mb-12">
      <h2 className="flex items-baseline text-3xl font-bold text-off-white">
        <span className="text-green-accent font-mono text-2xl">02.</span>
        <span className="ml-2">Experience</span>
      </h2>
      <div className="flex-1 h-px bg-gray-accent ml-6 opacity-25" />
    </div>

    {/* Timeline */}

    {/* Tabs */}
    <Tabs defaultValue={experience[0].company} className="flex gap-8">
      {/* Sidebar list */}
      <TabsList className="flex flex-col bg-primary-blue h-full">
        {experience.map((exp) => (
          <TabsTrigger
            key={exp.company}
            value={exp.company}
            className="text-left py-2 pl-4 focus:outline-none"
          >
            {exp.company}
          </TabsTrigger>
        ))}
      </TabsList>

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
  </section>
);

export default Experience;
