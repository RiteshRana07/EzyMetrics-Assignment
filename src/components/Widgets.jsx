import React from "react";

const Widgets = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Total Leads</h2>
        <p className="text-3xl font-bold text-indigo-600">125</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
        <p className="text-3xl font-bold text-green-600">$12,500</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Completed Projects</h2>
        <p className="text-3xl font-bold text-red-600">35</p>
      </div>
    </div>
  );
};

export default Widgets;
