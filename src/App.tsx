/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Shipments from './pages/Shipments';
import CreateShipment from './pages/CreateShipment';
import Invoices from './pages/Invoices';
import Warehouse from './pages/Warehouse';
import Calendar from './pages/Calendar';
import Tracking from './pages/Tracking';
import Fleets from './pages/Fleets';
import Drivers from './pages/Drivers';
import Analytics from './pages/Analytics';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* App Shell Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/shipments/new" element={<CreateShipment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/fleets" element={<Fleets />} />
          <Route path="/drivers" element={<Drivers />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
