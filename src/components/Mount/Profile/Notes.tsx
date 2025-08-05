import { createThemeContext } from '@/Context/context'

const Notes = () => {
  const {LightTheme} = createThemeContext();
  return (
    <div className={`p-3 ${LightTheme ? "bg-white text-black border border-black/30 rounded-xl" : "bg-black text-white border border-white/30 rounded-xl"}`}>
        notes
    </div>
  )
}

export default Notes
