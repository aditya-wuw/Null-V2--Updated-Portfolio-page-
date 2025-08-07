import { createThemeContext } from '@/Context/context'
import { projectsData } from '@/data/data'
import { useNavigate } from '@tanstack/react-router'
import React from 'react'

const Projects = React.memo(() => {
  const { LightTheme } = createThemeContext()
  const Route = useNavigate()
  function Navigate(link: string) {
    Route({ to: `/projects/${link}` })
  }
  return (
    <div
      className={`p-[1px] select-none  ${LightTheme ? 'bg-gradient-to-l from-neutral-500 text-black  rounded-xl ' : 'bg-gradient-to-r from-neutral-500 text-white  rounded-xl'}`}
    >
      <div className={`p-3 rounded-xl ${LightTheme ? 'bg-white' : 'bg-black text-white  rounded-xl'}`}>
        <h1 className="text-xl font-bold mx-2">Projects</h1>
        <section className="project_section mt-4 xl:grid xl:grid-cols-2 place-items-center max-xl:flex max-xl:flex-col gap-3 h-full">
          {projectsData.items.map((item, i) => (
            <div
              className="project_comp relative min-h-55 max-h-60 w-full h-55 border overflow-hidden rounded-xl"
              key={i}
            >
              <div className="Image_comp h-[30%]">
                <a
                  href={
                    item.links[0]?.url !== 'none'
                      ? item.links[0].url
                      : undefined
                  }
                  className="h-full"
                  aria-disabled={item.links[0]?.url === 'none'}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading='lazy'
                    className="object-cover object-center cursor-pointer hover:scale-105 scale-100 transition duration-300 ease-in-out w-full h-full"
                  />
                </a>
              </div>
              <div className="p-3 select-none cursor-pointer" onClick={() => Navigate(item.Link)}>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <h1 className="lg:text-sm text-xs">{item.description}</h1>
              </div>
              <div className="px-3 mt-4 flex gap-2 items-center justify-between mr-1 absolute w-[100%] bottom-3 z-10">
                  <div className="flex gap-2">
                    {item.links[0]?.url !== 'none' && (
                      <a href={item.links[0]?.url} target="_blank">
                        <button
                          className={`p-[5px] text-xs rounded-md cursor-pointer ${LightTheme ? 'bg-blue-300' : 'bg-blue-500'}`}
                        >
                          {item.links[0]?.label}
                        </button>
                      </a>
                    )}
                    <a href={item.links[1]?.url} target="_blank">
                      {item.links[1]?.label}
                    </a>
                  </div>
                  <div className="flex gap-2 text-xs items-center">
                    {item.tags.map((i, index) => (
                      <div
                        key={index}
                        className={`p-1 rounded-md ${LightTheme ? 'bg-blue-400' : 'bg-blue-700'}`}
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
})

export default Projects
