import { useState } from 'react';
import { invoices } from '../data/mockData';
import { Search, SlidersHorizontal, CheckCircle, FileWarning, CircleDashed, Clock, FileText } from 'lucide-react';

export default function Invoices() {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(invoices[0].id);

  const selectedInvoice = invoices.find(inv => inv.id === selectedInvoiceId) || invoices[0];

  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-5 bg-[#F0F0F0] font-['Nunito_Sans'] h-full overflow-y-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 w-full gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-[24px] font-bold text-on-surface leading-tight">Invoices & Billing</h1>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-[#2A1298]">Dashboard</span>
            <span className="text-[#757575] mx-1">/</span>
            <span className="text-on-surface">Invoices & Billing</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto mt-3 md:mt-0">
          <div className="flex items-center bg-white rounded-[8px] px-2.5 py-1.5 w-full md:w-[290px] h-[40px] shadow-sm">
            <Search size={20} className="text-[#333333] mr-2 opacity-60" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-[14px] text-[#757575] w-full" />
          </div>
          <button className="flex justify-center items-center px-4 py-2 bg-[#333333] text-white rounded-[8px] h-[40px] text-[12px] font-semibold whitespace-nowrap shadow-sm hover:bg-[#222222] transition-colors">
            Download All
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 w-full">
        {/* Card 1 */}
        <div className="bg-white rounded-[12px] p-4 flex items-center gap-4 h-[114px] shadow-sm">
          <div className="w-[52px] h-[52px] rounded-[8px] bg-[#856DF3] flex items-center justify-center text-white shrink-0">
            <CheckCircle size={28} />
          </div>
          <div className="flex flex-col flex-1 items-end">
            <div className="text-[12px] font-semibold text-[#757575] mb-1">Total Paid</div>
            <div className="text-[28px] font-bold text-on-surface leading-none mb-1">1,284</div>
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-[#D9F9E7] px-1.5 py-0.5 rounded-[10px]">
                <span className="text-[10px] text-status-success font-medium">+4.2%</span>
              </div>
              <span className="text-[10px] text-[#757575]">vs last month</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[12px] p-4 flex items-center gap-4 h-[114px] shadow-sm">
          <div className="w-[52px] h-[52px] rounded-[8px] bg-[#856DF3] flex items-center justify-center text-white shrink-0">
            <FileWarning size={28} />
          </div>
          <div className="flex flex-col flex-1 items-end">
            <div className="text-[12px] font-semibold text-[#757575] mb-1">Total Overdue</div>
            <div className="text-[28px] font-bold text-on-surface leading-none mb-1">82</div>
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-[#FDEAEA] px-1.5 py-0.5 rounded-[10px]">
                <span className="text-[10px] text-status-danger font-medium">-1.2%</span>
              </div>
              <span className="text-[10px] text-[#757575]">vs last month</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[12px] p-4 flex items-center gap-4 h-[114px] shadow-sm">
          <div className="w-[52px] h-[52px] rounded-[8px] bg-[#856DF3] flex items-center justify-center text-white shrink-0">
            <CircleDashed size={28} />
          </div>
          <div className="flex flex-col flex-1 items-end">
            <div className="text-[12px] font-semibold text-[#757575] mb-1">Total Pending</div>
            <div className="text-[28px] font-bold text-on-surface leading-none mb-1">345</div>
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-[#D9F9E7] px-1.5 py-0.5 rounded-[10px]">
                <span className="text-[10px] text-status-success font-medium">+2.1%</span>
              </div>
              <span className="text-[10px] text-[#757575]">vs last month</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[12px] p-4 flex items-center gap-4 h-[114px] shadow-sm">
          <div className="w-[52px] h-[52px] rounded-[8px] bg-[#856DF3] flex items-center justify-center text-white shrink-0">
            <Clock size={28} />
          </div>
          <div className="flex flex-col flex-1 items-end">
            <div className="text-[12px] font-semibold text-[#757575] mb-1">Total Draft</div>
            <div className="text-[28px] font-bold text-on-surface leading-none mb-1">12</div>
            <div className="flex items-center gap-1">
              <div className="flex items-center bg-[#D9F9E7] px-1.5 py-0.5 rounded-[10px]">
                <span className="text-[10px] text-status-success font-medium">+0.8%</span>
              </div>
              <span className="text-[10px] text-[#757575]">vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col xl:flex-row gap-5 w-full h-auto xl:h-[734px]">
        
        {/* Left Table */}
        <div className="flex flex-col flex-grow xl:w-[678px] bg-white rounded-[12px] p-4 h-full shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[16px] font-semibold text-on-surface">Recent Invoices</h2>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center bg-[#F0F0F0] rounded-[8px] px-2 py-1.5 w-[200px] h-[28px]">
                <Search size={14} className="text-[#333333] mr-2 opacity-60" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-[12px] text-[#757575] w-full" />
              </div>
              <button className="flex items-center justify-center w-[28px] h-[28px] bg-[#F0F0F0] rounded-[8px] hover:bg-[#E0E0E0] transition-colors">
                <SlidersHorizontal size={14} className="text-[#363B3F]" />
              </button>
              <button className="flex items-center justify-center px-3 h-[28px] bg-[#333333] text-white text-[12px] font-semibold rounded-[8px] hover:bg-[#222222] transition-colors whitespace-nowrap">
                New Invoice
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto overflow-y-auto">
            <table className="w-full text-left min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-[#E0E0E0]">
                  <th className="py-3 px-2 w-[32px]">
                    <div className="w-3 h-3 border-2 border-[#856DF3] rounded-[3px] bg-white"></div>
                  </th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">ID</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">Company</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">PO Number</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">Issue & Due Date</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">Amount</th>
                  <th className="py-3 px-2 text-[10px] font-normal text-[#757575]">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr 
                    key={inv.id} 
                    onClick={() => setSelectedInvoiceId(inv.id)}
                    className={`border-b border-[#E0E0E0] cursor-pointer transition-colors ${selectedInvoiceId === inv.id ? 'bg-[#F4F2FC]' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <td className="py-3 px-2">
                      <div className={`w-3 h-3 border border-[#E0E0E0] rounded-[3px] ${selectedInvoiceId === inv.id ? 'bg-[#856DF3] border-[#856DF3]' : 'bg-[#F0F0F0]'}`}></div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1.5">
                        <div className="bg-[#F0F0F0] p-1 rounded">
                          <FileText size={12} className="text-[#757575]" />
                        </div>
                        <span className="text-[11px] font-semibold text-[#856DF3]">{inv.id.split('-')[2] || inv.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#856DF3] flex items-center justify-center text-[10px] text-white font-bold">
                          {inv.company.charAt(0)}
                        </div>
                        <span className="text-[11px] font-normal text-on-surface">{inv.company.substring(0, 15)}{inv.company.length > 15 ? '...' : ''}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[11px] font-semibold text-[#757575]">{inv.poNumber}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] font-normal text-on-surface">{inv.date}</span>
                          <span className="text-[10px] text-[#757575]">Issued</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[11px] font-normal text-on-surface">{inv.dueDate}</span>
                          <span className="text-[10px] text-[#757575]">Due</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[11px] font-semibold text-on-surface">{inv.amount}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        inv.status === 'PAID' ? 'bg-[#D9F9E7] text-status-success' :
                        inv.status === 'PENDING' ? 'bg-[#FFF4E5] text-status-warning' :
                        'bg-[#FDEAEA] text-status-danger'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel - Invoice Details */}
        <div className="flex flex-col xl:w-[479px] shrink-0 bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm">
          {/* Top Info */}
          <div className="p-4 border-b border-[#E0E0E0] flex justify-between items-center bg-[#FAFAFA] rounded-t-[12px]">
            <div>
              <div className="text-[14px] font-bold text-on-surface">{selectedInvoice.id}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  selectedInvoice.status === 'PAID' ? 'bg-[#D9F9E7] text-status-success' :
                  selectedInvoice.status === 'PENDING' ? 'bg-[#FFF4E5] text-status-warning' :
                  'bg-[#FDEAEA] text-status-danger'
                }`}>
                  {selectedInvoice.status}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-[#757575] mb-0.5">Issue Date: <span className="text-[11px] font-semibold text-on-surface ml-1">{selectedInvoice.date}</span></div>
              <div className="text-[10px] text-[#757575]">Due Date: <span className="text-[11px] font-semibold text-on-surface ml-1">{selectedInvoice.dueDate}</span></div>
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            {/* Bill To / From */}
            <div className="flex gap-4 p-4 bg-[#F5F5F5] rounded-[8px] mb-6">
              <div className="flex-1">
                <div className="text-[10px] text-[#757575] mb-2">Bill From</div>
                <div className="text-[16px] font-bold text-on-surface mb-1">Global Logistics Corp</div>
                <div className="text-[11px] text-[#757575] mb-1">billing@globallogistics.com</div>
                <div className="text-[11px] text-[#757575] mb-1">123 Shipping Lane, Port City, CA 90210</div>
                <div className="text-[11px] text-[#757575]">+1 (555) 123-4567</div>
              </div>
              <div className="flex-1 text-right">
                <div className="text-[10px] text-[#757575] mb-2">Bill To</div>
                <div className="text-[16px] font-bold text-on-surface mb-1">{selectedInvoice.company}</div>
                <div className="text-[11px] text-[#757575] mb-1">contact@{selectedInvoice.company.toLowerCase().replace(/\s/g, '')}.com</div>
                <div className="text-[11px] text-[#757575] mb-1">PO Box {selectedInvoice.poNumber.split('-')[1]}, Business District</div>
                <div className="text-[11px] text-[#757575]">+1 (555) 987-6543</div>
              </div>
            </div>

            {/* Package Summary */}
            <div className="mb-4">
              <h3 className="text-[14px] font-semibold text-on-surface mb-3">Invoice Details</h3>
              <div className="border border-[#E0E0E0] rounded-[8px] overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-[#F0F0F0]">
                    <tr>
                      <th className="py-2 px-3 text-[9px] font-normal text-[#757575]">Description</th>
                      <th className="py-2 px-3 text-[9px] font-normal text-[#757575]">Price</th>
                      <th className="py-2 px-3 text-[9px] font-normal text-[#757575] text-center">Qty</th>
                      <th className="py-2 px-3 text-[9px] font-normal text-[#757575] text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E0E0E0]">
                    {selectedInvoice.items.map((item, idx) => (
                      <tr key={idx} className="bg-white">
                        <td className="py-2.5 px-3">
                          <div className="text-[10px] font-medium text-on-surface mb-0.5">{item.desc}</div>
                          <div className="text-[9px] text-[#757575]">{item.details}</div>
                        </td>
                        <td className="py-2.5 px-3 text-[10px] font-semibold text-on-surface">${item.rate.toFixed(2)}</td>
                        <td className="py-2.5 px-3 text-[10px] font-semibold text-on-surface text-center">{item.qty}</td>
                        <td className="py-2.5 px-3 text-[10px] font-semibold text-on-surface text-right">${(item.rate * item.qty).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Totals */}
            <div className="ml-auto w-[250px] border-t border-[#E0E0E0] pt-3 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-semibold text-[#757575]">Subtotal</span>
                <span className="text-[10px] font-semibold text-on-surface">{selectedInvoice.amount}</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-semibold text-[#757575]">Tax (0%)</span>
                <span className="text-[10px] font-semibold text-on-surface">$0.00</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#E0E0E0] pt-2">
                <span className="text-[11px] font-bold text-on-surface">Total</span>
                <span className="text-[14px] font-bold text-on-surface">{selectedInvoice.amount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

