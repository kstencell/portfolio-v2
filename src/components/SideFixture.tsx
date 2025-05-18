
interface SideFixtureProps {
    orientation: "left" | "right";
    content: React.ReactNode;
    className?: string;
}

const SideFixture = ({ orientation = "left", content, className = "" }: SideFixtureProps) => {
    const positionClass = orientation === "left" ? "left-12" : "right-12";
    
    return (
      <div className={`${className} hidden md:block fixed bottom-0 ${positionClass} w-6`}>
        <div className="flex flex-col items-center">
          {content}
          <div className="w-px h-24 bg-gray-accent mt-10"></div>
        </div>
      </div>
    );
  };
  
  export default SideFixture;
  