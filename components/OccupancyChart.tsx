
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { time: '08:00', count: 120 },
  { time: '09:00', count: 145 },
  { time: '10:00', count: 160 },
  { time: '11:00', count: 155 },
  { time: '12:00', count: 168 },
  { time: '13:00', count: 175 },
  { time: '14:00', count: 172 },
  { time: '15:00', count: 165 },
  { time: '16:00', count: 180 },
  { time: '17:00', count: 185 },
  { time: '18:00', count: 178 },
  { time: '19:00', count: 195 },
  { time: '20:00', count: 210 },
];

const OccupancyChart: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008B8B" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#008B8B" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              padding: '12px'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="count" 
            stroke="#008B8B" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorCount)" 
            dot={{ r: 4, fill: '#008B8B', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          {/* Live Indicator Line */}
          <ReferenceLine 
            x="20:00" 
            stroke="#ef4444" 
            strokeDasharray="3 3" 
            label={{ 
                position: 'top', 
                value: 'LIVE', 
                fill: '#fff', 
                fontSize: 10,
                fontWeight: 'bold',
                className: 'bg-red-500 px-2 py-0.5 rounded'
            }} 
          />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Custom overlay label for Live indicator because SVG labels are hard to style with background */}
      <div className="absolute top-[3%] right-[8%] bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
        LIVE
      </div>

      {/* Axis Labels */}
      <div className="absolute -left-10 top-1/2 -rotate-90 text-xs font-semibold text-gray-400">
        Count
      </div>
    </div>
  );
};

export default OccupancyChart;
