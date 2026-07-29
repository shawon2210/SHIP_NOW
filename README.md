
<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6" />
  
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
</div>

<h1 align="center">🚚 SHIP-NOW</h1>
<h3 align="center">Enterprise-Grade Logistics &amp; Shipment Management Platform</h3>

<p align="center">
  A full-featured logistics command center built with <strong>React 19</strong> &amp; <strong>TypeScript</strong> — 
  designed for real-time shipment tracking, fleet management, analytics, and warehouse inventory control.
</p>

<p align="center">
  <strong>👨‍💻 Developer:</strong>
  <a href="https://github.com/shawon2210">github.com/shawon2210</a>
</p>

---

## ✨ At a Glance

| Capability | Description |
|---|---|
| **Dashboard & KPIs** | Real-time metrics, performance indicators, revenue tracking |
| **Shipment Lifecycle** | Create, track, filter, and manage shipments end-to-end |
| **Analytics** | Trend detection, reporting, and performance visualization |
| **Warehouse Ops** | Inventory monitoring, zone management, stock alerts |
| **Fleet & Drivers** | Vehicle tracking, maintenance scheduling, driver profiles |
| **Invoicing** | Logistics invoice management with status tracking |
| **Responsive UI** | Fully adaptive — desktop to mobile, dark sidebar + clean layout |

---

## 🏗️ Architecture

```
src/
├── components/
│   ├── layout/        # App shell: Sidebar, Header, global Footer
│   └── warehouse/     # Warehouse-specific widgets
├── pages/             # 11 feature pages (Dashboard → Login)
├── context/           # React Context providers (UserContext)
├── data/              # Mock data layer for rapid prototyping
├── App.tsx            # Route definitions + providers
└── index.css          # Tailwind base + custom tokens
```

---

## 🛠️ Technology Stack

**Frontend** · React 19 · TypeScript · Tailwind CSS 4 · Vite 6 · React Router · Recharts · Leaflet · Motion · Lucide React

**Infra** · Vercel (automatic CI/CD via GitHub)

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/shawon2210/SHIP_NOW.git
cd SHIP_NOW

# 2. Install
npm install

# 3. Dev server (http://localhost:3000)
npm run dev

# 4. Production build
npm run build
npm run preview
```

---

## 🧭 Routes

| Path | Page |
|---|---|
| `/` | Login / Authentication |
| `/dashboard` | Analytics overview & KPIs |
| `/shipments` | Full shipment list with filtering |
| `/shipments/new` | Create a new shipment |
| `/analytics` | AI-driven insights & charts |
| `/invoices` | Invoice management |
| `/warehouse` | Inventory & zone control |
| `/calendar` | Schedule & event management |
| `/tracking` | Real-time GPS-style tracking |
| `/fleets` | Fleet vehicle management |
| `/drivers` | Driver profiles & assignments |
| `/settings` | User profile & preferences |

---

## 📦 Key Features

### 📊 Dashboard & KPIs
Multi-card metrics dashboard with personalized greeting, global search, and five data widgets:
- **Stat Cards** — Active Shipments (1,284), Delivery Performance (94.3%), Revenue ($82,450) with trend deltas
- **Shipment Statistics** — Bar chart (monthly breakdown) with period selector
- **Profit Summary** — Grouped bar chart comparing Revenue vs Cost with net profit badge
- **Shipment Type Distribution** — Donut chart (Road 46%, Ocean 17%, Air 28%, Rail 9%)
- **Product Categories** — Horizontal stacked bars with percentage breakdowns
- **Live Tracking Mini-Map** — SVG route map with origin/destination pins, progress bar with truck marker, courier info
- **Alerts Panel** — Delay detection count (12) with categorized alert feed
- **Recent Shipments Table** — Sortable/searchable table with status badges
- **Shipping Logs** — Timeline-style activity feed with icons and timestamps

---

### 📈 Analytics (Live Data Simulation)
Self-refreshing analytics dashboard that regenerates data every 8 seconds:
- **Auto-Refresh** — Live indicator with pulsing green dot + last-updated timestamp + manual Refresh button
- **8 KPI Cards** — Active Shipments, Delivery Rate, Total Revenue, Avg Delivery Days, Fuel Efficiency, Fleet Utilization, Customer Rating, On-Time Pickups
- **Revenue vs Cost** — Grouped bar chart with profit overlay badge
- **Delivery Performance** — Gradient-filled area chart (On-Time green vs Late red per weekday)
- **Live Shipment Volume** — Real-time line chart of hourly distribution today
- **Regional Distribution** — Donut chart (North America, Europe, Asia Pacific, Latin America, Middle East)
- **Alert Summary** — Delayed Shipments, Address Issues, Customs Holds, Fleet Warnings with counts
- **Carrier Performance Table** — 5 carriers ranked by delivery rate (with mini bar), avg days, volume, color-coded score
- **Top Routes** — 5 ranked routes with trend arrows, shipment counts, avg transit time

---

### 📦 Shipments Management
Full CRUD with dual-view layout:
- **Summary Cards** — Active, Delivered, In Transit, Pending counts with color-coded icons
- **Status Tabs** — Segmented pill filters (All / Delivered / In Transit / Processing / Out for Delivery)
- **Advanced Filtering** — Search across ID/company/carrier/route + flyout filter (Freight Type, Carrier, Category) with active tag chips
- **Sort Controls** — 8 sort options (date, company, progress, weight)
- **Dual View Toggle** — Grid cards (with route boxes, progress bars, carrier info) or full Table view (9 columns)
- **Pagination** — Per-page selector (12/24/48) with numbered page navigation
- **Empty State** — Centered illustration with "Reset Filters" action

---

### ✏️ Shipment Creator
Two-column form for end-to-end shipment creation:
- **Sender / Recipient Panels** — Company, email, phone (with country flag), addresses
- **Package Details** — Item description, quantity stepper, value, weight, dimensions (L/W/H)
- **Shipping Configuration** — Freight type (radio: Road/Rail/Ocean/Air), carrier dropdown, auto-generated ID, date picker
- **Additional Services** — Insurance, Temperature Control, Signature on Delivery, Fragile Item checkboxes
- **Notifications Toggle** — Custom toggle switch for email/SMS alerts
- **Validation & Loading States** — Required field validation, loading spinner on submit

---

### 🗺️ Live Tracking (Bangladesh)
Real-time shipment tracking with interactive Leaflet map:
- **Multi-Layer Map** — Streets (CartoDB Voyager) / Satellite (Esri) / Traffic layers with segmented toggle
- **Route Polyline** — Purple dashed/solid line connecting origin → destination waypoints
- **Custom Markers** — Origin (green "A"), Destination (purple "B"), Current position (truck emoji) with click popups
- **Status Timeline** — Vertical timeline with connector lines, current step highlighted with purple ring
- **Driver Info Card** — Glass-overlay card with driver avatar, vehicle, "Contact Driver" phone button with toast
- **Telemetry Panel** — Real-time speed (km/h), distance, progress % with ETA countdown
- **Shipment Selector** — Dropdown to switch between active tracking routes
- **Mobile Responsive** — Map View / Timeline toggle on mobile

---

### 🏭 Warehouse Operations
Multi-card inventory command center:
- **KPI Row** — Total SKU (285), Quantity on Hand (12,450 units), Capacity Usage (62.5%)
- **Inventory Bar Chart** — 6 product categories (Electronics, Apparel, Home & Kitchen, Beauty & Health, Automotive, Sports) with striped fills
- **Storage Table** — Filterable/sortable grid: Floor, Section, Category, Storage Used (bar), Available Space
- **Interactive Map Grid** — Floor 1/2/3 toggle with color-coded zone tiles (available/full)
- **Capacity Donut** — Dark-themed SVG donut (62.5%) with Loaded/Empty shelf counts
- **Package Status** — Filterable package feed (All / Expected / Received / Sent)
- **Activity Log** — Timeline entries with colored icon circles, user names, actions, timestamps

---

### 🚛 Fleet Management
Vehicle directory with operational status:
- **Stat Row** — Total Vehicles (124), Active on Route (86), In Maintenance (12), Available (26)
- **Vehicle Table** — ID, Model/Type, Status (Active/Maintenance/Alert/Rest badges), Assigned Driver, Location, Fuel Level (color-coded bar <20% red)
- **Search & Filter** — Keyword search with filter button
- **Add Vehicle** — CTA with Plus icon

---

### 👨‍✈️ Driver Directory
Responsive card grid of driver profiles:
- **Profile Cards** — Avatar (initials, purple bg), name, ID, rating (gold stars), status (On Duty / Off Duty / On Break), current route, phone
- **Quick Actions** — Message (purple), Details (grey), More options per card
- **Status Filter** — Dropdown to filter by duty status
- **Add Driver** — CTA with UserPlus icon

---

### 🧾 Invoicing & Billing
Full invoice lifecycle with detail panel:
- **KPI Summary** — Paid ($28,890), Unpaid ($16,700), Pending ($8,050), Overdue ($22,110)
- **Invoice Table** — Checkbox selection, sortable columns (ID, Company, Date, Amount, Status)
- **Detail Side Panel** — Bill From / Bill To addresses, Package Summary sub-table, Subtotal/Tax/Fee/Total, Notes
- **Action Buttons** — Edit, Hold/Release toggle, Send Invoice (with loading state)
- **Toast Notifications** — Slide-down toast (success/warn/info) with auto-dismiss
- **Modal Dialogs** — New Invoice / Edit Invoice with animated scale-up + backdrop blur

---

### 📅 Logistics Calendar
Schedule management with event filtering:
- **Mini Calendar** — Monthly grid with day headers, current-date highlight, navigation arrows
- **Event Checklist** — 3 categories with color checkboxes (Dispatches purple, Deliveries green, Maintenance amber)
- **Event Feed** — Color-coded time bars, duration, location, status badges (Scheduled / High Priority / On Schedule)
- **View Switcher** — Day / Week / Month segmented toggle

---

### 👤 User Profile & Settings
Persistent user preferences via React Context:
- **Profile Card** — Avatar with camera overlay upload, name, role, email
- **Edit Mode** — Inline editing for Name, Role, Email with save/cancel
- **Photo Upload** — File picker reads image as data URL, updates context immediately
- **Session Persistence** — All changes flow through `UserContext` and reflect globally (sidebar, dashboard greeting)

---

### 🔐 Authentication (Demo)
Split-screen login flow with client-side validation:
- **Brand Panel** — Purple gradient panel with hero imagery, floating photo card
- **Login Form** — Email/password with show/hide toggle, Remember Me, Forgot Password
- **Auto-Fill** — Demo credentials pre-populated (`john@shipnow.com` / `password123`)
- **Loading State** — Spinner animation with "Authenticating..." text
- **Validation** — Email must contain "@", password ≥ 4 characters with inline error messages

---

### 🎨 UI/UX Highlights
- **Design System** — Purple (#856DF3) accent, dark grey text, consistent 12px radius cards, semantic status colors (green/red/amber)
- **Charts** — Recharts: Bar, Area, Line, Pie (donut) — all with custom tooltips and color palettes
- **Map** — Leaflet with 3 tile layers, custom divIcon markers, route polylines, responsive resize handling
- **Icons** — Lucide React throughout
- **Animations** — `animate-pulse` on live indicators, `animate-scale-up` on modals, `animate-slide-down` on toasts, `transition-colors` on all interactive elements
- **Responsive** — Mobile-first breakpoints, collapsible sidebar drawer with backdrop, grid/table view toggle, adaptive card layouts
- **Data Simulation** — Analytics auto-refresh every 8s, loading states on all async actions, empty states with recovery actions

---

## 👨‍💻 About the Developer

**Shawon** — Full-stack developer passionate about building polished, production-ready web applications.

- **GitHub:** [shawon2210](https://github.com/shawon2210)
- **Live Demo:** [ship-now-gamma.vercel.app](https://ship-now-gamma.vercel.app)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/shawon2210">Shawon</a>
</p>
