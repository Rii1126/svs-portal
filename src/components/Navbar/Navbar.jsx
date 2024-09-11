import React, { useState, useEffect, useRef } from "react";
import {
  FaCaretDown,
  FaCog,
  FaSignOutAlt,
  FaCopy,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { removeTokenCookie } from "../../utils/cookieUtils";
import { useContextAuthManager } from "../../providers/auth-provider";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { userInfo } = useContextAuthManager();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setTimeout(() => {
      // Clear token
      removeTokenCookie();

      // Redirect to the sign-in page
      navigate("/signin");
    }, 2000); // 2-second delay
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(userInfo?.email);
    console.log("Address copied!");
    if (userInfo.cryptoAddress) {
      navigator.clipboard.writeText(userInfo.cryptoAddress);
      console.log("Address copied!");
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div
      className="bg-[#080817] border-y-[#BC1350] border-t-0 border-b px-4 sm:px-8 sm:py-10 flex justify-between items-center text-white"
      style={{ height: "120px" }}
    >
      <button className="md:hidden" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
      </button>

      <div className="flex-1"></div>

      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <div className="rounded-full bg-pink-500 p-2">
            <img
              src="https://placehold.co/32x32"
              alt="Profile"
              className="rounded-full w-8 h-8"
            />
          </div>
          <div className="text-xs sm:text-sm">
            {userInfo?.provider === "crypto"
              ? `${userInfo?.cryptoAddress.slice(
                  0,
                  4
                )}...${userInfo.cryptoAddress.slice(-4)}`
              : userInfo?.displayName || userInfo?.email}
          </div>
          <FaCaretDown className="ml-1" />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 border mr-2 border-neutral-500 bg-[#0E0E20] text-white rounded-lg shadow-lg z-50">
            <ul className="py-2 text-left">
              {/* Render based on the login method */}
              {userInfo?.provider === "crypto" ? (
                <>
                  <li className="px-4 py-2 hover:bg-pink-600 cursor-pointer flex items-center">
                    <span
                      onClick={handleCopyAddress}
                      className="flex items-center w-full"
                    >
                      <FaCopy className="mr-2" /> Copy Address
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="px-4 py-2 hover:bg-pink-600 cursor-pointer flex items-center">
                    <Link to="/settings" className="flex items-center w-full">
                      <FaCog className="mr-2" /> Settings
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-pink-600 cursor-pointer flex items-center">
                    <FaQuestionCircle className="mr-2" />
                    <a href="https://discord.gg/solanavibestation">Support</a>
                  </li>
                </>
              )}

              <li
                className="px-4 py-2 hover:bg-pink-600 cursor-pointer flex items-center text-red-500"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
