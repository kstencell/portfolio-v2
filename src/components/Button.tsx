import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  bg_colour: string;
  button_padding?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  bg_colour,
  button_padding = "py-2 px-4",
  target,
  rel,
}) => {
  return (
    <a
      href={link}
      target={target}
      rel={rel}
      className={`relative inline-flex items-center justify-center group text-sm ${button_padding}`}
    >
      {/* bottom layer: green accent shadow */}
      <span className="absolute inset-0 rounded-md bg-green-accent z-0" />

      {/* middle layer: background and border, shifts on hover */}
      <span
        className={`
            absolute inset-0
            bg-${bg_colour}
            border
            rounded-md
            border-green-accent
            transition-transform duration-200 ease-out
            transform group-hover:-translate-x-1 group-hover:-translate-y-1
            z-10
          `}
      />

      {/* top layer: button text, also shifts on hover */}
      <span className="relative text-green-accent font-mono transition-transform duration-100 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 z-20">
        {text}
      </span>
    </a>
  );
};

export default Button;
