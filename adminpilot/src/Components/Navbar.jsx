import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getHeading = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/organizations":
        return "Organization Management";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  return (
    <nav className="bg-white text-black fixed top-0 left-36 w-full h-20 flex items-center max-md:left-0">
      <div className="container mx-auto px-4 flex justify-between items-center ">
        <div className="text-xl font-bold ml-6">{getHeading()}</div>
        <div className="flex space-x-4">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Omar Ali"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-xl font-bold text-black">Omar Ali</div>
              <div className="text-sm text-gray-500">Company Owner</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
