import {
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  twitter,
  clockora,
  coverhunt,
  weather,
  dashboard,
  kelhel,
  microverse,
  angular,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Angular JS',
    icon: angular,
  },
];

const experiences = [
  {
    title: 'Front-End Developer intern',
    company_name: 'SearchCept',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'April 2022 - Mai 2022',
  },
  {
    title: 'Front-End Developer intern',
    company_name: 'Devstask',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2023 - July 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Desvstask',
    icon: kelhel,
    iconBg: '#333333',
    date: 'July 2023 - Mars 2025',
  },
];

const projects = [
  {
    id: 'project-2',
    name: 'Twitter Copy',
    description:
      'A static replica of Twitter’s interface, designed to mimic the look and feel of the platform.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: twitter,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://twitter-copy1.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Dahsboard App',
    description: 'Dashboard app for managing and tracking tasks, built with Angular',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    repo: 'https://github.com/ghizalane/Dashboard-app',
    demo: 'https://dashboardgh.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Clockora',
    description: `A website I worked on at my previous company, showcasing subscription packs for an employee management app.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: clockora,
    demo: 'http://www.clockora.com/',
  },
  {
    id: 'project-5',
    name: 'Weather-app',
    description: `A simple weather web app that provides real-time forecasts, temperature, and weather conditions for any location.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    repo: 'https://github.com/ghizalane/weather-app',
    demo: 'https://firstweatherp.netlify.app/',
  },
  
];

export { services, technologies, experiences, projects };
