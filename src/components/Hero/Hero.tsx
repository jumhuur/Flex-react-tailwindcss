const HeroSection = () => {
  return (
    <>
      <div>
        <div className="container ">
          <div className="grid lg:grid-cols-2 lg:grid-rows-1 mt-15 ml-5 gap-10">
            <div>
              <span className="text-gray-50 text-center p-2 rounded bg-green-500">
                HEADER
              </span>
              <h2 className="text-6xl text-gray-950 fonBold mt-5 leading-18">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-base text-gray-500 mt-4">
                We’re different. Flex is the only saas
                <br />
                business platform that lets you run your business.
              </p>
              <div className="flex justify-start items-center p-5 space-x-4">
                <button className="bg-green-500 text-gray-50 p-3 w-[200px] rounded cursor-pointer hover:bg-green-600  transition duration-300">
                  Request a Demo
                </button>
                <button className="cursor-pointer shadow p-3  hover:bg-green-600 transition duration-300 hover:text-gray-50 rounded transition-colors duration-300">
                  Sign Up
                </button>
              </div>
              <div>
                <p className="text-base text-shadow-gray-400 mt-5 mb-5">
                  Trusted by brands all around the world
                </p>
                <div className="grid grid-cols-4 grid-rows-1">
                  <img src="/Images/comp1.svg" />
                  <img src="/Images/comp2.svg" />
                  <img src="/Images/comp3.svg" />
                  <img src="/Images/comp4.svg" />
                </div>
              </div>
            </div>
            <div>
              <img src="/Images/Hero1.png" className="w-[944px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
