import React from 'react'
import { skills } from '@/lib/data';
import Image from "next/image";
const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 md:px-10 bg-[#0E0E0F] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Skills
        </h2>
        <div className="w-24 sm:w-32 h-[2px] bg-[#FF3B30] mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-[#B3B3B3] mb-10 text-base sm:text-lg">
          A blend of languages, frameworks, and tools I work with
        </p>
            {/* Card */}
            <div className="border bg-[#111111fa] border-[#222222] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
              {/* Skills Grid */}
              <div className="flex flex-wrap justify-around items-center gap-[25px]">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-[#111] border border-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-2 text-sm text-[#B3B3B3]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
          </div>
      </div>
    </section>
  );
};

export default SkillsPage
