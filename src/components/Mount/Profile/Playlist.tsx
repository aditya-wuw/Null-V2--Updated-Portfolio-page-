import { createThemeContext } from '@/Context/context'
import React from 'react'
import { motion } from 'motion/react'
import Music from '@/data/music.json'
import { FaExternalLinkAlt, FaPause } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa6'
import { RiArrowUpWideFill } from "react-icons/ri";

const Playlist = () => {
  const { LightTheme, ShowPlaylist,setShowPlaylist, MusicPlayer, Track_rec } =
    createThemeContext()
  return (
    <motion.div
      className={`${
        LightTheme
          ? 'text-black bg-white border-black/30 border-[0.2px]'
          : 'text-white bg-black border-white/30 border-[0.2px]'
      } w-full rounded-xl overflow-hidden select-none`}
      initial={false} // important so it doesn’t animate on first render
      animate={{
        maxHeight: ShowPlaylist ? '45vh' : '0vh',
        opacity: ShowPlaylist ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: 'circInOut' }}
    >   
        <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mx-5 mt-2">My Goated Playlist</h1>
            <h1 className="text-2xl font-bold mx-5 mt-2"onClick={()=>setShowPlaylist(!ShowPlaylist)}><RiArrowUpWideFill className={`${ShowPlaylist ? 'rotate-y-180': 'rotate-y-0'} transition duration-300 ease-in-out cursor-pointer ${LightTheme ? "hover:bg-black/50":"hover:bg-white/30 p-1 rounded-xl"}`}/></h1>
        </div>
      <div className="m-2 p-5 overflow-y-auto max-h-[40vh] scroll_bar_ scroll_bar_thumb group cursor-pointer">
        {Music.map((track, i: number) => (
          <section
            className={`flex gap-3 items-center group rounded-xl ${LightTheme ? 'hover:bg-gray-800/20' : 'hover:bg-white/20'} py-3 px-2 justify-between`}
            key={i}
          >
            <div className="flex items-center gap-3">
              <span
                onClick={() => {
                  MusicPlayer.handle_next('play', i)
                }}
              >
                {!Track_rec[i].isplaying ? (
                  <FaPlay className="hover:scale-125 transtion duration-300 ease-in-out" />
                ) : (
                  <FaPause className="hover:scale-125 transtion duration-300 ease-in-out" />
                )}
              </span>
              <span className="overlfow-hidden ml-5">
                <img
                  className="rounded-md"
                  src={track?.banner}
                  alt="album.png"
                  width={40}
                  height={40}
                />
              </span>
              <h1>{track.Title}</h1>
            </div>
            <div>
              <a
                href="https://wwww.youtube.com/watch?=dsadahskjd"
                target="_blank"
              >
                <FaExternalLinkAlt className="cursor-pointer hover:scale-125 transtion duration-300 ease-in-out" />
              </a>
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  )
}

export default React.memo(Playlist)
