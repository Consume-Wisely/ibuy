import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GroceriesPage } from './pages/GroceriesPage';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WineriesPage } from './pages/WineriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          <Route path="/wineries" element={<WineriesPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
