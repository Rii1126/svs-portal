import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Overview from "./Overview/Overview";
import Services from "./Services/Services";
import Purchase from "./Purchase/Purchase";
import Billing from "./Billing/Billing";
import Settings from "./Settings/Settings";
import Endpoints from "../pages/Endpoints/Endpoints";
import Apikeys from "../pages/Apikeys/Apikeys";

const Main = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#080817]">
      {/* Sidebar with toggle logic */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform transform bg-[#080817] border-r border-r-[#BC1350] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:pl-64">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/endpoints" element={<Endpoints />} />
            <Route path="/apikeys" element={<Apikeys />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/services" element={<Services />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Main;
