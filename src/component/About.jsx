// import React from "react";
// import { profileImage, aboutStats, aboutText } from "../data/aboutData";

// const AboutMe = () => {
//   return (
//     <section
//       id="about"
//       className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] px-[11%] flex items-center justify-center flex-col"
//     >
//       <h2 className="2xl:text-[34px] xl:text-[38px] text-[30px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%]  xl:mb-[5%] my-[4%] leading-0">
//         About <span className="text-pink-500">Me</span>
//       </h2>
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#8dfff7] via-[#fdf5e6c3] to-[#ffeddd99] opacity-50"></div>
//       </div>

//       <div className="w-full max-w-[1536px]  flex flex-col md:flex-row items-center gap-10 xl:gap-12 2xl:gap-16">
//         {/* Image Side 2xl:px-[2%] xl:pl-[3%] xl:pr-[1%] px-[5%]*/}
//         <div className="w-full md:w-[36%] flex justify-center relative">
//           <div className="relative w-[88%]">
//             <div className="relative bg-gradient-to-b from-[#fba0e3] to-[#ff51ff] p-[9%]">
//               <div className="w-full h-full bg-white ">
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-[94%] h-full object-cover rounded-md -mt-36"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             {aboutStats.map((stat, i) => {
//               let pos = "";
//               if (stat.position === "top-left")
//                 pos = "-top-6 md:-top-7 -left-6 md:-left-12";
//               else if (stat.position === "bottom-left")
//                 pos = "-bottom-6 md:-bottom-6 -left-6 md:-left-12";
//               else if (stat.position === "bottom-right")
//                 pos = "-bottom-6 md:bottom-45 -right-6 md:-right-12";

//               return (
//                 <div
//                   key={i}
//                   className={`absolute ${pos} bg-fuchsia-50/90 border-1 border-cyan-200 shadow-lg rounded-xl px-4 py-2 xl:px-[21px] xl:py-[12px] 2xl:px-[24px] 2xl:py-[14px] text-center z-30 transition-all duration-300 hover:scale-105`}
//                 >
//                   <p
//                     className="font-semibold text-[18px] sm:text-[19px] md:text-[20px] xl:text-[21px] 2xl:text-[18px] leading-snug"
//                     style={{ color: stat.color }}
//                   >
//                     {stat.value}
//                   </p>
//                   <p className="font-[500] text-[15px] sm:text-[15px] md:text-[15.5px] xl:text-[16px] 2xl:text-[15px] text-gray-700 leading-snug">
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Text Side */}
//         <div className="w-full md:w-[64%] text-justify">
//           <p className="text-gray-700 font-medium text-[18px] xl:text-[19px] 2xl:text-[17px] mb-4">
//             {aboutText.intro}
//           </p>

//           <div className="my-5 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4 className="text-[21px] xl:text-[24px] 2xl:text-[22px] font-semibold text-[#032255] mb-4">
//             {aboutText.freelanceTitle}
//           </h4>
//           <p className="text-gray-700 text-[18px] xl:text-[19px] 2xl:text-[17px] font-medium leading-relaxed mb-5">
//             {aboutText.freelanceDescription}
//           </p>

//           <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4 className="text-[21px] xl:text-[24px] 2xl:text-[22px] font-semibold text-[#032255] mb-4">
//             Lionbridge Pvt Ltd
//           </h4>

//           <p className="text-gray-700 text-[18px] xl:text-[19px] 2xl:text-[17px] font-medium leading-relaxed mb-8">
//             {aboutText.summary}
//           </p>

//           <div className="2xl:mt-6 xl:mt-[22px] mt-[20px] flex gap-4 flex-wrap">
//             <button className="relative px-4 py-2 rounded-lg font-[500] bg-[#2ef6e9] border border-[#ffffff] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-[#ffffff] hover:text-[#0fc0fc] hover:border-[#0fc0fc] text-[14px]">
//               Hire Me
//             </button>

//             <button className="relative px-4 py-2 rounded-lg font-[500] bg-white text-[#ff51ff] border border-[#ff51ff] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-[#ff6dff] hover:text-white hover:border-white text-[14px]">
//               My Resume
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

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
//       className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] px-[8%] md:px-[10%] lg:px-[11%] flex items-center justify-center flex-col py-14 xl:py-0"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#8dfff7] via-[#fdf5e6c3] to-[#ffeddd99] opacity-50"></div>
//       </div>

//       <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[30px] text-[26px] font-[600] text-gray-800 mb-[6%] lg:mb-[4%] xl:mb-[3%] 2xl:mb-[5%] leading-none">
//         About <span className="text-pink-500">Me</span>
//       </h2>

//       <div className="w-full max-w-[1536px] flex flex-col md:flex-row items-center gap-14 md:gap-16 xl:gap-12 2xl:gap-16">
//         {/* Image Side */}
//         <div className="w-[70%] sm:w-[55%] md:w-[36%] flex justify-center relative mx-auto md:mx-0">
//           <div className="relative w-full">
//             <div className="relative bg-gradient-to-b from-[#fba0e3] to-[#ff51ff] p-[9%]">
//               <div className="w-full h-full bg-white">
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                   <img
//                     src={profileImage}
//                     alt="Akash Yadav"
//                     className="w-[94%] h-full object-cover rounded-md -mt-36"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Stat Cards
//                 FIXED: md:bottom-45 was broken — replaced with md:-bottom-6
//                 FIXED: positions now scale properly at all breakpoints */}
//             {aboutStats.map((stat, i) => {
//               let pos = "";
//               if (stat.position === "top-left")
//                 pos = "-top-5 -left-8 sm:-left-10 md:-left-10 lg:-left-12";
//               else if (stat.position === "bottom-left")
//                 pos = "-bottom-5 -left-8 sm:-left-10 md:-left-10 lg:-left-12";
//               else if (stat.position === "bottom-right")
//                 pos =
//                   "-bottom-5 -right-8 sm:-right-10 md:-right-10 lg:-right-12";

//               return (
//                 <div
//                   key={i}
//                   className={`absolute ${pos} bg-fuchsia-50/90 border border-cyan-200 shadow-lg rounded-xl px-3 py-2 md:px-3 md:py-2 xl:px-[21px] xl:py-[12px] 2xl:px-[24px] 2xl:py-[14px] text-center z-30 transition-all duration-300 hover:scale-105`}
//                 >
//                   <p
//                     className="font-semibold text-[15px] sm:text-[16px] md:text-[14px] lg:text-[16px] xl:text-[21px] 2xl:text-[18px] leading-snug"
//                     style={{ color: stat.color }}
//                   >
//                     {stat.value}
//                   </p>
//                   <p className="font-[500] text-[11px] sm:text-[12px] md:text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[15px] text-gray-700 leading-snug">
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Text Side
//             FIXED: added lg: intermediate text sizes — was jumping mobile -> xl directly */}
//         <div className="w-full md:w-[64%] text-justify">
//           <p className="text-gray-700 font-medium text-[15px] md:text-[15px] lg:text-[16px] xl:text-[19px] 2xl:text-[17px] mb-4 leading-relaxed">
//             {aboutText.intro}
//           </p>

//           <div className="my-5 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4 className="text-[17px] md:text-[17px] lg:text-[19px] xl:text-[24px] 2xl:text-[22px] font-semibold text-[#032255] mb-3">
//             {aboutText.freelanceTitle}
//           </h4>
//           <p className="text-gray-700 text-[15px] md:text-[15px] lg:text-[16px] xl:text-[19px] 2xl:text-[17px] font-medium leading-relaxed mb-5">
//             {aboutText.freelanceDescription}
//           </p>

//           <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

//           <h4 className="text-[17px] md:text-[17px] lg:text-[19px] xl:text-[24px] 2xl:text-[22px] font-semibold text-[#032255] mb-3">
//             Lionbridge Pvt Ltd
//           </h4>
//           <p className="text-gray-700 text-[15px] md:text-[15px] lg:text-[16px] xl:text-[19px] 2xl:text-[17px] font-medium leading-relaxed mb-8">
//             {aboutText.summary}
//           </p>

//           <div className="flex gap-4 flex-wrap">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-5 py-2 rounded-lg font-[500] bg-[#2ef6e9] border border-white transition-all duration-300 hover:bg-white hover:text-[#0fc0fc] hover:border-[#0fc0fc] text-[14px]"
//             >
//               Hire Me
//             </button>
//             <a
//               href="/certificates/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2 rounded-lg font-[500] bg-white text-[#ff51ff] border border-[#ff51ff] transition-all duration-300 hover:bg-[#ff6dff] hover:text-white hover:border-white text-[14px]"
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

import React from "react";
import { profileImage, aboutStats, aboutText } from "../data/aboutData";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 55,
    behavior: "smooth",
  });
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-[calc(100dvh-55px)] px-[8%] md:px-[8%] lg:px-[10%] xl:px-[11%] flex items-center justify-center flex-col py-10 md:py-12 xl:py-0"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#8dfff7] via-[#fdf5e6c3] to-[#ffeddd99] opacity-50"></div>
      </div>

      <h2 className="w-full text-center 2xl:text-[34px] xl:text-[32px] lg:text-[29px] md:text-[26px] text-[24px] font-[600] text-gray-800 mb-6 md:mb-8 xl:mb-[3%] 2xl:mb-[4%] leading-none flex-shrink-0">
        About <span className="text-pink-500">Me</span>
      </h2>

      <div className="w-full max-w-[1536px] flex flex-col md:flex-row md:items-center gap-12 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
        {/* Image Side */}
        <div className="w-full md:w-[38%] lg:w-[36%] flex justify-center flex-shrink-0">
          <div className="relative w-[42%] sm:w-[38%] md:w-[85%] lg:w-[88%] xl:w-[86%] 2xl:w-[80%] mx-auto mt-6 md:mt-16 lg:mt-20 xl:mt-20">
            {/* Pink frame */}
            <div className="relative bg-gradient-to-b from-[#fba0e3] to-[#ff51ff] p-[9%] overflow-hidden">
              <div className="w-full h-full bg-white">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Image: on mobile sits normally, on md+ pulls up to show full body */}
                  <img
                    src={profileImage}
                    alt="Akash Yadav"
                    className="w-[94%] object-cover object-top rounded-md
                      h-[180px] sm:h-[220px]
                      md:h-auto md:object-center md:-mt-20
                      lg:-mt-24 xl:-mt-28 2xl:-mt-32"
                    loading="lazy"
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
              else if (stat.position === "bottom-left")
                pos =
                  "-bottom-5 -left-[32%] md:-left-[24%] lg:-left-[26%] xl:-left-[28%]";
              else if (stat.position === "bottom-right")
                pos =
                  "-bottom-5 -right-[32%] md:-right-[24%] lg:-right-[26%] xl:-right-[28%]";

              return (
                <div
                  key={i}
                  className={`absolute ${pos} bg-fuchsia-50/90 border border-cyan-200 shadow-lg rounded-xl text-center z-30 transition-all duration-300 hover:scale-105
                    px-[6px] py-[4px] sm:px-[8px] sm:py-[5px]
                    md:px-[10px] md:py-[6px] lg:px-[13px] lg:py-[8px]
                    xl:px-[16px] xl:py-[10px] 2xl:px-[22px] 2xl:py-[13px]`}
                >
                  <p
                    className="font-semibold leading-snug
                      text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[18px]"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-[500] leading-snug whitespace-nowrap text-gray-700
                    text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px]"
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-[62%] lg:w-[64%] text-justify mt-6 md:mt-0">
          <p
            className="text-gray-700 font-medium leading-relaxed mb-3
            text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
          >
            {aboutText.intro}
          </p>

          <div className="my-3 xl:my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

          <h4
            className="font-semibold text-[#032255] mb-2
            text-[14px] sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[22px]"
          >
            {aboutText.freelanceTitle}
          </h4>
          <p
            className="text-gray-700 font-medium leading-relaxed mb-3
            text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
          >
            {aboutText.freelanceDescription}
          </p>

          <div className="my-3 xl:my-4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>

          <h4
            className="font-semibold text-[#032255] mb-2
            text-[14px] sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[22px] 2xl:text-[22px]"
          >
            Lionbridge Pvt Ltd
          </h4>
          <p
            className="text-gray-700 font-medium leading-relaxed mb-5
            text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[17px]"
          >
            {aboutText.summary}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-lg font-[500] bg-[#2ef6e9] border border-white transition-all duration-300 hover:bg-white hover:text-[#0fc0fc] hover:border-[#0fc0fc] text-[13px] sm:text-[14px]"
            >
              Hire Me
            </button>
            <a
              href="/certificates/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-[500] bg-white text-[#ff51ff] border border-[#ff51ff] transition-all duration-300 hover:bg-[#ff6dff] hover:text-white hover:border-white text-[13px] sm:text-[14px]"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
