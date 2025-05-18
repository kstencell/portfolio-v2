import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "./Experience";

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
    </div>
  );
};

export default Body;
