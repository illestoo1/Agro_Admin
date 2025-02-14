import { useState } from "react";

const FinancialManagement = () => {
  const [view, setView] = useState("transactions");
  const [search, setSearch] = useState("");

  // Sample data for transactions, commissions, payout requests, and refunds
  const [transactions] = useState([
    {
      id: 1,
      vendor: "Mary",
      amount: 500,
      date: "2025-01-10",
      status: "completed",
    },
    {
      id: 2,
      vendor: "Ephraim",
      amount: 300,
      date: "2025-01-12",
      status: "pending",
    },
    {
      id: 3,
      vendor: "Grace",
      amount: 700,
      date: "2025-01-15",
      status: "completed",
    },
  ]);

  const [commissionReports] = useState([
    { id: 1, vendor: "Mary", commission: 50, sales: 500, date: "2025-01" },
    { id: 2, vendor: "Ephraim", commission: 30, sales: 300, date: "2025-01" },
    { id: 3, vendor: "Grace", commission: 70, sales: 700, date: "2025-01" },
  ]);

  const [payoutRequests, setPayoutRequests] = useState([
    {
      id: 1,
      vendor: "Mary",
      amount: 500,
      requestDate: "2025-01-10",
      status: "pending",
    },
    {
      id: 2,
      vendor: "Ephraim",
      amount: 300,
      requestDate: "2025-01-12",
      status: "approved",
    },
  ]);

  const [refunds] = useState([
    {
      id: 1,
      customer: "John",
      amount: 100,
      requestDate: "2025-01-15",
      status: "approved",
    },
    {
      id: 2,
      customer: "Sarah",
      amount: 150,
      requestDate: "2025-01-17",
      status: "pending",
    },
  ]);

  const handleApprovePayout = (id: number) => {
    setPayoutRequests(
      payoutRequests.map((request) =>
        request.id === id ? { ...request, status: "approved" } : request
      )
    );
  };

  const handleRejectPayout = (id: number) => {
    setPayoutRequests(payoutRequests.filter((request) => request.id !== id));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.vendor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Sub-Navigation */}
      <div className="flex justify-between p-6">
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setView("transactions")}
            className={`p-2 rounded-lg ${
              view === "transactions"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setView("commissionReports")}
            className={`p-2 rounded-lg ${
              view === "commissionReports"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Commission Reports
          </button>
          <button
            onClick={() => setView("payoutRequests")}
            className={`p-2 rounded-lg ${
              view === "payoutRequests"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Payout Requests
          </button>
          <button
            onClick={() => setView("refunds")}
            className={`p-2 rounded-lg ${
              view === "refunds"
                ? "bg-[#86B159] text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Refunds
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>

      {/* Display based on selected view */}
      {view === "transactions" && (
        <div>
          
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Vendor</th>
                <th className="border border-gray-200 p-2 text-left">Amount</th>
                <th className="border border-gray-200 p-2 text-left">Date</th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">
                    {transaction.vendor}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {transaction.amount}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {transaction.date}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "commissionReports" && (
        <div>
          
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Vendor</th>
                <th className="border border-gray-200 p-2 text-left">Sales</th>
                <th className="border border-gray-200 p-2 text-left">
                  Commission
                </th>
                <th className="border border-gray-200 p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {commissionReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">
                    {report.vendor}
                  </td>
                  <td className="border border-gray-200 p-2">{report.sales}</td>
                  <td className="border border-gray-200 p-2">
                    {report.commission}
                  </td>
                  <td className="border border-gray-200 p-2">{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "payoutRequests" && (
        <div>
          
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Vendor</th>
                <th className="border border-gray-200 p-2 text-left">Amount</th>
                <th className="border border-gray-200 p-2 text-left">
                  Request Date
                </th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
                <th className="border border-gray-200 p-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {payoutRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">
                    {request.vendor}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {request.amount}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {request.requestDate}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {request.status}
                  </td>
                  <td className="border border-gray-200 p-2 text-center">
                    {request.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprovePayout(request.id)}
                          className="text-green-500 border border-green-500 rounded-lg p-2 mx-1 hover:bg-green-500 hover:text-white"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectPayout(request.id)}
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

      {view === "refunds" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Refunds</h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-[#86B159] text-white">
              <tr>
                <th className="border border-gray-200 p-2 text-left">
                  Customer
                </th>
                <th className="border border-gray-200 p-2 text-left">Amount</th>
                <th className="border border-gray-200 p-2 text-left">
                  Request Date
                </th>
                <th className="border border-gray-200 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((refund) => (
                <tr key={refund.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">
                    {refund.customer}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {refund.amount}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {refund.requestDate}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {refund.status}
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

export default FinancialManagement;
