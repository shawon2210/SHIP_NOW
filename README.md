
<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Gemini_AI-8E75FF?logo=googlegemini&logoColor=white" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
</div>

<h1 align="center">🚚 SHIP-NOW</h1>
<h3 align="center">Enterprise-Grade Logistics &amp; Shipment Management Platform</h3>

<p align="center">
  A full-featured, AI-powered logistics command center built with <strong>React 19</strong> &amp; <strong>TypeScript</strong> — 
  designed for real-time shipment tracking, fleet management, predictive analytics, and warehouse inventory control.
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
| **AI-Powered Analytics** | Gemini-driven forecasting, trend detection, and smart insights |
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

**Frontend** · React 19 · TypeScript · Tailwind CSS 4 · Vite 6 · React Router · Recharts · Motion

**AI** · Google Gemini AI (analytics, forecasting, natural language insights)

**Infra** · Vercel (automatic CI/CD via GitHub)

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/shawon2210/SHIP_NOW.git
cd SHIP_NOW

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Add your GEMINI_API_KEY in .env.local

# 4. Dev server (http://localhost:3000)
npm run dev

# 5. Production build
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

### 📊 Real-Time Dashboard
Live KPIs — total shipments, revenue, pending orders, delivery success rates — all in a single, glanceable view with trend indicators.

### 🤖 AI Analytics (Gemini)
Automated pattern recognition, performance forecasting, and anomaly detection — turn raw logistics data into actionable intelligence.

### 🧭 Shipment Tracking
Real-time status updates, progress bars, carrier identification, and route visualization with map-based tracking.

### 🏭 Warehouse Management
Monitor stock levels, manage zones, track inventory movements, and receive low-stock alerts — all from one screen.

### 🚛 Fleet & Driver Management
Vehicle assignment, maintenance scheduling, driver duty logs, and performance metrics.

---

## 👨‍💻 About the Developer

**Shawon** — Full-stack developer passionate about building polished, production-ready web applications.

- **GitHub:** [shawon2210](https://github.com/shawon2210)
- **Live Demo:** [ship-now-gamma.vercel.app](https://ship-now-gamma.vercel.app)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/shawon2210">Shawon</a>
</p>
