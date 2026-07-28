export const user = {
  name: "Marcus Vance",
  role: "Senior Manager",
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
