import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaClipboard, FaCheck } from "react-icons/fa";
import { userApi } from "../../api/apiServices";
import "../../components/Styles/Styles.css";

const Overview = () => {
  const [isMainnet, setIsMainnet] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [rpcUrls, setRpcUrls] = useState({ mainnet: "", devnet: "" });
  const [services, setServices] = useState();
  const [serviceId, setServiceId] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [totalRpcCalls, setTotalRpcCalls] = useState(0);
  const [status, setStatus] = useState("Active");
  const [rpcMainnetCopied, setRpcMainnetCopied] = useState(false);
  const [rpcDevnetCopied, setRpcDevnetCopied] = useState(false);
  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchServiceDetails = async () => {
      try {
        const response = await userApi.retrieveServices();
        if (response) {
          setServices(response);
        }
      } catch (error) {
        console.log('error', error)
      }
    };

    // Call the async function
    fetchServiceDetails();
  }, []); // Empty dependency array to only run on mount

  const filteredService = useMemo(() => {
    return services?.filter(item => item.service_id == serviceId)?.[0]
  }, [services, serviceId])

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleTestApiKey = () => {
    if (apiKey) {
      console.log("Testing API Key:", apiKey);
      alert(`API Key ${apiKey} tested successfully!`);
    } else {
      alert("Please enter an API key before testing.");
    }
  };

  const handlePlanChange = (e) => {
    setServiceId(e.target.value);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 text-white">
      {/* Selected Plan Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-3 flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg">
          <div className="mb-4 lg:mb-0">
            <div className="text-pink-500 text-xl md:text-2xl lg:text-4xl font-bold">
              Selected Plan
            </div>
            <div className="text-white mt-2 text-sm md:text-base">
              Service Name: {filteredService?.service_name}
            </div>
            <div className="text-white mt-2 text-sm md:text-base">
              Tier Name: [{filteredService?.tier_name}]
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto">
            <select
              onChange={handlePlanChange}
              className="w-full lg:w-auto bg-[#0A0A0A] text-white border border-[#BC1350] p-2 rounded-lg mb-4 lg:mb-0 lg:mr-4 text-xs md:text-sm"
            >
              {services?.map(item => (
                <option key={item.service_id} value={item.service_id}>{item.service_name}</option>
              ))}
            </select>
            <button className="w-full lg:w-auto btn-grad text-xs md:text-sm lg:text-base py-2 px-4 rounded-full shadow-lg transition-all duration-500">
              Manage Plan
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-white text-sm md:text-base lg:text-lg">
            Total RPC Calls
          </h2>
          <div className="text-pink-500 text-2xl md:text-3xl lg:text-4xl font-bold">
            {totalRpcCalls}
          </div>
        </div>
        <div className="lg:col-span-1 bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-white text-sm md:text-base lg:text-lg">Status</h2>
          <div className="text-pink-500 text-2xl md:text-3xl lg:text-4xl font-bold">
            {status}
          </div>
        </div>
      </div>

      {/* Current Plan URLs Section */}
      <div className="bg-[#0A0A0A] border border-[#AAAAAA] p-4 md:p-6 rounded-lg">
        <h2 className="text-pink-500 text-sm md:text-base lg:text-lg mb-4">
          Current Plan URLs
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 rounded flex flex-col md:flex-row items-start md:items-center">
            <span className="text-white text-sm md:text-base mr-0 md:mr-4 mb-4 md:mb-0">
              {filteredService?.connection_url}
            </span>
            <input
              type="text"
              className="flex-grow bg-transparent text-white text-sm md:text-base p-2 outline-none mb-4 md:mb-0"
              value={filteredService?.connection_url}
              readOnly
            />
            <button
              className="ml-0 md:ml-4 bg-pink-500 p-2 rounded"
              onClick={() => handleCopy(filteredService?.connection_url, setRpcMainnetCopied)}
            >
              {rpcMainnetCopied ? <FaCheck /> : <FaClipboard />}
            </button>
          </div>
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 rounded flex flex-col md:flex-row items-start md:items-center">
            <span className="text-white text-sm md:text-base mr-0 md:mr-4 mb-4 md:mb-0">
              {filteredService?.connection_url}
            </span>
            <input
              type="text"
              className="flex-grow bg-transparent text-white text-sm md:text-base p-2 outline-none mb-4 md:mb-0"
              value={filteredService?.connection_url}
              readOnly
            />
            <button
              className="ml-0 md:ml-4 bg-pink-500 p-2 rounded"
              onClick={() => handleCopy(filteredService?.connection_url, setRpcDevnetCopied)}
            >
              {rpcDevnetCopied ? <FaCheck /> : <FaClipboard />}
            </button>
          </div>
        </div>
      </div>

      {/* Test API Key Section */}
      <div className="bg-[#0A0A0A] border border-[#AAAAAA] p-4 md:p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
          <h2 className="text-pink-500 text-sm md:text-base lg:text-lg">
            Test API Key
          </h2>
          <button
            onClick={handleTestApiKey}
            className="w-full lg:w-auto bg-pink-500 text-xs md:text-sm lg:text-base text-white px-4 py-2 rounded mt-4 lg:mt-0"
          >
            Test API Key
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center bg-gray-900 border border-[#BC1350] p-3 md:p-4 rounded">
          <input
            type="text"
            className="w-full bg-transparent text-white text-xs md:text-sm lg:text-base p-2 outline-none mb-2 lg:mb-0"
            placeholder="Enter your API key here..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            onClick={() => handleCopy(apiKey, setApiKeyCopied)}
            className="ml-0 lg:ml-4 bg-pink-500 p-2 rounded"
          >
            {apiKeyCopied ? <FaCheck /> : <FaClipboard />}
          </button>
        </div>
      </div>

      {/* Developer's Toolkit Section */}
      <div className="bg-[#0A0A0A] border border-[#AAAAAA] p-4 md:p-6 rounded-lg">
        <h2 className="text-pink-500 text-sm md:text-base lg:text-lg mb-4">
          Developer's Toolkit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-3 md:p-4 rounded flex items-center justify-center">
            <span className="text-white text-xs md:text-sm lg:text-base">
              DOCUMENTATION
            </span>
          </div>
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-3 md:p-4 rounded flex items-center justify-center">
            <span className="text-white text-xs md:text-sm lg:text-base">
              SVS API's, RPC, gRPC
            </span>
          </div>
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-3 md:p-4 rounded flex items-center justify-center">
            <span className="text-white text-xs md:text-sm lg:text-base">
              READ OUR API DOCS
            </span>
          </div>
          <div className="bg-[#0A0A0A] border border-[#BC1350] p-3 md:p-4 rounded flex items-center justify-center">
            <span className="text-white text-xs md:text-sm lg:text-base">
              DISCORD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
