import { createThemeContext } from '@/Context/context'

export default function Projects_desc() {
  const { LightTheme } = createThemeContext()

  return (
    <header
      className={`select-none p-3 relative overflow-hidden ${LightTheme ? 'bg-white text-black border border-black/30 rounded-xl' : 'bg-black text-white border border-white/30 rounded-xl'} bottom-3 relative`}
    >
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="mt-2 flex flex-col gap-2">
        <h1 className="text-sm">
          Over time, I’ve been focused on
          sharpening my logic and improving my overall development skills —
          which is why I can now create much better projects. In fact, this
          portfolio page itself is part of that growth and creativity.
        </h1>
        <h1 className="text-sm">
          Currently,
          I’m working alongside an experienced developer as a full-stack
          developer, continuing to learn and build meaningful things
        </h1>
      </div>
    </header>
  )
}
