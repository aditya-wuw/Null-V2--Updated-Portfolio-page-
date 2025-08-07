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
    <div className={`${LightTheme ? 'bg-white Grind-black' : 'bg-black Grind-white'} transition-bg duration-300 ease-in-out min-h-screen h-screen overflow-y-scroll scroll-smooth scroll_bar_ scroll_bar_thumb`}>
      <div className={`lg:mx-70 md:mx-40 mx-5 flex justify-center h-full`}>
        <div className="lg:w-[55vw] max-lg:w-[90vw] h-full shrinked">
          <Nav />
          <section className="mt-10">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  )
}
