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
  docker,
  logon,
  hit,
  udemy,
  yahalom,
  ort,
  threejs,
  costmanager,
  metadecentraland,
  pixabay,
  bootstrap,
  c,
  cpp,
  express,
  mysql,
  postman,
  python,
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
    title: "Full-Stack Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: web,
  },
];

const technologies = [
  // Front-end
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
  // Back-end
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // Programming Language
  {
    name: "Python",
    icon: python,
  },
  // DevOps & Testing
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const technologiesExtra = [
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Computer Science B.Sc",
    company_name: "H.I.T – Holon Institute of Technology",
    icon: hit,
    iconBg: "#383E56",
    date: "Oct 2020 - Jun 2023",
    points: [
      "Degree average grade: 85",
      "Projects in: blockchain, frontend, backend, GIS among others.",
      "Frontend development grade: 98, final project is the client-side of an expenses manager. Written with React, HTML, CSS ",
      "Backend development grade: 86, final project is the server-side of an expenses manager. Written with  Node.JS, express.JS, REStful web-service, MongoDB.  Tests done using Postman.",
      "Blockchain course grade: 92, final project is a DApp that allows users to buy, sell and own land(pixels) as NFT  in a digital world, called desentra-land, based on the etherium blockchain(Ganache). Deployed ERC721-based NFTs with Solidity and OpenZeppelin.",
      "Part of H.I.T’s smart campus project, developed UI integrated campus map for IoT sensors. Written with Leaflet (Javascript)",
    ],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Mar 2023",
    points: [
      <a
        href="https://www.udemy.com/certificate/UC-7388bef9-2baa-451d-827e-a56137809e55/"
        className="turquoise-text-gradient"
      >
        Show Credentials
      </a>,
      "Mastery of front-end and back-end web development using HTML, CSS, JavaScript, and more.",
      "Proficiency in handling APIs and databases, using SQL and NoSQL technologies.",
      "Understanding of web design and user experience principles for creating appealing websites.",
      "Familiarity with version control via Git and GitHub, and deployment strategies.",
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
    points: [
      "Coursework centered around computer and software practical engineering",
      "Object-Oriented Programming in JAVA",
      "SQL, C, java, assembly",
      "Data structures, efficiency algorithms, SW engineering fundamentals and SQL databases",
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
    name: "Cost Manager",
    description:
      "A M.E.R.N stack website that provides a user-friendly experience for tracking and managing expenses. Offering comprehensive user management features like profile management, account setup and recovery. Deployed on AWS EC2.",
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
        color: "orange-text-gradient",
      },
    ],
    image: costmanager,
    source_code_link: "https://github.com/RamPakanayev/Cost-Manager-FullStack",
  },
  {
    name: "Meta_DeCentraland",
    description:
      "A decentralized application (DApp) that allows users to buy, sell, and own virtual real estate in a digital world. built on the Ethereum blockchain and consists of 100 x 100 plots of land, which can be owned by users as Non-Fungible Tokens (NFTs).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Web3",
        color: "turquoise-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
    ],
    image: metadecentraland,
    source_code_link: "https://github.com/RamPakanayev/Meta_DeCentraland",
  },
  {
    name: "Pixabay Gallery",
    description:
      "An extensive photo gallery application that provides a wide range of images across multiple categories based on the user's preferences selection.it provides an in-depth view of the image details whenever an image is selected.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux.js",
        color: "yellow-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
    ],
    image: pixabay,
    source_code_link: "https://github.com/RamPakanayev/MsApps-Assignment",
  },
];

export {
  services,
  technologies,
  technologiesExtra,
  experiences,
  testimonials,
  projects,
};
