import { createThemeContext } from '@/Context/context'
import React, { useCallback, useEffect, useState } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa'
import { FaCompactDisc } from 'react-icons/fa6'
import { animate, motion, useMotionValue } from 'motion/react'
import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { PiSpeakerXFill } from 'react-icons/pi'
import MusicData from '@/data/music.json'
import { TiArrowLoop } from 'react-icons/ti'
import { RiPlayListFill } from 'react-icons/ri'

const MusicEmbed = React.memo(() => {
  // do somthing later
  // want to import a data object of the full play list where I'll want to store the background and sound track
  const { LightTheme, Music_ref, Rotate_control_ref, isplaying, setplaying,ShowPlaylist ,setShowPlaylist } =
    createThemeContext()
  const [volume_Value, setVolumeValue] = useState(20)
  const [duration, setduration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const rotate = useMotionValue(0)
  const [ismute, setmute] = useState(false)
  const [ShowVolume, setShowVolume] = useState(false)
  const [Timeline, setTimeline] = useState<number | undefined>(0)
  const [isDraging, setDraging] = useState(false)
  const [last, setlast] = useState(0)
  const [AutoPlayON, setAutoPlayON] = useState(false)
  useEffect(() => {
    const audio = new Audio(MusicData[last].music_src)
    Music_ref.current = audio
  }, [])

  useEffect(() => {
    const audio = Music_ref.current
    if (!audio) return
    const CurrentDurationUpdate = () => setduration(audio.duration)
    const CurrentTimeUpdate = () => setCurrentTime(audio.currentTime)
    const ended = () => {
      if (isplaying && AutoPlayON) {
        handle_next('forward')
      } else {
        Rotate_control_ref.current?.pause()
        setplaying(false)
      }
    }
    audio.addEventListener('loadedmetadata', CurrentDurationUpdate)
    audio.addEventListener('timeupdate', CurrentTimeUpdate)
    audio.addEventListener('ended', ended)
    return () => {
      audio.removeEventListener('loadedmetadata', CurrentDurationUpdate)
      audio.removeEventListener('timeupdate', CurrentTimeUpdate)
      audio.removeEventListener('ended', ended)
    }
  }, [currentTime, duration, last, isplaying])

  useEffect(() => {
    const timeline: number | undefined =
      currentTime === 0 ? 0 : (currentTime / duration) * 100
    setTimeline(timeline)
  }, [currentTime])

  useEffect(() => {
    const check_window = () => {
      if (window.innerWidth <= 1024) {
        setShowVolume(false)
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
        audio.play().catch((e: Error) => console.warn(e))
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
    if (isplaying) {
      audio.pause()
      Rotate_control_ref.current?.pause()
      const newTime = duration * (Target / 100)
      audio.currentTime = newTime
      if (newTime >= duration - 0.2) {
        setplaying(false)
      }

      if (!isDraging) {
        setTimeout(() => {
          audio.play().catch((e: Error) => console.warn(e))
          Rotate_control_ref.current?.play()
          setplaying(true)
        }, 100)
      }
    } else {
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

  const handle_next = useCallback(
    (action: string): void => {
      if (!Music_ref.current) return
      let newIndex = last
      if (action === 'forward') {
        newIndex = last === MusicData.length - 1 ? 0 : last + 1
      } else if (action === 'back') {
        newIndex = last === 0 ? MusicData.length - 1 : last - 1
      }
      Music_ref.current.pause()
      Music_ref.current.src = ''
      setlast(newIndex)
      Music_ref.current.src = MusicData[newIndex].music_src

      if (isplaying) {
        Music_ref.current
          .play()
          .catch((e: Error) => console.warn('playback error:', e))
      }
    },
    [last, MusicData, isplaying],
  )

  return (
    <div
      className={`w-full h-full select-none relative rounded-2xl  ${LightTheme ? 'bg-blue-500' : 'bg-blue-700'}`}
    >
      <div className="w-full h-full p-2 overflow-hidden relative rounded-2xl">
        <motion.img
          src={MusicData[last].banner}
          alt="bg-media-player"
          className="bg_cover object-cover absolute -top-20 right-0 mask-r-from-80% mask-t-from-40% z-1 min-[2250px]:mask-l-from-60%"
          key={last}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.div
          className="text-white absolute z-3 -top-3 right-3"
          style={{ rotate }}
        >
          <FaCompactDisc className="scale-400 w-full h-5" />
        </motion.div>

        <div className="relative translate-y-8 z-13 w-full px-4">
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
          <section className="w-full flex justify-end mb-2">
            <div className="text-end text-white backdrop-blur-xs rounded-2xl">
              <h1 className="w-48 overflow-hidden">
                <span className="whitespace-nowrap xl:text-lg text-md">
                  {MusicData[last].Title}
                </span>
              </h1>
              <h1 className="xl:text-md text-sm">
                <section>
                  <span
                    onClick={() => setAutoPlayON(!AutoPlayON)}
                    title="loop playlist or nah?"
                    className="cursor-pointer"
                  >
                    <span className="absolute z-10 left-0 flex items-center  hover:scale-125 scale-100 trnsition-scale duration-300 ease-in-out">
                      <TiArrowLoop
                        className={`w-5 h-7.5 transition-rotate ease-in-out duration-300 ${AutoPlayON && 'rotate-y-180'}`}
                      />
                      <h1>{AutoPlayON ? '1' : '0'}</h1>
                    </span>
                  </span>
                </section>
                <section className="absolute -bottom-0.5 left-10 z-1">
                  <span className="text-white cursor-pointer" onClick={()=>setShowPlaylist(!ShowPlaylist)}>
                    <RiPlayListFill className="max-lg:scale-100 scale-120 hover:scale-150 transtion duration-300 ease-in-out" />
                  </span>
                </section>
                <span>
                  {FormateTime(currentTime)} / {FormateTime(duration)}
                </span>
              </h1>
            </div>
          </section>
          <section className="player_control w-full flex gap-3 px-2">
            <div className="seek_bar relative z-10 w-full translate-y-1 flex items-center">
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
              <li
                className={`${player_control_style}`}
                onClick={() => handle_next('back')}
              >
                <FaBackward />
              </li>
              <li className={`${player_control_style}`} onClick={handlePlaying}>
                {isplaying ? <FaPause /> : <FaPlay />}
              </li>
              <li
                className={`${player_control_style}`}
                onClick={() => handle_next('forward')}
              >
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
