import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GroceriesPage } from './pages/GroceriesPage';

import { HomePage } from './pages/HomePage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { SalutePage } from './pages/SalutePage';
import { LodgingServicesPage } from './pages/LodgingServicesPage';
import { WineriesPage } from './pages/WineriesPage';
import { FoodServicesPage } from './pages/FoodServicesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          <Route path="/wineries" element={<WineriesPage />} />
          <Route path="/food-services" element={<FoodServicesPage />} />
          <Route path="/lodging-services" element={<LodgingServicesPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/salute" element={<SalutePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
