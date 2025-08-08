import Team_Cards from "./Team_Cards";

const Team = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="container py-5 md:py-8 lg:py-10">
          <div className="w-full flex justify-center items-start flex-col md:flex-row pl-10 gap-3">
            <div className="w-full md:w-1/2 flex justify-center items-start flex-col gap-3">
              <span className="bg-indigo-500 text-white rounded p-1 my-5 text-base">
                Team
              </span>
              <h2 className="text-indigo-500 text-2xl md:text-3xl lg:text-5xl fonBold capitalize">
                Meet our team
              </h2>
              <p className="text-base md:text-1xl lg:text-[1.2rem] text-gray-400">
                Highly professional and capable of running
                <br />
                your business across all digital channels.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-10 flex justify-center items-center flex-col sm:flex-row md:flex-row gap-5">
              <button className="w-full md:w-1/2 cursor-pointer bg-gray-700 p-3 rounded text-white   hover:bg-indigo-500 duration-300 transition-all">
                We are hiring
              </button>
              <button className="w-full md:w-1/2 cursor-pointer bg-indigo-500  hover:bg-gray-700 p-3 rounded text-white duration-300 transition-all">
                Our Culture
              </button>
            </div>
          </div>
          <Team_Cards />
        </div>
      </div>
    </>
  );
};

export default Team;
