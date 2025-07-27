// Hero.jsx
import { heroImages, heroContent } from "../data/heroData";

export default function Hero() {
  return (
    <div className="min-h-fit xl:min-h-[calc(100dvh-55px)] flex justify-center items-center relative overflow-hidden">
      {/* bg-gradient-to-br from-[#CCF2FF] to-gray-100  */}

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full inset-0 z-0 bg-gradient-to-br from-[#c8ffc4] via-[#aefcff] to-[#ffffff] opacity-50 pointer-events-none"></div>
      </div>

      {/* Floating Icons ffddff*/}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {heroImages.map((item, index) => (
          <img key={index} src={item.src} alt="" className={item.className} />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex  flex-col-reverse lg:flex-row 2xl:w-[75%] xl:w-[80%] w-[85%] min-h-screen lg:items-stretch items-center lg:justify-between justify-center relative">
        {/* Left text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <hr className="border-t-4 border-black 2xl:w-9 xl:w-8 w-7" />
            <span className="text-black 2xl:text-[35px] xl:text-[33px] text-[31px] font-[600] ml-[13px] leading-[1.7]">
              {heroContent.heading}
            </span>
          </div>

          <h1
            className={`2xl:text-[63px] xl:text-[58px] text-[55px] font-[600] leading-[1.5]`}
          >
            {heroContent.im}{" "}
            <span className=" bg-gradient-to-r from-[#0fc0fc] to-[#00ffff] bg-clip-text text-transparent">
              {heroContent.firstname}{" "}
            </span>{" "}
            <span>{heroContent.lastname}</span>
          </h1>

          <h2
            className={`2xl:text-[50px] xl:text-[47px] text-[45px] font-[600] bg-gradient-to-r from-[#ff51ff] to-[#f899df] bg-clip-text text-transparent`}
          >
            {heroContent.title}
          </h2>
          {/* 
          <h2 className={`2xl:text-[50px] xl:text-[47px] text-[45px] font-[600] bg-gradient-to-r from-[#bf00ff] to-[#ff00ff] bg-clip-text text-transparent`}>
            {heroContent.title}
          </h2> */}

          <p className="text-gray-800 2xl:text-[19px] xl:text-[18.5px] text-[18px] font-[500] max-w-lg leading-[1.5] my-4">
            {heroContent.description}
          </p>

          <div className="2xl:mt-6 xl:mt-[22px] mt-[20px] flex gap-4 flex-wrap">
            <button className="relative px-6 py-2 rounded-lg font-[500] bg-white text-[#0fc0fc] border border-[#0fc0fc] backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-[#2ef6e9] hover:text-gray-800 hover:border-white">
              Hire Me
            </button>

            <button className="relative px-6 py-2 rounded-lg font-[500] text-[#ffffff] border border-[#ffffff] backdrop-blur-md overflow-hidden transition-all duration-300 bg-[#ff6dff] hover:bg-[#ffffff] hover:text-[#ff51ff] hover:border-[#ff51ff]">
              My Resume
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[40%] flex justify-center items-end">
          <img
            src={heroContent.profileImage}
            className="2xl:h-[85%] xl:h-[80%] lg:h-[75%] h-[400px]  rounded-full lg:rounded-none object-contain"
          />
        </div>
      </div>
    </div>
  );
}
