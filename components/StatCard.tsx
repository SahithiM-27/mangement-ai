
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend: number;
  trendLabel: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendLabel }) => {
  const isPositive = trend > 0;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <p className="text-sm font-medium text-gray-500 mb-1 group-hover:text-gray-700 transition-colors uppercase tracking-tight">{label}</p>
      <div className="flex items-baseline gap-2 mb-3">
        <h4 className="text-3xl font-bold text-gray-800 tracking-tight">{value}</h4>
      </div>
      
      <div className="flex items-center gap-1.5">
        <div className={`flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-md ${
          isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        }`}>
          <i className={`fa-solid ${isPositive ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'}`}></i>
          <span>{Math.abs(trend)}%</span>
        </div>
        <span className="text-xs text-gray-400 font-medium">{trendLabel}</span>
      </div>
    </div>
  );
};

export default StatCard;
