"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    day: "Mon",
    diary: 150,
    vegetables: 120,
    poultry: 90,
    inventory: 700,
  },
  {
    day: "Tue",
    diary: 180,
    vegetables: 130,
    poultry: 100,
    inventory: 650,
  },
  {
    day: "Wed",
    diary: 160,
    vegetables: 140,
    poultry: 105,
    inventory: 600,
  },
  {
    day: "Thu",
    diary: 200,
    vegetables: 160,
    poultry: 95,
    inventory: 550,
  },
  {
    day: "Fri",
    diary: 220,
    vegetables: 180,
    poultry: 130,
    inventory: 500,
  },
  {
    day: "Sat",
    diary: 240,
    vegetables: 210,
    poultry: 140,
    inventory: 450,
  },
  {
    day: "Sun",
    diary: 190,
    vegetables: 160,
    poultry: 120,
    inventory: 400,
  },
];

export default function ProductPerformance() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 p-4">
        Product Performance
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="diary"
            stroke="#86B159"
            name="Diary Sales"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="vegetables"
            stroke="#FFA500"
            name="Vegetables Sales"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="poultry"
            stroke="#4CAF50"
            name="Poultry Sales"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="inventory"
            stroke="#8884d8"
            name="Inventory Level"
            strokeDasharray="5 5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
