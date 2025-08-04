import {
  Mail,
  TrendingUp,
  Users,
  PencilLine,
  Component,
  Settings,
} from "lucide-react";
const Features_web = () => {
  const features = [
    {
      title: "Measure your performance",
      description:
        "Stay connected with your team and make quick decisions wherever you are.",
      icon: <Mail size={14} className="text-white" />, // beddel hadii aad leedahay icons SVG ama URLs
    },
    {
      title: "Custom analytics",
      description:
        "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
      icon: <TrendingUp size={14} className="text-white" />,
    },
    {
      title: "Team Management",
      description:
        "Our calendar lets you know what is happening with customer and projects so you",
      icon: <Users size={14} className="text-white" />,
    },
    {
      title: "Build your website",
      description:
        "A tool that lets you build a dream website even if you know nothing about web design or programming.",
      icon: <PencilLine size={14} className="text-white" />,
    },
    {
      title: "Connect multiple apps",
      description:
        "The first business platform to bring together all of your products from one place.",
      icon: <Component size={14} className="text-white" />,
    },
    {
      title: "Easy setup",
      description:
        "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
      icon: <Settings size={14} className="text-white" />,
    },
  ];

  return (
    <div className="container bg-gray-900 p-5 md:p-8 lg:p-10">
      <div className="flex justify-center items-center flex-col p-5">
        <span className="bg-indigo-500 text-white rounded p-1 my-5 text-base">
          Features
        </span>
        <h2 className="text-indigo-500 text-2xl md:text-2xl lg:text-3xl fonBold my-5">
          Gain more insight into how people use your
        </h2>
        <p className="text-white text-base">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities,
          <br /> you can manage every aspect of your business in one secure
          platform.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <>
          {features.map((feature) => (
            <div className="bg-gray-800 rounded p-4 flex justify-center items-center flex-col gap-4 cursor-pointer hover:shadow-lg shadow-indigo-500/50 transition-all duration-600 ease-in-out">
              <div className="p-3 bg-indigo-500 rounded flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="flex justfy-center items-center flex-col">
                <h2 className="text-indigo-400 font-bold text-1xl">
                  {feature.title}
                </h2>
                <p className="text-center text-gray-300 text-x">
                  {feature.description}{" "}
                </p>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Features_web;
