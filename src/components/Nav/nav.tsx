import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [dark, setdark] = useState<boolean>(true);
  const ChangeDarkstate = (): boolean => {
    setdark(!dark);
    return dark;
  };
  return (
    <nav className="h-[80px]" onClick={ChangeDarkstate}>
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-center lg:grid-cols-[1fr_6fr_1.5fr] gap-3">
          <div className="h-[80px] flex justify-start items-center">
            <img src={dark ? "/Images/LogoDark.svg" : "/Images/Logo.png"} />
          </div>
          <div className="hidden lg:block">
            <ul className="h-[80px] flex justify-center items-center space-x-4">
              <li className=" flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 transition duration-300 capitalize"
                  to={"#"}
                >
                  Product
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300">
                <Link
                  className="text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Features
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Pricing
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50  transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Resources
                </Link>
              </li>

              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-gray-50 dark:text-white transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Mode
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-[80px] hidden lg:flex justify-evenly items-center">
            <button className="dark:text-gray-200 dark:hover:bg-gray-900 hover:bg-gray-500 transition-all duration-300 text-gray-500 text-base rounded p-2 capitalize cursor-pointer">
              Login
            </button>
            <button className="bg-green-500 text-gray-50 text-base rounded p-2 cursor-pointer capitalize">
              Singup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
