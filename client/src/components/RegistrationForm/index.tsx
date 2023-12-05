import React, { useState } from "react";
import Link from "next/link";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("registred", username, password);
  };

  return (
    <div>
      <h1 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up to ChatApp
      </h1>
      <form action="">
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Sign Up
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Already have an account?{" "}
          <Link href="/" className="font-medium text-blue-500 hover:underline">
            Go to Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
