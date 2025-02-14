import { useState } from "react";
import { Icon } from "@iconify/react";

const ProductManagement = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Tomatoes", category: "Vegetables", reviews: 4.5 },
    { id: 2, name: "Apples", category: "Fruits", reviews: 4.8 },
    { id: 3, name: "Wheat", category: "Grains", reviews: 4.2 },
    { id: 4, name: "Milk", category: "Dairy", reviews: 4.7 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (filter === "all" || product.category.toLowerCase() === filter) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Filters and Search */}
      <div className="flex justify-between items-center space-x-4 mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border text-white font-bold bg-[#86B159] rounded-md shadow-sm"
        >
          <option value="all">All</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="grains">Grains</option>
          <option value="dairy">Dairy</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-[#86B159]  rounded-md shadow-sm w"
        />
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-[#86B159]">
          <thead>
            <tr className="bg-[#86B159] text-white">
              <th className="p-2 border border-[#86B159] text-left">Product</th>
              <th className="p-2 border border-[#86B159] text-left">
                Category
              </th>
              <th className="p-2 border border-[#86B159] text-left">Reviews</th>
              <th className="p-2 border border-[#86B159] text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-[#eaf5dc]">
                <td className="p-2 border border-[#86B159]">{product.name}</td>
                <td className="p-2 border border-[#86B159]">
                  {product.category}
                </td>
                <td className="p-2 border border-[#86B159]">
                  {product.reviews} ★
                </td>
                <td className="p-2 border border-[#86B159] flex space-x-2">
                  <button
                    className="text-[#86B159] hover:text-green-700"
                    onClick={() => alert(`Editing product: ${product.name}`)}
                  >
                    <Icon icon="mdi:pencil" className="w-5 h-5" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => alert(`Deleting product: ${product.name}`)}
                  >
                    <Icon icon="mdi:delete" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
