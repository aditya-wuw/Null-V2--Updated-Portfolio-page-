import { type AnimationPlaybackControls } from 'motion/react'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import MusicData from '@/data/music.json'
const Context_Provider = createContext<null | any>(null)

export const Context_Provider_wrap = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    const [LightTheme, setTheme] = useState(false)
    const Music_ref = useRef<HTMLAudioElement | null>(null)
    const Rotate_control_ref = useRef<AnimationPlaybackControls | null>(null)
    const [isplaying, setplaying] = useState(false)
    const [InView, setisinView] = useState(true)
    const [ShowPlaylist, setShowPlaylist] = useState(false)
    const [last, setlast] = useState(0)
    const [Track_rec, settrack] = useState(MusicData)
    
    const MusicPlayer = {
      handlePlaying: () => {
        try {
          settrack((prev) =>
            prev.map((track, i) => ({
              ...track,
              isplaying: i === last ? true : false,
            })),
          )
          const audio = Music_ref.current
          if (!audio) return
          if (!isplaying) {
            Rotate_control_ref.current?.play()
            setplaying(true)
            audio.play().catch((e: Error) => console.warn(e))
          } else if (isplaying) {
            audio.pause()
            Rotate_control_ref.current?.pause()
            setplaying(false)
          }
        } catch (error) {
          console.warn('playback error : ', error)
        }
      },
      handle_next: useCallback(
        (action: string, target: number): void => {
          if (!Music_ref.current) return
          let newIndex = last
          if (action === 'forward') {
            newIndex = last === MusicData.length - 1 ? 0 : last + 1
          } else if (action === 'back') {
            newIndex = last === 0 ? MusicData.length - 1 : last - 1
          } else if (action === 'play') {
            newIndex = target;
          }
          Music_ref.current.pause()
          Music_ref.current.src = ''
          setlast(newIndex)
          Music_ref.current.src = MusicData[newIndex].music_src

          if (isplaying) {
             settrack((prev) =>
            prev.map((track, i) => ({
              ...track,
              isplaying: i === newIndex,
            })));
            Music_ref.current
              .play()
              .catch((e: Error) => console.warn('playback error:', e))
          }
        },
        [last, MusicData, isplaying],
      ),
    }

    useEffect(() => {
      setTheme(localStorage.getItem('theme') === 'Light' ? true : false)
    }, [])

    const Values = {
      LightTheme,
      setTheme,
      Music_ref,
      Rotate_control_ref,
      isplaying,
      setplaying,
      InView,
      setisinView,
      ShowPlaylist,
      setShowPlaylist,
      last,
      setlast,
      MusicPlayer,
      Track_rec,
    }
    return (
      <Context_Provider.Provider value={Values}>
        {children}
      </Context_Provider.Provider>
    )
  },
)

export const createThemeContext = () => useContext(Context_Provider)
