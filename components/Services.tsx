import React from 'react'
import { services } from '@/lib/data';
const ServicesPage = () => (
    <section
        id="services"
        className={`py-20 px-4 sm:px-6 md:px-10 bg-[#0E0E0F] text-white`}
    >
        <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
                Services
            </h2>
            <div className="w-24 sm:w-32 h-[2px] bg-[#FF3B30] mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-[#B3B3B3] mb-10 text-base sm:text-lg">
                We provide a full spectrum of services to bring your digital vision to life
            </p>

            {/* Services Cards */}
            <div className="relative border-l border-[#222222] pl-4 sm:pl-6 space-y-10">
                {services.map((service, index) => (
                    <div key={index} className="relative">
                        {/* Icon on the left */}
                        <span className="absolute -left-4 sm:-left-3 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-black flex items-center justify-center text-sm">
                            ⚡
                        </span>

                        {/* Card */}
                        <div className="bg-[#111111fa] border border-[#18181B] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-200">
                            <h3 className="text-base sm:text-lg font-bold text-[#FF3B30] break-words mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[#B3B3B3] text-sm sm:text-[0.95rem] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesPage