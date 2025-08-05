import { createThemeContext } from '@/Context/context'
import { skillsData } from '@/data/data'

const Skills = () => {

  const {LightTheme} = createThemeContext()

  return <div className={`p-3 ${LightTheme ? "bg-white text-black border border-black/30 rounded-xl" : "bg-black text-white border border-white/30 rounded-xl"} w-fit`}>
    <h1 className='text-xl font-bold mx-2'>Skills</h1>
    <div className='flex flex-wrap gap-2 mx-2 mt-3'>
      {skillsData.items.map((item,i)=>(<div key={i} className='hover:scale-105 scale-100 cursor-pointer' >
        {item}
      </div>))}
    </div>

  </div>
}

export default Skills
