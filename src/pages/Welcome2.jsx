import React from "react";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#2a3d8c]">Welcome to ABC Charges & Fees Portal</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
        Manage, review and approve all your charge requests efficiently and securely. Use the sidebar to navigate between pending, approved and detailed charge requests.
      </p>
    </div>
  );
} 