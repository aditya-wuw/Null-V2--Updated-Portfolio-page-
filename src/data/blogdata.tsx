import { assets } from '../Assets/assets'

const x = <a
            href="https://x.com/GenzaGenza"
            target="_blank"
            className="ml-1 text-green-400"
          >
            @GenzaGenza
          </a>

export const Notes_blog = [
  {
    title: 'What makes Programming fun for me',
    link: 'about_what_makes_it_fun',
    banner: null,
    description: (
      <article className="flex flex-col gap-2">
        <article>
          Programming is not just a skill — it’s a way of expression. What makes
          it fun for me is the creative process behind it. I love taking an idea
          that starts in my head, writing a few lines of code, and suddenly
          seeing it come alive on the screen. It’s like giving life to something
          that didn’t exist before — turning a blank file into something that
          moves, reacts, and interacts back.
        </article>
        <article>
          For me, building projects isn’t just about logic or syntax; it’s about
          creation. Whether it’s a tiny tool that makes my workflow easier or a
          fun, interactive app that others can enjoy, every project feels like a
          mix of art and engineering. That moment when something finally works —
          that spark of “I made this!” — is what makes programming so exciting.
        </article>
        <article>
          In a way, coding feels like sculpting with logic. You start with
          nothing, and through creativity, problem-solving, and curiosity, you
          end up shaping something functional and alive. That’s why programming
          will always be more than a job to me — it’s a playground for
          imagination.
        </article>
        <article>
          I'm currently expanding my programming skills so that I can one day
          achieve my dream of creating a great video game. I just can’t get over
          how difficult it is to think outside the box — but still, I’ll keep
          trying, and I’ll figure it out.
        </article>
        <article>if you found my perspective cool then thank you by{x}</article>
      </article>
    ),
    date: '5th Sept 2025',
    posted: true,
    edited: false,
  },
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
          setting up the Minecraft Java Edition server on a Raspberry Pi 4 (4GB,
          because I'm broke). Getting the server running might be the easy
          part—install Java 21, grab the server JAR, and tweak some settings to
          make it our own. But I'm not stopping at basic. I'm cooking up a
          custom Java API to zip and upload the world file to Google Drive using
          a cron job for nightly backups
        </article>
        <article>
          <b>Update! </b>
          <span className="text-red-500">
            I had to stop the project as I couldn't find a Raspberry Pi for the
            project but still I managed to build my own server and host it using
            the Mojhang SDK and also added custom logic for saving the world
            data. But it was a very fun project to work with.
          </span>
        </article>
        <article>
          if you find this article cool then follow me on twitter
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
    date: '19th Oct 2025',
    posted: true,
    edited: true,
  },
]
