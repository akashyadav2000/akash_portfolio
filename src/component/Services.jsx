import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { services, certifications } from "../data/servicesData";
import { FaX } from "react-icons/fa6";

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const visibleItems = 4;

  const handleNext = () => {
    setStartIndex((startIndex + 1) % certifications.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (startIndex - 1 + certifications.length) % certifications.length
    );
  };

  const getVisibleCerts = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      result.push(certifications[(startIndex + i) % certifications.length]);
    }
    return result;
  };

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto";
  }, [activeService]);

  return (
    <section
      className="relative min-h-fit xl:min-h-[calc(100dvh-55px)]  2xl:py-8 xl:py-6 py-4 text-center flex items-center justify-center px-[5%] 2xl:px-[9%]"
      id="services"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e8defddc] to-[#f5f5f5]"></div>
      </div>
      {/* bg-gradient-to-br from-[#e6f0ff] to-[#ffe6f2] #e8defd*/}

      {/* Main Content */}
      <div className="relative z-10 w-full flex items-center justify-center flex-col">
        <h2 className="2xl:text-[38px] xl:text-[33px] text-[30px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%]  xl:mb-[4.5%] my-[4%] leading-0">
          My <span className="text-pink-500">Expertise</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 2xl:gap-14 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl 2xl:p-5 p-4 bg-gradient-to-tl ${service.bgGradient}  flex flex-col items-center text-center  shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border-1 border-gray-300 transition-shadow duration-300`}
              >
                <div className="2xl:w-13 2xl:h-13 w-12 h-12 rounded-full p-3 flex items-center justify-center mb-4 bg-white shadow-md">
                  <Icon className={`text-3xl ${service.iconColor}`} />
                </div>
                <h3 className="2xl:text-[21px] xl:text-[21px] text-[20px] font-[600] text-black mb-2">
                  {service.title}
                </h3>
                <p className="2xl:text-[17px] xl:text-[16.5px] text-[16px] text-gray-700 font-[500] 2xl:leading-normal leading-snug 2xl:mb-6 xl:mb-3">
                  {service.desc}
                </p>
                <button
                  onClick={() => openModal(service)}
                  className={`2xl:text-[16px] xl:text-[15.5px] text-[15px] bg-white border px-4 py-[6px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] cursor-pointer ${service.textColor}`}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>

        {/* Certifications Carousel */}
        <div className="2xl:mt-18 mt-12" id="certifications">
          <div className="relative flex items-center justify-center">
            <div className="grid md:grid-cols-4 2xl:gap-10 gap-8 transition-all duration-500">
              {getVisibleCerts().map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl 2xl:p-5 p-4 flex flex-col items-center justify-center text-center hover:scale-[1.02] shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border-1 border-gray-300 transition-shadow duration-300`}
                  >
                    <div className="mb-4 bg-white rounded-full 2xl:w-13 2xl:h-13 w-12 h-12 p-3 flex items-center justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
                      <Icon className={`text-3xl ${cert.iconColor}`} />
                    </div>
                    <h3 className="2xl:text-[22px] xl:text-[21px] text-[20px] font-[600] text-black">
                      {cert.title}
                    </h3>
                    <h3 className="2xl:text-[20px] xl:text-[19.5px] text-[19px] font-semibold text-gray-800 mb-2">
                      {cert.from}
                    </h3>
                    <p className="2xl:text-[17px] xl:text-[16.5px] text-[16px] text-gray-700 font-[500] 2xl:mb-6 xl:mb-3 2xl:leading-normal leading-snug">
                      {cert.desc}
                    </p>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`2xl:text-[16px] xl:text-[15.5px] text-[15px] bg-white border px-4 py-[6px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] ${cert.textColor} border-current`}
                    >
                      See Certificate
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-[47%] -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[10px] p-[9px] rounded-full z-10 transition"
            >
              <FaChevronLeft className="2xl:text-[21px] xl:text-[20.5px] text-[20px] text-[#ff4f00]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-[47%] -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[10px] p-[9px] rounded-full z-10 transition"
            >
              <FaChevronRight className="2xl:text-[21px] xl:text-[20.5px] text-[20px] text-[#ff4f00]" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl  2xl:px-7 2xl:py-6 xl:px-6 xl:py-5 px-4 py-4 2xl:w-[320px] xl:w-[300px]  w-[280px]  relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={`2xl:text-[23px] xl:text-[22px] text-[21px] font-semibold mb-4 ${activeService.textColor}`}
            >
              {activeService.title}
            </h2>
            <p className="text-black 2xl:text-[17px] xl:text-[16.5px]  text-[16px] font-[500] leading-relaxed text-justify">
              {activeService.details}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-red-500 hover:text-black text-xl font-bold"
            >
              <FaX className="text-[17px]" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
