import { createThemeContext } from '@/Context/context'
import { heroData } from '@/data/data'
export default function Header() {
  const { LightTheme } = createThemeContext()

  return (
    <header
      className={`select-none p-3 relative h-[102%] overflow-hidden ${LightTheme ? 'bg-white text-black border border-black/30 rounded-xl' : 'bg-black text-white border border-white/30 rounded-xl'} bottom-3 relative`}
    >
      <h1 className='text-xl font-bold mb-3'>About</h1>
      <div className="profile_wrapper flex gap-3">
        <div className='relative top-1'>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src='/Images_Optimized/Profile/logo_252.png'
              loading='lazy'
              alt="Logo_nullfaced_dev.png"
              className="object-cover object-center"
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className='w-[90%]'>
            <h1>Hi, I'm {heroData.name}</h1>
            <h1 className='text-sm'>{heroData.role}</h1>
        </div>
      </div>
      <div className='mt-5 text-e'>
        <h1 className='text-sm'>{heroData.about_ln1} {heroData.about_ln2}</h1>
        <h1 className='text-sm mt-2'>{heroData.about_ln3} </h1>
      </div>
      <div className='absolute -top-10 right-5 w-20 h-25 slash rounded-full'/>
    </header>
  )
}
