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
  skills: ['Rust', 'C', 'C#', 'Python', 'Linux', 'Unity', 'Godot'],
  some_experience_with: [
    'C++',
    'JavaScript',
    'TypeScript',
    'Haskell',
    'SQL',
    'React',
    'Embedded',
    'Unreal Engine',
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
    /*
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },*/
  ],
  mainProjects: [
    {
      title: "Lyon's Deck Toolbox",
      description:
        'An installer for a collection of tools and utilities to enhance the experience with the Steam Deck.',
      imageUrl:
        'https://raw.githubusercontent.com/LyonSyonII/lyon-deck-toolbox/main/assets/icon.png',
      link: 'https://github.com/LyonSyonII/lyon-deck-toolbox',
    },
  ],
  externalProjects: [
    {
      title: 'Motley',
      description: 'Fast-paced game developed with the Unity Game Engine.',
      imageUrl: '/motley.png',
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
  /*
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  */
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
