import React from "react";
import Link from "next/link";

interface NavLinksProps {
  orientation: "row" | "col";
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ orientation, onLinkClick }) => {
  const baseLinkClass = `flex ${
    orientation === "row" ? "flex-row space-x-2" : "flex-col space-y-2"
  } items-center text-off-white text-sm hover:text-green-accent transition-colors`;

  const links = [
    { href: "#about", label: "About", number: "01." },
    { href: "#experience", label: "Experience", number: "02." },
    { href: "#projects", label: "Projects", number: "03." },
    { href: "#contact", label: "Contact", number: "04." },
  ];

  return (
    <nav>
      <ul
        className={`flex ${
          orientation === "row" ? "flex-row" : "flex-col"
        } gap-8`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={baseLinkClass}
              onClick={onLinkClick}
            >
              <span className="font-mono text-green-accent">{link.number}</span>
              <span className="font-mono">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
