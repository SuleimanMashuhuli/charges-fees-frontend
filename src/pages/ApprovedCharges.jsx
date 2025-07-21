import { useEffect, useState } from "react";
import Alert from "../components/alerts/Alert";
import axios from "axios";

export default function ApprovedCharges () {
    const [request, setRequest] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getApprovedCharges = async () => {
            try {
                const response = await axios.get('####URL#######');
                setRequest(response.data);
            } catch (err) {
                setError("Failed to fetch approved charges.");
            }
        };
        getApprovedCharges();
    }, []);

    const totalRows = request.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const currentRows = request.slice(startIdx, endIdx);

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };
    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {error && <Alert message={error} type="error" />}
            <div className="flex items-center justify-between mb-2 mt-4">
                <label className="flex items-center text-sm">
                    Show
                    <select
                        className="mx-2 border rounded px-2 py-1"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                    >
                        {[5, 10, 20, 50].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                    entries
                </label>
                <span className="text-sm text-gray-600">
                    Showing {totalRows === 0 ? 0 : startIdx + 1}-{Math.min(endIdx, totalRows)} of {totalRows} entries
                </span>
            </div>
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-2">Channel ID</th>
                        <th className="px-6 py-2">Currency</th>
                        <th className="px-6 py-2">Amount</th>
                        <th className="px-6 py-2">ABC Fee</th>
                        <th className="px-6 py-2">Vendor Fee</th>
                        <th className="px-6 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.length === 0 ? (
                        <tr><td colSpan={6} className="text-center py-4">No approved charges found.</td></tr>
                    ) : currentRows.map((requests) => (
                        <tr className="bg-white border-b" key={requests.id}>
                            <td className="px-6 py-2">{requests.channel_id}</td>
                            <td className="px-6 py-2">{requests.currency}</td>
                            <td className="px-6 py-2">{requests.max_amount}</td>
                            <td className="px-6 py-2">{requests.abc_charge}</td>
                            <td className="px-6 py-2">{requests.vendor_charge}</td>
                            <td className="px-6 py-2">
                                <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">Approved</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded border mr-2 disabled:opacity-50"
                >
                    Prev
                </button>
                <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={`px-3 py-1 rounded border ${currentPage === page ? 'bg-[#2a3d8c] text-white' : ''}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded border ml-2 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}