
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import OccupancyChart from './OccupancyChart';
import CrowdEntries from './CrowdEntries';
import { View } from '../types';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState<View>(View.OVERVIEW);

  const renderContent = () => {
    switch (activeView) {
      case View.OVERVIEW:
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center">
               <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
               <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <i className="fa-regular fa-calendar"></i>
                  <span>Today</span>
                  <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
               </button>
            </div>

            <section>
              <h3 className="text-lg font-medium text-gray-600 mb-4">Occupancy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                  label="Live Occupancy"
                  value="734"
                  trend={10}
                  trendLabel="More than yesterday"
                />
                <StatCard 
                  label="Today's Footfall"
                  value="2,436"
                  trend={-10}
                  trendLabel="Less than yesterday"
                />
                <StatCard 
                  label="Avg Dwell Time"
                  value="08min 30sec"
                  trend={6}
                  trendLabel="More than yesterday"
                />
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
               <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Overall Occupancy</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                     <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#008B8B]"></span>
                        <span>Occupancy</span>
                     </div>
                  </div>
               </div>
               
               <div className="h-[350px] w-full">
                  <OccupancyChart />
               </div>
            </section>
          </div>
        );
      case View.CROWD_ENTRIES:
        return <CrowdEntries />;
      case View.ANALYTICS:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-blue-50 text-[#008B8B] rounded-full flex items-center justify-center text-3xl">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Advanced Analytics</h2>
            <p className="text-gray-500 max-w-md">Deep dive into historical patterns and predictive modeling. This feature is coming soon to your dashboard.</p>
          </div>
        );
      case View.SETTINGS:
        return (
          <div className="max-w-4xl mx-auto space-y-6">
             <h2 className="text-2xl font-bold text-gray-800 mb-8">Account Settings</h2>
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Profile Information</p>
                        <p className="text-sm text-gray-500">Update your personal details and avatar</p>
                      </div>
                   </div>
                   <i className="fa-solid fa-chevron-right text-gray-300"></i>
                </div>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        <i className="fa-solid fa-shield-halved"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Security & Privacy</p>
                        <p className="text-sm text-gray-500">Manage password and 2FA settings</p>
                      </div>
                   </div>
                   <i className="fa-solid fa-chevron-right text-gray-300"></i>
                </div>
                <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                        <i className="fa-solid fa-bell"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Notifications</p>
                        <p className="text-sm text-gray-500">Configure alert thresholds and push notifications</p>
                      </div>
                   </div>
                   <i className="fa-solid fa-chevron-right text-gray-300"></i>
                </div>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeView={activeView} onViewChange={setActiveView} onLogout={onLogout} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header activeView={activeView} />
        
        <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
