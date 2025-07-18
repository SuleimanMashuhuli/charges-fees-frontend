import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function PendingCharges() {
    const [request, setRequest] = useState([ {
        id: 1,
        channel_id: "ITRS00147",
        currency: "KES",
        max_amount: 10000,
        abc_charge: 50,
        vendor_charge: 30,
    }
]);
    const navigate = useNavigate();

    useEffect(() => {
        const getCharges = async () => {
            try {
                const response = await axios.get('');
                setRequest(response.data);
            } catch (error) {
                console.log(error.response.data);
                console.log("Not able to fetch the reqested chargesa");
            }
        }
        getCharges()
    }, [])

    const handleViewCharges = (id) => {
        navigate(`/request/${id}`)
    };

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-2">
                            Channel ID
                        </th>
                        <th className="px-6 py-2">
                            Currency
                        </th>
                        <th className="px-6 py-2">
                            Amount
                        </th>
                        <th className="px-6 py-2">
                            ABC Fee
                        </th>
                        <th className="px-6 py-2">
                            Vendor Fee
                        </th>
                        <th className="px-6 py-2">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {request.map((requests) => (
                        <tr className="bg-white border-b"
                            key={requests.id}
                        >
                            <td className="px-6 py-2">
                                {requests.channel_id}
                            </td>
                            <td className="px-6 py-2">
                                {requests.currency}
                            </td>
                            <td className="px-6 py-2">
                                {requests.max_amount}
                            </td>
                            <td className="px-6 py-2">
                                {requests.abc_charge}
                            </td>
                            <td className="px-6 py-2">
                                {requests.vendor_charge}
                            </td>
                            <td className="px-6 py-2">
                                <button onClick={() => handleViewCharges(requests.id)} className="px-2 py-1 font-mono text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                                        Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
