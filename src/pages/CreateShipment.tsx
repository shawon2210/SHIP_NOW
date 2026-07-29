import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Calendar, ChevronUp } from 'lucide-react';

export default function CreateShipment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [freightType, setFreightType] = useState('road');
  const [carrier, setCarrier] = useState('FedEx');
  const [insuranceCoverage, setInsuranceCoverage] = useState(true);
  const [temperatureControl, setTemperatureControl] = useState(true);
  const [signatureOnDelivery, setSignatureOnDelivery] = useState(true);
  const [fragileHandling, setFragileHandling] = useState(false);
  const [notifyRecipient, setNotifyRecipient] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/shipments');
    }, 800);
  };

  return (
    <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] w-full min-w-0 pt-[20px] sm:pt-[30px] lg:pt-[40px] pb-[20px]">

      {/* ── Header ── */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link to="/shipments" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] flex items-center justify-center text-[#333333] hover:bg-[#F0F0F0] transition-colors shrink-0">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#333333] leading-[1.1]">Create New Shipment</h1>
          <div className="flex items-center gap-1 text-[11px] mt-0.5">
            <span className="text-[#856DF3]">Dashboard</span>
            <span className="text-[#757575]">/</span>
            <span className="text-[#856DF3]">Shipments</span>
            <span className="text-[#757575]">/</span>
            <span className="text-[#333333]">Create New Shipment</span>
          </div>
        </div>
      </div>

      {/* ── Main Form Card ── */}
      <form onSubmit={handleSubmit} className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-4 sm:p-5 lg:p-6 flex flex-col gap-[20px] sm:gap-[24px]">

        {/* Section Title */}
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#333333]">Shipment Form</h2>

        {/* ── Sender & Recipient Info ── */}
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[20px]">

          {/* Sender Info */}
          <div className="flex-1 bg-[#F9F9F9] rounded-[12px] p-3 sm:p-4 lg:p-5 flex flex-col gap-[14px] sm:gap-[16px] min-w-0">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-[#333333]">Sender Info</h3>

            {/* Company */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Company</label>
              <input type="text" defaultValue="GreenHaven" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
            </div>

            {/* Email + Phone */}
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <label className="text-[11px] font-semibold text-[#757575]">Email</label>
                <input type="email" defaultValue="logistics@greenhaven.com" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
              </div>
              <div className="w-full sm:w-[180px] flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Phone Number</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-2.5 py-2 sm:py-2.5 gap-1.5">
                  <span className="text-[14px]">🇺🇸</span>
                  <span className="text-[12px] text-[#333333]">+1</span>
                  <ChevronDown size={12} className="text-[#757575]" />
                  <input type="tel" defaultValue="408-555-7210" className="bg-transparent outline-none flex-1 text-[12px] sm:text-[13px] text-[#333333] min-w-0" />
                </div>
              </div>
            </div>

            {/* Pickup Address */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Pickup Address</label>
              <input type="text" defaultValue="1120 Birch Street, Portland, OR 97205, USA" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
            </div>
          </div>

          {/* Recipient Info */}
          <div className="flex-1 bg-[#F9F9F9] rounded-[12px] p-3 sm:p-4 lg:p-5 flex flex-col gap-[14px] sm:gap-[16px] min-w-0 border border-[#E3DDFF]/60">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-[#333333]">Recipient Info</h3>

            {/* Company */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Company</label>
              <input type="text" defaultValue="FreshNest" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
            </div>

            {/* Email + Phone */}
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <label className="text-[11px] font-semibold text-[#757575]">Email</label>
                <input type="email" defaultValue="warehouse@freshnest.com" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
              </div>
              <div className="w-full sm:w-[180px] flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Phone Number</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-2.5 py-2 sm:py-2.5 gap-1.5">
                  <span className="text-[14px]">🇺🇸</span>
                  <span className="text-[12px] text-[#333333]">+1</span>
                  <ChevronDown size={12} className="text-[#757575]" />
                  <input type="tel" defaultValue="786-555-4432" className="bg-transparent outline-none flex-1 text-[12px] sm:text-[13px] text-[#333333] min-w-0" />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Delivery Address</label>
              <input type="text" placeholder="Street address, city, state/province, ZIP code" className="w-full bg-[#FEFEFE] border border-[#856DF3] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors placeholder:text-[#ABABAB]" required />
              <span className="text-[10px] sm:text-[11px] text-[#F04A4A] font-medium">Address is required.</span>
            </div>
          </div>
        </div>

        {/* ── Package Details & Shipping Details ── */}
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[20px]">

          {/* Package Details */}
          <div className="flex-1 flex flex-col gap-[14px] sm:gap-[16px] min-w-0">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-[#333333]">Package Details</h3>

            {/* Item Description */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Item Description</label>
              <input type="text" defaultValue="Premium Garden Tool Set" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
            </div>

            {/* Quantity + Value */}
            <div className="flex gap-[12px] sm:gap-[16px]">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Quantity</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] overflow-hidden">
                  <input type="number" defaultValue="40" className="flex-1 bg-transparent px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] outline-none min-w-0" />
                  <div className="flex flex-col border-l border-[#F0F0F0]">
                    <button type="button" className="px-1.5 py-0.5 hover:bg-[#F0F0F0] transition-colors"><ChevronUp size={10} className="text-[#757575]" /></button>
                    <button type="button" className="px-1.5 py-0.5 hover:bg-[#F0F0F0] transition-colors border-t border-[#F0F0F0]"><ChevronDown size={10} className="text-[#757575]" /></button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Value</label>
                <input type="text" defaultValue="$3,200" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
              </div>
            </div>

            {/* Weight + Units */}
            <div className="flex gap-[12px] sm:gap-[16px]">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Weight</label>
                <input type="number" defaultValue="125" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" />
              </div>
              <div className="w-[100px] sm:w-[120px] flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Units</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 justify-between cursor-pointer">
                  <span className="text-[12px] sm:text-[13px] text-[#333333] font-semibold">Kg</span>
                  <ChevronDown size={14} className="text-[#757575]" />
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Dimensions</label>
              <div className="flex gap-[8px] sm:gap-[12px] items-end">
                <div className="flex-1 flex flex-col gap-0.5 items-center">
                  <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] overflow-hidden w-full">
                    <input type="number" defaultValue="80" className="w-full bg-transparent px-2.5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] outline-none text-center" />
                    <span className="text-[11px] text-[#757575] pr-2 shrink-0">cm</span>
                  </div>
                  <span className="text-[10px] text-[#757575]">Length</span>
                </div>
                <div className="flex-1 flex flex-col gap-0.5 items-center">
                  <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] overflow-hidden w-full">
                    <input type="number" defaultValue="60" className="w-full bg-transparent px-2.5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] outline-none text-center" />
                    <span className="text-[11px] text-[#757575] pr-2 shrink-0">cm</span>
                  </div>
                  <span className="text-[10px] text-[#757575]">Width</span>
                </div>
                <div className="flex-1 flex flex-col gap-0.5 items-center">
                  <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] overflow-hidden w-full">
                    <input type="text" defaultValue="ex. 20" className="w-full bg-transparent px-2.5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#ABABAB] outline-none text-center" />
                    <span className="text-[11px] text-[#757575] pr-2 shrink-0">cm</span>
                  </div>
                  <span className="text-[10px] text-[#757575]">Height</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="flex-1 flex flex-col gap-[14px] sm:gap-[16px] min-w-0">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-[#333333]">Shipping Details</h3>

            {/* Freight Type (radio) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#757575]">Freight Type</label>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                {[
                  { key: 'road', label: 'Road Freight' },
                  { key: 'rail', label: 'Rail Freight' },
                  { key: 'ocean', label: 'Ocean Freight' },
                  { key: 'air', label: 'Air Freight' },
                ].map(ft => (
                  <label key={ft.key} className="flex items-center gap-2 cursor-pointer" onClick={() => setFreightType(ft.key)}>
                    <div className={`w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center ${freightType === ft.key ? 'border-[#856DF3]' : 'border-[#D0D0D0]'}`}>
                      {freightType === ft.key && <div className="w-[8px] h-[8px] rounded-full bg-[#856DF3]"></div>}
                    </div>
                    <span className="text-[12px] sm:text-[13px] text-[#333333]">{ft.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Carrier + Shipping Method + Shipment ID + Date */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[14px]">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Carrier</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 justify-between cursor-pointer">
                  <span className="text-[12px] sm:text-[13px] text-[#333333]">{carrier}</span>
                  <ChevronDown size={14} className="text-[#757575]" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Shipping Method</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#856DF3] rounded-[8px] px-3 py-2 sm:py-2.5 justify-between cursor-pointer">
                  <span className="text-[12px] sm:text-[13px] text-[#ABABAB]">Select Method</span>
                  <ChevronDown size={14} className="text-[#757575]" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#856DF3] font-medium">Shipping method is required.</span>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Shipment ID</label>
                <input type="text" defaultValue="#SH9583742" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors" readOnly />
                <span className="text-[10px] text-[#757575]">Auto-generated</span>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#757575]">Shipment Date</label>
                <div className="flex items-center bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 gap-2">
                  <span className="text-[12px] sm:text-[13px] text-[#333333] flex-1">March 21, 2035</span>
                  <Calendar size={14} className="text-[#757575] shrink-0" />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-[#757575]">Notes</label>
              <input type="text" placeholder="Add special delivery notes (optional)" className="w-full bg-[#FEFEFE] border border-[#F0F0F0] rounded-[8px] px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] text-[#333333] focus:outline-none focus:border-[#856DF3] transition-colors placeholder:text-[#ABABAB]" />
            </div>

            {/* Additional Services + Tracking */}
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[20px]">
              {/* Additional Services */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[11px] font-semibold text-[#757575]">Additional Services</label>
                <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5">
                  {[
                    { label: 'Insurance Coverage', checked: insuranceCoverage, toggle: () => setInsuranceCoverage(!insuranceCoverage) },
                    { label: 'Temperature Control', checked: temperatureControl, toggle: () => setTemperatureControl(!temperatureControl) },
                    { label: 'Signature on Delivery', checked: signatureOnDelivery, toggle: () => setSignatureOnDelivery(!signatureOnDelivery) },
                    { label: 'Fragile Item Handling', checked: fragileHandling, toggle: () => setFragileHandling(!fragileHandling) },
                  ].map(svc => (
                    <label key={svc.label} className="flex items-center gap-2 cursor-pointer" onClick={svc.toggle}>
                      <div className={`w-[16px] h-[16px] rounded-[4px] flex items-center justify-center border ${svc.checked ? 'bg-[#856DF3] border-[#856DF3]' : 'bg-[#FEFEFE] border-[#D0D0D0]'}`}>
                        {svc.checked && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                      </div>
                      <span className="text-[11px] sm:text-[12px] text-[#333333]">{svc.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tracking & Status Updates */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-semibold text-[#757575]">Tracking & Status Updates</label>
                <label className="flex items-center gap-2.5 cursor-pointer" onClick={() => setNotifyRecipient(!notifyRecipient)}>
                  {/* Toggle Switch */}
                  <div className={`w-[36px] h-[20px] rounded-full flex items-center px-[2px] transition-colors cursor-pointer ${notifyRecipient ? 'bg-[#856DF3]' : 'bg-[#D0D0D0]'}`}>
                    <div className={`w-[16px] h-[16px] rounded-full bg-white shadow-sm transition-transform ${notifyRecipient ? 'translate-x-[16px]' : 'translate-x-0'}`}></div>
                  </div>
                  <span className="text-[11px] sm:text-[12px] text-[#333333]">Notify Recipient via Email/SMS</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Actions ── */}
        <div className="flex justify-end items-center gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-[#F0F0F0]">
          <button type="button" onClick={() => navigate('/shipments')} className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#FEFEFE] border border-[#E0E0E0] text-[#333333] rounded-[8px] text-[12px] sm:text-[13px] font-semibold hover:bg-[#F0F0F0] transition-colors cursor-pointer">
            Delete Form
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#333333] text-[#FEFEFE] rounded-[8px] text-[12px] sm:text-[13px] font-semibold hover:bg-[#222222] transition-colors disabled:opacity-70 cursor-pointer"
          >
            {loading ? 'Submitting...' : 'Submit Shipment'}
          </button>
        </div>
      </form>

      {/* ── Footer ── */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 mt-2 sm:mt-4 px-1 sm:px-2 gap-3 sm:gap-4">
        <span className="text-[11px] sm:text-[12px] font-semibold text-[#333333]">Copyright © 2025 Peterdraw</span>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Privacy Policy</a>
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Term and conditions</a>
          <a href="#" className="text-[11px] sm:text-[12px] text-[#757575] hover:text-[#333333]">Contact</a>
        </div>
      </div>

    </div>
  );
}
