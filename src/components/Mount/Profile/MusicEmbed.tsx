import { createThemeContext } from '@/Context/context'
import React, { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa'
import { FaCompactDisc } from "react-icons/fa6";
import {animate, motion, useMotionValue, type AnimationPlaybackControls} from 'motion/react'

const MusicEmbed = React.memo(() => {
  // do somthing later
  // want to import a data object of the full play list where I'll want to store the background and sound track

  const Rotate_control_ref = useRef<AnimationPlaybackControls | null>(null)
  const player_control_style: string = 'cursor-pointer hover:scale-130 scale-140 transiton duration-200 ease-in-out '
  const { LightTheme } = createThemeContext()
  const [isplaying, setplaying] = useState(false)
  const rotate = useMotionValue(0);
  const title:string = "It's going down by - lotus 50 and ariana jones"
  useEffect(()=>{
      const Rotate_control = animate(rotate,[0,360],{duration:1,repeat:Infinity,ease:'linear'})
      Rotate_control.pause()
      Rotate_control_ref.current = Rotate_control
  },[])

  function handlePlaying() {
    if(!isplaying){
        Rotate_control_ref.current?.play()
    }
    else{
        Rotate_control_ref.current?.pause()
    }
    setplaying(!isplaying)
  }

  //make the function for the music player
  return (
    <div
      className={`w-full h-full select-none relative rounded-2xl overflow-hidden ${LightTheme ? 'bg-blue-500' : 'bg-blue-700'}`}
    >
      <div className="p-2">
        {/* dinamically change the background based on the cover picture of the music */}
        <img
          src="/Images_Optimized/Cover/cover_art_411.webp"
          alt="bg-media-player"
          className="bg_cover object-cover absolute -top-20 right-0 mask-r-from-1% mask-t-from-40% z-1"
        />
        <motion.div className='text-white absolute z-3 -top-3 right-3'
            style={{rotate}}
        >
            <FaCompactDisc className='scale-400 w-full h-5'/>
        </motion.div>
        <div className="relative translate-y-8 z-10 w-full px-4">
          <section className="w-full flex justify-end mb-2">
            <div className='text-end text-white'>
              <h1 className="w-73 overflow-hidden ">
                {/* here if the string legth is hight than 30 animate the text to move from left to right  */}
                <motion.span className='whitespace-nowrap xl:text-xl text-md'
                    
                >
                    {title}
                </motion.span>
              </h1>
              <h1 className="xl:text-md text-sm">01:30/3:24</h1>
            </div>
          </section>
          <section className="player_control w-full flex gap-3 px-2 items-center">
            <div className="seek_bar relative w-[80%] translate-y-1">
              <span className="absolute z-10 bottom-[3px] bg-white w-[100%] h-[2px]" />
              <span className="absolute bottom-0 z-11 rounded-full bg-white w-2 h-2 cursor-pointer hover:scale-180 scale-100 transition duration-200 ease-in-out" />
            </div>
            <ul className={`flex gap-6 text-white items-center w-fit`}>
              <li className={`${player_control_style}`}>
                <FaBackward />
              </li>
              <li className={`${player_control_style}`} onClick={handlePlaying}>
                {' '}
                {isplaying ? <FaPause /> : <FaPlay />}
              </li>
              <li className={`${player_control_style}`}>
                <FaForward />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
})

export default MusicEmbed
