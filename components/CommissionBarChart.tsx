// components/MonthlyCommissionChart.tsx
"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyCommissionChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Commission Earned ($)",
        data: [
          850, 720, 980, 1050, 900, 1150, 1230, 1000, 950, 1100, 1300, 1400,
        ],
        backgroundColor: "#86B159",
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200,
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 p-4">
        Monthly Commission Earned
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyCommissionChart;
