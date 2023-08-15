import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  hdm_logo,
  html,
  javascript,
  jobit,
  mercedes_logo,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  tutor_logo,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tutor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor in business informatics",
    company_name: "Hochschule der Medien, Stuttgart",
    icon: hdm_logo,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Sep 2023",
    points: [
      "Knowledge in business processes and corporate organization.",
      "Object-oriented programming in Python.",
      "Business Intelligence, Data Science, as well as SQL and relational databases",
      "UI/UX Design and specialization in software engineering and web development",
      "Several projects with renowned tech companies like SchwarzIT or QuantoSolutions.",
    ],
  },
  {
    title: "Internship IT-Projectmanagement",
    company_name: "Mercedes Benz AG",
    icon: mercedes_logo,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Consultative dialogues with clients to comprehend their requirements and needs, in alignment with the principles of requirements engineering.",
      "analysis, and documentation of project requirements using Confluence, as well as concepting of new feature.",
      "Ensuring software quality through testing and close collaboration with the development teams to resolve issues.",
      "Applying agile methods throughout the development process using Jira, cultivating effective teamwork and problem-solving for complex challenges in web application development.",
    ],
  },
  {
    title: "Private Tutoring",
    company_name: "Independent",
    icon: tutor_logo,
    iconBg: "#E6DEDD",
    date: "April 2022 - July 2023",
    points: [
      "Teaching fundamentals of web development, such as HTML, CSS and JavaScript",
      "React concepts, like components, state and prop management, aswell as Hooks.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using Github as a collaborative software for version control, issue tracking and code contributing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
