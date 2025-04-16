import React from "react";
import { notFound } from "next/navigation";

// Sample order data (simulate a fetch call)
const orders = [
  {
    id: "ORD12345",
    customer: "John Doe",
    date: "2025-04-12",
    status: "Pending",
    amount: 230.0,
    items: [
      { name: "Wireless Mouse", qty: 1, price: 50 },
      { name: "Keyboard", qty: 1, price: 180 },
    ],
  },
  {
    id: "ORD12346",
    customer: "Jane Smith",
    date: "2025-04-11",
    status: "Shipped",
    amount: 150.0,
    items: [
      { name: "Book: JavaScript Mastery", qty: 1, price: 75 },
      { name: "Notebook Set", qty: 2, price: 37.5 },
    ],
  },
];

const statusColors: Record<string, string> = {
  Pending: "text-yellow-600",
  Shipped: "text-blue-600",
  Delivered: "text-green-600",
  Cancelled: "text-red-600",
};

export default function OrderDetails({
  params,
}: {
  params: { orderId: string };
}) {
  const order = orders.find((o) => o.id === params.orderId);

  if (!order) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Order Details</h1>

      <div className="bg-white shadow-md rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Order ID:</span>
          <span>{order.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Customer:</span>
          <span>{order.customer}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date:</span>
          <span>{order.date}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Status:</span>
          <span className={statusColors[order.status]}>{order.status}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total Amount:</span>
          <span>${order.amount}</span>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Ordered Items</h2>
        <ul className="divide-y divide-gray-100">
          {order.items.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
