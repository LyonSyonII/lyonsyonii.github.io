// gitprofile.config.js

const config = {
  github: {
    username: 'lyonsyonii', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    phone: '',
    email: 'liam.garriga@tutanota.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    {
      name: 'Rust',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
      url: 'https://www.rust-lang.org/',
    },
    {
      name: 'C',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'Python',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      url: 'https://www.python.org/',
    },
    {
      name: 'Linux',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg',
      url: 'https://en.wikipedia.org/wiki/Linux',
    },
    {
      name: 'Unity',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      url: 'https://unity.com/',
    },
    {
      name: 'Godot',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
      url: 'https://godotengine.org/',
    },
  ],
  some_experience_with: [
    {
      name: 'C#',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      name: 'C++',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      url: 'https://isocpp.org/',
    },
    {
      name: 'JavaScript',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      url: 'https://www.javascript.com/',
    },
    {
      name: 'TypeScript',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Haskell',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg',
      url: 'https://www.haskell.org/',
    },
    {
      name: 'PostgreSQL',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
      url: 'https://www.postgresql.org/',
    },
    {
      name: 'React',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      url: 'https://reactjs.org/',
    },
    {
      name: 'Embedded',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg',
      url: 'https://en.wikipedia.org/wiki/Embedded_system',
    },
    {
      name: 'Unreal Engine',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
      url: 'https://www.unrealengine.com/en-US',
    },
  ],
  /*
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],*/
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution:
        "Facultat d'Informàtica de Barcelona - Universitat Politècnica de Catalunya",
      degree: 'Computer Science',
      from: '2020',
      to: 'Present',
    },
  ],
  mainProjects: [
    {
      title: "Lyon's Deck Toolbox",
      description:
        'An installer for a collection of tools and utilities to enhance the experience with the Steam Deck.',
      imageUrl:
        'https://raw.githubusercontent.com/LyonSyonII/lyon-deck-toolbox/main/assets/icon.png',
      link: '/deck-toolbox',
    },
  ],
  externalProjects: [
    {
      title: 'Motley',
      description: 'Fast-paced game developed with the Unity Game Engine.',
      imageUrl: '/assets/icons/motley.png',
      link: 'https://slimystudios.itch.io/motley',
    },
    {
      title: 'Unity Assets',
      description:
        'Assets for the Unity Game Engine, uploaded on the Asset Store.',
      imageUrl:
        'https://assetstorev1-prd-cdn.unity3d.com/key-image/083c1413-b2ef-4d9e-b483-891519f896f1.png',
      link: 'https://assetstore.unity.com/publishers/48993',
    },
  ],
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light'],
  },
};

export default config;
