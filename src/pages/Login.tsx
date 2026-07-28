import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <main className="flex min-h-screen bg-background text-on-surface">
      {/* Left Section: Visual Brand Experience */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full mix-blend-overlay" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-black/10 blur-3xl rounded-full mix-blend-overlay" />
        </div>
        
        <div className="relative z-20 flex flex-col items-center text-center max-w-lg">
          <div className="mb-12 relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTwEwLhdHZvQ9o6CyebYKAzGx9j2UrspFSec3VUA3OT4ijmdksH2hIC-PAObihtlNPMaXjkAkw8Vm2EN02hzKecva7mRFQszCrpU32WrTk05RtPG1nKCemO7ItL8UrcRdHp09owTgAk8EPO7j5hd3wFH9tz0HTaDziZNGmhpWgmJ_kgr8VkNMAHANpZbmOxnidDaH63AzMDNAOqkNkvcPG5P0iuMWHPflahN9zsEt6_MyNDWwpl31Q" 
              alt="Delivery person scanning package" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="font-headline-md text-3xl font-bold text-white mb-4 tracking-tight">
            Welcome to ShipNow
          </h1>
          <p className="font-body-lg text-white/80 max-w-sm">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </section>

      {/* Right Section: Login Interface */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center p-gutter bg-surface-container-lowest">
        <div className="w-full max-w-md space-y-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex items-center gap-3 justify-center">
              <div className="flex flex-col gap-1 w-6 h-8 justify-center">
                <div className="w-4 h-3 bg-primary rounded-[2px] transform -skew-x-[20deg] translate-x-1.5"></div>
                <div className="w-4 h-3 bg-primary rounded-[2px] transform -skew-x-[20deg] -translate-x-1.5"></div>
              </div>
              <span className="font-headline-md text-primary tracking-widest text-xl font-black uppercase mt-1">ShipNow</span>
            </div>
            <h2 className="font-headline-md text-on-surface mb-2 text-2xl font-bold">Welcome Back</h2>
            <p className="text-on-surface-variant font-body-sm">Log in to continue managing your logistics with ShipNow.</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface-variant block text-xs font-semibold">Email Address</label>
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-outline font-body-sm`}
                  placeholder="Enter a valid email address" 
                  required 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface-variant block text-xs font-semibold">Password</label>
              <div className="relative group">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-outline font-body-sm`}
                  placeholder="Create a strong password" 
                  required 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && <p className="text-error font-label-md pt-1 text-xs">{error}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer hidden" />
                  <div className="w-4 h-4 border border-outline-variant rounded group-hover:border-primary peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                    <Check className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={12} strokeWidth={3} />
                  </div>
                </div>
                <span className="text-xs text-on-surface-variant">Remember Me</span>
              </label>
              <button type="button" className="text-xs text-primary font-medium hover:underline transition-all">Forgot Password?</button>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-white font-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-sm font-bold disabled:opacity-70 mt-2"
            >
              <span>{loading ? 'Authenticating...' : 'Login'}</span>
            </button>
          </form>

          <div className="pt-6 text-center space-y-4">
            <p className="text-xs text-on-surface-variant">
              Don't have an account? <a href="#" className="text-primary font-medium hover:underline">Register</a>
            </p>
            <div className="flex justify-center gap-6 text-label-md text-outline font-semibold">
              <a href="#" className="hover:text-on-surface-variant transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-on-surface-variant transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-on-surface-variant transition-colors">Help Center</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
