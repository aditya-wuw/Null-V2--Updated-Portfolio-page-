import { createThemeContext } from '@/Context/context'
import { Notes_blog } from '@/data/data'
import React from 'react';
import { TbPointFilled } from "react-icons/tb";

const Notes = React.memo(() => {
  const { LightTheme } = createThemeContext()
  return (
    <div
      className={`p-3 select-none ${LightTheme ? 'bg-white text-black  rounded-xl' : 'bg-black text-white rounded-xl'}`}
    >
      <div className='mx-3'>
        <h1 className="text-xl font-bold">Notes</h1>
        <h1>My take and notes on development, events or creative ideas</h1>
        <div className='mt-3 relative'>
          {Notes_blog.map((item, i) => (
            <div key={i} className='flex gap-2 mb-5'>
              <div>
                <TbPointFilled className='mt-1'/>
              </div>
              <section className={` px-4 py-2 rounded-2xl cursor-pointer ${LightTheme ? 'hover:bg-blue-200' : 'hover:bg-blue-500'}`}>
                <h1>{item.tittle}</h1>
                <h1>{item.date as unknown as string}</h1>
              </section>
            </div>
          ))}
          <div className='h-[80%] absolute border-l top-3 left-2'/>
        </div>
      </div>
    </div>
  )
})

export default Notes
