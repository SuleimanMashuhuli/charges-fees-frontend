import React from "react";

export default function SuccessAlert({ message = "Success!" }) {
  return (
    <div className="text-green-600 bg-green-50 border border-green-200 rounded px-4 py-2 mt-2">
      {message}
    </div>
  );
}
