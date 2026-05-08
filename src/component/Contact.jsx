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
      className="relative w-full min-h-[calc(100dvh-55px)] flex flex-col justify-center items-center px-4 md:px-[11%] py-3"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#ffeaf9] via-[#fff5ef] to-[#ffffff] opacity-40"></div>
      </div>

      <div className="w-full max-w-[1500px]">
        {/* ✅ Fixed: Removed mb-6 from h2, now uses mb-4 with consistent sizing */}
        <h2 className="text-[clamp(26px,3vw,34px)] font-semibold text-center text-gray-800 mb-5">
          {contactSectionTitle}
        </h2>

        {/* Form Card */}
        <div className="flex md:flex-row flex-col-reverse gap-[35px] px-[25px] py-[20px] xl:px-[30px] xl:py-[18px] rounded-md overflow-hidden bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
          {/* Left: Form */}
          <div className="lg:w-2/3 xl:w-1/2 w-full">
            <div className="flex items-center gap-5 mb-5">
              <div className="bg-primary rounded-md p-[7px] sm:p-[9px] mx-auto md:mx-0">
                <MdLocalPhone className="text-[26px] sm:text-[40px] text-[#222222] bg-[#ffd1ff] p-2 rounded-[5px]" />
              </div>
              <p className="text-[#222222] font-[500] text-justify text-[15px] sm:text-[15.5px] md:text-[16px] hidden sm:block">
                {contactIntro.desktop}
              </p>
              <p className="text-[#0fc0fc] text-justify text-[14.5px] font-[500] block sm:hidden">
                {contactIntro.mobile}
              </p>
            </div>

            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="relative mb-4">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[17px]" />
                <input
                  className="w-full pl-10 outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray"
                  type="text"
                  name="name"
                  placeholder={formPlaceholders.name}
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="relative mb-4">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00aa19] text-[17px]" />
                <input
                  className="w-full pl-10 rounded-md outline-none p-[7px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray"
                  type="email"
                  name="email"
                  placeholder={formPlaceholders.email}
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <PhoneInput
                country={"in"}
                enableSearch
                value={phone}
                placeholder={formPlaceholders.phone}
                onChange={(value) => setValues({ ...values, phone: value })}
                inputProps={{ name: "phone", required: true }}
                inputStyle={{
                  width: "100%",
                  height: "39px",
                  paddingLeft: "52px",
                  borderRadius: "6px",
                  color: "#212121",
                  fontSize: "16px",
                  fontWeight: 500,
                  border: "1px solid #00c41d",
                }}
                containerStyle={{ marginBottom: "16px" }}
              />

              <div className="relative mb-4">
                <BiMessageDetail className="absolute left-3 top-[22px] -translate-y-1/2 text-[#00aa19] text-[17px]" />
                <textarea
                  className="w-full pl-10 outline-none p-[9px] bg-[#f8f8ff] text-[#222222] placeholder:text-gray resize-none h-[110px] sm:h-[120px] break-words whitespace-pre-wrap"
                  placeholder={formPlaceholders.message}
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center gap-8 mt-3 flex-wrap">
                <button className="px-6 py-2 rounded-lg font-[500] bg-white transition-all duration-300 border border-[#00a619] text-[#00a619] hover:bg-[#5fff77] hover:text-gray-800 hover:border-white">
                  {submitBtnText}
                </button>
                {error && <p className="text-red-500 text-[17px]">{error}</p>}
                {submit && (
                  <p className="text-[17px] text-[#000000]">{submit}</p>
                )}
              </div>
            </form>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/3 xl:w-1/2 hidden lg:block">
            <img
              src={contact}
              alt="Contact"
              className="w-full h-full object-cover rounded-md lg:h-[87%]"
            />
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="flex flex-wrap justify-between w-full mt-6 mb-4 gap-5 sm:gap-8 md:gap-10 py-2 sm:py-2 px-7 md:px-14 rounded-lg bg-[#e6ffe6a7] border border-[#00c41d] max-w-[1500px]">
          {contactInfoData.map((el) => {
            const Icon = el.icon;
            return (
              <div
                key={el.id}
                className="flex items-center gap-3 w-full sm:w-auto"
              >
                <Icon className="text-[29px] text-[#00aa19]" />
                <p className="text-[#222222] text-sm sm:text-[17px] font-medium break-words">
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
