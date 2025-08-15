import { assets } from '../Assets/assets'

import { FaFigma, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiReactjsFill, RiVideoOnAiFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiAdobephotoshop, SiMongodb, SiSupabase, SiTypescript } from 'react-icons/si';
import { PiFileSql } from 'react-icons/pi';
import { GrGithub } from 'react-icons/gr';

export const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const heroData = {
  name: 'Aditya Mandal',
  role: 'aka @NulledFacedDev',
  about_ln1:
    'a Full-stack developer with 1+ year of hands on experience web apps and websites -',
  about_ln2:
    "currently a college student who has been in development to build experiences not AI slop, I'm a self taught developer usually creating products using React, Next, TanStack and TailwindCSS",
  about_ln3: (
    <>
      Also trying to break into content creation in teach and building{' '}
      <a
        href="https://mogger-mog-your-exams.vercel.app/"
        target="_blank"
        className="text-blue-500 hover:text-green-500 transition duration-200 ease-in-out"
      >
        @Mogger
      </a>
    </>
  ),
  about_ln4:
    'I love exploring new tech and to contribute when ever I can so feel free to reach me out if you need any help ^_^',
}

export const contactData = {
  title: 'Contact Info',
  message:
    "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: 'nullfaceddevbusiness@gmail.com',
  gh: 'https://github.com/aditya-wuw',
  linkedIN: 'https://www.linkedin.com/in/aditya-mandal-a30347294',
  CV: assets.CV,
}

export const details = {
  employement: 'Freelancer',
  favGame: 'I love persona',
  techstack: (
    <span className="flex gap-2 items-center">
      <RiNextjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <SiTypescript className="hover:scale-115 scale-100 cursor-pointer" />
      <RiReactjsFill className="hover:scale-115 scale-100 cursor-pointer" />
    </span>
  ),
}

const icon_size:string = "w-7 h-7"
export const skillsData = {
  title: 'Skills',
  items: [
  { Name: "Next.js", Comp: <RiNextjsFill className={icon_size} />},
  { Name: "React", Comp: <FaReact className={icon_size}/>, color:"group-hover:text-blue-300" },
  { Name: "TypeScript", Comp: <SiTypescript className={icon_size} />,color:"group-hover:text-blue-600" },
  { Name: "Tailwind CSS", Comp: <RiTailwindCssFill className={icon_size} />,color:"group-hover:text-blue-400"  },
  { Name: "Supabase", Comp: <SiSupabase className={icon_size} />,color:"group-hover:text-green-700"  },
  { Name: "Node.js", Comp: <FaNodeJs className={icon_size} />,color:"group-hover:text-green-500"  },
  { Name: "SQL", Comp: <PiFileSql className={icon_size} /> ,color:"group-hover:text-sky-700" },
  { Name: "MongoDB", Comp: <SiMongodb className={icon_size} />,color:"group-hover:text-green-700"  },
  { Name: "Python", Comp: <FaPython className={icon_size} />,color:"group-hover:text-sky-700"  },
  { Name: "Figma", Comp: <FaFigma className={icon_size} />},
  { Name: "Adobe Photoshop", Comp: <SiAdobephotoshop className={icon_size} />,color:"group-hover:text-blue-800"  },
  { Name: "Video Editing", Comp: <RiVideoOnAiFill className={icon_size} />},
]
}

export const projectsData = {
  title: 'Projects',
  items: [
    {
      title: 'Mogger AI',
      Link: 'Mogger_AI',
      description:
        'AI-powered web app that generates personalized mock tests to help students prepare effectively for exams.',
      image: assets.screenshot2,
      tags: ['NEXT', 'Tailwind', <SiSupabase className="h-4 w-4" />, 'Live'],
      links: [
        {
          label: 'View',
          url: 'https://mogger-mog-your-exams.vercel.app/',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/Mogger-Mog-your-exams',
        },
      ],
    },
    {
      title: 'FireShip Discord bot',
      Link: 'FireShip_Discord_bot',
      description:
        'FireShip bot is a Discord bot designed to keep users up to date with the latest videos',
      image: assets.Fireship,
      tags: ['Node', 'Express', 'YTV3', 'Api'],
      links: [
        {
          label: 'none',
          url: 'none',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/FireShipBot',
        },
      ],
    },
    {
      title: 'HMS-dashbord',
      Link: 'HMS-dashbord',
      description:
        'Was tasked to build a Admin Hospital Management System Dashbord, no auth you can directly check the live demo',
      image: assets.screenshot5,
      tags: ['React', 'Api', 'Express', 'Live'],
      links: [
        {
          label: 'none',
          url: 'none',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/HMS-Dashbord',
        },
      ],
    },
    {
      title:'Persona Themed Portfolio',
      Link: 'Portfolio',
      description:
        'As persona series is one of my most favorite games of all time and helped me get though a lot of things in life, I made this portfolio website themed on persona 3 reload',
      image: assets.screenshot1,
      tags: ['React', 'Express', 'Api', 'Live'],
      links: [
        { label: 'View', url: 'https://portfolio-aditya-mandal.onrender.com/' },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/Portfolio-Aditya-Mandal',
        },
      ],
    },
  ],
}

export const Notes_blog = [
  {
    tittle:"Today I laerned to be a brave man",
    link:"brave_man",
    date: "20th dec 2025",
  },
  {
    tittle:"Today I laerned to be a dasdasdadas man",
    link:"brave_mand2",
    date: "20th dec 2025",
  }
]


