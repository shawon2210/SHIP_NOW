import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('john@shipnow.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  return (
    <main className="flex min-h-screen bg-[#FEFEFE] font-['Nunito_Sans',sans-serif]">
      {/* Left Section: Bright Purple Visual Experience */}
      <section className="hidden lg:flex lg:w-1/2 bg-[#856DF3] flex-col justify-between p-12 lg:p-16 relative overflow-hidden text-white">
        
        {/* Top Brand Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="relative w-7 h-7 shrink-0">
            {/* Two black offset squares */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#333333] rounded-[2px]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#333333] rounded-[2px] opacity-90" />
          </div>
          <span 
            className="text-2xl font-[900] italic uppercase tracking-wider text-white"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            SHIPNOW
          </span>
        </div>

        {/* Center overlapping image mockup */}
        <div className="relative flex items-center justify-center my-auto py-8">
          {/* Main Truck/Delivery Image */}
          <div className="relative w-[340px] h-[340px] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
              alt="Delivery van with packages" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping top-right floating photo card */}
          <div className="absolute top-0 right-[12%] w-[170px] h-[210px] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#856DF3] transform rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=400&q=80" 
              alt="Scanning package" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Headline & Subtitle */}
        <div className="flex flex-col gap-2 max-w-md z-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Welcome to ShipNow
          </h1>
          <p className="text-sm lg:text-base text-white/90 font-medium leading-relaxed">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>

      </section>

      {/* Right Section: Clean White Login Interface */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 bg-[#FEFEFE]">
        <div className="w-full max-w-[380px] space-y-6">
          
          {/* Header Icon & Title */}
          <div className="flex flex-col items-center text-center">
            {/* Purple Logo Icon Badge */}
            <div className="relative w-8 h-8 mb-4">
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#856DF3] rounded-[2px]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#856DF3] rounded-[2px] opacity-80" />
            </div>

            <h2 className="text-2xl font-bold text-[#333333] tracking-tight">Welcome Back</h2>
            <p className="text-xs text-[#757575] mt-1">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            
            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#333333] block">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[10px] text-sm text-[#333333] outline-none focus:ring-2 focus:ring-[#856DF3]/30 transition-all placeholder-[#757575]"
                placeholder="Enter a valid email address" 
                required 
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#333333] block">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[10px] text-sm text-[#333333] outline-none focus:ring-2 focus:ring-[#856DF3]/30 transition-all placeholder-[#757575]"
                  placeholder="Create a strong password" 
                  required 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#333333] transition-colors p-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && <p className="text-xs text-[#F04A4A] font-semibold pt-1">{error}</p>}
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-[#F0F0F0] accent-[#856DF3] cursor-pointer" 
                />
                <span className="text-[#757575]">Remember Me</span>
              </label>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#856DF3] font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#2B2B2B] hover:bg-[#1A1A1A] text-white py-3 rounded-[10px] text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>

          {/* Register Footer */}
          <div className="text-center pt-2">
            <p className="text-xs text-[#757575]">
              Don't have an account?{' '}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[#856DF3] font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
