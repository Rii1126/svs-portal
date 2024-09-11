import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaServer,
  FaShoppingCart,
  FaCreditCard,
  FaCog,
  FaLink,
  FaKey,
} from "react-icons/fa";
import logoImg from "../../assets/logo-img.svg";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col w-64 bg-[#080817] border-r border-r-[#BC1350] h-screen px-5 text-white">
      <div className="flex justify-between items-center mb-4">
        <Link to="/">
          <img
            src={logoImg}
            alt="nav-logo"
            className="w-24 sm:w-32 h-24 sm:h-32"
          />
        </Link>
        <button className="md:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            ></svg>
          )}
        </button>
      </div>

      <nav className="flex flex-col space-y-4">
        {/* Overview Link */}
        <Link
          to="/overview"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-white font-semibold text-sm sm:text-base ${
            isActive("/overview")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaHome className="w-5 h-5" />
          <span>Overview</span>
        </Link>

        {/* Endpoints Link */}
        <Link
          to="/endpoints"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/endpoints")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaLink className="w-5 h-5" />
          <span>Endpoints</span>
        </Link>

        {/* API Keys Link */}
        <Link
          to="/apikeys"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/apikeys")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaKey className="w-5 h-5" />
          <span>API Keys</span>
        </Link>

        {/* Services Link */}
        <Link
          to="/services"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/services")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaServer className="w-5 h-5" />
          <span>Services</span>
        </Link>

        {/* Purchase Link */}
        <Link
          to="/purchase"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/purchase")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaShoppingCart className="w-5 h-5" />
          <span>Purchase</span>
        </Link>

        {/* Billing Link */}
        <Link
          to="/billing"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/billing")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaCreditCard className="w-5 h-5" />
          <span>Billing</span>
        </Link>

        {/* Settings Link */}
        <Link
          to="/settings"
          className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm sm:text-base ${
            isActive("/settings")
              ? "bg-pink-600"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <FaCog className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
