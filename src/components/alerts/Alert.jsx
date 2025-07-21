import React, { useState } from "react";

export default function Alert({ message, type = "info" }) {
  const [visible, setVisible] = useState(true);
  if (!visible || !message) return null;
  const color = type === "error" ? "bg-red-100 text-red-800 border-red-400" : "bg-blue-100 text-blue-800 border-blue-400";
  return (
    <div className={`border ${color} px-4 py-3 rounded relative mb-2`} role="alert">
      <span className="block sm:inline">{message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        onClick={() => setVisible(false)}
      >
        <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z"/></svg>
      </span>
    </div>
  );
}
