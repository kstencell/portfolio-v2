import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Body: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-start max-w-[1600px] ml-auto mr-auto 
            px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]
        "
    >
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <div className="flex items-center justify-center w-full text-gray-accent text-xs mt-12 mb-6">
        Website design inspired by the amazing work of&nbsp;
        <a
          href="https://github.com/bchiang7"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-green-accent">Brittany Chiang</span>
        </a>
      </div>
    </div>
  );
};

export default Body;
