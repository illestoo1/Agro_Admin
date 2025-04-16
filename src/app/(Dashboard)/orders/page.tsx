"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../../../../components/Card";

const orders = [
  {
    id: "ORD12345",
    customer: "John Doe",
    date: "2025-04-12",
    status: "Pending",
    payment_status: "paid",
    amount: 230.0,
  },
  {
    id: "ORD12346",
    customer: "Jane Smith",
    date: "2025-04-11",
    status: "Shipped",
    payment_status: "pending",
    amount: 150.0,
  },
  {
    id: "ORD12347",
    customer: "Ali Musa",
    date: "2025-04-10",
    status: "Delivered",
    payment_status: "paid",
    amount: 310.0,
  },
  {
    id: "ORD12348",
    customer: "Chioma Obi",
    date: "2025-04-09",
    status: "Cancelled",
    payment_status: "failed",
    amount: 180.0,
  },
  {
    id: "ORD12349",
    customer: "Peter Adams",
    date: "2025-04-08",
    status: "Pending",
    payment_status: "pending",
    amount: 200.0,
  },
  {
    id: "ORD12350",
    customer: "Linda Ikeji",
    date: "2025-04-07",
    status: "Delivered",
    payment_status: "paid",
    amount: 320.0,
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const paymentStatusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  paid: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-700",
};

export default function OrderPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toDate, setToDate] = useState("");

  const itemsPerPage = 4;

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter ? order.status === statusFilter : true;

    const orderDate = new Date(order.date);
    const isAfterFromDate = fromDate ? orderDate >= new Date(fromDate) : true;
    const isBeforeToDate = toDate ? orderDate <= new Date(toDate) : true;

    return matchesSearch && matchesStatus && isAfterFromDate && isBeforeToDate;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleViewMore = (orderId: string) => {
    router.push(`/admin/orders/${orderId}`);
  };

  const CardGrid = () => {
    const cards = [
      {
        title: "Vendors",
        icon: "mdi:person",
        percentage: 75,
        unit: { before: "Visits", after: "Today" },
      },
      {
        title: "Orders",
        icon: "mdi:shopping",
        percentage: 50,
        unit: { before: "Sales", after: "This Week" },
      },
      {
        title: "Products",
        icon: "mdi:shopping",
        percentage: 90,
        unit: { before: "Reports", after: "This Month" },
      },
      {
        title: "Commission",
        icon: "mdi:email",
        percentage: 65,
        unit: { before: "Emails", after: "Unread" },
      },
    ];

    return (
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              percentage={card.percentage}
              unit={card.unit}
            />
          ))}
        </div>

        {/* Filters */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <input
              type="text"
              placeholder="Search Order ID or Customer"
              className="px-4 py-2 border rounded shadow-sm w-full sm:w-1/3"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />

            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border rounded shadow-sm w-full sm:w-1/4"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <input
              type="date"
              className="px-3 py-2 border rounded shadow-sm w-full sm:w-1/6"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Order ID",
                  "Customer",
                  "Date",
                  "Status",
                  "Payment Status",
                  "Total",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {currentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        paymentStatusColors[order.payment_status]
                      }`}
                    >
                      {order.payment_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ${order.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleViewMore(order.id)}
                      className="text-green-600 hover:underline"
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
              {currentOrders.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center px-6 py-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">Page {currentPage}</span>
            <button
              onClick={handleNext}
              disabled={indexOfLastItem >= filteredOrders.length}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <CardGrid />;
}
