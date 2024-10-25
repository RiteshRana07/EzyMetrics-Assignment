import React from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const PerformanceChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Performance",
        data: [10, 20, 30, 40, 70, 60],
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
        borderWidth: 2,
      },
    ],
  };

  return (<>
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
      <Chart type="line" data={chartData} />
    </div>
    </>
  );
};

export default PerformanceChart;
