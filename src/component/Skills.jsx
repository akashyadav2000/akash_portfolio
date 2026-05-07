import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { skills } from "../data/skillsData";

export default function Skills() {
  return (
    <section
      className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] px-[7%] 2xl:py-[1%] xl:py-[1%] py-[2%]"
      id="skills"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
      </div>

      <h2 className="2xl:text-[34px] xl:text-[38px] text-[30px] font-semibold text-gray-800 2xl:mb-6 xl:mb-[3%] mb-4 text-center">
        My <span className="text-pink-500">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 2xl:py-[10px] xl:py-[9px] py-[10px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              {/* Icon or Image */}
              <div>
                {skill.isImage ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="2xl:w-[35px] 2xl:h-[35px] xl:w-[40px] xl:h-[40px] w-[38px] h-[38px]"
                  />
                ) : (
                  <skill.icon
                    className={`2xl:w-[35px] 2xl:h-[35px] xl:w-[40px] xl:h-[40px] w-[38px] h-[38px] ${skill.iconColor}`}
                  />
                )}
              </div>

              {/* Name and Description */}
              <div className="text-left">
                <h4
                  className={`font-semibold 2xl:text-[15px] xl:text-[16.5px] text-[16px] ${skill.textColor}`}
                >
                  {skill.name}
                </h4>
                <p
                  className={`text-gray-600 2xl:text-[14px] xl:text-[15.5px] text-[15px] font-medium`}
                >
                  {skill.desc}
                </p>
              </div>
            </div>

            {/* Arrow Icon */}
            <MdArrowForwardIos
              className={`2xl:text-[16px] xl:text-[17.5px] text-[17px] ${skill.textColor}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
