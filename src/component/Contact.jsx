// import { useState, useRef } from "react";
// import {
//   contactInfoData,
//   contactIntro,
//   contactSectionTitle,
//   initialFormState,
//   formPlaceholders,
//   submitBtnText,
// } from "../data/contactData";
// import { MdEmail, MdLocalPhone } from "react-icons/md";
// import emailjs from "emailjs-com";
// import contact from "/images/contact/contact.webp";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { BiMessageDetail } from "react-icons/bi";
// import { FaUser } from "react-icons/fa";

// function Contact() {
//   const [values, setValues] = useState(initialFormState);
//   const { name, email, phone, message, error, submit } = values;
//   const formRef = useRef();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
//     if (name === "name" && value.length > 35) return;
//     if (name === "email" && value.length > 50) return;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !phone || !email || !message) {
//       setValues({ ...values, error: "Please fill all required fields." });
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setValues({ ...values, error: "Please enter a valid email address." });
//       return;
//     }
//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         () => {
//           setValues({
//             ...initialFormState,
//             submit: "Your request was successfully sent.",
//           });
//           setTimeout(() => setValues(initialFormState), 4000);
//         },
//         () => {
//           setValues({ ...values, error: "Failed to send message. Try again." });
//         },
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-8 xl:py-6"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9] via-[#fff5ef] to-[#ffffff] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-center text-gray-800 mb-6 xl:mb-[3%]">
//           {contactSectionTitle}
//         </h2>

//         {/* Form Card */}
//         <div className="flex md:flex-row flex-col-reverse gap-6 md:gap-8 px-4 sm:px-6 py-5 xl:px-[30px] xl:py-[18px] rounded-md overflow-hidden bg-[#e6ffe6a7] border border-[#00c41d]">
//           {/* Left: Form */}
//           <div className="w-full md:w-3/5 lg:w-1/2">
//             <div className="flex items-center gap-4 mb-5">
//               <div className="bg-primary rounded-md p-[7px] flex-shrink-0">
//                 <MdLocalPhone className="text-[24px] sm:text-[32px] text-[#222222] bg-[#ffd1ff] p-2 rounded-[5px]" />
//               </div>
//               <p className="text-[#222222] font-[500] text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] hidden sm:block">
//                 {contactIntro.desktop}
//               </p>
//               <p className="text-[#0fc0fc] text-[13px] font-[500] block sm:hidden">
//                 {contactIntro.mobile}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} ref={formRef} noValidate>
//               <div className="relative mb-3">
//                 <FaUser
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[15px]"
//                   aria-hidden="true"
//                 />
//                 <input
//                   className="w-full pl-10 outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 text-[14px] sm:text-[15px]"
//                   type="text"
//                   name="name"
//                   placeholder={formPlaceholders.name}
//                   value={name}
//                   onChange={handleInputChange}
//                   required
//                   autoComplete="name"
//                 />
//               </div>

//               <div className="relative mb-3">
//                 <MdEmail
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[16px]"
//                   aria-hidden="true"
//                 />
//                 <input
//                   className="w-full pl-10 rounded-md outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 text-[14px] sm:text-[15px]"
//                   type="email"
//                   name="email"
//                   placeholder={formPlaceholders.email}
//                   value={email}
//                   onChange={handleInputChange}
//                   required
//                   autoComplete="email"
//                 />
//               </div>

//               <PhoneInput
//                 country={"in"}
//                 enableSearch
//                 value={phone}
//                 placeholder={formPlaceholders.phone}
//                 onChange={(value) => setValues({ ...values, phone: value })}
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                   autoComplete: "tel",
//                 }}
//                 inputStyle={{
//                   width: "100%",
//                   height: "38px",
//                   paddingLeft: "52px",
//                   borderRadius: "6px",
//                   color: "#212121",
//                   fontSize: "15px",
//                   fontWeight: 500,
//                   border: "1px solid #00c41d",
//                 }}
//                 containerStyle={{ marginBottom: "12px" }}
//               />

//               <div className="relative mb-3">
//                 <BiMessageDetail
//                   className="absolute left-3 top-[20px] -translate-y-1/2 text-[#00aa19] text-[16px]"
//                   aria-hidden="true"
//                 />
//                 <textarea
//                   className="w-full pl-10 outline-none p-[9px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 resize-none h-[100px] sm:h-[115px] text-[14px] sm:text-[15px] break-words whitespace-pre-wrap"
//                   placeholder={formPlaceholders.message}
//                   name="message"
//                   value={message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-5 mt-3 flex-wrap">
//                 {/* FIXED: added type="submit" */}
//                 <button
//                   type="submit"
//                   className="px-5 py-2 rounded-lg font-[500] bg-white transition-all duration-300 border border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-white text-[14px]"
//                 >
//                   {submitBtnText}
//                 </button>
//                 {error && (
//                   <p className="text-red-500 text-[14px]" role="alert">
//                     {error}
//                   </p>
//                 )}
//                 {submit && (
//                   <p className="text-[14px] text-[#000000]" role="status">
//                     {submit}
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Right: Image — hidden on mobile and small tablet */}
//           <div className="hidden lg:block w-full lg:w-1/2">
//             <img
//               src={contact}
//               alt="Get in touch"
//               loading="lazy"
//               className="w-full h-full object-cover rounded-md"
//               style={{ maxHeight: "360px" }}
//             />
//           </div>
//         </div>

//         {/* Contact Info Bar */}
//         <div className="flex flex-wrap justify-between w-full mt-5 gap-4 py-3 px-5 sm:px-8 md:px-10 rounded-lg bg-[#e6ffe6a7] border border-[#00c41d]">
//           {contactInfoData.map((el) => {
//             const Icon = el.icon;
//             return (
//               <div key={el.id} className="flex items-center gap-3">
//                 <Icon
//                   className="text-[24px] sm:text-[26px] text-[#00aa19] flex-shrink-0"
//                   aria-hidden="true"
//                 />
//                 <p className="text-[#222222] text-[13px] sm:text-[15px] font-medium break-all">
//                   {el.title}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   contactInfoData,
//   contactIntro,
//   contactSectionTitle,
//   initialFormState,
//   formPlaceholders,
//   submitBtnText,
// } from "../data/contactData";
// import { MdEmail, MdLocalPhone } from "react-icons/md";
// import emailjs from "emailjs-com";
// import contact from "/images/contact/contact.webp";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { BiMessageDetail } from "react-icons/bi";
// import { FaUser } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

// export default function Contact() {
//   const [values, setValues] = useState(initialFormState);
//   const { name, email, phone, message, error, submit } = values;
//   const formRef = useRef();
//   const { isDark } = useTheme();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
//     if (name === "name" && value.length > 35) return;
//     if (name === "email" && value.length > 50) return;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !phone || !email || !message) {
//       setValues({ ...values, error: "Please fill all required fields." });
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setValues({ ...values, error: "Please enter a valid email address." });
//       return;
//     }
//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         () => {
//           setValues({
//             ...initialFormState,
//             submit: "Your request was successfully sent.",
//           });
//           setTimeout(() => setValues(initialFormState), 4000);
//         },
//         () => {
//           setValues({ ...values, error: "Failed to send message. Try again." });
//         },
//       );
//   };

//   const inputClass = `w-full outline-none p-[7px] text-[14px] sm:text-[15px] rounded-md transition-all duration-200 border
//     ${
//       isDark
//         ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-400/60 focus:bg-white/8"
//         : "bg-[#f8f8ff] border-[#00c41d] text-gray-800 placeholder:text-gray-400"
//     }`;

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-8 xl:py-6"
//     >
//       <div className="w-full max-w-[1500px]">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className={`2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-center mb-5
//             ${isDark ? "text-white" : "text-gray-800"}`}
//         >
//           {contactSectionTitle}
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className={`flex md:flex-row flex-col-reverse gap-6 md:gap-8 px-4 sm:px-6 py-5 xl:px-[30px] xl:py-[18px] rounded-xl border transition-all duration-300
//             ${
//               isDark
//                 ? "glass-card bg-white/3 border-white/10 shadow-[0_0_40px_rgba(0,240,252,0.05)]"
//                 : "bg-[#e6ffe6a7] border-[#00c41d]"
//             }`}
//         >
//           <div className="w-full md:w-3/5 lg:w-1/2">
//             <div className="flex items-center gap-4 mb-5">
//               <MdLocalPhone
//                 className={`text-[28px] sm:text-[32px] p-2 rounded-[5px] flex-shrink-0
//                 ${isDark ? "bg-white/10 text-cyan-400" : "text-[#222222] bg-[#ffd1ff]"}`}
//               />
//               <p
//                 className={`font-[500] text-[13px] sm:text-[14px] hidden sm:block
//                 ${isDark ? "text-gray-300" : "text-[#222222]"}`}
//               >
//                 {contactIntro.desktop}
//               </p>
//               <p
//                 className={`text-[13px] font-[500] block sm:hidden ${isDark ? "text-cyan-400" : "text-[#0fc0fc]"}`}
//               >
//                 {contactIntro.mobile}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} ref={formRef} noValidate>
//               <div className="relative mb-3">
//                 <FaUser
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 text-[15px] ${isDark ? "text-cyan-400" : "text-[#00aa19]"}`}
//                 />
//                 <input
//                   className={`${inputClass} pl-10`}
//                   type="text"
//                   name="name"
//                   placeholder={formPlaceholders.name}
//                   value={name}
//                   onChange={handleInputChange}
//                   required
//                   autoComplete="name"
//                 />
//               </div>
//               <div className="relative mb-3">
//                 <MdEmail
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 text-[16px] ${isDark ? "text-cyan-400" : "text-[#00aa19]"}`}
//                 />
//                 <input
//                   className={`${inputClass} pl-10`}
//                   type="email"
//                   name="email"
//                   placeholder={formPlaceholders.email}
//                   value={email}
//                   onChange={handleInputChange}
//                   required
//                   autoComplete="email"
//                 />
//               </div>
//               <PhoneInput
//                 country={"in"}
//                 enableSearch
//                 value={phone}
//                 placeholder={formPlaceholders.phone}
//                 onChange={(value) => setValues({ ...values, phone: value })}
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                   autoComplete: "tel",
//                 }}
//                 inputStyle={{
//                   width: "100%",
//                   height: "38px",
//                   paddingLeft: "52px",
//                   borderRadius: "6px",
//                   color: isDark ? "#fff" : "#212121",
//                   fontSize: "15px",
//                   fontWeight: 500,
//                   border: isDark
//                     ? "1px solid rgba(255,255,255,0.1)"
//                     : "1px solid #00c41d",
//                   background: isDark ? "rgba(255,255,255,0.05)" : "#f8f8ff",
//                 }}
//                 containerStyle={{ marginBottom: "12px" }}
//               />
//               <div className="relative mb-3">
//                 <BiMessageDetail
//                   className={`absolute left-3 top-[20px] -translate-y-1/2 text-[16px] ${isDark ? "text-cyan-400" : "text-[#00aa19]"}`}
//                 />
//                 <textarea
//                   className={`${inputClass} pl-10 resize-none h-[100px] sm:h-[115px] break-words whitespace-pre-wrap`}
//                   placeholder={formPlaceholders.message}
//                   name="message"
//                   value={message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="flex items-center gap-5 mt-3 flex-wrap">
//                 <button
//                   type="submit"
//                   className={`px-5 py-2 rounded-lg font-[600] border transition-all duration-300 text-[14px]
//                     ${
//                       isDark
//                         ? "bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-[#05050f] neon-cyan"
//                         : "bg-white border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-transparent"
//                     }`}
//                 >
//                   {submitBtnText}
//                 </button>
//                 {error && (
//                   <p className="text-red-400 text-[14px]" role="alert">
//                     {error}
//                   </p>
//                 )}
//                 {submit && (
//                   <p
//                     className={`text-[14px] ${isDark ? "text-cyan-400" : "text-green-600"}`}
//                     role="status"
//                   >
//                     {submit}
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>

//           <div className="hidden lg:block w-full lg:w-1/2">
//             <img
//               src={contact}
//               alt="Get in touch"
//               loading="lazy"
//               className="w-full h-full object-cover rounded-lg"
//               style={{
//                 maxHeight: "360px",
//                 filter: isDark ? "brightness(0.7) saturate(1.2)" : "none",
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Info bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className={`flex flex-wrap justify-between w-full mt-5 gap-4 py-3 px-5 sm:px-8 md:px-10 rounded-xl border
//             ${
//               isDark
//                 ? "glass-card bg-white/3 border-white/10"
//                 : "bg-[#e6ffe6a7] border-[#00c41d]"
//             }`}
//         >
//           {contactInfoData.map((el) => {
//             const Icon = el.icon;
//             return (
//               <div key={el.id} className="flex items-center gap-3">
//                 <Icon
//                   className={`text-[24px] sm:text-[26px] flex-shrink-0 ${isDark ? "text-cyan-400" : "text-[#00aa19]"}`}
//                 />
//                 <p
//                   className={`text-[13px] sm:text-[15px] font-medium break-all ${isDark ? "text-gray-300" : "text-[#222222]"}`}
//                 >
//                   {el.title}
//                 </p>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { useState, useRef } from "react";
// import { motion, useInView } from "motion/react";
// import {
//   contactInfoData,
//   contactIntro,
//   contactSectionTitle,
//   initialFormState,
//   formPlaceholders,
//   submitBtnText,
// } from "../data/contactData";
// import { MdEmail, MdLocalPhone } from "react-icons/md";
// import emailjs from "emailjs-com";
// import contact from "/images/contact/contact.webp";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { BiMessageDetail } from "react-icons/bi";
// import { FaUser } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

// export default function Contact() {
//   const [values, setValues] = useState(initialFormState);
//   const { name, email, phone, message, error, submit } = values;
//   const formRef = useRef();
//   const { isDark } = useTheme();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
//     if (name === "name" && value.length > 35) return;
//     if (name === "email" && value.length > 50) return;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !phone || !email || !message) {
//       setValues({ ...values, error: "Please fill all required fields." });
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setValues({ ...values, error: "Please enter a valid email address." });
//       return;
//     }
//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         () => {
//           setValues({
//             ...initialFormState,
//             submit: "Message sent successfully!",
//           });
//           setTimeout(() => setValues(initialFormState), 4000);
//         },
//         () => {
//           setValues({ ...values, error: "Failed to send. Please try again." });
//         },
//       );
//   };

//   const inp = `w-full outline-none p-[8px] rounded-lg text-[14px] font-[500] border transition-all duration-200
//     ${
//       isDark
//         ? "bg-white/[0.06] border-white/12 text-white placeholder:text-gray-600 focus:border-emerald-400/60 focus:bg-white/[0.08]"
//         : "bg-white/80 border-[#00c41d] text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-300"
//     }`;

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-10 xl:py-6"
//       style={{
//         background: isDark
//           ? "linear-gradient(135deg,#030a05 0%,#061510 50%,#030a07 100%)"
//           : undefined,
//       }}
//     >
//       {!isDark && (
//         <div className="absolute inset-0 -z-10">
//           <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9]/40 via-[#fff5ef]/40 to-white/60" />
//         </div>
//       )}

//       <div className="w-full max-w-[1500px]">
//         <motion.h2
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className={`2xl:text-[34px] xl:text-[30px] lg:text-[26px] text-[22px] font-[800] text-center mb-6 tracking-tight
//             ${isDark ? "text-white" : "text-gray-900"}`}
//         >
//           {contactSectionTitle}
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className={`flex md:flex-row flex-col-reverse gap-6 md:gap-8 px-5 sm:px-7 py-6 xl:px-8 xl:py-7 rounded-2xl border
//             ${
//               isDark
//                 ? "bg-white/[0.03] border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.05)] backdrop-blur-sm"
//                 : "bg-[#e6ffe6]/70 border-[#00c41d]/60 shadow-lg"
//             }`}
//         >
//           {/* Form */}
//           <div className="w-full md:w-3/5 lg:w-1/2">
//             <div className="flex items-center gap-4 mb-5">
//               <MdLocalPhone
//                 className={`text-[26px] p-[6px] rounded-lg flex-shrink-0
//                 ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-[#ffd1ff] text-gray-700"}`}
//               />
//               <p
//                 className={`font-[400] text-[13px] sm:text-[14px] hidden sm:block ${isDark ? "text-gray-300" : "text-gray-700"}`}
//               >
//                 {contactIntro.desktop}
//               </p>
//               <p
//                 className={`text-[13px] font-[500] block sm:hidden ${isDark ? "text-emerald-400" : "text-cyan-600"}`}
//               >
//                 {contactIntro.mobile}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} ref={formRef} noValidate>
//               <div className="relative mb-3">
//                 <FaUser
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 text-[14px] ${isDark ? "text-emerald-400" : "text-[#00aa19]"}`}
//                 />
//                 <input
//                   className={`${inp} pl-10`}
//                   type="text"
//                   name="name"
//                   placeholder={formPlaceholders.name}
//                   value={name}
//                   onChange={handleChange}
//                   required
//                   autoComplete="name"
//                 />
//               </div>
//               <div className="relative mb-3">
//                 <MdEmail
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 text-[15px] ${isDark ? "text-emerald-400" : "text-[#00aa19]"}`}
//                 />
//                 <input
//                   className={`${inp} pl-10`}
//                   type="email"
//                   name="email"
//                   placeholder={formPlaceholders.email}
//                   value={email}
//                   onChange={handleChange}
//                   required
//                   autoComplete="email"
//                 />
//               </div>
//               <PhoneInput
//                 country={"in"}
//                 enableSearch
//                 value={phone}
//                 placeholder={formPlaceholders.phone}
//                 onChange={(v) => setValues({ ...values, phone: v })}
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                   autoComplete: "tel",
//                 }}
//                 inputStyle={{
//                   width: "100%",
//                   height: "38px",
//                   paddingLeft: "52px",
//                   borderRadius: "8px",
//                   color: isDark ? "#fff" : "#212121",
//                   fontSize: "14px",
//                   fontWeight: 500,
//                   border: isDark
//                     ? "1px solid rgba(255,255,255,0.12)"
//                     : "1px solid #00c41d",
//                   background: isDark
//                     ? "rgba(255,255,255,0.06)"
//                     : "rgba(255,255,255,0.8)",
//                 }}
//                 containerStyle={{ marginBottom: "12px" }}
//               />
//               <div className="relative mb-3">
//                 <BiMessageDetail
//                   className={`absolute left-3 top-[20px] -translate-y-1/2 text-[15px] ${isDark ? "text-emerald-400" : "text-[#00aa19]"}`}
//                 />
//                 <textarea
//                   className={`${inp} pl-10 resize-none h-[100px] sm:h-[110px] break-words whitespace-pre-wrap`}
//                   placeholder={formPlaceholders.message}
//                   name="message"
//                   value={message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="flex items-center gap-4 mt-4 flex-wrap">
//                 <button
//                   type="submit"
//                   className={`px-6 py-[9px] rounded-xl font-[700] text-[13px] tracking-wide transition-all duration-300 border-2
//                     ${
//                       isDark
//                         ? "border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-[#030a05]"
//                         : "bg-white border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-transparent"
//                     }`}
//                 >
//                   {submitBtnText}
//                 </button>
//                 {error && (
//                   <p
//                     className="text-red-400 text-[13px] font-[500]"
//                     role="alert"
//                   >
//                     {error}
//                   </p>
//                 )}
//                 {submit && (
//                   <p
//                     className={`text-[13px] font-[600] ${isDark ? "text-emerald-400" : "text-green-600"}`}
//                     role="status"
//                   >
//                     {submit}
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Image */}
//           <div className="hidden lg:block w-full lg:w-1/2">
//             <img
//               src={contact}
//               alt="Get in touch"
//               loading="lazy"
//               className="w-full h-full object-cover rounded-xl"
//               style={{
//                 maxHeight: "340px",
//                 filter: isDark ? "brightness(0.55) saturate(1.1)" : "none",
//               }}
//             />
//           </div>
//         </motion.div>

//         {/* Info bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className={`flex flex-wrap justify-between w-full mt-5 gap-4 py-4 px-5 sm:px-8 rounded-2xl border
//             ${isDark ? "bg-white/[0.03] border-white/10" : "bg-[#e6ffe6]/70 border-[#00c41d]/60"}`}
//         >
//           {contactInfoData.map((el) => {
//             const Icon = el.icon;
//             return (
//               <div key={el.id} className="flex items-center gap-3">
//                 <Icon
//                   className={`text-[22px] flex-shrink-0 ${isDark ? "text-emerald-400" : "text-[#00aa19]"}`}
//                 />
//                 <p
//                   className={`text-[13px] sm:text-[14px] font-[500] break-all ${isDark ? "text-gray-300" : "text-gray-700"}`}
//                 >
//                   {el.title}
//                 </p>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  contactInfoData,
  contactIntro,
  contactSectionTitle,
  initialFormState,
  formPlaceholders,
  submitBtnText,
} from "../data/contactData";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import emailjs from "emailjs-com";
import contact from "/images/contact/contact.webp";
import { BiMessageDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Contact() {
  const [values, setValues] = useState(initialFormState);
  const { name, email, phone, message, error, submit } = values;
  const formRef = useRef();
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "name" && value.length > 35) return;
    if (name === "email" && value.length > 50) return;
    setValues({ ...values, [name]: value });
  };

  // react-international-phone returns full E.164 string e.g. "+919876543210"
  const handlePhoneChange = (value) => {
    setValues((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) {
      setValues({ ...values, error: "Please fill all required fields." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setValues({ ...values, error: "Please enter a valid email address." });
      return;
    }
    // phone is already full E.164 format: "+919876543210"
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, phone, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setValues({
            ...initialFormState,
            submit: "Message sent successfully!",
          });
          setTimeout(() => setValues(initialFormState), 4000);
        },
        () => {
          setValues({ ...values, error: "Failed to send. Please try again." });
        },
      );
  };

  const inp = `w-full outline-none px-3 py-[8px] rounded-lg text-[14px] font-[500] border transition-all duration-200
    ${
      isDark
        ? "bg-white/[0.06] border-white/12 text-white placeholder:text-gray-600 focus:border-emerald-400/60 focus:bg-white/[0.08]"
        : "bg-white/80 border-[#00c41d] text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-300"
    }`;

  const iconCls = isDark ? "text-emerald-400" : "text-[#00aa19]";

  // ── PhoneInput styles — transparent internals, border lives on wrapper ──
  const phoneBorder = isDark ? "border-white/12" : "border-[#00c41d]";

  const phoneBg = isDark ? "bg-white/[0.06]" : "bg-white/80";

  const phoneInputStyle = {
    // Input element — borderless + transparent so wrapper border shows
    input: {
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "14px",
      fontWeight: "500",
      color: isDark ? "white" : "#1f2937",
      padding: "8px 12px",
      width: "100%",
      borderRadius: "0 8px 8px 0",
      caretColor: isDark ? "#34d399" : "#00a619",
    },
    // Flag/dial-code button — rounded left corners (wrapper has no overflow-hidden)
    button: {
      border: "none",
      outline: "none",
      background: "transparent",
      borderRight: isDark
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid #b3f0b3",
      borderRadius: "8px 0 0 8px",
      padding: "0 8px",
      cursor: "pointer",
    },
    // Country dropdown list — zIndex ensures it renders above all sibling elements
    dropdown: isDark
      ? {
          background: "#0d1f10",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "10px",
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          zIndex: 9999,
        }
      : {
          background: "white",
          border: "1px solid #00c41d",
          borderRadius: "10px",
          color: "#1f2937",
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
          zIndex: 9999,
        },
    // Search field inside dropdown
    searchInput: isDark
      ? {
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "6px",
          color: "white",
          fontSize: "13px",
        }
      : {
          border: "1px solid #b3f0b3",
          borderRadius: "6px",
          fontSize: "13px",
        },
    // Each country row in dropdown
    listItem: isDark ? { color: "white" } : { color: "#1f2937" },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-10 xl:py-6"
      style={{
        background: isDark
          ? "linear-gradient(135deg,#030a05 0%,#061510 50%,#030a07 100%)"
          : undefined,
      }}
    >
      {!isDark && (
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9]/40 via-[#fff5ef]/40 to-white/60" />
        </div>
      )}

      <div className="w-full max-w-[1500px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`2xl:text-[34px] xl:text-[30px] lg:text-[26px] text-[22px] font-[800] text-center mb-6 tracking-tight
            ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {contactSectionTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`flex md:flex-row flex-col-reverse gap-6 md:gap-8 px-5 sm:px-7 py-6 xl:px-8 xl:py-7 rounded-2xl border
            ${
              isDark
                ? "bg-white/[0.03] border-white/10 backdrop-blur-sm"
                : "bg-[#e6ffe6]/70 border-[#00c41d]/60 shadow-lg"
            }`}
        >
          {/* Form */}
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="flex items-center gap-3 mb-5">
              <MdLocalPhone
                className={`text-[26px] p-[5px] rounded-lg flex-shrink-0
                ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-[#ffd1ff] text-gray-700"}`}
              />
              <p
                className={`font-[400] text-[13px] sm:text-[14px] hidden sm:block ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {contactIntro.desktop}
              </p>
              <p
                className={`text-[13px] font-[500] block sm:hidden ${isDark ? "text-emerald-400" : "text-cyan-600"}`}
              >
                {contactIntro.mobile}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              ref={formRef}
              noValidate
              className="space-y-3"
            >
              {/* Name */}
              <div className="relative">
                <FaUser
                  className={`absolute left-3 top-1/2 -translate-y-1/2 text-[13px] ${iconCls}`}
                />
                <input
                  className={`${inp} pl-9`}
                  type="text"
                  name="name"
                  placeholder={formPlaceholders.name}
                  value={name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <MdEmail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 text-[15px] ${iconCls}`}
                />
                <input
                  className={`${inp} pl-9`}
                  type="email"
                  name="email"
                  placeholder={formPlaceholders.email}
                  value={email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              {/* ── Phone — react-international-phone ─────────────────
                  Wrapper div owns the border + bg so it looks identical
                  to the other `inp` fields. Internal styles are transparent.
              ──────────────────────────────────────────────────────── */}
              <div
                className={`flex items-stretch rounded-lg border transition-all duration-200 ${phoneBorder} ${phoneBg}`}
              >
                <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  onChange={handlePhoneChange}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                  }}
                  inputStyle={phoneInputStyle.input}
                  countrySelectorStyleProps={{
                    style: { background: "transparent" },
                    buttonStyle: phoneInputStyle.button,
                    dropdownStyleProps: {
                      style: phoneInputStyle.dropdown,
                      searchInputStyle: phoneInputStyle.searchInput,
                      listItemStyle: phoneInputStyle.listItem,
                    },
                  }}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "Phone number",
                  }}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <BiMessageDetail
                  className={`absolute left-3 top-[18px] -translate-y-1/2 text-[15px] ${iconCls}`}
                />
                <textarea
                  className={`${inp} pl-9 resize-none h-[100px] sm:h-[110px] w-full`}
                  placeholder={formPlaceholders.message}
                  name="message"
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap pt-1">
                <button
                  type="submit"
                  className={`px-6 py-[9px] rounded-xl font-[700] text-[13px] tracking-wide transition-all duration-300 border-2
                    ${
                      isDark
                        ? "border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-[#030a05]"
                        : "bg-white border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-transparent"
                    }`}
                >
                  {submitBtnText}
                </button>
                {error && (
                  <p
                    className="text-red-400 text-[13px] font-[500]"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                {submit && (
                  <p
                    className={`text-[13px] font-[600] ${isDark ? "text-emerald-400" : "text-green-600"}`}
                    role="status"
                  >
                    {submit}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <img
              src={contact}
              alt="Get in touch"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
              style={{
                maxHeight: "340px",
                filter: isDark ? "brightness(0.55) saturate(1.1)" : "none",
              }}
            />
          </div>
        </motion.div>

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`flex flex-wrap justify-between w-full mt-5 gap-4 py-4 px-5 sm:px-8 rounded-2xl border
            ${isDark ? "bg-white/[0.03] border-white/10" : "bg-[#e6ffe6]/70 border-[#00c41d]/60"}`}
        >
          {contactInfoData.map((el) => {
            const Icon = el.icon;
            return (
              <div key={el.id} className="flex items-center gap-3">
                <Icon className={`text-[22px] flex-shrink-0 ${iconCls}`} />
                <p
                  className={`text-[13px] sm:text-[14px] font-[500] break-all ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {el.title}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
