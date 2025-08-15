import { createThemeContext } from '@/Context/context'
import { skillsData } from '@/data/data'
import React from 'react'

const Skills = React.memo(() => {
  const {LightTheme} = createThemeContext()
  return <div className={`p-3 ${LightTheme ? "bg-white text-black border border-black/30 rounded-xl" : "bg-black text-white border border-white/30 rounded-xl"} w-full h-full`}>
    <h1 className='text-xl font-bold mx-2'>Skills</h1>
    <div className='flex flex-wrap gap-2 mx-2 mt-3'>
      {skillsData.items.map((item,i)=>(
        <div key={i} className='relative group hover:scale-105 scale-100 cursor-pointer'>
        <span className={`absolute -top-10 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 p-2 text-xs whitespace-nowrap pointer-events-none rounded-2xl ${!LightTheme ? "bg-white text-black":"bg-black text-white"}`} >{item?.Name}</span>
        <span className={`${item.color}`}>
          {item.Comp}
        </span>
      </div>))}
    </div>
  </div>
})

export default Skills
