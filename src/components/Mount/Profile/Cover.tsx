import { createThemeContext } from '@/Context/context'
import { motion } from 'motion/react'
import React from 'react'

const Cover = React.memo(() => {
  const { LightTheme } = createThemeContext()
  return (
    <motion.a
      href="https://wall.alphacoders.com/big.php?i=1364253"
      target="_black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeIn' }}
    >
      <div className="relative">
        <h1
          className={`absolute z-2 italic top-7 right-0 text-9xl max-lg:text-5xl max-lg:top-1 font-extrabold ${LightTheme ? 'text-blue-400' : 'text-black'}`}
        >
          AM
        </h1>
        <video src="/Video_bg/Persona -3-Reload Menu-bg.mp4"  
          className={` absolute lg:-top-23`}
          width={2250}
          height={1200}
          muted autoPlay
        />
      </div>
    </motion.a>
  )
})

export default Cover
