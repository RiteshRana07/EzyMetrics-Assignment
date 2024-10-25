import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Widgets from "./components/Widgets";
import PerformanceChart from "./components/PerformanceChart";
import LeadManagement from "./components/LeadManagement";
import ReportGeneration from "./components/ReportGeneration";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-5 lg:p-10">
        <Header toggleSidebar={toggleSidebar} />

        {/* Widgets Section */}
        <Widgets />

        {/* Performance Chart */}
        <PerformanceChart />

        {/* Lead Management Section */}
        <LeadManagement />

        {/* Report Generation */}
        <ReportGeneration />
      </div>
    </div>
  );
};

export default Dashboard;
