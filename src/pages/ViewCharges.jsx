import { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/alerts/SuccessAlert";
import Alert from "../components/alerts/Alert";

export default function ViewCharges() {
    const [requestData, setrequestData] = useState("");
    const [approved, setApproved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setrequestData(requestData => ({...requestData, [name] : value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const confirmApprove = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.post(`#############################${requestData.id}`);
            setApproved(true);
            setShowConfirm(false);
            setRedirecting(true);
            setTimeout(() => {
                window.location.href = "/approved";
            }, 2000);
        } catch (err) {
            setError("Failed to approve request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="border">
                <h1 className="text-[23px] my-1 font-extrabold text-center w-full">Approval Form</h1>
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
                        <label htmlFor="vendorFee" className="font-light">Vendor fee:</label>
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
                        disabled={approved || loading || redirecting}
                    >
                        {loading ? "Approving..." : approved ? "Approved" : "Approve"}
                    </button>
                    {error && <Alert message={error} type="error" />}
                    {approved && <SuccessAlert message="Request approved successfully! Redirecting..." />}
                </div>
            </form>
        
            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-4">Confirm Approval</h2>
                        <p>Are you sure you want to approve this request?</p>
                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={() => setShowConfirm(false)}
                                disabled={loading}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={confirmApprove}
                                disabled={loading}
                            >
                                {loading ? "Approving..." : "Yes, Approve"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
