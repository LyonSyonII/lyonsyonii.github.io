const config: Config = {
  github: {
    username: "lyonsyonii", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        "PE-BLOC-T"
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      name: "Astro",
      icon: "devicon:astro",
      url: "https://astro.build/",
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

export type Config = {
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

export type Repo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  score: number;
};

export default config;
