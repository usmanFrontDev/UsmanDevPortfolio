// import portfolioImg from "../assets/Images/project-1-img.png";
import pepsiImg from "../assets/images/pepsi-image.png";
import devoidsImg from "../assets/Images/devoids-image.png";
import portfolioImg from "../assets/images/portoflio-img.png";
import equipmentImg from "../assets/images/equipment-image.png";
import manelinkImg from "../assets/images/manelink-image.png";
import piceptImg from "../assets/images/picept-image.png";

import pepsiVideo from "../assets/videos/pepsi-video.mp4";
import devoidsVideo from "../assets/videos/devoids-video.mp4";
import portfolioVideo from "../assets/videos/portfolio-video.mp4";
import equipmentVideo from "../assets/videos/equipment-video.mp4";
import manelinkVideo from "../assets/videos/manelink-video.mp4";
import piceptVideo from "../assets/videos/picept-video.mp4";

export const Page2HeadingContent = [
  "Impactful ",
  "interfaces ",
  "turn ",
  "visitors ",
  "into ",
  "users",
];

export const NavText = ["home", "about", "work", "contact"];

export const Page4HeadingContent = [
  "Code",
  "it",
  "clean",
  "build",
  "it",
  "bold",
];

export const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export const projects = [
  {
    id: 1,
    img: pepsiImg,
    video: pepsiVideo,
    name: "Pepsi 3D Storytelling Website",
    tags: ["HTML", "CSS", "GSAP", "JavaScript"],
    desc: `Built during a global hackathon to showcase Pepsi products with an engaging, animated 3D storytelling experience, combining development and design skills.`,
  },
  {
    id: 2,
    img: devoidsImg,
    video: devoidsVideo,
     name: "Devoids Web Agency",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "Three.js",
      "Shery.js",
      "Email.js",
      "Tilt.js",
      "Swiper.js",
      "Lenis",
    ],
    desc: `A modern web development agency website with minimalistic 3D design, advanced animations, and smooth interactions. Entirely designed and developed by me, featuring immersive shaders and top-notch performance.`,
  },
  {
    id: 3,
    img: portfolioImg,
    video: portfolioVideo,
   name: "Portfolio Website",
  tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "EmailJS", "ScrollTrigger", "Tile.js"],
  desc: `A storytelling portfolio showcasing 2.5 years of frontend expertise, built with React and Tailwind, featuring GSAP animations and award‑style design.`,
  },
  {
    id: 4,
    img: equipmentImg,
    video: equipmentVideo,
     name: "EquipmentDaddy Marketplace",
  tags: [
    "Next.js 13",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
    "React Query"
  ],
  desc: `A customer-focused on‑demand machinery repair portal built with Next.js 13, TypeScript, Tailwind, Framer Motion, EmailJS, and React Query. Users can create repair jobs, connect with certified technicians, track their arrival in real time, pay securely, and leave reviews—all via an interactive and high-performance web app.`
},
  {
    id: 5,
    img: manelinkImg,
    video: manelinkVideo,
   name: "ManeLink Inventory Management System",
tags: ["React", "TypeScript", "Redux", "Tailwind CSS", "Framer Motion"],
  desc: `An inventory & asset management platform for SMBs, featuring real-time stock visibility, automated low-stock alerts, and team collaboration. Developed key frontend modules with React, TypeScript, Redux, Tailwind, and Framer Motion.`
},
  {
    id: 6,
    img: piceptImg,
    video: piceptVideo,
     name: "Picept AI Monitoring Platform",
  tags: [
    "Next.js",
    "Framer Motion",
    "Tailwind CSS",
    "Recharts",
    "React Tables"
  ],
  desc: `An AI operations dashboard built with Next.js, Tailwind, Framer Motion, Recharts, and React Tables. It provides real‑time monitoring, smart routing, alerting, and performance analytics for AI systems, with interactive charts and tables for deep insights.`
}
];



export const experienceData = [
  {
    company: "Microsoft",
    location: "USA, Redmond",
    startDate: "MAR 2021",
    endDate: "DEC 2021",
    position: "Frontend Developer",
    description: [
      "Developed responsive web applications with a focus on user experience.",
      "Collaborated with backend teams to integrate APIs.",
      "Optimized application performance, reducing load times by 30%.",
      "Contributed to UI design and component library development.",
      "Implemented accessibility improvements for a broader audience reach."
    ],
    companyLogo: "https://img.freepik.com/premium-photo/chiang-rai-thailand-march-28-2023-3d-windows-top-brand-operating-system-logos-isolated-transparent-background_640106-943.jpg"
  },
  {
    company: "Apple",
    location: "USA, Cupertino",
    startDate: "AUG 2019",
    endDate: "FEB 2021",
    position: "UI/UX Designer",
    description: [
      "Designed user interfaces for iOS applications, focusing on intuitive design and aesthetics.",
      "Led A/B testing efforts, increasing user engagement by 25%.",
      "Collaborated closely with product teams to align design with business goals.",
      "Enhanced accessibility features, ensuring compliance with WCAG standards.",
      "Created interactive prototypes for usability testing and feedback collection."
    ],
    companyLogo: "https://img.freepik.com/premium-psd/computer-screen-with-silver-apple-logo-it_1108023-61.jpg?w=740"
  },
  {
    company: "Amazon",
    location: "USA, Seattle",
    startDate: "JAN 2018",
    endDate: "JUL 2019",
    position: "Software Engineer",
    description: [
      "Built scalable backend services to support millions of users.",
      "Enhanced application security by implementing best practices in data handling.",
      "Optimized database queries, reducing processing time by 40%.",
      "Collaborated with cross-functional teams to enhance product features.",
      "Contributed to code review processes and mentored junior engineers."
    ],
    companyLogo: "https://img.freepik.com/premium-photo/3d-render-amazon-logo-extruded-amber-glass-floating-upright-15-degree-angle-neon-yellow-ou_1020495-783497.jpg"
  },
  {
    company: "Facebook",
    location: "USA, Menlo Park",
    startDate: "JUL 2016",
    endDate: "DEC 2017",
    position: "Full Stack Developer",
    description: [
      "Developed front-to-back features, enhancing user interaction and satisfaction.",
      "Implemented real-time features using WebSocket for instant notifications.",
      "Managed cloud deployments and server configurations to optimize uptime.",
      "Collaborated with designers to ensure consistent UI across all devices.",
      "Enhanced security layers, reducing vulnerabilities by 60%."
    ],
    companyLogo: "https://img.freepik.com/premium-photo/round-facebook-logo-isolated-white-background_469489-1036.jpg"
  },
  {
    company: "Netflix",
    location: "USA, Los Gatos",
    startDate: "OCT 2014",
    endDate: "JUN 2016",
    position: "Backend Developer",
    description: [
      "Designed and implemented microservices architecture for streaming services.",
      "Enhanced data processing pipelines to handle large-scale data efficiently.",
      "Collaborated with frontend teams to ensure seamless API integration.",
      "Managed database migrations, improving data retrieval speeds.",
      "Optimized code for better performance, achieving a 50% reduction in latency."
    ],
    companyLogo: "https://img.freepik.com/premium-photo/red-alphabet-n-with-inner-shadow-isolated-white-with-shadow-3d-illustration_669435-1083.jpg"
  }
];
