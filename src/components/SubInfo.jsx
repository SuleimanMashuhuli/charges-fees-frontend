import { useState } from "react";
import axios from "axios";

export default function Subinfo() {
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [channel, setChannel] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}###ENDPOINTS#####`, {
                currency,
                amount,
                channel
            });
            setSuccess(true);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Failed to submit data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-20 my-[48px] mb-10">
            <form onSubmit={handleSubmit}>
                <table className="table-fixed w-full border border-gray-300 text-sm text-left text-gray-700">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">
                                <select
                                    className="w-full border border-gray-300 px-3 py-2 text-sm"
                                    value={currency}
                                    onChange={e => setCurrency(e.target.value)}
                                    required
                                >
                                    <option value="">Select Currency</option>
                                    <option value="USD">USD</option>
                                    <option value="KES">KES</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </td>
                            <td className="px-4 py-2">
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    className="w-full border border-gray-300 px-3 py-2 text-sm"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    required
                                />
                            </td>
                            <td className="px-4 py-2">
                                <select
                                    className="w-full border border-gray-300 px-3 py-2 text-sm"
                                    value={channel}
                                    onChange={e => setChannel(e.target.value)}
                                    required
                                >
                                    <option value="">Select Channel</option>
                                    <option value="channel1">Pesa Link</option>
                                    <option value="channel2">RTGS</option>
                                    <option value="channel3">IPRS</option>
                                </select>
                            </td>
                            <td className="px-4 py-2 text-center">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 font-medium text-white bg-[#2a3d8c] hover:bg-blue-500 transition duration-150"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {success && <div className="text-green-500 mt-2">Submitted successfully!</div>}
            </form>
        </div>
    );
}
