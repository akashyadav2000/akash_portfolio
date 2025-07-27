// src/data/heroData.js
import bracket_icon from "/images/bracket_icon.png";
import angle from "/images/angle.png";
import square from "/images/square.png";
import cube2 from "/images/cube2.png";
import men from "/images/men.png";
import small from "/images/Akash.png";
import mobile2_icon from "/images/mobile2_icon.png";
import pc2 from "/images/pc2_icon.png";
import pc6 from "/images/pc6_icon.png";

export const heroImages = [
  {
    src: bracket_icon,
    className:
      "absolute w-[auto] 2xl:h-[77px] xl:h-[71px] lg:h-[66px] h-[60px] top-[53%] xl:top-[52%] 2xl:top-[50%] right-[28.5%] 2xl:right-[30%] opacity-[70%] object-contain bg-[#d6b4ffa1] rounded-[15px] p-2",
  },
  {
    src: angle,
    className:
      "absolute w-[auto] 2xl:h-[45px] xl:h-[41px] lg:h-[38px] h-[35px] top-[72%] right-[29.5%] 2xl:right-[30.5%] opacity-[80%] object-contain bg-[#ffa0e6d5] rounded-[15px] p-2",
  },
  {
    src: square,
    className:
      "absolute 2xl:w-[55px] xl:w-[51px] lg:w-[48px] w-[45px] h-auto top-[62%] right-[33.5%] 2xl:right-[35%] opacity-[85%] object-contain bg-[#a0fcffb6] rounded-[15px] p-2",
  },
  {
    src: pc6,
    className:
      "absolute w-auto 2xl:h-[150px] xl:h-[138px] lg:h-[130px] h-[125px] bottom-[3%] right-[12%] xl:right-[13%] 2xl:right-[14%] opacity-[54%] object-contain bg-[#aaa7fff5] rounded-[15px] p-2",
  },
  {
    src: pc2,
    className:
      "absolute 2xl:w-[250px] xl:w-[225px] w-[210px] 2xl:h-[160px] xl:h-[148px] lg:h-[140px] h-[135px] top-[54%] xl:top-[51%] 2xl:top-[48%] right-[7%] xl:right-[8%] 2xl:right-[10%] opacity-[50%] object-contain bg-[#f0b4ffcd] rounded-[15px] p-2",
  },
  {
    src: cube2,
    className: "absolute 2xl:w-[70px] xl:w-[64px] lg:w-[59px] w-[55px] h-auto top-[35%] right-[35%] right-[35%] lg:right-[35%] xl:right-[40%] 2xl:right-[42%] object-contain",
  },
  {
    src: cube2,
    className: "absolute 2xl:w-[100px] xl:w-[90px] lg:w-[84px] w-[80px] h-auto top-[73%] xl:top-[62%] right-[52%] lg:right-[52%] xl:right-[45%]  2xl:right-[48%] object-contain",
  },
  {
    src: mobile2_icon,
    className:
      "absolute w-[auto] 2xl:h-[150px] xl:h-[138px] lg:h-[130px] h-[126px] bottom-[3%] right-[27%] xl:right-[27%] 2xl:right-[28%] opacity-[50%] object-contain bg-[#ffd0b4] border-none rounded-[15px] p-2",
  },
];

export const heroContent = {
  heading: "Hello",
  im: "I'm",
  firstname: "Akash",
  lastname: "Yadav",
  highlightColor: "#0fc0fc",
  title: "Frontend Developer",
  titleColor: "text-pink-500",
  description:
    "Creative front-end developer crafting responsive, clean websites with performance, precision, and purpose.",
  buttonText: "Hire Me",
  profileImage: men,
  roundImg: small,
};
