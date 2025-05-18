import Header from "@/components/Header";
import SideFixture from "@/components/SideFixture";
import SocialIcons from "@/components/SocialIcons";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <SideFixture
        orientation="left"
        content={<SocialIcons size={20} orientation="col" />}
      />
      <SideFixture
        orientation="right"
        content={
          <div
            className="text-sm text-gray-accent font-mono hover:text-green-accent transition duration-200 transform hover:-translate-y-2"
            style={{ writingMode: "vertical-rl" }}
          >
            karldstencell@gmail.com
          </div>
        }
      />
    </div>
  );
}
