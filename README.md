
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
  <strong>👨‍💻 Developer :</strong>
  <a href="https://github.com/shawon2210">github.com/shawon2210</a>
</p>
<p align="center">
  <strong>🚀 Deployed : </strong>
<a href="https://ship-now-gamma.vercel.app"> Vercel Live link</a>
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

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Setup

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

### Live Demo

The app is deployed on Vercel and accessible at:

👉 **[https://ship-now-gamma.vercel.app](https://ship-now-gamma.vercel.app)**

Demo credentials are pre-filled on the login page:
- **Email:** `john@shipnow.com`
- **Password:** `password123`

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

## ✅ Screen Status

| Screen | Route | Status | Notes |
|---|---|---|---|
| **Login** | `/login` | ✅ Complete | Split-screen layout, validation, demo auth, loading state |
| **Dashboard** | `/dashboard` | ✅ Complete | KPIs, 4 charts, alerts panel, mini-map, recent shipments table, activity log |
| **Analytics** | `/analytics` | ✅ Complete | Live auto-refresh (8s), 8 KPIs, 4 charts, carrier table, top routes, alert summary |
| **Shipments** | `/shipments` | ✅ Complete | Grid/table toggle, status tabs, advanced filters, sort, pagination, empty state |
| **Create Shipment** | `/shipments/new` | ✅ Complete | Two-column form, quantity stepper, freight type radio, validation, loading state |
| **Tracking** | `/tracking` | ✅ Complete | Leaflet map (3 layers), route polyline, custom markers, timeline, driver card, telemetry |
| **Warehouse** | `/warehouse` | ✅ Complete | KPIs, inventory chart, storage table, interactive map grid, capacity donut, package feed, activity log |
| **Fleets** | `/fleets` | ✅ Complete | Stat cards, vehicle table with fuel bars, search, status badges |
| **Drivers** | `/drivers` | ✅ Complete | Card grid, avatars, ratings, status filter, quick actions |
| **Invoices** | `/invoices` | ✅ Complete | KPI summary, table + detail panel, create/edit modals, toast notifications |
| **Calendar** | `/calendar` | ✅ Complete | Mini calendar, event feed, color-coded categories, day/week/month toggle |
| **Settings** | `/settings` | ✅ Complete | Profile view/edit, avatar upload via camera overlay, context persistence |

---

## ⚠️ Known Limitations & Assumptions

### Known Limitations

- **Mock data only** – All data is client-side mock data; there is no real backend or API connectivity.
- **Simulated analytics** – Charts regenerate random data every 8 seconds and are not connected to live business metrics.
- **No persistence layer** – Data resets on page refresh. `UserContext` is in-memory only and avatar uploads use data URLs.
- **Demo-only authentication** – Login validates against hardcoded demo credentials; there is no real auth, session, or RBAC.
- **Online map tiles required** – The tracking view uses OpenStreetMap/Esri tiles via CDN and does not support offline usage.
- **Non-persistent invoice modals** – Create/Edit modals update the UI only; all changes are lost on refresh due to lack of storage.

### Assumptions

- **Demo credentials** are sufficient for portfolio/demo purposes; a production version would integrate OAuth/JWT-based auth.
- **Future-dated shipments (2035)** are used purely for visual mock data and do not represent real schedules.
- **No real carrier integrations** – Tracking, fleet telemetry, and driver data are all static mocks; production would replace `mockData.ts` with live APIs.
- **Single-user context** – The app assumes a single user session and does not implement multi-tenant or team-level access.

---

## 📊 Executive Dashboard & KPIs

A multi-card logistics dashboard with personalized UX, global search, and rich data widgets:

- **Stat cards** – Active Shipments (1,284), Delivery Performance (94.3%), Revenue (82,450 USD) with trend deltas.
- **Shipment statistics** – Monthly bar chart with period selector for quick time-series insights.
- **Profit summary** – Grouped bar chart for Revenue vs Cost, including net profit badge overlay.
- **Shipment type distribution** – Donut chart showing modal split (Road 46%, Ocean 17%, Air 28%, Rail 9%).
- **Product categories** – Horizontal stacked bars with category-level percentage breakdowns.
- **Live tracking mini-map** – SVG route visualization with origin/destination pins, truck progress marker, courier info.
- **Alerts panel** – Delay detection (12) and categorized alert feed for exception monitoring.
- **Recent shipments table** – Sortable/searchable table with status badges for operational overview.
- **Shipping logs** – Timeline-style activity feed with icons and timestamps for auditability.

---

## 📈 Analytics (Live Data Simulation)

A self-refreshing analytics workspace that simulates live operational data every 8 seconds:

- **Auto-refresh experience** – Live indicator with pulsing green dot, last-updated timestamp, and manual Refresh control.
- **Eight KPI cards** – Active Shipments, Delivery Rate, Total Revenue, Avg Delivery Days, Fuel Efficiency, Fleet Utilization, Customer Rating, On-Time Pickups.
- **Revenue vs Cost** – Grouped bar chart with profit overlay, highlighting margin trends.
- **Delivery performance** – Gradient area chart (On-Time vs Late per weekday) for service reliability monitoring.
- **Live shipment volume** – Line chart of hourly shipment distribution for the current day.
- **Regional distribution** – Donut chart segmented by region (North America, Europe, Asia Pacific, Latin America, Middle East).
- **Alert summary** – High-level counts for Delayed Shipments, Address Issues, Customs Holds, Fleet Warnings.
- **Carrier performance table** – Ranked carriers with mini bars, average days, volume, and color-coded performance score.
- **Top routes** – Ranked route list with trend arrows, shipment counts, and average transit time.

---

## 📦 Shipments Management

Full CRUD shipments console with dual layouts optimized for operations teams:

- **Summary cards** – High-level counts (Active, Delivered, In Transit, Pending) with semantic color-coded icons.
- **Status tabs** – Segmented filters (All / Delivered / In Transit / Processing / Out for Delivery).
- **Advanced filtering** – Global search (ID, company, carrier, route) plus flyout filter (Freight Type, Carrier, Category) with active tag chips.
- **Sort controls** – 8 sorting options (date, company, progress, weight, etc.).
- **Dual view toggle** – Card grid view (route boxes, progress bars, carrier info) or full table view (9 columns).
- **Pagination** – Per-page selector (12 / 24 / 48) with numbered navigation.
- **Empty state UX** – Centered illustration, clear “Reset Filters” action for quick recovery.

---

## ✏️ Shipment Creator

End-to-end shipment creation workflow in a clean two-column form:

- **Sender / recipient panels** – Company, email, phone (with country flags), full address blocks.
- **Package details** – Item description, quantity stepper, declared value, weight, and dimensions (L/W/H).
- **Shipping configuration** – Freight type (Road/Rail/Ocean/Air), carrier dropdown, auto-generated ID, date picker.
- **Additional services** – Insurance, Temperature Control, Signature on Delivery, Fragile Item checkboxes.
- **Notification preferences** – Custom toggle for email/SMS alerts.
- **Robust UX states** – Required field validation and loading spinner on submit.

---

## 🗺️ Live Tracking (Bangladesh Focus)

Real-time-like shipment tracking with an interactive Leaflet map targeted at Bangladeshi routes:

- **Multi-layer map** – Streets (CartoDB Voyager), Satellite (Esri), and Traffic layers with segmented toggle.
- **Route polyline** – Purple dashed/solid polyline connecting origin → destination waypoints.
- **Custom markers** – Origin (green “A”), Destination (purple “B”), current position (truck icon) with click popups.
- **Status timeline** – Vertical timeline with connector lines and a highlighted current step.
- **Driver info card** – Glassmorphism card with avatar, vehicle, and “Contact Driver” phone button plus toast feedback.
- **Telemetry panel** – Speed (km/h), distance, progress percentage, and ETA countdown simulation.
- **Shipment selector** – Dropdown for switching between active routes.
- **Mobile responsiveness** – Map vs Timeline mode toggle optimized for smaller screens.

---

## 🏭 Warehouse Operations

Inventory command center for warehouse and storage management:

- **KPI row** – Total SKUs (285), Quantity on Hand (12,450 units), Capacity Usage (62.5%).
- **Inventory bar chart** – 6 product categories (Electronics, Apparel, Home & Kitchen, Beauty & Health, Automotive, Sports) with distinctive fills.
- **Storage table** – Filterable/sortable grid (Floor, Section, Category, Storage Used bar, Available Space).
- **Interactive floor map** – Floor 1/2/3 toggle with color-coded zone tiles (available vs full).
- **Capacity donut** – Dark-themed SVG donut visualizing 62.5% utilization with Loaded/Empty shelf counts.
- **Package status feed** – Filterable list (All / Expected / Received / Sent).
- **Activity log** – Timeline entries with colored icons, user identities, actions, timestamps.

---

## 🚛 Fleet Management

Fleet directory and health overview for vehicles:

- **Stat row** – Total Vehicles (124), Active on Route (86), In Maintenance (12), Available (26).
- **Vehicle table** – ID, model/type, status badge (Active / Maintenance / Alert / Rest), assigned driver, current location, fuel level bar (red when < 20%).
- **Search & filter** – Keyword search and filter controls.
- **Add vehicle CTA** – Clear “Add Vehicle” entry point with icon.

---

## 👨‍✈️ Driver Directory

Responsive driver roster optimized for operations and HR managers:

- **Profile cards** – Avatar (initials with purple background), name, ID, rating (gold stars), duty status, current route, phone.
- **Quick actions** – Message (primary), Details (secondary), additional options per card.
- **Status filter** – Dropdown to filter drivers by duty state (On Duty / Off Duty / On Break).
- **Add driver CTA** – Prominent “Add Driver” control with user-plus icon.

---

## 🧾 Invoicing & Billing

Complete invoice lifecycle management with contextual details:

- **KPI summary** – Paid (28,890 USD), Unpaid (16,700 USD), Pending (8,050 USD), Overdue (22,110 USD).
- **Invoice table** – Checkbox selection, sortable columns (ID, Company, Date, Amount, Status).
- **Detail side panel** – Bill From / Bill To sections, Package Summary sub-table, Subtotal/Tax/Fee/Total, notes.
- **Action set** – Edit, Hold/Release toggle, Send Invoice (with loading state for async feel).
- **Toast notifications** – Slide-down success/warn/info toasts with auto-dismiss.
- **Modal dialogs** – New/Edit invoice with animated scale-up and backdrop blur.

---

## 📅 Logistics Calendar

Scheduling hub for dispatches, deliveries, and maintenance:

- **Mini calendar** – Monthly grid with day headers, current date highlight, and navigation arrows.
- **Event checklist** – Three categories with colored checkboxes (Dispatches: purple, Deliveries: green, Maintenance: amber).
- **Event feed** – Color-coded time bars, duration, location, and status badges (Scheduled / High Priority / On Schedule).
- **View modes** – Day / Week / Month segmented toggle.

---

## 👤 User Profile & Settings

Global user preferences powered by React Context:

- **Profile card** – Avatar with camera overlay, name, role, email.
- **Inline edit mode** – Editable Name, Role, Email with Save/Cancel UX.
- **Photo upload** – File picker reads image as data URL and updates `UserContext` in real time.
- **Session-style persistence** – All changes flow through `UserContext` and propagate to sidebar, dashboard greeting, etc.

---

## 🔐 Authentication (Demo-Only)

Modern split-screen login experience showcasing UI/UX without real auth:

- **Brand panel** – Purple gradient background, hero imagery, floating photo card.
- **Login form** – Email/password with show/hide toggle, Remember Me, Forgot Password link.
- **Auto-fill demo** – Pre-populated credentials (`john@shipnow.com` / `password123`) for instant access.
- **Loading state** – Spinner with “Authenticating…” text to simulate network latency.
- **Client-side validation** – Email must contain “@”; password length ≥ 4 characters, with inline error messages.

---

## 🎨 UI/UX & Technical Stack Highlights

Design system and front-end tooling that power ShipNow:

- **Design language** – Purple accent (#856DF3), dark grey typography, consistent 12px-radius cards, semantic status colors (green/red/amber).
- **Charts** – Built with Recharts (Bar, Area, Line, Pie/Donut), with custom tooltips and curated color palettes.
- **Mapping** – Leaflet integration with 3 tile layers, custom `divIcon` markers, route polylines, and responsive resize handling.
- **Iconography** – Lucide React icons used consistently across the interface.
- **Animations** – `animate-pulse` for live indicators, `animate-scale-up` for modals, `animate-slide-down` for toasts, `transition-colors` across interactive elements.
- **Responsive layout** – Mobile-first breakpoints, collapsible sidebar drawer with backdrop, flexible grid/table toggles, adaptive card layouts.
- **Data simulation** – Analytics auto-refresh every 8 seconds, loading states for async actions, and empty states with clear recovery actions.
## 👨‍💻 About the Developer

**Shawon** — Full-stack developer passionate about building polished, production-ready web applications.

- **GitHub:** [shawon2210](https://github.com/shawon2210)
- **Live Demo:** [ship-now-gamma.vercel.app](https://ship-now-gamma.vercel.app)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/shawon2210">Shawon</a>
</p>
