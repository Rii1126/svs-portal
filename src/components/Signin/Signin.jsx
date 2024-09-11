import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoImg from "../../assets/header-logo.svg";
import Cgradients from "../Cgradients/Cgradients";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import PhantomIcon from "../../assets/Phantom-Icon_Transparent_White.png";
import { authApi } from "../../api/apiServices";
import { setTokenCookie } from "../../utils/cookieUtils";
import "../../components/Styles/Styles.css";

const Signin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both fields");
      return;
    }

    try {
      // Call the login API
      const response = await authApi.login({ email, password });

      if (response && response.token) {
        // Set token in cookies
        setTokenCookie(response.token);

        // Notify the App component to update authentication status
        onLoginSuccess();

        // Redirect to overview page after successful login
        navigate("/overview");
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <Cgradients className="absolute inset-0 z-0" />
      <div className="frosted-glass border-opacity-50 border-solid rounded-lg shadow-lg max-w-sm w-full z-10 p-8">
        <div className="text-center mb-6">
          <img
            src={logoImg}
            alt="Solana Vibe Station"
            className="mx-auto mb-4"
            width={140}
          />
          <h2 className="text-2xl font-semibold text-white">
            Welcome back <br />
          </h2>
          <p className="opacity-70">
            Log in to your Solana Vibe Station Dashboard
          </p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/forgotpassword"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn-grad w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-500"
          >
            Sign In
          </button>
        </form>

        {/* Restore the sign-up section and social login buttons */}
        <div className="text-center my-4 text-gray-400">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-purple-400 hover:text-purple-300">
            Sign Up
          </Link>
        </div>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-center text-white hover:bg-zinc-800 bg-zinc-900 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300">
            <FaGoogle className="mr-2" />
            Google
          </button>
          <button className="w-full flex items-center justify-center text-white hover:bg-zinc-800 bg-zinc-900 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300">
            <FaGithub className="mr-2" />
            GitHub
          </button>
          <button className="w-full flex items-center justify-center bg-[#5c538a] 655e8c hover:bg-[#857bbf] text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300">
            <img src={PhantomIcon} alt="Phantom" className="w-5 h-5 mr-2" />
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
