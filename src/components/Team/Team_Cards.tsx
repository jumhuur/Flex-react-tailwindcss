const Team_Cards = () => {
  const teamMembers = [
    {
      name: "Macauley Herring",
      position: "CEO & Founder",
      url: "Frame1.jpg",
    },
    {
      name: "Ivan Mathews",
      position: "CTO",
      url: "Frame2.png",
    },
    {
      name: "Elen Benitez",
      position: "CPO",
      url: "Frame3.jpg",
    },
    {
      name: "Macauley Herring",
      position: "Customer Success",
      url: "Frame4.jpg",
    },
    {
      name: "Alya Levine",
      position: "Backend Developer",
      url: "Frame5.jpg",
    },
    {
      name: "Rosemary Hernandez",
      position: "iOS Developer",
      url: "Frame6.jpg",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 my-10 relative">
      {teamMembers.map((team, index) => (
        <div
          key={index}
          className="nth-[1]:overflow-hidden nth-[1]:col-span-2 nth-[1]:row-span-2 nth-[1]:h-[600px]  nth-[5]:overflow-hidden nth-[5]:col-span-2 nth-[5]:row-span-2 nth-[5]:h-[600px] nth-[4]:order-6 md:nth-[4]:order-4 nth-[5]:order-4 md:nth-[5]:order-5 nth-[6]:order-5    overflow-hidden h-[300px] relative "
        >
          <div className=" absolute w-full h-[100px] z-10 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-gray-900/0 bottom-0 py-5 px-2">
            <h2 className="text-gray-100 text-base md:text-1xl lg:text-2xl font-semibold">
              {team.name}
            </h2>
            <p className="text-base md:text-xxl text-green-500">
              {team.position}
            </p>
          </div>
          <img
            className="h-full w-full object-cover grayscale-100  hover:rotate-4 hover:grayscale-0 hover:scale-115 transition-all duration-300"
            loading="lazy"
            src={`/Images/${team.url}`}
          />
        </div>
      ))}

      {/* <div className="overflow-hidden col-span-2 row-span-2 h-[600px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover z-0"
          loading="lazy"
          src="/Images/Frame1.jpg"
        />
      </div> */}

      {/* <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame5.jpg"
        />
      </div>
      <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame4.jpg"
        />
      </div>
      <div className="overflow-hidden col-span-2 row-span-2 h-[600px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame3.jpg"
        />
      </div>
      <div className="overflow-hidden h-[300px] relative">
        <div className="absolute w-full h-1/5 z-10 bg-gradient-to-t from-gray-900/90 via-gray-700/70 to-gray-900/2 bottom-0 p-2">
          <h2 className="text-green-500 text-base md:text-1xl lg:text-2xl fonBold">
            Macauley Herring
          </h2>
          <p className="text-base md:text-xxl text-gray-200">CEO & Founder</p>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src="/Images/Frame6.jpg"
        />
      </div> */}
    </div>
  );
};

export default Team_Cards;
