import { createThemeContext } from '@/Context/context'
import { motion, useInView } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import video from "/Video_bg/Persona -3-Reload Menu-bg.mp4"
const Cover = React.memo(() => {
  const { LightTheme, setisinView } = createThemeContext()
  const AMinView = useRef<HTMLAnchorElement | null>(null)
  const videoref = useRef<HTMLVideoElement>(null)
  const [loaded,setisloaded] = useState<boolean| null>(false)
  const isInView = useInView(AMinView)
  useEffect(() => {
      setisinView(isInView)
      if(!videoref.current) return
      if(videoref.current.readyState >= 1){
        setisloaded(true)
      }
  }, [isInView,videoref])
  return (
    <motion.a
      href="https://www.youtube.com/watch?v=60wWZH49MzE"
      target="_black"
      ref={AMinView}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeIn' }}
    >
      <div className="relative">
        <h1
          className={`absolute z-2 italic top-7 right-0 text-9xl max-lg:text-8xl max-lg:top-15 max-sm:text-6xl max-sm:top-12 font-extrabold ${LightTheme ? 'text-blue-400' : 'text-black'}`}
        >
          AM
        </h1>
        <video
          src={video}
          ref={videoref}
          className={` absolute lg:-top-23 ${loaded ? 'opacity-100':'opacity-0'} transition-opacity ease-in-out duration-200`}
          width={2250}
          height={1200}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
    </motion.a>
  )
})

export default Cover
