import { createThemeContext } from '@/Context/context'

const Projects = () => {
  const { LightTheme } = createThemeContext()

  return (
    <div className={`p-3 ${LightTheme ? "bg-white text-black border border-black/30 rounded-xl" : "bg-black text-white border border-white/30 rounded-xl"}`}>
      <h1 className='text-xl font-bold'>Projects</h1>
      <section className='project_section'>
          
      </section>
    </div>
  )
}

export default Projects
