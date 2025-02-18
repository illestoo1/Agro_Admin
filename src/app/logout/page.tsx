import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Company Logo */}
      <div className="w-1/2 bg-[#F4FAFF] flex justify-center items-center">
        <Image
          alt="logo"
          src="/image/Logo.svg"
          width={200} // Adjust the width
          height={200}
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex justify-center items-center bg-[#86B159]">
        <div className="w-80 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Admin Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Link to Home Page */}
            <Link href="/" passHref>
              <button
                type="button"
                className="w-full py-2 bg-[#86B159] text-white font-semibold rounded-lg hover:bg-[#F4FAFF] hover:text-[#86B159]"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
