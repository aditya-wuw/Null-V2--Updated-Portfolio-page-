import { createThemeContext } from '@/Context/context'

const Skills = () => {

  const {LightTheme} = createThemeContext()

  return <div className={`p-3 ${LightTheme ? "bg-white text-black border border-black/30 rounded-xl" : "bg-black text-white border border-white/30 rounded-xl"}`}>
    skillssadasduoiasdyashudashkjdjvasdghjvasdghjasghdjasdghjassadashkdbasgbhjdasbhjdashjgbdsaghjdahsjdhjagsdhjashdgjashgjdasghjghjabs
    neque officiis quos facilis autem? Libero ea excepturi qui ab, modi offici
  </div>
}

export default Skills
