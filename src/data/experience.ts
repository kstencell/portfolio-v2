export interface Experience {
    role: string
    company: string
    dates: string
    description: string[]
  }
  
  export const experience: Experience[] = [
    {
      role: "Software Engineer",
      company: "Arctic Wolf",
      dates: "2022 – Present",
      description: [
        "Co-design and maintain the pipeline that ships firmware & software images to 40K+ sensors.",
        "Drive CI/CD improvements to product reliability and release velocity.",
        "Automate the testing of firmware and software images.",
        "Collaborate with security and hardware teams on test automation frameworks.",
      ],
    },
    {
      role: "Co-Founder",
      company: "BKG Software",
      dates: "2024 – Present",
      description: [
        "Built custom web-based solutions for individuals and small businesses.",
        "Set up Laravel back-ends and automated deployment pipelines.",
        "Managed client scoping, rapid prototyping, and delivery.",
      ],
    },
    {
        role: "Software Developer",
        company: "SMART Centre",
        dates: "2022 – 2022",
        description: [
          "Led a resarch team to investigate and demonstrate the use of graph databases for supply chain management.",
          "Mentored students in the development of python servers on mobile devices for gathering field telemetry",
          "Designed and coded a rudimentary touch-screen adaptor for regular television using Android phones.",
        ],
      },
    {
      role: "IT Technician",
      company: "Conestoga College",
      dates: "2021 – 2022",
      description: [
        "Maintained campus lab hardware and network infrastructure.",
        "Deployed and troubleshot lab equipment, classroom hardware, and workstations.",
      ],
    },
  ]