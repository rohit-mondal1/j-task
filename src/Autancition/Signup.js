import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-6 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
          <label for="Email" className="block text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="name@gmail.com"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
          Sign Up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">
          Sign up with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <FcGoogle className='text-5xl font-bold'/>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Have your account?
        <Link to="/login" className="underline text-gray-100">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;