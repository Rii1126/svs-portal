import React, { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [projectName, setProjectName] = useState("Solana Vibe Station");
  const [projectId] = useState("a3fc85b8-9e5b-4239-9ec6-b63dc0e50fc0");
  const [invitesLeft, setInvitesLeft] = useState(0);
  const [users] = useState([{ email: "johndoe@example.com", role: "Owner" }]);

  const handleSaveSettings = () => {
    // Save settings logic here
    alert("Settings saved successfully.");
  };

  return (
    <div className="settings-page text-white p-4 md:p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-6">
        Project Settings
      </h2>

      {/* Project Name Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg mb-6">
        <label className="block text-sm mb-2 text-gray-400">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full bg-neutral-800 p-2 rounded text-white"
        />
      </div>

      {/* Project ID Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg mb-6">
        <label className="block text-sm mb-2 text-gray-400">Project ID</label>
        <input
          type="text"
          value={projectId}
          disabled
          className="w-full bg-neutral-800 p-2 rounded text-gray-500"
        />
      </div>

      {/* Project Users Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg mb-6">
        <h3 className="text-lg md:text-xl text-pink-500 mb-4">Project Users</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-sm text-gray-400">User</th>
              <th className="text-sm text-gray-400">Role</th>
              <th className="text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">No actions available</td>
              </tr>
            ))}
          </tbody>
        </table>

        {invitesLeft === 0 && (
          <div className="border border-pink-600 text-white p-4 mt-4 rounded">
            <p>
              You have used all your invites. Please upgrade your plan to invite
              more users.
            </p>
            <Link to="/purchase">
              <button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded shadow-lg transition-all duration-300">
                Upgrade Plan
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Autoscaling Section */}
      <div className="bg-[#0A0A0A] border border-[#BC1350] p-4 md:p-6 rounded-lg mb-6">
        <h3 className="text-lg md:text-xl text-pink-500 mb-4">
          Autoscaling Limit
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Autoscaling is not available for your current plan.
        </p>
        <input
          type="checkbox"
          disabled
          className="bg-gray-500 cursor-not-allowed"
        />
      </div>

      {/* Save Settings Button */}
      <button
        onClick={handleSaveSettings}
        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded shadow-lg transition-all duration-300"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
