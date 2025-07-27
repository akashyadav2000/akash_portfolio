import React from "react";
import { profileImage, aboutStats, aboutText } from "../data/aboutData";

const AboutMe = () => {
  return (
    <section className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] px-[1%] flex items-center justify-center flex-col">
      <h2 className="2xl:text-[42px] xl:text-[38px] text-[30px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%]  xl:mb-[5%] my-[4%] leading-0">
        About <span className="text-pink-500">Me</span>
      </h2>
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#8dfff7] via-[#fdf5e6c3] to-[#ffeddd99] opacity-50"></div>
      </div>

      <div className="w-full max-w-[1536px] 2xl:px-[2%] xl:pl-[3%] xl:pr-[1%] px-[5%] flex flex-col md:flex-row items-center gap-10 xl:gap-12 2xl:gap-16">
        {/* Image Side */}
        <div className="w-full md:w-[36%] flex justify-center relative">
          <div className="relative w-[90%]">
            <div className="relative bg-gradient-to-b from-[#fba0e3] to-[#ff51ff] p-[9%]">
              <div className="w-full h-full bg-white ">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-[94%] h-full object-cover rounded-md -mt-36"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            {aboutStats.map((stat, i) => {
              let pos = "";
              if (stat.position === "top-left")
                pos = "-top-6 md:-top-7 -left-6 md:-left-12";
              else if (stat.position === "bottom-left")
                pos = "-bottom-6 md:-bottom-6 -left-6 md:-left-12";
              else if (stat.position === "bottom-right")
                pos = "-bottom-6 md:bottom-45 -right-6 md:-right-12";

              return (
                <div
                  key={i}
                  className={`absolute ${pos} bg-fuchsia-50/90 border-1 border-cyan-200 shadow-lg rounded-xl px-4 py-2 xl:px-[21px] xl:py-[12px] 2xl:px-[24px] 2xl:py-[14px] text-center z-30 transition-all duration-300 hover:scale-105`}
                >
                  <p
                    className="font-semibold text-[18px] sm:text-[19px] md:text-[20px] xl:text-[21px] 2xl:text-[22px] leading-snug"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-[500] text-[15px] sm:text-[15px] md:text-[15.5px] xl:text-[16px] 2xl:text-[16.5px] text-gray-700 leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-[64%] text-justify">
          <p className="text-gray-700 font-medium text-[18px] xl:text-[19px] 2xl:text-[20px] mb-4">
            {aboutText.intro}
          </p>

          <div className="my-5 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

          <h4 className="text-[21px] xl:text-[24px] 2xl:text-[26px] font-semibold text-[#032255] mb-4">
            {aboutText.freelanceTitle}
          </h4>
          <p className="text-gray-700 text-[18px] xl:text-[19px] 2xl:text-[20px] font-medium leading-relaxed mb-5">
            {aboutText.freelanceDescription}
          </p>

          <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

          <h4 className="text-[21px] xl:text-[24px] 2xl:text-[26px] font-semibold text-[#032255] mb-4">
            Lionbridge Pvt Ltd
          </h4>

          <p className="text-gray-700 text-[18px] xl:text-[19px] 2xl:text-[20px] font-medium leading-relaxed mb-8">
            {aboutText.summary}
          </p>

          <div className="2xl:mt-6 xl:mt-[22px] mt-[20px] flex gap-4 flex-wrap">
            <button className="relative px-6 py-2 rounded-lg font-[500] bg-[#2ef6e9] border border-[#ffffff] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-[#ffffff] hover:text-[#0fc0fc] hover:border-[#0fc0fc] text-[16.5px]">
              Hire Me
            </button>

            <button className="relative px-6 py-2 rounded-lg font-[500] bg-white text-[#ff51ff] border border-[#ff51ff] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-[#ff6dff] hover:text-white hover:border-white text-[16.5px]">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
