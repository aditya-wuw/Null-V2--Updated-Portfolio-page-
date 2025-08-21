import { createThemeContext } from '@/Context/context'
import { motion, useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'

const Cover = React.memo(() => {
  const { LightTheme, setisinView } = createThemeContext()
  const AMinView = useRef<HTMLAnchorElement | null>(null)
  const isInView = useInView(AMinView)
  useEffect(() => {
      setisinView(isInView)
  }, [isInView])
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
          src="/Video_bg/Persona -3-Reload Menu-bg.mp4"
          className={` absolute lg:-top-23`}
          width={2250}
          height={1200}
          muted
          autoPlay
          loop
        />
      </div>
    </motion.a>
  )
})

export default Cover
