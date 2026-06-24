// import React, { useState } from "react";
// import {
//   MdArrowForwardIos,
//   MdArrowDropDown,
//   MdArrowDropUp,
// } from "react-icons/md";
// import { skills } from "../data/skillsData";

// // Split skills into two groups for mobile accordion
// const CORE_SKILLS = skills.slice(0, 9);
// const EXTRA_SKILLS = skills.slice(9);

// export default function Skills() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section
//       className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] lg:px-[8%] px-[5%] py-8 xl:py-[2%]"
//       id="skills"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
//       </div>

//       <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-gray-800 mb-6 xl:mb-[3%] text-center">
//         My <span className="text-pink-500">Skills</span>
//       </h2>

//       {/* ── Desktop & Tablet: full grid (md+) ── */}
//       <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-4">
//         {skills.map((skill, index) => (
//           <SkillCard key={index} skill={skill} />
//         ))}
//       </div>

//       {/* ── Mobile only: show first 9, collapse rest ── */}
//       <div className="md:hidden flex flex-col gap-3">
//         {CORE_SKILLS.map((skill, index) => (
//           <SkillCard key={index} skill={skill} />
//         ))}

//         {/* Collapsible extra skills */}
//         {showMore && (
//           <div className="flex flex-col gap-3">
//             {EXTRA_SKILLS.map((skill, index) => (
//               <SkillCard key={index} skill={skill} />
//             ))}
//           </div>
//         )}

//         {/* Toggle button */}
//         <button
//           onClick={() => setShowMore((p) => !p)}
//           className="mt-2 flex items-center justify-center gap-1 w-full py-2 rounded-lg border border-pink-300 text-pink-500 font-semibold text-[14px] bg-white/70 hover:bg-pink-50 transition-colors duration-200"
//         >
//           {showMore ? (
//             <>
//               Show Less <MdArrowDropUp className="text-[20px]" />
//             </>
//           ) : (
//             <>
//               Show {EXTRA_SKILLS.length} More Skills{" "}
//               <MdArrowDropDown className="text-[20px]" />
//             </>
//           )}
//         </button>
//       </div>
//     </section>
//   );
// }

// function SkillCard({ skill }) {
//   return (
//     <div
//       className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 py-[9px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
//     >
//       <div className="flex items-center gap-3">
//         <div className="flex-shrink-0">
//           {skill.isImage ? (
//             <img
//               src={skill.icon}
//               alt={skill.name}
//               loading="lazy"
//               className="w-[30px] h-[30px] xl:w-[34px] xl:h-[34px]"
//             />
//           ) : (
//             <skill.icon
//               className={`w-[30px] h-[30px] xl:w-[34px] xl:h-[34px] ${skill.iconColor}`}
//               aria-hidden="true"
//             />
//           )}
//         </div>
//         <div className="text-left">
//           <h4
//             className={`font-semibold text-[13px] xl:text-[15px] ${skill.textColor}`}
//           >
//             {skill.name}
//           </h4>
//           <p className="text-gray-600 text-[12px] xl:text-[14px] font-medium">
//             {skill.desc}
//           </p>
//         </div>
//       </div>
//       <MdArrowForwardIos
//         className={`text-[13px] xl:text-[15px] flex-shrink-0 ${skill.textColor}`}
//         aria-hidden="true"
//       />
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import {
  MdArrowForwardIos,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skillsData";
import { useTheme } from "../context/ThemeContext";

const CORE = skills.slice(0, 9);
const EXTRAS = skills.slice(9);

function SkillCard({ skill, i, inView, isDark }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(400px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.04)`;
  };
  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(400px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`tilt-card flex items-center justify-between gap-4 px-4 py-[9px] rounded-lg border transition-all duration-300
          ${
            isDark
              ? "glass-card bg-white/5 border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,252,0.1)]"
              : `bg-gradient-to-bl ${skill.bgGradient} border-gray-200/80 hover:shadow-md`
          }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {skill.isImage ? (
              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className="w-[30px] h-[30px] xl:w-[34px] xl:h-[34px]"
              />
            ) : (
              <skill.icon
                className={`w-[30px] h-[30px] xl:w-[34px] xl:h-[34px] ${skill.iconColor}`}
                aria-hidden="true"
              />
            )}
          </div>
          <div className="text-left">
            <h4
              className={`font-semibold text-[13px] xl:text-[15px] ${isDark ? skill.textColor.replace("text-gray-800", "text-gray-200") : skill.textColor}`}
            >
              {skill.name}
            </h4>
            <p
              className={`text-[12px] xl:text-[14px] font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {skill.desc}
            </p>
          </div>
        </div>
        <MdArrowForwardIos
          className={`text-[13px] xl:text-[15px] flex-shrink-0 ${isDark ? skill.textColor.replace("text-gray-800", "text-gray-400") : skill.textColor}`}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [showMore, setShowMore] = useState(false);
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] lg:px-[8%] px-[5%] py-8 xl:py-[2%]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold mb-6 xl:mb-[3%] text-center
          ${isDark ? "text-white" : "text-gray-800"}`}
      >
        My{" "}
        <span
          className={isDark ? "text-pink-400 neon-text-pink" : "text-pink-500"}
        >
          Skills
        </span>
      </motion.h2>

      {/* Desktop grid */}
      <div
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-4"
        style={{ perspective: "800px" }}
      >
        {skills.map((skill, i) => (
          <SkillCard
            key={i}
            skill={skill}
            i={i}
            inView={inView}
            isDark={isDark}
          />
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden flex flex-col gap-3">
        {CORE.map((skill, i) => (
          <SkillCard
            key={i}
            skill={skill}
            i={i}
            inView={inView}
            isDark={isDark}
          />
        ))}
        {showMore && (
          <div className="flex flex-col gap-3">
            {EXTRAS.map((skill, i) => (
              <SkillCard
                key={i}
                skill={skill}
                i={i + 9}
                inView={inView}
                isDark={isDark}
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setShowMore((p) => !p)}
          className={`mt-2 flex items-center justify-center gap-1 w-full py-2 rounded-lg border font-semibold text-[14px] transition-colors duration-200
            ${
              isDark
                ? "border-pink-400/50 text-pink-400 bg-transparent hover:bg-pink-400/10"
                : "border-pink-300 text-pink-500 bg-white/70 hover:bg-pink-50"
            }`}
        >
          {showMore ? (
            <>
              Show Less <MdArrowDropUp className="text-[20px]" />
            </>
          ) : (
            <>
              Show {EXTRAS.length} More Skills{" "}
              <MdArrowDropDown className="text-[20px]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
