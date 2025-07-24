import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../components/alerts/Alert";
import Loading from "../components/alerts/Loading";

export default function PendingCharges() {
    const [request, setRequest] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getCharges = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`##################################`);
                setRequest(response.data);
            } catch (error) {
                setError("Failed to fetch pending charges.");
            } finally {
                setLoading(false);
            }
        }
        getCharges()
    }, [])

    const handleViewCharges = (id) => {
        navigate(`/request/${id}`)
    };

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
            {loading && <Loading />}
            <div className="flex items-center justify-between mb-2 mt-4">
                <label className="flex items-center text-sm">
                    Show
                    <select
                        className="mx-2 border rounded px-2 py-1"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                        disabled={loading}
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
            <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-1">Channel ID</th>
                        <th className="px-6 py-1">Currency</th>
                        <th className="px-6 py-1">Amount</th>
                        <th className="px-6 py-1">ABC Fee</th>
                        <th className="px-6 py-1">Vendor Fee</th>
                        <th className="px-6 py-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr><td colSpan={6} className="text-center py-4">Loading...</td></tr>
                    ) : currentRows.length === 0 ? (
                        <tr><td colSpan={6} className="text-center py-4">No pending charges found.</td></tr>
                    ) : currentRows.map((requests) => (
                        <tr className="bg-white border-b" key={requests.id}>
                            <td className="px-6 py-1">{requests.channel_id}</td>
                            <td className="px-6 py-1">{requests.currency}</td>
                            <td className="px-6 py-1">{requests.max_amount}</td>
                            <td className="px-6 py-1">{requests.abc_charge}</td>
                            <td className="px-6 py-1">{requests.vendor_charge}</td>
                            <td className="px-6 py-1">
                                <button onClick={() => handleViewCharges(requests.id)} className="text-[14px] px-2 font-normal text-white bg-[#C70039] rounded-md hover:bg-[#FF0000] focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out" disabled={loading}>
                                    Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="flex items-center mt-4 text-sm">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1 || loading}
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
                            disabled={loading}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || loading}
                    className="px-3 py-1 rounded border ml-2 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
