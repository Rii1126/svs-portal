import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoImg from "../../assets/header-logo.svg";
import Cgradients from "../../components/Cgradients/Cgradients";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import PhantomIcon from "../../assets/Phantom-Icon_Transparent_White.png";
import { authApi } from "../../api/apiServices";
import "../../components/Styles/Styles.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const registerUrl = `${process.env.REACT_APP_API_BASE_URL}/register`;

    try {
      // Call the register function from the API integration service
      const response = await authApi.register({
        username,
        email,
        password,
      });
  
      if (response) {
        // Redirect the user to the signin page after successful register
        navigate("/signin");
      } else {
        // Handle register errors (if response is false)
        setError(response.message || "Sign-up failed. Please check your information and try again.");
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
            Create an Account <br />
          </h2>
          <p className="opacity-70">
            Sign up for your Solana Vibe Station Dashboard
          </p>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="userName">
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div>
            <label
              className="block text-gray-300 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button
            type="submit"
            className="btn-grad w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-500"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center my-4 text-gray-400">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-purple-400 hover:text-purple-300">
            Sign In
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

export default Signup;
