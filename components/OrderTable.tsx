"use client"; // Add this line at the top

import React, { useState } from "react";

type Order = {
  id: number;
  name: string;
  date: string;
  category: string;
  status: string;
  city: string;
  total: string;
};

const orders: Order[] = [
  {
    id: 1,
    name: "Rice",
    date: "27/06/24",
    category: "Grain",
    status: "to-process",
    city: "Jos",
    total: "$183",
  },
  {
    id: 2,
    name: "Poultey",
    date: "27/06/24",
    category: "Livestock",
    status: "to-process",
    city: "Kano",
    total: "$2,499",
  },
  {
    id: 3,
    name: "Milk",
    date: "26/06/24",
    category: "Diary",
    status: "completed",
    city: "Bauchi",
    total: "$234",
  },
  {
    id: 4,
    name: "Goat",
    date: "23/06/24",
    category: "Meat",
    status: "on-delivery",
    city: "New York",
    total: "$231",
  },
  {
    id: 5,
    name: "Beans",
    date: "23/06/24",
    category: "Grain",
    status: "canceled",
    city: "Gombe",
    total: "$231",
  },
];

const statusOptions = [
  "all",
  "drafts",
  "to-process",
  "completed",
  "canceled",
  "on-delivery",
];

export default function OrdersTable() {
  const [filter, setFilter] = useState<string>("all");

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="p-5 min-h-screen">
      {/* Filter Buttons */}
      <div className="mb-4 flex space-x-2 p-4 font-bold">
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg  text-black ${
              filter === status
                ? "border-[#86B159] text-red-400 bg-black"
                : "bg-yellow-400 hover:bg-gray-300"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-[#86B159] text-white">
              <th className="p-4 border-b border-gray-200 text-left">Order</th>
              <th className="p-4 border-b border-gray-200 text-left">Date</th>
              <th className="p-4 border-b border-gray-200 text-left">
                Category
              </th>
              <th className="p-4 border-b border-gray-200 text-left">Status</th>
              <th className="p-4 border-b border-gray-200 text-left">City</th>
              <th className="p-4 border-b border-gray-200 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-4 border-b border-gray-200">{order.name}</td>
                <td className="p-4 border-b border-gray-200">{order.date}</td>
                <td className="p-4 border-b border-gray-200">
                  {order.category}
                </td>
                <td className="p-4 border-b border-gray-200">
                  <span
                    className={`px-2 py-1 text-sm rounded-md ${
                      order.status === "to-process"
                        ? "bg-yellow-500 text-yellow-700"
                        : order.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "on-delivery"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </td>
                <td className="p-4 border-b border-gray-200">{order.city}</td>
                <td className="p-4 border-b border-gray-200">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No orders found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
