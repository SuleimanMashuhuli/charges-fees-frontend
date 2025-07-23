import React from "react";
import KeycloakServices from "../services/Keycloak";

export default function Header() {
    const isAuthenticated = KeycloakServices.loggedUser();
    const userName = KeycloakServices.getName();
    const userUsername = KeycloakServices.getUsername();

    return (
        <header className="fixed left-0 right-0 px-2 sm:px-8 md:px-20 lg:px-40 py-4 md:py-6 z-50 bg-[#2a3d8c] border-b border-gray-200 shadow-md flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-[20%] justify-center md:justify-start">
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
                    <span className="text-base md:text-lg font-semibold">ABC Bank Group Ltd.</span>
                </a>
            </div>
        
            <marquee className="flex-1 text-gray-900 font-medium w-full md:w-auto text-center md:text-left">
                ⚠️ Ensure all charge requests are reviewed carefully before approved.
            </marquee>
            <div className="w-full md:w-[20%] flex justify-center md:justify-end mt-2 md:mt-0">
                <nav>
                    {isAuthenticated ? (
                        <div className="flex items-center gap-2">
                            <span className="text-white font-medium">
                                {userUsername || userName}
                            </span>
                            <button
                                onClick={() => KeycloakServices.getOut()}
                                className="text-white font-medium hover:underline uppercase hover:text-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => KeycloakServices.getIn()}
                            className="text-white font-medium hover:underline uppercase hover:text-red-600"
                        >
                            Login
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}
