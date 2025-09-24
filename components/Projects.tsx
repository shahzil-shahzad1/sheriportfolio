import React from 'react'
import { projects } from '@/lib/data';
import Image from "next/image"
const ProjectsPage = () => (
    <section
      id="projects"
      className={`py-20 px-6 bg-[#0E0E0F] text-white`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Side Projects
        </h2>
        <div className="w-20 h-1 bg-[#FF3B30] mx-auto mb-6 rounded-full" />
        <p className="text-[#B3B3B3] mb-8 text-base sm:text-lg">
          Key projects I have worked on, showcasing my learning and practice
        </p>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className=" bg-[#111111fa] border border-[#222222] rounded-xl p-6 text-left shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.8)] hover:border-[#FF3B30] transition-all duration-200"
            >
              {/* bg-[#18181B] */}
              <div className="flex items-center gap-3 mb-2">
                <div className="text-white text-xl">
                  <Image src={`${project.icon}`} height={25} width={25} alt={`${project.icon}`} className="w-[25px] h-[25px] invert" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#ff2f24]">{project.title}</h3>
              </div>

              <span className="bg-[#FF3B30] text-white text-xs font-medium px-3 py-1 rounded-full inline-block my-2">
                {project.domain}
              </span>

              <p className="text-gray-200 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-[#FF3B30] px-4 py-1 rounded hover:bg-[#FF3B30] hover:text-white transition"
                >
                  View
                </a>
              )}

              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FF3B30] text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default ProjectsPage