import React from "react";
import UserServices from "../services/UserService";

export default function Header() {

    return (
        <header className="fixed left-0 right-0 px-2 sm:px-8 md:px-20 lg:px-40 py-4 md:py-6 z-50 bg-[#2a3d8c] border-b border-gray-200 shadow-md flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0">
            <div className="flex items-start gap-2 md:gap-4 w-full md:w-[25%] justify-start md:justify-start">
                <a
                    href="https://abcthebank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-white"
                >
                    <img
                        src="/abc-logo.png"
                        alt="ABC Logo"
                        className="h-8 w-auto object-contain"
                    />
                    <span className="text-base md:text-lg font-semibold">ABC Bank Group Ltd.</span>
                </a>
            </div>

            <div className="relative overflow-hidden flex-1 w-full md:w-auto h-6 flex items-center">
                <div className="whitespace-nowrap animate-marquee text-gray-900 font-medium text-center md:text-left">
                    ⚠️ Ensure all charge requests are reviewed carefully before approved.
                </div>
            </div>
            <div>
                <ul
                    className="flex justify-between gap-5 flex-row">
                    {
                        UserServices.loggedUser() && (
                            <React.Fragment>
                                <li className='px-2'>
                                    <a href="#user"
                                        className="py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 :text-gray-400 md::hover:text-white :hover:bg-gray-700 :hover:text-white md::hover:bg-transparent">
                                        {UserServices.getUsername()} Logged In
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#logout" onClick={() => UserServices.getOut()}
                                        className="py-1 pr-1 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 :text-gray-400 md::hover:text-white :hover:bg-gray-700 :hover:text-white md::hover:bg-transparent">
                                        Logout
                                    </a>
                                </li>
                            </React.Fragment>
                        )
                    }
                    {
                        !UserServices.loggedUser() && (
                            <li>
                                <div onClick={() => UserServices.getIn()}
                                    className="py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 :text-gray-400 md::hover:text-white :hover:bg-gray-700 :hover:text-white md::hover:bg-transparent"
                                >
                                    Login
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </header>
    );
}
