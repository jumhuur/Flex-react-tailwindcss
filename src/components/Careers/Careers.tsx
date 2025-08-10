import Jobs from "./Jobs";

const Careers = () => {
  return (
    <div className="bg-gray-900">
      <div className="container py-5 md:py-8 lg:py-10">
        <div className="flex justify-center items-start flex-col p-5">
          <span className="bg-indigo-500 text-white rounded p-1 my-5 text-sm uppercase">
            WE ARE HIRING
          </span>
          <h2 className="text-indigo-500 text-2xl md:text-2xl lg:text-4xl fonBold my-5">
            Join our team
          </h2>
          <p className="text-white text-base">
            Our philosophy is simple — hire a team of diverse, passionate people
            <br />
            and foster a culture that empowers you to do you best work.
          </p>
        </div>
        <Jobs />
      </div>
    </div>
  );
};

export default Careers;
