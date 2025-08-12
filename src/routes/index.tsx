import React, { Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import Loader from '@/components/Loader'
import Header from '@/components/Mount/Header'
import Details from '@/components/Mount/Profile/Details'
import Skills from '@/components/Mount/Profile/Skills'
import { createThemeContext } from '@/Context/context'
import MusicEmbed from '@/components/Mount/Profile/MusicEmbed'

const Cover = React.lazy(() => import('@/components/Mount/Profile/Cover'))
const Projects = React.lazy(() => import('@/components/Mount/Profile/Projects'))
const Notes = React.lazy(() => import('@/components/Mount/Profile/Notes'))
const Footer = React.lazy(() => import('@/components/footer'))

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { LightTheme } = createThemeContext()
  return (
    <div>
      <div className={`flex flex-col gap-2 break-words h-screen`}>
        <section>
          <div
            className={`w-full max-sm:h-25 sm:h-35 max-h-50 overflow-hidden rounded-2xl relative select-none ${LightTheme ? 'bg-gray-400' : 'bg-black'}`}
          >
            <Suspense
              fallback={
                <div
                  className={`flex items-center w-full h-full justify-center`}
                >
                  <Loader />
                </div>
              }
            >
              <Cover />
            </Suspense>
          </div>
        </section>
        <section className="mt-5 flex max-xl:flex-col gap-4">
          <div className="xl:w-[70%]">
            <Header />
          </div>
          <div className="xl:w-[30%]">
            <Details />
          </div>
        </section>
        <section>
          <div className='flex xl:flex-row flex-col gap-2'>
            <div className="xl:w-[40%] 2xl:h-34">
              <Skills />
            </div>
            <div className="xl:w-[calc(100%-40%)] h-33">
              <MusicEmbed />
            </div>
          </div>
          <div></div>
        </section>
        <section>
          <Suspense>
            <Projects />
          </Suspense>
        </section>
        <section>
          <Suspense>
            <Notes />
          </Suspense>
        </section>
        <footer className="w-full">
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </div>
  )
}
