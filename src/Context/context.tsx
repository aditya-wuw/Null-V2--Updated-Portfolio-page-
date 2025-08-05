import { createContext, useContext, useState } from "react";

const Context_Provider = createContext<null | any>(null);

export const Context_Provider_wrap = ({children}:{children:React.ReactNode}) =>{
    const [LightTheme,setTheme] = useState(true)
    const [count,setCount] = useState(0)
    const Values = {
        LightTheme,
        setTheme,
        count,
        setCount
    }
    return <Context_Provider.Provider value={Values}>{children}</Context_Provider.Provider>
}

export const createThemeContext = () => useContext(Context_Provider)