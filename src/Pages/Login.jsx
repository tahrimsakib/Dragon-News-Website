import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login your account
        </h1>

        {/* Divider */}
        <div className="border-b border-gray-300 mb-8"></div>

        {/* Login Form */}
        <form>
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-3 bg-gray-100 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-md transition-colors duration-300 mb-6">
            Login
          </button>
        </form>
        {/* Register Link */}
        <p className="text-center text-gray-600">
          Don't Have An Account ?{" "}
          <Link
            to="/auth/register"
            className="text-red-500 font-semibold hover:text-red-600 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
