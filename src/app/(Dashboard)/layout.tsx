"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface LinkItem {
  href: string;
  label: string;
  svgPath: string;
}


export default function Sidebar({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",
    },
    {
      href: "/products",
      label: "Products",
      svgPath:
        "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",  
    },
    {
      href: "/user",
      label: "Users",
      svgPath:
        "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",
    },
    {
      href: "/vendor",
      label: "Vendors",
      svgPath:
      "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",
    },
    {
      href: "/logistics",
      label: "Logistics",
      svgPath:
      "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",  
    },
    {
      href: "/finance",
      label: "Finance",
      svgPath:
        "M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-3.384-5.423v-1.073q0-.153.055-.297q.056-.143.187-.274l5.09-5.066q.148-.128.306-.19q.157-.061.315-.061q.172 0 .337.064t.302.193l.925.944q.123.149.187.308q.065.16.065.32q0 .159-.062.321t-.19.311l-5.066 5.065q-.13.131-.274.187t-.297.056H9.423q-.343 0-.575-.232q-.232-.233-.232-.576m5.959-4.177l.925-.956l-.925-.944l-.95.95z",
    },
  ];

  return (
    <div className="h-screen flex flex-col text-sm md:flex-row">
      {/* Burger Menu */}
      <div id="burger menu" className="lg:hidden block" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
        </svg>
      </div>

      {/* Sidebar */}
      <nav className={`w-full md:w-1/5 p-5 lg:block ${isOpen ? 'block' : 'hidden'} flex-col justify-between z-10 border-r h-full bg-[#F4FAFF] transition-all duration-300`}>
        <div className="flex items-center justify-center p-2">
          <Image alt="logo" width={100} height={100} src="/image/Logo.svg" />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <Link
                href={link.href}
                className={`flex items-center p-2 gap-3 font-semibold ${
                  link.href === path
                    ? "text-white bg-[#86B159] rounded-lg duration-300 shadow-gray-500 shadow-md"
                    : "text-[#333644] hover:bg-[#86B159] hover:opacity-55 duration-300 hover:text-white rounded-lg "
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
            </li>
          ))}
        </ul>

        {/* Logout Section */}
        <div className="border-t-2 mt-5">
          <div className="p-3 mt-5 space-y-5 gap-3">
            {/* Notification and Logout Buttons */}
            <div className="flex space-x-2 items-center font-semibold text-[#333644] hover:text-[#86B159]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
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
                  <path d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7" />
                  <path d="M9 12h11.5" />
                  <path d="M20.5 12l-3.5-3.5M20.5 12l-3.5 3.5" />
                </g>
              </svg>
              <Link href="logout">
              <button>Logout</button>
              </Link>  
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow md:w-4/5">
        <div>
          <header className="border-b p-5 flex justify-between items-center">
            <h1 className="text-[#999BA2] text-sm">
              {path === "/" ? "Dashboard" : path.split("/", -1)}
            </h1>
            <button className="bg-[#86B159] text-white py-2 px-4 rounded hover:bg-white hover:text-[#86B159] font-bold hover:border-[#86B159]">
              Admin
            </button>
          </header>
          <main className="flex-grow p-5">{children}</main>
        </div>
      </div>
    </div>
  );
}