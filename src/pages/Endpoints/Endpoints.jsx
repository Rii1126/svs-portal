import React, { useState } from "react";
import { FaClipboard, FaCheck } from "react-icons/fa";

const Endpoints = () => {
  const [rpcMainnetEnabled, setRpcMainnetEnabled] = useState(true);
  const [apiMainnetEnabled, setApiMainnetEnabled] = useState(true);

  const [rpcUrlCopied, setRpcUrlCopied] = useState(false);
  const [wsUrlCopied, setWsUrlCopied] = useState(false);
  const [apiCopied, setApiCopied] = useState(false);

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="settings-page text-white p-6">
      {/* RPC URLs Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg">RPC URLs</h3>
          <div className="flex items-center space-x-4">
            <span
              className={`text-sm ${
                rpcMainnetEnabled ? "text-pink-600" : "text-gray-400"
              }`}
            >
              Mainnet
            </span>
            <div
              className={`relative w-12 h-6 bg-black border border-[#BC1350] rounded-full transition-colors duration-300 cursor-pointer ${
                rpcMainnetEnabled ? "bg-[#0A0A0A]" : "bg-[#0A0A0A]"
              }`}
              onClick={() => setRpcMainnetEnabled(!rpcMainnetEnabled)}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#BC1350] rounded-full transition-transform duration-300 ${
                  rpcMainnetEnabled ? "translate-x-1" : "translate-x-6"
                }`}
              />
            </div>
            <span
              className={`text-sm ${
                !rpcMainnetEnabled ? "text-pink-600" : "text-gray-400"
              }`}
            >
              Devnet
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">RPC URL</label>
          <div className="flex items-center bg-neutral-800 p-2 rounded">
            <input
              type="text"
              readOnly
              value={`https://${
                rpcMainnetEnabled ? "mainnet" : "devnet"
              }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`}
              className="w-full bg-transparent text-white"
            />
            <button
              className="ml-2 flex items-center justify-center p-2 bg-[#343434] hover:bg-[#444444] text-white rounded"
              onClick={() =>
                handleCopy(
                  `https://${
                    rpcMainnetEnabled ? "mainnet" : "devnet"
                  }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`,
                  setRpcUrlCopied
                )
              }
              style={{ minWidth: "40px" }}
            >
              {rpcUrlCopied ? <FaCheck /> : <FaClipboard />}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">WebSocket URL</label>
          <div className="flex items-center bg-neutral-800 p-2 rounded">
            <input
              type="text"
              readOnly
              value={`wss://${
                rpcMainnetEnabled ? "mainnet" : "devnet"
              }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`}
              className="w-full bg-transparent text-white"
            />
            <button
              className="ml-2 flex items-center justify-center p-2 bg-[#343434] hover:bg-[#444444] text-white rounded"
              onClick={() =>
                handleCopy(
                  `wss://${
                    rpcMainnetEnabled ? "mainnet" : "devnet"
                  }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`,
                  setWsUrlCopied
                )
              }
              style={{ minWidth: "40px" }}
            >
              {wsUrlCopied ? <FaCheck /> : <FaClipboard />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Solana APIs Section */}
      <div className="bg-gray-900 p-6 rounded mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg">Enhanced Solana APIs</h3>
          <div className="flex items-center space-x-4">
            <span
              className={`text-sm ${
                apiMainnetEnabled ? "text-pink-600" : "text-gray-400"
              }`}
            >
              Mainnet
            </span>
            <div
              className={`relative w-12 h-6 border border-[#BC1350] bg-black rounded-full transition-colors duration-300 cursor-pointer ${
                apiMainnetEnabled ? "bg-[#0A0A0A]" : "bg-[#0A0A0A]"
              }`}
              onClick={() => setApiMainnetEnabled(!apiMainnetEnabled)}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#BC1350] rounded-full transition-transform duration-300 ${
                  apiMainnetEnabled ? "translate-x-1" : "translate-x-6"
                }`}
              />
            </div>
            <span
              className={`text-sm ${
                !apiMainnetEnabled ? "text-pink-600" : "text-gray-400"
              }`}
            >
              Devnet
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Enhanced Solana API URL</label>
          <div className="flex items-center bg-neutral-800 p-2 rounded">
            <input
              type="text"
              readOnly
              value={`https://api-${
                apiMainnetEnabled ? "mainnet" : "devnet"
              }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`}
              className="w-full bg-transparent text-white"
            />
            <button
              className="ml-2 flex items-center justify-center p-2 bg-[#343434] hover:bg-[#444444] text-white rounded"
              onClick={() =>
                handleCopy(
                  `https://api-${
                    apiMainnetEnabled ? "mainnet" : "devnet"
                  }.solanavibestation.com/?api-key=XXXXXXXXXXXXXXX`,
                  setApiCopied
                )
              }
              style={{ minWidth: "40px" }}
            >
              {apiCopied ? <FaCheck /> : <FaClipboard />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endpoints;
