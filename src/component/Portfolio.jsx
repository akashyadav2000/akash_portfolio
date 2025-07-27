import React from "react";
import { projects } from "../data/portfolioData";
import linkIcon from "/images/project/download.svg";

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[4%]"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#dea8ff] via-[#deffd8] to-[#ffa8de] opacity-40"></div>
      </div>

      <div className="w-full max-w-[1500px]">
        <h2 className="2xl:text-[38px] xl:text-[33px] text-[30px] leading-none font-semibold text-center text-gray-800 mb-[3%]">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-x-15 2xl:gap-y-15 xl:gap-x-11 xl:gap-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-500 group  border-1 border-white"
            >
              <div className="w-full 2xl:h-[33vh] xl:h-[30.5vh] h-[28.5vh] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-102 group-hover:blur-[4px]"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#bbffff]/95 to-[#69ffff] flex flex-col justify-center items-center text-justify text-white py-4 px-[6%] xl:px-[8%] 2xl:px-[10%] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <h4 className="2xl:text-[25px] xl:text-[23px] text-[21px] font-semibold text-white drop-shadow-[1px_1.5px_0px_black]">
                    {project.title}
                  </h4>

                  <p className="2xl:text-[19px] xl:text-[18px] text-[17px] mt-2 mb-3 text-black font-medium leading-[1.4] xl:leading-[1.5] 2xl:leading-[1.6]">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="2xl:w-[45px] 2xl:h-[45px] xl:w-[42px] xl:h-[42px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-lg transition"
                  >
                    <img
                      src={linkIcon}
                      alt="link"
                      className="2xl:w-[22px] xl:w-[20px] w-[19px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
