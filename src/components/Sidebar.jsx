import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaUser, FaFileAlt, FaChartPie, FaBars } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden lg:block lg:w-64 bg-indigo-600 p-5 text-white">
        <h2 className="text-2xl font-bold mb-6">EzyMetrics</h2>
        <nav>
          <Link to="/" className="block py-2 px-4 rounded hover:bg-indigo-700"><FaChartBar className="inline-block mr-2" /> Dashboard</Link>
          <Link to="/leads" className="block py-2 px-4 rounded hover:bg-indigo-700"><FaUser className="inline-block mr-2" /> Leads</Link>
          <Link to="/analytics" className="block py-2 px-4 rounded hover:bg-indigo-700"><FaChartPie className="inline-block mr-2" /> Analytics</Link>
          <Link to="/reports" className="block py-2 px-4 rounded hover:bg-indigo-700"><FaFileAlt className="inline-block mr-2" /> Reports</Link>
        </nav>
      </div>

      {/* Sidebar for mobile screens */}
      <div className={`fixed inset-y-0 left-0 bg-indigo-600 p-5 w-64 z-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">EzyMetrics</h2>
          <button className="text-white" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <nav>
          <Link to="/" className="block py-2 px-4 rounded hover:bg-indigo-700" onClick={toggleSidebar}><FaChartBar className="inline-block mr-2" /> Dashboard</Link>
          <Link to="/leads" className="block py-2 px-4 rounded hover:bg-indigo-700" onClick={toggleSidebar}><FaUser className="inline-block mr-2" /> Leads</Link>
          <Link to="/analytics" className="block py-2 px-4 rounded hover:bg-indigo-700" onClick={toggleSidebar}><FaChartPie className="inline-block mr-2" /> Analytics</Link>
          <Link to="/reports" className="block py-2 px-4 rounded hover:bg-indigo-700" onClick={toggleSidebar}><FaFileAlt className="inline-block mr-2" /> Reports</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
