import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  bg_colour: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, bg_colour }) => {
  return (
    <Link href={link}>
      <button className="relative inline-flex items-center justify-center group py-1.5 px-2.5 h-10 w-20 text-sm">
        <span className="absolute inset-0 w-full h-full rounded-md bg-green-accent z-0"></span>
        <span
          className={`absolute inset-0 w-full h-full bg-${bg_colour} border rounded-md border-green-accent transition duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 z-10`}
        ></span>
        <span className="inline-flex text-green-accent transition-transform duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 font-mono z-20">
          {text}
        </span>
      </button>
    </Link>
  );
};

export default Button;
