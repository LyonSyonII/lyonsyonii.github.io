// gitprofile.config.js

const config: RawConfig = {
  github: {
    username: "lyonsyonii", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ["PE-BLOC-T"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    phone: "",
    email: "liam@garriga.dev",
  },
  resume: {
    fileUrl: "",
  },
  skills: [
    {
      name: "Rust",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      url: "https://www.rust-lang.org/",
    },
    {
      name: "C",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "Python",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      url: "https://www.python.org/",
    },
    {
      name: "Astro",
      imageUrl: "https://astro.build/assets/press/astro-icon-dark.svg",
      url: "https://astro.build/",
    },
    {
      name: "Linux",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg",
      url: "https://en.wikipedia.org/wiki/Linux",
    },
    {
      name: "Unity",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
      url: "https://unity.com/",
    },
    {
      name: "Godot",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
      url: "https://godotengine.org/",
    },
  ],
  some_experience_with: [
    {
      name: "C#",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "C++",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      url: "https://isocpp.org/",
    },
    {
      name: "JavaScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      url: "https://www.javascript.com/",
    },
    {
      name: "TypeScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Haskell",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg",
      url: "https://www.haskell.org/",
    },
    {
      name: "PostgreSQL",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
      url: "https://www.postgresql.org/",
    },
    {
      name: "React",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      url: "https://reactjs.org/",
    },
    {
      name: "TailwindCSS",
      imageUrl:
        "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Embedded",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg",
      url: "https://en.wikipedia.org/wiki/Embedded_system",
    },
    {
      name: "Unreal Engine",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg",
      url: "https://www.unrealengine.com/en-US",
    },
  ],
  education: [
    {
      institution: "Facultat d'Informàtica de Barcelona - Universitat Politècnica de Catalunya",
      degree: "Computer Science",
      from: "2020",
      to: "Present",
    },
  ],
  mainProjects: [
    {
      title: "Rust Quest",
      description: "A book about learning to program from zero!",
      imageUrl: "/assets/icons/rust-quest.svg",
      link: "https://rust-quest.com/",
    },
    {
      title: "Lyon's Deck Toolbox",
      description:
        "An installer for a collection of tools and utilities to enhance the experience with the Steam Deck.",
      imageUrl:
        "https://raw.githubusercontent.com/LyonSyonII/lyon-deck-toolbox/main/assets/icon.png",
      link: "/deck-toolbox",
    },
    /*     {
      title: "Cargo Learn",
      description:
        "Youtube channel dedicated to teaching programming, with a special focus on the Rust programming language.",
      imageUrl:
        "https://raw.githubusercontent.com/LyonSyonII/Cargo-Learn/main/Assets/Images/Logo.svg",
      link: "https://www.youtube.com/@Cargo-Learn/featured",
    }, */
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
      description: "Assets for the Unity Game Engine, uploaded on the Asset Store.",
      imageUrl:
        "https://assetstorev1-prd-cdn.unity3d.com/key-image/083c1413-b2ef-4d9e-b483-891519f896f1.png",
      link: "https://assetstore.unity.com/publishers/48993",
    },
  ],
  themeConfig: {
    defaultTheme: "dark",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ["light"],
  },
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
};
export type Resume = {
  fileUrl: string;
};
export type Skill = {
  name: string;
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

export type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  "base-100": string;
  "--rounded-box": string;
  "--rounded-btn": string;
};
type ThemeConfig = {
  defaultTheme?: string;
  disableSwitch?: boolean;
  respectPrefersColorScheme?: boolean;
  hideAvatarRing?: boolean;
  themes?: string[];
  customTheme?: Theme;
};
export type RawConfig = {
  github: Github;
  social?: Social;
  resume?: Resume;
  skills?: Skill[];
  some_experience_with?: Skill[];
  mainProjects?: Project[];
  otherProjects?: Project[];
  experiences?: Experience[];
  certifications?: Certification[];
  education?: Education[];
  blog?: Blog;
  themeConfig?: ThemeConfig;
};

export default config;
