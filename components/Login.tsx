
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-start p-8 md:p-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Text */}
      <div className="relative z-10 hidden md:block max-w-xl text-white mr-auto">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to the<br />Crowd Management System
        </h1>
        <p className="text-lg opacity-90">
          Optimize your space with real-time crowd intelligence and occupancy tracking solutions.
        </p>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-fadeIn">
        <div className="bg-[#008B8B] p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 0 L50 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#008B8B]">
              <i className="fa-solid fa-wifi rotate-45"></i>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">kloudspot</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Log In *</label>
            <input 
              type="text" 
              defaultValue="Parking_solutions"
              className="w-full border-b border-gray-300 py-2 focus:border-[#008B8B] outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Password *</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                defaultValue="**********"
                className="w-full border-b border-gray-300 py-2 focus:border-[#008B8B] outline-none transition-colors"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#008B8B] hover:bg-[#007676] text-white font-semibold py-3 rounded transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg mt-4"
          >
            Login
          </button>
        </form>
      </div>

      {/* Footer Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 flex flex-col md:flex-row items-center justify-between text-xs px-8">
        <p className="mb-2 md:mb-0">
          We use cookies and some from third parties for performance, personalization, and marketing purposes. <button className="underline ml-1">Cookies settings</button>
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded">Do not allow cookies</button>
          <button className="bg-[#008B8B] hover:bg-[#007676] px-4 py-1.5 rounded">Allow all cookies</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
