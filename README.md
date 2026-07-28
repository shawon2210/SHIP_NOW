
# Shipment Management Platform

A comprehensive web application for end-to-end shipment tracking, management, and logistics analytics, built with React and integrated with Google AI capabilities.

## Features

### Core Management
- **Dashboard Analytics** - Real-time shipment metrics, performance indicators, and key KPIs
- **Shipments Management** - View, filter, and manage all shipments with detailed tracking
- **Create Shipments** - Form-based shipment creation with validation
- **Invoice Management** - Track and manage logistics invoices
- **Warehouse Inventory** - Real-time stock monitoring and zone management

### Specialized Modules
- **Fleet Management** - Vehicle tracking and maintenance scheduling
- **Driver Management** - Driver profiles and assignment management
- **Calendar Integration** - Schedule viewing and event management
- **Real-time Tracking** - Live shipment tracking with status updates

### AI-Powered Insights
- **Analytics Dashboard** - AI-enhanced performance analytics and trend identification
- **Predictive Insights** - Smart forecasting for logistics optimization
- **Automated Processing** - AI-powered data analysis and reporting

## Architecture

The application is structured with:

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx        # App shell with sidebar and header
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   └── Header.tsx        # Top navigation bar
├── pages/
│   ├── Analytics.tsx         # AI-powered analytics dashboard
│   ├── Calendar.tsx          # Schedule and calendar view
│   ├── CreateShipment.tsx    # Shipment creation form
│   ├── Dashboard.tsx         # Main overview with metrics
│   ├── Drivers.tsx           # Driver management
│   ├── Fleets.tsx            # Vehicle fleet management
│   ├── Invoices.tsx          # Invoice tracking
│   ├── Login.tsx             # Authentication
│   ├── Shipments.tsx         # Shipment list and details
│   ├── Tracking.tsx          # Real-time tracking view
│   └── Warehouse.tsx         # Warehouse inventory management
├── data/
│   └── mockData.ts           # Mock data for development
├── App.tsx                   # Main application with routing
└── index.css                # Global styles
```

## Technology Stack

### Frontend
- **React 19** - Component-based UI architecture
- **TypeScript** - Type safety and enhanced developer experience
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling framework
- **Vite** - Fast development server and build tool
- **motion** - Smooth animations and transitions
- **recharts** - Data visualization components

### Backend Integration
- **Google Gemini AI** - AI-powered analytics and insights
- **Express** - HTTP server (if backend present)
- **Environment Variables** - API key management via dotenv

### Dev Dependencies
- **TypeScript** - Type checking
- **Autoprefixer** - CSS vendor prefix automation
- **ESBuild** - Fast build tool
- **Vite** - Development server

## Key Components

### Layout
- **Layout.tsx** - Main application shell with sidebar navigation and header
- **Sidebar.tsx** - Collapsible navigation with route links
- **Header.tsx** - Top navigation with user profile and actions

### Dashboard
- **Analytics.tsx** - AI-enhanced analytics with charts and metrics
- **Dashboard.tsx** - Overview with key performance indicators and widgets
- **Metrics Cards** - Real-time data display with trend indicators

### Data Management
- **Shipments.tsx** - CRUD operations for shipments with pagination
- **mockData.ts** - Comprehensive mock dataset for development

## Development

### Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY

# Start development server
npm run dev
# Access at: http://localhost:3000
```

### Building
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts
- **dev**: `vite --port=3000 --host=0.0.0.0` - Development server
- **build**: `vite build` - Production build
- **preview**: `vite preview` - Preview production build
- **clean**: `rm -rf dist server.js` - Clean build artifacts
- **lint**: `tsc --noEmit` - TypeScript type checking

## Route Structure

```
┌─────────────────────────────────────────────────────────┐
│  /                → Login Page                          │
├─────────────────────────────────────────────────────────┤
│  /dashboard        → Dashboard Overview                  │
│  /shipments        → Shipments List                       │
│  /shipments/new    → Create New Shipment                 │
│  /analytics        → AI Analytics                        │
│  /invoices         → Invoice Management                  │
│  /warehouse        → Warehouse Inventory                 │
│  /calendar         → Schedule & Events                   │
│  /tracking         → Real-time Tracking                  │
│  /fleets           → Fleet Management                    │
│  /drivers          → Driver Management                   │
└─────────────────────────────────────────────────────────┘
```

## Styling

The application uses Tailwind CSS with custom design tokens for:
- **Color Scheme** - Professional blue and green palette for status indicators
- **Typography** - Clean, modern fonts (Figtree and Nunito Sans)
- **Layout** - Responsive grid system with sidebar navigation
- **Components** - Custom widgets, cards, and interactive elements

## AI Integration

The platform leverages Google Gemini AI for:
- **Analytics Insights** - Automated pattern recognition and trend analysis
- **Performance Forecasting** - Predictive modeling for logistics optimization
- **Data Processing** - AI-powered data transformation and enrichment
- **Smart Suggestions** - Intelligent recommendations for route optimization

## Deployment Considerations

### File Watching
- HMR (Hot Module Replacement) is controlled by the `DISABLE_HMR` environment variable
- File watching is disabled in production to prevent flickering during agent edits
- Development uses file watching for real-time updates

### Environment Variables
- `DISABLE_HMR` - Controls HMR and file watching behavior
- `GEMINI_API_KEY` - Required for AI integration
- Port configuration via Vite environment

## License
[Add appropriate license]

---

