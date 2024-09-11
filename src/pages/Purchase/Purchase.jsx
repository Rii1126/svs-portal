import React, { useState } from "react";
import { FaBolt, FaCloud, FaServer, FaRocket } from "react-icons/fa";

const Purchase = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  const services = [
    {
      title: "RPC Services",
      icon: <FaBolt />,
      description:
        "Reliable RPC services with high availability and performance.",
      tiers: [
        { name: "Basic", description: "250 Requests/sec, 1 API Key" },
        { name: "Premium", description: "500 Requests/sec, 2 API Keys" },
      ],
      durations: ["Daily", "Weekly", "Monthly"],
    },
    {
      title: "Staked RPC Services",
      icon: <FaRocket />,
      description:
        "Enhanced transaction prioritization through staked validators.",
      tiers: [
        { name: "Standard", description: "Standard transaction priority" },
        { name: "Priority", description: "Higher transaction priority" },
      ],
      durations: ["Daily", "Weekly", "Monthly"],
    },
    {
      title: "gRPC Services",
      icon: <FaCloud />,
      description:
        "Real-time gRPC streaming services for high-volume applications.",
      tiers: [
        { name: "Standard", description: "Up to 3 streams simultaneously" },
        { name: "Elite", description: "Up to 10 streams simultaneously" },
      ],
      durations: ["Daily", "Weekly", "Monthly"],
    },
    {
      title: "VPS Services",
      icon: <FaServer />,
      description: "Customizable private VPS nodes with dedicated resources.",
      tiers: [
        { name: "Basic VPS", description: "Predefined VPS specs" },
        { name: "Custom VPS", description: "Fully customizable VPS specs" },
      ],
      durations: ["Monthly"],
    },
  ];

  const handleSelectService = (service) => {
    setSelectedService(service);
    setSelectedTier(null);
    setSelectedDuration(null);
  };

  const handleCheckout = () => {
    alert(
      `Service: ${selectedService?.title}, Tier: ${selectedTier}, Duration: ${selectedDuration}`
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Choose a Service</h1>

      {/* Responsive service list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg cursor-pointer flex flex-col justify-around transition-transform transform min-h-[220px] ${
              selectedService?.title === service.title
                ? "border-pink-600"
                : "border-gray-700"
            }`}
            onClick={() => handleSelectService(service)}
          >
            <div className="flex items-center space-x-4 mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-100">
                {service.title}
              </h2>
            </div>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Dropdown: Show tiers and durations */}
      {selectedService && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            Select a Tier and Duration for {selectedService.title}
          </h2>

          {/* Tier options */}
          <div className="mb-4">
            <h3 className="text-lg text-gray-300 mb-2">Select Tier:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedService?.tiers?.map((tier, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedTier === tier.name
                      ? "bg-pink-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  {tier.name}
                </button>
              ))}
            </div>
            {selectedTier && (
              <p className="text-sm text-gray-300 mt-2">
                {
                  selectedService?.tiers?.find((t) => t.name === selectedTier)
                    ?.description
                }
              </p>
            )}
          </div>

          {/* Duration options */}
          <div className="mb-6">
            <h3 className="text-lg text-gray-300 mb-2">Select Duration:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedService?.durations?.map((duration, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDuration === duration
                      ? "bg-pink-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* VPS Customization */}
          {selectedService.title === "VPS Services" &&
            selectedTier === "Custom VPS" && (
              <div className="mb-6 p-4 bg-gray-900 rounded-lg">
                <h3 className="text-lg text-gray-300 mb-4">
                  Customize Your VPS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      CPU (vCPUs)
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="16"
                      className="w-full p-2 bg-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Memory (GB)
                    </label>
                    <input
                      type="number"
                      min="4"
                      max="64"
                      className="w-full p-2 bg-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Storage (GB)
                    </label>
                    <input
                      type="number"
                      min="50"
                      max="1000"
                      className="w-full p-2 bg-gray-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Bandwidth (Gbps)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="w-full p-2 bg-gray-700 rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Checkout Section */}
          {selectedTier && selectedDuration && (
            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                Checkout
              </h3>
              <p className="text-gray-300 mb-4">
                You are about to purchase the <strong>{selectedTier}</strong>{" "}
                tier for <strong>{selectedService.title}</strong> on a{" "}
                <strong>{selectedDuration}</strong> plan.
              </p>
              <button
                className="px-6 py-3 bg-pink-600 text-white font-bold rounded-lg shadow hover:bg-pink-700 transition"
                onClick={handleCheckout}
              >
                Complete Purchase
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Purchase;
