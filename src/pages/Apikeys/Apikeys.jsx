import React, { useState } from "react";
import {
  FaCheck,
  FaClipboard,
  FaEye,
  FaEyeSlash,
  FaCopy,
  FaEdit,
  FaTrash,
  FaPlus,
  FaInfoCircle,
} from "react-icons/fa";

const Apikeys = ({ plan = "basic" }) => {
  const maxKeys = plan === "premium" ? 3 : 1;
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      keyName: "Iguanacandle",
      keyID: "XXXXXXXXXXXXXXXXXXXXXXXXX",
      createdAt: "8/18/2024",
      isVisible: false,
    },
  ]);

  const [copiedKey, setCopiedKey] = useState(null);

  const toggleVisibility = (index) => {
    setApiKeys((prevKeys) =>
      prevKeys.map((key, idx) =>
        idx === index ? { ...key, isVisible: !key.isVisible } : key
      )
    );
  };

  const handleCopy = (keyID) => {
    navigator.clipboard.writeText(keyID);
    setCopiedKey(keyID);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const generateNewKey = () => {
    if (apiKeys.length >= maxKeys) {
      alert(
        `You've reached the maximum number of API keys (${maxKeys}) for your ${plan} plan.`
      );
      return;
    }
    const newKey = {
      id: apiKeys.length + 1,
      keyName: `NewAPIKey${apiKeys.length + 1}`,
      keyID: "YYYYYYYYYYYYYYYYYYYYYYYYY",
      createdAt: new Date().toLocaleDateString(),
      isVisible: false,
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const handleEdit = (id) => {
    alert(`Edit API Key: ${id}`);
  };

  const handleDelete = (id) => {
    if (apiKeys.length === 1) {
      alert("You must have at least one API key.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this API key?")) {
      setApiKeys(apiKeys.filter((key) => key.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6 text-white max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-pink-500">API Keys</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center text-sm">
            <FaInfoCircle className="mr-2 text-pink-500" />
            <span>{`${apiKeys.length} / ${maxKeys} keys used`}</span>
          </div>
          <button
            onClick={generateNewKey}
            className={`bg-pink-500 text-white py-2 px-4 rounded flex items-center ${
              apiKeys.length >= maxKeys ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={apiKeys.length >= maxKeys}
          >
            <FaPlus className="mr-2" /> Generate New Key
          </button>
        </div>
      </div>

      <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg mb-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-pink-500 border-b border-[#BC1350]">
              <th className="py-2 px-2 md:px-4">Key Name</th>
              <th className="py-2 px-2 md:px-4">Key ID</th>
              <th className="py-2 px-2 md:px-4">Created At</th>
              <th className="py-2 px-2 md:px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((key, index) => (
              <tr key={key.id} className="border-b border-[#343434]">
                <td className="py-2 px-2 md:px-4">{key.keyName}</td>
                <td className="py-2 px-2 md:px-4">
                  <div className="flex items-center">
                    <span
                      className="flex-grow truncate mr-2 font-mono"
                      style={{ width: "200px", display: "inline-block" }}
                    >
                      {key.isVisible
                        ? key.keyID
                        : "••••••••••••••••••••••••••••"}
                    </span>
                    <button
                      onClick={() => toggleVisibility(index)}
                      className="text-gray-400 hover:text-white"
                    >
                      {key.isVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <button
                      onClick={() => handleCopy(key.keyID)}
                      className="ml-2 text-gray-400 hover:text-white"
                    >
                      {copiedKey === key.keyID ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </td>
                <td className="py-2 px-2 md:px-4">{key.createdAt}</td>
                <td className="py-2 px-2 md:px-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleEdit(key.id)}
                      className="text-gray-400 hover:text-white"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(key.id)}
                      className="ml-2 text-gray-400 hover:text-red-500"
                      disabled={apiKeys.length === 1}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Apikeys;
