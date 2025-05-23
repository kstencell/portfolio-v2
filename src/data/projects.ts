export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    subtitle: "Featured Project",
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
  },
  {
    subtitle: "Featured Project",
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. ",
    tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
  },
];
