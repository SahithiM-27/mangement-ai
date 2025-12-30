
import React, { useState } from 'react';

const mockEntries = [
  { id: '1', time: '14:23:10', zone: 'North Entrance', device: 'Cam_04', change: '+2', status: 'Entry' },
  { id: '2', time: '14:21:45', zone: 'South Exit', device: 'Cam_02', change: '-1', status: 'Exit' },
  { id: '3', time: '14:20:02', zone: 'Main Lobby', device: 'Cam_01', change: '+5', status: 'Entry' },
  { id: '4', time: '14:18:30', zone: 'North Entrance', device: 'Cam_04', change: '+1', status: 'Entry' },
  { id: '5', time: '14:15:12', zone: 'West Wing', device: 'Cam_07', change: '-3', status: 'Exit' },
  { id: '6', time: '14:12:44', zone: 'Main Lobby', device: 'Cam_01', change: '+2', status: 'Entry' },
  { id: '7', time: '14:10:05', zone: 'South Exit', device: 'Cam_02', change: '-1', status: 'Exit' },
  { id: '8', time: '14:08:22', zone: 'Food Court', device: 'Cam_09', change: '+4', status: 'Entry' },
];

const CrowdEntries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = mockEntries.filter(entry => 
    entry.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.device.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Crowd Entries</h2>
          <p className="text-sm text-gray-500">Real-time log of pedestrian traffic across all monitoring zones.</p>
        </div>
        
        <div className="relative group">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#008B8B] transition-colors"></i>
          <input 
            type="text"
            placeholder="Search zones or devices..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-[#008B8B] focus:ring-2 focus:ring-[#008B8B]/10 transition-all w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Zone</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Device ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Count Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-700">{entry.time}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{entry.zone}</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{entry.device}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      entry.status === 'Entry' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-bold ${
                      entry.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {entry.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredEntries.length === 0 && (
          <div className="p-12 text-center">
            <i className="fa-solid fa-inbox text-4xl text-gray-200 mb-4"></i>
            <p className="text-gray-500">No matching entries found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrowdEntries;
