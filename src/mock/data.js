import { nanoid } from 'nanoid';
import html5Image from '../images/html5.png';

// HEAD DATA
export const headData = {
    title: 'Bobby | Dev',
    lang: 'en',
    description: 'Welcome to my Portfolio',
};

// HERO DATA
export const heroData = {
    title: 'Hello, my name is',
    name: 'Bobby Hart',
    subtitle: "I'm a Software Developer",
    cta: '',
};

// SKILLS DATA
export const skillsData = {
    frontEndSkills: [
        {
            id: nanoid(),
            name: 'HTML5',
            img: html5Image,
        },
        {
            id: nanoid(),
            name: 'CSS3',
            img: require('../images/CSS3.png').default,
        },
        {
            id: nanoid(),
            name: 'React',
            img: require('../images/react.png').default,
        },
        {
            id: nanoid(),
            name: 'Remix',
            img: require('../images/remix.png').default,
        },
        {
            id: nanoid(),
            name: 'JavaScript',
            img: require('../images/javascript.png').default,
        },
        {
            id: nanoid(),
            name: 'TypeScript',
            img: require('../images/typescript.png').default,
        },
        {
            id: nanoid(),
            name: 'Bootstrap',
            img: require('../images/bootstrap.png').default,
        },
    ],
    backEndSkills: [
        {
            id: nanoid(),
            name: 'Node.js',
            img: require('../images/nodejs.png').default,
        },
        {
            id: nanoid(),
            name: 'Java',
            img: require('../images/java.png').default,
        },
        {
            id: nanoid(),
            name: 'C#',
            img: require('../images/c.png').default,
        },
        {
            id: nanoid(),
            name: 'Python',
            img: require('../images/python.png').default,
        },
        {
            id: nanoid(),
            name: '.Net',
            img: require('../images/.net.png').default,
        },
        {
            id: nanoid(),
            name: 'PostgreSQL',
            img: require('../images/postgreSQL.png').default,
        },
    ],
    tools: [
        {
            id: nanoid(),
            name: 'CircleCI',
            img: require('../images/circleCI.png').default,
        },
        {
            id: nanoid(),
            name: 'PostMan',
            img: require('../images/postman.png').default,
        },
        {
            id: nanoid(),
            name: 'Netlify',
            img: require('../images/netlify.png').default,
        },
        {
            id: nanoid(),
            name: 'AdobeXD',
            img: require('../images/adobeXD.png').default,
        },
        {
            id: nanoid(),
            name: 'Agile',
            img: require('../images/agile.png').default,
        },
        {
            id: nanoid(),
            name: 'RestfulAPI',
            img: require('../images/restapi.png').default,
        },
        {
            id: nanoid(),
            name: 'Git',
            img: require('../images/git.png').default,
        },
    ],
};
// ABOUT DATA
export const aboutData = {
    img: 'Logov1.png',
    paragraphOne:
        "From a curious coder to an aspiring software developer, I'm Bobby Hart, a driven individual with a passion for crafting innovative solutions. Armed with a degree in Information Technology and a certificate in Software Development and Cybersecurity, I've led website redesigns, optimized user experiences, and contributed to open-source projects. With expertise in both front-end and back-end development, I'm ready to bring ideas to life.",
    paragraphTwo:
        "I am currently doing contract work for Gameday PR as a front-end developer. In this role, I lead the initiative to redesign two websites, <a href='https://www.fearcincinnati.com/' target='_blank'>Cincinnati Fear</a> and <a href='https://www.bettheben.com/' target='_blank'>Bet the Benjamin</a>. Utilizing Adobe XD mockups, I ensure higher performance in alignment with the company's key performance indicators (KPIs). I actively implement approved mockup changes, focusing on improving SEO for a higher click-through rate (CTR) and enhancing the viewer experience to increase retention rate and improve call-to-action (CTA).",
    paragraphThree: '',
    resume:
        'https://drive.google.com/file/d/1u3yxXbi4erlStnDBSUDnS9-1Py5QbFrC/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: 'Bobby_Budget_Buddy.JPG',
        title: "Bobby's Budget Buddy",
        info:
            "Introducing Bobby's Budget Buddy: a React CRUD app for effortless budgeting and financial management. Track expenses, manage income, set goals, and stay on top of your budget with ease. Add, edit, and delete items, categorize expenses, generate reports, and visualize your progress. Take control of your finances with Bobby's Budget Buddy today!",
        info2: '',
        url: 'https://github.com/robertdhart99/Bobbys-Budget-Buddy',
        repo: '',
    },
    {
        id: nanoid(),
        img: 'Quick_Notez.JPG',
        title: 'QuickNotez',
        info:
            'QuickNotez is a dynamic and user-friendly notes taking app designed to streamline your productivity. Built with Remix, this web-based application offers a seamless experience for capturing, organizing, and managing thoughts, ideas, and to-do lists. Effortlessly create and edit notes on the go, whether attending a meeting, conducting research, or brainstorming. Its clean interface provides a distraction-free environment, and its responsive design makes it accessible on desktops, tablets, and mobile phones.',
        info2: '',
        url: 'https://github.com/robertdhart99/QuickNotez',
        repo: '',
    },
    {
        id: nanoid(),
        img: 'G-PAD_Project.JPG',
        title: 'G-PAD',
        info:
            'G-PAD (Government Physical Assets & Information Management System) is an open-source fork of snipe/snipe-it. Developed with a group over a year as a capstone project at the University of Cincinnati, G-PAD allows government entities and defense contractors to efficiently manage their classified physical assets and information using an unclassified system and network. It features robust security measures such as two-factor authentication and digital signatures for login and asset management.',
        info2: '',
        url: 'https://github.com/robertdhart99/G-PAD',
        repo: 'https://itexpo.live/2022/seniors/141',
    },
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: 'bobbydhart1@gmail.com',
};

// FOOTER DATA
export const footerData = {
    networks: [
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/robert--hart/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/robertdhart99',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false,
};
