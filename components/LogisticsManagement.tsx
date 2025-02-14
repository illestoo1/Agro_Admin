import { useState } from "react";

const LogisticsManagement = () => {
  const [view, setView] = useState("logisticsPartners");
  const [search, setSearch] = useState("");

  // Sample data for logistics partners, applications, and performance analytics
  const [logisticsPartners] = useState([
    { id: 1, name: "FastTrack Logistics", ratings: 4.8, status: "approved" },
    { id: 2, name: "QuickMove", ratings: 4.2, status: "approved" },
    { id: 3, name: "Swift Delivery", ratings: 3.7, status: "pending" },
  ]);

  const [pendingApplications, setPendingApplications] = useState([
    { id: 1, name: "Speedy Express", status: "pending" },
    { id: 2, name: "CargoXpress", status: "pending" },
  ]);

  const [performanceReports] = useState([
    {
      id: 1,
      name: "FastTrack Logistics",
      deliveries: 500,
      responseTime: "2 hours",
      disputes: 1,
    },
    {
      id: 2,
      name: "QuickMove",
      deliveries: 350,
      responseTime: "3 hours",
      disputes: 3,
    },
    {
      id: 3,
      name: "Swift Delivery",
      deliveries: 200,
      responseTime: "4 hours",
      disputes: 2,
    },
  ]);

  const handleApproveApplication = (id: number) => {
    setPendingApplications(
      pendingApplications.map((app) =>
        app.id === id ? { ...app, status: "approved" } : app
      )
    );
  };

  const handleRejectApplication = (id: number) => {
    setPendingApplications(pendingApplications.filter((app) => app.id !== id));
  };

  const filteredLogisticsPartners = logisticsPartners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Sub-Navigation */}
      <div className="flex justify-between p-5">
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setView("logisticsPartners")}
            className={`p-2 rounded-lg ${
              view === "logisticsPartners"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Logistics Partners
          </button>
          <button
            onClick={() => setView("pendingApplications")}
            className={`p-2 rounded-lg ${
              view === "pendingApplications"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Pending Applications
          </button>
          <button
            onClick={() => setView("assignOrders")}
            className={`p-2 rounded-lg ${
              view === "assignOrders"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Assign Orders
          </button>
          <button
            onClick={() => setView("performanceReports")}
            className={`p-2 rounded-lg ${
              view === "performanceReports"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Performance Reports
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search logistics partners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      {/* Display based on selected view */}
      {view === "logisticsPartners" && (
        <div>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">
                  Ratings
                </th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogisticsPartners.map((partner) => (
                <tr key={partner.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{partner.name}</td>
                  <td className="border border-gray-200 p-2">
                    {partner.ratings}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {partner.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "pendingApplications" && (
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
              {pendingApplications.map((app) => (
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
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectApplication(app.id)}
                          className="text-red-500 border border-red-500 rounded-lg p-2 mx-1 hover:bg-red-500 hover:text-white"
                        >
                          Reject
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

      {view === "assignOrders" && (
        <div>
          
          {/* Add logic for assigning orders to logistics partners */}
          <div className="mb-4">
            <p>Choose a logistics partner and assign an order.</p>
            {/* Dropdown or input to assign orders can be added here */}
          </div>
        </div>
      )}

      {view === "performanceReports" && (
        <div>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">
                  Deliveries
                </th>
                <th className="border border-gray-200 p-2 text-left">
                  Response Time
                </th>
                <th className="border border-gray-200 p-2 text-left">
                  Disputes
                </th>
              </tr>
            </thead>
            <tbody>
              {performanceReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{report.name}</td>
                  <td className="border border-gray-200 p-2">
                    {report.deliveries}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {report.responseTime}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {report.disputes}
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

export default LogisticsManagement;
