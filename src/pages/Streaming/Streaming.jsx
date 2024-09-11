import React from "react";

const StreamingSetup = () => {
  return (
    <div className="p-4 md:p-8 text-white">
      {/* Page Header */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-pink-500 mb-4">
          Public Geyser gRPC Streaming
        </h1>
        <p className="text-gray-300 mb-4">
          Real-time gRPC streaming for Solana validators, giving you access to
          the most up-to-date data streams.
        </p>
        <h2 className="text-lg font-semibold text-pink-500">Get Started:</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Enable streaming endpoints</li>
          <li>Monitor real-time gRPC streams</li>
          <li>Configure validator-level data access</li>
        </ul>
      </div>

      {/* Action Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold text-white mb-4">
          Ready to Set Up Streaming?
        </h2>
        <button className="bg-pink-500 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-pink-600 transition">
          Set Up Streaming
        </button>
      </div>
    </div>
  );
};

export default StreamingSetup;
