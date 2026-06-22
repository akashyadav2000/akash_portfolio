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
// import contact from "/images/contact/contact.jpg";
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
//       className="relative w-full min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[11%] py-3"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9] via-[#fff5ef] to-[#ffffff] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         {/* ✅ Fixed: Removed mb-6 from h2, now uses mb-4 with consistent sizing */}
//         <h2 className="text-[clamp(26px,3vw,34px)] font-semibold text-center text-gray-800 mb-5">
//           {contactSectionTitle}
//         </h2>

//         {/* Form Card */}
//         <div className="flex md:flex-row flex-col-reverse gap-[35px] px-[25px] py-[20px] xl:px-[30px] xl:py-[18px] rounded-md overflow-hidden bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
//           {/* Left: Form */}
//           <div className="lg:w-2/3 xl:w-1/2 w-full">
//             <div className="flex items-center gap-5 mb-5">
//               <div className="bg-primary rounded-md p-[7px] sm:p-[9px] mx-auto md:mx-0">
//                 <MdLocalPhone className="text-[26px] sm:text-[40px] text-[#222222] bg-[#ffd1ff] p-2 rounded-[5px]" />
//               </div>
//               <p className="text-[#222222] font-[500] text-justify text-[15px] sm:text-[15.5px] md:text-[16px] hidden sm:block">
//                 {contactIntro.desktop}
//               </p>
//               <p className="text-[#0fc0fc] text-justify text-[14.5px] font-[500] block sm:hidden">
//                 {contactIntro.mobile}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} ref={formRef}>
//               <div className="relative mb-4">
//                 <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[17px]" />
//                 <input
//                   className="w-full pl-10 outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray"
//                   type="text"
//                   name="name"
//                   placeholder={formPlaceholders.name}
//                   value={name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="relative mb-4">
//                 <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[17px]" />
//                 <input
//                   className="w-full pl-10 rounded-md outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray"
//                   type="email"
//                   name="email"
//                   placeholder={formPlaceholders.email}
//                   value={email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <PhoneInput
//                 country={"in"}
//                 enableSearch
//                 value={phone}
//                 placeholder={formPlaceholders.phone}
//                 onChange={(value) => setValues({ ...values, phone: value })}
//                 inputProps={{ name: "phone", required: true }}
//                 inputStyle={{
//                   width: "100%",
//                   height: "39px",
//                   paddingLeft: "52px",
//                   borderRadius: "6px",
//                   color: "#212121",
//                   fontSize: "16px",
//                   fontWeight: 500,
//                   border: "1px solid #00c41d",
//                 }}
//                 containerStyle={{ marginBottom: "16px" }}
//               />

//               <div className="relative mb-4">
//                 <BiMessageDetail className="absolute left-3 top-[22px] -translate-y-1/2 text-[#00aa19] text-[17px]" />
//                 <textarea
//                   className="w-full pl-10 outline-none p-[9px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray resize-none h-[110px] sm:h-[120px] break-words whitespace-pre-wrap"
//                   placeholder={formPlaceholders.message}
//                   name="message"
//                   value={message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-8 mt-3 flex-wrap">
//                 <button className="px-6 py-2 rounded-lg font-[500] bg-white transition-all duration-300 border border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-white">
//                   {submitBtnText}
//                 </button>
//                 {error && <p className="text-red-500 text-[17px]">{error}</p>}
//                 {submit && (
//                   <p className="text-[17px] text-[#000000]">{submit}</p>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Right: Image */}
//           <div className="lg:w-1/3 xl:w-1/2 hidden lg:block">
//             <img
//               src={contact}
//               alt="Contact"
//               className="w-full h-full object-cover rounded-md lg:h-[87%]"
//             />
//           </div>
//         </div>

//         {/* Contact Info Bar */}
//         <div className="flex flex-wrap justify-between w-full mt-6 mb-4 gap-5 sm:gap-8 md:gap-10 py-2 sm:py-2 px-7 md:px-14 rounded-lg bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
//           {contactInfoData.map((el) => {
//             const Icon = el.icon;
//             return (
//               <div
//                 key={el.id}
//                 className="flex items-center gap-3 w-full sm:w-auto"
//               >
//                 <Icon className="text-[29px] text-[#00aa19]" />
//                 <p className="text-[#222222] text-sm sm:text-[17px] font-medium break-words">
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
// import contact from "/images/contact/contact.jpg";
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
//       className="relative w-full min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[8%] lg:px-[11%] py-0"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9] via-[#fff5ef] to-[#ffffff] opacity-40"></div>
//       </div>

//       <div className="w-full max-w-[1500px]">
//         <h2 className="text-[clamp(24px,3vw,34px)] font-semibold text-center text-gray-800 mb-5">
//           {contactSectionTitle}
//         </h2>

//         {/* Form Card */}
//         <div className="flex md:flex-row flex-col-reverse gap-[30px] px-[20px] py-[18px] xl:px-[30px] xl:py-[18px] rounded-md overflow-hidden bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
//           {/* Left: Form */}
//           <div className="lg:w-2/3 xl:w-1/2 w-full">
//             <div className="flex items-center gap-5 mb-5">
//               <div className="bg-primary rounded-md p-[7px] sm:p-[9px] mx-auto md:mx-0">
//                 <MdLocalPhone className="text-[26px] sm:text-[38px] text-[#222222] bg-[#ffd1ff] p-2 rounded-[5px]" />
//               </div>
//               <p className="text-[#222222] font-[500] text-justify text-[14px] sm:text-[15px] md:text-[15.5px] hidden sm:block">
//                 {contactIntro.desktop}
//               </p>
//               <p className="text-[#0fc0fc] text-justify text-[14px] font-[500] block sm:hidden">
//                 {contactIntro.mobile}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} ref={formRef} noValidate>
//               <div className="relative mb-4">
//                 <FaUser
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[16px]"
//                   aria-hidden="true"
//                 />
//                 <input
//                   className="w-full pl-10 outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400"
//                   type="text"
//                   name="name"
//                   placeholder={formPlaceholders.name}
//                   value={name}
//                   onChange={handleInputChange}
//                   required
//                   autoComplete="name"
//                 />
//               </div>

//               <div className="relative mb-4">
//                 <MdEmail
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[17px]"
//                   aria-hidden="true"
//                 />
//                 <input
//                   className="w-full pl-10 rounded-md outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400"
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
//                   height: "39px",
//                   paddingLeft: "52px",
//                   borderRadius: "6px",
//                   color: "#212121",
//                   fontSize: "16px",
//                   fontWeight: 500,
//                   border: "1px solid #00c41d",
//                 }}
//                 containerStyle={{ marginBottom: "16px" }}
//               />

//               <div className="relative mb-4">
//                 <BiMessageDetail
//                   className="absolute left-3 top-[22px] -translate-y-1/2 text-[#00aa19] text-[17px]"
//                   aria-hidden="true"
//                 />
//                 <textarea
//                   className="w-full pl-10 outline-none p-[9px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 resize-none h-[110px] sm:h-[120px] break-words whitespace-pre-wrap"
//                   placeholder={formPlaceholders.message}
//                   name="message"
//                   value={message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-8 mt-3 flex-wrap">
//                 {/* FIXED: added type="submit" — previously missing, causing unreliable behaviour */}
//                 <button
//                   type="submit"
//                   className="px-6 py-2 rounded-lg font-[500] bg-white transition-all duration-300 border border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-white"
//                 >
//                   {submitBtnText}
//                 </button>
//                 {error && (
//                   <p className="text-red-500 text-[15px]" role="alert">
//                     {error}
//                   </p>
//                 )}
//                 {submit && (
//                   <p className="text-[15px] text-[#000000]" role="status">
//                     {submit}
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* Right: Image */}
//           <div className="lg:w-1/3 xl:w-1/2 hidden lg:block">
//             <img
//               src={contact}
//               alt="Get in touch"
//               loading="lazy"
//               className="w-full h-full object-cover rounded-md lg:h-[87%]"
//             />
//           </div>
//         </div>

//         {/* Contact Info Bar */}
//         <div className="flex flex-wrap justify-between w-full mt-6 mb-4 gap-5 sm:gap-8 md:gap-10 py-2 px-7 md:px-14 rounded-lg bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
//           {contactInfoData.map((el) => {
//             const Icon = el.icon;
//             return (
//               <div
//                 key={el.id}
//                 className="flex items-center gap-3 w-full sm:w-auto"
//               >
//                 <Icon
//                   className="text-[27px] text-[#00aa19] flex-shrink-0"
//                   aria-hidden="true"
//                 />
//                 <p className="text-[#222222] text-sm sm:text-[16px] font-medium break-words">
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

import { useState, useRef } from "react";
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
import contact from "/images/contact/contact.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BiMessageDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

function Contact() {
  const [values, setValues] = useState(initialFormState);
  const { name, email, phone, message, error, submit } = values;
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "name" && value.length > 35) return;
    if (name === "email" && value.length > 50) return;
    setValues({ ...values, [name]: value });
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
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setValues({
            ...initialFormState,
            submit: "Your request was successfully sent.",
          });
          setTimeout(() => setValues(initialFormState), 4000);
        },
        () => {
          setValues({ ...values, error: "Failed to send message. Try again." });
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-fit xl:min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-[5%] sm:px-[6%] lg:px-[8%] xl:px-[11%] py-10 xl:py-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9] via-[#fff5ef] to-[#ffffff] opacity-40"></div>
      </div>

      <div className="w-full max-w-[1500px]">
        <h2 className="2xl:text-[34px] xl:text-[32px] lg:text-[28px] text-[24px] font-semibold text-center text-gray-800 mb-5">
          {contactSectionTitle}
        </h2>

        {/* Form Card */}
        <div className="flex md:flex-row flex-col-reverse gap-6 md:gap-8 px-4 sm:px-6 py-5 xl:px-[30px] xl:py-[18px] rounded-md overflow-hidden bg-[#e6ffe6a7] border border-[#00c41d]">
          {/* Left: Form */}
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-primary rounded-md p-[7px] flex-shrink-0">
                <MdLocalPhone className="text-[24px] sm:text-[32px] text-[#222222] bg-[#ffd1ff] p-2 rounded-[5px]" />
              </div>
              <p className="text-[#222222] font-[500] text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] hidden sm:block">
                {contactIntro.desktop}
              </p>
              <p className="text-[#0fc0fc] text-[13px] font-[500] block sm:hidden">
                {contactIntro.mobile}
              </p>
            </div>

            <form onSubmit={handleSubmit} ref={formRef} noValidate>
              <div className="relative mb-3">
                <FaUser
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[15px]"
                  aria-hidden="true"
                />
                <input
                  className="w-full pl-10 outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 text-[14px] sm:text-[15px]"
                  type="text"
                  name="name"
                  placeholder={formPlaceholders.name}
                  value={name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="relative mb-3">
                <MdEmail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[16px]"
                  aria-hidden="true"
                />
                <input
                  className="w-full pl-10 rounded-md outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 text-[14px] sm:text-[15px]"
                  type="email"
                  name="email"
                  placeholder={formPlaceholders.email}
                  value={email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                />
              </div>

              <PhoneInput
                country={"in"}
                enableSearch
                value={phone}
                placeholder={formPlaceholders.phone}
                onChange={(value) => setValues({ ...values, phone: value })}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoComplete: "tel",
                }}
                inputStyle={{
                  width: "100%",
                  height: "38px",
                  paddingLeft: "52px",
                  borderRadius: "6px",
                  color: "#212121",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid #00c41d",
                }}
                containerStyle={{ marginBottom: "12px" }}
              />

              <div className="relative mb-3">
                <BiMessageDetail
                  className="absolute left-3 top-[20px] -translate-y-1/2 text-[#00aa19] text-[16px]"
                  aria-hidden="true"
                />
                <textarea
                  className="w-full pl-10 outline-none p-[9px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray-400 resize-none h-[100px] sm:h-[115px] text-[14px] sm:text-[15px] break-words whitespace-pre-wrap"
                  placeholder={formPlaceholders.message}
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center gap-5 mt-3 flex-wrap">
                {/* FIXED: added type="submit" */}
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg font-[500] bg-white transition-all duration-300 border border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-white text-[14px]"
                >
                  {submitBtnText}
                </button>
                {error && (
                  <p className="text-red-500 text-[14px]" role="alert">
                    {error}
                  </p>
                )}
                {submit && (
                  <p className="text-[14px] text-[#000000]" role="status">
                    {submit}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Right: Image — hidden on mobile and small tablet */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <img
              src={contact}
              alt="Get in touch"
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
              style={{ maxHeight: "360px" }}
            />
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="flex flex-wrap justify-between w-full mt-5 gap-4 py-3 px-5 sm:px-8 md:px-10 rounded-lg bg-[#e6ffe6a7] border border-[#00c41d]">
          {contactInfoData.map((el) => {
            const Icon = el.icon;
            return (
              <div key={el.id} className="flex items-center gap-3">
                <Icon
                  className="text-[24px] sm:text-[26px] text-[#00aa19] flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-[#222222] text-[13px] sm:text-[15px] font-medium break-all">
                  {el.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
