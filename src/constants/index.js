import {
  affstaetter,
  backend,
  creator,
  css,
  elektro,
  flask,
  github,
  hdm_logo,
  html,
  javascript,
  mercedes_logo,
  mobile,
  mssql,
  mui,
  mysql,
  python,
  reactjs,
  tailwind,
  threejs,
  thrones,
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
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "MSSQL",
    icon: mssql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
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
    name: "Affstaetter Wohnbau GmbH",
    description: "A Web Application that represents Affstaetter Wohnbau GmbH",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: affstaetter,
    source_code_link: "https://github.com/aziz-zai/Affst-tterWohnbauGmbH",
    demo_link: "https://affstaetterwohnbau.com/",
  },
  {
    name: "House Of Thrones",
    description:
      "A Web Application that shows all the Houses of Game of Thrones from the gameofthrones API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: thrones,
    source_code_link: "https://github.com/aziz-zai/ThroneHouses",
    demo_link: "https://house-of-thrones.netlify.app/",
  },
  {
    name: "Elektro Yer",
    description: "A Web Application that represents Affstaetter Wohnbau GmbH.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: elektro,
    source_code_link: "https://github.com/aziz-zai/elektro-yer",
    demo_link: "https://elektro-yer.de/",
  },
];

export { experiences, projects, services, technologies, testimonials };
