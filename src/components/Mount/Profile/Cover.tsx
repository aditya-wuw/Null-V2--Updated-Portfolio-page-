import {motion} from 'motion/react'
import React from 'react'

const Cover = React.memo(() => {
  return (
        <motion.a href="https://wall.alphacoders.com/big.php?i=1364253" target='_black'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1.2, ease:'easeIn'}}
        >
          <img fetchPriority='high' src='/Images_Optimized/Cover/cover_art_411.webp' srcSet='/Images_Optimized/Cover/cover_art_754.webp 1x, /Images_Optimized/Cover/cover_art_1080.webp 2x, /Images_Optimized/Cover/cover_art_fullres.webp 3x' alt="cover.png" className={`object-cover w-full h-full object-center`} width={2250} height={1200}/>
        </motion.a>
  )
})

export default Cover
