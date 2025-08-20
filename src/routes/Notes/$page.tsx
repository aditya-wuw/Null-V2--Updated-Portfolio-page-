import { createThemeContext } from '@/Context/context'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import {motion} from 'motion/react'
import { MdArrowBackIos } from 'react-icons/md'
import { Notes_blog} from '@/data/data'
export const Route = createFileRoute('/Notes/$page')({
  component: RouteComponent,
})

function RouteComponent() {
  const {page} = Route.useParams()
   const { setisinView, LightTheme } = createThemeContext()

    useEffect(() => {
      setisinView(false)
    }, [])
    
  return (
    <div>
      <Link
        to="/"
      >
        <button className={`${!LightTheme ? 'bg-white text-black' : 'bg-black text-white'} p-1 px-3 text-xl font-light rounded-xl mb-3 cursor-pointer`}>
          <MdArrowBackIos />
        </button>
      </Link>
      {Notes_blog.map((item, i) => (
        <div key={i}>
          {item.link === page && (
            <motion.div
              className={`${LightTheme ? 'bg-white text-black' : 'bg-black text-white'} flex gap-5 flex-col rounded-2xl px-5 py-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <h1 className="text-2xl max-lg:text-xl font-bold">
                {item.title}
              </h1>
              <h1>{item.posted && !item.edited ? "posted on ": "edited " }{item.date}</h1>
              <div className='h-55 max-[482px]:h-35 w-[100%] overflow-hidden rounded-2xl relative'>
                <img src={item.banner} width={2000} height={300} className='object-cover 2xl:-top-30 xl:-top-15 absolute'/>
              </div>
              <p className="text-md max-lg:text-sm tracking-wide">{item.description}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
