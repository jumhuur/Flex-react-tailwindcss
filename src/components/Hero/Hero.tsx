import Lang from "../../languages/en.json";
const HeroSection = () => {
  const dark = true;
  // const ChangeDarkstate = (): boolean => {
  //   setdark(!dark);
  //   return dark;
  // };

  return (
    <>
      <div>
        <div className="container overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-15 mb-15 ml-5 gap-15 ">
            <div className="flex justify-start items-start flex-col">
              <span className="dark:bg-gray-800 dark:shadow-4xl dark:text-gray-400 text-gray-50 text-center p-2 rounded bg-green-500 text-xs">
                {Lang.HomePage.HeroTop}
              </span>
              <h2 className="fontBold text-4xl bg-gray-800 leading-15 md:leading-15 lg:leading-20 md:text-5xl lg:text-7xl fonBold mt-5 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-indigo-400 to-gray-50  text-transparent bg-clip-text">
                {Lang.HomePage.Title}
              </h2>
              <p className="dark:text-gray-200 text-base text-gray-500 mt-4">
                {Lang.HomePage.desc}
              </p>
              <div className="flex justify-start items-center flex-col md:flex-row gap-3.5 lg:flex-row  p-5 space-4">
                <button className="bg-green-500 text-gray-50 p-3 mr-3 w-[200px] rounded cursor-pointer hover:bg-green-600  transition duration-300">
                  {Lang.HomePage.btn1}
                </button>
                <button className="cursor-pointer shadow-2xl p-3 dark:bg-gray-900 dark:text-gray-200  hover:bg-green-600 transition duration-300 hover:text-gray-50 rounded">
                  {Lang.HomePage.btn2}
                </button>
              </div>
              <div>
                <p className="text-base text-gray-400 mt-5 mb-5">
                  {Lang.HomePage.desc}
                </p>
                <div className="grid grid-cols-4 gap-3 grid-rows-1">
                  <img src="/Images/comp1.svg" />
                  <img src="/Images/comp2.svg" />
                  <img src="/Images/comp3.svg" />
                  <img src="/Images/comp4.svg" />
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full flex justify-center items-center  relative">
              <img
                src={dark ? "/Images/Hero_Dark.png" : "/Images/Hero1.png"}
                className="max-w-[365px] md:max-w-[565px] lg:max-w-[800px] block z-10  translate-x-0 md:translate-x-15 lg:translate-x-15"
              />
              <img
                // onClick={ChangeDarkstate}
                src="/Images/Parr.png"
                className="block absolute z-0 w-40 he-40 -translate-x-50 -translate-y-37"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
