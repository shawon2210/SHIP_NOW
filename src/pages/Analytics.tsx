import { BarChart, LineChart } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-5 bg-[#F0F0F0] font-['Nunito_Sans'] h-full overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 w-full gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-[24px] font-bold text-on-surface leading-tight">Analytics</h1>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-[#2A1298]">Dashboard</span>
            <span className="text-[#757575] mx-1">/</span>
            <span className="text-on-surface">Analytics</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-[12px] p-8 shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center">
        <LineChart size={48} className="text-[#856DF3] mb-4 opacity-80" />
        <h2 className="text-[20px] font-bold text-on-surface mb-2">Analytics Dashboard</h2>
        <p className="text-[14px] text-[#757575] max-w-md">
          Detailed performance metrics and historical data will be displayed here. 
          Use this module to track your business growth and operational efficiency over time.
        </p>
      </div>
    </div>
  );
}
