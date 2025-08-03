import { CircleCheckBig } from "lucide-react";
const Getstart = () => {
  return (
    <>
      <div className="container bg-gray-900 pt-15 pb-15">
        <div className="flex tems-center flex-col md:flex-row justify-center gap-10">
          <div className="w-full  md:w-1/2 flex justify-center items-center relative">
            <img className="z-10" src="/Images/cta.png" loading="lazy" />
            <img
              src="/Images/Prt.png"
              loading="lazy"
              className="absolute  -top-3 -left-3 md:-top-2 md:-left-2 lg:top-0 lg:left-0 w-[40px] h-[40px] md:w-[70px] md:h-[70px]  lg:w-[129px] lg:h-[129px] z-20"
            />
            <img
              src="/Images/Prt1.png"
              loading="lazy"
              className="absolute -right-3 lg:right-0 -bottom-3 lg:bottom-0 w-[40px] h-[40px] md:w-[70px] md:h-[70px]  lg:w-[129px] lg:h-[129px] z-0"
            />
          </div>
          <div className="w-full md:w-1/2 p-0 lg:p-10 ">
            <h2 className="text-indigo-500  text-2xl lg:text-5xl fonBold">
              Join 6,000+ startups growing with Flex
            </h2>
            <ul className="w-full text-white">
              <li className="m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl">
                <CircleCheckBig size={18} className="text-indigo-500" /> Mauris
                pellentesque congue libero nec
              </li>
              <li className="m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl">
                <CircleCheckBig size={18} className="text-indigo-500" />{" "}
                Suspendisse mollis tincidunt
              </li>
              <li className="m-3 lg:m-5 flex justify-start items-center gap-2 text-1xl lg:text-2xl">
                <CircleCheckBig size={18} className="text-indigo-500" />{" "}
                Praesent varius justo vel justo pulvinar{" "}
              </li>
            </ul>
            <div className="w-full p-10 flex justify-center items-center gap-5">
              <button className="w-1/2 cursor-pointer bg-gray-700 p-3 rounded text-white transition-all duration-200 hover:bg-indigo-500">
                Learn More
              </button>
              <button className="w-1/2 cursor-pointer bg-indigo-500 p-3 rounded text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstart;
