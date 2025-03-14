"use client";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="justify-center bg-[#F4FAFF] shadow-lg rounded-2xl flex overflow-hidden w-full max-w-4xl">
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 space-y-4">
          <div className="w-full max-w-sm">
            <Image
              src="/image/Logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Icon
                  icon="mdi:email"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  width="20"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#86B159]"
                />
              </div>
              <div className="relative">
                <Icon
                  icon="mdi:lock"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  width="20"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#86B159]"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  <Icon
                    icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                    width="20"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="accent-[#86B159]"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#86B159] text-white hover:text-[#86B159] rounded-lg hover:bg-gray-500 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/image/asset 1.jpg"
            alt="Visual"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
