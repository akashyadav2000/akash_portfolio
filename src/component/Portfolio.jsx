// import React from "react";
// import { projects } from "../data/portfolioData";
// import linkIcon from "/images/project/download.svg";

// export default function Portfolio() {
//   return (
//     <section
//       id="projects"
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-8 xl:py-6"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#dea8ff] via-[#deffd8] to-[#ffa8de] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] leading-none font-semibold text-center text-gray-800 mb-6 xl:mb-[3%]">
//           Portfolio
//         </h2>

//         {/* 1 col mobile, 2 col sm, 3 col lg */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-x-10 xl:gap-y-10 2xl:gap-x-14 2xl:gap-y-14">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="rounded-lg overflow-hidden transition-all duration-500 group border border-white shadow-md"
//             >
//               {/* Fixed height responsive: smaller on mobile, grows on larger screens */}
//               <div className="w-full h-[200px] sm:h-[220px] lg:h-[26vh] xl:h-[29vh] 2xl:h-[32vh] relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-105 group-hover:blur-[4px]"
//                 />

//                 {/* FIXED: was white text on near-white cyan — very poor contrast.
//                     Now dark teal overlay with white text + drop shadow = readable on all screens */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#005f5f]/80 via-[#008080]/90 to-[#006060] flex flex-col justify-center items-center text-center py-4 px-[8%] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
//                   <h4 className="text-[16px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px] font-semibold text-white drop-shadow-[1px_1.5px_0px_rgba(0,0,0,0.6)] mb-1">
//                     {project.title}
//                   </h4>
//                   <p className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] mt-1 mb-3 text-white font-medium leading-[1.5]">
//                     {project.description}
//                   </p>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Visit ${project.title}`}
//                     className="w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] bg-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
//                   >
//                     <img
//                       src={linkIcon}
//                       alt=""
//                       className="w-[16px] xl:w-[18px]"
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

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { projects } from "../data/portfolioData";
// import linkIcon from "/images/project/download.svg";
// import { useTheme } from "../context/ThemeContext";

// export default function Portfolio() {
//   const { isDark } = useTheme();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-8 xl:py-6"
//     >
//       <div className="w-full max-w-[1500px]">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className={`2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] leading-none font-semibold text-center mb-6 xl:mb-[3%]
//             ${isDark ? "text-white" : "text-gray-800"}`}
//         >
//           Portfolio
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-x-10 xl:gap-y-10 2xl:gap-x-14 2xl:gap-y-14">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//               transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
//               whileHover={{ y: -6, transition: { duration: 0.3 } }}
//               className={`rounded-xl overflow-hidden group border transition-all duration-500
//                 ${
//                   isDark
//                     ? "border-white/10 hover:border-cyan-400/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,240,252,0.15)]"
//                     : "border-white shadow-md hover:shadow-xl"
//                 }`}
//             >
//               <div className="w-full h-[200px] sm:h-[220px] lg:h-[26vh] xl:h-[29vh] 2xl:h-[32vh] relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover object-left transition-all duration-500 group-hover:scale-105 group-hover:blur-[3px]"
//                 />
//                 {/* Hover overlay */}
//                 <div
//                   className={`absolute inset-0 flex flex-col justify-center items-center text-center py-4 px-[8%]
//                   opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
//                   transition-all duration-500 ease-in-out
//                   ${
//                     isDark
//                       ? "bg-gradient-to-b from-[#05050f]/90 via-[#0a0a2a]/95 to-[#05050f]/90"
//                       : "bg-gradient-to-b from-[#005f5f]/80 via-[#008080]/90 to-[#006060]"
//                   }`}
//                 >
//                   <h4
//                     className={`text-[16px] lg:text-[17px] xl:text-[19px] font-semibold mb-1 drop-shadow-md
//                     ${isDark ? "text-cyan-300" : "text-white"}`}
//                   >
//                     {project.title}
//                   </h4>
//                   <p className="text-[12px] lg:text-[13px] mt-1 mb-3 text-gray-200 font-medium leading-[1.5]">
//                     {project.description}
//                   </p>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={`Visit ${project.title}`}
//                     className={`w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110
//                       ${isDark ? "bg-cyan-400/20 border border-cyan-400/50 hover:bg-cyan-400" : "bg-white hover:bg-gray-100"}`}
//                   >
//                     <img
//                       src={linkIcon}
//                       alt=""
//                       className="w-[16px] xl:w-[18px]"
//                       style={{
//                         filter: isDark ? "invert(1) brightness(2)" : "none",
//                       }}
//                     />
//                   </a>
//                 </div>

//                 {/* Project title bar at bottom */}
//                 <div
//                   className={`absolute bottom-0 left-0 right-0 px-3 py-2 transition-all duration-300 group-hover:opacity-0
//                   ${isDark ? "bg-gradient-to-t from-[#05050f]/80 to-transparent" : "bg-gradient-to-t from-black/30 to-transparent"}`}
//                 >
//                   <p className="text-white text-[12px] font-semibold truncate">
//                     {project.title}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "../data/portfolioData";
import linkIcon from "/images/project/download.svg";
import { useTheme } from "../context/ThemeContext";

export default function Portfolio() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-10 xl:py-6"
      style={{
        background: isDark
          ? "linear-gradient(135deg,#070318 0%,#0c0530 50%,#080320 100%)"
          : undefined,
      }}
    >
      {!isDark && (
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-[#dea8ff]/40 via-[#deffd8]/40 to-[#ffa8de]/30" />
        </div>
      )}

      <div className="w-full max-w-[1500px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`2xl:text-[34px] xl:text-[30px] lg:text-[26px] text-[22px] font-[800] text-center mb-8 xl:mb-[3%] tracking-tight
            ${isDark ? "text-white" : "text-gray-900"}`}
        >
          My{" "}
          <span className={isDark ? "text-indigo-400" : "text-purple-600"}>
            Portfolio
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 2xl:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`rounded-2xl overflow-hidden group border transition-all duration-500
                ${
                  isDark
                    ? "border-white/8 hover:border-indigo-400/50 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]"
                    : "border-white/60 shadow-lg hover:shadow-2xl"
                }`}
            >
              <div className="w-full h-[200px] sm:h-[220px] lg:h-[26vh] xl:h-[29vh] 2xl:h-[32vh] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-left transition-all duration-600 group-hover:scale-110 group-hover:blur-[3px]"
                />

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center text-center py-4 px-[8%]
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out
                  ${
                    isDark
                      ? "bg-gradient-to-b from-[#070318]/88 via-[#0c0530]/92 to-[#070318]/88"
                      : "bg-gradient-to-b from-purple-900/80 via-indigo-900/88 to-purple-900/80"
                  }`}
                >
                  <h4 className="text-[15px] lg:text-[17px] xl:text-[18px] font-[700] mb-1 tracking-tight text-white">
                    {project.title}
                  </h4>
                  <p className="text-[11px] lg:text-[12px] mt-1 mb-4 text-gray-200 font-[400] leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110
                      ${isDark ? "bg-indigo-500/30 border border-indigo-400/60 hover:bg-indigo-500" : "bg-white hover:bg-indigo-50"}`}
                  >
                    <img
                      src={linkIcon}
                      alt=""
                      className="w-[15px]"
                      style={{ filter: isDark ? "invert(1)" : "none" }}
                    />
                  </a>
                </div>

                {/* Title bar — visible when not hovered */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-white text-[12px] font-[600] truncate">
                    {project.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
