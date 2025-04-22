import React from 'react';
import Sidebar from "./sidebar";
import MetricCard from "./MetricCard";
import ReportTable from "./report-table";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b px-6 py-3 flex items-center justify-between bg-white">
          <h1 className="text-xl font-semibold text-pink-500">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute left-2.5 top-2.5 text-gray-500">🔍</span>
              <input
                type="search"
                placeholder="Search..."
                className="w-[250px] pl-8 pr-2 py-1 rounded-md bg-gray-200 text-sm focus:outline-none"
              />
            </div>
            <button className="relative bg-transparent p-2 rounded hover:bg-gray-200">
              🔔
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-pink-500"></span>
            </button>
            <button className="bg-transparent p-2 rounded hover:bg-gray-200">❓</button>
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-pink-500">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-pink-100 flex items-center justify-center text-pink-500">
                <span className="text-sm">☰</span>
              </div>
              <h2 className="text-lg font-medium">Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricCard
                title="Turnover"
                value="$92,405"
                change="+5.33%"
                icon={<span className="text-pink-500 text-lg">🛒</span>}
                iconBg="bg-pink-100"
              />
              <MetricCard
                title="Profit"
                value="$32,218"
                change="+5.33%"
                icon={<span className="text-blue-500 text-lg">💰</span>}
                iconBg="bg-blue-100"
              />
              <MetricCard
                title="New customer"
                value="298"
                change="+6.84%"
                icon={<span className="text-indigo-500 text-lg">👥</span>}
                iconBg="bg-indigo-100"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-pink-100 flex items-center justify-center text-pink-500">
                  <span className="text-sm">☰</span>
                </div>
                <h2 className="text-lg font-medium">Detailed report</h2>
              </div>
              <div className="flex gap-2">
                <button className="border border-pink-200 text-pink-500 px-3 py-1 text-sm rounded hover:bg-pink-50">
                  ↓ Import
                </button>
                <button className="border border-pink-200 text-pink-500 px-3 py-1 text-sm rounded hover:bg-pink-50">
                  ↑ Export
                </button>
              </div>
            </div>
            <ReportTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
