import React from "react";

export default function Sidebar() {
  return (
    <div className="w-[220px] border-r bg-white flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
          <span className="font-bold text-lg">Logo</span>
        </div>
      </div>
      <div className="flex-1 py-4 px-2">
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-pink-500 text-white">
            <span className="text-lg">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <span className="text-lg">📁</span>
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <span className="text-lg">👥</span>
            <span>Teams</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <span className="text-lg">📈</span>
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <span className="text-lg">💬</span>
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
            <span className="text-lg">🧩</span>
            <span>Integrations</span>
          </a>
        </nav>
      </div>
      <div className="p-4 m-2 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-center mb-3">
          <img
            src="/placeholder.svg?height=100&width=150"
            width={150}
            height={100}
            alt="V2.0 Promo"
            className="h-24 object-contain"
          />
        </div>
        <h3 className="text-center font-medium mb-2">V2.0 is available</h3>
        <button className="border border-blue-300 text-blue-600 px-3 py-1 text-sm rounded w-full hover:bg-blue-100">
          Try now
        </button>
      </div>
    </div>
  );
}
