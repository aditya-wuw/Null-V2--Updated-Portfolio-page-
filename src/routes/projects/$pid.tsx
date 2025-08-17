import { createThemeContext } from '@/Context/context'
import { projectsData } from '@/data/data'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
export const Route = createFileRoute('/projects/$pid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pid } = Route.useParams()
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
      {projectsData.items.map((item, i) => (
        <div key={i}>
          {item.Link === pid && (
            <motion.div
              className={`${LightTheme ? 'bg-white text-black' : 'bg-black text-white'} flex gap-5 flex-col rounded-2xl px-5 py-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <h1 className="text-2xl max-lg:text-xl font-bold">
                {item.title}
              </h1>
              <div className='h-55 max-[482px]:h-35 w-[100%] overflow-hidden rounded-2xl relative'>
                <img src={item.image} width={2000} height={300} className='object-cover absolute 2xl:-top-45 xl:-top-15'/>
              </div>
              <p className="text-md max-lg:text-sm">{item.dedicated_dec}</p>
              <div className='flex gap-3 items-center justify-end mb-3'>
                {item.links.map((item,i)=>( item.label !== "none" && <a key={i} className={`${typeof item.label === "string" && item.label !== "none" && "p-1 bg-blue-500 rounded-md"}`} href={item.url} >{item.label}</a>))}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
