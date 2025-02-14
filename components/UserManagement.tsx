import { useState } from "react";
import { Icon } from "@iconify/react";

const UserManagement = () => {
  const [view, setView] = useState("customers"); // This controls which section you're viewing
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
      email: string;
      role: "customer" | "support" | "admin";
    }[]
  >([
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "customer" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "support",
    },
  ]);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id: number) => {
    alert(`Edit functionality for user ID: ${id}`);
  };

  // Filter users based on the selected "view" and search query
  const filteredUsers = users.filter(
    (user) =>
      (view === "all" || user.role === view) && // Filter by role (view)
      user.name.toLowerCase().includes(search.toLowerCase()) // Search filter
  );

  return (
    <div className="p-6">
       {/* Sub-Navigation */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setView("customer")}
          className={`p-2 rounded-lg ${
            view === "customer"
              ? "bg-[#86B159] text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          Customers
        </button>
        <button
          onClick={() => setView("admin")}
          className={`p-2 rounded-lg ${
            view === "admin"
              ? "bg-[#86B159] text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          Admin Users
        </button>
        <button
          onClick={() => setView("support")}
          className={`p-2 rounded-lg ${
            view === "support"
              ? "bg-[#86B159] text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          Support Team
        </button>
        <button
          onClick={() => setView("all")}
          className={`p-2 rounded-lg ${
            view === "all"
              ? "bg-[#86B159] text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          All Users
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* User Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-[#86B159] text-white">
          <tr>
            <th className="border border-gray-200 p-2 text-left">Name</th>
            <th className="border border-gray-200 p-2 text-left">Email</th>
            <th className="border border-gray-200 p-2 text-left">Role</th>
            <th className="border border-gray-200 p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 p-2">{user.name}</td>
              <td className="border border-gray-200 p-2">{user.email}</td>
              <td className="border border-gray-200 p-2 capitalize">
                {user.role}
              </td>
              <td className="border border-gray-200 p-2 text-center">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-[#86B159] border border-[#86B159] rounded-lg p-2 mx-1 hover:bg-[#86B159] hover:text-white"
                >
                  <Icon icon="mdi:pencil" width="16" />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 border border-red-500 rounded-lg p-2 mx-1 hover:bg-red-500 hover:text-white"
                >
                  <Icon icon="mdi:trash-can" width="16" />
                </button>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="border border-gray-200 p-2 text-center text-gray-500"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
