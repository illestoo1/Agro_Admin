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
    maize: 150,
    vegetables: 120,
    yam: 90,
    inventory: 700,
  },
  {
    day: "Tue",
    maize: 180,
    vegetables: 130,
    yam: 100,
    inventory: 650,
  },
  {
    day: "Wed",
    maize: 160,
    vegetables: 140,
    yam: 105,
    inventory: 600,
  },
  {
    day: "Thu",
    maize: 200,
    vegetables: 160,
    yam: 95,
    inventory: 550,
  },
  {
    day: "Fri",
    maize: 220,
    vegetables: 180,
    yam: 130,
    inventory: 500,
  },
  {
    day: "Sat",
    maize: 240,
    vegetables: 210,
    yam: 140,
    inventory: 450,
  },
  {
    day: "Sun",
    maize: 190,
    vegetables: 160,
    yam: 120,
    inventory: 400,
  },
];

export default function ProductPerformance() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
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
            dataKey="maize"
            stroke="#86B159"
            name="Maize Sales"
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
            dataKey="yam"
            stroke="#4CAF50"
            name="Yam Sales"
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
