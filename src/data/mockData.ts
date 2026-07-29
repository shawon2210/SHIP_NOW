export const user = {
  name: "Shawon",
  role: "Admin",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRVQVEt93H96ZZ4gu9zsJcy2IAsI6svFknTvtYlMb3XQzAnY14sATkArolnWAsj-BAz0NR6u3pzEO__Js4h9Smhkaffkrh9APKf0biw1hL-OwbaTMsxORPcYROWXTh8TST1gWNtetIyuG_NRaB9aIoQU60_4x6rZ78pDkdvJl1HKt0q5KFKXzZZOuBvxlkoMJ-lVa7pqUu7PD1UK4uP6CciE_6m9D8kqTpyCiiulRrCYdEDcRdxxa3",
};

export const dashboardMetrics = {
  totalShipments: { value: "1,284", change: "+12% vs last month", isPositive: true },
  pending: { value: "92", change: "4.5% late threshold", isPositive: false },
  inTransit: { value: "438", change: "Avg. 2.4 days remaining" },
  delivered: { value: "754", change: "98.2% on-time rate", isPositive: true },
};

export const recentActivity = [
  {
    id: 1,
    title: "Shipment #TR-1029 Delivered",
    desc: "Signature received: Robert J.",
    time: "14 mins ago",
    status: "success",
  },
  {
    id: 2,
    title: "Fleet #44 Maintenance Started",
    desc: "Scheduled engine diagnostic",
    time: "1 hour ago",
    status: "warning",
  },
  {
    id: 3,
    title: "New Route Optimized: EU-92",
    desc: "Reduced estimated transit by 4.5h",
    time: "3 hours ago",
    status: "info",
  },
];

export const shipments = [
  { id: "#SN-98241", date: "Oct 24, 2024", sender: "Global Tech Corp", senderLocation: "San Francisco, CA", recipient: "Apex Distributors", recipientLocation: "Austin, TX", status: "In Transit", type: "Express Air", cost: "$4,250.00" },
  { id: "#SN-98112", date: "Oct 22, 2024", sender: "Zenith Logistics", senderLocation: "Chicago, IL", recipient: "Retail Pro Ltd", recipientLocation: "Miami, FL", status: "Completed", type: "Freight Rail", cost: "$12,800.00" },
  { id: "#SN-97905", date: "Oct 21, 2024", sender: "Metro Supplies", senderLocation: "Seattle, WA", recipient: "North Coast Mfg", recipientLocation: "Portland, OR", status: "Pending", type: "LTL Trucking", cost: "$1,120.00" },
  { id: "#SN-97880", date: "Oct 19, 2024", sender: "Oceanic Co.", senderLocation: "Long Beach, CA", recipient: "EuroLink Trade", recipientLocation: "Rotterdam, NL", status: "In Transit", type: "Sea Freight", cost: "$45,000.00" },
  { id: "#SN-97812", date: "Oct 18, 2024", sender: "BrightStar Elec.", senderLocation: "Denver, CO", recipient: "Valley Systems", recipientLocation: "San Jose, CA", status: "Cancelled", type: "LTL Trucking", cost: "$850.00" },
  // Adding more to make it paginatable
  { id: "#SH-9012", date: "Oct 24, 2024", sender: "Amazon Logistics", senderLocation: "Seattle, WA", recipient: "Customer A", recipientLocation: "Chicago, IL", status: "In Transit", type: "Express Air", cost: "$1,250.00" },
  { id: "#SH-8845", date: "Oct 22, 2024", sender: "Global Steel Corp", senderLocation: "Pittsburgh, PA", recipient: "Customer B", recipientLocation: "Houston, TX", status: "Completed", type: "Freight Rail", cost: "$8,500.00" },
  { id: "#SH-9104", date: "Oct 26, 2024", sender: "NextTech Solutions", senderLocation: "Austin, TX", recipient: "Customer C", recipientLocation: "Seattle, WA", status: "Pending", type: "LTL Trucking", cost: "$3,400.00" },
  { id: "#SH-9221", date: "Oct 23, 2024", sender: "Whole Foods Market", senderLocation: "Austin, TX", recipient: "Customer D", recipientLocation: "Austin, TX", status: "Cancelled", type: "Refrigerated", cost: "$5,100.00" },
  { id: "#SHP-82910-NY", date: "Oct 24, 2023", sender: "Industrial Turbines", senderLocation: "Port of Rotterdam, NL", recipient: "Port of New Jersey, USA", recipientLocation: "USA", status: "In Transit", type: "Sea Freight", cost: "$14,000.00" },
  { id: "#SHP-91283-TK", date: "Oct 12, 2023", sender: "Consumer Electronics", senderLocation: "Shenzhen, CN", recipient: "Tokyo Narita, JP", recipientLocation: "JP", status: "Completed", type: "Air Freight", cost: "$2,300.00" },
  { id: "#SHP-55231-LD", date: "Oct 26, 2023", sender: "Medical Supplies", senderLocation: "Berlin, DE", recipient: "London Heathrow, UK", recipientLocation: "UK", status: "Pending", type: "Road Freight", cost: "$800.00" },
];

export const invoices = [
  { id: "INV-2024-8842", company: "Global Logistics Corp", date: "Oct 24, 2024", amount: "$4,250.00", status: "PAID", dueDate: "Nov 07, 2024", poNumber: "PO-882-902", items: [
      { desc: "Full Truckload (FTL) Freight", details: "Route: Chicago, IL to Los Angeles, CA", qty: 1, rate: 3500.00 },
      { desc: "Fuel Surcharge (FSC)", details: "Calculated at current market rates", qty: 1, rate: 450.00 },
      { desc: "Priority Loading Fee", details: "Express handling at origin terminal", qty: 1, rate: 200.00 },
      { desc: "Pallet Disposal", details: "Removal and recycling of wood dunnage", qty: 20, rate: 5.00 },
  ]},
  { id: "INV-2024-8841", company: "North Star Retail", date: "Oct 22, 2024", amount: "$1,120.45", status: "PENDING", dueDate: "Nov 05, 2024", poNumber: "PO-123-456", items: [
      { desc: "Less Than Truckload (LTL)", details: "Route: Miami to Atlanta", qty: 1, rate: 1120.45 },
  ]},
  { id: "INV-2024-8839", company: "FreightMasters Ltd", date: "Oct 18, 2024", amount: "$8,900.00", status: "OVERDUE", dueDate: "Nov 01, 2024", poNumber: "PO-789-012", items: [
      { desc: "Sea Freight (FCL)", details: "Route: Shanghai to Los Angeles", qty: 1, rate: 8900.00 },
  ]},
  { id: "INV-2024-8835", company: "TechPort Solutions", date: "Oct 15, 2024", amount: "$2,450.00", status: "PAID", dueDate: "Oct 29, 2024", poNumber: "PO-345-678", items: [
      { desc: "Air Freight", details: "Route: London to New York", qty: 1, rate: 2450.00 },
  ]},
  { id: "INV-2024-8832", company: "Apex Manufacturing", date: "Oct 12, 2024", amount: "$560.00", status: "PAID", dueDate: "Oct 26, 2024", poNumber: "PO-901-234", items: [
      { desc: "Local Delivery", details: "Route: San Jose to San Francisco", qty: 1, rate: 560.00 },
  ]},
];

export const warehouseInventory = [
  { zone: "A-1-12", sku: "WH-PRO-001", category: "Electronics", stock: "1,420", capacity: 75, status: "OPTIMAL" },
  { zone: "B-4-02", sku: "WH-XLS-442", category: "Apparel", stock: "2,880", capacity: 95, status: "REORDER" },
  { zone: "C-2-08", sku: "WH-LGT-991", category: "Home Care", stock: "450", capacity: 25, status: "LOW STOCK" },
  { zone: "E-1-01", sku: "WH-MED-009", category: "Healthcare", stock: "8,200", capacity: 60, status: "OPTIMAL" },
];

export const warehouseActivity = [
  { title: "Dock 04 - Cargo Inbound", desc: "Unit TRK-8822 from Chicago Hub | 08:42 AM", status: "info" },
  { title: "Shelf G-14 Replenished", desc: "32x Medical Supplies | 08:15 AM", status: "success" },
  { title: "Equipment Alert", desc: "Forklift #12 requires battery swap | 07:55 AM", status: "warning" },
  { title: "Shift Transition", desc: "Shift Bravo on duty (22 members) | 07:00 AM", status: "info" },
];

export const warehouseKpis = [
  { label: 'Total SKU', value: '285', unit: '', badge: '+2.58%' },
  { label: 'Quantity on Hand', value: '12,450', unit: 'units', badge: '+4.37%' },
  { label: 'Capacity Usage', value: '62.5%', unit: 'Full', badge: '+1.54%' },
];

export const warehouseInventoryBars = [
  { category: 'Electronics', pct: 25, count: 2500, color: '#856DF3', striped: false },
  { category: 'Apparel', pct: 20, count: 2000, color: '#856DF3', striped: true },
  { category: 'Home & Kitchen', pct: 18, count: 1800, color: '#333333', striped: false },
  { category: 'Beauty & Health', pct: 15, count: 1500, color: '#333333', striped: true },
  { category: 'Automotive Parts', pct: 12, count: 1200, color: '#757575', striped: false },
  { category: 'Sports Equipment', pct: 10, count: 1000, color: '#757575', striped: true },
];

export const warehouseStorageRows = [
  { floor: 1, section: 'A1 – A10', category: 'Electronics', usedPct: 80, available: 20 },
  { floor: 2, section: 'B1 – B10', category: 'Apparel', usedPct: 60, available: 40 },
  { floor: 1, section: 'C1 – C10', category: 'Home & Kitchen', usedPct: 90, available: 10 },
  { floor: 3, section: 'D1 – D10', category: 'Automotive Parts', usedPct: 50, available: 50 },
  { floor: 2, section: 'E1 – E10', category: 'Beauty & Health', usedPct: 70, available: 30 },
];

export const warehouseMapTiles = [
  { id: 'electronics', title: 'Electronics', codes: ['A1','A2','A3'], available: 20, fullCodes: ['A2'] },
  { id: 'home', title: 'Home & Kitchen', codes: ['C1','C2','C3'], available: 10, fullCodes: ['C1','C3'] },
  { id: 'auto', title: 'Automotive Parts', codes: ['D1','D2','D3'], available: 50, fullCodes: [] },
  { id: 'sports', title: 'Sports Equipment', codes: ['F1','F2','F3'], available: 45, fullCodes: ['F2'] },
  { id: 'apparel', title: 'Apparel', codes: ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'], available: 20, fullCodes: ['B3','B6','B9'], wide: true },
  { id: 'beauty', title: 'Beauty & Health', codes: ['E1','E2','E3','E4'], available: 30, fullCodes: ['E2'] },
];

export const warehousePackages = [
  { id: 'PKG-HK77420', status: 'Sent', timestamp: 'March 20, 2035 – 05:30 PM' },
  { id: 'PKG-A50812', status: 'Received', timestamp: 'March 21, 2035 – 01:45 PM' },
  { id: 'PKG-E10293', status: 'Expected', timestamp: 'March 22, 2035 – 09:00 AM' },
];

export const warehouseActivityLog = [
  { icon: 'check', bg: '#333333', name: 'Leo Fernandez', text: ' confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)', time: '01:45 PM' },
  { icon: 'plus', bg: '#856DF3', name: 'Ava Martinez', text: ' added 25 units of Smart Router Kit to Section A1 (Electronics)', time: '09:15 AM' },
  { icon: 'truck', bg: '#333333', name: 'Oscar Liem', text: ' dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)', time: '05:30 PM' },
  { icon: 'file', bg: '#856DF3', name: 'Dina Choi', text: ' created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)', time: '04:10 PM' },
];
