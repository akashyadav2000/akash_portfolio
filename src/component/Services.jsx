// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { services, certifications } from "../data/servicesData";
// import { FaX } from "react-icons/fa6";

// export default function Services() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeService, setActiveService] = useState(null);
//   const [visibleItems, setVisibleItems] = useState(4);

//   // Responsive: show fewer cert cards on smaller screens
//   useEffect(() => {
//     const update = () => {
//       if (window.innerWidth < 640) setVisibleItems(1);
//       else if (window.innerWidth < 1024) setVisibleItems(2);
//       else setVisibleItems(4);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const handleNext = () =>
//     setStartIndex((startIndex + 1) % certifications.length);
//   const handlePrev = () =>
//     setStartIndex(
//       (startIndex - 1 + certifications.length) % certifications.length,
//     );

//   const getVisibleCerts = () => {
//     const result = [];
//     for (let i = 0; i < visibleItems; i++) {
//       result.push(certifications[(startIndex + i) % certifications.length]);
//     }
//     return result;
//   };

//   const openModal = (service) => setActiveService(service);
//   const closeModal = () => setActiveService(null);

//   useEffect(() => {
//     document.body.style.overflow = activeService ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [activeService]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <section
//       className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] 2xl:py-8 xl:py-6 py-8 text-center flex items-center justify-center px-[5%] sm:px-[6%] lg:px-[8%] 2xl:px-[11%]"
//       id="services"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e8defddc] to-[#f5f5f5]"></div>
//       </div>

//       <div className="relative z-10 w-full flex items-center justify-center flex-col">
//         <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-[600] text-gray-800 mb-6 xl:mb-[3%] leading-none">
//           My <span className="text-pink-500">Expertise</span>
//         </h2>

//         {/* Services grid: 1 col mobile, 2 col md, 3 col xl */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-14 gap-6 w-full">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               // FIXED: was plain <div> — whileHover did nothing. Now motion.div.
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className={`rounded-2xl p-4 bg-gradient-to-tl ${service.bgGradient} flex flex-col items-center text-center shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-shadow duration-300`}
//               >
//                 <div className="w-10 h-10 rounded-full p-3 flex items-center justify-center mb-3 bg-white shadow-md">
//                   <Icon className={`text-2xl ${service.iconColor}`} />
//                 </div>
//                 <h3 className="2xl:text-[18px] xl:text-[16px] text-[15px] font-[600] text-black mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="2xl:text-[15px] xl:text-[14px] text-[13px] text-gray-700 font-[500] leading-snug mb-3">
//                   {service.desc}
//                 </p>
//                 <button
//                   onClick={() => openModal(service)}
//                   className={`text-[13px] bg-white border px-4 py-[6px] rounded transition font-[500] cursor-pointer ${service.textColor}`}
//                 >
//                   Read More
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Certifications Carousel */}
//         <div className="2xl:mt-13 mt-10 w-full" id="certifications">
//           {/* px-10 keeps arrows outside the cards */}
//           <div className="relative flex items-center px-10">
//             <div
//               className={`grid gap-4 sm:gap-5 2xl:gap-8 transition-all duration-500 w-full ${visibleItems === 1 ? "grid-cols-1" : visibleItems === 2 ? "grid-cols-2" : "grid-cols-4"}`}
//             >
//               {getVisibleCerts().map((cert, index) => {
//                 const Icon = cert.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-all duration-300 hover:scale-[1.02]`}
//                   >
//                     <div className="mb-3 bg-white rounded-full w-10 h-10 p-3 flex items-center justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
//                       <Icon className={`text-2xl ${cert.iconColor}`} />
//                     </div>
//                     <h3 className="2xl:text-[17px] xl:text-[15px] lg:text-[14px] text-[14px] font-[600] text-black leading-tight">
//                       {cert.title}
//                     </h3>
//                     <h3 className="2xl:text-[15px] xl:text-[14px] text-[13px] font-semibold text-gray-800 mb-2">
//                       {cert.from}
//                     </h3>
//                     <p className="2xl:text-[14px] xl:text-[13px] text-[12px] text-gray-700 font-[500] mb-3 leading-snug">
//                       {cert.desc}
//                     </p>
//                     <a
//                       href={cert.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`text-[12px] bg-white border px-3 py-[5px] rounded transition font-[500] ${cert.textColor} border-current`}
//                     >
//                       See Certificate
//                     </a>
//                   </div>
//                 );
//               })}
//             </div>

//             <button
//               onClick={handlePrev}
//               aria-label="Previous certification"
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-[8px] rounded-full z-10 shadow-md hover:shadow-lg transition"
//             >
//               <FaChevronLeft className="text-[18px] text-[#ff4f00]" />
//             </button>
//             <button
//               onClick={handleNext}
//               aria-label="Next certification"
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-[8px] rounded-full z-10 shadow-md hover:shadow-lg transition"
//             >
//               <FaChevronRight className="text-[18px] text-[#ff4f00]" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {activeService && (
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-xl px-6 py-5 w-full max-w-[320px] relative text-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2
//               className={`text-[20px] font-semibold mb-4 ${activeService.textColor}`}
//             >
//               {activeService.title}
//             </h2>
//             <p className="text-black text-[15px] font-[500] leading-relaxed text-justify">
//               {activeService.details}
//             </p>
//             <button
//               onClick={closeModal}
//               aria-label="Close modal"
//               className="absolute top-3 right-3 text-red-500 hover:text-black text-xl font-bold"
//             >
//               <FaX className="text-[16px]" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { services, certifications } from "../data/servicesData";
import { FaX } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

function TiltCard({ children, className, onClick }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
  };
  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };
  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNext = () =>
    setStartIndex((startIndex + 1) % certifications.length);
  const handlePrev = () =>
    setStartIndex(
      (startIndex - 1 + certifications.length) % certifications.length,
    );
  const getVisibleCerts = () =>
    Array.from(
      { length: visibleItems },
      (_, i) => certifications[(startIndex + i) % certifications.length],
    );

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  const cardBase = isDark
    ? "glass-card bg-white/5 border border-white/10 hover:border-cyan-400/40"
    : "bg-white/70 glass-card border border-gray-200/80 hover:border-cyan-300";

  return (
    <section
      className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] 2xl:py-8 xl:py-6 py-8 text-center flex items-center justify-center px-[5%] sm:px-[6%] lg:px-[8%] 2xl:px-[11%]"
      id="services"
    >
      <div
        className="relative z-10 w-full flex items-center justify-center flex-col"
        ref={ref}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-[600] mb-6 xl:mb-[3%] leading-none
            ${isDark ? "text-white" : "text-gray-800"}`}
        >
          My{" "}
          <span
            className={
              isDark ? "text-pink-400 neon-text-pink" : "text-pink-500"
            }
          >
            Expertise
          </span>
        </motion.h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-14 gap-6 w-full"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <TiltCard
                  className={`rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 ${cardBase}
                  ${isDark ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "shadow-md"}`}
                  onClick={() => setActiveService(service)}
                >
                  <div
                    className={`w-11 h-11 rounded-full p-3 flex items-center justify-center mb-3 shadow-md
                    ${isDark ? "bg-white/10" : "bg-white"}`}
                  >
                    <Icon className={`text-2xl ${service.iconColor}`} />
                  </div>
                  <h3
                    className={`xl:text-[16px] text-[15px] font-[600] mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`xl:text-[14px] text-[13px] font-[500] leading-snug mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {service.desc}
                  </p>
                  <button
                    className={`text-[13px] border px-4 py-[6px] rounded transition font-[500]
                    ${isDark ? `border-current bg-transparent ${service.textColor}` : `bg-white border-current ${service.textColor}`}`}
                  >
                    Read More
                  </button>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="2xl:mt-13 mt-10 w-full">
          <div className="relative flex items-center px-10">
            <div
              className={`grid gap-4 sm:gap-5 2xl:gap-8 w-full ${visibleItems === 1 ? "grid-cols-1" : visibleItems === 2 ? "grid-cols-2" : "grid-cols-4"}`}
            >
              {getVisibleCerts().map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`rounded-2xl p-3 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03]
                      ${cardBase} ${isDark ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "shadow-md"}`}
                  >
                    <div
                      className={`mb-3 rounded-full w-10 h-10 p-3 flex items-center justify-center shadow-md ${isDark ? "bg-white/10" : "bg-white"}`}
                    >
                      <Icon className={`text-2xl ${cert.iconColor}`} />
                    </div>
                    <h3
                      className={`text-[14px] font-[600] leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {cert.title}
                    </h3>
                    <h3
                      className={`text-[13px] font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {cert.from}
                    </h3>
                    <p
                      className={`text-[12px] font-[500] mb-3 leading-snug ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {cert.desc}
                    </p>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[12px] border px-3 py-[5px] rounded transition font-[500] border-current
                        ${isDark ? `bg-transparent ${cert.textColor}` : cert.textColor}`}
                    >
                      See Certificate
                    </a>
                  </motion.div>
                );
              })}
            </div>
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className={`absolute left-0 top-1/2 -translate-y-1/2 p-[8px] rounded-full z-10 transition shadow-md
                ${isDark ? "bg-white/10 hover:bg-white/20 text-cyan-400" : "bg-white hover:bg-gray-50"}`}
            >
              <FaChevronLeft
                className={`text-[18px] ${isDark ? "text-cyan-400" : "text-[#ff4f00]"}`}
              />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className={`absolute right-0 top-1/2 -translate-y-1/2 p-[8px] rounded-full z-10 transition shadow-md
                ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-white hover:bg-gray-50"}`}
            >
              <FaChevronRight
                className={`text-[18px] ${isDark ? "text-cyan-400" : "text-[#ff4f00]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center px-4"
          onClick={() => setActiveService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl px-6 py-5 w-full max-w-[320px] relative text-center border
              ${isDark ? "bg-[#0a0a1a]/90 border-white/10 shadow-[0_0_40px_rgba(0,240,252,0.15)]" : "bg-white border-gray-100 shadow-xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={`text-[20px] font-semibold mb-4 ${activeService.textColor}`}
            >
              {activeService.title}
            </h2>
            <p
              className={`text-[15px] font-[500] leading-relaxed text-justify ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {activeService.details}
            </p>
            <button
              onClick={() => setActiveService(null)}
              aria-label="Close"
              className="absolute top-3 right-3 text-red-400 hover:text-red-300 text-xl"
            >
              <FaX className="text-[16px]" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
