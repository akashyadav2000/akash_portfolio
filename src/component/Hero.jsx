// import { heroImages, heroContent } from "../data/heroData";

// const scrollToSection = (id) => {
//   const el = document.getElementById(id);
//   if (!el) return;
//   window.scrollTo({
//     top: el.getBoundingClientRect().top + window.scrollY - 55,
//     behavior: "smooth",
//   });
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="h-[calc(100dvh-55px)] flex justify-center items-center relative overflow-hidden"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#c8ffc4] via-[#aefcff] to-[#ffffff] opacity-50 pointer-events-none"></div>
//       </div>

//       <div className="absolute inset-0 z-50 pointer-events-none hidden xl:block">
//         {heroImages.map((item, index) => (
//           <img
//             key={index}
//             src={item.src}
//             alt=""
//             className={item.className}
//             loading="lazy"
//           />
//         ))}
//       </div>

//       <div className="flex flex-col-reverse lg:flex-row 2xl:w-[75%] xl:w-[80%] lg:w-[88%] w-[92%] lg:items-stretch items-center lg:justify-between justify-center relative z-10 lg:gap-0 lg:h-full">
//         {/* Left — text */}
//         <div className="flex flex-col justify-center">
//           <div className="flex items-center">
//             <hr className="border-t-4 border-black 2xl:w-9 xl:w-8 w-7" />
//             <span className="text-black 2xl:text-[35px] xl:text-[33px] lg:text-[28px] md:text-[26px] text-[24px] font-[600] ml-[13px] leading-[1.7]">
//               {heroContent.heading}
//             </span>
//           </div>

//           <h1 className="2xl:text-[63px] xl:text-[55px] lg:text-[44px] md:text-[38px] text-[34px] font-[600] leading-[1.4]">
//             {heroContent.im}{" "}
//             <span className="bg-gradient-to-r from-[#0fc0fc] to-[#00ffff] bg-clip-text text-transparent">
//               {heroContent.firstname}{" "}
//             </span>
//             <span>{heroContent.lastname}</span>
//           </h1>

//           <h2 className="2xl:text-[50px] xl:text-[44px] lg:text-[34px] md:text-[30px] text-[26px] font-[600] bg-gradient-to-r from-[#ff51ff] to-[#f899df] bg-clip-text text-transparent">
//             {heroContent.title}
//           </h2>

//           <p className="text-gray-800 2xl:text-[19px] xl:text-[17px] lg:text-[15px] md:text-[15px] text-[14px] font-[500] max-w-lg leading-[1.6] my-4">
//             {heroContent.description}
//           </p>

//           <div className="flex gap-4 flex-wrap mt-2">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-6 py-2 rounded-lg font-[500] bg-white text-[#0fc0fc] border border-[#0fc0fc] transition-all duration-300 hover:bg-[#2ef6e9] hover:text-gray-800 hover:border-white text-[14px] lg:text-[15px]"
//             >
//               Hire Me
//             </button>
//             <a
//               href="/certificates/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 rounded-lg font-[500] text-white border border-white transition-all duration-300 bg-[#ff6dff] hover:bg-white hover:text-[#ff51ff] hover:border-[#ff51ff] text-[14px] lg:text-[15px]"
//             >
//               My Resume
//             </a>
//           </div>
//         </div>

//         {/* Right — profile image */}
//         <div className="lg:w-[42%] w-[55%] sm:w-[45%] flex justify-center items-end">
//           <img
//             src={heroContent.profileImage}
//             alt="Akash Yadav"
//             className="2xl:h-[85%] xl:h-[80%] lg:h-[75%] h-[260px] sm:h-[300px] rounded-full lg:rounded-none object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { heroImages, heroContent } from "../data/heroData";
// import { useTheme } from "../context/ThemeContext";

// const scrollToSection = (id) => {
//   const el = document.getElementById(id);
//   if (!el) return;
//   window.scrollTo({
//     top: el.getBoundingClientRect().top + window.scrollY - 55,
//     behavior: "smooth",
//   });
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -60 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };
// const fadeRight = {
//   hidden: { opacity: 0, x: 60 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
//   },
// };
// const stagger = { show: { transition: { staggerChildren: 0.12 } } };
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function Hero() {
//   const { isDark } = useTheme();
//   const imgRef = useRef(null);

//   // 3D float animation for profile image
//   useEffect(() => {
//     const el = imgRef.current;
//     if (!el) return;
//     let t = 0;
//     const tick = () => {
//       t += 0.015;
//       el.style.transform = `translateY(${Math.sin(t) * 12}px)`;
//       requestAnimationFrame(tick);
//     };
//     const id = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="h-[calc(100dvh-55px)] flex justify-center items-center relative overflow-hidden"
//     >
//       {/* Floating icons — xl only */}
//       <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
//         {heroImages.map((item, i) => (
//           <img
//             key={i}
//             src={item.src}
//             alt=""
//             className={item.className}
//             loading="lazy"
//             style={{
//               filter: isDark ? "brightness(1.3) saturate(1.5)" : "none",
//             }}
//           />
//         ))}
//       </div>

//       <div className="flex flex-col-reverse lg:flex-row 2xl:w-[75%] xl:w-[80%] lg:w-[88%] w-[92%] lg:items-stretch items-center lg:justify-between justify-center relative z-10 lg:gap-0 lg:h-full">
//         {/* Left text — slides in from left */}
//         <motion.div
//           className="flex flex-col justify-center"
//           variants={stagger}
//           initial="hidden"
//           animate="show"
//         >
//           <motion.div variants={fadeUp} className="flex items-center">
//             <hr
//               className={`border-t-4 2xl:w-9 xl:w-8 w-7 ${isDark ? "border-cyan-400" : "border-black"}`}
//             />
//             <span
//               className={`2xl:text-[35px] xl:text-[33px] lg:text-[28px] text-[22px] font-[600] ml-[13px] leading-[1.7]
//               ${isDark ? "text-gray-200" : "text-black"}`}
//             >
//               {heroContent.heading}
//             </span>
//           </motion.div>

//           <motion.h1
//             variants={fadeUp}
//             className="2xl:text-[63px] xl:text-[55px] lg:text-[44px] text-[30px] font-[600] leading-[1.3]"
//           >
//             <span className={isDark ? "text-gray-100" : "text-black"}>
//               {heroContent.im}{" "}
//             </span>
//             <span
//               className={`bg-gradient-to-r from-[#0fc0fc] to-[#00ffff] bg-clip-text text-transparent ${isDark ? "neon-text-cyan" : ""}`}
//             >
//               {heroContent.firstname}{" "}
//             </span>
//             <span className={isDark ? "text-gray-100" : "text-black"}>
//               {heroContent.lastname}
//             </span>
//           </motion.h1>

//           <motion.h2
//             variants={fadeUp}
//             className={`2xl:text-[50px] xl:text-[44px] lg:text-[34px] text-[22px] font-[600] bg-gradient-to-r from-[#ff51ff] to-[#f899df] bg-clip-text text-transparent leading-[1.3]
//               ${isDark ? "neon-text-pink" : ""}`}
//           >
//             {heroContent.title}
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className={`2xl:text-[19px] xl:text-[17px] lg:text-[15px] text-[13px] font-[500] max-w-lg leading-[1.6] my-3
//               ${isDark ? "text-gray-300" : "text-gray-700"}`}
//           >
//             {heroContent.description}
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className={`px-6 py-2 rounded-lg font-[600] text-[13px] lg:text-[15px] transition-all duration-300 border
//                 ${
//                   isDark
//                     ? "bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-[#05050f] neon-cyan"
//                     : "bg-white text-cyan-500 border-cyan-400 hover:bg-cyan-400 hover:text-white"
//                 }`}
//             >
//               Hire Me
//             </button>
//             <a
//               href="/certificates/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`px-6 py-2 rounded-lg font-[600] text-[13px] lg:text-[15px] transition-all duration-300 border
//                 ${
//                   isDark
//                     ? "bg-transparent text-[#ff51ff] border-[#ff51ff] hover:bg-[#ff51ff] hover:text-white neon-pink"
//                     : "bg-[#ff6dff] text-white border-transparent hover:bg-white hover:text-[#ff51ff] hover:border-[#ff51ff]"
//                 }`}
//             >
//               My Resume
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Right — floating profile image */}
//         <motion.div
//           variants={fadeRight}
//           initial="hidden"
//           animate="show"
//           className="lg:w-[42%] w-[50%] sm:w-[42%] flex justify-center items-end lg:h-full"
//         >
//           <img
//             ref={imgRef}
//             src={heroContent.profileImage}
//             alt="Akash Yadav"
//             className="object-contain object-bottom h-[28vh] sm:h-[32vh] lg:h-full lg:w-full"
//             style={{
//               filter: isDark
//                 ? "drop-shadow(0 0 30px rgba(0,240,252,0.3))"
//                 : "none",
//             }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { heroImages, heroContent } from "../data/heroData";
import { useTheme } from "../context/ThemeContext";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 55,
    behavior: "smooth",
  });
};

export default function Hero() {
  const { isDark } = useTheme();
  const imgRef = useRef(null);

  // Floating animation on profile image
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    let t = 0,
      id;
    const tick = () => {
      t += 0.014;
      el.style.transform = `translateY(${Math.sin(t) * 10}px)`;
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="h-[calc(100dvh-55px)] flex justify-center items-center relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        {isDark ? (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg,#020d12 0%,#041a1f 50%,#050d10 100%)",
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#c8ffc4] via-[#aefcff] to-[#ffffff] opacity-60" />
        )}
      </div>

      {/* Floating icons xl+ */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
        {heroImages.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt=""
            className={item.className}
            loading="lazy"
            style={{
              filter: isDark
                ? "brightness(1.2) saturate(1.4) hue-rotate(200deg) opacity(0.7)"
                : "none",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col-reverse lg:flex-row 2xl:w-[75%] xl:w-[80%] lg:w-[88%] w-[92%] lg:items-stretch items-center lg:justify-between justify-center relative z-10 lg:h-full">
        {/* Text */}
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="flex items-center mb-1">
            <div
              className={`h-1 w-8 rounded-full mr-4 ${isDark ? "bg-cyan-400" : "bg-gray-800"}`}
            />
            <span
              className={`text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] font-[700] tracking-wider uppercase text-sm
              ${isDark ? "text-cyan-300" : "text-gray-600"}`}
            >
              {heroContent.heading}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="2xl:text-[62px] xl:text-[54px] lg:text-[43px] text-[30px] font-[800] leading-[1.15] tracking-tight mt-1"
          >
            <span className={isDark ? "text-white" : "text-gray-900"}>
              {heroContent.im}{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              {heroContent.firstname}{" "}
            </span>
            <span className={isDark ? "text-white" : "text-gray-900"}>
              {heroContent.lastname}
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="2xl:text-[48px] xl:text-[42px] lg:text-[32px] text-[21px] font-[700] tracking-tight leading-[1.2] mt-2
              bg-gradient-to-r from-fuchsia-500 to-pink-400 bg-clip-text text-transparent"
          >
            {heroContent.title}
          </motion.h2>

          <motion.p
            variants={item}
            className={`2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[13px] font-[400] max-w-md leading-[1.75] mt-4 mb-6
              ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {heroContent.description}
          </motion.p>

          <motion.div variants={item} className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-7 py-[10px] rounded-xl font-[700] text-[13px] lg:text-[14px] tracking-wide transition-all duration-300
                ${
                  isDark
                    ? "bg-cyan-500 hover:bg-cyan-400 text-[#020d12] shadow-[0_4px_20px_rgba(6,182,212,0.4)]"
                    : "bg-gray-900 hover:bg-gray-700 text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                }`}
            >
              Hire Me
            </button>
            <a
              href="/certificates/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-7 py-[10px] rounded-xl font-[700] text-[13px] lg:text-[14px] tracking-wide transition-all duration-300 border-2
                ${
                  isDark
                    ? "border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white"
                    : "border-fuchsia-500 text-fuchsia-600 hover:bg-fuchsia-500 hover:text-white"
                }`}
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="lg:w-[42%] w-[52%] sm:w-[44%] flex justify-center items-end lg:h-full"
        >
          <img
            ref={imgRef}
            src={heroContent.profileImage}
            alt="Akash Yadav"
            className="object-contain object-bottom h-[28vh] sm:h-[32vh] lg:h-full lg:w-full"
            style={{
              filter: isDark
                ? "drop-shadow(0 0 28px rgba(6,182,212,0.25))"
                : "none",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
