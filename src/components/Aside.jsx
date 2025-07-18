import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <div className="w-64 bg-gray-200 border-r overflow-y-auto">
            <div className="p-4 flex items-center text-gray-600 text-base font-normal">
                <svg className="w-6 h-6 mr-2" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                </svg>
                <span className="font-semibold text-base">Fee Charges</span>
            </div>

            <div className="py-4 px-6 text-gray-700">
                <Link to="pending" className="block p-2 object-cover text-base font-semibold text-gray-900 hover:bg-gray-300">
                    Pending Charges
                </Link>
                <Link to="" className="block p-2 mt-2 object-cover text-base font-semibold text-gray-900 hover:bg-gray-300">
                    Approved Charges
                </Link>
            </div>

            <div className="py-4 px-6">
                <a href="http://172.16.2.175/otrs/index.pl?Action=AgentFAQZoom;ItemID=10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 object-cover text-base font-semibold text-gray-900 hover:bg-gray-300"
                >
                    Help
                </a>
            </div>
        </div>
    );
}
