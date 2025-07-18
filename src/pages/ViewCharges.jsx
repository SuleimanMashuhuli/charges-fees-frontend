import { useState, useEffect } from "react";

export default function ViewCharges() {
    const [requestData, setrequestData] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setrequestData(requestData => ({...requestData, [name] : value }));
    }

    const handleSubmit = (e) => {
        e.prventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="border">
                <h1 className="font-bold flex justify-center font-mono">Approval Form</h1>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-4 ">
                        <label htmlFor="channelID" className="font-light text-gray-900">Channel ID:</label>
                        <input
                            type="text"
                            name=""
                            value={requestData.channel_id}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="currency" className="font-light text-gray-900">Currency:</label>
                        <input
                            type="text"
                            name=""
                            value={requestData.currency}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="amount" className="font-light text-gray-900">Amount:</label>
                        <input
                            type="text"
                            name=""
                            value={requestData.max_amount}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="abcFee" className="font-light text-gray-900">ABC fee:</label>
                        <input
                            type="text"
                            name=""
                            value={requestData.abc_charge}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                        />
                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="vendorFee" className="font-light">Vendor fee:</label>
                        <input
                            type="text"
                            name=""
                            value={requestData.vendor_charge}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:border-[#2a3d8c]"
                        />
                    </div>
                    <button
                        className="mb-4 "
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}