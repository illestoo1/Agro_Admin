import { useState } from "react";


const VendorManagement = () => {
  const [view, setView] = useState("allVendors");
  const [search, setSearch] = useState("");

  // Sample data for vendors, applications, and performance analytics
  const [vendors] = useState([
    { id: 1, name: "Mary ", products: 15, ratings: 4.5, status: "approved" },
    { id: 2, name: "Ephraim", products: 22, ratings: 4.2, status: "approved" },
    { id: 3, name: "Grace", products: 10, ratings: 3.8, status: "pending" },
  ]);

  const [vendorApplications, setVendorApplications] = useState([
    { id: 1, name: "John", status: "pending" },
    { id: 2, name: "Bash", status: "pending" },
  ]);

  const [vendorPerformance] = useState([
    { id: 1, name: "Mary", sales: 100, reviews: 120, disputes: 2 },
    { id: 2, name: "Grace", sales: 80, reviews: 90, disputes: 1 },
    { id: 3, name: "Ephraim", sales: 40, reviews: 50, disputes: 5 },
  ]);

  const handleApproveApplication = (id: number) => {
    setVendorApplications(
      vendorApplications.map((app) =>
        app.id === id ? { ...app, status: "approved" } : app
      )
    );
  };

  const handleRejectApplication = (id: number) => {
    setVendorApplications(vendorApplications.filter((app) => app.id !== id));
  };

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Sub-Navigation */}
      <div className="flex justify-between p-5">
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setView("allVendors")}
            className={`p-2 rounded-lg ${
              view === "allVendors"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            All Vendors
          </button>
          <button
            onClick={() => setView("vendorApplications")}
            className={`p-2 rounded-lg ${
              view === "vendorApplications"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Vendor Applications
          </button>
          <button
            onClick={() => setView("vendorPerformance")}
            className={`p-2 rounded-lg ${
              view === "vendorPerformance"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Vendor Performance
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search vendors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      {/* Display based on selected view */}
      {view === "allVendors" && (
        <div className="">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">
                  Products
                </th>
                <th className="border border-gray-200 p-2 text-left">
                  Ratings
                </th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{vendor.name}</td>
                  <td className="border border-gray-200 p-2">
                    {vendor.products}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {vendor.ratings}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {vendor.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "vendorApplications" && (
        <div>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
                <th className="border border-gray-200 p-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {vendorApplications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{app.name}</td>
                  <td className="border border-gray-200 p-2">{app.status}</td>
                  <td className="border border-gray-200 p-2 text-center">
                    {app.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApproveApplication(app.id)}
                          className="text-green-500 border border-green-500 rounded-lg p-2 mx-1 hover:bg-green-500 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#d1c4e9"
                              d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                            />
                            <circle cx="38" cy="38" r="10" fill="#43a047" />
                            <path
                              fill="#dcedc8"
                              d="M42.5 33.3L36.8 39l-2.7-2.7l-2.1 2.2l4.8 4.8l7.8-7.8z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleRejectApplication(app.id)}
                          className="text-red-500 border border-red-500 rounded-lg p-2 mx-1 hover:bg-red-500 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#d50000"
                              d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6m0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14m0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "vendorPerformance" && (
        <div>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">Sales</th>
                <th className="border border-gray-200 p-2 text-left">
                  Reviews
                </th>
                <th className="border border-gray-200 p-2 text-left">
                  Disputes
                </th>
              </tr>
            </thead>
            <tbody>
              {vendorPerformance.map((performance) => (
                <tr key={performance.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">
                    {performance.name}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {performance.sales}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {performance.reviews}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {performance.disputes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VendorManagement;
