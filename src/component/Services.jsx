// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { services, certifications } from "../data/servicesData";
// import { FaX } from "react-icons/fa6";

// export default function Services() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeService, setActiveService] = useState(null);
//   const visibleItems = 4;

//   const handleNext = () => {
//     setStartIndex((startIndex + 1) % certifications.length);
//   };

//   const handlePrev = () => {
//     setStartIndex(
//       (startIndex - 1 + certifications.length) % certifications.length,
//     );
//   };

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
//   }, [activeService]);

//   return (
//     <section
//       className="relative min-h-fit xl:min-h-[calc(100dvh-55px)]  2xl:py-8 xl:py-6 py-4 text-center flex items-center justify-center px-[5%] 2xl:px-[11%]"
//       id="services"
//     >
//       {/* Background Blur */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e8defddc] to-[#f5f5f5]"></div>
//       </div>
//       {/* bg-gradient-to-br from-[#e6f0ff] to-[#ffe6f2] #e8defd*/}

//       {/* Main Content */}
//       <div className="relative z-10 w-full flex items-center justify-center flex-col">
//         <h2 className="2xl:text-[34px] xl:text-[32px] text-[30px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%]  xl:mb-[4.5%] my-[4%] leading-0">
//           My <span className="text-pink-500">Expertise</span>
//         </h2>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 2xl:gap-14 gap-12">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className={`rounded-2xl 2xl:p-3 p-3 bg-gradient-to-tl ${service.bgGradient}  flex flex-col items-center text-center  shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border-1 border-gray-300 transition-shadow duration-300`}
//               >
//                 <div className="2xl:w-11 2xl:h-11 w-10 h-10 rounded-full p-3 flex items-center justify-center mb-3 bg-white shadow-md">
//                   <Icon className={`text-2xl ${service.iconColor}`} />
//                 </div>
//                 <h3 className="2xl:text-[18px] xl:text-[18px] text-[17px] font-[600] text-black mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="2xl:text-[15px] xl:text-[15px] text-[14.5px] text-gray-700 font-[500] 2xl:leading-normal leading-snug 2xl:mb-4 xl:mb-3">
//                   {service.desc}
//                 </p>
//                 <button
//                   onClick={() => openModal(service)}
//                   className={`2xl:text-[13px] xl:text-[13.5px] text-[13px] bg-white border px-4 py-[6px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] cursor-pointer ${service.textColor}`}
//                 >
//                   Read More
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Certifications Carousel */}
//         <div className="2xl:mt-13 mt-12" id="certifications">
//           <div className="relative flex items-center justify-center">
//             <div className="grid md:grid-cols-4 2xl:gap-10 gap-8 transition-all duration-500">
//               {getVisibleCerts().map((cert, index) => {
//                 const Icon = cert.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl 2xl:p-3 p-4 flex flex-col items-center justify-center text-center hover:scale-[1.02] shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border-1 border-gray-300 transition-shadow duration-300`}
//                   >
//                     <div className="mb-4 bg-white rounded-full 2xl:w-11 2xl:h-11 w-10 h-10 p-3 flex items-center justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
//                       <Icon className={`text-2xl ${cert.iconColor}`} />
//                     </div>
//                     <h3 className="2xl:text-[18px] xl:text-[21px] text-[20px] font-[600] text-black">
//                       {cert.title}
//                     </h3>
//                     <h3 className="2xl:text-[16px] xl:text-[19.5px] text-[19px] font-semibold text-gray-800 mb-2">
//                       {cert.from}
//                     </h3>
//                     <p className="2xl:text-[15px] xl:text-[16.5px] text-[16px] text-gray-700 font-[500] 2xl:mb-4 xl:mb-3 2xl:leading-normal leading-snug">
//                       {cert.desc}
//                     </p>
//                     <a
//                       href={cert.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`2xl:text-[13px] xl:text-[15.5px] text-[15px] bg-white border px-4 py-[6px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] ${cert.textColor} border-current`}
//                     >
//                       See Certificate
//                     </a>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Arrows */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-2 top-[47%] -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[8px] p-[9px] rounded-full z-10 transition"
//             >
//               <FaChevronLeft className="2xl:text-[19px] xl:text-[20.5px] text-[20px] text-[#ff4f00]" />
//             </button>

//             <button
//               onClick={handleNext}
//               className="absolute right-2 top-[47%] -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[10px] p-[9px] rounded-full z-10 transition"
//             >
//               <FaChevronRight className="2xl:text-[19px] xl:text-[20.5px] text-[20px] text-[#ff4f00]" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {activeService && (
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-xl  2xl:px-7 2xl:py-6 xl:px-6 xl:py-5 px-4 py-4 2xl:w-[320px] xl:w-[300px]  w-[280px]  relative text-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2
//               className={`2xl:text-[23px] xl:text-[22px] text-[21px] font-semibold mb-4 ${activeService.textColor}`}
//             >
//               {activeService.title}
//             </h2>
//             <p className="text-black 2xl:text-[17px] xl:text-[16.5px]  text-[16px] font-[500] leading-relaxed text-justify">
//               {activeService.details}
//             </p>
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-red-500 hover:text-black text-xl font-bold"
//             >
//               <FaX className="text-[17px]" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { services, certifications } from "../data/servicesData";
// import { FaX } from "react-icons/fa6";

// export default function Services() {
//   const [startIndex, setStartIndex] = useState(0);
//   const [activeService, setActiveService] = useState(null);
//   const visibleItems = 4;

//   const handleNext = () => {
//     setStartIndex((startIndex + 1) % certifications.length);
//   };

//   const handlePrev = () => {
//     setStartIndex(
//       (startIndex - 1 + certifications.length) % certifications.length,
//     );
//   };

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

//   // Close modal on Escape key
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <section
//       className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] 2xl:py-8 xl:py-6 py-10 text-center flex items-center justify-center px-[5%] 2xl:px-[11%]"
//       id="services"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e8defddc] to-[#f5f5f5]"></div>
//       </div>

//       <div className="relative z-10 w-full flex items-center justify-center flex-col">
//         <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[29px] text-[27px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%] xl:mb-[4.5%] my-[4%] leading-none">
//           My <span className="text-pink-500">Expertise</span>
//         </h2>

//         {/* Services Grid
//             FIXED: was md:grid-cols-3 — at 768px-1280px three cards were very cramped.
//             Now 2 columns at md, 3 at xl. */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:gap-14 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               // FIXED: was a plain <div> — whileHover had no effect. Changed to motion.div.
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className={`rounded-2xl 2xl:p-3 p-3 bg-gradient-to-tl ${service.bgGradient} flex flex-col items-center text-center shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-shadow duration-300`}
//               >
//                 <div className="2xl:w-11 2xl:h-11 w-10 h-10 rounded-full p-3 flex items-center justify-center mb-3 bg-white shadow-md">
//                   <Icon className={`text-2xl ${service.iconColor}`} />
//                 </div>
//                 <h3 className="2xl:text-[18px] xl:text-[17px] text-[16px] font-[600] text-black mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="2xl:text-[15px] xl:text-[14.5px] text-[14px] text-gray-700 font-[500] 2xl:leading-normal leading-snug 2xl:mb-4 xl:mb-3">
//                   {service.desc}
//                 </p>
//                 <button
//                   onClick={() => openModal(service)}
//                   className={`2xl:text-[13px] text-[13px] bg-white border px-4 py-[6px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] cursor-pointer ${service.textColor}`}
//                 >
//                   Read More
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Certifications Carousel */}
//         <div className="2xl:mt-13 mt-12 w-full" id="certifications">
//           {/* FIXED: arrows were overlapping first/last cards on narrow screens.
//               Now using px-10 on the wrapper so arrows sit outside the card area. */}
//           <div className="relative flex items-center justify-center px-10">
//             <div className="grid md:grid-cols-4 grid-cols-2 2xl:gap-8 gap-5 transition-all duration-500 w-full">
//               {getVisibleCerts().map((cert, index) => {
//                 const Icon = cert.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl 2xl:p-3 p-3 flex flex-col items-center justify-center text-center hover:scale-[1.02] shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-shadow duration-300`}
//                   >
//                     <div className="mb-3 bg-white rounded-full 2xl:w-11 2xl:h-11 w-10 h-10 p-3 flex items-center justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
//                       <Icon className={`text-2xl ${cert.iconColor}`} />
//                     </div>
//                     {/* FIXED: xl sizes were larger than 2xl — reversed the scale direction */}
//                     <h3 className="2xl:text-[18px] xl:text-[17px] text-[15px] font-[600] text-black leading-tight">
//                       {cert.title}
//                     </h3>
//                     <h3 className="2xl:text-[16px] xl:text-[15px] text-[13px] font-semibold text-gray-800 mb-2">
//                       {cert.from}
//                     </h3>
//                     <p className="2xl:text-[15px] xl:text-[14px] text-[13px] text-gray-700 font-[500] 2xl:mb-4 xl:mb-3 leading-snug">
//                       {cert.desc}
//                     </p>
//                     <a
//                       href={cert.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`2xl:text-[13px] text-[12px] bg-white border px-3 py-[5px] 2xl:mb-[4px] mb-[2px] rounded transition font-[500] ${cert.textColor} border-current`}
//                     >
//                       See Certificate
//                     </a>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* FIXED: added aria-label to carousel arrow buttons */}
//             <button
//               onClick={handlePrev}
//               aria-label="Previous certification"
//               className="absolute left-0 top-1/2 -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[8px] p-[9px] rounded-full z-10 transition shadow-md"
//             >
//               <FaChevronLeft className="2xl:text-[19px] text-[18px] text-[#ff4f00]" />
//             </button>

//             <button
//               onClick={handleNext}
//               aria-label="Next certification"
//               className="absolute right-0 top-1/2 -translate-y-1/2 border-[#ffb347] bg-white 2xl:p-[8px] p-[9px] rounded-full z-10 transition shadow-md"
//             >
//               <FaChevronRight className="2xl:text-[19px] text-[18px] text-[#ff4f00]" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {activeService && (
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
//           onClick={closeModal}
//           role="dialog"
//           aria-modal="true"
//           aria-label={activeService.title}
//         >
//           <div
//             className="bg-white rounded-xl 2xl:px-7 2xl:py-6 xl:px-6 xl:py-5 px-5 py-4 2xl:w-[320px] xl:w-[300px] w-[280px] relative text-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2
//               className={`2xl:text-[23px] xl:text-[22px] text-[20px] font-semibold mb-4 ${activeService.textColor}`}
//             >
//               {activeService.title}
//             </h2>
//             <p className="text-black 2xl:text-[17px] xl:text-[16px] text-[15px] font-[500] leading-relaxed text-justify">
//               {activeService.details}
//             </p>
//             <button
//               onClick={closeModal}
//               aria-label="Close modal"
//               className="absolute top-3 right-3 text-red-500 hover:text-black text-xl font-bold"
//             >
//               <FaX className="text-[17px]" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { services, certifications } from "../data/servicesData";
import { FaX } from "react-icons/fa6";

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);

  // Responsive: show fewer cert cards on smaller screens
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

  const getVisibleCerts = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      result.push(certifications[(startIndex + i) % certifications.length]);
    }
    return result;
  };

  const openModal = (service) => setActiveService(service);
  const closeModal = () => setActiveService(null);

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <section
      className="relative min-h-fit xl:min-h-[calc(100dvh-55px)] 2xl:py-8 xl:py-6 py-10 text-center flex items-center justify-center px-[5%] sm:px-[6%] lg:px-[8%] 2xl:px-[11%]"
      id="services"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e8defddc] to-[#f5f5f5]"></div>
      </div>

      <div className="relative z-10 w-full flex items-center justify-center flex-col">
        <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-[600] text-gray-800 2xl:mt-[1%] xl:mt-[2%] 2xl:mb-[5%] xl:mb-[4.5%] my-[4%] leading-none">
          My <span className="text-pink-500">Expertise</span>
        </h2>

        {/* Services grid: 1 col mobile, 2 col md, 3 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-14 gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              // FIXED: was plain <div> — whileHover did nothing. Now motion.div.
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-2xl p-4 bg-gradient-to-tl ${service.bgGradient} flex flex-col items-center text-center shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-shadow duration-300`}
              >
                <div className="w-10 h-10 rounded-full p-3 flex items-center justify-center mb-3 bg-white shadow-md">
                  <Icon className={`text-2xl ${service.iconColor}`} />
                </div>
                <h3 className="2xl:text-[18px] xl:text-[16px] text-[15px] font-[600] text-black mb-2">
                  {service.title}
                </h3>
                <p className="2xl:text-[15px] xl:text-[14px] text-[13px] text-gray-700 font-[500] leading-snug mb-3">
                  {service.desc}
                </p>
                <button
                  onClick={() => openModal(service)}
                  className={`text-[13px] bg-white border px-4 py-[6px] rounded transition font-[500] cursor-pointer ${service.textColor}`}
                >
                  Read More
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Carousel */}
        <div className="2xl:mt-13 mt-10 w-full" id="certifications">
          {/* px-10 keeps arrows outside the cards */}
          <div className="relative flex items-center px-10">
            <div
              className={`grid gap-4 sm:gap-5 2xl:gap-8 transition-all duration-500 w-full ${visibleItems === 1 ? "grid-cols-1" : visibleItems === 2 ? "grid-cols-2" : "grid-cols-4"}`}
            >
              {getVisibleCerts().map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 border border-gray-300 transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="mb-3 bg-white rounded-full w-10 h-10 p-3 flex items-center justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.15)]">
                      <Icon className={`text-2xl ${cert.iconColor}`} />
                    </div>
                    <h3 className="2xl:text-[17px] xl:text-[15px] lg:text-[14px] text-[14px] font-[600] text-black leading-tight">
                      {cert.title}
                    </h3>
                    <h3 className="2xl:text-[15px] xl:text-[14px] text-[13px] font-semibold text-gray-800 mb-2">
                      {cert.from}
                    </h3>
                    <p className="2xl:text-[14px] xl:text-[13px] text-[12px] text-gray-700 font-[500] mb-3 leading-snug">
                      {cert.desc}
                    </p>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[12px] bg-white border px-3 py-[5px] rounded transition font-[500] ${cert.textColor} border-current`}
                    >
                      See Certificate
                    </a>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handlePrev}
              aria-label="Previous certification"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-[8px] rounded-full z-10 shadow-md hover:shadow-lg transition"
            >
              <FaChevronLeft className="text-[18px] text-[#ff4f00]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next certification"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-[8px] rounded-full z-10 shadow-md hover:shadow-lg transition"
            >
              <FaChevronRight className="text-[18px] text-[#ff4f00]" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl px-6 py-5 w-full max-w-[320px] relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={`text-[20px] font-semibold mb-4 ${activeService.textColor}`}
            >
              {activeService.title}
            </h2>
            <p className="text-black text-[15px] font-[500] leading-relaxed text-justify">
              {activeService.details}
            </p>
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-3 right-3 text-red-500 hover:text-black text-xl font-bold"
            >
              <FaX className="text-[16px]" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
