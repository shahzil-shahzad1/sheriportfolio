import React from 'react'
import { experience } from '@/lib/data';
const ExperiencePage = () => (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 md:px-10 bg-[#0E0E0F] text-white`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Experience
        </h2>
        <div className="w-24 sm:w-32 h-[2px] bg-white mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-[#B3B3B3] mb-10 text-base sm:text-lg">
          My journey through professional roles
        </p>

        {/* Timeline */}
        <div className="relative border-l border-[#222222] pl-4 sm:pl-6 space-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-4 sm:-left-3 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-black flex items-center justify-center text-sm">
                ✨
              </span>

              <div className="bg-[#111111fa] border border-[#222222] rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="text-base sm:text-lg font-bold text-[#FF3B30] break-words">
                  {item.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#B3B3B3] mb-4">
                  <div>{item.date}</div>
                  {/* {item.location && <div>{item.location}</div>} */}
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm sm:text-[0.95rem] leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="break-words">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default ExperiencePage
