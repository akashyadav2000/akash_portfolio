// import React from "react";
// import { profileImage, aboutStats, aboutText } from "../data/aboutData";

// const scrollToSection = (id) => {
//   const el = document.getElementById(id);
//   if (!el) return;
//   window.scrollTo({
//     top: el.getBoundingClientRect().top + window.scrollY - 55,
//     behavior: "smooth",
//   });
// };

// const AboutMe = () => {
//   return (
//     <section
//       id="about"
//       className="relative min-h-[calc(100dvh-55px)] px-[8%] md:px-[8%] lg:px-[10%] xl:px-[11%] flex items-center justify-center flex-col py-8 md:py-12 xl:py-0"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#8dfff7] via-[#fdf5e6c3] to-[#ffeddd99] opacity-50"></div>
//       </div>

//       <h2 className="w-full text-center 2xl:text-[34px] xl:text-[32px] lg:text-[29px] md:text-[26px] text-[24px] font-[600] text-gray-800 mb-6 xl:mb-[3%] leading-none flex-shrink-0">
//         About <span className="text-pink-500">Me</span>
//       </h2>

//       <div className="w-full max-w-[1536px] flex flex-col md:flex-row md:items-center gap-12 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
//         {/* Image Side */}
//         <div className="w-full md:w-[38%] lg:w-[36%] flex justify-center flex-shrink-0">
//           <div
//             className="relative
//             w-[42%] sm:w-[38%]
//             md:w-[80%] lg:w-[82%] xl:w-[80%] 2xl:w-[75%]
//             mx-auto
//             mt-6
//             md:mt-20 lg:mt-24 xl:mt-24 2xl:mt-20
//             mb-0
//             md:mb-8 lg:mb-8 xl:mb-8"
//           >
//             {/* Pink frame */}
//             <div className="relative bg-gradient-to-b from-[#fba0e3] to-[#ff51ff] p-[9%]">
//               <div className="w-full h-full bg-white">
//                 <div className="w-full h-full bg-gray-200 flex items-end justify-center overflow-visible">
//                   <img
//                     src={profileImage}
//                     alt="Akash Yadav"
//                     className="w-[94%] object-cover object-top rounded-md
//                       h-[180px] sm:h-[220px]
//                       md:h-auto md:-mt-32
//                       lg:-mt-40 xl:-mt-44 2xl:-mt-48"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Stat Cards */}
//             {aboutStats.map((stat, i) => {
//               let pos = "";
//               if (stat.position === "top-left")
//                 pos =
//                   "-top-5 -left-[32%] md:-left-[24%] lg:-left-[26%] xl:-left-[28%]";
//               else if (stat.position === "bottom-left")
//                 pos =
//                   "-bottom-5 -left-[32%] md:-left-[24%] lg:-left-[26%] xl:-left-[28%]";
//               else if (stat.position === "bottom-right")
//                 pos =
//                   "-bottom-5 -right-[32%] md:-right-[24%] lg:-right-[26%] xl:-right-[28%]";

//               return (
//                 <div
//                   key={i}
//                   className={`absolute ${pos} bg-fuchsia-50/90 border border-cyan-200 shadow-lg rounded-xl text-center z-30 transition-all duration-300 hover:scale-105
//                     px-[6px] py-[4px] sm:px-[8px] sm:py-[5px]
//                     md:px-[10px] md:py-[6px] lg:px-[13px] lg:py-[8px]
//                     xl:px-[16px] xl:py-[10px] 2xl:px-[22px] 2xl:py-[13px]`}
//                 >
//                   <p
//                     className="font-semibold leading-snug
//                       text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[18px]"
//                     style={{ color: stat.color }}
//                   >
//                     {stat.value}
//                   </p>
//                   <p
//                     className="font-[500] leading-snug whitespace-nowrap text-gray-700
//                     text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px]"
//                   >
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Text Side */}
//         <div className="w-full md:w-[62%] lg:w-[64%] text-justify mt-6 md:mt-0">
//           <p
//             className="text-gray-700 font-medium leading-relaxed mb-3
//             text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
//           >
//             {aboutText.intro}
//           </p>

//           <div className="my-3 xl:my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4
//             className="font-semibold text-[#032255] mb-2
//             text-[14px] sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[22px]"
//           >
//             {aboutText.freelanceTitle}
//           </h4>
//           <p
//             className="text-gray-700 font-medium leading-relaxed mb-3
//             text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
//           >
//             {aboutText.freelanceDescription}
//           </p>

//           <div className="my-3 xl:my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4
//             className="font-semibold text-[#032255] mb-2
//             text-[14px] sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[22px]"
//           >
//             Lionbridge Pvt Ltd
//           </h4>
//           <p
//             className="text-gray-700 font-medium leading-relaxed mb-5
//             text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
//           >
//             {aboutText.summary}
//           </p>

//           <div className="flex gap-4 flex-wrap">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-5 py-2 rounded-lg font-[500] bg-[#2ef6e9] border border-white transition-all duration-300 hover:bg-white hover:text-[#0fc0fc] hover:border-[#0fc0fc] text-[13px] sm:text-[14px]"
//             >
//               Hire Me
//             </button>
//             <a
//               href="/certificates/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2 rounded-lg font-[500] bg-white text-[#ff51ff] border border-[#ff51ff] transition-all duration-300 hover:bg-[#ff6dff] hover:text-white hover:border-white text-[13px] sm:text-[14px]"
//             >
//               My Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profileImage, aboutStats, aboutText } from "../data/aboutData";
import { useTheme } from "../context/ThemeContext";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 55,
    behavior: "smooth",
  });
};

export default function AboutMe() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-[calc(100dvh-55px)] px-[8%] md:px-[8%] lg:px-[10%] xl:px-[11%] flex items-center justify-center flex-col py-8 md:py-12 xl:py-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`w-full text-center 2xl:text-[34px] xl:text-[32px] lg:text-[29px] md:text-[26px] text-[24px] font-[600] mb-6 xl:mb-[3%] leading-none flex-shrink-0
          ${isDark ? "text-white" : "text-gray-800"}`}
      >
        About{" "}
        <span
          className={isDark ? "text-pink-400 neon-text-pink" : "text-pink-500"}
        >
          Me
        </span>
      </motion.h2>

      <div className="w-full max-w-[1536px] flex flex-col md:flex-row md:items-center gap-12 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
        {/* Image side — slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[38%] lg:w-[36%] flex justify-center flex-shrink-0"
        >
          <div className="relative w-[42%] sm:w-[38%] md:w-[80%] lg:w-[82%] xl:w-[80%] 2xl:w-[75%] mx-auto mt-6 md:mt-20 lg:mt-24 xl:mt-24 mb-0 md:mb-8">
            {/* Frame */}
            <div
              className={`relative p-[9%] ${
                isDark
                  ? "bg-gradient-to-b from-[#ff51ff]/80 to-[#a855f7]/80 shadow-[0_0_40px_rgba(255,81,255,0.3)]"
                  : "bg-gradient-to-b from-[#fba0e3] to-[#ff51ff]"
              }`}
            >
              <div
                className={`w-full h-full ${isDark ? "bg-[#0a0a1a]" : "bg-white"}`}
              >
                <div className="w-full h-full bg-gray-200/30 flex items-end justify-center overflow-visible">
                  <img
                    src={profileImage}
                    alt="Akash Yadav"
                    loading="lazy"
                    className="w-[94%] object-cover object-top rounded-md h-[180px] sm:h-[220px] md:h-auto md:-mt-32 lg:-mt-40 xl:-mt-44 2xl:-mt-48"
                    style={{
                      filter: isDark
                        ? "drop-shadow(0 0 20px rgba(0,240,252,0.2))"
                        : "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Stat Cards */}
            {aboutStats.map((stat, i) => {
              let pos = "";
              if (stat.position === "top-left")
                pos =
                  "-top-5 -left-[32%] md:-left-[24%] lg:-left-[26%] xl:-left-[28%]";
              if (stat.position === "bottom-left")
                pos =
                  "-bottom-5 -left-[32%] md:-left-[24%] lg:-left-[26%] xl:-left-[28%]";
              if (stat.position === "bottom-right")
                pos =
                  "-bottom-5 -right-[32%] md:-right-[24%] lg:-right-[26%] xl:-right-[28%]";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className={`absolute ${pos} border shadow-lg rounded-xl text-center z-30 transition-all duration-300 hover:scale-110
                    px-[6px] py-[4px] sm:px-[8px] sm:py-[5px] md:px-[10px] md:py-[6px] lg:px-[13px] lg:py-[8px] xl:px-[16px] xl:py-[10px] 2xl:px-[22px] 2xl:py-[13px]
                    ${
                      isDark
                        ? "bg-[#0a0a1a]/90 glass-card border-white/10 shadow-[0_0_20px_rgba(0,240,252,0.1)]"
                        : "bg-fuchsia-50/90 border-cyan-200"
                    }`}
                >
                  <p
                    className="font-semibold leading-snug text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[18px]"
                    style={{
                      color: stat.color,
                      textShadow: isDark ? `0 0 10px ${stat.color}` : "none",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`font-[500] leading-snug whitespace-nowrap text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px]
                    ${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Text side — slides from right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[62%] lg:w-[64%] text-justify mt-6 md:mt-0"
        >
          {[
            { text: aboutText.intro },
            {
              heading: aboutText.freelanceTitle,
              text: aboutText.freelanceDescription,
            },
            { heading: "Lionbridge Pvt Ltd", text: aboutText.summary },
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            >
              {block.heading && (
                <h4
                  className={`font-semibold mb-2 text-[14px] sm:text-[15px] lg:text-[17px] xl:text-[22px]
                  ${isDark ? "text-cyan-300" : "text-[#032255]"}`}
                >
                  {block.heading}
                </h4>
              )}
              <p
                className={`font-medium leading-relaxed mb-3 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]
                ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {block.text}
              </p>
              {i < 2 && (
                <div
                  className={`my-3 xl:my-4 h-[1px] bg-gradient-to-r from-transparent ${isDark ? "via-cyan-400" : "via-[#00f0ff]"} to-transparent`}
                />
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 flex-wrap mt-2"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2 rounded-lg font-[600] text-[13px] sm:text-[14px] border transition-all duration-300
                ${
                  isDark
                    ? "bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-[#05050f] neon-cyan"
                    : "bg-[#2ef6e9] text-gray-800 border-white hover:bg-white hover:text-cyan-500 hover:border-cyan-400"
                }`}
            >
              Hire Me
            </button>
            <a
              href="/certificates/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-lg font-[600] text-[13px] sm:text-[14px] border transition-all duration-300
                ${
                  isDark
                    ? "bg-transparent text-[#ff51ff] border-[#ff51ff] hover:bg-[#ff51ff] hover:text-white neon-pink"
                    : "bg-white text-[#ff51ff] border-[#ff51ff] hover:bg-[#ff6dff] hover:text-white hover:border-transparent"
                }`}
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
