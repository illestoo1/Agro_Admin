"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface LinkItem {
  href: string;
  label: string;
  svgPath: string;
  submenu?: { href: string; label: string }[];
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isLogisticsOpen, setIsLogisticsOpen] = useState(false); // State to toggle the logistics dropdown
  

  const links: LinkItem[] = [
    {
      href: "/",
      label: "Home",
      svgPath:
        "M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77",
    },
    {
      href: "/orders",
      label: "Orders",
      svgPath:
        "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-4.615v-2.21l5.959-5.934l2.19 2.203l-5.94 5.94zm5.959-4.985l.925-.956l-.925-.944l-.95.95z",
    },
    {
      href: "/products",
      label: "Products",
      svgPath:
        "M17 8h1v11H2V8h1V6c0-2.76 2.24-5 5-5c.71 0 1.39.15 2 .42A4.9 4.9 0 0 1 12 1c2.76 0 5 2.24 5 5zM5 6v2h2V6c0-1.13.39-2.16 1.02-3H8C6.35 3 5 4.35 5 6m10 2V6c0-1.65-1.35-3-3-3h-.02A4.98 4.98 0 0 1 13 6v2zm-5-4.22C9.39 4.33 9 5.12 9 6v2h2V6c0-.88-.39-1.67-1-2.22",
    },
    {
      href: "/user",
      label: "User",
      svgPath:
        "M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4q-.221 0-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8",
    },
    {
      href: "/vendor",
      label: "Vendor",
      svgPath:
        "M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4q-.221 0-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8",
    },
    {
      href: "/finance",
      label: "Finance",
      svgPath: "M12 3a9 9 0 1 1-5.16 1.626L12 12z",
    },
    {
      href: "/logistics",
      label: "Logistics",
      svgPath:
        "M42 8H20a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 34h14V20h-7l-7 6.462z",
    },
    {
      href: "/report",
      label: "Report",
      svgPath: "m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9",
    },
  ];

  return (
    <div className="h-screen flex">
      <nav className="md:w-1/5 p-5 lg:block hidden flex-col justify-between z-10 border-r h-screen overflow-hidden bg-[#F4FAFF]">
        <div className="flex items-center justify-center p-2">
          <Image alt="logo" width={100} height={100} src="/image/Logo.svg" />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="py-2">
              {/* For Logistics Dropdown */}
              {link.submenu ? (
                <div>
                  <button
                    onClick={() => setIsLogisticsOpen(!isLogisticsOpen)}
                    className="flex items-center gap-2 py-2 px-4 w-full text-left hover:bg-primaryborder-l-4 border-l-[#1b831b]"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={link.svgPath} />
                    </svg>
                    {link.label}
                    <span className="ml-auto">
                      {isLogisticsOpen ? "▲" : "▼"}
                    </span>
                  </button>
                  {isLogisticsOpen && (
                    <ul className="">
                      {link.submenu.map((submenu) => (
                        <li key={submenu.href}>
                          <Link
                            href={submenu.href}
                            className="block py-1 px-2 hover:bg-secondary"
                          >
                            {submenu.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`flex items-center p-2 gap-3 font-bold ${
                    link.href === path
                      ? "text-[#ffff] bg-[#86B159] border-l-4 border-l-[#1b831b] rounded-lg shadow"
                      : "text-[#333644]"
                  }`}
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.svgPath} />
                  </svg>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Logout Section */}
        <div className="border-t-2">
          <div className="p-3 px-7 space-y-5 gap-3">
            <div className="flex space-x-2 items-center font-semibold text-[#333644] hover:text-[#86B159]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" width="1.5">
                  <path d="M21.25 10.745V16.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4h7.151" />
                  <path d="M2.75 7.59L10 11.72a3.94 3.94 0 0 0 4 0l2.219-1.257" />
                  <circle cx="19" cy="5" r="2.5" />
                </g>
              </svg>
              <Link href="/notification">
                <button>Notifications</button>
              </Link>
            </div>

            <div className="flex space-x-2 items-center font-semibold text-[#333644] hover:text-[#86B159]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="36"
                    strokeDashoffset="36"
                    d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.5s"
                      values="36;0"
                    />
                  </path>
                  <path
                    strokeDasharray="14"
                    strokeDashoffset="14"
                    d="M9 12h11.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.6s"
                      dur="0.2s"
                      values="14;0"
                    />
                  </path>
                  <path
                    strokeDasharray="6"
                    strokeDashoffset="6"
                    d="M20.5 12l-3.5-3.5M20.5 12l-3.5 3.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="6;0"
                    />
                  </path>
                </g>
              </svg>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </nav>
         
      <div className="md:w-11/12">
        <div >
          <header className="border-b p-5 flex justify-between items-center">
            <h1 className="text-[#999BA2] text-sm">
              {path == "/" ? "Dashboard" : path.split("/", -1)}
            </h1>
            <div>
                <button className="bg-[#86B159] text-white py-2 px-4 rounded hover:bg-white hover:text-[#86B159] font-bold hover:border-[#86B159]">Admin</button>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </div>
  );
}
