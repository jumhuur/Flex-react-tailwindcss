import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="dark:bg-gray-500">
      <div className="container h-[80px]">
        <div className="grid lg:grid-cols-[1fr_6fr_1.5fr] gap-3">
          <div className="flex justify-center items-center">
            <img src="/Images/Logo.png" />
          </div>
          <div>
            <ul className="h-[80px] flex justify-center items-center space-x-4">
              <li className=" flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 hover:text-gray-900 transition duration-300 capitalize"
                  to={"#"}
                >
                  Product
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300">
                <Link
                  className="text-base text-gray-900 hover:text-gray-900 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Features
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 hover:text-gray-900 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Pricing
                </Link>
              </li>
              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 hover:text-gray-900 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Resources
                </Link>
              </li>

              <li className="flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-green-500 transition duration-300 ">
                <Link
                  className="text-base text-gray-900 hover:text-gray-900 transition-colors duration-300 capitalize"
                  to={"#"}
                >
                  Mode
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-evenly items-center">
            <button className="text-gray-500 text-base rounded p-2 capitalize cursor-pointer">
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
