import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Billing = () => {
  // Dummy Data for Current Plan and Payment History
  const [currentPlan, setCurrentPlan] = useState({
    planName: "RPC Ultra",
    renewalDate: "2024-09-30",
    price: "$49.99/month",
  });

  const [paymentHistory, setPaymentHistory] = useState([
    {
      date: "2024-08-30",
      amount: "$49.99",
      status: "Paid",
      invoice: "INV-12345",
      paymentMethod: "Crypto",
    },
    {
      date: "2024-07-30",
      amount: "$49.99",
      status: "Paid",
      invoice: "INV-12344",
      paymentMethod: "Crypto",
    },
    {
      date: "2024-06-30",
      amount: "$49.99",
      status: "Failed",
      invoice: "INV-12343",
      paymentMethod: "Crypto",
    },
  ]);

  useEffect(() => {
    // Fetch payment history from Sellix (replace with actual API call)
    // Example: fetch('/api/sellix-payments')
    // .then(response => response.json())
    // .then(data => setPaymentHistory(data));
  }, []);

  const downloadInvoice = (invoice) => {
    alert(`Downloading invoice: ${invoice}`);
    // Trigger download action for Sellix invoice (replace with actual logic)
  };

  return (
    <div className="p-6 text-white max-w-6xl mx-auto">
      {/* Current Plan Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Current Plan</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg">
              Plan Name: <strong>{currentPlan.planName}</strong>
            </p>
            <p className="text-lg">
              Price: <strong>{currentPlan.price}</strong>
            </p>
            <p className="text-lg">
              Renewal Date: <strong>{currentPlan.renewalDate}</strong>
            </p>
          </div>
          {/* Use Link to navigate to the purchase page */}
          <Link to="/purchase">
            <button className="mt-4 md:mt-0 bg-pink-500 text-white py-2 px-4 rounded shadow-lg">
              Manage Plan
            </button>
          </Link>
        </div>
      </div>

      {/* Payment History Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          Payment History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-pink-500 border-b border-[#BC1350]">
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
                <th className="py-2">Invoice</th>
                <th className="py-2">Payment Method</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="border-b border-[#343434]">
                  <td className="py-2">{payment.date}</td>
                  <td className="py-2">{payment.amount}</td>
                  <td
                    className={`py-2 ${
                      payment.status === "Failed"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {payment.status}
                  </td>
                  <td className="py-2">{payment.invoice}</td>
                  <td className="py-2">{payment.paymentMethod}</td>
                  <td className="py-2">
                    <button
                      onClick={() => downloadInvoice(payment.invoice)}
                      className="flex items-center space-x-1 bg-[#343434] p-2 rounded hover:bg-[#444444]"
                    >
                      <FaDownload />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Crypto Payment Information */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          Crypto Payment Information
        </h2>
        <div className="text-lg">
          <p>
            Payment Method: <strong>Sellix Gateway (Crypto)</strong>
          </p>
          <p>
            Payments are processed through Sellix using supported
            cryptocurrencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billing;
