"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import MaybeMotion from "@/components/MaybeMotion";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full max-w-[900px] py-24 mx-auto"
    >
      <MaybeMotion
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Section header */}
        <div className="flex items-center mt-[10px] mb-[40px] w-full md:w-3/5 self-start text-2xl md:text-3xl">
          <h1 className="flex gap-2 font-bold items-baseline text-off-white items-center">
            <span className="font-mono text-green-accent text-lg">01.</span>
            About Me
          </h1>
          <div className="flex-1 h-px bg-gray-accent mx-4 opacity-25"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-3/5">
            <div className="flex-col space-y-6">
              <p className="text-md text-gray-accent">
                I&apos;m a software engineer with an acute obsession with
                automation. I love watching the wheels and cogs of my own
                systems click into place, compounding my efforts and boosting
                productivity.
              </p>
              <p className="text-md text-gray-accent">
                At <span className="text-green-accent">Arctic Wolf</span>, I
                help design and maintain the pipeline that delivers updates to
                sensor networks worldwide. As co-founder of{" "}
                <span className="text-green-accent">BKG Software</span>,
                I&apos;ve tackled projects ranging front-end Next.js sites and
                Laravel full-stack projects, Python APIs, and various CI/CD
                solutions. Outside of work, you&apos;ll find me playing guitar,
                tinkering in my home lab, or diving into the latest trend in the
                gaming world.
              </p>
              <p className="text-md text-gray-accent">
                I&apos;ve also had the pleasure and privilege of working at the{" "}
                <span className="text-green-accent">
                  SMART Centre of Applied Research
                </span>{" "}
                and the IT Department at{" "}
                <span className="text-green-accent">Conestoga College</span>.
                Both of which have helped me expand my skill set in hardware
                management and network infrastructure.
              </p>
              <ul className="flex flex-wrap">
                {[
                  "Next.js",
                  "Docker",
                  "Laravel",
                  "Python",
                  "GitHub Actions",
                  "AWS",
                ].map((point) => (
                  <li
                    key={point}
                    className="w-1/2 xs:w-full sm:w-1/3 p-2 flex items-start"
                  >
                    <ChevronRight className="w-6 h-6 text-green-accent mr-2 flex-shrink-0" />
                    <span className="text-md text-gray-accent font-mono">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start justify-center w-full md:w-2/5">
            <div className="relative group aspect-square w-80">
              <div className="absolute inset-0 translate-y-4 translate-x-4 border-2 border-green-accent rounded transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5 z-0" />
              <div className="absolute inset-0 z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Image
                  src="/me.png"
                  alt="Profile picture of Karl Stencell"
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 80vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </MaybeMotion>
    </section>
  );
};

export default AboutMe;
