import React, { useState } from "react";
import { teamImages } from "@/lib/data";
import Image from "next/image";
import { X } from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 px-6 bg-[#0E0E0F] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
          Gallery
        </h2>
        <div className="w-20 h-1 bg-[#FF3B30] mx-auto mb-10 rounded-full" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamImages.slice(0, 8).map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-xl border border-gray-800 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Team member ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <X size={30} />
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full flex items-center justify-center px-4">
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={1200}
              className="object-contain w-auto h-auto max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
