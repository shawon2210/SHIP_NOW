import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Truck, Plane, Ship, Calendar, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreateShipment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [transportType, setTransportType] = useState('road');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/shipments');
    }, 800);
  };

  return (
    <div className="p-4 lg:p-[20px] w-full max-w-[1217px] mx-auto flex flex-col gap-[20px] bg-[#F0F0F0] min-h-screen font-['Nunito_Sans',sans-serif]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Link to="/shipments" className="w-[24px] h-[24px] bg-[#363B3F] rounded-full flex items-center justify-center text-white hover:bg-[#2A1298] transition-colors">
            <ArrowLeft size={14} />
          </Link>
          <div>
            <div className="flex items-center gap-1 text-[11px] text-[#757575] mb-1">
              <span className="text-[#2A1298]">Shipment</span>
              <span>/</span>
              <span className="text-[#2A1298]">Overview</span>
              <span>/</span>
              <span>Create New Shipment</span>
            </div>
            <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Create New Shipment</h1>
          </div>
        </div>
      </div>

      <div className="bg-[#FEFEFE] rounded-[12px] p-[20px] flex flex-col gap-[20px]">
        {/* Section Header */}
        <div className="flex justify-between items-center pb-[4px] border-b border-[#E0E0E0]">
          <h2 className="text-[16px] font-semibold text-[#333333]">Overview</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Sender & Recipient */}
          <div className="flex flex-col lg:flex-row gap-[20px] bg-[#F5F5F5] rounded-[12px] p-[20px]">
            {/* Sender Info */}
            <div className="flex-1 flex flex-col gap-[16px]">
              <h3 className="text-[14px] font-bold text-[#333333]">Sender Info</h3>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#757575]">Sender Name / Company</label>
                  <input type="text" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Country</label>
                    <div className="bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-[20px] h-[16px] bg-gray-300 rounded-[2px]"></div>
                        <span className="text-[12px] text-[#333333]">US</span>
                      </div>
                      <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </div>
                  <div className="flex-[2] flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">City / State</label>
                    <input type="text" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-semibold text-[#757575]">Pickup Address</label>
                    <span className="text-[11px] text-[#2A1298] cursor-pointer">Use saved address</span>
                  </div>
                  <input type="text" className="w-full bg-[#F5F5F5] border border-[#C1B3FF] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] bg-[#E0E0E0] self-stretch"></div>

            {/* Recipient Info */}
            <div className="flex-1 flex flex-col gap-[16px]">
              <h3 className="text-[14px] font-bold text-[#333333]">Recipient Info</h3>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#757575]">Recipient Name / Company</label>
                  <input type="text" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Country</label>
                    <div className="bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-[20px] h-[16px] bg-gray-300 rounded-[2px]"></div>
                        <span className="text-[12px] text-[#333333]">US</span>
                      </div>
                      <ChevronDown size={14} className="text-[#333333]" />
                    </div>
                  </div>
                  <div className="flex-[2] flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">City / State</label>
                    <input type="text" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-semibold text-[#757575]">Delivery Address</label>
                    <span className="text-[11px] text-[#2A1298] cursor-pointer">Use saved address</span>
                  </div>
                  <input type="text" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" required />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#E0E0E0]"></div>

          {/* Package & Shipping Details */}
          <div className="flex flex-col lg:flex-row gap-[20px]">
            {/* Package Info */}
            <div className="flex-1 flex flex-col gap-[20px] bg-[#FEFEFE] rounded-[10px]">
              <h3 className="text-[14px] font-bold text-[#333333]">Package Info</h3>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#757575]">Package Type</label>
                  <div className="bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                    <span className="text-[12px] text-[#333333]">Standard Box</span>
                    <ChevronDown size={16} className="text-[#333333]" />
                  </div>
                </div>
                
                <div className="flex gap-[10px]">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Weight</label>
                    <div className="flex flex-col gap-1">
                      <div className="bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                        <input type="number" className="bg-transparent outline-none w-full text-[12px] text-[#333333]" placeholder="0.00" />
                        <span className="text-[12px] text-[#757575]">kg</span>
                      </div>
                      <span className="text-[11px] text-[#757575]">Max 50kg</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Dimensions (L x W x H)</label>
                    <div className="flex flex-col gap-1">
                      <div className="bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                        <input type="text" className="bg-transparent outline-none w-full text-[12px] text-[#333333]" placeholder="0 x 0 x 0" />
                        <span className="text-[12px] text-[#757575]">cm</span>
                      </div>
                      <span className="text-[11px] text-[#757575]">Max 120cm</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#757575]">Content Description</label>
                  <input type="text" className="w-full bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 text-[12px] text-[#333333] focus:outline-none focus:border-[#856DF3]" placeholder="e.g. Electronics, Documents" />
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="flex-[2] flex flex-col gap-[20px] bg-[#FEFEFE] rounded-[10px]">
              <h3 className="text-[14px] font-bold text-[#333333]">Shipping Details</h3>
              <div className="flex flex-col gap-[20px]">
                
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[11px] font-semibold text-[#757575]">Transport Mode</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-[8px]">
                    {/* Road */}
                    <div 
                      onClick={() => setTransportType('road')}
                      className={`flex items-center gap-3 p-3 rounded-[8px] border cursor-pointer transition-all ${transportType === 'road' ? 'border-[#856DF3] bg-[#FEFEFE]' : 'border-[#F0F0F0] bg-[#F5F5F5]'}`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${transportType === 'road' ? 'border-[#856DF3]' : 'border-[#E0E0E0] bg-[#FEFEFE]'}`}>
                        {transportType === 'road' && <div className="w-1.5 h-1.5 rounded-full bg-[#856DF3]"></div>}
                      </div>
                      <span className="text-[12px] text-[#333333] flex-1">Road Freight</span>
                      <Truck size={14} className={transportType === 'road' ? 'text-[#856DF3]' : 'text-[#757575]'} />
                    </div>
                    {/* Air */}
                    <div 
                      onClick={() => setTransportType('air')}
                      className={`flex items-center gap-3 p-3 rounded-[8px] border cursor-pointer transition-all ${transportType === 'air' ? 'border-[#856DF3] bg-[#FEFEFE]' : 'border-[#F0F0F0] bg-[#F5F5F5]'}`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${transportType === 'air' ? 'border-[#856DF3]' : 'border-[#E0E0E0] bg-[#FEFEFE]'}`}>
                        {transportType === 'air' && <div className="w-1.5 h-1.5 rounded-full bg-[#856DF3]"></div>}
                      </div>
                      <span className="text-[12px] text-[#333333] flex-1">Express Air</span>
                      <Plane size={14} className={transportType === 'air' ? 'text-[#856DF3]' : 'text-[#757575]'} />
                    </div>
                    {/* Sea */}
                    <div 
                      onClick={() => setTransportType('sea')}
                      className={`flex items-center gap-3 p-3 rounded-[8px] border cursor-pointer transition-all ${transportType === 'sea' ? 'border-[#856DF3] bg-[#FEFEFE]' : 'border-[#F0F0F0] bg-[#F5F5F5]'}`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${transportType === 'sea' ? 'border-[#856DF3]' : 'border-[#E0E0E0] bg-[#FEFEFE]'}`}>
                        {transportType === 'sea' && <div className="w-1.5 h-1.5 rounded-full bg-[#856DF3]"></div>}
                      </div>
                      <span className="text-[12px] text-[#333333] flex-1">Sea Freight</span>
                      <Ship size={14} className={transportType === 'sea' ? 'text-[#856DF3]' : 'text-[#757575]'} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Carrier Preferred (Optional)</label>
                    <div className="bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                      <span className="text-[12px] text-[#333333]">Any Available</span>
                      <ChevronDown size={16} className="text-[#333333]" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-[#757575]">Pickup Date</label>
                    <div className="bg-[#F5F5F5] border border-[#F0F0F0] rounded-[8px] px-3 py-2 flex items-center justify-between">
                      <input type="date" className="bg-transparent outline-none w-full text-[12px] text-[#333333]" />
                      <Calendar size={16} className="text-[#333333]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
          
          {/* Footer Actions */}
          <div className="flex justify-end items-center gap-[16px]">
            <Link to="/shipments" className="px-[16px] py-[10px] bg-[#F0F0F0] text-[#333333] rounded-[8px] text-[14px] font-semibold hover:bg-gray-200 transition-colors">
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="px-[16px] py-[10px] bg-[#333333] text-[#FEFEFE] rounded-[8px] text-[14px] font-semibold hover:bg-gray-800 transition-colors disabled:opacity-70 flex items-center gap-2"
            >
              {loading ? 'Creating...' : 'Create Shipment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
