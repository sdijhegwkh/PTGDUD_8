import React from 'react';

const MetricCard = ({ title, value, change, icon, iconBg }) => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className={`${iconBg} p-2 rounded-md`}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-green-500">{change} period of change</p>
      </div>
    </div>
  );
};

export default MetricCard;
