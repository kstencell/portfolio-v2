export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    subtitle: "Featured Project",
    title: "Upvote Approved",
    description:
      "Upvote Approved is an AI-powered database that aggregates Reddit's most recommended products. It cuts through the noise of the internet to help you find the highest-reviewed items that real people actually swear by.",
    tech: ["Laravel", "MySQL", "PHP", "Tailwind CSS", "Laravel Forge"],
    image: "/upvote-approved-thumbnail-8x5.png",
    link: "https://upvoteapproved.com",
  },
  {
    subtitle: "Featured Project",
    title: "Guitar Practice",
    description:
      "This is an iOS app developed, designed, and deployed solely by myself. It reached #23 on the App Store charts for music apps in Canada. It generates melodic chord progressions using randomly chosen chord positions along the fretboard.",
    tech: ["Swift", "Xcode", "Python"],
    image: "/guitar-practice-thumbnail-8x5.jpg",
    github: "https://github.com/kstencell/GuitarPractice",
    link: "https://appadvice.com/app/guitar-practice/1513229012",
  },
  {
    subtitle: "Featured Project",
    title: "MarketMash",
    description:
      "Did you know that Adobe is a bigger than The Walt Disney Company? Inspired by Mark Zuckerberg's infamous sophomore project FaceMash, MarketMash chooses from the 100 biggest companies in the world and has you guess which one you think is bigger. (This project is no longer maintained)",
    tech: ["React", "Docker", "Nginx", "Digital Ocean"],
    image: "/marketmash-thumbnail-8x5.png",
    github: "https://github.com/kstencell/MarketMash",
  },
  {
    subtitle: "Featured Project",
    title: "This Website",
    description:
      "This is the website you are currently viewing! How meta! The source code is available on GitHub. Feel free to fork it for your own use, just be sure to give a shout out to Brittany Chiang for her lovely design (link in footer).",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/portfolio-website-thumbnail-8x5.png",
    github: "https://github.com/kstencell/portfolio-v2",
  },
];
