import { useState, useEffect } from "react";
import axios from "axios";
import SuccessAlert from "../components/alerts/SuccessAlert";

export default function ViewCharges() {
    const [requestData, setrequestData] = useState("");
    const [approved, setApproved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setrequestData(requestData => ({...requestData, [name] : value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            
            await axios.post(`URL${requestData.id}`);
            setApproved(true);
        } catch (err) {
            setError("Failed to approve request.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="border mt-2">
                <h1 className="text-[23px] my-5 font-extrabold text-center w-full">Approval Form</h1>
                <div className="mx-auto px-4 p-1 sm:px-6 lg:px-8">
                    <div className="mb-3">
                        <label htmlFor="channelID" className="font-light block text-gray-700">Channel ID:</label>
                        <input
                            type="text"
                            name="channelID"
                            value={requestData.channel_id}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="currency" className="font-light block text-gray-700">Currency:</label>
                        <input
                            type="text"
                            name="currency"
                            value={requestData.currency}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="amount" className="font-light block text-gray-700">Amount:</label>
                        <input
                            type="text"
                            name="amount"
                            value={requestData.max_amount}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="abcFee" className="font-light block text-gray-700">ABC fee:</label>
                        <input
                            type="text"
                            name="abc_fee"
                            value={requestData.abc_charge}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="vendorFee" className="font-light block text-gray-700">Vendor fee:</label>
                        <input
                            type="text"
                            name="vendor_fee"
                            value={requestData.vendor_charge}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                            readOnly
                        />
                    </div>
                    <button
                        className="mb-4 col-span-2 w-full py-2 bg-[#008000] text-white rounded-md hover:bg-[#228B22] mt-5 disabled:opacity-50"
                        type="submit"
                        disabled={approved || loading}
                    >
                        {loading ? "Approving..." : approved ? "Approved" : "Approve"}
                    </button>
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                    {approved && <SuccessAlert message="Request approved successfully!" />}
                </div>
            </form>
        </div>
    );
}
