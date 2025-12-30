
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  activeView: View;
}

const Header: React.FC<HeaderProps> = ({ activeView }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center px-8 shrink-0 shadow-sm relative z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">Crowd Solutions</h1>
        <div className="w-px h-6 bg-gray-200 mx-2"></div>
        <div className="relative">
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-all font-medium">
            <i className="fa-solid fa-location-dot text-[#008B8B]"></i>
            <span>Avenue Mall</span>
            <i className="fa-solid fa-chevron-down text-xs ml-2 text-gray-400"></i>
          </button>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-6">
        <button className="relative w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <i className="fa-regular fa-bell text-xl"></i>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">Site Manager</p>
          </div>
          <div className="w-10 h-10 bg-[#008B8B] rounded-full flex items-center justify-center text-white font-bold ring-2 ring-[#008B8B]/10">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
