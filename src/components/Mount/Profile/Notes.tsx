import { createThemeContext } from '@/Context/context'
import { Notes_blog } from '@/data/data'
import { useNavigate } from '@tanstack/react-router';
import React from 'react';
import { TbPointFilled } from "react-icons/tb";

const Notes = React.memo(() => {
  const { LightTheme } = createThemeContext()
  const Router = useNavigate()
  const hadnleclick = (e:string) =>{
    Router({to: `/Notes/${e}`})
  }
  return (
    <div
      className={`p-3 select-none ${LightTheme ? 'bg-white text-black  rounded-xl' : 'bg-black text-white rounded-xl'}`}
    >
      <div className='mx-2'>
        <h1 className="text-xl font-bold">Notes</h1>
        <h1>My notes on development, events, experience or creative ideas</h1>
        <div className='mt-3 relative h-fit'>
          <div className='h-full absolute border-l top-4 left-2'/>
          {Notes_blog.map((item, i) => (
            <div key={i} className='flex gap-2 mb-5'>
              <div>
                <TbPointFilled className='mt-1'/>
              </div>
              <section className={` px-4 py-2 rounded-2xl cursor-pointer ${LightTheme ? 'hover:bg-blue-200' : 'hover:bg-blue-500'}`} onClick={()=>hadnleclick(item.link)}>
                <h1>{item.title}</h1>
                <h1>{item.date}</h1>
              </section>
            </div>
          ))}
        </div>
      </div>
      <TbPointFilled className='relative left-[8.3px] bottom-0'/>
    </div>
  )
})

export default Notes
