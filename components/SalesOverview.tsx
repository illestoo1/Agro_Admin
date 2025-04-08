"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", revenue: 125000, orders: 180, avgOrder: 694 },
  { day: "Tue", revenue: 110500, orders: 160, avgOrder: 690 },
  { day: "Wed", revenue: 135400, orders: 195, avgOrder: 694 },
  { day: "Thu", revenue: 100200, orders: 145, avgOrder: 691 },
  { day: "Fri", revenue: 148300, orders: 215, avgOrder: 690 },
  { day: "Sat", revenue: 170000, orders: 240, avgOrder: 708 },
  { day: "Sun", revenue: 98000, orders: 140, avgOrder: 700 },
];

export default function SalesOverview() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl">
      <h2 className="text-lg font-semibold text-gray-800">
         Sales Overview
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === "revenue")
                return [`₦${value.toLocaleString()}`, "Revenue"];
              if (name === "avgOrder")
                return [`₦${value.toLocaleString()}`, "Avg. Order"];
              return [value, "Orders"];
            }}
          />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#86B159"
            name="Revenue"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="orders"
            fill="#FFA500"
            name="Orders"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="avgOrder"
            fill="#4CAF50"
            name="Avg. Order"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
