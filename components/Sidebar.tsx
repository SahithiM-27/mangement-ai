
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange, onLogout }) => {
  const navItems = [
    { id: View.OVERVIEW, icon: 'fa-house', label: 'Overview' },
    { id: View.CROWD_ENTRIES, icon: 'fa-expand', label: 'Crowd Entries' },
    { id: View.ANALYTICS, icon: 'fa-chart-line', label: 'Analytics' },
    { id: View.SETTINGS, icon: 'fa-gear', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-[#111C1C] text-gray-400 flex flex-col shrink-0 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#008B8B] rounded-lg flex items-center justify-center text-white text-sm">
           <i className="fa-solid fa-wifi rotate-45"></i>
        </div>
        <span className="text-white text-xl font-bold tracking-tight">kloudspot</span>
        <button className="ml-auto md:hidden">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      <nav className="flex-1 mt-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  activeView === item.id
                    ? 'bg-[#334242] text-white shadow-lg shadow-black/20'
                    : 'hover:bg-[#202c2c] hover:text-gray-200'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-800">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <i className="fa-solid fa-right-from-bracket w-5"></i>
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
