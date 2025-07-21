import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PendingCharges() {
    const [request, setRequest] = useState([
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },{
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },{
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        },
        {
            id: 1,
            channel_id: "ITRS00147",
            currency: "KES",
            max_amount: 10000,
            abc_charge: 50,
            vendor_charge: 30,
        }
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const getCharges = async () => {
            try {
                const response = await axios.get('');
                setRequest(response.data);
            } catch (error) {
                console.log(error?.response?.data);
                console.log("Not able to fetch the reqested charges");
            }
        }
        getCharges()
    }, [])

    const handleViewCharges = (id) => {
        navigate(`/request/${id}`)
    };

    const totalRows = request.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
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
                    Showing {startIdx + 1}-{Math.min(endIdx, totalRows)} of {totalRows} entries
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
                        <th className="px-6 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((requests) => (
                        <tr className="bg-white border-b" key={requests.id}>
                            <td className="px-6 py-2">{requests.channel_id}</td>
                            <td className="px-6 py-2">{requests.currency}</td>
                            <td className="px-6 py-2">{requests.max_amount}</td>
                            <td className="px-6 py-2">{requests.abc_charge}</td>
                            <td className="px-6 py-2">{requests.vendor_charge}</td>
                            <td className="px-6 py-2">
                                <button onClick={() => handleViewCharges(requests.id)} className="text-[14px] px-2 font-normal text-white bg-[#C70039] rounded-md hover:bg-[#FF0000] focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                                    Approve
                                </button>
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
