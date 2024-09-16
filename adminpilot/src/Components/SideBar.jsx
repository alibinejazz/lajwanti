import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBuilding,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Importing icons
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation(); // UseLocation hook to get current path

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <aside
        className={`bg-white text-black fixed left-0 h-full w-66 p-4 z-50 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-72`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 p-4">
            <img src={logo} alt="logo" />
            <h1 className="text-3xl">App Pilot</h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-4 mt-14 w-full">
          <Link
            to="/"
            className={`flex items-center gap-2 py-3 px-2 rounded 
              ${
                location.pathname === "/"
                  ? "bg-[#e1ecf5] text-[#4272a8]"
                  : "hover:bg-[#e1ecf5] hover:text-[#4272a8]"
              }`}
          >
            <FaTachometerAlt />
            Dashboard
          </Link>
          <Link
            to="/organizations"
            className={`flex items-center gap-2 py-3 px-2 rounded 
              ${
                location.pathname === "/organizations"
                  ? "bg-[#e1ecf5] text-[#4272a8]"
                  : "hover:bg-[#e1ecf5] hover:text-[#4272a8]"
              }`}
          >
            <FaBuilding />
            Organization Management
          </Link>
          <Link
            to="/settings"
            className={`flex items-center gap-2 py-3 px-2 rounded 
              ${
                location.pathname === "/settings"
                  ? "bg-[#e1ecf5] text-[#4272a8]"
                  : "hover:bg-[#e1ecf5] hover:text-[#4272a8]"
              }`}
          >
            <FaCog />
            Settings
          </Link>
        </nav>
      </aside>

      <div
        className={`flex-1 min-h-screen p-6 transition-all duration-300 max-md:p-0
        ${isOpen ? "ml-64" : "ml-0"} 
        md:ml-64 md:p-8`}
      >
        
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden text-2xl mb-4 focus:outline-none fixed top-7 left-4 z-50"
          >
            <FaBars />
          </button>
        )}
    
      </div>
    </div>
  );
};

export default Sidebar;
