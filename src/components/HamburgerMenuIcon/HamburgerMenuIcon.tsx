import React from "react";
import "@/components/HamburgerMenuIcon/HamburgerMenuIcon.css";

interface HamburgerMenuIconProps {
    isOpen: boolean;
}

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({isOpen}) => {
    return (
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
    );
};

export default HamburgerMenuIcon;