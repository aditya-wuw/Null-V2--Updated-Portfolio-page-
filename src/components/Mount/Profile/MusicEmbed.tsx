import { createThemeContext } from '@/Context/context'
import React, { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa'
import { FaCompactDisc } from 'react-icons/fa6'
import {
  animate,
  motion,
  useMotionValue,
  type AnimationPlaybackControls,
} from 'motion/react'
import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { PiSpeakerXFill } from 'react-icons/pi'

const MusicEmbed = React.memo(() => {
  // do somthing later
  // want to import a data object of the full play list where I'll want to store the background and sound track
  const Music_ref = useRef<HTMLAudioElement | null>(null)
  const [volume_Value, setVolumeValue] = useState(20)
  const Rotate_control_ref = useRef<AnimationPlaybackControls | null>(null)
  const [duration, setduration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const { LightTheme } = createThemeContext()
  const [isplaying, setplaying] = useState(false)
  const rotate = useMotionValue(0)
  const [ismute, setmute] = useState(false)
  const [ShowVolume, setShowVolume] = useState(false)
  const [Timeline, setTimeline] = useState<number | undefined>(0)
  const [isDraging, setDraging] = useState(false)
  const title: string = 'Full moon Full life'

  useEffect(() => {
    const audio = Music_ref.current
    if (!audio) return
    const CurrentDurationUpdate = () => setduration(audio.duration)
    const CurrentTimeUpdate = () => setCurrentTime(audio.currentTime)
    const ended = () => {
      Rotate_control_ref.current?.pause()
      setplaying(false)
    }
    audio.addEventListener('loadedmetadata', CurrentDurationUpdate)
    audio.addEventListener('timeupdate', CurrentTimeUpdate)
    audio.addEventListener('ended', ended)
    return () => {
      audio.removeEventListener('loadedmetadata', CurrentDurationUpdate)
      audio.removeEventListener('timeupdate', CurrentTimeUpdate)
      audio.removeEventListener('ended', ended)
    }
  }, [duration])

  useEffect(() => {
    const timeline: number | undefined =
      currentTime === 0 ? 0 : (currentTime / duration) * 100
    setTimeline(timeline)
  }, [currentTime])

  useEffect(() => {
    const check_window = () => {
      if (window.innerWidth <= 1024) {
        setShowVolume(true)
      }
    }
    check_window()
    window.addEventListener('resize', check_window)
    const audio = Music_ref.current
    if (!audio) return
    if (volume_Value == 0) {
      audio.muted = true
      setmute(true)
    } else {
      setmute(false)
      audio.muted = false
      audio.volume = volume_Value / 100
    }
  }, [Music_ref, volume_Value])

  useEffect(() => {
    const Rotate_control = animate(rotate, [0, 360], {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    })
    Rotate_control.pause()
    Rotate_control_ref.current = Rotate_control
  }, [Rotate_control_ref])

  const handlePlaying = () => {
    try {
      const audio = Music_ref.current
      if (!audio) return
      if (!isplaying) {
        audio.play().catch((e)=>console.warn(e))
        Rotate_control_ref.current?.play()
        setplaying(true)
      } else if (isplaying) {
        audio.pause()
        Rotate_control_ref.current?.pause()
        setplaying(false)
      }
    } catch (error) {
      console.warn('playback error : ', error)
    }
  }

  function handleMute() {
    setmute((prevMute) => {
      const newMute = !prevMute
      if (Music_ref.current) {
        if (newMute) {
          localStorage.setItem('prev_vol', String(volume_Value) || '')
          setVolumeValue(0)
        } else {
          let prev_vol: number = Number(localStorage.getItem('prev_vol')) || 0.5
          setVolumeValue(prev_vol)
        }
      }
      return newMute
    })
  }

  function FormateTime(val: number): string {
    if (isNaN(val)) return '00:00'
    const minute = Math.floor(val / 60)
    const seconds = Math.floor(val % 60)
    return `${String(minute).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  function handleseek(Target: number) {
    const audio = Music_ref.current
    if (!audio) return
    if(isplaying){
      audio.pause()
      Rotate_control_ref.current?.pause()
      audio.currentTime = duration * (Target / 100)
      if (!isDraging) {
        setTimeout(() => {
          audio.play().catch((e)=>console.warn(e))
          Rotate_control_ref.current?.play()
          setplaying(true)
        }, 100)
      }
    }
    else{
      audio.currentTime = duration * (Target / 100)
    }
  }

  const Volume_bar: React.CSSProperties = {
    background: `linear-gradient(to right, white ${volume_Value}%,#C9C9C9 10%)`,
  }
  const seek_bar: React.CSSProperties = {
    background: `linear-gradient(to right, lightblue ${Timeline && Timeline + 1}%,#C9C9C9 1%)`,
  }

  const player_control_style: string =
    'cursor-pointer hover:scale-130 scale-140 transiton duration-200 ease-in-out '

  return (
    <div
      className={`w-full h-full select-none relative rounded-2xl overflow-hidden ${LightTheme ? 'bg-blue-500' : 'bg-blue-700'}`}
    >
      <div className="p-2">
        {/* dinamically change the background based on the cover picture of the music */}
        <img
          src="/Images_Optimized/Cover/cover_art_411.webp"
          alt="bg-media-player"
          className="bg_cover object-cover absolute -top-20 right-0 mask-r-from-1% mask-t-from-40% z-1 min-[2250px]:mask-l-from-60%"
        />
        <motion.div
          className="text-white absolute z-3 -top-3 right-3"
          style={{ rotate }}
        >
          <FaCompactDisc className="scale-400 w-full h-5" />
        </motion.div>

        <div className="relative translate-y-8 z-10 w-full px-4">
          <section
            className="p-1 pr-3 flex absolute bottom-5 left-5 xl:w-30 max-xl:w-25 items-center gap-3"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button className="volume" onClick={() => handleMute()}>
              {ismute ? (
                <PiSpeakerXFill className="xl:scale-160 max-xl:scale-120 hover:scale-170 transition duration-200 ease-in-out cursor-pointer text-white" />
              ) : (
                <HiMiniSpeakerWave
                  className={`xl:scale-160 max-xl:scale-120 hover:scale-170 transition duration-200 ease-in-out cursor-pointer text-white`}
                />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={100}
              value={volume_Value}
              onChange={(e) => setVolumeValue(Number(e.target.value))}
              className={`appearance-none accent-white h-1 rounded-full outline-none cursor-pointer w-20 max-sm:w-17 ${ShowVolume ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
              style={Volume_bar}
            />
          </section>
          <audio ref={Music_ref} src="/Musics/Full Moon Full Life.mp3" />
          <section className="w-full flex justify-end mb-2">
            <div className="text-end text-white">
              <h1 className="w-73 overflow-hidden ">
                {/* here if the string legth is hight than 30 animate the text to move from left to right  */}
                <motion.span className="whitespace-nowrap xl:text-xl text-md">
                  {title}
                </motion.span>
              </h1>
              <h1 className="xl:text-md text-sm">
                {FormateTime(currentTime)} / {FormateTime(duration)}
              </h1>
            </div>
          </section>
          <section className="player_control w-full flex gap-3 px-2">
            <div className="seek_bar relative w-full translate-y-1 flex items-center">
              <input
                type="range"
                name="timeline"
                value={Timeline}
                onChange={(e) => handleseek(parseFloat(e.target.value))}
                min={0}
                max={100}
                step={0.1}
                onInput={() => setDraging(true)}
                onMouseUp={() => setDraging(false)}
                onTouchEnd={() => setDraging(false)}
                className={`Seek_help w-[90%] appearance-none cursor-pointer accent-white hover:accent-gray-300 rounded-full ${isDraging ? 'h-2' : 'h-1'} transition-h duration-200 ease-in-out`}
                style={seek_bar}
              />
            </div>
            <ul className={`flex gap-6 text-white items-center w-fit`}>
              <li className={`${player_control_style}`}>
                <FaBackward />
              </li>
              <li className={`${player_control_style}`} onClick={handlePlaying}>
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
