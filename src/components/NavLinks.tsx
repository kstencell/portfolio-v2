import React from "react";
import Link from "next/link";

interface NavLinksProps {
  orientation: "row" | "col";
}

const NavLinks: React.FC<NavLinksProps> = ({ orientation }) => {
  const baseLinkClass = `flex ${
    orientation === "row" ? "flex-row space-x-2" : "flex-col space-y-2"
  } items-center text-off-white text-sm hover:text-green-accent transition-colors`;

  return (
    <nav>
      <ul
        className={`flex ${
          orientation === "row" ? "flex-row" : "flex-col"
        } gap-8`}
      >
        <li>
          <Link href="/" className={baseLinkClass}>
            <span className="font-mono text-green-accent">01.</span>
            <span className="font-mono">About</span>
          </Link>
        </li>
        <li>
          <Link href="/" className={baseLinkClass}>
            <span className="font-mono text-green-accent">02.</span>
            <span className="font-mono">Experience</span>
          </Link>
        </li>
        <li>
          <Link href="/" className={baseLinkClass}>
            <span className="font-mono text-green-accent">03.</span>
            <span className="font-mono">Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/" className={baseLinkClass}>
            <span className="font-mono text-green-accent">04.</span>
            <span className="font-mono">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
