import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

interface SideFixtureProps {
  size?: number;
  orientation?: "row" | "col";
  textColor?: string;
}

const SocialIcons: React.FC<SideFixtureProps> = ({
  size = 6,
  orientation = "row",
  textColor = "text-gray-accent hover:text-green-accent",
}) => {
  return (
    <div
      className={`flex ${
        orientation === "row" ? "gap-12" : "flex-col gap-12 h-[199px]"
      } justify-between items-center`}
    >
      <a
        href="https://github.com/kstencell"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-transform duration-200 hover:-translate-y-1"
      >
        <GithubIcon size={size} className={textColor} />
      </a>
      <a
        href="https://www.linkedin.com/in/karl-stencell/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-transform duration-200 hover:-translate-y-1"
      >
        <LinkedinIcon size={size} className={textColor} />
      </a>
      <a
        href="https://www.instagram.com/karldstencell/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition-transform duration-200 hover:-translate-y-1"
      >
        <InstagramIcon size={size} className={textColor} />
      </a>
    </div>
  );
};

export default SocialIcons;
