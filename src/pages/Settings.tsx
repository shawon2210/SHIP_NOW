import { useRef, useState } from 'react';
import { useUser } from '../context/UserContext';
import { Camera, Save, X, User, Mail, Shield } from 'lucide-react';

export default function Settings() {
  const { user, updateUser } = useUser();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, role: user.role, email: user.email });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    updateUser(form);
    setEditing(false);
  };

  const handleCancel = () => {
    setForm({ name: user.name, role: user.role, email: user.email });
    setEditing(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      updateUser({ avatar: dataUrl });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-[1217px] mx-auto">
      <h1 className="text-[24px] font-bold text-[#333333] leading-[110%] tracking-tight mb-[20px]">
        Settings
      </h1>

      <div className="bg-[#FEFEFE] rounded-xl border border-[#F0F0F0]/80 shadow-2xs overflow-hidden">
        <div className="p-[20px] sm:p-[24px] flex flex-col gap-[24px]">
          <h2 className="text-[16px] sm:text-[18px] font-bold text-[#333333]">Profile</h2>

          <div className="flex items-center gap-[20px]">
            <div className="relative shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover border-4 border-[#E3DDFF]"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[#856DF3] text-white rounded-full flex items-center justify-center hover:bg-[#2A1298] transition-colors cursor-pointer shadow-md"
              >
                <Camera size={14} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[16px] sm:text-[18px] font-bold text-[#333333]">{user.name}</span>
              <span className="text-[12px] sm:text-[13px] text-[#757575]">{user.role}</span>
              <span className="text-[12px] sm:text-[13px] text-[#757575]">{user.email}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#F0F0F0]" />

        <div className="p-[20px] sm:p-[24px]">
          {!editing ? (
            <div className="flex flex-col gap-[16px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Full Name</span>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] bg-[#F5F5F5] rounded-[8px]">
                    <User size={16} className="text-[#757575] shrink-0" />
                    <span className="text-[13px] font-semibold text-[#333333]">{user.name}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Role</span>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] bg-[#F5F5F5] rounded-[8px]">
                    <Shield size={16} className="text-[#757575] shrink-0" />
                    <span className="text-[13px] font-semibold text-[#333333]">{user.role}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] sm:col-span-2">
                  <span className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Email</span>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] bg-[#F5F5F5] rounded-[8px]">
                    <Mail size={16} className="text-[#757575] shrink-0" />
                    <span className="text-[13px] font-semibold text-[#333333]">{user.email}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setEditing(true)}
                className="self-start mt-[4px] px-[16px] py-[8px] bg-[#856DF3] text-white text-[12px] font-bold rounded-[8px] hover:bg-[#2A1298] transition-colors cursor-pointer"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[16px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Full Name</label>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] focus-within:border-[#856DF3] transition-colors">
                    <User size={16} className="text-[#757575] shrink-0" />
                    <input
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="flex-1 text-[13px] font-semibold text-[#333333] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Role</label>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] focus-within:border-[#856DF3] transition-colors">
                    <Shield size={16} className="text-[#757575] shrink-0" />
                    <input
                      value={form.role}
                      onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                      className="flex-1 text-[13px] font-semibold text-[#333333] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] sm:col-span-2">
                  <label className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider">Email</label>
                  <div className="flex items-center gap-[8px] px-[12px] py-[10px] border border-[#E0E0E0] rounded-[8px] focus-within:border-[#856DF3] transition-colors">
                    <Mail size={16} className="text-[#757575] shrink-0" />
                    <input
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="flex-1 text-[13px] font-semibold text-[#333333] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[8px] mt-[4px]">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-[6px] px-[16px] py-[8px] bg-[#856DF3] text-white text-[12px] font-bold rounded-[8px] hover:bg-[#2A1298] transition-colors cursor-pointer"
                >
                  <Save size={14} />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-[6px] px-[16px] py-[8px] bg-[#F0F0F0] text-[#333333] text-[12px] font-bold rounded-[8px] hover:bg-[#E0E0E0] transition-colors cursor-pointer"
                >
                  <X size={14} />
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
