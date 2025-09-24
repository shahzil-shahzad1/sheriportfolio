import React from "react";
import Image from "next/image";

const HomePage = () => (
  <section
    id="home"
    className="w-full min-h-fit px-4 sm:px-8 lg:px-16 py-20"
  >
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 pt-10 text-center">
      {/* Image + role text md:items-start*/}
      <div className="flex flex-col justify-start items-center md:items-start gap-6 w-full md:w-1/3">
        <Image
        src="/Profile.jpg"
        alt="A person diving towards the sky"
        width={800}
        height={800}
        className="w-fit max-w-[320px] sm:max-w-[400px] md:max-w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-center text-center w-full"> {/*md:w-2/3 md:text-left */}
        <div className="space-y-1 text-center md:text-left mb-5">
          <h2 className="text-white text-xl sm:text-2xl font-bold">
            Muhammad Sheharyar Shahzad Rana
          </h2>
          <h2 className="text-[#ff2f24] text-xl sm:text-[1.2rem] font-bold text-center">
            Flutter Developer
          </h2>
          <p className="text-[#B3B3B3] text-base sm:text-lg text-center">
            I will do my best to give you the best.
          </p>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed text-center">
          A dedicated Computer Science student and passionate Flutter developer with hands-on experience in building cross-platform mobile and web apps using Flutter, Firebase, Supabase, Hive, and REST APIs. Skilled in UI/UX design, backend integration, and state management (Provider, GetX, BLoC). I aim to transform ideas into functional, scalable, and visually appealing digital products.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 w-full "> {/* md:justify-start */}
          <a
            href="https://linktr.ee/Sheharyar_Shahzad_Rana?utm_source=chatgpt.com"
            className="px-8 py-3 bg-[#FF3B30] text-white font-bold rounded-full shadow-lg transition-all hover:bg-[#fc2f23] duration-300 ease-in-out w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
          <a
            href="/Sheharyar-Shahzad-CV.pdf"
            download
            className="px-8 py-3 bg-[#FF3B30] text-white font-bold rounded-full shadow-lg transition-all hover:bg-[#fc2f23] duration-300 ease-in-out w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
