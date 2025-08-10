import { CircleArrowRightIcon } from "lucide-react";
const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Responsible for building the user-facing side of applications using HTML, CSS, JavaScript, and modern frameworks like React or Vue.",
    },
    {
      id: 2,
      title: "Backend Developer",
      desc: "Builds and maintains the server-side logic, databases, and APIs that power applications.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      desc: "Works on both frontend and backend parts of an application, handling end-to-end development.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      desc: "Focuses on automating deployments, managing cloud infrastructure, and ensuring system reliability.",
    },
    {
      id: 5,
      title: "Mobile App Developer",
      desc: "Develops mobile applications for Android and iOS platforms using native or cross-platform frameworks.",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      desc: "Designs intuitive and engaging user interfaces and experiences for digital products.",
    },
    {
      id: 7,
      title: "QA Engineer",
      desc: "Tests and ensures the quality of software through manual and automated testing.",
    },
    {
      id: 8,
      title: "Cloud Engineer",
      desc: "Builds and maintains cloud-based systems and services, ensuring scalability and security.",
    },
    {
      id: 9,
      title: "API Developer",
      desc: "Specializes in designing, developing, and maintaining APIs for applications and integrations.",
    },
  ];

  return (
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 md:p-6 lg:p-6 gap-6">
      {jobs.map((Job) => (
        <div
          key={Job.id}
          className="bg-gray-800 rounded  p-2 md:p-4 flex justify-center items-center"
        >
          <div className="w-2/3">
            <h2 className="font-medium text-base md:text-1xl text-indigo-500 capitalize m-1">
              {Job.title}
            </h2>
            <p className="text-gray-50 text-base capitalize">{Job.desc}</p>
          </div>
          <div className="flex justify-center items-start w-1/3 h-full">
            <button className=" flex justify-center items-center text-[14px] bg-transparent text-indigo-500 font-medium capitalize rounded p-2 gap-1 cursor-pointer hover:bg-indigo-700 hover:text-gray-50 transition-all duration-300">
              View Job <CircleArrowRightIcon />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
