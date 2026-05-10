import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleApprovalPage } from './pages/SingleApprovalPage';

import { HomePage } from './pages/HomePage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { SalutePage } from './pages/SalutePage';
import { OpenSaturdayPage } from './pages/OpenSaturdayPage';
import { WineriesPage } from './pages/WineriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-approval" element={<SingleApprovalPage />} />
          <Route path="/wineries" element={<WineriesPage />} />
          <Route path="/open-saturday" element={<OpenSaturdayPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/salute" element={<SalutePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
