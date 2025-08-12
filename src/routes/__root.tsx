import { Outlet, createRootRoute } from '@tanstack/react-router'
import Nav from '@/components/Nav'
import { createThemeContext } from '@/Context/context'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'

export const Route = createRootRoute({
  component: layOuts,
})

function layOuts() {
  const { LightTheme } = createThemeContext()
  const [loading,setloading] = useState(true);

  useEffect(()=>{
    setloading(false)
  },[])

   if(loading) return <div className='flex justify-center items-center w-screen h-screen'><Loader/></div>
  return (
    <div className={`${LightTheme ? 'bg-white Grind-black' : 'bg-black Grind-white'} transition-bg duration-300 ease-in-out  h-screen overflow-hidden overflow-y-scroll scroll-smooth scroll_bar_ scroll_bar_thumb`}>
      <div className={`min-[4240px]:mx-115 min-[3840px]:mx-15 min-[1280px]:mx-40 mx-5 flex justify-center h-full  max-xl:h-[210%] max-lg:h-[170%] max-sm:h-[320%]`}>
        <div className="2xl:w-[50vw] max-lg:w-[90vw] shrinked relative h-full">
          <Nav />
          <section className="mt-10">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
}
