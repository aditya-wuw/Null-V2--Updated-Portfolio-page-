import { assets } from '../Assets/assets'

import { FaFigma, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import {
  RiNextjsFill,
  RiReactjsFill,
  RiVideoOnAiFill,
  RiTailwindCssFill,
} from 'react-icons/ri'
import {
  SiAdobephotoshop,
  SiMongodb,
  SiPaloaltonetworks,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si'
import { PiFileSql, PiProjectorScreenFill } from 'react-icons/pi'
import { GrGithub } from 'react-icons/gr'

export const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const heroData = {
  name: 'Aditya Mandal',
  role: 'aka @NulledFacedDev',
  about_ln1:
    'a Frontend Developer dabbling in Full-Stack with 1+ year of hands-on experience web apps and websites -',
  about_ln2:
    "currently a college student. I'm a self taught developer usually creating products using React, Next, TanStack and TailwindCSS",
  about_ln3: (
    <>
      I'm constantly reaching out to people who share the same passion for
      building and learning as me so feel free to get in touch :)
    </>
  ),
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
  employment: 'Freelancer',
  favGame: 'I love persona',
  techstack: (
    <span className="flex gap-2 items-center">
      <RiNextjsFill className="hover:scale-115 scale-100 cursor-pointer" />
      <SiTypescript className="hover:scale-115 scale-100 cursor-pointer" />
      <RiReactjsFill className="hover:scale-115 scale-100 cursor-pointer" />
    </span>
  ),
}

const icon_size: string = 'w-7 h-7'
export const skillsData = {
  title: 'Skills',
  items: [
    { Name: 'Next.js', Comp: <RiNextjsFill className={icon_size} /> },
    {
      Name: 'React',
      Comp: <FaReact className={icon_size} />,
      color: 'group-hover:text-blue-300',
    },
    {
      Name: 'TypeScript',
      Comp: <SiTypescript className={icon_size} />,
      color: 'group-hover:text-blue-600',
    },
    {
      Name: 'Tailwind CSS',
      Comp: <RiTailwindCssFill className={icon_size} />,
      color: 'group-hover:text-blue-400',
    },
    {
      Name: 'Supabase',
      Comp: <SiSupabase className={icon_size} />,
      color: 'group-hover:text-green-700',
    },
    {
      Name: 'Node.js',
      Comp: <FaNodeJs className={icon_size} />,
      color: 'group-hover:text-green-500',
    },
    {
      Name: 'SQL',
      Comp: <PiFileSql className={icon_size} />,
      color: 'group-hover:text-sky-700',
    },
    {
      Name: 'MongoDB',
      Comp: <SiMongodb className={icon_size} />,
      color: 'group-hover:text-green-700',
    },
    {
      Name: 'Python',
      Comp: <FaPython className={icon_size} />,
      color: 'group-hover:text-sky-700',
    },
    { Name: 'Figma', Comp: <FaFigma className={icon_size} /> },
    {
      Name: 'Adobe Photoshop',
      Comp: <SiAdobephotoshop className={icon_size} />,
      color: 'group-hover:text-blue-800',
    },
    { Name: 'Video Editing', Comp: <RiVideoOnAiFill className={icon_size} /> },
  ],
}

export const projectsData = {
  title: 'Projects',
  items: [
    {
      title: 'Mogger AI',
      Link: 'Mogger_AI',
      description:
        'AI-powered web app that generates personalized mock tests to help students prepare effectively for exams.',
      additional_dec:
        'send a prompt and see the magic as it creates a virtual mock test simulation for you',
      dedicated_dec: (
        <p>
          <b className="text-lg">Mogger AI</b> is an AI-powered web application
          designed to help students prepare effectively for exams by generating
          personalized mock tests. What started as a simple curiosity project
          turned into a real-world solution that adapts questions to user needs,
          making preparation more dynamic and engaging.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2  flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
            </h1>
            <p className="text-lg">
              I use GPT to test and generate random questions very often but, it
              became really redundant and not really efficient for me and my
              studies. so I got the idea from my own problem where I wanted a
              virtual mock test environment that generates questions based on my
              given instructions, that's how I got the idea of Mogger.AI
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How it works
            </h1>
            <p className="text-lg">
              It takes a user input as a Prompt and generates a set of questions
              for practice or testing learnings. Users can send PDF's of their
              personalized notes to create questions based on their written
              notes. In this way they will be able to test their skills and
              memorize faster and better with the help of AI, and GPT's we can
              create questions with unique seeds so that questions can be unique
            </p>
            <p className="text-md italic">
              (currently it's a very basic version so the questions may be
              repeating or too easy)
            </p>
          </section>
        </p>
      ),
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
      additional_dec:
        "Fire ship is the goat and no one can deny that. So, I made this bot to get up to date with the channel as I'm busy gaming with my discord kittens ",
      dedicated_dec: (
        <p>
          <b className="text-lg">FireShipBot</b> is an automation tool built to
          fetch the latest videos from the Fireship YouTube channel and send
          instant updates to a Discord server. Instead of manually checking
          YouTube, this bot makes sure the community never misses a new upload.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
            </h1>
            <p className="text-lg">
              As a fan of Fireship’s short, fast-paced tech videos, I often
              wanted a quick way to know when a new one was out. So I created
              FireShipBot, a cron job–powered bot that automatically checks for
              new uploads and pushes them into Discord without needing YouTube
              notifications.
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How it works
            </h1>
            <p className="text-lg">
              The bot runs on a 24-hour cron schedule. It calls the YouTube Data
              API to check for the latest Fireship video, compares it with the
              last stored entry, and if there’s a new upload, sends an embedded
              message to a Discord server via a webhook. This way, the whole
              server stays updated automatically.
            </p>
          </section>
        </p>
      ),
      image: assets.Fireship,
      tags: ['Node', 'Express', 'YTV3'],
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
      title: 'HMS-dashboard',
      Link: 'HMS_dashboard',
      description:
        'Was tasked to build a Admin Hospital Management System Dashboard, no auth you can directly check the live demo',
      additional_dec: 'yeah average Dev ah project what else I can say',
      dedicated_dec: (
        <p>
          <b className="text-lg">HMS Dashboard</b> is a healthcare management
          system built during an online hackathon. It was designed to provide an
          all-in-one interface for patient records, doctor scheduling, and
          hospital analytics in a clean, user-friendly dashboard.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
            </h1>
            <p className="text-lg">
              The idea came during a hackathon where we had to solve a
              real-world problem in healthcare. We realized hospitals often face
              trouble in organizing patient data and schedules, so we aimed to
              design a dashboard that simplifies hospital workflows with modern
              UI/UX.
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How it works
            </h1>
            <p className="text-lg">
              The HMS Dashboard integrates patient registration, appointment
              booking, doctor availability, and hospital statistics in one
              platform. It was built using React and backend APIs, focusing on
              speed and clarity. Doctors and admins can log in, manage data, and
              track insights all from one dashboard.
            </p>
            <p className="text-md italic">
              (prototype built in 24 hours for the hackathon)
            </p>
          </section>
        </p>
      ),
      image: assets.screenshot5,
      tags: ['React', 'Express', 'Live'],
      links: [
        {
          label: 'none',
          url: 'none',
        },
        {
          label: <GrGithub className="w-6 h-6" />,
          url: 'https://github.com/aditya-wuw/HMS-Dashboard',
        },
      ],
    },
    {
      title: 'Persona Themed Portfolio',
      Link: 'Portfolio',
      description:
        'As persona series is one of my most favorite games of all time. So, I made this portfolio website themed on persona 3 reload',
      additional_dec: 'when passion meets profession absolute chinema !',
      dedicated_dec: (
        <p>
          <b className="text-lg">Persona Portfolio</b> is a creative,
          persona-themed personal website built to showcase projects, skills,
          and experiences in a fun and unique narrative style. Instead of a
          traditional resume, it feels like exploring a digital story.
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <PiProjectorScreenFill />
              Project idea
            </h1>
            <p className="text-lg">
              Traditional portfolios often look too formal and repetitive, so I
              decided to build one that feels alive and matches my personality.
              The idea was to use “persona cards” and themed sections to tell a
              story rather than just listing skills and projects.
            </p>
          </section>
          <section className="mx-5">
            <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
              <SiPaloaltonetworks />
              How it works
            </h1>
            <p className="text-lg">
              The portfolio uses a React-based frontend styled with Tailwind.
              Each section (About, Projects, Skills, Contact) is presented as
              part of a themed persona experience with interactive animations.
              Visitors feel like they`re exploring a character profile while
              discovering my work and achievements.
            </p>
          </section>
        </p>
      ),
      image: assets.screenshot1,
      tags: ['React', 'UI', 'Portfolio', 'Live'],
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
    title: 'My perspective of using AI',
    link: 'about_ai',
    banner: assets.vro,
    description: (
      <article className="flex flex-col gap-4">
        <article>
          I've been on the "AI hype train" for a while now, and it's a
          thrilling, slightly chaotic ride. While everyone's talking about the
          next big model, I'm more interested in the practical, everyday
          applications—the ones that simplify my life and amplify my work. It's
          like having a hyper-efficient intern who never sleeps, complains, or
          steals my snacks.
        </article>
        <article>
          I got an idea to build a personal AI assistant. Not just a chatbot,
          but a custom tool to handle my mundane tasks. Think of it as a digital
          butler that organizes my schedule, drafts emails based on my
          conversational style, and even helps me ideate on new projects. The
          goal is to offload the repetitive, low-impact tasks so I can focus on
          the truly creative and strategic work.
        </article>
        <article>
          But the problem is, if AI will do all this work, I will become lazy.
          Even though it helps with productivity, it also gives you creative
          burnout and less creative freedom. I believe what makes something
          unique is the uneven and random ideas from humanity, which make
          something truly remarkable. AI can only visually recreate the work,
          but it can't portray the emotional burden or the late-night thinking
          that went into a specific change, which is what makes it truly
          remarkable.
        </article>
        <article>
          if you find this article cool then follow me on twitter
          <a
            href="https://x.com/GenzaGenza"
            target="_blank"
            className="ml-1 text-green-400"
          >
            @GenzaGenza
          </a>
        </article>
      </article>
    ),
    date: '25th Aug 2025',
    posted: true,
    edited: false,
  },
  {
    title: 'Creating a Minecraft Server for my Friends',
    link: 'Minecraft_Server_blog',
    banner: assets.minecraft_,
    description: (
      <article className="flex flex-col gap-4">
        <article>
          I was playing Minecraft with my friends, we enjoy building creative
          things and let's just say our epic creations deserve better than a
          random server crash, less simulation distance so that our farms takes
          a holiday trip with Jet2holidays or my pal Steve's TNT obsession{' '}
          <i className="text-blue-500">
            (please don't summon wither I beg you)
          </i>
        </article>
        <article>
          So, I got an idea. What if I grab a Raspberry Pi and dive into
          building a self-hosted Minecraft Java Edition server with some spicy
          flair - a custom Java API for Google Drive backups, a web interface
          for my crew to control it, and a downtime schedule to keep my Pi from
          turning into Crispy Pi ^O^
        </article>
        <article>
          I'm planning to test all the code in a test VM environment and then
          setting up the Minecraft Java Edition server on my Raspberry Pi 4
          (4GB, because I'm broke T_T hire me bro like you won't regret having
          me around plaeaas). Getting the server running might be the easy
          part—install Java 21, grab the server JAR, and tweak some settings to
          make it our own. But I'm not stopping at basic. I'm cooking up a
          custom Java API to zip and upload the world file to Google Drive using
          a cron job for nightly backups
        </article>
        <article>
          It's a work in progress, so I'll update what I achieved though my site
          <a href="" className="ml-1 text-blue-600">
            @nullfaceddev
          </a>{' '}
          or via my twitter/X account
          <a
            href="https://x.com/GenzaGenza"
            target="_blank"
            className="ml-1 text-green-400"
          >
            @GenzGenza
          </a>
        </article>
      </article>
    ),
    date: '19th Aug 2025',
    posted: true,
    edited: false,
  },
]
