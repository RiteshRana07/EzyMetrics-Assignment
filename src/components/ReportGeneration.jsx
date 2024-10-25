import React from "react";

const ReportGeneration = () => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Generate Reports</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Generate PDF Report</button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-4">Generate CSV Report</button>
    </div>
  );
};

export default ReportGeneration;
