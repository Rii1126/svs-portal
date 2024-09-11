import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/apiServices";
import { setTokenCookie } from "../../utils/cookieUtils";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation for email
    if (!email.trim()) {
      setError("Please enter your email address.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear error if valid
      try {
        // Call the reset password function from the API integration service
        const response = await authApi.register({
          email,
        });
    
        if (response) {
          // Redirect the user to the overview page after successful reset link sent
          navigate("/signin");
        } else {
          // Handle reset password errors (if response is false)
          setError(response.message || "Reset password failed. Please try again.");
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">
          Reset Your Password
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 bg-gray-800 border ${
                error ? "border-red-500" : "border-gray-700"
              } rounded text-white focus:outline-none focus:ring-2 focus:ring-pink-500`}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-gray-400 hover:text-pink-500">
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
