import { createThemeContext } from '@/Context/context'
import { contactData, details } from '@/data/data';

import { FaGithub, FaLinkedin, FaRegHandshake, FaRunning } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";
import { SiFunimation } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";

import React, { Suspense } from 'react';
const Live = React.lazy(()=>import('@/components/Animated/Live'))

const Details = React.memo(() => {
    const {LightTheme} = createThemeContext()
  return (
    <div
      className={`select-none h-[102%] p-3 relative overflow-hidden ${LightTheme ? 'bg-white text-black border border-black/30 rounded-xl' : 'bg-black text-white border border-white/30 rounded-xl'} bottom-3 relative`}
    >   
        <h1 className='text-xl font-bold mb-5'>Details</h1>
        <section className='flex justify-center gap-2'>
             <a href={contactData.gh} target='_blank'>
                <FaGithub className='w-5 h-5 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out'/>
            </a>
             <a href={contactData.linkedIN} target='_blank'>
                <FaLinkedin className='w-5 h-5 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out'/>
            </a>
             <a href={contactData.CV} target='_blank' className='flex items-center font-bold hover:scale-115 scale-100 transition-scale duration-300 ease-in-out animate-bounce'>
                <PiReadCvLogoBold className='w-5 h-5 cursor-pointer '/><h1>CV</h1>
            </a>
        </section>
        <div className='text-[15px] m-1'>
          <a href={`mailto:${contactData.email}`} className='transition-scale duration-200 ease-in-out flex items-center  gap-1 break-all text-md'>
                <MdAttachEmail className='w-5 h-5 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out'/> <h2>{contactData.email}</h2>
          </a>    
        </div>
        <div className='mx-1'>
          <section className='flex gap-1 items-center'>
            <FaRunning className='w-4 h-4 hover:scale-115 scale-100 cursor-pointer'/>
            <h1>Going to - College</h1>
            <div>
              <Suspense>
                <Live status='Currently 3rd year'/>
              </Suspense>
            </div>
          </section>
          <section className='flex gap-1 items-center'>
            <FaRegHandshake className='w-4 h-4 hover:scale-115 scale-100 cursor-pointer'/>
            <h1>Employment -{details.employment}</h1>
          </section>
          <section className='flex gap-1 items-center'>
            <SiFunimation className='w-4 h-4 hover:scale-115 scale-100 cursor-pointer'/>
            <h1>one fact -{details.favGame}</h1>
          </section>
          <section className='flex gap-1 items-center'>
            <GrTechnology className='w-4 h-4 hover:scale-115 scale-100 cursor-pointer'/>
            <h1>Tech Stack -</h1> 
            {details.techstack}
          </section>
        </div>
    </div>
  )
})

export default Details
