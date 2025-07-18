import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 px-40 py-6 z-50 bg-[#2a3d8c] border-b border-gray-200 shadow-md flex justify-between items-center">
            <div className="flex items-center gap-4 w-[20%]">
                <a
                    href="https://abcthebank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white"
                >
                    <img
                        src="/abc-logo.png"
                        alt="ABC Logo"
                        className="h-8 w-auto object-contain"
                    />
                    <span className="text-lg font-semibold">ABC Bank Group Ltd.</span>
                </a>
            </div>
            

            <marquee className="flex-1 text-gray-900 font-medium">
                ⚠️ Ensure all charge requests are reviewed carefully before approved.
            </marquee>

            <div className="w-[20%] flex justify-end">
            <nav>
                <Link
                    to="/login"
                    className="text-white font-medium hover:underline uppercase hover:text-red-600"
                >
                    Login
                </Link>
            </nav>
            </div>
        </header>
    );
}
