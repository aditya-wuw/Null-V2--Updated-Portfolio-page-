import { type AnimationPlaybackControls } from "motion/react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const Context_Provider = createContext<null | any>(null);

export const Context_Provider_wrap = React.memo(({children}:{children:React.ReactNode}) =>{
    const [LightTheme,setTheme] = useState(false)
    const Music_ref = useRef<HTMLAudioElement | null>(null)
    const Rotate_control_ref = useRef<AnimationPlaybackControls | null>(null)
    const [isplaying, setplaying] = useState(false)
    const [InView,setisinView] = useState(true)
    
    useEffect(()=>{
        setTheme(localStorage.getItem('theme') === 'Light'? true: false)
    },[])
    
    const Values = {
        LightTheme,
        setTheme,
        Music_ref,
        Rotate_control_ref,
        isplaying,
        setplaying,InView,setisinView
    }
    return <Context_Provider.Provider value={Values}>{children}</Context_Provider.Provider>
})

export const createThemeContext = () => useContext(Context_Provider)