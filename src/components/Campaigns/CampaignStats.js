import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CampaignStats = () => {
  const stats = {
    engagementRate: "42.7%",
    totalReach: "46,000",
    weeklyData: [
      { week: 1, reach: 10000, engagement: 15 },
      { week: 2, reach: 20000, engagement: 25 },
      { week: 3, reach: 35000, engagement: 35 },
      { week: 4, reach: 46000, engagement: 42 },
    ],
  };

  // Prepare data for the chart
  const data = {
    labels: stats.weeklyData.map((data) => `Week ${data.week}`),
    datasets: [
      {
        label: "Reach",
        data: stats.weeklyData.map((data) => data.reach),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Engagement (%)",
        data: stats.weeklyData.map((data) => data.engagement),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {/* Engagement Rate and Total Reach */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-600">Engagement Rate</h3>
          <span className="text-xl font-semibold">{stats.engagementRate}</span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-gray-600">Total Reach</h3>
          <span className="text-xl font-semibold">{stats.totalReach}</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
