// src/data/contactData.js
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone, MdLocationOn } from "react-icons/md";

export const contactSectionTitle = "Contact";

export const contactIntro = {
  desktop: "Share your contact details and any questions you may have, and I’ll be happy to assist you.",
  mobile: "Submit your contact details and any questions you have.",
};

export const contactInfoData = [
  { id: 1, title: "+91 7021117450", icon: HiOutlineMail },
  { id: 2, title: "Akashvinodyadav11@gmail.com", icon: MdPhone },
  { id: 3, title: "Mumbai, India", icon: MdLocationOn },
];

export const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  error: "",
  submit: "",
};

export const formPlaceholders = {
  name: "Your Name",
  email: "Your Email",
  phone: "Phone Number",
  message: "Your Message",
};

export const submitBtnText = "Submit";
