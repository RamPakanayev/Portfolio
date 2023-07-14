import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  // meta,
  // starbucks,
  logon,
  hit,
  udemy,
  yahalom,
  ort,
  // tesla,
  // shopify,
  // jobit,
  // tripguide,
  threejs,
  costmanager,
  metadecentraland,
  pixabay,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Computer Science B.Sc",
    company_name: "H.I.T – Holon Institute of Technology",
    icon: hit,
    iconBg: "#383E56",
    date: "Oct 2020 - Jun 2023",
    points: [],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Mar 2023",
    points: [
      <a href="https://www.udemy.com/certificate/UC-7388bef9-2baa-451d-827e-a56137809e55/">
        Show Credentials
      </a>,
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Log-On Software – Magistrate Court, Tel Aviv",
    icon: logon,
    iconBg: "#383E56",
    date: "Oct 2017 - Dec 2020",
    points: [
      "Full-time System Administrator and IT support technician.",
      "Deep knowledge of Active Directory user, authorization, and workstation management.",
      "Skilled in troubleshooting and resolving technical issues related to network equipment computer systems and servers. ",
      "Proficient in providing technical support to end-users.",
    ],
  },
  {
    title: "Network Administrator",
    company_name: "Yahalom special unit – IDF",
    icon: yahalom,
    iconBg: "#E6DEDD",
    date: "Aug 2014 - Aug 2017",
    points: [
      "Responsible for telecommunications and IT management duties, including installation, configuration, and repair of desktops and laptops, physical installation of network equipment, and user administration.",
      "Developed tools using C# and SQL to automate repetitive tasks, improve monitoring, and provide faster access to commonly used resources.",
    ],
  },
  {
    title: "Software Engineering Technician Diploma",
    company_name: "Ort Holon College",
    icon: ort,
    iconBg: "#383E56",
    date: "Oct 2013 - May 2014",
    points: [],
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
    name: "Cost Manager",
    description:
      "A web-based cost management application built using the MERN stack and deployed on AWS EC2.Designed and developed the user interface using React.js and Bootstrap.Implemented server-side API endpoints using Express.js and MongoDB.",
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
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: costmanager,
    source_code_link: "https://github.com/RamPakanayev/Cost-Manager-FullStack",
  },
  {
    name: "Meta_DeCentraland",
    description:
      "Meta DeCentraland is a decentralized application (DApp) that allows users to buy, sell, and own virtual land in a digital world. This project is built on the Ethereum blockchain and consists of 100 x 100 plots of land, which can be bought and sold as Non-Fungible Tokens (NFTs).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Web3",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: metadecentraland,
    source_code_link: "https://github.com/RamPakanayev/Meta_DeCentraland",
  },
  {
    name: "Pixabay Gallery",
    description:
      " a full-stack application with a React.js frontend and a Node.js backend. It fetches and displays images from the Pixabay API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: pixabay,
    source_code_link: "https://github.com/RamPakanayev/MsApps-Assignment",
  },
];

export { services, technologies, experiences, testimonials, projects };
