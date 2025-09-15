import { createThemeContext } from "@/Context/context"
import { FaClock } from "react-icons/fa";

const Footer = () => {
    const {LightTheme} = createThemeContext()
    const lastupdated = '16th Sep'
  return (
    <div className={`p-3 rounded-t-2xl text-center ${LightTheme ?  "bg-white text-black border border-black/30" : "bg-black text-white border border-white/30"}`}>
      <h1 className="flex items-center justify-center gap-1"><FaClock className={`${LightTheme ? 'text-black' : 'text-white'}`}/> {lastupdated +' '+new Date().getFullYear()}</h1>
      <h1 className="max-lg:text-sm">Persona is a trademark of © ATLUS and © SEGA</h1>
    </div>
  )
}

export default Footer
