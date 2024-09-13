import {
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
    go,
    starbucks,
    hyperledger,
    duth, circuits_integrated, market, freelance, postman, bashImg, bootstrap, seal
} from "../tech";
import {XCircleIcon} from "@heroicons/react/16/solid";




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
        name: "Golang",
        icon: go,
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
    },{
        name: 'Bootstrap',
        icon:bootstrap
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
        name:'Hyperledger',
        icon:hyperledger
    },
    {
        name: "Git",
        icon: git,
    },

    {
        name: "Docker",
        icon: docker,
    },
    {
        name:'Postman',
        icon: postman
    },
    {
        name:'Bash',
        icon: bashImg
    }

];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Security Alliance",
        icon: seal,
        iconBg: "#E6DEDD",
        date: "June 2024 - Present",
        points: [
            "Designed logos and website layouts using Figma and Canva.",
            "Developed and maintained responsive websites with Next.js, React, Tailwind CSS, and TypeScript.",
            "Currently expanding knowledge in cybersecurity, focusing on report analysis and security best practices."
        ],
    },
    ,
    {
        title: "Full stack Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [

        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Marché Quatre Coins",
        icon: market,
        iconBg: "white",
        date: "Jan 2023 - Dec 2023",
        points: [
            "Implemented strategic optimizations within the application resulting in a substantial 20% increase in sales, highlighting the direct impact on operational efficiency and revenue generation.",
            "Led the design and implementation of user-centric\n" +
            "features tailored speciﬁcally for workers, enhancing\n" +
            "productivity and facilitating seamless order processing.",
            "Developed a worker-focused Full Stack application for\n" +
            "streamlined order management, achieving a notable 50%\n" +
            "reduction in ordering times and workload."
        ],
    },
    {
        title: "Master's in Electrical and Computer Engineering",
        company_name: 'Democritus University of Thrace, Greece',
        icon: duth,
        iconBg: "white ",
        date: "Nov 2019 - Apr 2022",
        points: [
            "Thesis topic: Development of a traceability app on Hyperledger Fabric",
        ],
    },
    {
        title: "Electrical and Computer Engineering Intern",
        company_name: 'Circuits Integrated Athens,Greece',
        icon: circuits_integrated,
        iconBg: "white",
        extraT:'rounded-full',
        date: "Jun 2019 - Aug 2019",
        points: [
            "Responsible for the development of a comprehensive\n" +
            "full-stack application designed to facilitate onboarding\n" +
            "for new hires and accelerate their assimilation into\n" +
            "company processes and materials.",
            'Practical experience in developing web applications using React and Node.js.',
            "Developed expertise in integrated circuits including Operational Amplifiers, Differential Amplifiers, Low Dropout\n" +
            "Linear Regulators, and Digital CMOS Circuits such as gates and decoders."
        ],
    },
    {
        title: "Bachelor's In Electrical and Computer Engineering",
        company_name: "Democritus University of Thrace, Greece",
        icon: duth,
        iconBg: "white",
        date: "Oct 2015 - Oct 2019",
        points: [

        ],
    },
];





export {  technologies, experiences };