import { assets } from "../Assets/assets";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiSupabase, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";

export const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroData = {
  name: "Aditya Mandal",
  role: "aka @NulledFacedDev",
  about_ln1:"a Full-stack developer with 1+ year of hands on experience web apps and websites -",
  about_ln2:"currently a college student who has been in development to build experiences not AI slop, I'm a self taught developer usually creating products using React, Next, TanStack and TailwindCSS",
  about_ln3:<>Also trying to break into content creation in teach and building <a href="https://mogger-mog-your-exams.vercel.app/" target="_blank" className="text-blue-500 hover:text-green-500 transition duration-200 ease-in-out">@Mogger</a></>,
  about_ln4:"I love exploring new tech and to contribute when ever I can so feel free to reach me out if you need any help ^_^"
};

export const skillsData = {
  title: "Skills",
  items: [
    {
      ico: <RiNextjsFill/>,
      name: "Next.js",
      description:
        "Skilled in creating full-stack web applications using Next.js, leveraging file-based routing, SSR, and API routes.",
    },
    {
      ico: <FaReact/>,
      name: "React.js",
      description:
        "Expert in building interactive, component-based UIs using React,tanstack. Proficient with hooks, context API, and state management.",
    }, 
    {
      ico: <SiTypescript/>,
      name: "TypeScript",
      description:
        "Decent understanding of TypeScript. Comfortable using it to add type safety to React and Node.js projects.",
    },
    {
      ico: <RiTailwindCssFill/>,
      name: "Tailwind CSS",
      description:
        "Expert in crafting responsive and utility-first designs with modern aesthetics using Tailwind CSS.",
    },
    {
      ico: <SiSupabase/>,
      name: "Supabase",
      description:
        "Expert with using Supabase for database, storage buckt or Authentications",
    },
    {
      ico: <FaNodeJs/>,
      name: "Node.js",
      description:
        "Proficient in building scalable backend services, RESTful APIs, and integrating databases using Node.js and Express.",
    },
    {
      ico: <PiFileSql/>,
      name: "SQL",
      description:
        "Skilled in using SQL for relational database design, querying, and integration with backend services.",
    },
    {
      ico: <SiMongodb/>,
      name: "MongoDB",
      description:
        "Experienced in handling NoSQL databases like MongoDB for flexible, document-oriented data storage.",
    }
  ],
};

export const projectsData = {
  title: "Projects",
  items: [
    {
      title: "Mogger AI",
      description:
        "AI-powered web app that generates personalized mock tests to help students prepare effectively for exams.",
      image: assets.screenshot2,
      tags: ["NEXT", "TailwindCSS", "RESTful", "Supabase"],
      links: [
        { label: "View Project", url: "https://mogger-mog-your-exams.vercel.app/" },
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/Mogger-Mog-your-exams",
        },
      ],
    },
     {
      title: "FireShip Discord bot",
      description:
        "FireShip bot is a Discord bot designed to keep users up to date with the latest videos from the FireShip YouTube channel",
      image: assets.Fireship,
      tags: ["NODE", "EXPRESS", "YTV3", "Api creation"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/FireShipBot",
        },
      ],
    },
    {
      title: "HMS-dashbord",
      description:
        "Was tasked to build a Admin Hospital Management System Dashbord, no auth you can directly check the live demo",
      image: assets.screenshot5,
      tags: ["React", "NODE", "Express", "React-Icons", "LIVE"],
      links: [
        { label: "GitHub", url: "https://github.com/aditya-wuw/HMS-Dashbord" },
      ],
    },
    {
      title: "Task Manager(Level UP)",
      description:
        "Task manager app with a level up theme.where users can add tasks, delete tasks, and mark tasks as completed and gain xp and level up",
      image: assets.screenshot1,
      tags: ["React", "NODE", "Express", "Api intigration", "LIVE"],
      links: [
        { label: "View Project", url: "https://level-up-35in.onrender.com/" },
        {
          label: "GitHub",
          url: "https://github.com/aditya-wuw/Level-UP--Local-version---JAuth-",
        },
      ],
    }
  ],
};

export const contactData = {
  title: "Contact Info",
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: "nullfaceddevbusiness@gmail.com",
  gh:"https://github.com/aditya-wuw",
  linkedIN:"https://www.linkedin.com/in/aditya-mandal-a30347294",
  CV: assets.CV
};

