import React, { useState } from "react";
import { certifications } from "@/lib/data";
// import { badges } from "@/lib/data";
import Image from "next/image";
import { X } from "lucide-react";

const AchievementsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 md:px-10 bg-[#0E0E0F] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements
        </h2>
        <div className="w-24 sm:w-32 h-[2px] bg-[#FF3B30] mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-[#B3B3B3] mb-10 text-base sm:text-lg">
          A showcase of certifications and badges earned along the journey
        </p>

        {/* Certifications Section */}
        <div className="bg-[#111111fa] border border-[#222222] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-base sm:text-lg font-bold text-[#FF3B30] mb-4">
            Certificates & Badges
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={() => setSelectedImage(cert.icon)}
              >
                <div className="h-32 w-full sm:w-44 flex items-center justify-center bg-[#111] border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={cert.icon}
                    alt={cert.name}
                    width={176}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 text-sm text-[#B3B3B3] break-words">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay (Lightbox) */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)} // close when clicking background
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X size={30} />
            </button>
            <div className="max-w-3xl max-h-[90vh] w-full flex items-center justify-center px-4">
              <Image
                src={selectedImage}
                alt="Selected achievement"
                width={1000}
                height={700}
                className="object-contain w-auto h-auto max-h-[90vh] rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsPage;
