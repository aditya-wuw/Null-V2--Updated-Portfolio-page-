import Footer from '@/components/footer'
import Header from '@/components/Mount/Header'
import Cover from '@/components/Mount/Profile/Cover'
import Education from '@/components/Mount/Profile/Details'
import Notes from '@/components/Mount/Profile/Notes'
import Projects from '@/components/Mount/Profile/Projects'
import Skills from '@/components/Mount/Profile/Skills'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
   return (
    <div>
      <div className={`flex flex-col gap-2 break-words h-screen`}>
        <section>
          <Cover />
        </section>
        <section className="mt-5 flex max-xl:flex-col gap-4">
          <div className='xl:w-[70%]'>
            <Header />
          </div>
          <div className='xl:w-[30%]'>
            <Education/>
          </div>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Projects />
        </section>
        {/* after project we do lazy loading */}
        <section>
          <Notes/>
        </section>
        <footer className='w-full'>
          <Footer/>
        </footer>
      </div>
    </div>
    )

}
