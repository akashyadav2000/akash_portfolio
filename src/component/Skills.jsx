// import React from "react";
// import { MdArrowForwardIos } from "react-icons/md";
// import { skills } from "../data/skillsData";

// export default function Skills() {
//   return (
//     <section
//       className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] px-[7%] 2xl:py-[1%] xl:py-[1%] py-[2%]"
//       id="skills"
//     >
//       {/* Background Blur */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
//       </div>

//       <h2 className="2xl:text-[34px] xl:text-[38px] text-[30px] font-semibold text-gray-800 2xl:mb-6 xl:mb-[3%] mb-4 text-center">
//         My <span className="text-pink-500">Skills</span>
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 2xl:py-[10px] xl:py-[9px] py-[10px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
//           >
//             <div className="flex items-center gap-4">
//               {/* Icon or Image */}
//               <div>
//                 {skill.isImage ? (
//                   <img
//                     src={skill.icon}
//                     alt={skill.name}
//                     className="2xl:w-[35px] 2xl:h-[35px] xl:w-[40px] xl:h-[40px] w-[38px] h-[38px]"
//                   />
//                 ) : (
//                   <skill.icon
//                     className={`2xl:w-[35px] 2xl:h-[35px] xl:w-[40px] xl:h-[40px] w-[38px] h-[38px] ${skill.iconColor}`}
//                   />
//                 )}
//               </div>

//               {/* Name and Description */}
//               <div className="text-left">
//                 <h4
//                   className={`font-semibold 2xl:text-[15px] xl:text-[16.5px] text-[16px] ${skill.textColor}`}
//                 >
//                   {skill.name}
//                 </h4>
//                 <p
//                   className={`text-gray-600 2xl:text-[14px] xl:text-[15.5px] text-[15px] font-medium`}
//                 >
//                   {skill.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Arrow Icon */}
//             <MdArrowForwardIos
//               className={`2xl:text-[16px] xl:text-[17.5px] text-[17px] ${skill.textColor}`}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { MdArrowForwardIos } from "react-icons/md";
// import { skills } from "../data/skillsData";

// export default function Skills() {
//   return (
//     <section
//       className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] lg:px-[8%] px-[5%] 2xl:py-[1%] xl:py-[1%] py-10"
//       id="skills"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
//       </div>

//       <h2 className="2xl:text-[34px] xl:text-[38px] lg:text-[30px] text-[28px] font-semibold text-gray-800 2xl:mb-6 xl:mb-[3%] mb-4 text-center">
//         My <span className="text-pink-500">Skills</span>
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-4">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 2xl:py-[10px] xl:py-[9px] py-[10px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
//           >
//             <div className="flex items-center gap-4">
//               {/* Icon or Image */}
//               <div className="flex-shrink-0">
//                 {skill.isImage ? (
//                   <img
//                     src={skill.icon}
//                     alt={skill.name}
//                     loading="lazy"
//                     className="2xl:w-[35px] 2xl:h-[35px] xl:w-[38px] xl:h-[38px] w-[34px] h-[34px]"
//                   />
//                 ) : (
//                   <skill.icon
//                     className={`2xl:w-[35px] 2xl:h-[35px] xl:w-[38px] xl:h-[38px] w-[34px] h-[34px] ${skill.iconColor}`}
//                     aria-hidden="true"
//                   />
//                 )}
//               </div>

//               {/* Name and Description */}
//               <div className="text-left">
//                 <h4
//                   className={`font-semibold 2xl:text-[15px] xl:text-[15.5px] text-[14.5px] ${skill.textColor}`}
//                 >
//                   {skill.name}
//                 </h4>
//                 <p className="text-gray-600 2xl:text-[14px] xl:text-[14.5px] text-[13.5px] font-medium">
//                   {skill.desc}
//                 </p>
//               </div>
//             </div>

//             <MdArrowForwardIos
//               className={`2xl:text-[15px] xl:text-[16px] text-[15px] flex-shrink-0 ${skill.textColor}`}
//               aria-hidden="true"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { MdArrowForwardIos } from "react-icons/md";
// import { skills } from "../data/skillsData";

// export default function Skills() {
//   return (
//     <section
//       className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] lg:px-[8%] px-[5%] py-12 xl:py-[2%]"
//       id="skills"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
//       </div>

//       <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-gray-800 mb-6 xl:mb-[3%] text-center">
//         My <span className="text-pink-500">Skills</span>
//       </h2>

//       {/* 1 col mobile, 2 col md, 3 col lg+ */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-4">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 py-[10px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
//           >
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="flex-shrink-0">
//                 {skill.isImage ? (
//                   <img
//                     src={skill.icon}
//                     alt={skill.name}
//                     loading="lazy"
//                     className="w-[32px] h-[32px] xl:w-[35px] xl:h-[35px]"
//                   />
//                 ) : (
//                   <skill.icon
//                     className={`w-[32px] h-[32px] xl:w-[35px] xl:h-[35px] ${skill.iconColor}`}
//                     aria-hidden="true"
//                   />
//                 )}
//               </div>
//               <div className="text-left">
//                 <h4
//                   className={`font-semibold text-[14px] xl:text-[15px] ${skill.textColor}`}
//                 >
//                   {skill.name}
//                 </h4>
//                 <p className="text-gray-600 text-[13px] xl:text-[14px] font-medium">
//                   {skill.desc}
//                 </p>
//               </div>
//             </div>
//             <MdArrowForwardIos
//               className={`text-[14px] xl:text-[15px] flex-shrink-0 ${skill.textColor}`}
//               aria-hidden="true"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { skills } from "../data/skillsData";

// Split skills into two groups for mobile accordion
const CORE_SKILLS = skills.slice(0, 9);
const EXTRA_SKILLS = skills.slice(9);

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center relative 2xl:px-[11%] xl:px-[10%] lg:px-[8%] px-[5%] py-8 xl:py-[2%]"
      id="skills"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffc5c5] via-[#ffbbed] to-[#cfcfcf] opacity-40"></div>
      </div>

      <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-gray-800 mb-6 xl:mb-[3%] text-center">
        My <span className="text-pink-500">Skills</span>
      </h2>

      {/* ── Desktop & Tablet: full grid (md+) ── */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:gap-7 xl:gap-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* ── Mobile only: show first 9, collapse rest ── */}
      <div className="md:hidden flex flex-col gap-3">
        {CORE_SKILLS.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}

        {/* Collapsible extra skills */}
        {showMore && (
          <div className="flex flex-col gap-3">
            {EXTRA_SKILLS.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setShowMore((p) => !p)}
          className="mt-2 flex items-center justify-center gap-1 w-full py-2 rounded-lg border border-pink-300 text-pink-500 font-semibold text-[14px] bg-white/70 hover:bg-pink-50 transition-colors duration-200"
        >
          {showMore ? (
            <>
              Show Less <MdArrowDropUp className="text-[20px]" />
            </>
          ) : (
            <>
              Show {EXTRA_SKILLS.length} More Skills{" "}
              <MdArrowDropDown className="text-[20px]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div
      className={`group flex items-center justify-between gap-4 bg-gradient-to-bl ${skill.bgGradient} px-4 py-[9px] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer`}
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
            className={`font-semibold text-[13px] xl:text-[15px] ${skill.textColor}`}
          >
            {skill.name}
          </h4>
          <p className="text-gray-600 text-[12px] xl:text-[14px] font-medium">
            {skill.desc}
          </p>
        </div>
      </div>
      <MdArrowForwardIos
        className={`text-[13px] xl:text-[15px] flex-shrink-0 ${skill.textColor}`}
        aria-hidden="true"
      />
    </div>
  );
}
