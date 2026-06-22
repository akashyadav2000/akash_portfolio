// import React from "react";
// import { projects } from "../data/portfolioData";
// import linkIcon from "/images/project/download.svg";

// export default function Portfolio() {
//   return (
//     <section
//       id="projects"
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[11%]"
//     >
//       {/* Background Blur */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#dea8ff] via-[#deffd8] to-[#ffa8de] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         <h2 className="2xl:text-[34px] xl:text-[33px] text-[30px] leading-none font-semibold text-center text-gray-800 mb-6">
//           Portfolio
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-x-14 2xl:gap-y-14 xl:gap-x-11 xl:gap-y-12">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="rounded-lg overflow-hidden transition-all duration-500 group  border-1 border-white"
//             >
//               <div className="w-full 2xl:h-[32vh] xl:h-[30.5vh] h-[28.5vh] relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-102 group-hover:blur-[4px]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#bbffff]/95 to-[#69ffff] flex flex-col justify-center items-center text-justify text-white py-4 px-[6%] xl:px-[8%] 2xl:px-[10%] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
//                   <h4 className="2xl:text-[21px] xl:text-[23px] text-[21px] font-semibold text-white drop-shadow-[1px_1.5px_0px_black]">
//                     {project.title}
//                   </h4>

//                   <p className="2xl:text-[16px] xl:text-[18px] text-[17px] mt-2 mb-3 text-black font-medium leading-[1.4] xl:leading-[1.5] 2xl:leading-[1.6]">
//                     {project.description}
//                   </p>

//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="2xl:w-[38px] 2xl:h-[38px] xl:w-[42px] xl:h-[42px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-lg transition"
//                   >
//                     <img
//                       src={linkIcon}
//                       alt="link"
//                       className="2xl:w-[18px] xl:w-[20px] w-[19px]"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { projects } from "../data/portfolioData";
// import linkIcon from "/images/project/download.svg";

// export default function Portfolio() {
//   return (
//     <section
//       id="projects"
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[8%] lg:px-[11%] py-12 xl:py-0"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#dea8ff] via-[#deffd8] to-[#ffa8de] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         <h2 className="2xl:text-[34px] xl:text-[33px] lg:text-[30px] text-[28px] leading-none font-semibold text-center text-gray-800 mb-8">
//           Portfolio
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-x-14 2xl:gap-y-14 xl:gap-x-10 xl:gap-y-10 gap-x-6 gap-y-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="rounded-lg overflow-hidden transition-all duration-500 group border border-white shadow-md"
//             >
//               <div className="w-full 2xl:h-[32vh] xl:h-[30vh] lg:h-[27vh] h-[220px] relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-102 group-hover:blur-[4px]"
//                 />

//                 {/* FIXED: white text on near-white cyan had very poor contrast.
//                     Changed overlay to dark-tinted cyan and text to near-black. */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#006b6b]/80 via-[#00aaaa]/90 to-[#008080] flex flex-col justify-center items-center text-justify py-4 px-[6%] xl:px-[8%] 2xl:px-[10%] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
//                   <h4 className="2xl:text-[20px] xl:text-[19px] text-[17px] font-semibold text-white drop-shadow-[1px_1.5px_0px_rgba(0,0,0,0.6)] mb-1">
//                     {project.title}
//                   </h4>

//                   <p className="2xl:text-[15px] xl:text-[14px] text-[13px] mt-1 mb-3 text-white font-medium leading-[1.5]">
//                     {project.description}
//                   </p>

//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Visit ${project.title}`}
//                     className="2xl:w-[38px] 2xl:h-[38px] xl:w-[40px] xl:h-[40px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
//                   >
//                     <img
//                       src={linkIcon}
//                       alt=""
//                       className="2xl:w-[18px] xl:w-[19px] w-[17px]"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { projects } from "../data/portfolioData";
import linkIcon from "/images/project/download.svg";

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-12 xl:py-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#dea8ff] via-[#deffd8] to-[#ffa8de] opacity-40"></div>
      </div>

      <div className="w-full max-w-[1500px]">
        <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] leading-none font-semibold text-center text-gray-800 mb-6 xl:mb-8">
          Portfolio
        </h2>

        {/* 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-x-10 xl:gap-y-10 2xl:gap-x-14 2xl:gap-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-500 group border border-white shadow-md"
            >
              {/* Fixed height responsive: smaller on mobile, grows on larger screens */}
              <div className="w-full h-[200px] sm:h-[220px] lg:h-[26vh] xl:h-[29vh] 2xl:h-[32vh] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-105 group-hover:blur-[4px]"
                />

                {/* FIXED: was white text on near-white cyan — very poor contrast.
                    Now dark teal overlay with white text + drop shadow = readable on all screens */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#005f5f]/80 via-[#008080]/90 to-[#006060] flex flex-col justify-center items-center text-center py-4 px-[8%] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <h4 className="text-[16px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px] font-semibold text-white drop-shadow-[1px_1.5px_0px_rgba(0,0,0,0.6)] mb-1">
                    {project.title}
                  </h4>
                  <p className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] mt-1 mb-3 text-white font-medium leading-[1.5]">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] bg-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
                  >
                    <img
                      src={linkIcon}
                      alt=""
                      className="w-[16px] xl:w-[18px]"
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
