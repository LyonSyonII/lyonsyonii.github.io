const config: RawConfig = {
  github: {
    username: "lyonsyonii", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    // phone: "",
    name: "Liam Garriga",
    email: "liam@garriga.dev",
  },
  // resume: {
  //   fileUrl: "",
  // },
  skills: [
    {
      name: "Rust",
      icon: "devicon-plain:rust",
      url: "https://www.rust-lang.org/",
    },
    {
      name: "C",
      icon: "devicon:c",
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "Python",
      icon: "devicon:python",
      url: "https://www.python.org/",
    },
    {
      name: "Linux",
      icon: "devicon-plain:linux",
      url: "https://en.wikipedia.org/wiki/Linux",
    },
    {
      name: "Unity",
      icon: "devicon:unity",
      url: "https://unity.com/",
    },
    {
      name: "Godot",
      icon: "devicon:godot",
      url: "https://godotengine.org/",
    },
  ],
  some_experience_with: [
    {
      name: "C#",
      icon: "devicon:csharp",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "C++",
      icon: "devicon:cplusplus",
      url: "https://isocpp.org/",
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
      url: "https://www.javascript.com/",
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Haskell",
      icon: "devicon:haskell",
      url: "https://www.haskell.org/",
    },
    {
      name: "PostgreSQL",
      icon: "devicon-plain:postgresql",
      url: "https://www.postgresql.org/",
    },
    {
      name: "React",
      icon: "devicon:react",
      url: "https://reactjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "devicon:tailwindcss",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Embedded",
      icon: "devicon:embeddedc",
      url: "https://en.wikipedia.org/wiki/Embedded_system",
    },
    {
      name: "Unreal Engine",
      icon: "devicon:unrealengine",
      url: "https://www.unrealengine.com/en-US",
    },
  ],
  education: [
    {
      institution:
        "Facultat d'Informàtica de Barcelona - Universitat Politècnica de Catalunya",
      degree: "Computer Science",
      from: "2020",
      to: "Present",
    },
  ],
  mainProjects: [
    {
      title: "Lyon's Deck Toolbox",
      description:
        "An installer for a collection of tools and utilities to enhance the experience with the Steam Deck.",
      imageUrl:
        "https://raw.githubusercontent.com/LyonSyonII/lyon-deck-toolbox/main/assets/icon.png",
      link: "/deck-toolbox",
    },
    {
      title: "Cargo Learn",
      description:
        "Youtube channel dedicated to teaching programming, with a special focus on the Rust programming language.",
      imageUrl:
        "https://raw.githubusercontent.com/LyonSyonII/Cargo-Learn/main/Assets/Images/Logo.svg",
      link: "https://www.youtube.com/@Cargo-Learn/featured",
    },
  ],
  otherProjects: [
    {
      title: "Motley",
      description: "Fast-paced game developed with the Unity Game Engine.",
      imageUrl: "/assets/icons/motley.png",
      link: "https://slimystudios.itch.io/motley",
    },
    {
      title: "Unity Assets",
      description:
        "Assets for the Unity Game Engine, uploaded on the Asset Store.",
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/083c1413-b2ef-4d9e-b483-891519f896f1.png",
      link: "https://assetstore.unity.com/publishers/48993",
    },
  ],
};

type Github = {
  username: string;
  sortBy?: "stars" | "updated";
  limit?: number;
  exclude?: {
    forks?: boolean;
    projects?: string[];
  };
};
export type Social = {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  phone?: string;
  email?: string;
  name?: string;
};
export type Resume = {
  fileUrl: string;
};
export type Skill = {
  name: string;
  icon?: string;
  imageUrl?: string;
  url?: string;
};
export type Project = {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
};
export type Experience = {
  company?: string;
  companyLink?: string;
  position?: string;
  from?: string;
  to?: string;
};
export type Certification = {
  body?: string;
  name: string;
  year: string;
  link: string;
};
export type Education = {
  institution: string;
  degree: string;
  from: string;
  to: string;
};
type Blog = {
  source?: string;
  username?: string;
  limit?: number;
};

export type RawConfig = {
  github: Github;
  social: Social;
  resume?: Resume;
  skills: Skill[];
  some_experience_with: Skill[];
  mainProjects: Project[];
  otherProjects: Project[];
  experiences?: Experience[];
  certifications?: Certification[];
  education: Education[];
  blog?: Blog;
};

export default config;
