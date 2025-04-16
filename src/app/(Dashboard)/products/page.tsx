"use client";

import React, { useState } from "react";

const ProductPage = () => {
  const product = {
    id: "AG12345",
    name: "Organic Fertilizer",
    description: "High-quality organic fertilizer for better crop yield.",
    price: 25.0,
    stock: 120,
    category: "Fertilizers",
    status: "Active",
    createdAt: "2024-03-01",
    vendor: "AgriSupplies Ltd.",
    reviews: [
      { rating: 5, comment: "Great results in my farm!" },
      { rating: 4, comment: "Effective, but the smell can be improved." },
    ],
    totalSold: 450,
    totalRevenue: 11250.0,
    variants: [
      { size: "5kg", price: 25.0, stock: 60 },
      { size: "10kg", price: 45.0, stock: 60 },
    ],
  };

  const handleStatusChange = (status) => {
    // Update product status logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Product Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <button
          onClick={() =>
            handleStatusChange(
              product.status === "Active" ? "Inactive" : "Active"
            )
          }
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {product.status === "Active" ? "Deactivate" : "Activate"}
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                Product Detail
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">
                Information
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {/* Basic Product Info */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Product Name
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.name}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Category
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.category}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Description
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.description}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Price
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                ${product.price}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Stock
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.stock} units
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Vendor
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.vendor}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Created On
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(product.createdAt).toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Status
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.status === "Active" ? (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    Inactive
                  </span>
                )}
              </td>
            </tr>

            {/* Sales & Performance Data */}
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Total Sold
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {product.totalSold} units
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Total Revenue
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                ${product.totalRevenue}
              </td>
            </tr>

            {/* Variants Data */}
            <tr>
              <td
                colSpan={2}
                className="px-6 py-4 text-lg font-semibold text-gray-900"
              >
                Product Variants
              </td>
            </tr>
            {product.variants.map((variant, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {variant.size}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  ${variant.price} | {variant.stock} units available
                </td>
              </tr>
            ))}

            {/* Customer Reviews */}
            <tr>
              <td
                colSpan={2}
                className="px-6 py-4 text-lg font-semibold text-gray-900"
              >
                Customer Reviews
              </td>
            </tr>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Rating: {review.rating} stars
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Comment: {review.comment}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-sm text-gray-700">
                  No reviews yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Edit Product
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
