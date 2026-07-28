import { useState } from 'react';
import { 
  Search, SlidersHorizontal, CheckCircle2, XSquare, 
  CircleDashed, Clock, FileText, ArrowUpDown, 
  Facebook, Twitter, Instagram, Youtube, Linkedin
} from 'lucide-react';

const mockInvoicesData = [
  { id: 'INV-1001', company: 'TechGear Inc.', icon: '⚡', shippingId: '#SH9283746', issued: 'Mar 15, 2035', due: 'Mar 22, 2035', amount: '$1,250.00', status: 'Paid' },
  { id: 'INV-1002', company: 'StyleHub Co.', icon: '▲', shippingId: '#SH9182635', issued: 'Mar 16, 2035', due: 'Mar 23, 2035', amount: '$980.00', status: 'Unpaid' },
  { id: 'INV-1003', company: 'FreshNest', icon: '♣', shippingId: '#SH9037821', issued: 'Mar 14, 2035', due: 'Mar 21, 2035', amount: '$1,320.00', status: 'Paid' },
  { id: 'INV-1004', company: 'FitPlus Gear', icon: '❖', shippingId: '#SH9374652', issued: 'Mar 17, 2035', due: 'Mar 24, 2035', amount: '$1,150.00', status: 'Unpaid' },
  { id: 'INV-1005', company: 'AutoParts Pro', icon: '◢', shippingId: '#SH9457830', issued: 'Mar 15, 2035', due: 'Mar 22, 2035', amount: '$1,480.00', status: 'Overdue' },
  { id: 'INV-1006', company: 'EcoLights', icon: '✳', shippingId: '#SH8821349', issued: 'Mar 13, 2035', due: 'Mar 20, 2035', amount: '$790.00', status: 'Paid' },
  { id: 'INV-1007', company: 'GreenHaven', icon: '🛡', shippingId: '#SH8967432', issued: 'Mar 14, 2035', due: 'Mar 21, 2035', amount: '$875.00', status: 'Paid' },
  { id: 'INV-1008', company: 'ModaWear', icon: 'M', shippingId: '#SH8893247', issued: 'Mar 16, 2035', due: 'Mar 23, 2035', amount: '$910.00', status: 'Unpaid' },
  { id: 'INV-1009', company: 'SunCore Panels', icon: '⁑', shippingId: '#SH9018723', issued: 'Mar 17, 2035', due: 'Mar 24, 2035', amount: '$1,600.00', status: 'Unpaid' },
  { id: 'INV-1010', company: 'VitaFresh', icon: '♾', shippingId: '#SH8881190', issued: 'Mar 15, 2035', due: 'Mar 22, 2035', amount: '$1,120.00', status: 'Overdue' },
  { id: 'INV-1011', company: 'SmartAppliance', icon: '✦', shippingId: '#SH8923752', issued: 'Mar 18, 2035', due: 'Mar 25, 2035', amount: '$1,050.00', status: 'Paid' },
];

export default function Invoices() {
  const [selectedId, setSelectedId] = useState('INV-1008');
  const [search, setSearch] = useState('');

  const selectedInvoice = mockInvoicesData.find(i => i.id === selectedId) || mockInvoicesData[7];

  return (
    <div className="flex flex-col gap-[20px] w-full min-w-0 pb-[40px]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-[#333333] leading-[1.1]">Invoices & Billing</h1>
          <p className="text-[12px] text-[#757575] mt-1">
            <span className="text-[#856DF3] cursor-pointer hover:underline">Dashboard</span> / Invoices & Billing
          </p>
        </div>
        
        <div className="flex items-center bg-[#FEFEFE] px-3 py-2 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[280px] shadow-2xs">
          <Search size={18} className="text-[#757575]" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="ml-2 bg-transparent outline-none text-[14px] text-[#333333] w-full placeholder-[#757575]"
          />
        </div>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        
        {/* Card 1: Paid Invoices */}
        <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between">
          <div className="w-[44px] h-[44px] bg-[#856DF3] text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-2xs">
            <CheckCircle2 size={22} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-semibold text-[#757575]">Paid Invoices</span>
            <span className="text-[24px] font-bold text-[#333333] leading-tight">$28,890</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-[#757575]">
              <span>from</span>
              <span className="px-1.5 py-0.2 bg-[#D9F9E7] text-[#007837] font-bold rounded-[4px]">350</span>
              <span>Invoices</span>
            </div>
          </div>
        </div>

        {/* Card 2: Unpaid Invoices */}
        <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between">
          <div className="w-[44px] h-[44px] bg-[#856DF3] text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-2xs">
            <XSquare size={22} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-semibold text-[#757575]">Unpaid Invoices</span>
            <span className="text-[24px] font-bold text-[#333333] leading-tight">$16,700</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-[#757575]">
              <span>from</span>
              <span className="px-1.5 py-0.2 bg-[#D9F9E7] text-[#007837] font-bold rounded-[4px]">120</span>
              <span>Invoices</span>
            </div>
          </div>
        </div>

        {/* Card 3: Pending Invoices */}
        <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between">
          <div className="w-[44px] h-[44px] bg-[#856DF3] text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-2xs">
            <CircleDashed size={22} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-semibold text-[#757575]">Pending Invoices</span>
            <span className="text-[24px] font-bold text-[#333333] leading-tight">$8,050</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-[#757575]">
              <span>from</span>
              <span className="px-1.5 py-0.2 bg-[#D9F9E7] text-[#007837] font-bold rounded-[4px]">80</span>
              <span>Invoices</span>
            </div>
          </div>
        </div>

        {/* Card 4: Overdue Invoices */}
        <div className="bg-[#FEFEFE] rounded-[12px] p-[16px] border border-[#F0F0F0]/50 shadow-2xs flex items-center justify-between">
          <div className="w-[44px] h-[44px] bg-[#856DF3] text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-2xs">
            <Clock size={22} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[12px] font-semibold text-[#757575]">Overdue Invoices</span>
            <span className="text-[24px] font-bold text-[#333333] leading-tight">$22,110</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-[#757575]">
              <span>from</span>
              <span className="px-1.5 py-0.2 bg-[#D9F9E7] text-[#007837] font-bold rounded-[4px]">245</span>
              <span>Invoices</span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Two Column Area */}
      <div className="flex flex-col xl:flex-row gap-[20px] w-full min-w-0">
        
        {/* Left Column: Invoices Table Panel */}
        <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-[20px] flex-1 flex flex-col gap-4 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-[18px] font-bold text-[#333333]">Invoices</h2>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex items-center bg-[#F5F5F5] px-2.5 py-1.5 rounded-[8px] border border-[#F0F0F0] w-full sm:w-[180px]">
                <Search size={14} className="text-[#757575]" />
                <input 
                  type="text" 
                  placeholder="Search invoices"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="ml-2 bg-transparent outline-none text-[12px] text-[#333333] w-full placeholder-[#757575]"
                />
              </div>
              <button className="p-2 bg-[#F5F5F5] hover:bg-[#F0F0F0] border border-[#F0F0F0] rounded-[8px] transition-colors cursor-pointer shrink-0">
                <SlidersHorizontal size={14} className="text-[#333333]" />
              </button>
              <button className="bg-[#333333] hover:bg-[#222222] text-white px-3.5 py-1.5 rounded-[8px] text-[12px] font-semibold transition-colors cursor-pointer shrink-0">
                New Invoice
              </button>
            </div>
          </div>

          {/* Invoices Table */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="text-[11px] text-[#757575] font-normal border-b border-[#F0F0F0]">
                <tr>
                  <th className="py-2.5 px-3 w-8">
                    <div className="w-4 h-4 bg-[#856DF3] rounded-[4px] flex items-center justify-center text-white text-[10px] font-bold">
                      -
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Invoice ID <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Company <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Shipping ID <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Date <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Amount <ArrowUpDown size={10} />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#333333]">
                      Status <ArrowUpDown size={10} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0] text-[12px]">
                {mockInvoicesData
                  .filter(inv => inv.id.toLowerCase().includes(search.toLowerCase()) || inv.company.toLowerCase().includes(search.toLowerCase()))
                  .map((inv) => {
                    const isSelected = inv.id === selectedId;
                    return (
                      <tr 
                        key={inv.id} 
                        onClick={() => setSelectedId(inv.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-[#E3DDFF]/40 font-medium' : 'hover:bg-[#F5F5F5]'
                        }`}
                      >
                        <td className="py-3 px-3">
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            onChange={() => setSelectedId(inv.id)}
                            className="w-3.5 h-3.5 rounded border-[#F0F0F0] accent-[#856DF3] cursor-pointer"
                          />
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-1 text-[#856DF3] font-semibold">
                            <span>{inv.id}</span>
                            <FileText size={12} className="text-[#757575]/60" />
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2 font-semibold text-[#333333]">
                            <span className="w-5 h-5 rounded-full bg-[#F0F0F0] flex items-center justify-center text-[10px] text-[#333333]">
                              {inv.icon}
                            </span>
                            <span>{inv.company}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-[#757575] font-mono text-[11px]">{inv.shippingId}</td>
                        <td className="py-3 px-3">
                          <div className="flex flex-col leading-tight">
                            <span className="text-[#333333] font-semibold">{inv.issued} <span className="text-[#757575] text-[10px] font-normal">(Issued)</span></span>
                            <span className="text-[#757575] text-[11px]">{inv.due} <span className="text-[#757575] text-[10px] font-normal">(Due)</span></span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-semibold text-[#333333]">{inv.amount}</td>
                        <td className="py-3 px-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-[6px] text-[11px] font-semibold text-center min-w-[60px] ${
                            inv.status === 'Paid' ? 'bg-[#D9F9E7] text-[#007837]' :
                            inv.status === 'Unpaid' ? 'bg-[#E3DDFF] text-[#2A1298]' :
                            'bg-[#F0F0F0] text-[#757575]'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Invoice Details Card */}
        <div className="bg-[#FEFEFE] rounded-[12px] border border-[#F0F0F0]/50 shadow-2xs p-[20px] w-full xl:w-[460px] shrink-0 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center border-b border-[#F0F0F0] pb-3">
              <h2 className="text-[16px] font-bold text-[#333333]">Invoice Details</h2>
              <div className="flex items-center gap-1.5">
                <button className="bg-[#F5F5F5] hover:bg-[#F0F0F0] text-[#333333] px-3 py-1.5 rounded-[6px] text-[12px] font-semibold cursor-pointer transition-colors">
                  Edit
                </button>
                <button className="bg-[#F5F5F5] hover:bg-[#F0F0F0] text-[#333333] px-3 py-1.5 rounded-[6px] text-[12px] font-semibold cursor-pointer transition-colors">
                  Hold
                </button>
                <button className="bg-[#333333] hover:bg-[#222222] text-white px-3.5 py-1.5 rounded-[6px] text-[12px] font-semibold cursor-pointer transition-colors">
                  Send Invoice
                </button>
              </div>
            </div>

            {/* Subheader: Invoice Title & Dates */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[16px] font-bold text-[#333333]">
                  Invoice <span className="text-[#856DF3]">#{selectedInvoice.id}</span>
                </h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-[6px] text-[11px] font-semibold bg-[#E3DDFF] text-[#2A1298]">
                  {selectedInvoice.status}
                </span>
              </div>
              <div className="text-right text-[11px] text-[#757575]">
                <p>Issue Date <span className="font-semibold text-[#333333] ml-1">{selectedInvoice.issued}</span></p>
                <p className="mt-0.5">Due Date <span className="font-semibold text-[#333333] ml-1">{selectedInvoice.due}</span></p>
              </div>
            </div>

            {/* Bill From & Bill To Container */}
            <div className="bg-[#F5F5F5] rounded-[10px] p-4 flex justify-between gap-4 text-[11px]">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#757575] mb-1">Bill From</span>
                <span className="font-bold text-[#333333] text-[14px]">ModaWear</span>
                <span className="text-[#757575] mt-0.5">billing@modawear.com</span>
                <span className="text-[#757575] mt-0.5">89 Franklin St, Boston, MA 02110, USA</span>
                <span className="text-[#757575] mt-0.5">+1 617-555-2290</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] text-[#757575] mb-1">Bill To</span>
                <span className="font-bold text-[#333333] text-[14px]">ShipNow Logistics</span>
                <span className="text-[#757575] mt-0.5">accounts@shipnow.com</span>
                <span className="text-[#757575] mt-0.5">901 Distribution Ave, Charlotte, NC 28217, USA</span>
                <span className="text-[#757575] mt-0.5">+1 704-555-9911</span>
              </div>
            </div>

            {/* Package Summary Table */}
            <div>
              <h4 className="text-[14px] font-bold text-[#333333] mb-2">Package Summary</h4>
              <div className="border border-[#F0F0F0] rounded-[8px] overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-[#F5F5F5] text-[#757575] font-semibold border-b border-[#F0F0F0]">
                    <tr>
                      <th className="py-2 px-3">Description &#8597;</th>
                      <th className="py-2 px-3">Shipment Type &#8597;</th>
                      <th className="py-2 px-3">Price &#8597;</th>
                      <th className="py-2 px-3 text-center">Qty &#8597;</th>
                      <th className="py-2 px-3 text-right">Amount &#8597;</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F0F0]">
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-[#333333]">Lightweight Hoodie Pack</td>
                      <td className="py-2.5 px-3 text-[#757575]">Road Freight<br/><span className="text-[9px]">Express</span></td>
                      <td className="py-2.5 px-3 text-[#333333]">$120.00</td>
                      <td className="py-2.5 px-3 text-center text-[#333333]">3</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-[#333333]">$360.00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-[#333333]">Autumn Jacket Set</td>
                      <td className="py-2.5 px-3 text-[#757575]">Road Freight<br/><span className="text-[9px]">Standard</span></td>
                      <td className="py-2.5 px-3 text-[#333333]">$180.00</td>
                      <td className="py-2.5 px-3 text-center text-[#333333]">2</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-[#333333]">$360.00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-medium text-[#333333]">Lightweight Hoodie Pack</td>
                      <td className="py-2.5 px-3 text-[#757575]">Road Freight<br/><span className="text-[9px]">Express</span></td>
                      <td className="py-2.5 px-3 text-[#333333]">$95.00</td>
                      <td className="py-2.5 px-3 text-center text-[#333333]">2</td>
                      <td className="py-2.5 px-3 text-right font-semibold text-[#333333]">$190.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Subtotal Summary Table */}
              <div className="flex flex-col gap-1.5 mt-3 pt-2 border-t border-[#F0F0F0] text-[12px] ml-auto w-[220px]">
                <div className="flex justify-between text-[#757575]">
                  <span>Sub Total</span>
                  <span className="font-semibold text-[#333333]">$910.00</span>
                </div>
                <div className="flex justify-between text-[#757575]">
                  <span>Tax (8%)</span>
                  <span className="font-semibold text-[#333333]">$72.80</span>
                </div>
                <div className="flex justify-between text-[#757575]">
                  <span>Fee</span>
                  <span className="font-semibold text-[#333333]">$10.00</span>
                </div>
                <div className="flex justify-between text-[14px] font-bold text-[#333333] pt-1 border-t border-[#F0F0F0]">
                  <span>Total</span>
                  <span>$992.80</span>
                </div>
              </div>
            </div>
          </div>

          {/* Note Section at Bottom */}
          <div className="pt-3 border-t border-[#F0F0F0]">
            <span className="text-[11px] font-bold text-[#757575] block mb-0.5">Note</span>
            <p className="text-[11px] text-[#757575] leading-normal">
              Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-[#F0F0F0] text-[12px] text-[#757575] gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <span>Copyright &copy; 2025 Peterdraw</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Term and conditions</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Facebook size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Twitter size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Instagram size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Youtube size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
          <Linkedin size={16} className="cursor-pointer hover:text-[#333333] transition-colors" />
        </div>
      </div>

    </div>
  );
}
