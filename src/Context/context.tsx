import React, { createContext, useContext, useEffect, useState } from "react";

const Context_Provider = createContext<null | any>(null);

export const Context_Provider_wrap = React.memo(({children}:{children:React.ReactNode}) =>{
    const [LightTheme,setTheme] = useState(false)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setTheme(localStorage.getItem('theme') === 'Light'? true: false)
    },[])
    const Values = {
        LightTheme,
        setTheme,
        count,
        setCount
    }
    return <Context_Provider.Provider value={Values}>{children}</Context_Provider.Provider>
})

export const createThemeContext = () => useContext(Context_Provider)