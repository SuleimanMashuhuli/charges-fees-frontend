import React from "react";

export default function ErrorAlert({ message = "An error occurred." }) {
  return (
    <div className="text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2 mt-2">
      {message}
    </div>
  );
}
