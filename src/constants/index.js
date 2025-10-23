import { meta, shopify, tesla } from "../assets/images";
import ctb from "../assets/images/ctb.jpg";
import Banregio from "../assets/icons/Banregio.png";
import codelingo from "../assets/icons/codelingo.png";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,
    springboot, java, golang, typescript, angular,
} from "../assets/icons";

export const skills = [{
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "typescript",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "angular",
        type: "Backend",
    },



];

export const experiences = [{
    title: "Frontend Developer",
    company_name: "CBT",
    icon: ctb,
    iconBg: "#accbe1",
    date: "March 2024 - April 2024",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
    ],
},
    {
        title: "Fullstack Developer",
        company_name: "Banregio",
        icon: Banregio,
        iconBg: "#fbc3bc",
        date: "February 2025 - Present",
        points: [
            "Building and maintaining microservices with Spring Boot, PostgreSQL, and REST APIs.",
            "Developing front-end features with Angular 18 and Next.js, following corporate UI standards.",
            "Collaborating in an Agile team environment with daily stand-ups and sprint reviews.",
            "Integrating Swagger for API documentation and writing unit tests to ensure system reliability.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "CodeLingo",
        icon: codelingo,
        iconBg: "#e0f7fa",
        date: "August 2024 - January 2025",
        points: [
            "Designed and implemented a web platform for English learning tailored to programmers.",
            "Developed responsive UI components using React.js, Tailwind CSS, and Framer Motion.",
            "Improved user engagement by 25% through interactive features and gamification.",
            "Worked closely with UX designers to deliver a modern, accessible interface.",
        ],
    },
];

export const socialLinks = [{
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [{
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Asesor-Contable-y-Fiscal',
        description: 'Soy un Asesor Contable y Fiscal dedicado a brindar soluciones financieras personalizadas. Mi objetivo es ayudarte a gestionar tus impuestos y contabilidad de manera eficiente, asegurando que cumplas con todas tus obligaciones fiscales mientras optimizas tus recursos. Con experiencia en la elaboración de contabilidad general, análisis de estados financieros y manejo de nóminas, me esfuerzo por ofrecer un servicio confiable y adaptado a tus necesidades.',
        link: 'https://github.com/EDavidGZ/Asesor-Contable-y-Fiscal',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Game Blocks',
        description: 'Game Blocks is a fun and educational platform where kids learn basic programming and logic by building their own games. Through interactive challenges, they develop problem-solving skills and explore coding in an engaging, hands-on way.',
        link: 'https://github.com/EDavidGZ/gameblock',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Kingdom',
        description: 'We’re here to help you master English with engaging, interactive classes.',
        link: 'https://github.com/EDavidGZ/kingdome-cb',
    },

];