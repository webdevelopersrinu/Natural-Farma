import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-[#F3FAF2] min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="mt-4 text-right">
            <Link to="/forgot-password" className="text-green-700 hover:text-green-500">
              Forgot your password?
            </Link>
          </div>
        </form>

        {/* Redirect to Sign Up */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-700 font-bold hover:text-green-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
