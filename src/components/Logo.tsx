import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative group">
        {/* Shadow SVG */}
        <svg
          width="50" // Same size as main logo
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 text-green-accent z-0"
        >
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="#64ffda" // Transparent inside
            stroke="#64ffda" // Green shadow color
            strokeWidth="5"
          />
        </svg>

        {/* Main Logo SVG */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="#0a192f" // Background color
            stroke="#64ffda" // Border color
            strokeWidth="5"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#64ffda"
            fontSize="40"
            fontWeight={1000}
            fontFamily="'SF Mono', monospace"
            dy=".3em" // Vertical alignment adjustment
          >
            K
          </text>
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
