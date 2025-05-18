import React from "react";
import NavLinks from "@/components/NavLinks";
import Button from "@/components/Button";

interface SideBarProps {
  isOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 flex flex-col justify-center items-center h-screen gap-8 bg-secondary-blue shadow-lg transition-transform transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-3/4 max-w-[300px] z-40`}
    >
      <NavLinks orientation="col" />
      <Button text="Resume" link="/" bg_colour="secondary-blue" />
    </div>
  );
};

export default SideBar;
