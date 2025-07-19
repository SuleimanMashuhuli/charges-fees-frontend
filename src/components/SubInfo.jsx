import { useState, useEffect } from "react";

export default function Subinfo() {
    return (
        <div className="mx-20 my-10 mb-20">
            <table className="table-fixed w-full border border-gray-300 text-sm text-left text-gray-700">
                <tbody>
                    <tr>
                        <td className="px-4 py-2">
                            <select className="w-full border border-gray-300 px-3 py-2 text-sm">
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
                            />
                        </td>
                        <td className="px-4 py-2">
                            <select className="w-full border border-gray-300 px-3 py-2 text-sm">
                                <option value="">Select Channel</option>
                                <option value="channel1">Pesa Link</option>
                                <option value="channel2">RTGS</option>
                                <option value="channel3">IPRS</option>
                            </select>
                        </td>
                        <td className="px-4 py-2 text-center">
                            <button className="w-full px-4 py-2 font-medium text-white bg-[#2a3d8c] hover:bg-blue-500 transition duration-150">
                                Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
