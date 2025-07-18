



export default function PendingCharges() {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Channel ID</th>
                        <th className="px-6 py-3">Currency</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">ABC Fee</th>
                        <th className="px-6 py-3">Vendor Fee</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">
                            <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                                view
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
