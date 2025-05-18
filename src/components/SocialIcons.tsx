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
        orientation === "row" ? "" : "flex-col gap-12 h-[199px]"
      } justify-between items-center`}
    >
      {/* <GithubIcon size={size} className={textColor}/> */}
      <div className={`transition-transform duration-200 hover:-translate-y-1`}>
        <GithubIcon size={size} className={textColor} />
      </div>
      <div className={`transition-transform duration-200 hover:-translate-y-1`}>
        <LinkedinIcon size={size} className={textColor} />
      </div>
      <div className={`transition-transform duration-200 hover:-translate-y-1`}>
        <InstagramIcon size={size} className={textColor} />
      </div>
    </div>
  );
};

export default SocialIcons;
