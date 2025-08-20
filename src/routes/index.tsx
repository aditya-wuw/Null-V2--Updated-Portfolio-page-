import React, { Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
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
const Playlist = React.lazy(()=>import('@/components/Mount/Profile/Playlist'))

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { LightTheme } = createThemeContext()
  return (
    <div>
      <div className={`flex flex-col gap-2 break-words h-screen rounded-2xl`}>
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
        <section className="mt-5 flex max-lg:flex-col gap-3">
          <div className="lg:w-[70%]">
            <Header />
          </div>
          <div className="lg:w-[30%]">
            <Details />
          </div>
        </section>
        <section>
          <div className="flex md:flex-row flex-col gap-2">
            <div className="md:w-[40%] 2xl:h-34">
              <Skills />
            </div>
            <div className="md:w-[calc(100%-40%)] h-33">
              <MusicEmbed />
            </div>
          </div>
        </section>
        <section>
          <Suspense fallback={<Loader/>}>
              <Playlist/>
          </Suspense>
        </section>
        <section>
          <Suspense>
            <Projects />
          </Suspense>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'circInOut' }}
        >
          <Suspense>
            <Notes />
          </Suspense>
        </motion.section>
        <footer className="w-full">
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </div>
  )
}
