import { createThemeContext } from "@/Context/context"

const bomberdilocrocodilo = () => {
  const {LightTheme} = createThemeContext();
  return (
    <div className={`rounded-xl border-[0.5px] ${LightTheme ? 'bg-white text-black' : 'bg-black/70 text-white'} w-fit p-3 flex text-sm`} >
      developed & designed by
      <span className="ml-1 text-blue-400">@Nullfaceddev</span>
    </div>
  )
}

export default bomberdilocrocodilo
