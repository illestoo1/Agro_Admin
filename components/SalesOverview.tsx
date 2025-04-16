// components/StackedBarChart.tsx
"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ["Vendor A", "Vendor B", "Vendor C", "Vendor D"],
    datasets: [
      {
        label: "Grains",
        data: [10000, 7000, 4500, 6000],
        backgroundColor: "#86B159", // Green
      },
      {
        label: "Vegetables",
        data: [5000, 4000, 2500, 3000],
        backgroundColor: "#4B9CD3", // Blue
      },
      {
        label: "Fruits",
        data: [3000, 2000, 1500, 1800],
        backgroundColor: "#F4A259", // Orange
      },
      {
        label: "Livestock",
        data: [8000, 5000, 3500, 4000],
        backgroundColor: "#A3A1FB", // Purple
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#374151", // gray-700
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (context: any) {
            return `${
              context.dataset.label
            }: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category" as const,
        stacked: true,
        ticks: {
          color: "#6B7280", // gray-500
        },
      },
      y: {
        type: "linear" as const,
        stacked: true,
        ticks: {
          beginAtZero: true,
          color: "#6B7280",
          callback: (value: number) => `$${value / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="bg-white  rounded-2xl shadow-md max-w-4xl w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 p-4">
        Monthly Revenue per Vendor 
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
